import { Clock, Shield, Users, Mic } from "lucide-react"

const advantages = [
  {
    icon: Clock,
    title: "Des cours flexibles",
    description: "Nos cours s'adaptent à votre rythme et à vos contraintes. Toutes les sessions se déroulent de 18h à 20h, réparties sur le mois que vous choisissez. Vous préparez vos concours sans contraindre vos activités."
  },
  {
    icon: Shield,
    title: "Admis ou remboursé",
    description: "Nous croyons fermement en la puissance de la méthode ALVA. C'est pourquoi nous vous offrons une garantie unique : si vous ne décrochez pas au moins une admission dans une école, nous vous remboursons intégralement.",
    highlight: true
  },
  {
    icon: Users,
    title: "6 élèves par classe",
    description: "Pour un apprentissage optimisé, nous limitons chaque classe à seulement 6 élèves. Ce format réduit favorise l'interactivité, les échanges et un environnement propice à l'entraide."
  },
  {
    icon: Mic,
    title: "Un entretien blanc en présentiel",
    description: "L'oral est une étape décisive dans votre admission. Nous vous préparons grâce à des entretiens blancs réalistes, menés par des experts. Nous vous donnerons les axes d'amélioration et vous arriverez aux oraux confiants."
  }
]

export function Advantages() {
  return (
    <section id="avantages" className="py-24 bg-gradient-to-b from-muted to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary font-semibold text-sm rounded-full uppercase tracking-wider mb-4">
            Nos Avantages
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            Pourquoi choisir Alva Prépa ?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Une formation pensée pour vous accompagner vers la réussite, avec des garanties concrètes.
          </p>
        </div>

        {/* Advantages grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {advantages.map((advantage, index) => (
            <div
              key={index}
              className={`group relative bg-card rounded-2xl p-8 border transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl ${advantage.highlight
                  ? "border-primary/30 bg-gradient-to-br from-primary/5 to-transparent"
                  : "border-border hover:border-primary/20"
                }`}
            >
              {advantage.highlight && (
                <div className="absolute -top-3 left-8 px-3 py-1 bg-primary text-primary-foreground text-xs font-bold rounded-full">
                  Garantie unique
                </div>
              )}

              <div className="flex gap-6">
                <div className={`flex-shrink-0 w-14 h-14 rounded-xl flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:-rotate-6 ${advantage.highlight
                    ? "bg-gradient-to-br from-primary/20 to-primary/5"
                    : "bg-gradient-to-br from-primary/15 to-primary/5"
                  }`}>
                  <advantage.icon className="h-7 w-7 text-primary" />
                </div>

                <div>
                  <h3 className="text-xl font-bold text-foreground mb-3">
                    {advantage.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {advantage.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}