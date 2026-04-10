"use client";

import { motion } from "framer-motion";
import {
  Camera, Shield, SlidersHorizontal, Wifi, BadgeCheck, MapPin,
  LayoutDashboard, Eye, MessageCircle, Zap, BarChart3, UserCheck,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardTitle, CardDescription } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

const locataireFeatures = [
  {
    icon: Camera,
    title: "Photos haute qualité",
    description: "Visualisez chaque bien avec des photos détaillées avant de vous déplacer.",
  },
  {
    icon: Shield,
    title: "Caution transparente",
    description: "Montant de la caution clairement indiqué sur chaque annonce. Pas de surprise.",
  },
  {
    icon: SlidersHorizontal,
    title: "Filtres avancés",
    description: "Filtrez par ville, quartier, prix, nombre de pièces et commodités.",
  },
  {
    icon: Wifi,
    title: "Commodités détaillées",
    description: "WiFi, climatisation, parking, eau courante — tout est indiqué.",
  },
  {
    icon: BadgeCheck,
    title: "Annonces vérifiées",
    description: "Chaque annonce est contrôlée pour garantir la fiabilité des informations.",
  },
  {
    icon: MapPin,
    title: "Proximité & transport",
    description: "Visualisez les biens sur la carte et trouvez ceux proches de vous.",
  },
];

const proprietaireFeatures = [
  {
    icon: LayoutDashboard,
    title: "Tableau de bord simplifié",
    description: "Gérez toutes vos annonces, statistiques et contacts depuis un seul espace.",
  },
  {
    icon: Eye,
    title: "Visibilité maximale",
    description: "Boostez vos annonces pour apparaître en tête des résultats de recherche.",
  },
  {
    icon: MessageCircle,
    title: "Contact direct",
    description: "Recevez les demandes par WhatsApp, email ou téléphone directement.",
  },
  {
    icon: Zap,
    title: "Publication rapide",
    description: "Publiez une annonce complète en moins de 5 minutes, photos incluses.",
  },
  {
    icon: BarChart3,
    title: "Statistiques de vues",
    description: "Suivez le nombre de vues, clics WhatsApp et demandes de contact.",
  },
  {
    icon: UserCheck,
    title: "Locataires qualifiés",
    description: "Tous les utilisateurs sont vérifiés par OTP — uniquement des profils réels.",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

function FeatureGrid({ features }: { features: typeof locataireFeatures }) {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
    >
      {features.map((feature) => (
        <motion.div key={feature.title} variants={itemVariants}>
          <Card className="h-full group">
            <div className="flex items-start gap-4">
              <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                <feature.icon className="w-5 h-5 text-primary" />
              </div>
              <div>
                <CardTitle className="text-base mb-1">{feature.title}</CardTitle>
                <CardDescription>{feature.description}</CardDescription>
              </div>
            </div>
          </Card>
        </motion.div>
      ))}
    </motion.div>
  );
}

export default function DualPath() {
  return (
    <section id="features" className="py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <Badge variant="primary" className="mb-4">
            Fonctionnalités
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading mb-4">
            Tout ce dont vous avez{" "}
            <span className="gradient-text">besoin</span>
          </h2>
          <p className="text-lg text-muted max-w-2xl mx-auto">
            Que vous cherchiez un logement ou que vous souhaitiez en proposer un,
            ImmoApp a été conçu pour vous.
          </p>
        </motion.div>

        <Tabs defaultValue="locataire" className="flex flex-col items-center w-full">
          <TabsList className="mb-0">
            <TabsTrigger value="locataire">🏠 Je suis locataire</TabsTrigger>
            <TabsTrigger value="proprietaire">🔑 Je suis propriétaire</TabsTrigger>
          </TabsList>

          <TabsContent value="locataire">
            <FeatureGrid features={locataireFeatures} />
          </TabsContent>

          <TabsContent value="proprietaire">
            <FeatureGrid features={proprietaireFeatures} />
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
