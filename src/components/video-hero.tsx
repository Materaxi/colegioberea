"use client"

import type React from "react"

import { useState, useRef, useEffect, useCallback } from "react"
import Image from "next/image"
import Link from "next/link"
import { Play, Pause, Volume2, VolumeX, Maximize } from "lucide-react"

export function VideoHero() {
  const [isPlaying, setIsPlaying] = useState(true)
  const [isMuted, setIsMuted] = useState(true)
  const [showControls, setShowControls] = useState(false)
  const [progress, setProgress] = useState(0)
  const videoRef = useRef<HTMLVideoElement>(null)
  const progressRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const video = videoRef.current
    if (video) {
      // Intentar reproducir automáticamente
      const playPromise = video.play()
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          setIsPlaying(false)
          setShowControls(true)
        })
      }
    }
  }, [])

  const handleTimeUpdate = useCallback(() => {
    const video = videoRef.current
    if (video && video.duration) {
      const progressPercent = (video.currentTime / video.duration) * 100
      setProgress(progressPercent)
    }
  }, [])

  const togglePlay = useCallback(() => {
    const video = videoRef.current
    if (video) {
      if (isPlaying) {
        video.pause()
      } else {
        video.play()
      }
      setIsPlaying(!isPlaying)
    }
  }, [isPlaying])

  const toggleMute = useCallback(() => {
    const video = videoRef.current
    if (video) {
      video.muted = !isMuted
      setIsMuted(!isMuted)
    }
  }, [isMuted])

  const handleProgressClick = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const video = videoRef.current
    const progressBar = progressRef.current
    if (video && progressBar) {
      const rect = progressBar.getBoundingClientRect()
      const clickX = e.clientX - rect.left
      const progressPercent = (clickX / rect.width) * 100
      video.currentTime = (progressPercent / 100) * video.duration
    }
  }, [])

  const toggleFullscreen = useCallback(() => {
    const video = videoRef.current
    if (video) {
      if (document.fullscreenElement) {
        document.exitFullscreen()
      } else {
        video.requestFullscreen()
      }
    }
  }, [])

  return (
    <section
      className="relative h-screen w-full overflow-hidden"
      onMouseEnter={() => setShowControls(true)}
      onMouseLeave={() => setShowControls(false)}
    >
      {/* Video Background */}
      <video
        ref={videoRef}
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        muted={isMuted}
        loop
        playsInline
        onTimeUpdate={handleTimeUpdate}
        poster="/placeholder.svg?height=1080&width=1920&text=Colegio+Berea+Loading"
      >
        <source src="/videos/BereaIntro.mp4" type="video/mp4" />
        <source src="/videos/BereaIntro.mp4" type="video/webm" />
        Tu navegador no soporta videos HTML5.
      </video>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/40 to-black/60" />

      {/* Contenido sobre el video */}
      <div className="relative z-10 flex h-full items-center justify-center">
        <div className="container mx-auto px-4 text-center text-white">
          <div className="flex flex-col items-center justify-center animate-fade-in">
            <div className="mb-6 transform transition-transform duration-700 hover:scale-105">
              <Image
                src="/images/logo-colegio-berea.png"
                alt="Logo Colegio Evangelico Berea"
                width={180}
                height={180}
                className="drop-shadow-2xl"
                priority
              />
            </div>
            <h1 className="mb-4 text-4xl font-bold drop-shadow-lg md:text-5xl lg:text-6xl animate-slide-up">
              Colegio Evangelico Berea
            </h1>
            <p className="mb-2 text-xl drop-shadow-md md:text-2xl animate-slide-up animation-delay-200">
              Formando líderes con valores cristianos
            </p>
            <p className="mb-8 text-lg drop-shadow-md animate-slide-up animation-delay-400">
              El temor de Dios es el principio de la sabiduría - Proverbios 9:10
            </p>
            <div className="flex flex-wrap justify-center gap-4 animate-slide-up animation-delay-600">
              <Link
                href="/nosotros"
                className="group rounded-md bg-white px-6 py-3 text-[#0a192f] font-semibold transition-all duration-300 hover:bg-gray-100 hover:scale-105 hover:shadow-lg"
              >
                <span className="group-hover:animate-pulse">Conócenos</span>
              </Link>
              <Link
                href="/servicios"
                className="group rounded-md border-2 border-white px-6 py-3 text-white font-semibold transition-all duration-300 hover:bg-white hover:text-[#0a192f] hover:scale-105 hover:shadow-lg"
              >
                <span className="group-hover:animate-pulse">Nuestros Servicios</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* 📍 AQUÍ ESTÁ LA BARRA DE PROGRESO - Controles del video mejorados */}
      <div
        className={`absolute bottom-6 right-6 z-20 transition-all duration-300 ${
          showControls ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
        }`}
      >
        <div className="flex flex-col space-y-2">
          {/* 🎯 BARRA DE PROGRESO DEL VIDEO - Solo visible en hover */}
          <div className="bg-black/20 backdrop-blur-sm rounded-lg p-2">
            <div
              ref={progressRef}
              className="h-2 w-32 cursor-pointer rounded-full bg-white/30 backdrop-blur-sm hover:bg-white/40 transition-colors"
              onClick={handleProgressClick}
            >
              <div
                className="h-full rounded-full bg-white transition-all duration-100 relative"
                style={{ width: `${progress}%` }}
              >
                {/* Indicador de progreso más visible */}
                <div className="absolute right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full shadow-lg"></div>
              </div>
            </div>
            <div className="text-xs text-white/80 text-center mt-1">{Math.round(progress)}%</div>
          </div>

          {/* Botones de control */}
          <div className="flex space-x-2">
            <button
              onClick={togglePlay}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-black/50 text-white backdrop-blur-sm transition-all duration-200 hover:bg-black/70 hover:scale-110"
              aria-label={isPlaying ? "Pausar video" : "Reproducir video"}
            >
              {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
            </button>
            <button
              onClick={toggleMute}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-black/50 text-white backdrop-blur-sm transition-all duration-200 hover:bg-black/70 hover:scale-110"
              aria-label={isMuted ? "Activar sonido" : "Silenciar"}
            >
              {isMuted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
            </button>
            <button
              onClick={toggleFullscreen}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-black/50 text-white backdrop-blur-sm transition-all duration-200 hover:bg-black/70 hover:scale-110"
              aria-label="Pantalla completa"
            >
              <Maximize className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Indicador de scroll mejorado */}
      <div className="absolute bottom-8 left-1/2 z-20 -translate-x-1/2 animate-bounce">
        <div className="flex flex-col items-center text-white">
          <span className="mb-2 text-sm font-medium drop-shadow-md">Descubre más</span>
          <div className="rounded-full bg-white/20 p-2 backdrop-blur-sm">
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </div>

      {/* Imagen de fallback optimizada */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/placeholder.svg?height=1080&width=1920&text=Colegio+Berea+Hero"
          alt="Colegio Evangelico Berea"
          fill
          className="object-cover"
          priority
          quality={85}
        />
      </div>
    </section>
  )
}
