import { createClient, Errors } from "@farcaster/quick-auth";
import { NextRequest, NextResponse } from "next/server";

const client = createClient();

const normalizeDomain = (value?: string | null) => {
  if (!value) return null;
  return value.replace(/^https?:\/\//, "").replace(/\/$/, "") || null;
};

export async function GET(request: NextRequest) {
  const authorization = request.headers.get("Authorization");
  if (!authorization?.startsWith("Bearer ")) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const token = authorization.split(" ")[1];
  const domain =
    normalizeDomain(process.env.NEXT_PUBLIC_URL) ??
    normalizeDomain(request.headers.get("origin")) ??
    normalizeDomain(
      request.headers.get("host")
        ? `https://${request.headers.get("host")}`
        : null,
    );

  if (!domain) {
    return NextResponse.json(
      { error: "Miniapp domain is not configured" },
      { status: 500 },
    );
  }

  try {
    const payload = await client.verifyJwt({ token, domain });
    return NextResponse.json({ fid: payload.sub });
  } catch (e) {
    if (e instanceof Errors.InvalidTokenError) {
      return NextResponse.json({ error: "Invalid token" }, { status: 401 });
    }
    throw e;
  }
}
