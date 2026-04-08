import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function PolitiqueConfidentialite() {
  return (
    <main className="min-h-screen bg-background pt-32 pb-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link href="/" className="inline-flex items-center text-primary hover:underline font-medium mb-8">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Retour à l'accueil
        </Link>

        <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-8">Politique de Confidentialité</h1>

        <div className="space-y-8 text-muted-foreground leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold text-foreground mb-4">1. Responsable du traitement</h2>
            <p>
              Le responsable du traitement des données est : ALVA PREPA.<br />
              Dans le cadre de l'utilisation du site et des services, ALVA PREPA s'engage à protéger la vie privée de ses utilisateurs conformément à la réglementation en vigueur (RGPD).
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-4">2. Données collectées</h2>
            <p className="mb-2">Nous collectons les données strictement nécessaires à la bonne exécution de nos services :</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Nom et prénom</li>
              <li>Coordonnées (adresse email, numéro de téléphone)</li>
              <li>Informations de scolarité de l'élève</li>
              <li>Justificatifs Parcoursup (uniquement en cas de demande d'application de la garantie de remboursement)</li>
              <li>Données de paiement (traitées de manière cryptée et sécurisée par notre prestataire Stripe, nous ne stockons pas vos numéros de carte bancaire).</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-4">3. Finalités du traitement</h2>
            <p className="mb-2">Les données collectées sont utilisées exclusivement pour :</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Fournir, gérer et facturer les prestations de préparation aux concours.</li>
              <li>Organiser les cours en visio et donner l'accès au canal de discussion.</li>
              <li>Vérifier l’éligibilité à l’offre « admis ou remboursé ».</li>
              <li>Assurer la sécurité et la communication avec l'élève et ses représentants légaux.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-4">4. Partage des données</h2>
            <p>
              Vos données sont confidentielles. Elles sont accessibles uniquement aux intervenants pédagogiques d’ALVA PREPA et aux prestataires techniques strictement nécessaires à l’exécution du service (comme Stripe pour le paiement, ou notre hébergeur web). <strong>Aucune transmission de vos données aux écoles de commerce n’est effectuée.</strong> Vos données ne sont jamais revendues à des tiers à des fins publicitaires.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-4">5. Vos droits (RGPD)</h2>
            <p>
              Conformément à la réglementation européenne, vous disposez d’un droit d’accès, de rectification, d’effacement, de limitation, d’opposition et de portabilité sur l'ensemble de vos données personnelles.
            </p>
            <p className="mt-2">
              Pour exercer vos droits, vous pouvez nous contacter par email à l'adresse : <strong>alva.prepa.contacts@gmail.com</strong>. En cas de litige, vous avez également le droit d'introduire une réclamation auprès de la CNIL (https://www.cnil.fr).
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-4">6. Utilisation des Cookies</h2>
            <p>
              Le site peut collecter automatiquement des informations standards de navigation (cookies d'analyse et de performance) afin de nous aider à améliorer nos services et l'expérience utilisateur. Lors de votre première visite, vous avez la possibilité d'accepter ou de refuser ces cookies. Vous pouvez à tout moment modifier vos préférences ou les désactiver depuis les paramètres de votre navigateur web.
            </p>
          </section>
        </div>
      </div>
    </main>
  )
}