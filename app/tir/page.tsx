import { TechniqueCard } from "@/components/technique-card"

export default function TirPage() {
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
      title: "Degrés de tir",
      description: "Les 3 différentes vitesses de tir",
      videoUrl: "/video/tir/degreetir.mp4",
      videoType: "local",
      fullDescription: "Les 3 degrés de tir sont : la balle sur le joueur, balle à portée du joueur, et balle à portée du joueur en l'air. Chacun a plus de puissance et de vitesse que le précédent.",
      difficulty: 3,
      utility: 4,
    },
    {
      id: 2,
      title: "Tir dévié",
      description: "Feinte le gardien avec un tir dévié",
      videoUrl: "/video/tir/deviationShot.mp4",
      videoType: "local",
      fullDescription:
        "Votre équipier tire et vous déviez le ballon à l'opposé du gardien à la dernière seconde.",
      difficulty: 2,
      utility: 5,
    },
    {
      id: 3,
      title: "Multi-têtes",
      description: "Feinte le gardien avec plusieurs têtes backboard",
      videoUrl: "/video/tir/infinitete.mp4",
      videoType: "local",
      fullDescription:
        "Réceptionnez le ballon ou mettez-le en hauteur et faites des passes lobées de la tête backboard, puis tirez.",
      difficulty: 3,
      utility: 2,
    },
    {
      id: 4,
      title: "Tir instantané",
      description: "Tir qui se charge instantanément à pleine puissance",
      videoUrl: "/video/tir/InstaShoot.mp4",
      videoType: "local",
      fullDescription:
        "Poussez la balle ou faites un contrôle orienté et tirez instantanément sans temps de charge en maintenant le bouton de tir avant de faire le tir (voir buffer).",
      difficulty: 1,
      utility: 2,
    },
    {
      id: 5,
      title: "Têtes",
      description: "Tir de la tête",
      videoUrl: "/video/tir/atetes.mp4",
      videoType: "local",
      fullDescription:
        "Le tir de la tête est un tir très puissant qui peut être très efficace si vous êtes bien placé. Il faut bien viser et ne pas hésiter à tirer fort. Il se fait si la balle est assez haute.",
      difficulty: 2,
      utility: 4,
    },
    {
      id: 6,
      title: "Feinte de tête",
      description: "Feinte de tête avec le contrôle",
      videoUrl: "/video/tir/LobFeint.mp4",
      videoType: "local",
      fullDescription:
        "Feinte de tête avec le contrôle.",
      difficulty: 1,
      utility: 3,
    },
    {
      id: 7,
      title: "Solo Side Backboard",
      description: "Feinte de tir avec le backboard et une passe sur le mur",
      videoUrl: "/video/tir/mixuppassecotetir.mp4",
      videoType: "local",
      fullDescription:
        "Feinte de tir avec le backboard et une passe sur le mur.",
      difficulty: 2,
      utility: 2,
    },
    {
      id: 8,
      title: "Petite passe - Tir",
      description: "Feinte un tir avec une petite passe lobée",
      videoUrl: "/video/tir/ShortPassShoot.mp4",
      videoType: "local",
      fullDescription:
        "Feinte un tir avec une petite passe lobée courte, puis tir.",
      difficulty: 2,
      utility: 3,
    },
    {
      id: 9,
      title: "Tir latéral",
      description: "Tir depuis le poteau de corner avec un effet",
      videoUrl: "/video/tir/SideShot.mp4",
      videoType: "local",
      fullDescription:
        "Il faut mettre un effet vers le but tout en décalant son curseur vers l'extérieur du but pour que le ballon parte vers l'intérieur grâce à l'effet.",
      difficulty: 3,
      utility: 3,
    },
    {
      id: 10,
      title: "Tir rebond mur latéral",
      description: "Tir depuis le poteau de corner avec un effet qui rebondit sur le mur",
      videoUrl: "/video/tir/SideShot.mp4",
      videoType: "local",
      fullDescription:
        "Il faut viser le poteau avec un effet vers le but, être précis selon la distance et mettre la force au maximum pour que le ballon rebondisse sur le mur et aille dans le but. Ce tir feinte très bien le gardien.",
      difficulty: 4,
      utility: 4,
    },
    {
      id: 11,
      title: "Arc-en-ciel - Tête Backboard",
      description: "Reprend la balle depuis l'arc-en-ciel et vise sur le mur avec un effet",
      videoUrl: "/video/tir/specialearcencielTeteWallBut.mp4",
      videoType: "local",
      fullDescription:
        "Reprenez la balle directement depuis l'arc-en-ciel et visez sur le mur avec un effet pour feinter le gardien.",
      difficulty: 3,
      utility: 3,
    },
    {
      id: 12,
      title: "Talonade",
      description: "Regardez vers le centre du terrain et tirez dans le but",
      videoUrl: "/video/tir/talonnade.mp4",
      videoType: "local",
      fullDescription:
        "Retournez votre personnage vers le centre du terrain, visez les cages ou faites une touche arrière et faites une passe vers l'arrière.",
      difficulty: 3,
      utility: 2,
    },
    {
      id: 13,
      title: "Effet - bas",
      description: "Effet vers le bas qui lobe le gardien",
      videoUrl: "/video/tir/tiranglebas.mp4",
      videoType: "local",
      fullDescription:
        "Effet vers le bas qui lobe le gardien. Il faut bien viser et mettre un effet vers le bas pour que le ballon passe au-dessus du gardien ou rebondisse juste avant le but.",
      difficulty: 2,
      utility: 3,
    },
    {
      id: 14,
      title: "Wall retournée",
      description: "Retournée seule à l'aveugle",
      videoUrl: "/video/tir/Wallretourne.mp4",
      videoType: "local",
      fullDescription:
        "Faites une passe de puissance moyenne ou faible sur le mur selon la distance, retournez le personnage vers le mur, visez la lucarne puis tirez.",
      difficulty: 4,
      utility: 3,
    },
  ]

  return (
    <div className="container py-8">
      <div className="space-y-4 mb-8">
        <h1 className="text-3xl font-bold">Techniques de Tir</h1>
        <p className="text-muted-foreground">
          Découvrez différentes techniques de tir pour marquer plus de buts et améliorer votre efficacité devant le but.
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
