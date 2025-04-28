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
    videoUrl: "/video/dribles/arcenciel.mp4",
    videoType: "local",
    fullDescription: "fait ta touche pour pousser la balle et appuie sur le bouton modifier pour faire un arc-en-ciel, c'est un dribble puissant qui permet de passer des joueurs qui tacles ou débutants mais un joueur agguérie sera le contrer avec un controle ou un tir",
    difficulty: 1,
    utility: 4,
  },
  {
    id: 2,
    title: "Controle",
    description: "Controle qui pousse la balle",
    videoUrl: "/video/dribles/controle.mp4",
    videoType: "local",
    fullDescription: "fait ta touche pour pousser la balle et appuie sur le bouton pousser la balle quand elle attérie proche de toi pour faire un controle",
    difficulty: 1,
    utility: 5,
  },


  {
    id: 3,
    title: "Controle parfait",
    description: "Controle qui pousse la balle",
    videoUrl: "/video/dribles/controleparfait.mp4",
    videoType: "local",
    fullDescription: "met toi exactement sur le point d'atterrissage de la balle pour faire un contrôle qui ne nécessite pas de pousser la balle tu peut directement bouger avec",
    difficulty: 2,
    utility: 5,
  },
  {
    id: 4,
    title: "Controle tete",
    description: "Controle qui pousse la balle en hauteur pour éviter l'adversaire",
    videoUrl: "/video/dribles/controleTete.mp4",
    videoType: "local",
    fullDescription: "Controle qui pousse la balle en hauteur pour éviter l'adversaire, pour le faire il faut faire la même combinaison que l'arc en ciel mais avant de toucher la balle en étant bien positionner",
    difficulty: 3,
    utility: 3,
  },
  {
    id: 5,
    title: "DashDance",
    description: "Brouille les sens de l'adversaire",
    videoUrl: "/video/dribles/dashdance.mp4",
    videoType: "local",
    fullDescription: "appuie sur ta touche du mode drible et relâche la plusieurs fois très vite tout en bougeant pour faire ces gestes flou",
    difficulty: 2,
    utility: 1,
  },
  {
    id: 6,
    title: "Drible Cancel",
    description: "Cancel la latence après un drible",
    videoUrl: "/video/dribles/DribleCancel.mp4",
    videoType: "local",
    fullDescription: "si tu input une action comme pousser la balle ou tirer ou passer juste après avoir fait tes deux drible tu peut éviter le lag des dribles",
    difficulty: 1,
    utility: 5,
  },
  {
    id: 7,
    title: "Drible",
    description: "Drible basiques",
    videoUrl: "/video/dribles/dribles+specialpc.mp4",
    videoType: "local",
    fullDescription: "avec la touche pousser la balle en mode drible tu peut faire un drible, tu peut enchainer un deuxième drible dirrectement sans latence mais ensuite tu aura du lag (sur clavier souris si tu drible en diagonale tu ira à l'opposée à cause d'un bug)",
    difficulty: 1,
    utility: 4,
  },
  {
    id: 8,
    title: "Drible de mouvement",
    description: "Drible uniquement par tes mouvements",
    videoUrl: "/video/dribles/DriblesMouvementDashDance.mp4",
    videoType: "local",
    fullDescription: "si tu bouge assez bien tu peut dribler et passer un adversaire sans utiliser le \"drible\"",
    difficulty: 2,
    utility: 4,
  },
  {
    id: 9,
    title: "Drible tetes",
    description: "met la balle sur ta tête et parcourt le terrain",
    videoUrl: "/video/dribles/HeaderRow.mp4",
    videoType: "local",
    fullDescription: "tu peut parcourir tout le terrain en jonglant avec ta tête si tu fait le contrôle tête en boucle et en bougant",
    difficulty: 2,
    utility: 2,
  },
  {
    id: 10,
    title: "Pousser la balle",
    description: "Pousser la balle est un outil indispensable",
    videoUrl: "/video/dribles/pushball.mp4",
    videoType: "local",
    fullDescription: "pousser la balle à l'opposé permet de feinté un adversaire, aussi en poussant la balle puis courant on va plus vite qu'en l'ayant dans les pieds, faire le sprint bleu permet d'instantanément pousser la balle",
    difficulty: 1,
    utility: 5,
  },
  {
    id: 11,
    title: "WallBounce",
    description: "Fait rebondir ton personnage au mur avec la balle",
    videoUrl: "/video/dribles/wallbounce.mp4",
    videoType: "local",
    fullDescription: "pousse la balle vers le mur en avançant vers lui pour rebondir directement avec la balle",
    difficulty: 2,
    utility: 1,
  },
  {
    id: 12,
    title: "Wall Drible",
    description: "Fait rebondir la balle sur le mur pour passer un adversaire",
    videoUrl: "/video/dribles/walldrible.mp4",
    videoType: "local",
    fullDescription: "fait une passe de puissance moyenne ou faible selon ta distance avec le mur puis cours pour rattraper la balle a l'attérissage",
    difficulty: 3,
    utility: 3,
  },
  {
    id: 13,
    title: "Controle Dash",
    description: "Fait un dash pile quand tu contrôle la balle",
    videoUrl: "/video/dribles/WALLDASH.mp4",
    videoType: "local",
    fullDescription: "cela permet de dasher quand tu reçoit la balle pour être directement en mouvement le timing est dur à avoir",
    difficulty: 4,
    utility: 3,
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
