"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  // Détection du scroll pour changer l'état du header
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { href: "#methode", label: "La méthode ALVA" },
    { href: "#avantages", label: "Nos avantages" },
    { href: "#offres", label: "Nos offres" },
    { href: "#temoignages", label: "Témoignages" },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
          ? "bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm py-2" // Blanc au scroll
          : "bg-transparent py-4" // Transparent en haut
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-18">
          <Link href="/" className="flex items-center">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ALVA%20LOGO-irfATP3oKat2RnNGlggKL85yqNIJjZ.jpeg"
              alt="Alva Prépa"
              width={120}
              height={48}
              style={{ width: 'auto', height: 'auto', maxHeight: '48px' }}
              priority
            />
          </Link>

          {/* Navigation Desktop : Changement de couleur dynamique */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-semibold transition-colors relative group ${isScrolled ? "text-slate-900 hover:text-primary" : "text-white hover:text-white/80"
                  }`}
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <Link href="#offres" passHref>
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg shadow-primary/25 transition-all hover:-translate-y-0.5"
              >
                Voir nos offres
              </Button>
            </Link>
          </div>

          {/* Bouton Mobile : Changement de couleur dynamique */}
          <button
            className={`md:hidden p-2 rounded-md transition-colors ${isScrolled ? "text-slate-900" : "text-white"
              }`}
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Ouvrir le menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Menu Mobile (toujours sur fond blanc pour la clarté) */}
      <div
        className={`md:hidden absolute top-full left-0 right-0 bg-white border-b border-slate-200 transition-all duration-300 shadow-xl ${isOpen ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
      >
        <nav className="flex flex-col p-4 gap-2">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="px-4 py-3 text-slate-900 font-medium hover:bg-slate-50 rounded-lg transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link href="#offres" passHref onClick={() => setIsOpen(false)} className="mt-2">
            <Button className="w-full bg-primary hover:bg-primary/90">
              Voir nos offres
            </Button>
          </Link>
        </nav>
      </div>
    </header>
  )
}