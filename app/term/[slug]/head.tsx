import { TERMS } from "@/lib/terms";

export default function Head({ params }: { params: { slug: string } }) {
  const t = TERMS.find((x) => x.slug === params.slug);
  const embed = {
    version: "1",
    imageUrl: `${process.env.NEXT_PUBLIC_URL}/og.png`,
    button: {
      title: `View ${t?.term ?? "Term"}`,
      action: {
        type: "launch_frame",
        name: "Web3 Glossary",
        url: process.env.NEXT_PUBLIC_URL,
      },
    },
  };
  return <meta name="fc:miniapp" content={JSON.stringify(embed)} />;
}
