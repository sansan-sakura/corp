import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Corp",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div>
          <Link href="/">Home</Link>
          <Link href="/performance">Performance</Link>
          <Link href="/reliability">Reliability</Link>
          <Link href="/scale">Scale</Link>
        </div>
        {children}
      </body>
    </html>
  );
}
