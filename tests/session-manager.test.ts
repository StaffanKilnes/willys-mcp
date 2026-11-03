import { describe, expect, it } from "vitest";
import {
  SessionManager,
  type SessionManagerDeps,
  type StoredSession,
} from "../lib/mcp-session-manager";

const creds = { username: "u", password: "p" };

function deferred<T>() {
  let resolve!: (v: T) => void;
  const promise = new Promise<T>((r) => {
    resolve = r;
  });
  return { promise, resolve };
}

function makeDeps(
  overrides: Partial<SessionManagerDeps> & { stored?: StoredSession | null },
) {
  const calls = { login: 0, cleared: [] as string[] };
  let n = 0;
  const deps: SessionManagerDeps = {
    latestSession: () => overrides.stored ?? null,
    validate: async () => true,
    login: async () => {
      calls.login++;
      return { success: true };
    },
    clearSession: (id) => {
      calls.cleared.push(id);
    },
    newSessionId: () => `s${++n}`,
    now: () => 1000,
    ...overrides,
  };
  return { deps, calls };
}

describe("SessionManager", () => {
  it("returns the stored session at once when it still validates", async () => {
    const { deps, calls } = makeDeps({
      stored: { sessionId: "old", cookies: "c", createdAt: 1 },
    });
    const m = new SessionManager(deps);
    expect(await m.getOrStart(creds)).toEqual({
      status: "ready",
      sessionId: "old",
    });
    expect(calls.login).toBe(0);
  });

  it("clears a dead session and starts a background login", async () => {
    const login = deferred<{ success: boolean }>();
    const { deps, calls } = makeDeps({
      stored: { sessionId: "old", cookies: "c", createdAt: 1 },
      validate: async () => false,
      login: () => login.promise,
    });
    const m = new SessionManager(deps);
    const state = await m.getOrStart(creds);
    expect(state).toEqual({
      status: "pending",
      sessionId: "s1",
      startedAt: 1000,
    });
    expect(calls.cleared).toEqual(["old"]);
    // A second caller while the login runs joins the same login.
    expect(m.start(creds).sessionId).toBe("s1");
    expect(m.status("s1").status).toBe("pending");
    login.resolve({ success: true });
    await new Promise((r) => setImmediate(r));
    expect(m.status("s1")).toEqual({ status: "ready", sessionId: "s1" });
  });

  it("reports a failed background login for that sessionId", async () => {
    const { deps } = makeDeps({
      login: async () => ({
        success: false,
        error: "Password input field not found",
      }),
    });
    const m = new SessionManager(deps);
    const state = m.start(creds);
    await new Promise((r) => setImmediate(r));
    expect(m.status(state.sessionId)).toEqual({
      status: "failed",
      sessionId: "s1",
      error: "Password input field not found",
    });
    // Unknown ids are "ready": the store decides whether they authenticate.
    expect(m.status("nope").status).toBe("ready");
  });

  it("waits up to waitMs and returns ready when the login finishes in time", async () => {
    const { deps } = makeDeps({
      login: () =>
        new Promise((r) => setTimeout(() => r({ success: true }), 20)),
    });
    const m = new SessionManager(deps);
    expect(await m.getOrStart(creds, 500)).toEqual({
      status: "ready",
      sessionId: "s1",
    });
  });

  it("returns pending when the login outlasts waitMs", async () => {
    const login = deferred<{ success: boolean }>();
    const { deps } = makeDeps({ login: () => login.promise });
    const m = new SessionManager(deps);
    const state = await m.getOrStart(creds, 10);
    expect(state.status).toBe("pending");
    login.resolve({ success: true });
  });

  it("refreshes on the timer but never while a login is in flight", async () => {
    const login = deferred<{ success: boolean }>();
    let started = 0;
    const { deps } = makeDeps({
      login: () => {
        started++;
        return login.promise;
      },
    });
    const m = new SessionManager(deps);
    m.startDailyRefresh(creds, 15, 0);
    await new Promise((r) => setTimeout(r, 40));
    expect(started).toBe(1); // the first tick started one; later ticks skipped it
    login.resolve({ success: true });
    await new Promise((r) => setTimeout(r, 40));
    expect(started).toBeGreaterThanOrEqual(2);
    m.stopRefresh();
  });
});
