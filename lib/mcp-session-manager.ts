/**
 * Session reuse for the MCP `login` tool.
 *
 * A Willys login runs headless Chromium and takes ~20 s, and the site's login
 * endpoint encrypts credentials client-side, so there is no cheap HTTP login.
 * This manager makes `login` fast anyway:
 *
 * 1. Reuse: the newest stored session is validated with one GET and returned
 *    at once when it still works.
 * 2. Background login: when there is none, the browser login starts in the
 *    background and `login` returns a pending sessionId that `check_auth`
 *    resolves, so callers behind a short tool timeout (Paperclip gives 10 s)
 *    still get an answer.
 * 3. Daily refresh: a timer re-logs in once a day so a fresh session is
 *    normally waiting before anyone asks.
 *
 * All I/O is injected so the state machine is testable without SQLite or a
 * browser.
 */

export interface Credentials {
  username: string;
  password: string;
}

export interface StoredSession {
  sessionId: string;
  cookies: string;
  createdAt: number;
}

export interface SessionManagerDeps {
  latestSession: () => StoredSession | null;
  validate: (cookies: string) => Promise<boolean>;
  login: (
    sessionId: string,
    creds: Credentials,
  ) => Promise<{ success: boolean; error?: string }>;
  clearSession: (sessionId: string) => void;
  newSessionId: () => string;
  now?: () => number;
  log?: (message: string) => void;
}

export type LoginState =
  | { status: "ready"; sessionId: string }
  | { status: "pending"; sessionId: string; startedAt: number }
  | { status: "failed"; sessionId: string; error: string };

interface Pending {
  sessionId: string;
  startedAt: number;
  done: Promise<void>;
}

export class SessionManager {
  private pending: Pending | null = null;
  private lastFailure: { sessionId: string; error: string } | null = null;
  private readonly now: () => number;
  private readonly log: (message: string) => void;
  private refreshTimer: NodeJS.Timeout | null = null;

  constructor(private readonly deps: SessionManagerDeps) {
    this.now = deps.now ?? (() => Date.now());
    this.log = deps.log ?? (() => {});
  }

  /** The newest stored session that still works, or null (a dead one is cleared). */
  async findValidSession(): Promise<string | null> {
    const stored = this.deps.latestSession();
    if (!stored) return null;
    if (await this.deps.validate(stored.cookies)) return stored.sessionId;
    this.log(`Session ${stored.sessionId} no longer valid; clearing it`);
    this.deps.clearSession(stored.sessionId);
    return null;
  }

  /**
   * What `login` returns: a ready session when one exists, otherwise the
   * background login's state. Waits up to `waitMs` for a login already in
   * flight (or one started here) so a fast login still comes back as ready.
   */
  async getOrStart(creds: Credentials, waitMs = 0): Promise<LoginState> {
    const ready = await this.findValidSession();
    if (ready) return { status: "ready", sessionId: ready };
    const state = this.start(creds);
    if (state.status !== "pending" || waitMs <= 0) return state;
    await Promise.race([
      this.pending?.done,
      new Promise((resolve) => setTimeout(resolve, waitMs).unref?.()),
    ]);
    return this.status(state.sessionId);
  }

  /** Start a background login unless one is already running. */
  start(creds: Credentials): LoginState {
    if (this.pending) {
      return {
        status: "pending",
        sessionId: this.pending.sessionId,
        startedAt: this.pending.startedAt,
      };
    }
    const sessionId = this.deps.newSessionId();
    const startedAt = this.now();
    this.lastFailure = null;
    const done = this.deps
      .login(sessionId, creds)
      .then((result) => {
        if (result.success) {
          this.log(`Background login finished: session ${sessionId}`);
        } else {
          this.lastFailure = {
            sessionId,
            error: result.error ?? "Authentication failed",
          };
          this.log(`Background login failed: ${this.lastFailure.error}`);
        }
      })
      .catch((error: unknown) => {
        this.lastFailure = {
          sessionId,
          error: error instanceof Error ? error.message : String(error),
        };
        this.log(`Background login threw: ${this.lastFailure.error}`);
      })
      .finally(() => {
        if (this.pending?.sessionId === sessionId) this.pending = null;
      });
    this.pending = { sessionId, startedAt, done };
    this.log(`Background login started: session ${sessionId}`);
    return { status: "pending", sessionId, startedAt };
  }

  /**
   * The state of a sessionId handed out by `start`. "ready" means the login
   * finished without a recorded failure; the caller still checks the store.
   */
  status(sessionId: string): LoginState {
    if (this.pending?.sessionId === sessionId) {
      return {
        status: "pending",
        sessionId,
        startedAt: this.pending.startedAt,
      };
    }
    if (this.lastFailure?.sessionId === sessionId) {
      return { status: "failed", sessionId, error: this.lastFailure.error };
    }
    return { status: "ready", sessionId };
  }

  /** Log in again on a schedule so a fresh session is waiting. 0 disables. */
  startDailyRefresh(
    creds: Credentials,
    intervalMs = 24 * 60 * 60 * 1000,
    initialDelayMs = 30 * 1000,
  ): void {
    this.stopRefresh();
    if (intervalMs <= 0) return;
    const tick = () => {
      if (this.pending) return;
      this.log("Scheduled session refresh");
      this.start(creds);
    };
    const first = setTimeout(() => {
      tick();
      this.refreshTimer = setInterval(tick, intervalMs);
      this.refreshTimer.unref?.();
    }, initialDelayMs);
    first.unref?.();
    this.refreshTimer = first;
  }

  stopRefresh(): void {
    if (this.refreshTimer) {
      clearTimeout(this.refreshTimer);
      clearInterval(this.refreshTimer);
      this.refreshTimer = null;
    }
  }
}
