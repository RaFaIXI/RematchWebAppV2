import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Spline, Shield, Lightbulb, HandMetal, Footprints } from "lucide-react"


export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-green-50 to-white dark:from-green-950 dark:to-background">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                  Maîtrisez Rematch
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  Apprenez les techniques essentielles pour améliorer votre jeu avec nos tutoriels vidéo détaillés.
                </p>
              </div>
              <div className="space-x-4">
                <Link href="/tir">
                  <Button className="bg-green-600 hover:bg-green-700">Commencer</Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">À propos</h2>
                  <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                    Notre plateforme est conçue pour aider les joueurs de tous niveaux à améliorer leurs compétences
                    techniques. Que vous soyez débutant ou joueur expérimenté, nos tutoriels vous aideront à
                    perfectionner votre jeu.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link href="/tir">
                    <Button className="bg-green-600 hover:bg-green-700">Explorer les techniques</Button>
                  </Link>
                </div>
              </div>
              <div className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last">
                <img
                  src="/imagen_2024-07-05_181123833.png"
                  alt="Football training"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Catégories de Techniques
                </h2>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  Explorez nos différentes catégories de techniques pour améliorer tous les aspects de votre jeu.
                </p>
              </div>
            </div>
            <div className="mx-auto grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 items-start pt-8">
              <Link
                href="/tir"
                className="group flex flex-col items-center space-y-2 rounded-lg p-4 transition-all hover:bg-white dark:hover:bg-gray-950"
              >
                <div className="rounded-full bg-green-100 p-4 dark:bg-green-900">
                  <Spline className="h-6 w-6 text-green-600 dark:text-green-400" />
                </div>
                <h3 className="text-xl font-bold">Tir</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
                  Perfectionnez vos tirs et marquage de buts
                </p>
              </Link>
              <Link
                href="/defense"
                className="group flex flex-col items-center space-y-2 rounded-lg p-4 transition-all hover:bg-white dark:hover:bg-gray-950"
              >
                <div className="rounded-full bg-blue-100 p-4 dark:bg-blue-900">
                  <Shield className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-xl font-bold">Défense</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
                  Apprenez les techniques défensives essentielles
                </p>
              </Link>
              <Link
                href="/strategie"
                className="group flex flex-col items-center space-y-2 rounded-lg p-4 transition-all hover:bg-white dark:hover:bg-gray-950"
              >
                <div className="rounded-full bg-purple-100 p-4 dark:bg-purple-900">
                  <Lightbulb className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                </div>
                <h3 className="text-xl font-bold">Stratégie</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
                  Maîtrisez les tactiques et stratégies de jeu
                </p>
              </Link>
              <Link
                href="/gardien"
                className="group flex flex-col items-center space-y-2 rounded-lg p-4 transition-all hover:bg-white dark:hover:bg-gray-950"
              >
                <div className="rounded-full bg-yellow-100 p-4 dark:bg-yellow-900">
                  <HandMetal className="h-6 w-6 text-yellow-600 dark:text-yellow-400" />
                </div>
                <h3 className="text-xl font-bold">Gardien</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
                  Techniques spécifiques pour les gardiens de but
                </p>
              </Link>
              <Link
                href="/dribles"
                className="group flex flex-col items-center space-y-2 rounded-lg p-4 transition-all hover:bg-white dark:hover:bg-gray-950"
              >
                <div className="rounded-full bg-red-100 p-4 dark:bg-red-900">
                  <Footprints className="h-6 w-6 text-red-600 dark:text-red-400" />
                </div>
                <h3 className="text-xl font-bold">Dribles</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
                  Améliorez vos compétences de dribble et contrôle du ballon
                </p>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full border-t py-6 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <p className="text-center text-sm leading-loose text-gray-500 md:text-left">
            © {new Date().getFullYear()} Maîtrisez le Rematch. Tous droits réservés.
          </p>
        </div>
      </footer>
    </div>
  )
}
