import { TechniqueCard } from "@/components/technique-card"
import Footer from "@/components/Footer" 

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
      description: "Faire un arc-en-ciel pour passer au-dessus de l'adversaire",
      videoUrl: "/video/drible/arcenciel.mp4",
      videoType: "local",
      fullDescription: "Fais ta touche pour pousser la balle et appuie sur le bouton modifier pour faire un arc-en-ciel. C’est un dribble puissant qui permet de passer des joueurs qui taclent ou débutants, mais un joueur aguerri saura le contrer avec un contrôle ou un tir.",
      difficulty: 1,
      utility: 4,
    },
    {
      id: 2,
      title: "Contrôle",
      description: "Contrôle qui pousse la balle",
      videoUrl: "/video/drible/controle.mp4",
      videoType: "local",
      fullDescription: "Fais ta touche pour pousser la balle et appuie sur le bouton pousser la balle quand elle atterrit proche de toi pour faire un contrôle.",
      difficulty: 1,
      utility: 5,
    },
    {
      id: 3,
      title: "Contrôle parfait",
      description: "Contrôle qui pousse la balle",
      videoUrl: "/video/drible/controleparfait.mp4",
      videoType: "local",
      fullDescription: "Mets-toi exactement sur le point d'atterrissage de la balle pour faire un contrôle qui ne nécessite pas de pousser la balle. Tu peux directement bouger avec.",
      difficulty: 2,
      utility: 5,
    },
    {
      id: 4,
      title: "Contrôle tête",
      description: "Contrôle qui pousse la balle en hauteur pour éviter l'adversaire",
      videoUrl: "/video/drible/controleTete.mp4",
      videoType: "local",
      fullDescription: "Contrôle qui pousse la balle en hauteur pour éviter l'adversaire. Pour le faire, il faut faire la même combinaison que l’arc-en-ciel, mais avant de toucher la balle et en étant bien positionné.",
      difficulty: 3,
      utility: 3,
    },
    {
      id: 5,
      title: "DashDance",
      description: "Brouille les sens de l'adversaire",
      videoUrl: "/video/drible/dashdance.mp4",
      videoType: "local",
      fullDescription: "Appuie sur ta touche du mode dribble et relâche-la plusieurs fois très vite tout en bougeant pour faire ces gestes flous.",
      difficulty: 2,
      utility: 1,
    },
    {
      id: 6,
      title: "Dribble Cancel",
      description: "Annule la latence après un dribble",
      videoUrl: "/video/drible/DribleCancel.mp4",
      videoType: "local",
      fullDescription: "Si tu input une action comme pousser la balle, tirer ou passer juste après avoir fait tes deux dribbles, tu peux éviter le lag des dribbles.",
      difficulty: 1,
      utility: 5,
    },
    {
      id: 7,
      title: "Dribble",
      description: "Dribbles basiques",
      videoUrl: "/video/drible/dribles+specialpc.mp4",
      videoType: "local",
      fullDescription: "Avec la touche pousser la balle en mode dribble, tu peux faire un dribble. Tu peux enchaîner un deuxième dribble directement sans latence, mais ensuite tu auras du lag. (Sur clavier-souris, si tu dribbles en diagonale, tu iras à l'opposé à cause d'un bug.)",
      difficulty: 1,
      utility: 4,
    },
    {
      id: 8,
      title: "Dribble de mouvement",
      description: "Dribble uniquement par tes mouvements",
      videoUrl: "/video/drible/DriblesMouvementDashDance.mp4",
      videoType: "local",
      fullDescription: "Si tu bouges assez bien, tu peux dribbler et passer un adversaire sans utiliser le \"dribble\".",
      difficulty: 2,
      utility: 4,
    },
    {
      id: 9,
      title: "Dribble tête",
      description: "Mets la balle sur ta tête et parcours le terrain",
      videoUrl: "/video/drible/HeaderRow.mp4",
      videoType: "local",
      fullDescription: "Tu peux parcourir tout le terrain en jonglant avec ta tête si tu fais le contrôle tête en boucle tout en bougeant.",
      difficulty: 2,
      utility: 2,
    },
    {
      id: 10,
      title: "Pousser la balle",
      description: "Pousser la balle est un outil indispensable",
      videoUrl: "/video/drible/pushball.mp4",
      videoType: "local",
      fullDescription: "Pousser la balle à l'opposé permet de feinter un adversaire. Aussi, en poussant la balle puis en courant, on va plus vite qu’en l’ayant dans les pieds. Faire le sprint bleu permet d’instantanément pousser la balle.",
      difficulty: 1,
      utility: 5,
    },
    {
      id: 11,
      title: "WallBounce",
      description: "Fais rebondir ton personnage au mur avec la balle",
      videoUrl: "/video/drible/wallbounce.mp4",
      videoType: "local",
      fullDescription: "Pousse la balle vers le mur en avançant vers lui pour rebondir directement avec la balle.",
      difficulty: 2,
      utility: 1,
    },
    {
      id: 12,
      title: "Wall Dribble",
      description: "Fais rebondir la balle sur le mur pour passer un adversaire",
      videoUrl: "/video/drible/walldrible.mp4",
      videoType: "local",
      fullDescription: "Fais une passe de puissance moyenne ou faible selon ta distance avec le mur, puis cours pour rattraper la balle à l’atterrissage.",
      difficulty: 3,
      utility: 3,
    },
    {
      id: 13,
      title: "Contrôle Dash",
      description: "Fais un dash pile quand tu contrôles la balle",
      videoUrl: "/video/drible/WALLDASH.mp4",
      videoType: "local",
      fullDescription: "Cela permet de dasher quand tu reçois la balle pour être directement en mouvement. Le timing est dur à avoir.",
      difficulty: 4,
      utility: 3,
    },
  ]


  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow container py-8">
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
      </main>

      <Footer />
    </div>
  )
}