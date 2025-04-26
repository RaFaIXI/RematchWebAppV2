"use client"
import { useState, useRef, useEffect } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"

interface TechniqueCardProps {
  title: string
  description: string
  videoUrl: string
  fullDescription: string
  difficulty: number // 1-5 rating
  utility: number // 1-5 rating
}

// Helper component to render star ratings
const StarRating = ({ rating, label }: { rating: number; label: string }) => {
  // Ensure rating is between 1-5
  const safeRating = Math.min(5, Math.max(1, rating))

  return (
    <div className="flex items-center gap-2">
      <span className="text-sm font-medium min-w-[70px]">{label}:</span>
      <div className="flex">
        {Array.from({ length: safeRating }).map((_, i) => (
          <span key={i} role="img" aria-label="star">
            ⭐
          </span>
        ))}
      </div>
    </div>
  )
}

export function TechniqueCard({
  title,
  description,
  videoUrl,
  fullDescription,
  difficulty,
  utility,
}: TechniqueCardProps) {
  const [isOpen, setIsOpen] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  // Force video to be muted, autoplay, and loop
  useEffect(() => {
    if (!videoRef.current || !isOpen) return

    // Force settings
    const video = videoRef.current
    video.muted = true
    video.volume = 0

    // Auto-play when the dialog opens
    const playVideo = async () => {
      try {
        await video.play()
      } catch (error) {
        console.error("Autoplay failed:", error)
      }
    }

    playVideo()

    // Force mute on any attempt to change volume
    const enforceMute = () => {
      if (videoRef.current) {
        videoRef.current.muted = true
        videoRef.current.volume = 0
      }
    }

    // Add event listeners
    video.addEventListener("volumechange", enforceMute)
    video.addEventListener("play", enforceMute)

    // Clean up event listeners
    return () => {
      video.removeEventListener("volumechange", enforceMute)
      video.removeEventListener("play", enforceMute)
      video.pause()
    }
  }, [isOpen])

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Card className="cursor-pointer hover:shadow-md transition-shadow">
          <CardHeader>
            <CardTitle>{title}</CardTitle>
            <CardDescription>{description}</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {/* Stats section with star ratings */}
            <div className="space-y-1 pt-2 border-t">
              <StarRating rating={difficulty} label="Difficulté" />
              <StarRating rating={utility} label="Utilité" />
            </div>

            {/* Content area with truncated description */}
            <p className="text-sm text-muted-foreground line-clamp-3">{fullDescription}</p>
          </CardContent>
          <CardFooter>
            <Button variant="ghost" className="ml-auto">
              Voir plus
            </Button>
          </CardFooter>
        </Card>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[800px]">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
        </DialogHeader>
        <div className="aspect-video w-full bg-muted mb-4">
          <video
            ref={videoRef}
            muted={true}
            autoPlay={true}
            loop={true}
            playsInline={true}
            onVolumeChange={() => {
              if (videoRef.current) {
                videoRef.current.muted = true
                videoRef.current.volume = 0
              }
            }}
            className="w-full h-full object-cover"
            poster="/placeholder.svg?height=400&width=800"
          >
            <source src={videoUrl} type="video/mp4" />
            Votre navigateur ne supporte pas la lecture de vidéos.
          </video>
        </div>
        <div className="space-y-4">
          {/* Also show ratings in the dialog */}
          <div className="flex flex-col sm:flex-row sm:gap-6 mb-2">
            <StarRating rating={difficulty} label="Difficulté" />
            <StarRating rating={utility} label="Utilité" />
          </div>

          <h3 className="text-lg font-medium">Description</h3>
          <p className="text-sm text-muted-foreground">{fullDescription}</p>
        </div>
      </DialogContent>
    </Dialog>
  )
}
