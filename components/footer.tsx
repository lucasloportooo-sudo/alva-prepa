import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

// Vrais logos pleins (Solid SVGs) pour un rendu plus premium
const IconInsta = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
  </svg>
)

const IconTikTok = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z" />
  </svg>
)

const IconFB = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
)

const IconLinkedIn = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
)

export function Footer() {
  return (
    <footer className="bg-gradient-to-br from-[#09131F] via-[#1C2B42] to-[#09131F] text-white">
      {/* CTA Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-balance">
            Prêt à intégrer l'école de tes rêves ?
          </h2>
          <p className="text-white/70 text-lg mb-8 max-w-xl mx-auto">
            Rejoins les dizaines d'élèves qui ont déjà craqué le code des concours grâce à la méthode ALVA. On t'attend.
          </p>
          <Link href="#offres" passHref>
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8 py-6 shadow-2xl shadow-primary/30 hover:shadow-primary/40 transition-all hover:-translate-y-1"
            >
              Découvrir nos formules
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>

      {/* Footer content */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-12 md:gap-8">

            {/* Colonne 1 : Logo & Réseaux Sociaux */}
            <div className="flex flex-col items-center md:items-start gap-6 w-full md:w-auto">
              <div className="flex flex-col items-center md:items-start gap-4">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ALVA%20LOGO-irfATP3oKat2RnNGlggKL85yqNIJjZ.jpeg"
                  alt="Alva Prépa"
                  width={100}
                  height={40}
                  className="h-12 w-auto brightness-110"
                />
                <p className="text-white/60 text-sm max-w-xs text-center md:text-left">
                  Préparation intensive aux concours ACCÈS et SÉSAME.
                </p>
              </div>

              {/* Encart "Retrouvez-nous" */}
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6 w-full max-w-xs hover:bg-white/10 hover:border-white/20 transition-all duration-300 shadow-lg">
                <h3 className="text-white text-sm font-bold mb-5 uppercase tracking-widest text-center md:text-left">
                  Retrouvez-nous
                </h3>
                <div className="flex items-center justify-center md:justify-start gap-4">
                  <a href="#" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-white hover:-translate-y-1 transition-all duration-300" aria-label="Instagram ALVA Prépa">
                    <IconInsta className="h-7 w-7" />
                  </a>
                  <a href="#" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-white hover:-translate-y-1 transition-all duration-300" aria-label="TikTok ALVA Prépa">
                    <IconTikTok className="h-7 w-7" />
                  </a>
                  <a href="#" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-white hover:-translate-y-1 transition-all duration-300" aria-label="Facebook ALVA Prépa">
                    <IconFB className="h-7 w-7" />
                  </a>
                  <a href="#" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-white hover:-translate-y-1 transition-all duration-300" aria-label="LinkedIn ALVA Prépa">
                    <IconLinkedIn className="h-7 w-7" />
                  </a>
                </div>
              </div>
            </div>

            {/* Colonne 2 : Liens de navigation */}
            <nav className="flex flex-col sm:flex-row flex-wrap justify-center md:justify-end gap-6 sm:gap-8 pt-4">
              <Link href="#methode" className="text-white/60 hover:text-white transition-colors text-sm font-medium">
                La méthode
              </Link>
              <Link href="#avantages" className="text-white/60 hover:text-white transition-colors text-sm font-medium">
                Nos avantages
              </Link>
              <Link href="#offres" className="text-white/60 hover:text-white transition-colors text-sm font-medium">
                Nos offres
              </Link>
              <Link href="#temoignages" className="text-white/60 hover:text-white transition-colors text-sm font-medium">
                Témoignages
              </Link>
              <Link href="#faq" className="text-white/60 hover:text-white transition-colors text-sm font-medium">
                FAQ
              </Link>
            </nav>
          </div>

          {/* Copyright & Légal */}
          <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-white/40 text-sm text-center md:text-left">
              &copy; {new Date().getFullYear()} Alva Prépa. Tous droits réservés.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <Link href="/mentions-legales" className="text-white/40 hover:text-white transition-colors">
                Mentions légales
              </Link>
              <Link href="/cgv" className="text-white/40 hover:text-white transition-colors">
                CGV
              </Link>
              <Link href="/politique-de-confidentialite" className="text-white/40 hover:text-white transition-colors">
                Politique de confidentialité
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}