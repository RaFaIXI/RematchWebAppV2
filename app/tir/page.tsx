import { TechniqueCard } from "@/components/technique-card"

export default function TirPage() {
  const techniques = [
    {
      id: 1,
      title: "Tir du cou-de-pied",
      description: "La technique de base pour un tir puissant",
      videoUrl: "#",
      fullDescription:
        "Le tir du cou-de-pied est la technique de base pour un tir puissant. Placez votre pied d'appui à côté du ballon, pointant vers la cible. Frappez le ballon avec le dessus du pied (cou-de-pied) en gardant la cheville verrouillée. Suivez votre mouvement après le contact pour maximiser la puissance.",
    },
    {
      id: 2,
      title: "Tir enroulé",
      description: "Pour contourner les défenseurs et le gardien",
      videoUrl: "#",
      fullDescription:
        "Le tir enroulé permet de contourner les défenseurs et le gardien. Approchez le ballon légèrement par le côté. Utilisez l'intérieur de votre pied pour frapper le côté du ballon, en enroulant votre jambe autour pour créer un effet. Cette technique est idéale pour les coups francs et les tirs depuis les côtés de la surface de réparation.",
    },
    {
      id: 3,
      title: "Volée",
      description: "Frapper le ballon directement dans les airs",
      videoUrl: "#",
      fullDescription:
        "La volée consiste à frapper le ballon directement dans les airs. Gardez les yeux sur le ballon pendant qu'il descend. Positionnez votre corps sous le ballon et frappez-le avec le dessus du pied au moment où il arrive à hauteur idéale. Gardez le corps équilibré et suivez votre mouvement pour diriger le tir.",
    },
    {
      id: 4,
      title: "Tir du pointu",
      description: "Pour surprendre le gardien avec un tir rapide",
      videoUrl: "#",
      fullDescription:
        "Le tir du pointu permet de surprendre le gardien avec un tir rapide. Utilisez la pointe de votre chaussure pour frapper le ballon. Cette technique sacrifie la puissance pour la rapidité d'exécution, ne nécessitant qu'un mouvement minimal du pied. Idéal dans les situations où vous avez peu de temps pour armer votre tir.",
    },
    {
      id: 5,
      title: "Tir en lucarne",
      description: "Viser les coins supérieurs du but",
      videoUrl: "#",
      fullDescription:
        "Le tir en lucarne consiste à viser les coins supérieurs du but, là où le gardien a le plus de difficulté à atteindre. Frappez le ballon légèrement sous son centre avec le cou-de-pied. Inclinez légèrement le corps en arrière pour donner de l'élévation. Cette technique nécessite beaucoup de précision mais est très difficile à arrêter pour les gardiens.",
    },
    {
      id: 6,
      title: "Penalty",
      description: "Techniques pour réussir vos penalties",
      videoUrl: "#",
      fullDescription:
        "Pour réussir un penalty, la confiance et la concentration sont essentielles. Choisissez votre coin avant de tirer et ne changez pas d'avis. Une course d'élan régulière de 3-5 pas est idéale. Observez discrètement le gardien mais restez concentré sur votre technique. Variez vos tirs entre puissance et placement selon vos forces.",
    },
    {
      id: 7,
      title: "Penalty2",
      description: "Techniques pour réussir vos penalties",
      videoUrl: "#",
      fullDescription:
        "Pour réussir un penalty, la confiance et la concentration sont essentielles. Choisissez votre coin avant de tirer et ne changez pas d'avis. Une course d'élan régulière de 3-5 pas est idéale. Observez discrètement le gardien mais restez concentré sur votre technique. Variez vos tirs entre puissance et placement selon vos forces.",
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
          />
        ))}
      </div>
    </div>
  )
}
