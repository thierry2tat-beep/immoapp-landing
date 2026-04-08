"use client";

import { motion } from "framer-motion";
import { MapPin, ChevronRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const cities = [
  { name: "Cotonou", listings: "200+", neighborhoods: ["Fidjrossè", "Akpakpa", "Haie-Vive", "Cadjèhoun", "Gbégamey", "Mènontin"], highlight: true },
  { name: "Abomey-Calavi", listings: "120+", neighborhoods: ["Calavi Centre", "Togbin", "Akassato"], highlight: true },
  { name: "Porto-Novo", listings: "60+", neighborhoods: ["Ouando", "Djassin", "Akonaboè"], highlight: false },
  { name: "Parakou", listings: "40+", neighborhoods: ["Banikanni", "Titirou", "Guéma"], highlight: false },
  { name: "Ouidah", listings: "25+", neighborhoods: ["Centre", "Pahou", "Avlékété"], highlight: false },
  { name: "Bohicon", listings: "20+", neighborhoods: ["Saclo", "Lissèzoun"], highlight: false },
  { name: "Natitingou", listings: "15+", neighborhoods: ["Centre", "Kouaba"], highlight: false },
  { name: "Lokossa", listings: "10+", neighborhoods: ["Centre", "Houin"], highlight: false },
  { name: "Abomey", listings: "10+", neighborhoods: ["Djègbé", "Hounli"], highlight: false },
  { name: "Djougou", listings: "10+", neighborhoods: ["Centre", "Kolokondé"], highlight: false },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06 } },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.4 } },
};

export default function CityMap() {
  return (
    <section className="py-20 lg:py-28 bg-surface/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <Badge variant="primary" className="mb-4">
            Couverture
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading mb-4">
            Présent dans{" "}
            <span className="gradient-text">10+ villes</span>{" "}
            du Bénin
          </h2>
          <p className="text-lg text-muted max-w-2xl mx-auto">
            De Cotonou à Djougou, ImmoApp couvre les principales villes du pays
            avec des annonces vérifiées et des quartiers populaires.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4"
        >
          {cities.map((city) => (
            <motion.a
              key={city.name}
              variants={itemVariants}
              href="https://immoapp.net"
              target="_blank"
              rel="noopener noreferrer"
              className={`group relative rounded-2xl border p-5 transition-all duration-300 hover:shadow-lg cursor-pointer ${
                city.highlight
                  ? "border-primary/30 bg-card-elevated hover:border-primary/50 hover:shadow-primary/10 sm:col-span-2 lg:col-span-1 xl:col-span-2"
                  : "border-border bg-card hover:border-primary/30 hover:bg-card-elevated"
              }`}
            >
              <div className="flex items-start gap-3">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 ${
                  city.highlight ? "bg-primary/20" : "bg-primary/10"
                } group-hover:scale-110 transition-transform`}>
                  <MapPin className={`w-5 h-5 ${city.highlight ? "text-primary" : "text-primary/70"}`} />
                </div>
                <div className="min-w-0">
                  <div className="flex items-center gap-2">
                    <h3 className="font-semibold text-white font-heading group-hover:text-primary transition-colors">
                      {city.name}
                    </h3>
                    <span className="text-xs text-accent font-medium">{city.listings}</span>
                  </div>
                  <div className="flex flex-wrap gap-1 mt-2">
                    {city.neighborhoods.map((n) => (
                      <span
                        key={n}
                        className="text-[10px] text-muted bg-surface rounded-md px-2 py-0.5 border border-border"
                      >
                        {n}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.a>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-10"
        >
          <a href="https://immoapp.net" target="_blank" rel="noopener noreferrer">
            <Button variant="outline" size="lg" className="gap-2">
              Chercher dans ma ville
              <ChevronRight className="w-5 h-5" />
            </Button>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
