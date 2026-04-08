import { Clock, CheckCircle, Pencil } from "lucide-react"

const features = [
  {
    icon: Clock,
    title: "Formation intensive",
    description: "Des sessions courtes et efficaces de 2h, conçues pour maximiser votre apprentissage sans vous épuiser."
  },
  {
    icon: CheckCircle,
    title: "Expertise reconnue",
    description: "Méthode créée par un étudiant expert des concours, qui connaît parfaitement les attentes des jurys."
  },
  {
    icon: Pencil,
    title: "L'essentiel uniquement",
    description: "Nous avons filtré 80% du contenu inutile pour vous faire gagner un temps précieux et vous concentrer sur ce qui compte."
  }
]

export function Method() {
  return (
    <section id="methode" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-secondary/10 text-secondary font-semibold text-sm rounded-full uppercase tracking-wider mb-4">
            La Méthode ALVA
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            Une préparation ciblée pour des résultats concrets
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Notre approche se concentre exclusivement sur les compétences qui font la différence le jour J.
            Pas de contenu superflu, uniquement l&apos;essentiel.
          </p>
        </div>

        {/* Features grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative bg-card rounded-2xl p-8 border border-border hover:border-secondary/30 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
            >
              {/* Top gradient bar */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-secondary rounded-t-2xl transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

              {/* Icon */}
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-secondary/15 to-secondary/5 rounded-2xl mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                <feature.icon className="h-8 w-8 text-secondary" />
              </div>

              <h3 className="text-xl font-bold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}