import { TechniqueCard } from "@/components/technique-card"

export default function GardienPage() {
  const techniques = [
    
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
