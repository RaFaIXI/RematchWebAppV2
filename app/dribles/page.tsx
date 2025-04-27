import { TechniqueCard } from "@/components/technique-card"

export default function DriblesPage() {
  const techniques: {
    id: number
    title: string
    description: string
    videoUrl: string
    videoType: "local" | "youtube"
    fullDescription: string
    difficulty: number
    utility: number
  }[] = [    
    {
    id: 1,
    title: "Arc-en-ciel",
    description: "faire un arc-en-ciel pour passer au-dessus de l'adversaire",
    videoUrl: "/video/tir/arcenciel.mp4",
    videoType: "local",
    fullDescription: "fait ta touche pour pousser la balle et appuie sur le bouton modifier pour faire un arc-en-ciel, c'est un dribble puissant qui permet de passer des joueurs qui tacles ou débutants mais un joueur agguérie sera le contrer avec un controle ou un tir",
    difficulty: 1,
    utility: 4,
  },
  {
    id: 2,
    title: "Controle",
    description: "Controle qui pousse la balle",
    videoUrl: "/video/tir/controle.mp4",
    videoType: "local",
    fullDescription: "fait ta touche pour pousser la balle et appuie sur le bouton pousser la balle quand elle attérie proche de toi pour faire un controle",
    difficulty: 1,
    utility: 5,
  },
  {
    id: 3,
    title: "Controle parfait",
    description: "Controle qui pousse la balle",
    videoUrl: "/video/tir/controleparfait.mp4",
    videoType: "local",
    fullDescription: "fait ta touche pour pousser la balle et appuie sur le bouton pousser la balle quand elle attérie proche de toi pour faire un controle",
    difficulty: 1,
    utility: 5,
  },
  ]

  return (
    <div className="container py-8">
      <div className="space-y-4 mb-8">
        <h1 className="text-3xl font-bold">Techniques de Dribble</h1>
        <p className="text-muted-foreground">
          Maîtrisez l'art du dribble avec ces techniques pour éliminer vos adversaires et créer des occasions.
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
          videoType={technique.videoType} 
        />
        ))}
      </div>
    </div>
  )
}
