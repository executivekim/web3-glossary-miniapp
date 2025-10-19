"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { TERMS } from "@/lib/terms";
import { shareFallback } from "@/lib/share";
import { useMiniKit, useComposeCast } from "@coinbase/onchainkit/minikit";

export default function HomePage() {
  const [q, setQ] = useState("");
  const [shareFeedback, setShareFeedback] = useState<string | null>(null);
  const { setFrameReady, isFrameReady } = useMiniKit();
  const { composeCastAsync } = useComposeCast();

  useEffect(() => {
    if (!isFrameReady) setFrameReady();
  }, [isFrameReady, setFrameReady]);

  useEffect(() => {
    if (!shareFeedback) return;
    const timeout = window.setTimeout(() => setShareFeedback(null), 3000);
    return () => window.clearTimeout(timeout);
  }, [shareFeedback]);

  const results = useMemo(() => {
    const s = q.trim().toLowerCase();
    if (!s) return TERMS;
    return TERMS.filter((t) => {
      if (t.term.toLowerCase().includes(s)) return true;
      if (t.enDefinition.toLowerCase().includes(s)) return true;
      return t.tags.some((tag) => tag.includes(s));
    });
  }, [q]);

  const shareApp = async () => {
    const shareUrl =
      typeof window !== "undefined" ? window.location.href : undefined;

    try {
      await composeCastAsync({
        text: "Web3 Glossary - concise crypto terms",
        embeds: shareUrl ? [shareUrl] : [],
      });
      setShareFeedback("Cast composer opened in Farcaster.");
    } catch {
      const message = await shareFallback({
        url: shareUrl,
        title: "Web3 Glossary",
        text: "Web3 Glossary - concise crypto terms",
      });
      setShareFeedback(message);
    }
  };

  const handleShareClick = () => {
    void shareApp();
  };

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
      <button onClick={handleShareClick}>Share App</button>
      {shareFeedback ? (
        <p className="share-feedback" role="status">
          {shareFeedback}
        </p>
      ) : null}
    </main>
  );
}
