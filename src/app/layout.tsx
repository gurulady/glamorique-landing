import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Glamorique | Australia's Premier Beauty Directory",
  description: "Showcase your beauty brand in Australia's leading luxury directory. Join 1,000+ businesses and connect with women actively seeking trusted beauty services.",
  keywords: "beauty directory, luxury beauty, beauty services Australia, beauty professionals, glamorique",
  openGraph: {
    title: "Glamorique | Australia's Premier Beauty Directory",
    description: "Showcase your beauty brand in Australia's leading luxury directory.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-[#0a0a0a] text-[#f5f5f5]">{children}</body>
    </html>
  );
}
