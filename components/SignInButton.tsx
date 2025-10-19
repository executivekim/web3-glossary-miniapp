"use client";

import { useState } from "react";
import { sdk } from "@farcaster/miniapp-sdk";

export function SignInButton() {
  const [fid, setFid] = useState<number | null>(null);

  async function signIn() {
    const { token } = await sdk.quickAuth.getToken();
    const res = await sdk.quickAuth.fetch("/api/auth", {
      headers: { Authorization: `Bearer ${token}` },
    });
    const data = await res.json();
    if (data?.fid) setFid(data.fid);
  }

  return (
    <button onClick={signIn}>
      {fid ? `Signed in (FID: ${fid})` : "Sign in"}
    </button>
  );
}
