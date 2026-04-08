import { Building2, MapPin, Phone, Mail } from "lucide-react";

const navLinks = [
  { label: "Accueil", href: "https://immoapp.net" },
  { label: "Rechercher", href: "https://immoapp.net" },
  { label: "Publier une annonce", href: "https://immoapp.net/publish" },
  { label: "Tarifs", href: "https://immoapp.net/pricing" },
  { label: "Conditions d'utilisation", href: "https://immoapp.net/terms" },
  { label: "Politique de confidentialité", href: "https://immoapp.net/privacy" },
];

const cities = [
  "Cotonou",
  "Abomey-Calavi",
  "Porto-Novo",
  "Parakou",
  "Ouidah",
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-surface/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <a href="#" className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 rounded-xl bg-primary flex items-center justify-center">
                <Building2 className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-white font-heading">
                Immo<span className="text-primary">App</span>
              </span>
            </a>
            <p className="text-sm text-muted leading-relaxed">
              La plateforme immobilière de référence au Bénin.
              Trouvez, louez ou publiez votre bien en toute confiance.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4 font-heading">
              Navigation
            </h4>
            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-muted hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Cities */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4 font-heading">
              Villes couvertes
            </h4>
            <ul className="space-y-2.5">
              {cities.map((city) => (
                <li key={city}>
                  <a
                    href="https://immoapp.net"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-muted hover:text-primary transition-colors"
                  >
                    <MapPin className="w-3.5 h-3.5 flex-shrink-0" />
                    {city}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4 font-heading">
              Contact
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="tel:+22901978215 32"
                  className="flex items-center gap-2 text-sm text-muted hover:text-primary transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 flex-shrink-0" />
                  +229 01 97 82 15 32
                </a>
              </li>
              <li>
                <a
                  href="mailto:contact@immoapp.net"
                  className="flex items-center gap-2 text-sm text-muted hover:text-primary transition-colors"
                >
                  <Mail className="w-3.5 h-3.5 flex-shrink-0" />
                  contact@immoapp.net
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Separator + Copyright */}
        <div className="mt-12 pt-8 border-t border-border">
          <p className="text-center text-sm text-muted-foreground">
            &copy; {currentYear} ImmoApp. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
}
