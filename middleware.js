import { NextResponse } from "next/server";

export function middleware(req, res) {
  const headerReq = new Headers(req.headers);

  if (req.nextUrl.pathname === "/old-path") {
    return NextResponse.redirect(new URL("/new-path", req.url), req.headers);
  }

  if (req.nextUrl.pathname === "/api") {
    const token =
      "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjExMzk2NGY3MDZiNGM0ZTJhYTFiM2M4NGQ1Y2YwYWRhMjA4OWIwNDc2ZjM3NjlhN2I1ZTBmZDNkN2YyM2IxYmUxNWE0N2Y0YTU4YmYzMzE1In0"; // Extract the token from the header
    headerReq.set("Authorization", `${token}`);

    if(headerReq.get("Authorization")){
      headerReq.set("Authorization", `Bearer ${token}`);
    }

    return NextResponse.next({
      request: {
        headers: headerReq,
      },
    });
  }
}
