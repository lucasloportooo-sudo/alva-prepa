"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Check, Clock, Gift, Sparkles, ArrowRight, BookOpen, MessageCircle, FileText, ChevronDown, X } from "lucide-react"

const mainOffers = [
  {
    id: "acces-sesame",
    name: "Formule ACCÈS et SÉSAME",
    price: "649",
    tagline: "Préparation complète pour multiplier vos résultats sans doubler vos efforts",
    duration: "18 heures",
    popular: true,
    subjects: [
      { name: "Synthèse", hours: "5h" },
      { name: "Mathématiques", hours: "5h" },
      { name: "Anglais", hours: "4h" },
      { name: "Entretien oral", hours: "1h" },
      { name: "Compétences numériques", hours: "1h" },
      { name: "Enjeux contemporains", hours: "1h" },
      { name: "Français", hours: "1h" },
    ],
    includes: [
      "Supports de cours exclusifs",
      "Corrections collectives",
      "Canal de discussion 24/7"
    ],
    bonus: "Entretien blanc offert",
    cta: "https://buy.stripe.com/dRm6oJ3G43OL8PD6Xm1wY02",
    accordionSections: [
      {
        id: "ce-que-vous-obtenez",
        title: "Ce que vous obtenez concrètement",
        content: `Des cours pensés pour les élèves par les élèves : La PRÉPA ACCÈS + SÉSAME inclut 18h de cours qui couvrent tous les éléments à connaître avant de passer les concours ainsi que les méthodologies pour être le plus efficace possible.

Des supports exclusifs ALVA : Nous laissons à nos élèves le support du cours sur lequel sont disponibles tous les points clés pendant toute la durée de la PRÉPA.

Des sessions de correction collectives pour que chacun en bénéficie. L'objectif est de créer une entraide dynamique durant les cours.

Un canal de discussion auquel vous aurez accès dès votre inscription, pour poser toutes vos questions. Nous vous y répondrons 7j/7.`
      },
      {
        id: "methode-alva",
        title: "La méthode ALVA : puissante et réfléchie",
        content: `Sélectionner ce qui tombe vraiment aux épreuves, automatiser les bonnes démarches et s'entraîner intensément en conditions réelles. Nous misons sur la répétition intelligente : séries courtes et fréquentes, corrections avec grille de notation et exercices de remédiation ciblée. Chaque séance est conçue pour que vous ressortiez avec un acquis immédiatement réutilisable le jour J. Cette méthode est le résultat d'une longue étude des concours aux écoles de commerce, qui sont plus qu'accessibles avec le bon entraînement.`
      },
      {
        id: "epreuves-couvertes",
        title: "Épreuves couvertes",
        content: `• Synthèse (5h) : Les meilleures méthodes pour assurer l'ensemble des synthèses ACCÈS et SÉSAME.

• Mathématiques (5h) : Reprise de toutes les notions, concours blanc en continu, méthodes clés pour gagner du temps.

• Anglais (4h) : Exercices typiques des deux concours, règles de grammaire, méthode pour les compréhensions écrites.

• Entretien oral (1h) : L'épreuve signature de notre PRÉPA avec méthodologie et techniques qui nous ont permis d'exceller.

• Compétences digitales (1h) : Ateliers pratiques et QCM pour maîtriser les démarches opérationnelles.

• Enjeux contemporains (1h) : Dossiers synthétiques par thématique et exercices d'argumentation.

• Français (1h) : Ateliers d'écriture courte et corrections ciblées.`
      },
      {
        id: "suivi-personnalise",
        title: "Suivi personnalisé",
        content: `Grâce à nos classes restreintes, nous accompagnons chaque élève individuellement dans toutes les étapes de son apprentissage et de ses révisions. Nous serons là pour accompagner tous nos étudiants et respecter le rythme de chacun. Une aide supplémentaire pourra être employée pour les élèves en difficulté à travers le canal de discussion.`
      },
      {
        id: "avantages-alva",
        title: "Les avantages ALVA",
        content: `✓ Gain de temps : Notre méthode dénote des autres. Nous vous apprenons à adopter le raisonnement nécessaire pour réussir ces concours. Nous avons condensé les exercices centraux du concours pour optimiser votre apprentissage.

✓ Qualité pédagogique : Nous sommes des élèves qui avons passé ce concours et qui l'avons réussi haut la main. Nous étions dans le même cas que les futurs étudiants, nous saurons comment leur apprendre à réussir comme nous.

✓ Transparence : Nous ne vous ferons pas de promesses irréalistes, mais un engagement sincère sur l'accompagnement, la qualité des contenus et la rigueur de notre enseignement.`
      },
      {
        id: "pour-qui",
        title: "Pour qui ?",
        content: `La Prépa ACCÈS + SÉSAME ALVA s'adresse aux candidats déterminés à performer, à ceux qui veulent optimiser leur préparation, qui préfèrent un apprentissage malin à un apprentissage massif, et à tous ceux qui recherchent une méthode pragmatique et qui a déjà fait ses preuves. Nous vous offrons ici une connaissance complète des deux concours, afin d'avoir une connaissance globale des écoles de commerce. Si vous souhaitez transformer votre potentiel en performance, rejoignez ALVA PRÉPA.`
      }
    ]
  },
  {
    id: "acces",
    name: "Formule ACCÈS",
    price: "449",
    tagline: "Moins d'heures factices, plus d'heures efficaces",
    duration: "12 heures",
    subjects: [
      { name: "Compréhension et Synthèse", hours: "4h" },
      { name: "Raisonnement logique et mathématique", hours: "4h" },
      { name: "Anglais", hours: "3h" },
      { name: "Entretien oral", hours: "1h" },
    ],
    includes: [
      "Supports exclusifs",
      "Écoute active privilégiée",
      "Canal de discussion 7j/7"
    ],
    cta: "https://buy.stripe.com/bJe6oJekI3OLe9XdlK1wY01",
    accordionSections: [
      {
        id: "ce-que-vous-obtenez",
        title: "Ce que vous obtenez concrètement",
        content: `Des cours pensés pour les élèves par les élèves : La PRÉPA ACCÈS inclut 12h de cours qui couvrent tous les éléments à connaître avant de passer le concours ainsi que les méthodologies pour être le plus efficace possible. Les cours comprennent également un accompagnement sur tous les exercices et pièges types pour ne laisser aucune place au hasard.

Des supports exclusifs ALVA : Nous laissons à nos élèves le support du cours sur lequel sont disponibles tous les points clés. Nous privilégions l’écoute active : les élèves devront noter le cours pendant les visio pour optimiser la mémorisation. Le support sert à récupérer les éléments éventuellement oubliés.

Sessions collectives & Canal de discussion : Des corrections collectives pour que chacun en bénéficie et créer une entraide dynamique durant les cours. Un canal de discussion accessible dès l'inscription pour répondre à vos questions 7j/7 sur la méthode, les exercices et le choix de vos écoles.`
      },
      {
        id: "methode-alva",
        title: "La méthode ALVA : puissante et réfléchie",
        content: `Sélectionner ce qui tombe vraiment aux épreuves, automatiser les bonnes démarches et s'entraîner intensément en conditions réelles. Nous misons sur la répétition intelligente : séries courtes et fréquentes, corrections avec grille de notation et exercices de remédiation ciblée. Chaque séance est conçue pour que vous ressortiez avec un acquis immédiatement réutilisable le jour J.`
      },
      {
        id: "epreuves-couvertes",
        title: "Épreuves couvertes",
        content: `• Compréhension et expression écrite / Synthèse (4h) : La meilleure méthode pour assurer l'ensemble de l'épreuve. Présentation des modalités, exercices blancs et correction collective.

• Raisonnement logique et mathématique (4h) : Reprise de toutes les notions à maîtriser, concours blanc en continu et méthodes clés pour les exercices hors programme du lycée.

• Anglais (3h) : Exercices typiques du concours ACCÈS avec un focus sur la grammaire, la compréhension écrite et un programme novateur pour s'améliorer en continu jusqu'au jour J.

• Entretien oral (1h) : Nous vous enseignerons la méthodologie la plus attendue par les jurys et les techniques pour exceller dans toutes les écoles.`
      },
      {
        id: "suivi-personnalise",
        title: "Suivi personnalisé",
        content: `Grâce à nos classes restreintes, nous accompagnons chaque élève individuellement. Nous respectons le rythme de chacun et proposons une aide supplémentaire via le canal de discussion pour les élèves en difficulté.`
      },
      {
        id: "avantages-alva",
        title: "Les avantages ALVA",
        content: `✓ Gain de temps : Nous avons condensé les exercices centraux. Si vous maîtrisez le bon raisonnement, tout le reste en découle.

✓ Qualité pédagogique : Nous sommes des élèves ayant réussi ce concours haut la main. La méthode et la pédagogie priment sur le diplôme de l'enseignant.

✓ Transparence : Un engagement sincère sur l'accompagnement et la qualité des contenus, sans promesses irréalistes.`
      },
      {
        id: "pour-qui",
        title: "Pour qui ?",
        content: `La Prépa ACCÈS ALVA s'adresse aux candidats déterminés qui préfèrent un apprentissage malin à un apprentissage massif. Si vous souhaitez transformer votre potentiel en performance, rejoignez ALVA PRÉPA.`
      }
    ]
  },
  {
    id: "sesame",
    name: "Formule SÉSAME",
    price: "449",
    tagline: "Analyse approfondie des annales pour un gain mesurable",
    duration: "12 heures",
    subjects: [
      { name: "Mathématiques", hours: "3h" },
      { name: "Synthèse", hours: "3h" },
      { name: "Anglais", hours: "2h" },
      { name: "Compétences digitales", hours: "1h" },
      { name: "Enjeux contemporains", hours: "1h" },
      { name: "Français", hours: "1h" },
      { name: "Entretien oral", hours: "1h" },
    ],
    includes: [
      "Entraînements chronométrés",
      "Assistance 7j/7",
      "Fiches lexicales"
    ],
    cta: "https://buy.stripe.com/4gM28tccAfxt3vj3La1wY05",
    accordionSections: [
      {
        id: "ce-que-vous-obtenez",
        title: "Ce que vous obtenez concrètement",
        content: `Des cours pensés pour les élèves par les élèves : La PRÉPA SÉSAME inclut 12h de cours couvrant tous les éléments indispensables et les pièges types pour ne laisser aucune place au hasard.

Supports & Écoute active : Supports exclusifs disponibles durant toute la formation. Nous privilégions la prise de notes en visio pour optimiser l'efficacité des révisions.

Entraide & Support : Sessions de correction collectives pour créer une entraide dynamique et analyser les erreurs récurrentes. Accès à notre canal de discussion 7j/7 dès l'inscription.`
      },
      {
        id: "methode-alva",
        title: "La méthode ALVA : puissante et réfléchie",
        content: `Sélectionner ce qui tombe vraiment aux épreuves, automatiser les bonnes démarches et s'entraîner intensément en conditions réelles. Répétition intelligente avec séries courtes et remédiation ciblée pour un acquis immédiatement réutilisable.`
      },
      {
        id: "epreuves-couvertes",
        title: "Épreuves couvertes",
        content: `• Mathématiques SÉSAME (3h) : Calcul rapide, astuces de résolution et entraînements chronométrés.

• Anglais SÉSAME (2h) : Fiches lexicales stratégiques et exercices en temps limité pour améliorer votre vitesse et votre précision.

• Synthèse SÉSAME (3h) : Méthode pour produire une synthèse compacte et conforme aux attentes, avec un travail sur la concision.

• Compétences digitales (1h) : Ateliers pratiques et QCM pour maîtriser les démarches opérationnelles.

• Enjeux contemporains (1h) : Dossiers synthétiques par thématique et débats guidés pour affûter votre analyse.

• Français (1h) : Ateliers d'écriture courte pour réduire les fautes évitables.

• Entretien oral (1h) : Méthodologie complète pour exceller devant le jury.`
      },
      {
        id: "suivi-personnalise",
        title: "Suivi personnalisé",
        content: `Grâce à nos classes restreintes, nous accompagnons chaque élève individuellement. Nous respectons le rythme de chacun et proposons une aide supplémentaire via le canal de discussion.`
      },
      {
        id: "avantages-alva",
        title: "Les avantages ALVA",
        content: `✓ Gain de temps : Nous condensons les exercices centraux pour optimiser votre apprentissage.

✓ Qualité pédagogique : Expertise directe d'élèves ayant réussi le concours. La pédagogie adoptée prime sur le diplôme de l'enseignant.

✓ Transparence : Un engagement sincère sur la qualité des contenus et la rigueur de notre enseignement.`
      },
      {
        id: "pour-qui",
        title: "Pour qui ?",
        content: `La Prépa SÉSAME ALVA s'adresse aux candidats déterminés cherchant une méthode pragmatique qui a fait ses preuves. Si vous souhaitez transformer votre potentiel en performance, rejoignez ALVA PRÉPA.`
      }
    ]
  }
]

