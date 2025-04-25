"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Play } from "lucide-react"

interface TechniqueCardProps {
  title: string
  description: string
  videoUrl: string
  fullDescription: string
}

export function TechniqueCard({ title, description, videoUrl, fullDescription }: TechniqueCardProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Card className="cursor-pointer hover:shadow-md transition-shadow">
          <CardHeader>
            <CardTitle>{title}</CardTitle>
            <CardDescription>{description}</CardDescription>
          </CardHeader>
          <CardContent className="relative aspect-video bg-muted">
            <div className="absolute inset-0 flex items-center justify-center">
              <Button variant="outline" size="icon" className="rounded-full bg-background/80 backdrop-blur-sm">
                <Play className="h-5 w-5" />
                <span className="sr-only">Voir la vidéo</span>
              </Button>
            </div>
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
          <video muted controls className="w-full h-full object-cover" poster="/placeholder.svg?height=400&width=800">
            <source src={videoUrl} type="video/mp4" />
            Votre navigateur ne supporte pas la lecture de vidéos.
          </video>
        </div>
        <div className="space-y-4">
          <h3 className="text-lg font-medium">Description</h3>
          <p className="text-sm text-muted-foreground">{fullDescription}</p>
        </div>
      </DialogContent>
    </Dialog>
  )
}
