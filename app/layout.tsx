import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "COMFERS x COSMOS OF CREAM",
  description:
    "The 69 Chosen Degenerates. Your psychosis determines your prosperity. Generator-based NFTs manifesting abundance through digital psychosis.",
  keywords: ["NFT", "Comfers", "Cosmos of Cream", "Web3", "Crypto", "Digital Art"],
  openGraph: {
    title: "COMFERS x COSMOS OF CREAM",
    description: "The 69 Chosen Degenerates. Your psychosis determines your prosperity.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "COMFERS x COSMOS OF CREAM",
    description: "The 69 Chosen Degenerates. Your psychosis determines your prosperity.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className="antialiased bg-[#050505] text-[#e5e5e5]">
        <div className="noise-overlay" />
        {children}
      </body>
    </html>
  );
}
