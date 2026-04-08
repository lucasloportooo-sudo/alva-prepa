"use client"

import { Star, Quote } from "lucide-react"

const testimonials = [
  {
    name: "Marie L.",
    school: "ESSCA",
    // Texte plus humain : mentionne le stress du début et le soulagement.
    content: "Honnêtement, j'étais un peu perdue devant la masse de trucs à réviser. ALVA a vraiment fait le tri pour moi. Pas de superflu, juste ce qui tombe vraiment. Les sessions de 2h sont intenses, c'est vrai, mais super concrètes. Résultat : admise à l'ESSCA directo !",
    rating: 5
  },
  {
    name: "Thomas B.",
    school: "IESEG",
    // Texte plus humain : mentionne la peur concrète des oraux.
    content: "Je redoutais énormément les oraux, j'étais pas à l'aise. L'entretien blanc en présentiel a été le déclic. Le débriefing était cash mais hyper constructif. Ça m'a permis de corriger mes tics de langage et de structurer mon pitch. Je suis arrivé le jour J beaucoup plus serein.",
    rating: 5
  },
  {
    name: "Léa M.",
    school: "ESSEC",
    // Texte plus humain : insiste sur le côté "coaching" plutôt que "cours".
    content: "Être seulement 6 par classe, ça change tout. J'avais l'impression d'avoir un coach privé plutôt qu'un cours classique. Dès que j'avais une question sur un exo, je la posais sur le canal de discussion et j'avais une réponse presque tout de suite. Je recommande à 100% !",
    rating: 5
  },
  {
    name: "Hugo D.",
    school: "ESSEC",
    // Texte plus humain : mentionne la gestion du temps entre lycée et prépa.
    content: "Préparer ACCÈS et SÉSAME en même temps me faisait peur pour mes notes au lycée. La méthode ALVA m'a permis d'optimiser mon temps de révision sans sacrifier mes week-ends. C'est vraiment la prépa intelligente pour ceux qui veulent les meilleures écoles.",
    rating: 5
  }
]

export function Testimonials() {
  return (
    <section id="temoignages" className="py-24 bg-gradient-to-b from-muted/30 to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-secondary/10 text-secondary font-semibold text-sm rounded-full uppercase tracking-wider mb-4">
            Témoignages
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            Ils ont réussi avec Alva Prépa
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Découvrez les retours sans filtre de nos anciens élèves, aujourd'hui dans les meilleures écoles de commerce.
          </p>
        </div>

        {/* Testimonials grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group bg-card rounded-2xl p-8 border border-border hover:border-secondary/30 hover:shadow-xl transition-all duration-500"
            >
              {/* Quote icon */}
              <div className="mb-6">
                <Quote className="h-10 w-10 text-primary/20" />
              </div>

              {/* Content */}
              <p className="text-foreground text-lg leading-relaxed mb-6">
                &quot;{testimonial.content}&quot;
              </p>

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-bold text-lg">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">Admis(e) à {testimonial.school}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { value: "100%", label: "Taux d'intégration" },
            { value: "50+", label: "Élèves accompagnés" },
            { value: "4.9/5", label: "Note moyenne" },
            { value: "24/7", label: "Support disponible" }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl lg:text-5xl font-bold text-primary mb-2">{stat.value}</div>
              <div className="text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}