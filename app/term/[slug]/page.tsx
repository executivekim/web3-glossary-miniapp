"use client";

import { useMemo } from "react";
import { notFound } from "next/navigation";
import { TERMS } from "@/lib/terms";
import { useComposeCast } from "@coinbase/onchainkit/minikit";

export default function TermPage({ params }: { params: { slug: string } }) {
  const { composeCast } = useComposeCast();
  const term = useMemo(
    () => TERMS.find((t) => t.slug === params.slug),
    [params.slug],
  );

  if (!term) notFound();

  const share = () => {
    const url = typeof window !== "undefined" ? window.location.href : "";
    composeCast({
      text: `${term.term} - ${term.enDefinition.slice(0, 140)}...`,
      embeds: [url],
    });
  };

  return (
    <main className="container">
      <h1>{term.term}</h1>
      <p>{term.enDefinition}</p>
      {term.tags?.length ? <p>Tags: {term.tags.join(", ")}</p> : null}
      <button onClick={share}>Share</button>
    </main>
  );
}
