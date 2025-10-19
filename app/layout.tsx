import "./globals.css";

import type { Metadata } from "next";
import { Providers } from "./providers";

export const metadata: Metadata = {
  title: "Web3 Glossary",
  description: "Concise English glossary for crypto/web3.",
  other: {
    "fc:miniapp": JSON.stringify({
      version: "1",
      imageUrl: `${process.env.NEXT_PUBLIC_URL}/og.png`,
      button: {
        title: "Web3 Glossary",
        action: {
          type: "launch_frame",
          name: "Web3 Glossary",
          url: process.env.NEXT_PUBLIC_URL,
          splashImageUrl: `${process.env.NEXT_PUBLIC_URL}/splash.png`,
          splashBackgroundColor: "#000000",
        },
      },
    }),
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
