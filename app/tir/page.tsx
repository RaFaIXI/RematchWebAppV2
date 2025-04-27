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
      description: "les 3 différentes vitesses de tir",
      videoUrl: "/video/tir/degreetir.mp4",
      videoType: "local",
      fullDescription: "les 3 degres de tir sont : la balle sur le joueur, balle a porté du joueur, et balle a porté du joueur en l'air chacun a plus de puissance et de vitesse que le précédent",
      difficulty: 3,
      utility: 4,
    },
    {
      id: 2,
      title: "Tir Dévié",
      description: "Feinte le gardien avec un tir dévié",
      videoUrl: "/video/tir/deviationShot.mp4",
      videoType: "local",
      fullDescription:
        "votre équipié tire et vous déviez le ballon à l'opposé du gardien à la dernière seconde",
      difficulty: 2,
      utility: 5,
    },
    {
      id: 3,
      title: "Multi Tetes",
      description: "Feinte le gardien avec plusieurs têtes backboard",
      videoUrl: "/video/tir/infinitete.mp4",
      videoType: "local",
      fullDescription:
        "receptionne le ballon ou met le en hauteur et fait des passe lobé de la tête backboard puis tire",
      difficulty: 3,
      utility: 2,
    },
    {
      id: 4,
      title: "Tir Instantané",
      description: "Tir qui se charge instantanément full power",
      videoUrl: "/video/tir/InstaShoot.mp4",
      videoType: "local",
      fullDescription:
        "pousse la balle ou fait un controle orienté et tire instantanément sans temps de charge en maintenant le bouton de tire avant de faire le tir (voir buffer)",
      difficulty: 1,
      utility: 2,
    },
    {
      id: 5,
      title: "Tetes",
      description: "tir de la tête",
      videoUrl: "/video/tir/atetes.mp4",
      videoType: "local",
      fullDescription:
        "le tir de la tête est un tir qui est très puissant et qui peut être très efficace si vous êtes bien placé. Il faut bien viser et ne pas hésiter à tirer fort. il se fait si la balle est assez haute.",
      difficulty: 2,
      utility: 4,
    },
    {
      id: 6,
      title: "Feinte de tete",
      description: "Feinte de tete avec le controle",
      videoUrl: "/video/tir/LobFeint.mp4",
      videoType: "local",
      fullDescription:
      "Feinte de tete avec le controle",
      difficulty: 1,
      utility: 3,
    },

    {
      id: 7,
      title: "Solo SideBackboard",
      description: "Feinte de tir avec le backboard avec une passe sur le mur",
      videoUrl: "/video/tir/mixuppassecotetir.mp4",
      videoType: "local",
      fullDescription:
      "Feinte de tir avec le backboard avec une passe sur le mur",
      difficulty: 2,
      utility: 2,
    },
    {
      id: 8,
      title: "Short Pass - Shoot",
      description: "Feinte un tir avec une petite passe lobée",
      videoUrl: "/video/tir/ShortPassShoot.mp4",
      videoType: "local",
      fullDescription:
      "Feinte un tir avec une petite passe lobée court puis tir",
      difficulty: 2,
      utility: 3,
    },
    {
      id: 9,
      title: "Side Shoot",
      description: "un tir depuis le poto de corner avec un effet",
      videoUrl: "/video/tir/SideShot.mp4",
      videoType: "local",
      fullDescription:
      "il faut mettre un effet vers le but tout en décalant son curseur vers l'extérieur du but pour que le ballon parte vers l'intérieur du but grâce à l'effet",
      difficulty: 3,
      utility: 3,
    },
    {
      id: 10,
      title: "Side Wall Rebound Shoot",
      description: "un tir depuis le poto de corner avec un effet qui rebondit sur le mur pour aller dans le but",
      videoUrl: "/video/tir/SideShot.mp4",
      videoType: "local",
      fullDescription:
      "il faut viser le poto avec un effet vers le but, être précis selon la distance et mettre la force au maximum pour que le ballon rebondisse sur le mur et aille dans le but, ce tir feinte vraiment bien le gardien",
      difficulty: 4,
      utility: 4,
    },
    {
      id: 11,
      title: "Arc en ciel - Tete Backboard",
      description: "Reprend la balle dirrectement depuis l'arc en ciel et vise sur le mur avec un effet",
      videoUrl: "/video/tir/specialearcencielTeteWallBut.mp4",
      videoType: "local",
      fullDescription:
      "Reprend la balle dirrectement depuis l'arc en ciel et vise sur le mur avec un effet pour feinter le gardien",
      difficulty: 3,
      utility: 3,
    },
    {
      id: 12,
      title: "Talonade",
      description: "Regarde vers le centre du terrain et tire dans le but",
      videoUrl: "/video/tir/talonnade.mp4",
      videoType: "local",
      fullDescription:
      "retourne ton personnage vers le centre du terrain, vise les cages ou fait ta touche arrière et fait une passe vers l'arrière.",
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
      "Effet vers le bas qui lobe le gardien, il faut bien viser et mettre un effet vers le bas pour que le ballon passe au dessus du gardien ou qui rebondisse juste avant le but",
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
      "fait une passe de puissance moyenne ou faible sur le mur selon la distance et retourne le personnage vers le mur et vise la lucarne puis tir",
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
