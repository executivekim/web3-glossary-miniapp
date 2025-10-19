import { notFound } from "next/navigation";
import { TermDetails } from "./term-details";
import { TERMS } from "@/lib/terms";

type PageParams = Promise<{ slug: string }>;

export default async function TermPage({ params }: { params: PageParams }) {
  const { slug } = await params;
  const term = TERMS.find((t) => t.slug === slug);

  if (!term) notFound();

  return (
    <main className="container">
      <TermDetails term={term} />
    </main>
  );
}
