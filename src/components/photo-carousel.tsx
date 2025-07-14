"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"

export function PhotoCarousel() {
  const [current, setCurrent] = useState(0)

  const photos = [
    {
      src: "/placeholder.svg?height=400&width=800",
      alt: "Instalaciones del colegio",
      caption: "Modernas instalaciones educativas",
    },
    {
      src: "/placeholder.svg?height=400&width=800",
      alt: "Aulas del colegio",
      caption: "Aulas equipadas con tecnología educativa",
    },
    {
      src: "/placeholder.svg?height=400&width=800",
      alt: "Áreas deportivas",
      caption: "Amplias áreas deportivas para actividades físicas",
    },
    {
      src: "/placeholder.svg?height=400&width=800",
      alt: "Laboratorio de ciencias",
      caption: "Laboratorio de ciencias completamente equipado",
    },
  ]

  const next = () => {
    setCurrent((current) => (current === photos.length - 1 ? 0 : current + 1))
  }

  const prev = () => {
    setCurrent((current) => (current === 0 ? photos.length - 1 : current - 1))
  }

  // Auto-advance the carousel
  useEffect(() => {
    const interval = setInterval(() => {
      next()
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative mx-auto max-w-4xl overflow-hidden rounded-lg">
      <div className="relative h-[400px] w-full">
        {photos.map((photo, index) => (
          <div
            key={index}
            className={`absolute h-full w-full transition-opacity duration-500 ${
              index === current ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={photo.src || "/placeholder.svg"}
              alt={photo.alt}
              fill
              className="object-cover"
              priority={index === 0}
            />
            <div className="absolute bottom-0 w-full bg-black/50 p-4 text-white">
              <p className="text-center text-lg">{photo.caption}</p>
            </div>
          </div>
        ))}
      </div>

      <button
        onClick={prev}
        className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-black/30 p-2 text-white transition-colors hover:bg-black/50"
        aria-label="Anterior"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>

      <button
        onClick={next}
        className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-black/30 p-2 text-white transition-colors hover:bg-black/50"
        aria-label="Siguiente"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      <div className="absolute bottom-16 left-0 right-0 flex justify-center space-x-2">
        {photos.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`h-2 w-2 rounded-full ${index === current ? "bg-white" : "bg-white/50"}`}
            aria-label={`Ir a la diapositiva ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
