"use client"

import Link from "next/link"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { useEffect, useState } from "react"

export function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false)
  const [lang, setLang] = useState("en")

  useEffect(() => {
    const storedLang = localStorage.getItem("lang")
    if (storedLang) {
      setLang(storedLang)
    }
  }, [])

  const toggleLang = () => {
    const newLang = lang === "fr" ? "en" : "fr"
    setLang(newLang)
    localStorage.setItem("lang", newLang)
    window.location.reload()
  }

  const routes = [
    { href: "/", label: lang === "fr" ? "Accueil" : "Home" },
    { href: "/tir", label: lang === "fr" ? "Tir" : "Shoot" },
    { href: "/defense", label: lang === "fr" ? "Défense" : "Defense" },
    { href: "/strategie", label: lang === "fr" ? "Stratégie" : "Strategy" },
    { href: "/dribles", label: lang === "fr" ? "Dribles" : "Dribbles" },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <Link href="/" className="flex items-center space-x-2">
          <img src="assets/favicon-32x32.png" alt="" />
          <span className="font-bold">
            {lang === "fr" ? "Maîtrisez Rematch" : "Master Rematch"}
          </span>
        </Link>

        <nav className="hidden md:flex ml-auto items-center space-x-6 text-sm font-medium">
          {routes.map((route) => (
            <Link
              key={route.href}
              href={route.href}
              className="transition-colors hover:text-foreground/80 text-foreground/60"
            >
              {route.label}
            </Link>
          ))}

          <Button variant="ghost" onClick={toggleLang}>
            {lang === "fr" ? "🇬🇧 English" : "🇫🇷 Français"}
          </Button>
        </nav>

        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden ml-auto">
            <Button variant="ghost" size="icon">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <div className="flex flex-col space-y-4 mt-8">
              {routes.map((route) => (
                <Link
                  key={route.href}
                  href={route.href}
                  className="text-lg font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  {route.label}
                </Link>
              ))}
              <Button variant="ghost" onClick={toggleLang}>
                {lang === "fr" ? "🇬🇧 English" : "🇫🇷 Français"}
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
