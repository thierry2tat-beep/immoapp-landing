"use client";

import { motion } from "framer-motion";
import { ShieldCheck, UserCheck, Lock, FileCheck } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const trustFeatures = [
  {
    icon: ShieldCheck,
    title: "Validation OTP",
    description: "Chaque utilisateur est vérifié par un code unique envoyé par SMS ou via un lien de confirmation par email.",
  },
  {
    icon: UserCheck,
    title: "Utilisateurs réels",
    description: "Uniquement des profils vérifiés (par des codes de vérification OTP). Pas de faux comptes.",
  },
  {
    icon: Lock,
    title: "Données sécurisées",
    description: "Vos informations personnelles sont protégées par un chiffrement de bout en bout.",
  },
  {
    icon: FileCheck,
    title: "Annonces contrôlées",
    description: "Chaque annonce est modérée automatiquement avant publication.",
  },
];

function OtpAnimation() {
  const digits = ["4", "8", "2", "7", "1", "5"];
  return (
    <div className="flex items-center gap-2 justify-center">
      {digits.map((d, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 0.5, rotateY: 90 }}
          whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
          className="w-12 h-14 sm:w-14 sm:h-16 rounded-xl bg-card border-2 border-primary/30 flex items-center justify-center shadow-lg shadow-primary/10"
        >
          <span className="text-2xl sm:text-3xl font-bold text-primary font-heading">{d}</span>
        </motion.div>
      ))}
    </div>
  );
}

export default function TrustEngine() {
  return (
    <section id="trust" className="py-20 lg:py-28 bg-surface/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <Badge variant="primary" className="mb-4">
            🛡️ Sécurité & Confiance
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading mb-4">
            Votre sécurité,{" "}
            <span className="gradient-text">notre priorité</span>
          </h2>
          <p className="text-lg text-muted max-w-2xl mx-auto mb-10">
            ImmoApp met en place des mesures strictes pour garantir la fiabilité
            de chaque annonce et la sécurité de chaque utilisateur.
          </p>
        </motion.div>

        {/* OTP Animation */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-4"
        >
          <OtpAnimation />
          <p className="text-center text-sm text-muted mt-3">
            Code de vérification OTP
          </p>
        </motion.div>

        {/* Trust features */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-12">
          {trustFeatures.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="text-center p-6 rounded-2xl border border-border bg-card hover:border-primary/30 hover:bg-card-elevated transition-all duration-300 group"
            >
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 group-hover:scale-110 transition-all">
                <feature.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-white font-heading mb-2">{feature.title}</h3>
              <p className="text-sm text-muted">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