const specialOffers = [
  {
    id: "entretien-blanc",
    price: "49",
    name: "L'Entretien Blanc en Présentiel",
    tagline: "Simulation ultra-réaliste pour transformer votre oral en avantage compétitif",
    format: "Simulation individuelle de 30 minutes en conditions réelles",
    includes: [
      "Débriefing approfondi immédiat",
      "Analyse du pitch et du langage corporel",
      "Gestion du stress",
      "Structuration des réponses",
      "Maîtrise des questions pièges"
    ],
    cta: "https://buy.stripe.com/fZudRb3G40Cze9X3La1wY03"
  }
]

const alaCarteOffers = [
  {
    price: "159",
    hours: "4 heures",
    options: "Synthèse ACCÈS OU Raisonnement logique ACCÈS",
    cta: "https://buy.stripe.com/bJe3cxb8wdpl4zn2H61wY08"
  },
  {
    price: "129",
    hours: "3 heures",
    options: "Synthèse SÉSAME, Mathématiques SÉSAME OU Anglais",
    cta: "https://buy.stripe.com/8x2cN7gsQfxt3vja9y1wY07"
  },
  {
    price: "49",
    hours: "1 heure",
    options: "Compétences numériques, Enjeux contemporains, Français OU Entretien",
    cta: "https://buy.stripe.com/aFadRb4K83OLe9X1D21wY06"
  }
]

