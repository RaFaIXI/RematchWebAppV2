"use client"

import { useEffect, useState } from "react"
import { TechniqueCard } from "@/components/technique-card"
import Footer from "@/components/Footer"

const translations = {
  en: {
    pageTitle: "Goalkeeper Techniques",
    pageDescription:
      "Discover essential techniques to become an effective and reliable goalkeeper.",
    techniques: [
      {
        title: "Ball Sound",
        description: "Learn the sound cues of the ball",
        fullDescription:
          "The ball makes different sounds based on speed/power and spin. Learning to recognize these can help anticipate the ball's behavior. Note: You can’t distinguish between left and right spin by sound.",
      },
      {
        title: "Wall Pass",
        description: "Bounce the ball off the wall to pass to a wing",
        fullDescription:
          "Bounce the ball off the wall to make a pass to a wing. Adding spin can change where the ball lands.",
      },
      {
        title: "Simply the Best",
        description: "The GOAT",
        fullDescription:
          "Turn around and shoot at the crossbar; the ball will bounce back to the center of the field.",
      },
      {
        title: "Shot Stop",
        description: "Stop a shot by kicking the ball",
        fullDescription:
          "Stop a shot by kicking the ball, allowing for an immediate pass to a teammate and a counterattack.",
      },
      {
        title: "Basic Save",
        description: "Basic save technique",
        fullDescription:
          "Note: You can dash before diving to increase speed.",
      },
    ],
  },
  fr: {
    pageTitle: "Techniques de Gardien",
    pageDescription:
      "Découvrez les techniques essentielles pour devenir un gardien de but efficace et fiable.",
    techniques: [
      {
        title: "Son de la balle",
        description: "Apprends les effets sonores de la balle",
        fullDescription:
          "La balle fait des sons différents selon la vitesse/puissance et l'effet de la balle. Il faut apprendre à les reconnaître pour savoir l'effet de la balle (on ne peut pas différencier l'effet gauche et droite).",
      },
      {
        title: "Relance mur",
        description: "Fait rebondir la balle sur le mur pour faire une passe sur une aile",
        fullDescription:
          "Fait rebondir la balle sur le mur pour faire une passe sur une aile, un effet permet de changer l'endroit ou la balle va atterrir.",
      },
      {
        title: "Tout simplement le meilleur",
        description: "Goatesque",
        fullDescription:
          "Retourne toi et tire sur la transverse, la balle va rebondir et aller au centre du terrain",
      },
      {
        title: "Arret tir",
        description: "arrete le tir en tirant sur la balle",
        fullDescription:
          "arrete le tir en tirant sur la balle, permet de dirrectement faire une passe à un coéquipier et contre attaquer",
      },
      {
        title: "Arret",
        description: "Arret de base",
        fullDescription:
          "note : tu peut faire un dash avant le plongons pour aller plus vite",
      },
    ],
  },
}

export default function GardienPage() {
  const [lang, setLang] = useState<"en" | "fr">("en")

  useEffect(() => {
    const storedLang = localStorage.getItem("lang")
    if (storedLang) {
      setLang(storedLang as "en" | "fr")
    }
  }, [])

  const t = translations[lang]

  const techniques: Array<{
    id: number
    videoUrl: string
    videoType: "local" | "youtube"
    difficulty: number
    utility: number
    title: string
    description: string
    fullDescription: string
  }> = [
    {
      id: 1,
      videoUrl: "/video/Gardien/SonDesTirs.mp4",
      videoType: "local",
      difficulty: 4,
      utility: 2,
      ...t.techniques[0],
    },
    {
      id: 2,
      videoUrl: "/video/Gardien/relancemur.mp4",
      videoType: "local",
      difficulty: 1,
      utility: 2,
      ...t.techniques[0],
    },
    {
      id: 3,
      videoUrl: "/video/Gardien/GoatGK.mp4",
      videoType: "local",
      difficulty: 5,
      utility: 1,
      ...t.techniques[0],
    },    {
      id: 4,
      videoUrl: "/video/Gardien/arrettir.mp4",
      videoType: "local",
      difficulty:3,
      utility: 4,
      ...t.techniques[0],
    },
    {
      id: 5,
      videoUrl: "/video/Gardien/Arret+dasharret.mp4",
      videoType: "local",
      difficulty: 2,
      utility: 5,
      ...t.techniques[0],
    },
  ]

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow container py-8">
        <div className="space-y-4 mb-8">
          <h1 className="text-3xl font-bold">{t.pageTitle}</h1>
          <p className="text-muted-foreground">{t.pageDescription}</p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {techniques.map((technique) => (
            <TechniqueCard
              key={technique.id}
              title={technique.title}
              description={technique.description}
              videoUrl={technique.videoUrl}
              fullDescription={technique.fullDescription}
              difficulty={technique.difficulty}
              utility={technique.utility}
              videoType={technique.videoType}
            />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  )
}
