"use client"; // Ensures this component runs client-side

import type React from "react";
import { useEffect, useState } from "react"; // Add useEffect and useState
import "@/app/globals.css";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { SiteHeader } from "@/components/layout/site-header";
import { Analytics } from "@vercel/analytics/react";

// Set up the Google Font
const inter = Inter({ subsets: ["latin"] });

// Default metadata
const defaultMetadata = {
  title: "Master Rematch - Rematch Techniques Tutorials",
  description: "Learn the essential techniques to improve your game with our detailed video tutorials.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Set up state for the language
  const [lang, setLang] = useState<string>("fr");

  useEffect(() => {
    const storedLang = localStorage.getItem("lang");
    if (storedLang) {
      setLang(storedLang);
    }
  }, []);

  // Determine metadata based on the language
  const metadata =
    lang === "fr"
      ? {
        title: "Maîtrisez Rematch - Tutoriels des techniques de Rematch",
        description: "Apprenez les techniques essentielles pour améliorer votre jeu avec nos tutoriels vidéo détaillés.",
      }
      : defaultMetadata;

  return (
    <html lang={lang} suppressHydrationWarning>
      <head>
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
