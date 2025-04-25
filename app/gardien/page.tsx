import { TechniqueCard } from "@/components/technique-card"

export default function GardienPage() {
  const techniques = [
    {
      id: 1,
      title: "Positionnement",
      description: "Placement optimal dans les buts",
      videoUrl: "#",
      fullDescription:
        "Le positionnement est la base du jeu de gardien. Placez-vous de manière à réduire l'angle de tir de l'attaquant. Ajustez votre position en fonction de la position du ballon sur le terrain. Restez sur la ligne imaginaire entre le ballon et le centre du but. Anticipez les situations de jeu tout en maintenant une posture équilibrée, prêt à réagir dans toutes les directions.",
    },
    {
      id: 2,
      title: "Plongeon latéral",
      description: "Technique pour arrêter les tirs bas sur les côtés",
      videoUrl: "#",
      fullDescription:
        "Le plongeon latéral permet d'arrêter les tirs bas dirigés vers les coins du but. Poussez avec la jambe opposée au côté du plongeon. Étendez les bras vers le ballon, les mains formant un triangle pour maximiser la surface d'arrêt. Atterrissez d'abord sur la hanche et le côté pour amortir la chute. La synchronisation et l'explosivité sont essentielles pour couvrir rapidement la distance nécessaire.",
    },
    {
      id: 3,
      title: "Sortie aérienne",
      description: "Capter les centres et ballons aériens",
      videoUrl: "#",
      fullDescription:
        "La sortie aérienne est utilisée pour capter les centres et ballons aériens dans la surface. Évaluez rapidement si vous pouvez atteindre le ballon avant les attaquants. Annoncez clairement votre sortie ('J'ai!'). Utilisez un genou levé comme protection et attrapez le ballon au point le plus haut avec les deux mains, les pouces se touchant presque. Atterrissez de manière équilibrée, prêt à relancer rapidement.",
    },
    {
      id: 4,
      title: "Jeu au pied",
      description: "Techniques de relance et participation au jeu",
      videoUrl: "#",
      fullDescription:
        "Le jeu au pied moderne est essentiel pour un gardien. Travaillez votre précision pour les dégagements courts et longs. Utilisez l'intérieur du pied pour les passes courtes précises et le cou-de-pied pour les dégagements longs. Restez calme sous pression et choisissez la meilleure option de relance. Un bon jeu au pied permet de lancer rapidement les contre-attaques et de servir comme 'joueur supplémentaire' dans la construction du jeu.",
    },
    {
      id: 5,
      title: "Un contre un",
      description: "Face à face avec un attaquant",
      videoUrl: "#",
      fullDescription:
        "Dans les situations de un contre un, la patience est cruciale. Avancez pour réduire l'angle mais restez sur vos appuis. Adoptez la position en 'étoile' - bras écartés et jambe levée pour maximiser votre surface corporelle. Ne plongez pas trop tôt, forcez l'attaquant à faire le premier mouvement. Si l'attaquant vous dribble, essayez de rester debout le plus longtemps possible pour couvrir le maximum d'espace.",
    },
    {
      id: 6,
      title: "Organisation défensive",
      description: "Commander et organiser sa défense",
      videoUrl: "#",
      fullDescription:
        "L'organisation défensive est une responsabilité clé du gardien. Communiquez constamment avec vos défenseurs pour les positionner correctement. Donnez des instructions claires et concises ('Montez!', 'Homme libre à droite!'). Anticipez les dangers potentiels que vos défenseurs ne peuvent pas voir. Une bonne organisation peut prévenir de nombreuses situations dangereuses avant qu'elles ne se développent.",
    },
  ]

  return (
    <div className="container py-8">
      <div className="space-y-4 mb-8">
        <h1 className="text-3xl font-bold">Techniques de Gardien</h1>
        <p className="text-muted-foreground">
          Découvrez les techniques essentielles pour devenir un gardien de but efficace et fiable.
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
