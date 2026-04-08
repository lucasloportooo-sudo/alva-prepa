"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

const faqs = [
  {
    question: "Comment se déroulent concrètement les cours ?",
    answer: "On fait ça en ligne, mais attention : pas de cours magistral ennuyeux. On est en petit groupe de 6 élèves maximum pour que chacun puisse participer. Les sessions durent 2 heures, généralement de 18h à 20h, pour que ça ne bloque pas ta journée de cours au lycée. Tu reçois tes supports avant chaque séance pour être prêt à bosser direct."
  },
  {
    question: "Quand commencent les prochaines sessions ?",
    answer: "On tourne toute l'année, mais ça s'intensifie forcément à l'approche des concours. Le plus simple, c'est de nous envoyer un message pour qu'on regarde ensemble les places dispo sur le mois qui t'intéresse. On essaie d'être le plus flexible possible."
  },
  {
    question: "Comment fonctionne la garantie 'Admis ou remboursé' ?",
    answer: "C'est notre engagement confiance. Si tu suis l'intégralité de ta formation et que, malgré tout, tu n'obtiens aucune admission dans une école des concours ACCÈS ou SÉSAME, on te rembourse jusqu'au dernier centime. On est tellement sûrs de notre méthode qu'on prend le risque avec toi."
  },
  {
    question: "Puis-je prendre des cours à la carte ?",
    answer: "Bien sûr. Si tu es déjà une brute en maths mais que la synthèse te fait peur, tu peux cibler uniquement tes points faibles. On propose des modules de 1h, 3h ou 4h selon tes besoins."
  },
  {
    question: "L'entretien blanc est-il vraiment en présentiel ?",
    answer: "Oui, et c'est crucial. L'oral, ça ne se prépare pas que derrière un écran. Il faut qu'on voie comment tu te tiens, ton regard, ta gestion du stress face à un vrai jury. On se rencontre en vrai pour te mettre dans les conditions exactes du jour J."
  },
  {
    question: "Quel est le profil de l'équipe pédagogique ?",
    answer: "On n'est pas des profs 'classiques'. On est des étudiants qui ont eux-mêmes cartonné aux concours ACCÈS et SÉSAME il y a peu. On connaît les pièges, les astuces de dernière minute et surtout, on sait exactement ce que les jurys attendent parce qu'on était à ta place il n'y a pas si longtemps."
  }
]

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section id="faq" className="py-24 bg-background">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary font-semibold text-sm rounded-full uppercase tracking-wider mb-4">
            FAQ
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            Des questions ? On a les réponses.
          </h2>
          <p className="text-lg text-muted-foreground text-pretty">
            Tout ce que tu dois savoir pour préparer sereinement ton intégration.
          </p>
        </div>

        {/* FAQ list */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-border rounded-2xl overflow-hidden transition-all duration-300 hover:border-primary/30 shadow-sm"
            >
              <button
                className="w-full flex items-center justify-between p-6 text-left bg-card hover:bg-muted/50 transition-colors"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-semibold text-foreground pr-4 text-lg">{faq.question}</span>
                <ChevronDown
                  className={`h-5 w-5 text-muted-foreground flex-shrink-0 transition-transform duration-300 ${openIndex === index ? "rotate-180" : ""
                    }`}
                />
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ${openIndex === index ? "max-h-96" : "max-h-0"
                  }`}
              >
                <div className="p-6 pt-0 text-muted-foreground leading-relaxed text-base">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}