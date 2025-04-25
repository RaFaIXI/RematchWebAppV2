import { TechniqueCard } from "@/components/technique-card"

export default function DefensePage() {
  const techniques = [
    {
      id: 1,
      title: "Tacle glissé",
      description: "Technique pour récupérer le ballon au sol",
      videoUrl: "#",
      fullDescription:
        "Le tacle glissé est une technique défensive utilisée pour récupérer le ballon quand l'attaquant est en possession. Approchez l'adversaire de côté, pliez la jambe non-tacleuse et étendez l'autre jambe vers le ballon en glissant sur le côté. Visez le ballon et non le joueur pour éviter les fautes. Cette technique doit être utilisée en dernier recours car elle vous met temporairement hors position si vous échouez.",
    },
    {
      id: 2,
      title: "Marquage individuel",
      description: "Suivre et neutraliser un joueur spécifique",
      videoUrl: "#",
      fullDescription:
        "Le marquage individuel consiste à suivre et neutraliser un joueur spécifique. Positionnez-vous entre l'attaquant et votre but. Maintenez une distance qui vous permet de réagir à ses mouvements. Restez sur vos appuis et anticipez ses déplacements plutôt que de réagir au ballon. Communiquez avec vos coéquipiers pour les changements de marquage.",
    },
    {
      id: 3,
      title: "Interception",
      description: "Anticiper et couper les passes adverses",
      videoUrl: "#",
      fullDescription:
        "L'interception consiste à anticiper et couper les passes adverses. Observez le jeu et la posture des joueurs adverses pour prédire leurs intentions de passe. Positionnez-vous dans les lignes de passe potentielles. Timing et lecture du jeu sont essentiels - démarrez votre mouvement juste avant que la passe ne soit effectuée. Une bonne interception peut rapidement transformer la défense en attaque.",
    },
    {
      id: 4,
      title: "Jeu de tête défensif",
      description: "Techniques pour dégager les ballons aériens",
      videoUrl: "#",
      fullDescription:
        "Le jeu de tête défensif est crucial pour dégager les ballons aériens. Gardez les yeux sur le ballon et positionnez votre corps pour bloquer l'adversaire. Sautez en utilisant les bras (sans pousser) pour vous équilibrer et gagner de la hauteur. Frappez le ballon avec le front, pas le sommet de la tête, et dirigez-le vers les zones latérales loin du but. La synchronisation du saut est essentielle pour dominer dans les duels aériens.",
    },
    {
      id: 5,
      title: "Pressing",
      description: "Mettre la pression sur le porteur du ballon",
      videoUrl: "#",
      fullDescription:
        "Le pressing consiste à mettre une pression immédiate sur le porteur du ballon. Approchez rapidement le joueur adverse en réduisant son espace et son temps de décision. Orientez le joueur vers les lignes de touche ou vers vos coéquipiers. Le pressing efficace est souvent collectif - coordonnez-vous avec vos coéquipiers pour fermer les options de passe. L'objectif est de forcer une erreur ou une passe précipitée que vous pouvez intercepter.",
    },
    {
      id: 6,
      title: "Position défensive",
      description: "Posture et placement pour défendre efficacement",
      videoUrl: "#",
      fullDescription:
        "La position défensive correcte est la base d'une bonne défense. Fléchissez légèrement les genoux avec le poids sur l'avant des pieds pour réagir rapidement. Positionnez-vous de côté (position en 'demi-lune') pour pouvoir suivre l'attaquant dans toutes les directions. Maintenez une distance appropriée - assez proche pour intervenir, mais pas trop pour éviter d'être facilement dépassé. Gardez toujours les yeux sur le ballon et le joueur simultanément.",
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
          />
        ))}
      </div>
    </div>
  )
}
