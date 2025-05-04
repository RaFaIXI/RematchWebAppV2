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
  title: "Master Rematch: Guides, Tutorials & Training | Rematch CookBook",
  description: "Master Rematch with detailed soccer tutorials, training guides, and techniques for dribbling, shooting, and goalkeeping. Your ultimate Rematch guide.",
  keywords: ["Rematch","Rematch Guide","Guide", "soccer", "tutorials", "training", "techniques", "goalkeeper", "shooting", "dribbling","Rematch",
    "Rematch Tutorial",
    "Master Rematch",
    "soccer guide",
    "training video",
    "dribbling tutorial",
    "goalkeeper techniques"
  ],
  authors: [{ name: "RaFa", url: "https://discord.com/invite/ua8D567NAp" }],
  creator: "RaFa",
  siteName: "Rematch CookBook",
  other: {
    "google-site-verification": "WMwlYdrRXd3vYBa2i5cgQENMA5FPl6Xs_d2osN49Llc",
  },
  type: "website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
      <link rel="preload" href="/video/Defense/block.mp4" as="fetch" type="video/mp4" crossOrigin="anonymous" />
<link rel="preload" href="/video/Defense/bodyblock.mp4" as="fetch" type="video/mp4" crossOrigin="anonymous" />
<link rel="preload" href="/video/Defense/tacle.mp4" as="fetch" type="video/mp4" crossOrigin="anonymous" />
<link rel="preload" href="/video/Defense/tacleglisse.mp4" as="fetch" type="video/mp4" crossOrigin="anonymous" />
<link rel="preload" href="/video/drible/arcenciel.mp4" as="fetch" type="video/mp4" crossOrigin="anonymous" />
<link rel="preload" href="/video/drible/controle.mp4" as="fetch" type="video/mp4" crossOrigin="anonymous" />
<link rel="preload" href="/video/drible/controleparfait.mp4" as="fetch" type="video/mp4" crossOrigin="anonymous" />
<link rel="preload" href="/video/drible/controleTete.mp4" as="fetch" type="video/mp4" crossOrigin="anonymous" />
<link rel="preload" href="/video/drible/dashdance.mp4" as="fetch" type="video/mp4" crossOrigin="anonymous" />
<link rel="preload" href="/video/drible/dashpush.mp4" as="fetch" type="video/mp4" crossOrigin="anonymous" />
<link rel="preload" href="/video/drible/Dribbles-Chain.mp4" as="fetch" type="video/mp4" crossOrigin="anonymous" />
<link rel="preload" href="/video/drible/DribleCancel.mp4" as="fetch" type="video/mp4" crossOrigin="anonymous" />
<link rel="preload" href="/video/drible/dribles+specialpc.mp4" as="fetch" type="video/mp4" crossOrigin="anonymous" />
<link rel="preload" href="/video/drible/DriblesMouvementDashDance.mp4" as="fetch" type="video/mp4" crossOrigin="anonymous" />
<link rel="preload" href="/video/drible/HeaderRow.mp4" as="fetch" type="video/mp4" crossOrigin="anonymous" />
<link rel="preload" href="/video/drible/pushball.mp4" as="fetch" type="video/mp4" crossOrigin="anonymous" />
<link rel="preload" href="/video/drible/sprint.mp4" as="fetch" type="video/mp4" crossOrigin="anonymous" />
<link rel="preload" href="/video/drible/wallbounce.mp4" as="fetch" type="video/mp4" crossOrigin="anonymous" />
<link rel="preload" href="/video/drible/WALLDASH.mp4" as="fetch" type="video/mp4" crossOrigin="anonymous" />
<link rel="preload" href="/video/drible/walldrible.mp4" as="fetch" type="video/mp4" crossOrigin="anonymous" />
<link rel="preload" href="/video/drible/WaveDash.mp4" as="fetch" type="video/mp4" crossOrigin="anonymous" />
<link rel="preload" href="/video/Gardien/Arret+dasharret.mp4" as="fetch" type="video/mp4" crossOrigin="anonymous" />
<link rel="preload" href="/video/Gardien/arrettir.mp4" as="fetch" type="video/mp4" crossOrigin="anonymous" />
<link rel="preload" href="/video/Gardien/GoatGK.mp4" as="fetch" type="video/mp4" crossOrigin="anonymous" />
<link rel="preload" href="/video/Gardien/relancemur.mp4" as="fetch" type="video/mp4" crossOrigin="anonymous" />
<link rel="preload" href="/video/Gardien/SonDesTirs.mp4" as="fetch" type="video/mp4" crossOrigin="anonymous" />
<link rel="preload" href="/video/Routines/passroutine.mp4" as="fetch" type="video/mp4" crossOrigin="anonymous" />
<link rel="preload" href="/video/Routines/pushballandscanroutine.mp4" as="fetch" type="video/mp4" crossOrigin="anonymous" />
<link rel="preload" href="/video/Routines/shootandcrossroutine.mp4" as="fetch" type="video/mp4" crossOrigin="anonymous" />
<link rel="preload" href="/video/Strategie/BackBoard.mp4" as="fetch" type="video/mp4" crossOrigin="anonymous" />
<link rel="preload" href="/video/Strategie/buffergclickmiddleligneblanche.mp4" as="fetch" type="video/mp4" crossOrigin="anonymous" />
<link rel="preload" href="/video/Strategie/UnlockUltimatePowerwithPyramidFormationinRematch.mp4" as="fetch" type="video/mp4" crossOrigin="anonymous" />
<link rel="preload" href="/video/tir/atetes.mp4" as="fetch" type="video/mp4" crossOrigin="anonymous" />
<link rel="preload" href="/video/tir/degreetir.mp4" as="fetch" type="video/mp4" crossOrigin="anonymous" />
<link rel="preload" href="/video/tir/deviationShot.mp4" as="fetch" type="video/mp4" crossOrigin="anonymous" />
<link rel="preload" href="/video/tir/headerfeint2.mp4" as="fetch" type="video/mp4" crossOrigin="anonymous" />
<link rel="preload" href="/video/tir/infinitete.mp4" as="fetch" type="video/mp4" crossOrigin="anonymous" />
<link rel="preload" href="/video/tir/InstaShoot.mp4" as="fetch" type="video/mp4" crossOrigin="anonymous" />
<link rel="preload" href="/video/tir/ligneBlanche1BackboardTeteTir.mp4" as="fetch" type="video/mp4" crossOrigin="anonymous" />
<link rel="preload" href="/video/tir/LobFeint.mp4" as="fetch" type="video/mp4" crossOrigin="anonymous" />
<link rel="preload" href="/video/tir/longerlobgoal.mp4" as="fetch" type="video/mp4" crossOrigin="anonymous" />
<link rel="preload" href="/video/tir/medium2lobgoal.mp4" as="fetch" type="video/mp4" crossOrigin="anonymous" />
<link rel="preload" href="/video/tir/mediumlobgoal.mp4" as="fetch" type="video/mp4" crossOrigin="anonymous" />
<link rel="preload" href="/video/tir/mixuppassecotetir.mp4" as="fetch" type="video/mp4" crossOrigin="anonymous" />
<link rel="preload" href="/video/tir/mouvementsAltersShoot.mp4" as="fetch" type="video/mp4" crossOrigin="anonymous" />
<link rel="preload" href="/video/tir/PetitePasseTirSprint.mp4" as="fetch" type="video/mp4" crossOrigin="anonymous" />
<link rel="preload" href="/video/tir/PowerOfShots.mp4" as="fetch" type="video/mp4" crossOrigin="anonymous" />
<link rel="preload" href="/video/tir/RainbowFlick-PassLob-Shoot.mp4" as="fetch" type="video/mp4" crossOrigin="anonymous" />
<link rel="preload" href="/video/tir/retournerDegree3Rapide.mp4" as="fetch" type="video/mp4" crossOrigin="anonymous" />
<link rel="preload" href="/video/tir/ShortPassShoot.mp4" as="fetch" type="video/mp4" crossOrigin="anonymous" />
<link rel="preload" href="/video/tir/SideShot.mp4" as="fetch" type="video/mp4" crossOrigin="anonymous" />
<link rel="preload" href="/video/tir/SideWallReboundGoal.mp4" as="fetch" type="video/mp4" crossOrigin="anonymous" />
<link rel="preload" href="/video/tir/SideWallReboundGoalOtherSide.mp4" as="fetch" type="video/mp4" crossOrigin="anonymous" />
<link rel="preload" href="/video/tir/specialearcencielTeteWallBut.mp4" as="fetch" type="video/mp4" crossOrigin="anonymous" />
<link rel="preload" href="/video/tir/talonnade.mp4" as="fetch" type="video/mp4" crossOrigin="anonymous" />
<link rel="preload" href="/video/tir/tiranglebas.mp4" as="fetch" type="video/mp4" crossOrigin="anonymous" />
<link rel="preload" href="/video/tir/Wallretourne.mp4" as="fetch" type="video/mp4" crossOrigin="anonymous" />

        <link rel="icon" href="/assets/favicon-32x32.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": "Rematch CookBook",
            "url": "https://rematch-cookbook.vercel.app",
            "description": "Learn the essential techniques to improve your game with our detailed video tutorials.",
            "potentialAction": {
              "@type": "SearchAction",
              "target": "https://rematch-cookbook.vercel.app/search?q={search_term_string}",
              "query-input": "required name=search_term_string"
            }
          })
        }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Master Rematch",
            "url": "https://rematch-cookbook.vercel.app",
            "description": "Learn the essential techniques to improve your game with our detailed video tutorials.",
            "logo": "https://rematch-cookbook.vercel.app/favicon-32x32.png", 
            "sameAs": [
              "https://www.youtube.com/@rafassbm",
              "https://discord.com/invite/ua8D567NAp"
            ]
          })
        }} />
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