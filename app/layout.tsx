import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Hawlis Jeans | Erkek Kış Koleksiyonu 2026",
  description: "Discover our exclusive range of premium men's trousers, crafted for style and comfort. Explore cargo pants, straight jeans, baggy jeans, tailored trousers, and joggers designed for the modern gentleman.",
  authors: [{ name: "Hawlis Jeans", url: "https://hawlisjeans.com" }],
  keywords: [
    "men's trousers",
    "cargo pants",
    "straight jeans",
    "baggy jeans",
    "tailored trousers",
    "joggers",
    "men's fashion",
    "premium trousers",
    "comfortable pants",
    "stylish men's wear",
    "modern men's clothing",
    "Hawlis Jeans",
  ],
  creator: "Enes Malik Kalkan",
  publisher: "Vercel",
  robots: "index, follow",
  openGraph: {
    title: "Hawlis Jeans | Erkek Kış Koleksiyonu 2026",
    description:
      "Discover our exclusive range of premium men's trousers, crafted for style and comfort. Explore cargo pants, straight jeans, baggy jeans, tailored trousers, and joggers designed for the modern gentleman.",
    url: "https://hawlisjeans.com",
    siteName: "Hawlis Jeans",
    images: [
      {
        url: "https://hawlisjeans.com/favicon.ico",
        width: 1200,
        height: 630,
        alt: "Hawlis Jeans - Erkek Kış Koleksiyonu 2026",
      },
    ],
    locale: "tr_TR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        <ScrollToTop />
        {children}

        <Footer />
      </body>
    </html>
  );
}
