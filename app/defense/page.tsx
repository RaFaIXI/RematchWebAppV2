import { TechniqueCard } from "@/components/technique-card"

export default function DefensePage() {
  const techniques = [
    {
      id: 1,
      title: "Tacle glissé",
      description: "Technique pour récupérer le ballon au sol",
      videoUrl: "/video/Defense/tacleglisse.mp4",
      fullDescription:
        "Le tacle glissé est une technique défensive utilisée pour récupérer le ballon quand l'attaquant est en possession. Approchez l'adversaire en sprintant à une vitesse assez haute, appuyer sur votre touche de tacle. Cette technique doit être utilisée en dernier recours car elle vous met temporairement hors position si vous échouez.",
      difficulty: 1,
      utility: 4
    },
    {
      id: 2,
      title: "Tacle",
      description: "Technique pour récupérer le ballon au sol",
      videoUrl: "/video/Defense/tacle.mp4",
      fullDescription:
      "Le tacle est une technique défensive utilisée pour récupérer le ballon quand l'attaquant est en possession sans autant commit que le tacle glissé. Approchez l'adversaire sans courrir, appuyer sur votre touche de tacle. Cette technique ce fait battre par des dribbles rapides, mais est efficace contre les joueurs moins agiles.",
      difficulty: 1,
      utility: 5
    },
    {
      id: 3,
      title: "Interception",
      description: "Anticiper et couper les passes et tirs adverses",
      videoUrl: "/video/Defense/block.mp4",
      fullDescription:
        "L'interception consiste à anticiper et couper les passes adverses. Observez le jeu et la posture des joueurs adverses pour prédire leurs intentions de passe. Positionnez-vous dans les lignes de passe et tirs potentielles. Timing et lecture du jeu sont essentiels - mettez vous en posture defensive et laissez la balle vous atteindre. Une bonne interception peut rapidement transformer la défense en attaque.",
      difficulty: 3,
      utility: 3
    },

  ]

  return (
    <div className="container py-8">
      <div className="space-y-4 mb-8">
        <h1 className="text-3xl font-bold">Techniques de Défense</h1>
        <p className="text-muted-foreground">
          Maîtrisez l'art de défendre avec ces techniques essentielles pour protéger votre but et récupérer le ballon.
        </p>
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
          />
        ))}
      </div>
    </div>
  )
}
