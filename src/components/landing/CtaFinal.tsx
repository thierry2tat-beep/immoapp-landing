"use client";

import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function CtaFinal() {
  return (
    <section id="cta" className="py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary-dark via-primary to-primary-light p-10 sm:p-16 text-center"
        >
          {/* Decorative circles */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/3" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/3" />

          <div className="relative z-10">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white font-heading mb-4">
              Prêt à trouver votre{" "}
              <span className="text-blue-200">prochain logement ?</span>
            </h2>
            <p className="text-lg text-blue-100/80 max-w-2xl mx-auto mb-8">
              Rejoignez des milliers d&apos;utilisateurs qui font confiance à ImmoApp
              pour trouver ou proposer des biens immobiliers au Bénin.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="https://immoapp.net" target="_blank" rel="noopener noreferrer">
                <Button variant="secondary" size="lg" className="gap-2 text-base">
                  Accéder à ImmoApp
                  <ChevronRight className="w-5 h-5" />
                </Button>
              </a>
              <a href="https://immoapp.net/publish" target="_blank" rel="noopener noreferrer">
                <Button
                  variant="outline"
                  size="lg"
                  className="gap-2 text-base border-white/20 text-white hover:bg-white/10 hover:border-white/40"
                >
                  Publier une annonce
                </Button>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
