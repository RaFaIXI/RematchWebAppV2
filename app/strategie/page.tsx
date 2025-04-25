import { TechniqueCard } from "@/components/technique-card"

export default function StrategiePage() {
  const techniques = [
    {
      id: 1,
      title: "Formation 4-4-2",
      description: "Formation classique équilibrée",
      videoUrl: "#",
      fullDescription:
        "La formation 4-4-2 est une formation classique qui offre un bon équilibre entre défense et attaque. Elle comprend quatre défenseurs, quatre milieux de terrain et deux attaquants. Cette formation permet une bonne couverture défensive tout en maintenant une présence offensive. Les milieux extérieurs peuvent soutenir l'attaque ou se replier en défense selon les besoins. Idéale pour les équipes qui cherchent la stabilité et la polyvalence.",
    },
    {
      id: 2,
      title: "Contre-attaque rapide",
      description: "Exploiter les espaces laissés par l'adversaire",
      videoUrl: "#",
      fullDescription:
        "La contre-attaque rapide consiste à exploiter les espaces laissés par l'adversaire après avoir récupéré le ballon. Dès la récupération, cherchez à progresser rapidement vers l'avant avec des passes directes ou des courses. Les joueurs sans ballon doivent créer des options de passe en se projetant vers l'avant. L'objectif est d'attaquer avant que la défense adverse ne se réorganise, créant ainsi un avantage numérique temporaire.",
    },
    {
      id: 3,
      title: "Pressing haut",
      description: "Stratégie de récupération haute du ballon",
      videoUrl: "#",
      fullDescription:
        "Le pressing haut est une stratégie défensive agressive qui consiste à récupérer le ballon dans le camp adverse. Toute l'équipe monte pour mettre la pression sur les défenseurs et le gardien adverses. Cette approche nécessite une bonne condition physique et une coordination parfaite entre les joueurs. L'avantage est de récupérer le ballon près du but adverse, créant immédiatement des occasions de but, mais elle comporte des risques si l'adversaire parvient à briser le pressing.",
    },
    {
      id: 4,
      title: "Jeu de possession",
      description: "Contrôler le match par la possession du ballon",
      videoUrl: "#",
      fullDescription:
        "Le jeu de possession vise à contrôler le match en gardant le ballon. Cette stratégie repose sur des passes courtes et précises, des mouvements constants sans ballon et une patience pour créer des occasions. Les joueurs doivent constamment offrir des solutions au porteur du ballon en créant des triangles de passes. Cette approche fatigue l'adversaire qui court après le ballon et permet de dicter le rythme du match, mais nécessite une grande technique collective.",
    },
    {
      id: 5,
      title: "Coups de pied arrêtés",
      description: "Stratégies pour les corners et coups francs",
      videoUrl: "#",
      fullDescription:
        "Les coups de pied arrêtés (corners, coups francs) sont des opportunités précieuses de marquer. Pour les corners, variez entre ballons au premier poteau, au second poteau ou au point de penalty. Utilisez des blocages et des appels croisés pour créer des espaces. Pour les coups francs directs, analysez le mur et le positionnement du gardien pour choisir la technique appropriée. Les coups francs indirects nécessitent des combinaisons travaillées à l'entraînement pour surprendre l'adversaire.",
    },
    {
      id: 6,
      title: "Bloc bas",
      description: "Défense compacte près de son but",
      videoUrl: "#",
      fullDescription:
        "Le bloc bas est une stratégie défensive où l'équipe se replie près de son but, formant un bloc compact difficile à pénétrer. Les lignes défensives et de milieu sont rapprochées pour limiter les espaces entre les lignes. Cette approche est efficace contre des équipes techniquement supérieures ou pour protéger un résultat favorable. Elle nécessite discipline, concentration et communication. La transition vers l'attaque doit être planifiée, souvent via des contre-attaques rapides ou un attaquant pivot capable de conserver le ballon.",
    },
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
          />
        ))}
      </div>
    </div>
  )
}
