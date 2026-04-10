"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  Download, Zap, Bell, Smartphone, Layers,
  Building2, Heart, Search, User, MapPin, Star, BadgeCheck,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const pwaFeatures = [
  {
    icon: Download,
    title: "Installation instantanée",
    description: "Ajoutez ImmoApp à votre écran d'accueil en un seul clic, sans passer par un store.",
  },
  {
    icon: Bell,
    title: "Notifications en temps réel",
    description: "Soyez alerté dès qu'une nouvelle annonce correspond à vos critères.",
  },
  {
    icon: Zap,
    title: "Ultra rapide",
    description: "Interface optimisée qui se charge instantanément, même en connexion lente.",
  },
  {
    icon: Layers,
    title: "Interface intuitive",
    description: "Un design clair et ergonomique pensé pour le marché béninois.",
  },
];

function PhoneMockup() {
  return (
    <div className="relative">
      {/* Glow */}
      <div className="absolute -inset-6 bg-primary/15 rounded-[3.5rem] blur-3xl animate-pulse-glow" />
      {/* Phone */}
      <div className="relative w-[280px] h-[560px] rounded-[2.5rem] border-[3px] border-slate-600 bg-[#0f1729] overflow-hidden shadow-2xl">
        {/* Notch */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-7 bg-[#0f1729] rounded-b-2xl z-20">
          <div className="w-16 h-4 bg-slate-800 rounded-full mx-auto mt-1" />
        </div>
        {/* Safe-area spacer — same color as the app header, sits behind the notch */}
        <div style={{ height: 28, background: "#0f1729", flexShrink: 0 }} />
        {/* Screenshot starts just below the notch */}
        {/* width/height = 3× the CSS frame (280px) for crisp HiDPI rendering */}
        <Image
          src="/app-screenshot.jpg"
          alt="ImmoApp — Annonces en vedette"
          width={840}
          height={1680}
          quality={90}
          sizes="280px"
          loading="lazy"
          style={{ display: "block", width: "100%", height: "calc(100% - 28px)", objectFit: "cover", objectPosition: "top" }}
        />
      </div>
    </div>
  );
}

export default function PwaPromote() {
  return (
    <section className="py-20 lg:py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Phone mockup */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex-shrink-0"
          >
            <PhoneMockup />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex-1 w-full min-w-0"
          >
            <Badge variant="primary" className="mb-4">
              Application mobile
            </Badge>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading mb-4">
              ImmoApp dans{" "}
              <span className="gradient-text">votre poche</span>
            </h2>
            <p className="text-lg text-muted mb-8 max-w-lg">
              Pas besoin de télécharger depuis un store. ImmoApp s&apos;installe directement
              sur votre téléphone comme une application native.
            </p>

            <div className="space-y-5 mb-8">
              {pwaFeatures.map((feature, i) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="flex items-start gap-4 group"
                >
                  <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                    <feature.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white font-heading">{feature.title}</h3>
                    <p className="text-sm text-muted mt-0.5">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <a href="https://immoapp.net" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="gap-2">
                <Download className="w-5 h-5" />
                Installer l&apos;application
              </Button>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
