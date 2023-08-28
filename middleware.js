import { NextResponse } from "next/server";

export function middleware(req, res) {
  const headerReq = new Headers(req.headers);

  // Redirecting the user to a different page
  if (req.nextUrl.pathname === "/" && req.headers.get("Authorization")) {
    return NextResponse.redirect(new URL("/new-path", req.url));
  }
}
