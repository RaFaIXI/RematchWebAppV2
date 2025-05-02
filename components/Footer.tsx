"use client"; // This directive tells Next.js that this is a client component 

// components/Footer.tsx
import { FaDiscord } from 'react-icons/fa'
import { useEffect, useState } from "react";
import Link from "next/link";

export default function Footer() {
  const [lang, setLang] = useState<"en" | "fr">("en");

  useEffect(() => {
    const storedLang = localStorage.getItem("lang");
    if (storedLang) {
      setLang(storedLang as "en" | "fr"); // Ensure the value from localStorage is correctly typed
    }
  }, []);

  // Translations based on the selected language
  const translations = {
    en: {
      copyrightText: `© ${new Date().getFullYear()} Master Rematch. All rights reserved.`,
      discordAriaLabel: "Join us on Discord",
      credits: "Credits",
    },
    fr: {
      copyrightText: `© ${new Date().getFullYear()} Maîtrisez Rematch. Tous droits réservés.`,
      discordAriaLabel: "Rejoignez-nous sur Discord",
      credits: "Crédits",
    },
  };

  const t = translations[lang];

  return (
    <footer className="w-full border-t py-6 md:py-0">
      <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
        <p className="text-center text-sm leading-loose text-gray-500 md:text-left">
          {t.copyrightText}
        </p>
        <div className="flex items-center gap-4">
          <Link
            href="/Credits"
            className="text-sm text-gray-500 hover:text-gray-700 transition-colors"
          >
            {t.credits}
          </Link>
          <a
            href="https://discord.gg/ua8D567NAp"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-gray-700 transition-colors"
            aria-label={t.discordAriaLabel}
          >
            <FaDiscord className="w-6 h-6" />
          </a>
        </div>
      </div>
    </footer>
  );
}
