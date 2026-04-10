import { Building2, ArrowLeft } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Conditions d'utilisation — ImmoApp",
  description:
    "Conditions générales d'utilisation de la plateforme ImmoApp au Bénin.",
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="border-b border-border bg-surface/80 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
              <Building2 className="w-4 h-4 text-white" />
            </div>
            <span className="text-lg font-bold text-white font-heading">
              Immo<span className="text-primary">App</span>
            </span>
          </Link>
          <Link
            href="/"
            className="flex items-center gap-1.5 text-sm text-muted hover:text-primary transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Retour
          </Link>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 py-12 lg:py-16">
        <h1 className="text-3xl sm:text-4xl font-bold text-white font-heading mb-2">
          Conditions g&eacute;n&eacute;rales d&apos;utilisation
        </h1>
        <p className="text-muted mb-10">
          Version 1.0 &mdash; Derni&egrave;re mise &agrave; jour : 1er avril
          2025
        </p>

        <div className="space-y-10 text-sm leading-relaxed text-foreground/90">
          {/* 1 */}
          <section>
            <h2 className="text-lg font-semibold text-white font-heading mb-3">
              1. Champ d&apos;application
            </h2>
            <p>
              Les pr&eacute;sentes Conditions G&eacute;n&eacute;rales
              d&apos;Utilisation (ci-apr&egrave;s &laquo;&nbsp;CGU&nbsp;&raquo;)
              r&eacute;gissent l&apos;acc&egrave;s et l&apos;utilisation de la
              plateforme ImmoApp, accessible via le site web{" "}
              <strong>immoapp.net</strong> et l&apos;application web progressive
              (PWA) associ&eacute;e. En acc&eacute;dant &agrave; la plateforme,
              vous acceptez sans r&eacute;serve les pr&eacute;sentes CGU.
              ImmoApp se r&eacute;serve le droit de modifier ces conditions
              &agrave; tout moment. Les utilisateurs seront inform&eacute;s de
              toute modification substantielle par notification sur la
              plateforme.
            </p>
          </section>

          {/* 2 */}
          <section>
            <h2 className="text-lg font-semibold text-white font-heading mb-3">
              2. Description du service
            </h2>
            <p>
              ImmoApp est une plateforme immobili&egrave;re en ligne
              op&eacute;rant au B&eacute;nin. Elle permet aux utilisateurs de :
            </p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>
                Rechercher des biens immobiliers (appartements, maisons, villas,
                studios, terrains, locaux commerciaux)
              </li>
              <li>
                Publier des annonces immobili&egrave;res de location ou de vente
              </li>
              <li>
                Entrer en contact direct avec les propri&eacute;taires ou les
                agences
              </li>
              <li>
                Acc&eacute;der &agrave; des services de promotion
                d&apos;annonces
              </li>
            </ul>
          </section>

          {/* 3 */}
          <section>
            <h2 className="text-lg font-semibold text-white font-heading mb-3">
              3. Inscription et compte utilisateur
            </h2>
            <p>
              L&apos;acc&egrave;s &agrave; certaines fonctionnalit&eacute;s de
              la plateforme n&eacute;cessite la cr&eacute;ation d&apos;un
              compte. L&apos;utilisateur s&apos;engage &agrave; fournir des
              informations exactes et &agrave; jour lors de son inscription. Il
              est responsable de la confidentialit&eacute; de ses identifiants
              de connexion et de toute activit&eacute; effectu&eacute;e sous
              son compte. En cas d&apos;acc&egrave;s non autoris&eacute;,
              l&apos;utilisateur doit en informer ImmoApp imm&eacute;diatement.
            </p>
          </section>

          {/* 4 */}
          <section>
            <h2 className="text-lg font-semibold text-white font-heading mb-3">
              4. Tarification et paiement
            </h2>
            <p>
              La consultation des annonces est gratuite pour tous les
              utilisateurs. La publication d&apos;annonces et
              l&apos;acc&egrave;s &agrave; certains services premium sont
              soumis &agrave; tarification, d&eacute;taill&eacute;e sur la page{" "}
              <Link href="/#pricing" className="text-primary hover:underline">
                Tarifs
              </Link>
              . Les paiements sont effectu&eacute;s via les moyens de paiement
              accept&eacute;s sur la plateforme (mobile money, carte bancaire).
              Tout paiement est d&ucirc; d&egrave;s la souscription au service
              concern&eacute;.
            </p>
          </section>

          {/* 5 */}
          <section>
            <h2 className="text-lg font-semibold text-white font-heading mb-3">
              5. Contenu publi&eacute; par les utilisateurs
            </h2>
            <p>
              Les utilisateurs conservent la propri&eacute;t&eacute;
              intellectuelle de leur contenu (photos, descriptions, etc.). En
              publiant du contenu sur ImmoApp, l&apos;utilisateur accorde
              &agrave; la plateforme une licence non exclusive, mondiale et
              gratuite d&apos;utiliser, afficher et distribuer ce contenu dans
              le cadre de l&apos;exploitation du service. L&apos;utilisateur
              garantit que le contenu publi&eacute; est conforme &agrave; la
              l&eacute;gislation en vigueur au B&eacute;nin et ne porte pas
              atteinte aux droits de tiers.
            </p>
          </section>

          {/* 6 */}
          <section>
            <h2 className="text-lg font-semibold text-white font-heading mb-3">
              6. Obligations de l&apos;utilisateur
            </h2>
            <p>L&apos;utilisateur s&apos;engage &agrave; :</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>
                Ne pas publier de contenu frauduleux, trompeur ou ill&eacute;gal
              </li>
              <li>
                Ne pas utiliser la plateforme &agrave; des fins de spam,
                hameconnage ou diffusion de logiciels malveillants
              </li>
              <li>
                Ne pas tenter de perturber le fonctionnement de la plateforme
              </li>
              <li>
                Respecter les droits des autres utilisateurs et des tiers
              </li>
              <li>
                Ne pas collecter les donn&eacute;es personnelles d&apos;autres
                utilisateurs sans leur consentement
              </li>
            </ul>
          </section>

          {/* 7 */}
          <section>
            <h2 className="text-lg font-semibold text-white font-heading mb-3">
              7. Licence d&apos;utilisation
            </h2>
            <p>
              ImmoApp accorde &agrave; l&apos;utilisateur une licence
              personnelle, non cessible et non exclusive pour utiliser la
              plateforme conform&eacute;ment aux pr&eacute;sentes CGU. Toute
              reproduction, r&eacute;tro-ing&eacute;nierie, d&eacute;compilation
              ou extraction du code source de la plateforme est strictement
              interdite.
            </p>
          </section>

          {/* 8 */}
          <section>
            <h2 className="text-lg font-semibold text-white font-heading mb-3">
              8. Services tiers
            </h2>
            <p>
              ImmoApp peut faire appel &agrave; des prestataires tiers pour
              l&apos;h&eacute;bergement, le traitement des paiements,
              l&apos;analyse et d&apos;autres services techniques. ImmoApp
              n&apos;est pas responsable du contenu ou des pratiques des
              services tiers auxquels des liens peuvent renvoyer depuis la
              plateforme.
            </p>
          </section>

          {/* 9 */}
          <section>
            <h2 className="text-lg font-semibold text-white font-heading mb-3">
              9. Limitation de garantie
            </h2>
            <p>
              La plateforme est fournie &laquo;&nbsp;en l&apos;&eacute;tat&nbsp;&raquo;.
              ImmoApp ne garantit pas que le service sera ininterrompu, exempt
              d&apos;erreurs ou totalement s&eacute;curis&eacute;. ImmoApp
              d&eacute;cline toute responsabilit&eacute; quant &agrave;
              l&apos;exactitude, la fiabilit&eacute; ou la
              compl&eacute;tude des annonces publi&eacute;es par les
              utilisateurs. L&apos;utilisateur utilise la plateforme &agrave;
              ses propres risques.
            </p>
          </section>

          {/* 10 */}
          <section>
            <h2 className="text-lg font-semibold text-white font-heading mb-3">
              10. Modification et r&eacute;siliation
            </h2>
            <p>
              ImmoApp se r&eacute;serve le droit de suspendre ou de
              r&eacute;silier l&apos;acc&egrave;s d&apos;un utilisateur en cas
              de violation des pr&eacute;sentes CGU, avec un pr&eacute;avis
              raisonnable sauf en cas de violation grave. L&apos;utilisateur
              peut r&eacute;silier son compte &agrave; tout moment. Les
              donn&eacute;es associ&eacute;es au compte seront
              supprim&eacute;es dans un d&eacute;lai de 30 jours suivant la
              r&eacute;siliation, conform&eacute;ment &agrave; notre{" "}
              <Link href="/privacy" className="text-primary hover:underline">
                Politique de confidentialit&eacute;
              </Link>
              .
            </p>
          </section>

          {/* 11 */}
          <section>
            <h2 className="text-lg font-semibold text-white font-heading mb-3">
              11. Responsabilit&eacute; et indemnisation
            </h2>
            <p>
              ImmoApp ne saurait &ecirc;tre tenue responsable des dommages
              directs ou indirects r&eacute;sultant de l&apos;utilisation de la
              plateforme, y compris les pertes de donn&eacute;es, les
              interruptions de service ou les transactions entre utilisateurs.
              L&apos;utilisateur s&apos;engage &agrave; indemniser ImmoApp
              contre toute r&eacute;clamation, perte ou dommage
              r&eacute;sultant de son utilisation de la plateforme ou de la
              violation des pr&eacute;sentes CGU.
            </p>
          </section>

          {/* 12 */}
          <section>
            <h2 className="text-lg font-semibold text-white font-heading mb-3">
              12. Droit applicable et juridiction
            </h2>
            <p>
              Les pr&eacute;sentes CGU sont r&eacute;gies par le droit en
              vigueur en R&eacute;publique du B&eacute;nin. Tout litige
              relatif &agrave; l&apos;interpr&eacute;tation ou &agrave;
              l&apos;ex&eacute;cution des pr&eacute;sentes sera soumis aux
              tribunaux comp&eacute;tents de Cotonou, B&eacute;nin.
            </p>
          </section>

          {/* 13 */}
          <section>
            <h2 className="text-lg font-semibold text-white font-heading mb-3">
              13. Contact
            </h2>
            <p>
              Pour toute question relative aux pr&eacute;sentes CGU, vous
              pouvez nous contacter &agrave; l&apos;adresse :{" "}
              <a
                href="mailto:contact@immoapp.net"
                className="text-primary hover:underline"
              >
                contact@immoapp.net
              </a>
            </p>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-border py-6">
        <p className="text-center text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} ImmoApp. Tous droits
          r&eacute;serv&eacute;s.
        </p>
      </footer>
    </div>
  );
}
