"use client";

import { useEffect, useState } from "react";
import { Term } from "@/lib/terms";
import { shareFallback } from "@/lib/share";
import { useComposeCast } from "@coinbase/onchainkit/minikit";

type Props = {
  term: Term;
};

export function TermDetails({ term }: Props) {
  const { composeCastAsync } = useComposeCast();
  const [shareFeedback, setShareFeedback] = useState<string | null>(null);

  useEffect(() => {
    if (!shareFeedback) return;
    const timeout = window.setTimeout(() => setShareFeedback(null), 3000);
    return () => window.clearTimeout(timeout);
  }, [shareFeedback]);

  const share = async () => {
    const url =
      typeof window !== "undefined" ? window.location.href : undefined;

    try {
      await composeCastAsync({
        text: `${term.term} - ${term.enDefinition.slice(0, 140)}...`,
        embeds: url ? [url] : [],
      });
      setShareFeedback("Cast composer opened in Farcaster.");
    } catch {
      const message = await shareFallback({
        url,
        title: term.term,
        text: term.enDefinition,
      });
      setShareFeedback(message);
    }
  };

  const handleShareClick = () => {
    void share();
  };

  return (
    <>
      <h1>{term.term}</h1>
      <p>{term.enDefinition}</p>
      {term.tags?.length ? <p>Tags: {term.tags.join(", ")}</p> : null}
      <button onClick={handleShareClick}>Share</button>
      {shareFeedback ? (
        <p className="share-feedback" role="status">
          {shareFeedback}
        </p>
      ) : null}
    </>
  );
}
