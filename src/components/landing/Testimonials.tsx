"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const testimonials = [
  {
    name: "Carine Ahounou",
    role: "Locataire",
    city: "Cotonou",
    rating: 5,
    text: "J'ai trouvé mon appartement à Fidjrossè en moins d'une semaine grâce à ImmoApp. Les filtres sont vraiment pratiques et les annonces sont fiables.",
    initials: "CA",
    color: "from-blue-500 to-blue-600",
  },
  {
    name: "Roméo Dossou",
    role: "Propriétaire",
    city: "Abomey-Calavi",
    rating: 5,
    text: "En tant que propriétaire, je reçois des demandes qualifiées directement sur WhatsApp. La publication est rapide et le boost fonctionne vraiment.",
    initials: "RD",
    color: "from-emerald-500 to-emerald-600",
  },
  {
    name: "Faridath Bello",
    role: "Locataire",
    city: "Porto-Novo",
    rating: 4,
    text: "L'application est très intuitive, même pour quelqu'un qui n'est pas très à l'aise avec la technologie. J'ai pu comparer plusieurs studios facilement.",
    initials: "FB",
    color: "from-violet-500 to-violet-600",
  },
  {
    name: "Gérard Hounkanrin",
    role: "Propriétaire",
    city: "Cotonou",
    rating: 5,
    text: "Le tableau de bord me permet de suivre les vues et les contacts sur mes annonces. Le plan Pro vaut vraiment son prix pour la visibilité qu'il apporte.",
    initials: "GH",
    color: "from-amber-500 to-amber-600",
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <Badge variant="primary" className="mb-4">
            Témoignages
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading mb-4">
            Ils nous font{" "}
            <span className="gradient-text">confiance</span>
          </h2>
          <p className="text-lg text-muted max-w-2xl mx-auto">
            Découvrez ce que nos utilisateurs disent de leur expérience sur ImmoApp.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative rounded-2xl border border-border bg-card p-6 hover:border-primary/30 hover:bg-card-elevated transition-all duration-300"
            >
              {/* Quote icon */}
              <Quote className="absolute top-4 right-4 w-8 h-8 text-primary/10" />

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: 5 }).map((_, si) => (
                  <Star
                    key={si}
                    className={`w-4 h-4 ${
                      si < t.rating ? "text-accent fill-accent" : "text-border"
                    }`}
                  />
                ))}
              </div>

              {/* Quote text */}
              <p className="text-muted leading-relaxed mb-5">&ldquo;{t.text}&rdquo;</p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${t.color} flex items-center justify-center flex-shrink-0`}>
                  <span className="text-xs font-bold text-white">{t.initials}</span>
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">{t.name}</p>
                  <p className="text-xs text-muted">
                    {t.role} · {t.city}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
