import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import FloatingButtons from "@/components/FloatingButtons";
import { ThemeProvider } from "@/components/ThemeProvider";

export const metadata: Metadata = {
  title: "Core Pawas | At the heart of your digital and financial growth",
  description: "Menyatukan kekuatan logika IT dengan kedekatan personal. Solusi Digital dan Financial Trading dalam satu ekosistem.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <ThemeProvider>
          <Navbar />
          <div style={{ position: 'relative' }}>
            {children}
          </div>
          <FloatingButtons />
        </ThemeProvider>
      </body>
    </html>
  );
}
