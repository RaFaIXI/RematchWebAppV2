"use client"
import { useState, useRef, useEffect } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"

interface TechniqueCardProps {
  title: string
  description: string
  videoUrl: string
  videoType: "local" | "youtube" // Add videoType prop
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

// Add a helper function to extract YouTube video ID
const getYouTubeVideoId = (url: string): string | null => {
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/
  const match = url.match(regExp)
  return match && match[2].length === 11 ? match[2] : null
}

export function TechniqueCard({
  title,
  description,
  videoUrl,
  videoType,
  fullDescription,
  difficulty,
  utility,
}: TechniqueCardProps) {
  const [isOpen, setIsOpen] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)
  const youtubeId = videoType === "youtube" ? getYouTubeVideoId(videoUrl) : null

  // Force video to be muted, autoplay, and loop for local videos
  useEffect(() => {
    if (videoType !== "local" || !videoRef.current || !isOpen) return

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
  }, [isOpen, videoType])

  // Render the appropriate video element based on type
  const renderVideo = () => {
    if (videoType === "youtube" && youtubeId) {
      // YouTube embed with autoplay and mute parameters
      return (
        <iframe
          src={`https://www.youtube.com/embed/${youtubeId}?autoplay=${isOpen ? "1" : "0"}&mute=1&loop=1&playlist=${youtubeId}`}
          title={`YouTube video: ${title}`}
          className="w-full h-full absolute top-0 left-0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      )
    } else {
      // Local video
      return (
        <video
          ref={videoRef}
          muted={true}
          autoPlay={isOpen}
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
      )
    }
  }

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
        <div className="aspect-video w-full bg-muted mb-4 relative">{renderVideo()}</div>
        <div className="space-y-4">
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
