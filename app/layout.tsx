"use client";

import type React from "react";
import { useEffect, useState } from "react";
import "@/app/globals.css";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { SiteHeader } from "@/components/layout/site-header";
import { Analytics } from "@vercel/analytics/react";
import Head from "next/head";

// Set up the Google Font
const inter = Inter({ subsets: ["latin"] });

// Default metadata (English)
const defaultMetadata = {
  title: "Master Rematch - Rematch Techniques Tutorials",
  description: "Learn the essential techniques to improve your game with our detailed video tutorials.",
};

// French metadata
const frMetadata = {
  title: "Maîtrisez Rematch - Tutoriels des techniques de Rematch",
  description: "Apprenez les techniques essentielles pour améliorer votre jeu avec nos tutoriels vidéo détaillés.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Set up state for the language
  const [lang, setLang] = useState<string>("en");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const storedLang = localStorage.getItem("lang");
    if (storedLang) {
      setLang(storedLang);
    }
  }, []);

  // Always use default (English) metadata for initial render
  // This ensures link previews like Discord will see the English version
  const metadata = mounted && lang === "fr" ? frMetadata : defaultMetadata;

  return (
    <html lang={mounted ? lang : "en"} suppressHydrationWarning>
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content={metadata.description} />
        <title>{metadata.title}</title>
        <link rel="icon" href="/assets/favicon-32x32.png" />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <div className="relative flex min-h-screen flex-col">
            <SiteHeader />
            <div className="flex-1">{children}</div>
          </div>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}