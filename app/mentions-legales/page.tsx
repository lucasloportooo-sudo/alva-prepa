import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function MentionsLegales() {
  return (
    <main className="min-h-screen bg-background pt-32 pb-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link href="/" className="inline-flex items-center text-primary hover:underline font-medium mb-8">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Retour à l'accueil
        </Link>

        <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-8">Mentions Légales & CGU</h1>

        <div className="space-y-8 text-muted-foreground leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold text-foreground mb-4">1. Éditeur du site</h2>
            <p>
              <strong>Dénomination sociale :</strong> ALVA PREPA [Statut juridique à renseigner, ex: Auto-entreprise]<br />
              <strong>Adresse :</strong> 22 rue Lazare Carnot, 78220 Viroflay<br />
              <strong>SIRET :</strong> [À RENSEIGNER]<br />
              <strong>Adresse email :</strong> alva.prepa.contacts@gmail.com
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-4">2. Hébergeur</h2>
            <p>
              Le site est hébergé par [NOM DE L'HÉBERGEUR À RENSEIGNER, ex: Vercel, AWS, OVH], dont le siège social est situé [ADRESSE DE L'HÉBERGEUR].
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-4">3. Indépendance vis-à-vis des écoles</h2>
            <p>
              ALVA PREPA est une structure privée indépendante. Nous ne sommes pas affiliés, partenaires, mandatés, ou représentatifs des écoles de commerce concernées par les concours ACCÈS et SÉSAME. L’emploi des noms des écoles vise uniquement un but descriptif et informatif.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-4">4. Accès, inscription et capacité juridique</h2>
            <p>
              Les services payants s'adressent à des personnes physiques disposant de la capacité juridique de contracter. Si l'élève bénéficiaire de la formation est mineur, la création du compte et l'achat des prestations doivent obligatoirement être effectués ou validés par son représentant légal (parent ou tuteur). Toute activité réalisée depuis le compte engage la responsabilité de l’utilisateur ou de son représentant légal.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-4">5. Droits à l'image, Visios et Modération</h2>
            <p className="mb-2">L'élève s'engage à adopter un comportement respectueux. Dans le cadre de nos services :</p>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Visio-conférences :</strong> Il est formellement interdit d'enregistrer, de filmer, de photographier ou de diffuser tout ou partie des cours en visio, par respect pour le droit à l'image des intervenants et des autres élèves mineurs.</li>
              <li><strong>Canal de discussion 7j/7 :</strong> ALVA PREPA se réserve le droit de modérer les échanges. Tout élève tenant des propos injurieux, discriminatoires, de harcèlement ou partageant des contenus illégaux sera immédiatement banni du groupe et de la formation, sans aucun remboursement possible.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-4">6. Offre "Admis ou remboursé"</h2>
            <p className="mb-2">Pour prétendre à l’offre de garantie « admis ou remboursé », le candidat doit obligatoirement remplir TOUTES les conditions cumulatives suivantes :</p>
            <ol className="list-decimal pl-5 space-y-2">
              <li><strong>Assiduité :</strong> Avoir été présent et actif à 100% des heures de cours en visio prévues dans sa formule.</li>
              <li><strong>Démarches :</strong> Avoir candidaté et déposé un dossier complet pour l’ensemble des écoles visées par la préparation sur la plateforme Parcoursup pour l'année en cours.</li>
              <li><strong>Présentation :</strong> S’être présenté à TOUS les oraux pour lesquels il a été convoqué, et y avoir fait preuve d'un comportement sérieux et diligent (aucune exclusion ou note éliminatoire volontaire).</li>
              <li><strong>Admission :</strong> Ne pas avoir refusé une proposition d'admission d'une des écoles couvertes par les concours ACCÈS ou SÉSAME sur Parcoursup. (La garantie est annulée si l'élève est admis mais choisit de décliner l'offre pour une autre filière).</li>
            </ol>
            <p className="mt-2"><strong>Justificatifs :</strong> le candidat devra fournir les preuves d'assiduité aux concours et le relevé de décisions Parcoursup. Les exclusions, abandons volontaires ou désistements annulent la garantie.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-4">7. Entretien blanc en présentiel</h2>
            <p>
              Pour les prestations incluant une simulation d'oral en présentiel, l'élève certifie être couvert par une assurance responsabilité civile personnelle (ou celle de ses parents s'il est mineur). ALVA PREPA décline toute responsabilité en cas de vol, perte d'effets personnels ou dommages survenant dans ou aux abords des locaux loués pour l'événement.
            </p>
          </section>
        </div>
      </div>
    </main>
  )
}