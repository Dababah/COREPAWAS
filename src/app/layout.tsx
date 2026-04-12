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
  title: "Core Pawas | At the heart of your digital and financial growth",
  description: "Menyatukan kekuatan logika IT dengan kedekatan personal. Solusi Digital dan Financial Trading dalam satu ekosistem.",
};

import Navbar from "@/components/Navbar";
import FloatingButtons from "@/components/FloatingButtons";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Navbar />
        <div style={{ paddingTop: '70px' }}>
          {children}
        </div>
        <FloatingButtons />
      </body>
    </html>
  );
}
