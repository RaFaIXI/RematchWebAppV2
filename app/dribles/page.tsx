import { TechniqueCard } from "@/components/technique-card"

export default function DriblesPage() {
  const techniques = [
    {
      id: 1,
      title: "Crochet",
      description: "Changement rapide de direction",
      videoUrl: "#",
      fullDescription:
        "Le crochet est un changement rapide de direction pour éliminer un défenseur. Approchez le défenseur en contrôlant le ballon. Au dernier moment, utilisez l'intérieur ou l'extérieur du pied pour pousser le ballon dans une nouvelle direction. Accompagnez ce mouvement d'une feinte du corps dans la direction opposée pour tromper le défenseur. L'efficacité du crochet repose sur la rapidité d'exécution et le timing.",
    },
    {
      id: 2,
      title: "Passement de jambes",
      description: "Feinte pour déséquilibrer le défenseur",
      videoUrl: "#",
      fullDescription:
        "Le passement de jambes est une feinte classique pour déséquilibrer le défenseur. Faites passer votre pied autour du ballon sans le toucher, comme si vous alliez le frapper ou le déplacer. Ce mouvement vise à faire réagir le défenseur dans la mauvaise direction. Enchaînez immédiatement avec une accélération ou un autre geste technique pour exploiter le déséquilibre créé. Ce dribble est particulièrement efficace quand il est exécuté à vitesse élevée.",
    },
    {
      id: 3,
      title: "Roulette",
      description: "Rotation complète autour du ballon",
      videoUrl: "#",
      fullDescription:
        "La roulette consiste en une rotation complète autour du ballon pour éliminer un adversaire. Placez la semelle d'un pied sur le ballon et tirez-le légèrement en arrière. Pivotez ensuite votre corps en faisant une rotation complète de 360 degrés, en utilisant l'autre pied pour protéger et contrôler le ballon pendant la rotation. Ce mouvement permet de changer de direction tout en protégeant efficacement le ballon avec votre corps.",
    },
    {
      id: 4,
      title: "Talonnade",
      description: "Passe ou contrôle avec le talon",
      videoUrl: "#",
      fullDescription:
        "La talonnade utilise le talon pour passer le ballon ou le contrôler de manière inattendue. Ce geste peut être utilisé pour changer de direction, faire une passe à un coéquipier ou simplement pour surprendre un défenseur. Pour l'exécuter, positionnez votre pied au-dessus du ballon puis utilisez votre talon pour le diriger dans la direction souhaitée. L'effet de surprise est l'atout principal de ce geste technique.",
    },
    {
      id: 5,
      title: "Petit pont",
      description: "Faire passer le ballon entre les jambes du défenseur",
      videoUrl: "#",
      fullDescription:
        "Le petit pont consiste à faire passer le ballon entre les jambes du défenseur. Attendez que le défenseur écarte légèrement les jambes, puis poussez rapidement le ballon entre celles-ci. Anticipez la trajectoire pour récupérer le ballon de l'autre côté. Ce dribble est très efficace car il est difficile pour le défenseur de réagir une fois que le ballon a passé ses jambes. Le timing et l'observation de la posture du défenseur sont cruciaux.",
    },
    {
      id: 6,
      title: "Contrôle orienté",
      description: "Prendre le ballon en changeant de direction",
      videoUrl: "#",
      fullDescription:
        "Le contrôle orienté permet de recevoir le ballon tout en changeant immédiatement de direction. Au lieu de simplement arrêter le ballon, utilisez la surface de contact (intérieur, extérieur du pied, semelle) pour diriger le ballon dans l'espace libre. Ce geste technique permet de gagner un temps précieux et d'éliminer un adversaire dès la réception du ballon. L'anticipation et la lecture du jeu sont essentielles pour identifier l'espace à exploiter avant même de recevoir le ballon.",
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
          />
        ))}
      </div>
    </div>
  )
}
