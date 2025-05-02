// app/layout.tsx - Server Component
import type React from "react";
import "@/app/globals.css";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { SiteHeader } from "@/components/layout/site-header";
import { Analytics } from "@vercel/analytics/react";
import { ClientLanguageHandler } from "@/components/client-language-handler";

// Set up the Google Font
const inter = Inter({ subsets: ["latin"] });

// Define metadata for the page (this is the Next.js way)
export const metadata = {
  title: "Master Rematch - Rematch Techniques Tutorials",
  description: "Learn the essential techniques to improve your game with our detailed video tutorials.",
  other: {
    "google-site-verification": "WMwlYdrRXd3vYBa2i5cgQENMA5FPl6Xs_d2osN49Llc",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/assets/favicon-32x32.png" />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <div className="relative flex min-h-screen flex-col">
            <SiteHeader />
            <ClientLanguageHandler />
            <div className="flex-1">{children}</div>
          </div>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}