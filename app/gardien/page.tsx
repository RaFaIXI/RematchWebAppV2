import { TechniqueCard } from "@/components/technique-card"

export default function GardienPage() {
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
      title: "Son de la balle",
      description: "les effets sonores de la balle",
      videoUrl: "",
      videoType: "local",
      fullDescription: "la balle fait des sons différents selon la vitesse/puissance et l'effet de la balle , il faut apprendre à les reconnaitre pour savoir l'effet de la balle (on ne peut pas différencier l'effet gauche et droite)",
      difficulty: 1,
      utility: 2,
    },]

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
          difficulty={technique.difficulty}
          utility={technique.utility}
          videoType={technique.videoType} 
        />
        ))}
      </div>
    </div>
  )
}
