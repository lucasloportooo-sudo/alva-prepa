import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle2, Shield, Users } from "lucide-react"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2070&auto=format&fit=crop')"
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-[#09131F]/95 via-[#1C2B42]/92 to-[#09131F]/95" />

      {/* Animated background elements */}
      <div className="absolute top-20 right-10 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 left-10 w-80 h-80 bg-secondary/15 rounded-full blur-3xl animate-float" style={{ animationDelay: "3s" }} />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/20 border border-primary/40 rounded-full mb-8 backdrop-blur-sm">
          <span className="text-sm font-semibold text-orange-200 uppercase tracking-wider">
            Concours ACCÈS & SÉSAME
          </span>
        </div>

        {/* Title */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-white leading-tight tracking-tight mb-6 text-balance">
          Intégrez l&apos;école de{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-300">
            vos rêves
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg sm:text-xl text-white/75 max-w-2xl mx-auto mb-10 leading-relaxed text-pretty">
          Préparez les concours ACCÈS et SÉSAME avec une méthode chirurgicale,
          conçue par un expert du concours. Des résultats concrets, sans superflu.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <Link href="#offres" passHref>
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8 py-6 shadow-2xl shadow-primary/30 hover:shadow-primary/40 transition-all hover:-translate-y-1 animate-pulse-glow w-full sm:w-auto"
            >
              Découvrir nos formules
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
          <Link href="#methode" passHref>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white/30 bg-white/5 text-white hover:bg-white/10 text-lg px-8 py-6 backdrop-blur-sm transition-all hover:-translate-y-1 w-full sm:w-auto"
            >
              En savoir plus
            </Button>
          </Link>
        </div>

        {/* Trust indicators */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
          <div className="flex items-center justify-center gap-3 text-white/80">
            <div className="p-2 bg-green-500/20 rounded-full">
              <Shield className="h-5 w-5 text-green-400" />
            </div>
            <span className="text-sm font-medium">Admis ou remboursé</span>
          </div>
          <div className="flex items-center justify-center gap-3 text-white/80">
            <div className="p-2 bg-blue-500/20 rounded-full">
              <Users className="h-5 w-5 text-blue-400" />
            </div>
            <span className="text-sm font-medium">6 élèves max par classe</span>
          </div>
          <div className="flex items-center justify-center gap-3 text-white/80">
            <div className="p-2 bg-orange-500/20 rounded-full">
              <CheckCircle2 className="h-5 w-5 text-orange-400" />
            </div>
            <span className="text-sm font-medium">Expert du concours</span>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-white/50 rounded-full" />
        </div>
      </div>
    </section>
  )
}