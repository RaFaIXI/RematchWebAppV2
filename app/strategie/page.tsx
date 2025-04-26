import { TechniqueCard } from "@/components/technique-card"

export default function StrategiePage() {
  const techniques = [
    {
      id: 1,
      title: "BackBoard",
      description: "Rebondir le ballon sur le mur pour centrer",
      videoUrl: "/video/Strategie/BackBoard.mp4",
      fullDescription:
        "La technique du BackBoard consiste à utiliser le mur pour faire rebondir le ballon et créer un centre précis. Cela permet de surprendre la défense adverse et de créer des occasions de but. Pour exécuter cette technique, placez-vous à une distance appropriée du mur, frappez le ballon avec précision pour qu'il rebondisse sur le mur et arrive à un coéquipier dans la zone de tir. les effets permettent de controler l'atterisage de la balle.",
      difficulty: 2,
      utility: 5,
    },
    {
      id: 2,
      title: "Buffer",
      description: "Exploiter le Buffer pour créer des occasions",
      videoUrl: "/video/Strategie/buffergclickmiddleligneblanche.mp4",
      fullDescription:
        " le buffer c’est une sorte de système qui enregistre les boutons que tu appuies un tout petit peu avant qu’ils soient vraiment utilisés (1.5sec environt), pour les exécuter au bon moment. \nTu appuies sur \"tir\" juste avant que le ballon arrive. \n→ Le jeu garde ton appui en mémoire pendant un court instant. \n→ Dès que le joueur peut effectivement tirer, le jeu exécute ton tir.",
      difficulty: 2,
      utility: 3,
    },
    {
      id: 3,
      title: "Formation en pyramide",
      description: "Formation offensive pour créer des occasions",
      videoUrl: "/video/Strategie/UnlockUltimatePowerwithPyramidFormationinRematch.mp4",
      fullDescription:
        "La formation en pyramide est une stratégie offensive qui permet de créer des occasions de but en exploitant les espaces laissés par la défense adverse. En plaçant vos joueurs en forme de pyramide, vous pouvez maximiser les options de passe et de tir. Cette formation est particulièrement efficace pour déstabiliser les défenses compactes et créer des ouvertures.",
      difficulty: 5,
      utility: 3,},
  ]

  return (
    <div className="container py-8">
      <div className="space-y-4 mb-8">
        <h1 className="text-3xl font-bold">Stratégies de Jeu</h1>
        <p className="text-muted-foreground">
          Découvrez différentes stratégies et tactiques pour améliorer le jeu collectif de votre équipe.
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
