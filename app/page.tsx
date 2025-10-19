"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { TERMS } from "@/lib/terms";
import { useMiniKit, useComposeCast } from "@coinbase/onchainkit/minikit";

export default function HomePage() {
  const [q, setQ] = useState("");
  const { setFrameReady, isFrameReady } = useMiniKit();
  const { composeCast } = useComposeCast();

  useEffect(() => {
    if (!isFrameReady) setFrameReady();
  }, [isFrameReady, setFrameReady]);

  const results = useMemo(() => {
    const s = q.trim().toLowerCase();
    if (!s) return TERMS;
    return TERMS.filter((t) => {
      if (t.term.toLowerCase().includes(s)) return true;
      if (t.enDefinition.toLowerCase().includes(s)) return true;
      return t.tags.some((tag) => tag.includes(s));
    });
  }, [q]);

  const shareApp = () =>
    composeCast({
      text: "Web3 Glossary - concise crypto terms",
      embeds: [typeof window !== "undefined" ? window.location.href : ""],
    });

  return (
    <main className="container">
      <h1>Web3 Glossary</h1>
      <input
        className="search"
        placeholder="Search terms (e.g., airdrop, amm, l2)"
        value={q}
        onChange={(e) => setQ(e.target.value)}
      />
      <ul className="list">
        {results.map((t) => (
          <li key={t.slug}>
            <Link href={`/term/${t.slug}`}>{t.term}</Link>
          </li>
        ))}
      </ul>
      <button onClick={shareApp}>Share App</button>
    </main>
  );
}
