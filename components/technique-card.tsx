"use client"
import { useState, useRef, useEffect } from "react"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Loader2 } from "lucide-react"

interface TechniqueCardProps {
  title: string
  description: string
  videoUrl: string
  videoType: "local" | "youtube"
  fullDescription: string
  difficulty: number
  utility: number
}

const translations = {
  en: {
    difficulty: "Difficulty",
    utility: "Utility",
    seeMore: "See more",
    description: "Description",
    unsupported: "Your browser does not support video playback.",
    loading: "Loading video..."
  },
  fr: {
    difficulty: "Difficulté",
    utility: "Utilité",
    seeMore: "Voir plus",
    description: "Description",
    unsupported: "Votre navigateur ne supporte pas la lecture de vidéos.",
    loading: "Chargement de la vidéo..."
  },
}

// Star rating component
const StarRating = ({
  rating,
  label,
}: {
  rating: number
  label: string
}) => {
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

// Extract YouTube video ID
const getYouTubeVideoId = (url: string): string | null => {
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/
  const match = url.match(regExp)
  return match && match[2].length === 11 ? match[2] : null
}

const exceptionTitle = ["Son de la balle", "Ball Sound", "Mouvements et Tirs", "Movements and Shots", "Body Block", "Sprint"]

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
  const [lang, setLang] = useState<"en" | "fr">("en")
  const videoRef = useRef<HTMLVideoElement>(null)
  const youtubeId = videoType === "youtube" ? getYouTubeVideoId(videoUrl) : null
  const [isLoading, setIsLoading] = useState(true)
  const [videoLoaded, setVideoLoaded] = useState(false)

  const isException = exceptionTitle.includes(title)

  useEffect(() => {
    const storedLang = localStorage.getItem("lang")
    if (storedLang) {
      setLang(storedLang as "en" | "fr")
    }
  }, [])

  const t = translations[lang]

  // Reset loading state when dialog closes
  useEffect(() => {
    if (!isOpen) {
      setIsLoading(true)
      setVideoLoaded(false)
    }
  }, [isOpen])

  // Handle video loading and playback
  useEffect(() => {
    if (videoType !== "local" || !videoRef.current || !isOpen) return

    const video = videoRef.current
    if (!isException) {
      video.muted = true
      video.volume = 0
    }

    // Show loading indicator while video loads
    setIsLoading(true)

    // Handle video load events
    const handleCanPlay = () => {
      setIsLoading(false)
      setVideoLoaded(true)
    }

    const handleLoadStart = () => {
      setIsLoading(true)
    }

    // Attempt to play video once it can play through
    const handleCanPlayThrough = async () => {
      try {
        await video.play()
        setIsLoading(false)
      } catch (error) {
        console.error("Autoplay failed:", error)
        setIsLoading(false)
      }
    }

    // Enforce mute for non-exception videos
    const enforceMute = () => {
      if (videoRef.current && !isException) {
        videoRef.current.muted = true
        videoRef.current.volume = 0
      }
    }

    // Add event listeners
    video.addEventListener("loadstart", handleLoadStart)
    video.addEventListener("canplay", handleCanPlay)
    video.addEventListener("canplaythrough", handleCanPlayThrough)
    video.addEventListener("volumechange", enforceMute)
    video.addEventListener("play", enforceMute)

    // Set video source only when dialog is open to prevent preloading
    video.src = videoUrl
    video.load()

    return () => {
      // Clean up event listeners
      video.removeEventListener("loadstart", handleLoadStart)
      video.removeEventListener("canplay", handleCanPlay)
      video.removeEventListener("canplaythrough", handleCanPlayThrough)
      video.removeEventListener("volumechange", enforceMute)
      video.removeEventListener("play", enforceMute)
      
      // Pause and reset video
      video.pause()
      video.removeAttribute('src')
      video.load()
    }
  }, [isOpen, videoType, videoUrl, isException])

  // Handle YouTube iframe loading
  useEffect(() => {
    if (videoType === "youtube" && isOpen) {
      // For YouTube videos, set a timeout to hide loader after a reasonable time
      const timer = setTimeout(() => {
        setIsLoading(false)
      }, 1000)
      
      return () => clearTimeout(timer)
    }
  }, [isOpen, videoType])

  const renderVideo = () => {
    if (videoType === "youtube" && youtubeId) {
      return (
        <>
          {isLoading && (
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30">
              <div className="flex flex-col items-center gap-2">
                <Loader2 className="h-8 w-8 animate-spin text-white" />
                <span className="text-white">{t.loading}</span>
              </div>
            </div>
          )}
          <iframe
            src={`https://www.youtube.com/embed/${youtubeId}?autoplay=${isOpen ? "1" : "0"}&loop=1&playlist=${youtubeId}&controls=${isException ? "1" : "0"}`}
            title={`YouTube video: ${title}`}
            className="w-full h-full absolute top-0 left-0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            onLoad={() => setIsLoading(false)}
          ></iframe>
        </>
      )
    } else {
      return (
        <>
          {isLoading && (
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30">
              <div className="flex flex-col items-center gap-2">
                <Loader2 className="h-8 w-8 animate-spin text-white" />
                <span className="text-white">{t.loading}</span>
              </div>
            </div>
          )}
          <video
            ref={videoRef}
            muted={!isException}
            loop
            playsInline
            controls={isException}
            className="w-full h-full object-cover"
            poster="/placeholder.svg?height=400&width=800"
          >
            <source type="video/mp4" />
            {t.unsupported}
          </video>
        </>
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
            <div className="space-y-1 pt-2 border-t">
              <StarRating rating={difficulty} label={t.difficulty} />
              <StarRating rating={utility} label={t.utility} />
            </div>
            <p className="text-sm text-muted-foreground line-clamp-3">
              {fullDescription}
            </p>
          </CardContent>
          <CardFooter>
            <Button variant="ghost" className="ml-auto">
              {t.seeMore}
            </Button>
          </CardFooter>
        </Card>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[800px]">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
        </DialogHeader>
        <div className="aspect-video w-full bg-muted mb-4 relative">
          {renderVideo()}
        </div>
        <div className="space-y-4">
          <div className="flex flex-col sm:flex-row sm:gap-6 mb-2">
            <StarRating rating={difficulty} label={t.difficulty} />
            <StarRating rating={utility} label={t.utility} />
          </div>
          <h3 className="text-lg font-medium">{t.description}</h3>
          <p className="text-sm text-muted-foreground">{fullDescription}</p>
        </div>
      </DialogContent>
    </Dialog>
  )
}