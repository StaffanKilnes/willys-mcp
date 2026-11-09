import { afterEach, describe, expect, it, vi } from "vitest";
import { fetchCsrfToken, mergeSetCookies } from "../lib/request-utils";

describe("mergeSetCookies", () => {
  it("replaces a cookie the response sets and keeps the rest", () => {
    const merged = mergeSetCookies("a=1; JSESSIONID=old; b=2", [
      "JSESSIONID=new; Path=/; Secure; HttpOnly; SameSite=None",
    ]);
    expect(merged).toBe("a=1; JSESSIONID=new; b=2");
  });

  it("adds a cookie that wasn't there", () => {
    expect(mergeSetCookies("a=1", ["RequestId=x; Path=/"])).toBe(
      "a=1; RequestId=x",
    );
  });

  it("drops a cookie the response expires", () => {
    expect(
      mergeSetCookies("a=1; gone=2", [
        "gone=; Max-Age=0; Path=/",
        "a=3; Expires=Thu, 01 Jan 1970 00:00:00 GMT",
      ]),
    ).toBe("");
  });

  it("keeps an '=' inside a value", () => {
    expect(mergeSetCookies("t=a==", ["u=b=c; Path=/"])).toBe("t=a==; u=b=c");
  });
});

describe("fetchCsrfToken", () => {
  afterEach(() => {
    vi.unstubAllGlobals();
  });

  // The 2026-11-08 failure: a reused session's JSESSIONID had gone stale, the
  // token response set a new one, and the write that sent the token with the
  // old cookie got 401 csrf.badormissing.
  it("returns the cookies the token response sets with the token", async () => {
    const headers = new Headers();
    headers.append("set-cookie", "JSESSIONID=fresh; Path=/; HttpOnly");
    headers.append("set-cookie", "RequestId=r1; Path=/");
    const fetchMock = vi.fn(
      async () =>
        new Response(JSON.stringify("token-123"), { status: 200, headers }),
    );
    vi.stubGlobal("fetch", fetchMock);

    const csrf = await fetchCsrfToken(
      "axfoodRememberMe=keep; JSESSIONID=stale",
    );

    expect(csrf.token).toBe("token-123");
    expect(csrf.cookies).toBe(
      "axfoodRememberMe=keep; JSESSIONID=fresh; RequestId=r1",
    );
    expect(fetchMock).toHaveBeenCalledTimes(1);
  });

  it("keeps the cookies unchanged when the response sets none", async () => {
    vi.stubGlobal(
      "fetch",
      vi.fn(async () => new Response(JSON.stringify({ token: "t" }))),
    );

    const csrf = await fetchCsrfToken("JSESSIONID=live");

    expect(csrf).toEqual({ token: "t", cookies: "JSESSIONID=live" });
  });
});
