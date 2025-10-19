"use client";

import { Term } from "@/lib/terms";
import { useComposeCast } from "@coinbase/onchainkit/minikit";

type Props = {
  term: Term;
};

export function TermDetails({ term }: Props) {
  const { composeCast } = useComposeCast();

  const share = () => {
    const url = typeof window !== "undefined" ? window.location.href : "";
    composeCast({
      text: `${term.term} - ${term.enDefinition.slice(0, 140)}...`,
      embeds: [url],
    });
  };

  return (
    <>
      <h1>{term.term}</h1>
      <p>{term.enDefinition}</p>
      {term.tags?.length ? <p>Tags: {term.tags.join(", ")}</p> : null}
      <button onClick={share}>Share</button>
    </>
  );
}