interface OfferModalProps {
  offer: typeof mainOffers[0]
  onClose: () => void
}

function OfferModal({ offer, onClose }: OfferModalProps) {
  const [openSections, setOpenSections] = useState<string[]>([])

  const toggleSection = (id: string) => {
    setOpenSections(prev =>
      prev.includes(id)
        ? prev.filter(s => s !== id)
        : [...prev, id]
    )
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={onClose}
      />
      <div className="relative bg-card rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-border">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-muted hover:bg-muted/80 transition-colors z-10"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="p-8">
          <div className="mb-8">
            {offer.popular && (
              <span className="inline-flex items-center gap-1 px-3 py-1 bg-primary/20 text-primary text-sm font-semibold rounded-full mb-4">
                <Sparkles className="h-3 w-3" />
                Recommandé
              </span>
            )}
            <h3 className="text-3xl font-bold text-foreground mb-2">{offer.name}</h3>
            <div className="flex items-baseline gap-1 mb-2">
              <span className="text-4xl font-bold text-foreground">{offer.price}</span>
              <span className="text-lg text-muted-foreground font-medium">€</span>
            </div>
            <p className="text-muted-foreground">{offer.tagline}</p>
          </div>

          <div className="flex items-center gap-2 mb-8 p-4 bg-secondary/10 rounded-xl">
            <Clock className="h-6 w-6 text-secondary" />
            <span className="text-xl font-semibold text-foreground">{offer.duration} de formation intensive</span>
          </div>

          <div className="mb-8">
            <h4 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
              <BookOpen className="h-5 w-5 text-primary" />
              Matières incluses
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {offer.subjects.map((subject, idx) => (
                <div
                  key={idx}
                  className="flex items-center justify-between bg-muted/50 rounded-xl px-4 py-3 border border-border/50"
                >
                  <span className="text-foreground font-medium">{subject.name}</span>
                  <span className="text-primary font-bold bg-primary/10 px-2 py-1 rounded-lg text-sm">{subject.hours}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-8 space-y-3">
            {offer.accordionSections.map((section) => (
              <div
                key={section.id}
                className="border border-border rounded-xl overflow-hidden"
              >
                <button
                  onClick={() => toggleSection(section.id)}
                  className="w-full flex items-center justify-between p-4 bg-muted/30 hover:bg-muted/50 transition-colors text-left"
                >
                  <span className="font-semibold text-foreground">{section.title}</span>
                  <ChevronDown
                    className={`h-5 w-5 text-muted-foreground transition-transform duration-300 ${openSections.includes(section.id) ? "rotate-180" : ""
                      }`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${openSections.includes(section.id) ? "max-h-[800px] opacity-100" : "max-h-0 opacity-0"
                    }`}
                >
                  <div className="p-4 text-muted-foreground bg-background whitespace-pre-wrap text-sm leading-relaxed">
                    {section.content}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mb-8">
            <h4 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
              <FileText className="h-5 w-5 text-primary" />
              Inclus dans la formule
            </h4>
            <ul className="space-y-3">
              {offer.includes.map((item, idx) => (
                <li key={idx} className="flex items-center gap-3 text-foreground">
                  <div className="p-1 bg-green-500/20 rounded-full">
                    <Check className="h-4 w-4 text-green-500" />
                  </div>
                  {item}
                </li>
              ))}
              {offer.bonus && (
                <li className="flex items-center gap-3 text-green-600 font-semibold">
                  <div className="p-1 bg-green-500/30 rounded-full">
                    <Gift className="h-4 w-4 text-green-500" />
                  </div>
                  {offer.bonus}
                </li>
              )}
            </ul>
          </div>

          <Link href={offer.cta} target="_blank" passHref>
            <Button
              size="lg"
              className="w-full py-6 text-lg font-semibold bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg shadow-primary/25"
            >
              Choisir cette formule
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export function Pricing() {
  const [selectedOffer, setSelectedOffer] = useState<typeof mainOffers[0] | null>(null)
  const [animatingOfferId, setAnimatingOfferId] = useState<string | null>(null);

  const handleOfferClick = (offer: typeof mainOffers[0]) => {
    if (offer.popular) {
      setSelectedOffer(offer);
      return;
    }
    setAnimatingOfferId(offer.id);
    setTimeout(() => {
      setSelectedOffer(offer);
      setAnimatingOfferId(null);
    }, 400);
  };

  return (
    <section id="offres" className="py-24 bg-gradient-to-b from-background via-muted/30 to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary font-semibold text-sm rounded-full uppercase tracking-wider mb-4">
            Nos Formules
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            Choisissez la formule qui vous correspond
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Des préparations sur-mesure pour maximiser vos chances de réussite aux concours ACCÈS et SÉSAME.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {mainOffers.map((offer) => {
            const isActive = offer.popular || offer.id === animatingOfferId;
            return (
              <div
                key={offer.id}
                // Ajout de flex, flex-col et h-full pour prendre toute la hauteur de la grille
                className={`relative bg-card rounded-3xl border-2 transition-all duration-500 cursor-pointer group flex flex-col h-full ${isActive
                  ? "border-primary shadow-2xl shadow-primary/20 scale-105 lg:scale-110 z-10"
                  : "border-border hover:border-primary/30 hover:shadow-xl"
                  }`}
                onClick={() => handleOfferClick(offer)}
              >
                {offer.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1.5 bg-primary text-primary-foreground text-sm font-bold rounded-full flex items-center gap-2">
                    <Sparkles className="h-4 w-4" />
                    Recommandé
                  </div>
                )}

                {offer.bonus && (
                  <div className="absolute -top-4 right-4 px-3 py-1 bg-green-500 text-white text-xs font-bold rounded-full flex items-center gap-1">
                    <Gift className="h-3 w-3" />
                    Bonus
                  </div>
                )}

                {/* Ajout de flex-grow et flex-col ici pour que le bouton soit repoussé */}
                <div className="p-8 flex flex-col flex-grow">
                  <div className="mb-4">
                    <h3 className="text-2xl font-bold text-foreground mb-2">{offer.name}</h3>
                    <div className="flex items-baseline gap-1">
                      <span className="text-3xl font-extrabold text-foreground">{offer.price}</span>
                      <span className="text-lg text-muted-foreground font-bold">€</span>
                    </div>
                    <p className="text-muted-foreground text-sm leading-relaxed mt-2">{offer.tagline}</p>
                  </div>

                  <div className="flex items-center gap-2 mb-6 p-3 bg-secondary/10 rounded-xl">
                    <Clock className="h-5 w-5 text-secondary" />
                    <span className="font-semibold text-foreground">{offer.duration} de formation</span>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-foreground mb-3 flex items-center gap-2">
                      <BookOpen className="h-4 w-4 text-primary" />
                      Matières incluses
                    </h4>
                    <div className="space-y-2">
                      {offer.subjects.map((subject, idx) => (
                        <div
                          key={idx}
                          className="flex items-center justify-between text-sm bg-muted/50 rounded-lg px-3 py-2"
                        >
                          <span className="text-foreground truncate mr-2">{subject.name}</span>
                          <span className="text-primary font-medium whitespace-nowrap">{subject.hours}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-foreground mb-3 flex items-center gap-2">
                      <FileText className="h-4 w-4 text-primary" />
                      Inclus
                    </h4>
                    <ul className="space-y-2">
                      {offer.includes.map((item, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Check className="h-4 w-4 text-green-500 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                      {offer.bonus && (
                        <li className="flex items-center gap-2 text-sm text-green-600 font-medium">
                          <Gift className="h-4 w-4 flex-shrink-0" />
                          {offer.bonus}
                        </li>
                      )}
                    </ul>
                  </div>

                  {/* Ajout de mt-auto pour repousser ce bouton vers le bas de la div parente (flex-grow) */}
                  <Button
                    className={`w-full py-6 text-base font-semibold transition-all duration-300 mt-auto ${offer.popular
                      ? "bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30"
                      : "bg-foreground hover:bg-foreground/90 text-background"
                      }`}
                    onClick={(e) => {
                      e.stopPropagation();
                      handleOfferClick(offer);
                    }}
                  >
                    Voir les détails
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Entretien Blanc Section */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-foreground">Préparation à l'oral</h3>
          </div>

          {specialOffers.map((offer) => (
            <div
              key={offer.id}
              className="bg-gradient-to-br from-card via-card to-secondary/5 rounded-3xl border-2 border-secondary/20 p-8 lg:p-10"
            >
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div>
                  <h4 className="text-2xl lg:text-3xl font-bold text-foreground mb-2">{offer.name}</h4>
                  <div className="flex items-baseline gap-1 mb-4">
                    <span className="text-3xl font-extrabold text-foreground">{offer.price}</span>
                    <span className="text-lg text-muted-foreground font-bold">€</span>
                  </div>
                  <p className="text-muted-foreground mb-4">{offer.tagline}</p>
                  <div className="flex items-center gap-2 p-3 bg-secondary/10 rounded-xl inline-flex mb-6">
                    <Clock className="h-5 w-5 text-secondary" />
                    <span className="font-semibold text-foreground">{offer.format}</span>
                  </div>
                </div>

                <div>
                  <h5 className="text-sm font-semibold text-foreground mb-4">Ce que vous obtenez :</h5>
                  <ul className="space-y-3 mb-6">
                    {offer.includes.map((item, idx) => (
                      <li key={idx} className="flex items-center gap-3 text-muted-foreground">
                        <div className="p-1 bg-secondary/20 rounded-full">
                          <Check className="h-3 w-3 text-secondary" />
                        </div>
                        {item}
                      </li>
                    ))}
                  </ul>
                  <Link href={offer.cta} target="_blank" passHref>
                    <Button
                      size="lg"
                      className="bg-secondary hover:bg-secondary/90 text-secondary-foreground shadow-lg shadow-secondary/25"
                    >
                      Réserver mon entretien blanc
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* A la carte Section */}
        <div>
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-foreground mb-2">Les Cours à la Carte</h3>
            <p className="text-muted-foreground">Flexibilité maximale pour renforcer des matières spécifiques</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {alaCarteOffers.map((offer, index) => (
              <div
                key={index}
                className="bg-card rounded-2xl border border-border p-6 hover:border-primary/30 hover:shadow-lg transition-all duration-300 flex flex-col h-full"
              >
                <div className="text-center mb-4">
                  <div className="text-4xl font-bold text-foreground mb-1">{offer.price}<span className="text-lg text-muted-foreground">€</span></div>
                  <div className="text-sm text-primary font-medium">{offer.hours}</div>
                </div>

                <p className="text-sm text-muted-foreground text-center mb-6 min-h-[60px]">
                  {offer.options}
                </p>

                <ul className="space-y-2 mb-6 text-sm text-muted-foreground flex-grow">
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-green-500" />
                    Supports exclusifs
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-green-500" />
                    Corrections collectives
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-green-500" />
                    Accès au canal de discussion
                  </li>
                </ul>

                <Link href={offer.cta} target="_blank" passHref>
                  <Button
                    variant="outline"
                    className="w-full border-primary/30 hover:bg-primary hover:text-primary-foreground transition-colors mt-auto"
                  >
                    Choisir
                  </Button>
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Guarantee banner */}
        <div className="mt-16 p-8 bg-gradient-to-r from-green-500/10 via-green-500/5 to-green-500/10 rounded-2xl border border-green-500/20 text-center">
          <div className="flex items-center justify-center gap-3 mb-3">
            <div className="p-2 bg-green-500/20 rounded-full">
              <Check className="h-6 w-6 text-green-500" />
            </div>
            <h4 className="text-xl font-bold text-foreground">Garantie Admis ou Remboursé</h4>
          </div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Si vous ne décrochez pas au moins une admission dans une école, nous vous remboursons intégralement.
            C'est notre engagement qualité.
          </p>
        </div>
      </div>

      {selectedOffer && (
        <OfferModal
          offer={selectedOffer}
          onClose={() => setSelectedOffer(null)}
        />
      )}
    </section>
  )
}