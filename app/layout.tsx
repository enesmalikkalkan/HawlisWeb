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
  title: "Hawlis Jeans | Erkek Sonbahar Koleksiyonu",
  description: "Sonbahar-Kış 2026 toptan erkek pantolon koleksiyonu: kot, kargo, kumaş, jogger. 42-52 beden seçenekleri.",
  authors: [{ name: "Hawlis Jeans", url: "https://hawlisjeans.com" }],
  keywords: [
    "kumaş pantolon",
    "kargo pantolon",
    "kot pantolon",
    "baggy fit",
    "slim fit",
    "jogger",
    "erkek pantolon",
    "toptan erkek giyim",
    "29-36 beden pantolon",
    "42-52 beden pantolon",
    "sonbahar kış koleksiyonu",
    "Hawlis Jeans",
  ],
  creator: "Enes Malik Kalkan",
  publisher: "Vercel",
  robots: "index, follow",
  openGraph: {
    title: "Hawlis Jeans | Erkek Sonbahar Koleksiyonu",
    description:
      "Sonbahar-Kış 2026 toptan erkek pantolon koleksiyonu: kot, kargo, kumaş, jogger. 42-52 beden seçenekleri.",
    url: "https://hawlisjeans.com",
    siteName: "Hawlis Jeans",
    images: [
      {
        url: "https://hawlisjeans.com/favicon.ico",
        alt: "Hawlis Jeans - Erkek Sonbahar Koleksiyonu",
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
