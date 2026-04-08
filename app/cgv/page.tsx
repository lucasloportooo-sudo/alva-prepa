import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function CGV() {
  return (
    <main className="min-h-screen bg-background pt-32 pb-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link href="/" className="inline-flex items-center text-primary hover:underline font-medium mb-8">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Retour à l'accueil
        </Link>

        <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-8">Conditions Générales de Vente (CGV)</h1>

        <div className="space-y-8 text-muted-foreground leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold text-foreground mb-4">Préambule</h2>
            <p>
              Les présentes conditions générales de vente s'appliquent à toutes les ventes conclues sur le site Internet ALVA PREPA.<br />
              Le site est un service de l'entreprise ALVA PREPA, située 22 Rue Lazare Carnot 78220 Viroflay, France.<br />
              e-mail : alva.prepa.contacts@gmail.com | téléphone : 06 51 67 38 78
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-4">Article 1 - Contenu et Objet</h2>
            <p>
              Les présentes conditions générales ont pour objet de définir les droits et obligations des parties dans le cadre de la vente de prestations de services numériques (formations, cours en ligne, supports digitaux, entretiens) proposées par le vendeur.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-4">Article 2 - La commande</h2>
            <p>
              L'acheteur a la possibilité de passer sa commande en ligne à partir des offres proposées. Pour que la commande soit validée, l'acheteur devra accepter les présentes conditions générales et valider le paiement. La vente sera considérée comme définitive après l'envoi de la confirmation par messagerie électronique et encaissement du prix. L'acheteur déclare être majeur ; si le bénéficiaire est mineur, la commande doit être effectuée par le responsable légal.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-4">Article 3 - Prix et Paiement</h2>
            <p>
              Les prix sont indiqués en euros (TVA applicable en vigueur). Le paiement s'effectue en totalité au jour de la commande, par Carte Bancaire ou via la plateforme Stripe. Le vendeur se réserve le droit de suspendre l'accès aux cours en cas de refus d'autorisation de paiement de la part des organismes ou en cas de non-paiement.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-4">Article 4 - Exécution de la prestation</h2>
            <p>
              Les cours et supports étant délivrés par voie numérique, aucune expédition ou livraison physique n'est effectuée (à l'exception de la présentation physique de l'élève à l'entretien blanc en présentiel, le cas échéant). L'acheteur sera informé des liens de connexion (visio, canaux de discussion) après validation de l'achat.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-4">Article 5 - Droit de rétractation</h2>
            <p>
              Conformément aux dispositions du code de la consommation, l'acheteur dispose d'un délai de 14 jours à compter de la validation de sa commande pour se rétracter et demander le remboursement. Le droit de rétractation peut être exercé par e-mail dénué d'ambiguïté.
            </p>
            <p className="mt-2">
              Cependant, selon l'article L221-28 du Code de la consommation, le droit de rétractation ne peut être exercé pour les contrats de fourniture d'un contenu numérique non fourni sur un support matériel dont l'exécution a commencé après accord préalable exprès du consommateur et renoncement exprès à son droit de rétractation.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-4">Article 6 - Annulation et Résolution</h2>
            <p>
              En dehors du droit de rétractation légal, les prestations entamées ne sont pas remboursables, sauf application stricte de la garantie "Admis ou Remboursé" dont les conditions sont expressément définies dans les Conditions Générales d'Utilisation (CGU) du site ALVA PREPA.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-4">Article 7 - Propriété intellectuelle</h2>
            <p>
              Le contenu de la formation, de la méthode ALVA et des supports de cours reste la propriété exclusive du vendeur. Toute reproduction, partage à des tiers ou revente est strictement interdite et est susceptible de constituer un délit de contrefaçon.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-4">Article 8 - Droit applicable et litiges</h2>
            <p>
              Les présentes conditions générales sont soumises à l'application du droit français. En cas de litige, l'acheteur s'adressera en priorité au vendeur pour obtenir une solution amiable. L'acheteur peut recourir à un médiateur de la consommation [NOM DU MÉDIATEUR À RENSEIGNER ULTÉRIEUREMENT].
            </p>
          </section>
        </div>
      </div>
    </main>
  )
}