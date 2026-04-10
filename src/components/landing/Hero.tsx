"use client";

import { motion } from "framer-motion";
import { Search, MapPin, ChevronDown, Building2, Home, Hotel, Castle, LandPlot, Store, TrendingUp, Users, Map } from "lucide-react";
import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const cities = [
  "Cotonou", "Abomey-Calavi", "Porto-Novo", "Parakou",
  "Bohicon", "Ouidah", "Natitingou", "Lokossa", "Abomey", "Djougou",
];

const propertyTypes = [
  { label: "Appartement", icon: Building2 },
  { label: "Maison", icon: Home },
  { label: "Studio", icon: Hotel },
  { label: "Villa", icon: Castle },
  { label: "Terrain", icon: LandPlot },
  { label: "Bureau", icon: Store },
];

const stats = [
  { value: "500+", label: "Annonces", icon: TrendingUp },
  { value: "10+", label: "Villes", icon: Map },
  { value: "1000+", label: "Utilisateurs", icon: Users },
];

export default function Hero() {
  const [showFilters, setShowFilters] = useState(false);
  const [selectedCity, setSelectedCity] = useState("");
  const [cityDropdownOpen, setCityDropdownOpen] = useState(false);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden hero-gradient">
      {/* Decorative orbs */}
      <div className="absolute top-20 left-10 w-48 h-48 bg-blue-400/15 rounded-full blur-[60px] animate-float" />
      <div className="absolute bottom-20 right-10 w-64 h-64 bg-primary/10 rounded-full blur-[70px] animate-float-delayed" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[80px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 w-full">
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Badge variant="primary" className="mb-6 text-xs sm:text-sm">
              🇧🇯{" "}
              <span className="hidden sm:inline">La plateforme immobilière de référence au Bénin</span>
              <span className="sm:hidden">Plateforme immobilière au Bénin</span>
            </Badge>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight mb-6 font-heading"
          >
            Trouvez, louez ou publiez{" "}
            <span className="gradient-text-blue">
              votre bien immobilier
            </span>{" "}
            au Bénin
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-lg sm:text-xl text-blue-100/80 max-w-2xl mx-auto mb-10"
          >
            Appartements, maisons, villas, studios — explorez des centaines
            d&apos;annonces vérifiées dans plus de 10 villes du Bénin.
          </motion.p>

          {/* Search Bar */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="max-w-2xl mx-auto"
          >
            <div className="glass rounded-2xl p-2 sm:p-3">
              <div className="flex flex-col sm:flex-row gap-2">
                {/* City Selector */}
                <div className="relative flex-1">
                  <button
                    onClick={() => setCityDropdownOpen(!cityDropdownOpen)}
                    className="w-full flex items-center gap-3 px-4 py-3 bg-surface rounded-xl text-left transition-colors hover:bg-card cursor-pointer"
                  >
                    <MapPin className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className={selectedCity ? "text-white" : "text-muted"}>
                      {selectedCity || "Choisir une ville"}
                    </span>
                    <ChevronDown className={`w-4 h-4 text-muted ml-auto transition-transform ${cityDropdownOpen ? "rotate-180" : ""}`} />
                  </button>

                  {cityDropdownOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -8 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="absolute top-full left-0 right-0 mt-2 bg-card border border-border rounded-xl shadow-2xl overflow-hidden z-20 max-h-60 overflow-y-auto"
                    >
                      {cities.map((city) => (
                        <button
                          key={city}
                          onClick={() => {
                            setSelectedCity(city);
                            setCityDropdownOpen(false);
                          }}
                          className={`w-full text-left px-4 py-2.5 text-sm transition-colors hover:bg-primary/10 cursor-pointer ${
                            selectedCity === city ? "text-primary bg-primary/5" : "text-muted hover:text-white"
                          }`}
                        >
                          {city}
                        </button>
                      ))}
                    </motion.div>
                  )}
                </div>

                {/* Search Button */}
                <a
                  href="https://immoapp.net"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button size="lg" className="w-full sm:w-auto rounded-xl">
                    <Search className="w-5 h-5" />
                    <span className="sm:inline">Rechercher</span>
                  </Button>
                </a>
              </div>

              {/* Filters Toggle */}
              <div className="mt-3">
                <button
                  onClick={() => setShowFilters(!showFilters)}
                  className="text-sm text-blue-200/60 hover:text-blue-200 transition-colors cursor-pointer"
                >
                  {showFilters ? "Masquer les filtres" : "Afficher les types de biens"}
                </button>

                {showFilters && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    className="mt-3 flex flex-wrap gap-2 justify-center"
                  >
                    {propertyTypes.map((type) => (
                      <a
                        key={type.label}
                        href="https://immoapp.net"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/5 border border-white/10 text-sm text-blue-100/70 hover:bg-white/10 hover:text-white transition-all"
                      >
                        <type.icon className="w-4 h-4" />
                        {type.label}
                      </a>
                    ))}
                  </motion.div>
                )}
              </div>
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="mt-12 flex items-center justify-center gap-8 sm:gap-16"
          >
            {stats.map((stat) => (
              <div key={stat.label} className="flex flex-col items-center gap-1">
                <div className="flex items-center gap-2">
                  <stat.icon className="w-5 h-5 text-accent" />
                  <span className="text-2xl sm:text-3xl font-bold text-white font-heading">
                    {stat.value}
                  </span>
                </div>
                <span className="text-sm text-blue-200/60">{stat.label}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}
