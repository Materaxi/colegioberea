"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import Image from "next/image"

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <nav
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md" : "bg-white/90 backdrop-blur-sm"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="flex items-center ">
              <Image
                src="/images/logo-colegio-berea.png"
                alt="Logo Colegio Evangelico Berea"
                width={120}
                height={120}
                
                className="mr-4 mt-24 "
              />
              <span className="text-xl font-bold text-[#0a192f]">Colegio Evangelico Berea</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              <Link href="/" className="rounded-md px-3 py-2 text-[#0a192f] transition-colors hover:bg-[#0a192f]/10">
                Inicio
              </Link>
              <Link
                href="/nosotros"
                className="rounded-md px-3 py-2 text-[#0a192f] transition-colors hover:bg-[#0a192f]/10"
              >
                Nosotros
              </Link>
              <Link
                href="/servicios"
                className="rounded-md px-3 py-2 text-[#0a192f] transition-colors hover:bg-[#0a192f]/10"
              >
                Servicios
              </Link>
              <Link
                href="/estudiantil"
                className="rounded-md px-3 py-2 text-[#0a192f] transition-colors hover:bg-[#0a192f]/10"
              >
                Estudiantil
              </Link>
              <Link
                href="/galeria"
                className="rounded-md px-3 py-2 text-[#0a192f] transition-colors hover:bg-[#0a192f]/10"
              >
                Galería
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center rounded-md p-2 text-[#0a192f] hover:bg-[#0a192f]/10 focus:outline-none"
            >
              <span className="sr-only">Abrir menú principal</span>
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="space-y-1 bg-white px-2 pb-3 pt-2 shadow-lg">
            <Link
              href="/"
              className="block rounded-md px-3 py-2 text-base font-medium text-[#0a192f] hover:bg-[#0a192f]/10"
              onClick={toggleMenu}
            >
              Inicio
            </Link>
            <Link
              href="/nosotros"
              className="block rounded-md px-3 py-2 text-base font-medium text-[#0a192f] hover:bg-[#0a192f]/10"
              onClick={toggleMenu}
            >
              Nosotros
            </Link>
            <Link
              href="/servicios"
              className="block rounded-md px-3 py-2 text-base font-medium text-[#0a192f] hover:bg-[#0a192f]/10"
              onClick={toggleMenu}
            >
              Servicios
            </Link>
            <Link
              href="/estudiantil"
              className="block rounded-md px-3 py-2 text-base font-medium text-[#0a192f] hover:bg-[#0a192f]/10"
              onClick={toggleMenu}
            >
              Estudiantil
            </Link>
            <Link
              href="/galeria"
              className="block rounded-md px-3 py-2 text-base font-medium text-[#0a192f] hover:bg-[#0a192f]/10"
              onClick={toggleMenu}
            >
              Galería
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}
