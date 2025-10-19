import { createClient, Errors } from "@farcaster/quick-auth";
import { NextRequest, NextResponse } from "next/server";

const client = createClient();
const DOMAIN = process.env.NEXT_PUBLIC_URL!
  .replace(/^https?:\/\//, "")
  .replace(/\/$/, "");

export async function GET(request: NextRequest) {
  const authorization = request.headers.get("Authorization");
  if (!authorization?.startsWith("Bearer ")) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const token = authorization.split(" ")[1];

  try {
    const payload = await client.verifyJwt({ token, domain: DOMAIN });
    return NextResponse.json({ fid: payload.sub });
  } catch (e) {
    if (e instanceof Errors.InvalidTokenError) {
      return NextResponse.json({ error: "Invalid token" }, { status: 401 });
    }
    throw e;
  }
}
