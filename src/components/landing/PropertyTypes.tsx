"use client";

import { motion } from "framer-motion";
import { Building2, Home, Hotel, Castle, LandPlot, Store, ChevronRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const types = [
  {
    icon: Building2,
    name: "Appartement",
    description: "Studios et appartements multi-pièces en ville.",
    color: "from-blue-500/20 to-blue-600/5",
    iconColor: "text-blue-400",
  },
  {
    icon: Home,
    name: "Maison",
    description: "Maisons individuelles avec cour et dépendances.",
    color: "from-emerald-500/20 to-emerald-600/5",
    iconColor: "text-emerald-400",
  },
  {
    icon: Hotel,
    name: "Studio",
    description: "Espaces compacts et meublés, idéaux pour étudiants.",
    color: "from-violet-500/20 to-violet-600/5",
    iconColor: "text-violet-400",
  },
  {
    icon: Castle,
    name: "Villa",
    description: "Villas de standing avec piscine et jardin.",
    color: "from-amber-500/20 to-amber-600/5",
    iconColor: "text-amber-400",
  },
  {
    icon: LandPlot,
    name: "Terrain",
    description: "Parcelles viabilisées prêtes à construire.",
    color: "from-green-500/20 to-green-600/5",
    iconColor: "text-green-400",
  },
  {
    icon: Store,
    name: "Bureau / Commerce",
    description: "Locaux commerciaux et espaces de bureaux.",
    color: "from-rose-500/20 to-rose-600/5",
    iconColor: "text-rose-400",
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function PropertyTypes() {
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
            Catégories
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading mb-4">
            Tous les types de{" "}
            <span className="gradient-text">biens</span>
          </h2>
          <p className="text-lg text-muted max-w-2xl mx-auto">
            Du studio étudiant à la villa de standing, trouvez le bien qui correspond
            à vos besoins et votre budget.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {types.map((type) => (
            <motion.div key={type.name} variants={itemVariants}>
              <a
                href="https://immoapp.net"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Card className="h-full cursor-pointer group">
                  <div className="flex items-center gap-4">
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${type.color} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}>
                      <type.icon className={`w-7 h-7 ${type.iconColor}`} />
                    </div>
                    <div className="min-w-0">
                      <h3 className="text-base font-semibold text-white font-heading group-hover:text-primary transition-colors">
                        {type.name}
                      </h3>
                      <p className="text-sm text-muted mt-0.5">{type.description}</p>
                    </div>
                  </div>
                </Card>
              </a>
            </motion.div>
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
              Explorer les annonces
              <ChevronRight className="w-5 h-5" />
            </Button>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
