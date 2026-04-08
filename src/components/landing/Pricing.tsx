"use client";

import { motion } from "framer-motion";
import {
  Check, X, Sparkles, Rocket,
  FileText, Camera, Search, Zap, ArrowUp, Clock,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

type Feature = {
  icon: React.ElementType;
  label: string;
  included: boolean;
};

type Plan = {
  name: string;
  price: string;
  description: string;
  features: Feature[];
  cta: string;
  ctaVariant: "outline" | "primary" | "accent";
  badge: { label: string; variant: "primary" | "accent" } | null;
  cardClass: string;
};

const plans: Plan[] = [
  {
    name: "Gratuit",
    price: "0",
    description: "Pour commencer à publier vos annonces gratuitement",
    badge: null,
    cardClass: "border-border bg-card hover:border-primary/30",
    features: [
      { icon: FileText, label: "3 annonces par mois",                    included: true  },
      { icon: Camera,   label: "3 photos par annonce",                   included: true  },
      { icon: Search,   label: "Affichage standard",                     included: true  },
      { icon: Check,    label: "Annonce visible dans les recherches",     included: true  },
      { icon: Zap,      label: "0 crédit boost inclus",                  included: false },
      { icon: ArrowUp,  label: "Remontée en tête de liste",              included: false },
      { icon: Sparkles, label: "Mise en avant dans \"Annonces récentes\"",included: false },
      { icon: Clock,    label: "Durée boost : 0H",                       included: false },
    ],
    cta: "Essayer",
    ctaVariant: "outline",
  },
  {
    name: "Pro",
    price: "4 900",
    description: "Pour les propriétaires qui veulent plus de visibilité",
    badge: null,
    cardClass: "border-primary bg-card-elevated shadow-xl shadow-primary/10 scale-[1.02] lg:scale-105",
    features: [
      { icon: FileText, label: "8 annonces par mois",                          included: true },
      { icon: Camera,   label: "8 photos par annonce",                         included: true },
      { icon: Search,   label: "Affichage prioritaire dans les recherches",    included: true },
      { icon: Check,    label: "Annonce visible dans les recherches",          included: true },
      { icon: Zap,      label: "3 crédits boost / mois",                       included: true },
      { icon: ArrowUp,  label: "Remontée en tête de liste",                    included: true },
      { icon: Sparkles, label: "Mise en avant dans \"Annonces récentes\"",     included: true },
      { icon: Clock,    label: "Durée boost : 24H",                            included: true },
    ],
    cta: "Choisir Pro",
    ctaVariant: "primary",
  },
  {
    name: "Premium",
    price: "9 900",
    description: "Visibilité maximale pour louer rapidement",
    badge: null,
    cardClass: "border-accent/60 bg-card hover:border-accent/80",
    features: [
      { icon: FileText, label: "12 annonces par mois",                         included: true },
      { icon: Camera,   label: "12 photos par annonce",                        included: true },
      { icon: Search,   label: "Affichage en tête des recherches",             included: true },
      { icon: Check,    label: "Annonce visible dans les recherches",          included: true },
      { icon: Zap,      label: "10 crédits boost / mois",                      included: true },
      { icon: ArrowUp,  label: "Remontée automatique en tête de liste",        included: true },
      { icon: Sparkles, label: "Affichage en haut de \"Annonces récentes\"",   included: true },
      { icon: Clock,    label: "Durée boost : 72H",                            included: true },
    ],
    cta: "Choisir Premium",
    ctaVariant: "accent",
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <Badge variant="primary" className="mb-4">
            Tarifs
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading mb-4">
            Des offres adaptées à{" "}
            <span className="gradient-text">vos besoins</span>
          </h2>
          <p className="text-lg text-muted max-w-2xl mx-auto">
            Commencez gratuitement, puis évoluez selon vos besoins.
            Tous les prix sont en FCFA.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`relative rounded-2xl border p-6 lg:p-8 transition-all duration-300 ${plan.cardClass}`}
            >
              {plan.badge && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                  <Badge variant={plan.badge.variant} className="gap-1">
                    <Sparkles className="w-3.5 h-3.5" />
                    {plan.badge.label}
                  </Badge>
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-xl font-bold text-white font-heading">{plan.name}</h3>
                <p className="text-sm text-muted mt-1">{plan.description}</p>
              </div>

              <div className="mb-6">
                <span className="text-4xl font-bold text-white font-heading">{plan.price}</span>
                <span className="text-lg text-muted"> FCFA / mois</span>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <li
                    key={feature.label}
                    className={`flex items-start gap-3 ${!feature.included ? "opacity-40" : ""}`}
                  >
                    {/* Feature icon */}
                    <feature.icon className={`w-4 h-4 flex-shrink-0 mt-0.5 ${feature.included ? "text-primary" : "text-muted"}`} />
                    <span className="text-sm text-muted flex-1">{feature.label}</span>
                    {/* Check / X marker */}
                    <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${
                      feature.included ? "bg-primary/10" : "bg-border"
                    }`}>
                      {feature.included
                        ? <Check className="w-3 h-3 text-primary" />
                        : <X className="w-3 h-3 text-muted" />
                      }
                    </div>
                  </li>
                ))}
              </ul>

              <a
                href="https://immoapp.net/pricing"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant={plan.ctaVariant}
                  size="lg"
                  className="w-full gap-2"
                  disabled={plan.ctaVariant === "outline"}
                >
                  {plan.ctaVariant !== "outline" && <Rocket className="w-4 h-4" />}
                  {plan.cta}
                </Button>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
