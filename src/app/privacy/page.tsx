import { Building2, ArrowLeft } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Politique de confidentialité — ImmoApp",
  description:
    "Politique de confidentialité et de protection des données personnelles d'ImmoApp.",
};

export default function PrivacyPage() {
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
          Politique de confidentialit&eacute;
        </h1>
        <p className="text-muted mb-10">
          Version 1.0 &mdash; Derni&egrave;re mise &agrave; jour : 1er avril
          2025
        </p>

        <div className="space-y-10 text-sm leading-relaxed text-foreground/90">
          {/* 1 */}
          <section>
            <h2 className="text-lg font-semibold text-white font-heading mb-3">
              1. Introduction
            </h2>
            <p>
              ImmoApp (&laquo;&nbsp;nous&nbsp;&raquo;,
              &laquo;&nbsp;notre&nbsp;&raquo;) s&apos;engage &agrave;
              prot&eacute;ger la vie priv&eacute;e de ses utilisateurs. La
              pr&eacute;sente Politique de confidentialit&eacute;
              d&eacute;crit la mani&egrave;re dont nous collectons, utilisons,
              stockons et prot&eacute;geons vos donn&eacute;es personnelles
              lorsque vous utilisez notre plateforme accessible via{" "}
              <strong>immoapp.net</strong> et l&apos;application web progressive
              (PWA) associ&eacute;e.
            </p>
          </section>

          {/* 2 */}
          <section>
            <h2 className="text-lg font-semibold text-white font-heading mb-3">
              2. Responsable du traitement
            </h2>
            <p>
              Le responsable du traitement des donn&eacute;es est ImmoApp,
              op&eacute;rant en R&eacute;publique du B&eacute;nin.
            </p>
            <p className="mt-2">
              Contact :{" "}
              <a
                href="mailto:contact@immoapp.net"
                className="text-primary hover:underline"
              >
                contact@immoapp.net
              </a>
            </p>
          </section>

          {/* 3 */}
          <section>
            <h2 className="text-lg font-semibold text-white font-heading mb-3">
              3. Donn&eacute;es collect&eacute;es
            </h2>
            <p>
              Nous collectons les cat&eacute;gories de donn&eacute;es suivantes
              :
            </p>
            <h3 className="text-sm font-semibold text-white mt-4 mb-2">
              3.1 Donn&eacute;es fournies par l&apos;utilisateur
            </h3>
            <ul className="list-disc pl-6 space-y-1">
              <li>
                Donn&eacute;es d&apos;inscription : nom, pr&eacute;nom, adresse
                e-mail, num&eacute;ro de t&eacute;l&eacute;phone
              </li>
              <li>
                Donn&eacute;es de profil : photo de profil, pr&eacute;f&eacute;rences
                de recherche
              </li>
              <li>
                Contenu publi&eacute; : annonces, photos, descriptions de biens
              </li>
            </ul>

            <h3 className="text-sm font-semibold text-white mt-4 mb-2">
              3.2 Donn&eacute;es collect&eacute;es automatiquement
            </h3>
            <ul className="list-disc pl-6 space-y-1">
              <li>
                Donn&eacute;es de navigation : adresse IP, type de navigateur,
                pages consult&eacute;es, dur&eacute;e des visites
              </li>
              <li>
                Donn&eacute;es de l&apos;appareil : syst&egrave;me
                d&apos;exploitation, identifiant de l&apos;appareil,
                r&eacute;solution d&apos;&eacute;cran
              </li>
              <li>
                Cookies et technologies similaires (voir section 8)
              </li>
            </ul>
          </section>

          {/* 4 */}
          <section>
            <h2 className="text-lg font-semibold text-white font-heading mb-3">
              4. Finalit&eacute;s du traitement
            </h2>
            <p>Vos donn&eacute;es sont utilis&eacute;es pour :</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>
                Fournir, maintenir et am&eacute;liorer nos services
              </li>
              <li>
                G&eacute;rer votre compte et vos annonces
              </li>
              <li>
                Vous contacter au sujet de votre compte, de nos services ou de
                mises &agrave; jour importantes
              </li>
              <li>
                Personnaliser votre exp&eacute;rience sur la plateforme
              </li>
              <li>
                Assurer la s&eacute;curit&eacute; et pr&eacute;venir la fraude
              </li>
              <li>
                Respecter nos obligations l&eacute;gales
              </li>
              <li>
                Avec votre consentement, vous envoyer des communications
                marketing
              </li>
            </ul>
          </section>

          {/* 5 */}
          <section>
            <h2 className="text-lg font-semibold text-white font-heading mb-3">
              5. Partage des donn&eacute;es
            </h2>
            <p>
              <strong>
                Nous ne vendons, ne louons et ne fournissons jamais vos
                donn&eacute;es personnelles &agrave; des tiers &agrave; des fins
                publicitaires.
              </strong>
            </p>
            <p className="mt-2">
              Vos donn&eacute;es peuvent &ecirc;tre partag&eacute;es
              uniquement dans les cas suivants :
            </p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>
                Avec votre consentement explicite
              </li>
              <li>
                Avec nos prestataires de services de confiance (h&eacute;bergement,
                paiement, analyse) li&eacute;s par des accords de
                confidentialit&eacute;
              </li>
              <li>
                Pour satisfaire &agrave; une obligation l&eacute;gale ou
                r&eacute;glementaire
              </li>
              <li>
                Pour prot&eacute;ger les droits, la propri&eacute;t&eacute; ou
                la s&eacute;curit&eacute; d&apos;ImmoApp ou de ses utilisateurs
              </li>
            </ul>
          </section>

          {/* 6 */}
          <section>
            <h2 className="text-lg font-semibold text-white font-heading mb-3">
              6. Stockage et s&eacute;curit&eacute; des donn&eacute;es
            </h2>
            <p>
              Vos donn&eacute;es sont h&eacute;berg&eacute;es sur des serveurs
              s&eacute;curis&eacute;s. Nous mettons en &oelig;uvre des mesures
              techniques et organisationnelles appropri&eacute;es pour
              prot&eacute;ger vos donn&eacute;es contre tout acc&egrave;s non
              autoris&eacute;, perte, destruction ou alt&eacute;ration, y
              compris le chiffrement des donn&eacute;es en transit et au repos.
            </p>
          </section>

          {/* 7 */}
          <section>
            <h2 className="text-lg font-semibold text-white font-heading mb-3">
              7. Dur&eacute;e de conservation
            </h2>
            <ul className="list-disc pl-6 space-y-1">
              <li>
                <strong>Donn&eacute;es de compte et profil :</strong> pendant la
                dur&eacute;e du contrat + 12 mois apr&egrave;s suppression du
                compte
              </li>
              <li>
                <strong>Donn&eacute;es de facturation :</strong> 10 ans
                (obligation l&eacute;gale)
              </li>
              <li>
                <strong>Journaux de connexion :</strong> 30 jours (standard) ;
                400 jours (audit)
              </li>
              <li>
                <strong>Donn&eacute;es d&apos;erreur :</strong> 90 jours
              </li>
            </ul>
            <p className="mt-2">
              &Agrave; l&apos;expiration de ces d&eacute;lais, les
              donn&eacute;es sont supprim&eacute;es ou anonymis&eacute;es.
            </p>
          </section>

          {/* 8 */}
          <section>
            <h2 className="text-lg font-semibold text-white font-heading mb-3">
              8. Cookies et technologies de suivi
            </h2>
            <p>
              Nous utilisons des cookies et technologies similaires pour assurer
              le bon fonctionnement de la plateforme, analyser
              l&apos;utilisation et am&eacute;liorer votre exp&eacute;rience.
            </p>
            <h3 className="text-sm font-semibold text-white mt-4 mb-2">
              Types de cookies utilis&eacute;s :
            </h3>
            <ul className="list-disc pl-6 space-y-1">
              <li>
                <strong>Cookies n&eacute;cessaires :</strong> indispensables au
                fonctionnement du site (session, s&eacute;curit&eacute;)
              </li>
              <li>
                <strong>Cookies fonctionnels :</strong> permettent de m&eacute;moriser
                vos pr&eacute;f&eacute;rences (langue, ville)
              </li>
              <li>
                <strong>Cookies analytiques :</strong> nous aident &agrave;
                comprendre comment vous utilisez la plateforme
              </li>
              <li>
                <strong>Cookies marketing :</strong> utilis&eacute;s pour
                afficher des publicit&eacute;s pertinentes (uniquement avec
                votre consentement)
              </li>
            </ul>
            <p className="mt-2">
              Vous pouvez g&eacute;rer vos pr&eacute;f&eacute;rences en
              mati&egrave;re de cookies &agrave; tout moment via le bandeau de
              consentement ou les param&egrave;tres de votre navigateur.
            </p>
          </section>

          {/* 9 */}
          <section>
            <h2 className="text-lg font-semibold text-white font-heading mb-3">
              9. Services tiers
            </h2>
            <p>
              Nous utilisons les services tiers suivants, chacun soumis &agrave;
              sa propre politique de confidentialit&eacute; :
            </p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>
                <strong>Google Analytics :</strong> analyse
                d&apos;audience et statistiques d&apos;utilisation
              </li>
              <li>
                <strong>Services de paiement mobile :</strong> traitement
                s&eacute;curis&eacute; des transactions
              </li>
              <li>
                <strong>H&eacute;bergement cloud :</strong> stockage
                s&eacute;curis&eacute; des donn&eacute;es
              </li>
            </ul>
          </section>

          {/* 10 */}
          <section>
            <h2 className="text-lg font-semibold text-white font-heading mb-3">
              10. Vos droits
            </h2>
            <p>
              Conform&eacute;ment &agrave; la l&eacute;gislation applicable,
              vous disposez des droits suivants :
            </p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>
                <strong>Droit d&apos;acc&egrave;s :</strong> obtenir une copie
                de vos donn&eacute;es personnelles
              </li>
              <li>
                <strong>Droit de rectification :</strong> corriger des
                donn&eacute;es inexactes ou incompl&egrave;tes
              </li>
              <li>
                <strong>Droit de suppression :</strong> demander
                l&apos;effacement de vos donn&eacute;es
              </li>
              <li>
                <strong>Droit d&apos;opposition :</strong> vous opposer au
                traitement de vos donn&eacute;es &agrave; des fins marketing
              </li>
              <li>
                <strong>Droit &agrave; la portabilit&eacute; :</strong> recevoir
                vos donn&eacute;es dans un format structur&eacute;
              </li>
            </ul>
            <p className="mt-2">
              Pour exercer vos droits, contactez-nous &agrave; l&apos;adresse :{" "}
              <a
                href="mailto:contact@immoapp.net"
                className="text-primary hover:underline"
              >
                contact@immoapp.net
              </a>
            </p>
          </section>

          {/* 11 */}
          <section>
            <h2 className="text-lg font-semibold text-white font-heading mb-3">
              11. Protection des donn&eacute;es des mineurs
            </h2>
            <p>
              La plateforme n&apos;est pas destin&eacute;e aux personnes de
              moins de 18 ans. Nous ne collectons pas sciemment de
              donn&eacute;es personnelles aupr&egrave;s de mineurs. Si nous
              d&eacute;couvrons qu&apos;un mineur nous a fourni des
              donn&eacute;es personnelles, nous les supprimerons dans les plus
              brefs d&eacute;lais.
            </p>
          </section>

          {/* 12 */}
          <section>
            <h2 className="text-lg font-semibold text-white font-heading mb-3">
              12. Modifications de la politique
            </h2>
            <p>
              Nous pouvons mettre &agrave; jour la pr&eacute;sente politique de
              temps &agrave; autre. Les modifications substantielles seront
              notifi&eacute;es via la plateforme. Nous vous invitons &agrave;
              consulter r&eacute;guli&egrave;rement cette page.
            </p>
          </section>

          {/* 13 */}
          <section>
            <h2 className="text-lg font-semibold text-white font-heading mb-3">
              13. Contact
            </h2>
            <p>
              Pour toute question relative &agrave; la protection de vos
              donn&eacute;es, contactez-nous :{" "}
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
