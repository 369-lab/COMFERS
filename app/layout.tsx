import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "COMFERS x Cosmos of Cream",
  description: "69 AI-generated NFTs capturing the mental states of crypto traders. Your psychosis determines your prosperity.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
