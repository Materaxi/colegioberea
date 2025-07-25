"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

export function VideoCarousel() {
  const [current, setCurrent] = useState(0)

  const videos = [
    {
      thumbnail: "/videos/resumen_dia_estudiante.mp4",
      title: "Bienvenida del Director",
      description: "Mensaje de bienvenida del director del Colegio Evangelico Berea.",
    },
    {
      thumbnail: "/placeholder.svg?height=400&width=800",
      title: "Actividades Académicas",
      description: "Resumen de las principales actividades académicas del año escolar.",
    },
    {
      thumbnail: "/placeholder.svg?height=400&width=800",
      title: "Eventos Deportivos",
      description: "Competencias deportivas intercolegiales y logros de nuestros estudiantes.",
    },
    {
      thumbnail: "/placeholder.svg?height=400&width=800",
      title: "Graduación 2023",
      description: "Ceremonia de graduación de la promoción 2023.",
    },
  ]

  const next = () => {
    setCurrent((current) => (current === videos.length - 1 ? 0 : current + 1))
  }

  const prev = () => {
    setCurrent((current) => (current === 0 ? videos.length - 1 : current - 1))
  }

  // Auto-advance the carousel
  useEffect(() => {
    const interval = setInterval(() => {
      next()
    }, 6000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative mx-auto max-w-4xl overflow-hidden rounded-lg">
      <div className="relative h-[400px] w-full bg-gray-900">
        {videos.map((video, index) => (
          <div
            key={index}
            className={`absolute h-full w-full transition-opacity duration-500 ${
              index === current ? "opacity-100" : "opacity-0"
            }`}
          >
            <div className="relative h-full w-full">
              {/* Video thumbnail with play button overlay */}
              <div className="relative h-full w-full">
                <video
                  src={video.thumbnail || "/placeholder.svg"}
                  className="h-full w-full object-cover"
                  autoPlay
                  muted
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white/80 text-[#0a192f] transition-transform hover:scale-110">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-8 w-8">
                      <path
                        fillRule="evenodd"
                        d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="absolute bottom-0 w-full bg-black/70 p-4 text-white">
                <h3 className="text-xl font-bold">{video.title}</h3>
                <p className="mt-1">{video.description}</p>
              </div>
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

      <div className="absolute bottom-20 left-0 right-0 flex justify-center space-x-2">
        {videos.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`h-2 w-2 rounded-full ${index === current ? "bg-white" : "bg-white/50"}`}
            aria-label={`Ir al video ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
