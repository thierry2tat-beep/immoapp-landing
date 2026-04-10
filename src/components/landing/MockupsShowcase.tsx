"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

/* ─── Reusable phone frame ─── */
function ScreenshotPhone({
  src,
  alt,
  label,
  subtitle,
  delay = 0,
}: {
  src: string;
  alt: string;
  label: string;
  subtitle: string;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.65, delay }}
      className="flex flex-col items-center"
    >
      {/* Caption */}
      <div className="text-center mb-4 lg:mb-6">
        <h3 className="text-lg font-semibold text-white font-heading">{label}</h3>
        <p className="text-sm text-muted">{subtitle}</p>
      </div>

      {/* Phone body */}
      <div className="relative">
        {/* Glow */}
        <div className="absolute -inset-4 bg-primary/10 rounded-[3rem] blur-2xl pointer-events-none" />

        <div className="relative w-[260px] sm:w-[280px] rounded-[2.5rem] border-[3px] border-slate-600 bg-[#0f1729] overflow-hidden shadow-2xl"
             style={{ aspectRatio: "9/19.5" }}>
          {/* Notch */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-7 bg-[#0f1729] rounded-b-2xl z-20 flex items-center justify-center">
            <div className="w-16 h-4 bg-slate-800 rounded-full" />
          </div>
          {/* Safe-area spacer */}
          <div style={{ height: 28, background: "#0f1729", flexShrink: 0 }} />
          {/* Screenshot — 1080px source, sizes="280px" for correct HiDPI srcSet */}
          <Image
            src={src}
            alt={alt}
            width={1080}
            height={2316}
            quality={88}
            sizes="(max-width: 640px) 260px, 280px"
            loading="lazy"
            style={{
              display: "block",
              width: "100%",
              height: "calc(100% - 28px)",
              objectFit: "cover",
              objectPosition: "top",
            }}
          />
        </div>
      </div>
    </motion.div>
  );
}

export default function MockupsShowcase() {
  return (
    <section className="py-20 lg:py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <Badge variant="primary" className="mb-4">Aperçu</Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading mb-4">
            Découvrez ImmoApp{" "}
            <span className="gradient-text">en action</span>
          </h2>
          <p className="text-lg text-muted max-w-2xl mx-auto">
            Une interface intuitive, pensée pour le marché béninois. Parcourez les annonces,
            consultez les détails et contactez les propriétaires en quelques clics.
          </p>
        </motion.div>

        {/* Three phone mockups */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-8 xl:gap-12 mb-12">
          <ScreenshotPhone
            src="/screen-home.jpg"
            alt="ImmoApp — Page d'accueil"
            label="Page d'accueil"
            subtitle="Parcourez les annonces vérifiées"
            delay={0}
          />
          <ScreenshotPhone
            src="/screen-detail.jpg"
            alt="ImmoApp — Détail d'une annonce"
            label="Détail d'une annonce"
            subtitle="Toutes les infos en un coup d'œil"
            delay={0.12}
          />
          <ScreenshotPhone
            src="/screen-map.jpg"
            alt="ImmoApp — Vue carte interactive"
            label="Vue carte interactive"
            subtitle="Explorez les biens par localisation"
            delay={0.24}
          />
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center"
        >
          <a href="https://immoapp.net" target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="gap-2">
              Voir en action
              <ChevronRight className="w-5 h-5" />
            </Button>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
