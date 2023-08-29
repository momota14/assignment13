import { headers } from "next/headers";
import { NextResponse } from "next/server";

export async function GET(req, res) {
  const getHeader = headers();
  const authorization = getHeader.get("Authorization");

  return NextResponse.json({
    message: "Welcome to our API!",
    version: "1.0",
    token: authorization,
  });
}
