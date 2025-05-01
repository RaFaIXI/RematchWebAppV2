"use client"; // This directive tells Next.js that this is a client component 

import { useEffect, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Spline, Shield, Lightbulb, HandMetal, Footprints } from "lucide-react";
import Footer from "@/components/Footer"; // Import Footer component

export default function Home() {
  const [lang, setLang] = useState("fr");

  useEffect(() => {
    const storedLang = localStorage.getItem("lang");
    if (storedLang) {
      setLang(storedLang);
    }
  }, []);

  const toggleLang = () => {
    const newLang = lang === "fr" ? "en" : "fr";
    setLang(newLang);
    localStorage.setItem("lang", newLang);
    window.location.reload();
  };

  // Translations based on the selected language
  const translations = {
    en: {
      heading: "Master Rematch",
      description: "Learn essential techniques to improve your game with our detailed video tutorials.",
      startButton: "Start",
      aboutTitle: "About",
      aboutDescription: "Our platform is designed to help players of all levels improve their technical skills. Whether you're a beginner or an experienced player, our tutorials will help you refine your game.",
      exploreButton: "Explore Techniques",
      categoriesTitle: "Techniques Categories",
      categoriesDescription: "Explore our different categories of techniques to improve every aspect of your game.",
      shoot: "Shooting",
      defense: "Defense",
      strategy: "Strategy",
      goalkeeper: "Goalkeeper",
      dribbling: "Dribbling",
    },
    fr: {
      heading: "Maîtrisez Rematch",
      description: "Apprenez les techniques essentielles pour améliorer votre jeu avec nos tutoriels vidéo détaillés.",
      startButton: "Commencer",
      aboutTitle: "À propos",
      aboutDescription: "Notre plateforme est conçue pour aider les joueurs de tous niveaux à améliorer leurs compétences techniques. Que vous soyez débutant ou joueur expérimenté, nos tutoriels vous aideront à perfectionner votre jeu.",
      exploreButton: "Explorer les techniques",
      categoriesTitle: "Catégories de Techniques",
      categoriesDescription: "Explorez nos différentes catégories de techniques pour améliorer tous les aspects de votre jeu.",
      shoot: "Tir",
      defense: "Défense",
      strategy: "Stratégie",
      goalkeeper: "Gardien",
      dribbling: "Dribles",
    },
  };

  const t = translations[lang];

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-green-50 to-white dark:from-green-950 dark:to-background">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                  {t.heading}
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  {t.description}
                </p>
              </div>
              <div className="space-x-4">
                <Link href="/tir">
                  <Button className="bg-green-600 hover:bg-green-700">{t.startButton}</Button>
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
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">{t.aboutTitle}</h2>
                  <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                    {t.aboutDescription}
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link href="/tir">
                    <Button className="bg-green-600 hover:bg-green-700">{t.exploreButton}</Button>
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
                  {t.categoriesTitle}
                </h2>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  {t.categoriesDescription}
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
                <h3 className="text-xl font-bold">{t.shoot}</h3>
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
                <h3 className="text-xl font-bold">{t.defense}</h3>
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
                <h3 className="text-xl font-bold">{t.strategy}</h3>
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
                <h3 className="text-xl font-bold">{t.goalkeeper}</h3>
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
                <h3 className="text-xl font-bold">{t.dribbling}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
                  Améliorez vos compétences de dribble et contrôle du ballon
                </p>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer /> {/* Use the Footer component here */}
    </div>
  );
}
