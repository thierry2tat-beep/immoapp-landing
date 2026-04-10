"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Building2, Heart, Star, MapPin, Wifi, Car, Shield, Zap,
  ChevronRight, Home, Search, User, Bell, BadgeCheck,
  Droplets, Wind, Phone, Mail,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const CotonnouMap = dynamic(() => import("./CotonnouMap"), {
  ssr: false,
  loading: () => <div style={{ width: "100%", height: "100%", background: "#e8f0e8" }} />,
});

/* ─── Phone frame with real screenshot ─── */
function ScreenshotPhone({
  src,
  alt,
  className = "",
}: {
  src: string;
  alt: string;
  className?: string;
}) {
  return (
    <div className={`relative ${className}`}>
      {/* Glow */}
      <div className="absolute -inset-4 bg-primary/10 rounded-[3rem] blur-2xl" />
      {/* Phone body */}
      <div className="relative w-[280px] h-[580px] rounded-[2.5rem] border-[3px] border-slate-600 bg-[#0f1729] overflow-hidden shadow-2xl">
        {/* Notch */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-7 bg-[#0f1729] rounded-b-2xl z-20 flex items-center justify-center">
          <div className="w-16 h-4 bg-slate-800 rounded-full" />
        </div>
        {/* Safe-area spacer — clears the notch, hides any system status bar */}
        <div style={{ height: 28, background: "#0f1729", flexShrink: 0 }} />
        {/* Screenshot */}
        <Image
          src={src}
          alt={alt}
          width={280}
          height={552}
          loading="lazy"
          style={{ display: "block", width: "100%", height: "calc(100% - 28px)", objectFit: "cover", objectPosition: "top" }}
        />
      </div>
    </div>
  );
}

/* ─── Laptop frame ─── */
function LaptopFrame({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative w-full overflow-hidden" style={{ maxWidth: 860 }}>
      {/* Soft glow behind the whole laptop */}
      <div className="absolute inset-0 rounded-full blur-3xl opacity-40"
           style={{ background: "radial-gradient(ellipse, #3b82f620 0%, transparent 70%)" }} />

      <div className="relative">
        {/* ── SCREEN ── */}
        <div className="relative mx-auto" style={{
          background: "linear-gradient(160deg, #2c2c2e 0%, #1c1c1e 60%, #111113 100%)",
          borderRadius: "16px 16px 0 0",
          padding: "12px 12px 0 12px",
          boxShadow: "0 -2px 0 rgba(255,255,255,0.08) inset, 0 40px 100px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.06)",
        }}>
          {/* Camera */}
          <div className="absolute top-3.5 left-1/2 -translate-x-1/2 flex items-center gap-1">
            <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#2a2a2c", border: "1px solid #3a3a3c" }} />
          </div>

          {/* Screen glass */}
          <div style={{
            borderRadius: "8px 8px 0 0",
            overflow: "hidden",
            aspectRatio: "16/10",
            boxShadow: "0 0 0 1px rgba(255,255,255,0.05) inset",
            position: "relative",
          }}>
            {/* Browser chrome */}
            <div style={{
              height: 36,
              background: "#1e1e20",
              borderBottom: "1px solid #2a2a2c",
              display: "flex",
              alignItems: "center",
              gap: 8,
              padding: "0 12px",
              flexShrink: 0,
            }}>
              {/* Traffic lights */}
              <div style={{ display: "flex", gap: 6 }}>
                <div style={{ width: 12, height: 12, borderRadius: "50%", background: "#ff5f57" }} />
                <div style={{ width: 12, height: 12, borderRadius: "50%", background: "#febc2e" }} />
                <div style={{ width: 12, height: 12, borderRadius: "50%", background: "#28c840" }} />
              </div>
              {/* Tab */}
              <div style={{
                display: "flex", alignItems: "center", gap: 6,
                background: "#2a2a2c", borderRadius: "6px 6px 0 0",
                padding: "4px 12px", marginBottom: -1,
                border: "1px solid #3a3a3c", borderBottom: "1px solid #2a2a2c",
              }}>
                <div style={{ width: 10, height: 10, borderRadius: 3, background: "#3b82f6", display:"flex", alignItems:"center", justifyContent:"center" }}>
                  <span style={{ fontSize: 5, color: "#fff", fontWeight: 800 }}>I</span>
                </div>
                <span style={{ fontSize: 10, color: "#ccc", whiteSpace: "nowrap" }}>ImmoApp — Carte</span>
                <span style={{ fontSize: 10, color: "#555", marginLeft: 4 }}>×</span>
              </div>
              {/* Address bar */}
              <div style={{
                flex: 1, height: 22,
                background: "#2a2a2c",
                borderRadius: 6,
                display: "flex", alignItems: "center", gap: 6,
                padding: "0 10px",
                border: "1px solid #3a3a3c",
              }}>
                <div style={{ width: 7, height: 7, borderRadius: "50%", background: "#28c840" }} />
                <span style={{ fontSize: 10, color: "#888" }}>immoapp.net/carte</span>
              </div>
            </div>
            {/* Page content */}
            <div style={{ height: "calc(100% - 36px)", overflow: "hidden" }}>{children}</div>
          </div>
        </div>

        {/* ── HINGE ── */}
        <div style={{
          height: 6,
          background: "linear-gradient(180deg, #3a3a3c 0%, #2a2a2c 100%)",
          margin: "0 10px",
        }} />

        {/* ── BASE / PALMREST ── */}
        <div style={{
          height: 22,
          background: "linear-gradient(180deg, #c8c8ca 0%, #b0b0b2 40%, #a0a0a2 100%)",
          borderRadius: "0 0 6px 6px",
          margin: "0 -4px",
          boxShadow: "0 4px 0 #888, 0 8px 24px rgba(0,0,0,0.4)",
          position: "relative",
          overflow: "hidden",
        }}>
          {/* Trackpad hint */}
          <div style={{
            position: "absolute", bottom: 2, left: "50%", transform: "translateX(-50%)",
            width: 60, height: 8, borderRadius: 4,
            background: "rgba(0,0,0,0.08)", border: "1px solid rgba(0,0,0,0.06)",
          }} />
        </div>
        {/* Bottom lip */}
        <div style={{
          height: 8,
          background: "linear-gradient(180deg, #888 0%, #707072 100%)",
          borderRadius: "0 0 14px 14px",
          margin: "0 10px",
          boxShadow: "0 10px 40px rgba(0,0,0,0.5)",
        }} />
        {/* Ground shadow */}
        <div style={{
          height: 4,
          background: "radial-gradient(ellipse, rgba(0,0,0,0.3) 0%, transparent 80%)",
          margin: "2px 0 0",
          borderRadius: "50%",
        }} />
      </div>
    </div>
  );
}

/* ─── Phone Screen: Home / Listings ─── */
function HomeScreen() {
  return (
    <div className="bg-background text-foreground">
      {/* App header */}
      <div className="bg-primary px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Building2 className="w-4 h-4 text-white" />
          <span className="text-sm font-bold text-white">ImmoApp</span>
        </div>
        <div className="flex gap-2">
          <Bell className="w-4 h-4 text-white/70" />
          <User className="w-4 h-4 text-white/70" />
        </div>
      </div>
      {/* Search */}
      <div className="px-3 py-2">
        <div className="flex items-center gap-2 bg-surface rounded-lg px-3 py-2 border border-border">
          <Search className="w-3.5 h-3.5 text-muted" />
          <span className="text-[11px] text-muted">Rechercher à Cotonou...</span>
        </div>
      </div>
      {/* Listing cards */}
      {[
        { title: "Appartement 3 pièces", location: "Fidjrossè, Cotonou", price: "75 000", verified: true, img: "bg-gradient-to-br from-blue-400 to-blue-600" },
        { title: "Studio meublé", location: "Haie-Vive, Cotonou", price: "45 000", verified: true, img: "bg-gradient-to-br from-emerald-400 to-emerald-600" },
        { title: "Villa 4 chambres", location: "Calavi", price: "150 000", verified: false, img: "bg-gradient-to-br from-orange-400 to-orange-600" },
      ].map((listing, i) => (
        <div key={i} className="mx-3 mb-2.5 rounded-xl border border-border bg-card overflow-hidden">
          <div className={`h-24 ${listing.img} relative`}>
            <button className="absolute top-2 right-2 w-6 h-6 rounded-full bg-black/30 flex items-center justify-center">
              <Heart className="w-3 h-3 text-white" />
            </button>
            {listing.verified && (
              <div className="absolute top-2 left-2 flex items-center gap-1 bg-primary/90 rounded-full px-2 py-0.5">
                <BadgeCheck className="w-2.5 h-2.5 text-white" />
                <span className="text-[8px] text-white font-medium">Vérifié</span>
              </div>
            )}
          </div>
          <div className="p-2.5">
            <h4 className="text-[11px] font-semibold text-white">{listing.title}</h4>
            <div className="flex items-center gap-1 mt-0.5">
              <MapPin className="w-2.5 h-2.5 text-muted" />
              <span className="text-[9px] text-muted">{listing.location}</span>
            </div>
            <div className="flex items-center justify-between mt-1.5">
              <span className="text-[12px] font-bold text-primary">{listing.price} FCFA<span className="text-[8px] text-muted font-normal">/mois</span></span>
              <div className="flex items-center gap-0.5">
                <Star className="w-2.5 h-2.5 text-accent fill-accent" />
                <span className="text-[9px] text-muted">4.8</span>
              </div>
            </div>
          </div>
        </div>
      ))}
      {/* Bottom nav */}
      <div className="absolute bottom-0 left-0 right-0 h-14 bg-card border-t border-border flex items-center justify-around px-2">
        {[
          { icon: Home, label: "Accueil", active: true },
          { icon: Search, label: "Chercher", active: false },
          { icon: Heart, label: "Favoris", active: false },
          { icon: User, label: "Profil", active: false },
        ].map((tab) => (
          <div key={tab.label} className="flex flex-col items-center gap-0.5">
            <tab.icon className={`w-4 h-4 ${tab.active ? "text-primary" : "text-muted"}`} />
            <span className={`text-[8px] ${tab.active ? "text-primary font-medium" : "text-muted"}`}>{tab.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ─── Phone Screen: Listing Detail ─── */
function DetailScreen() {
  return (
    <div className="bg-background text-foreground">
      {/* Photo */}
      <div className="h-44 bg-gradient-to-br from-blue-500 to-indigo-600 relative">
        <div className="absolute bottom-2 right-2 bg-black/40 rounded-full px-2 py-0.5 text-[8px] text-white">1/6</div>
        <div className="absolute top-3 left-3 flex items-center gap-1 bg-primary/90 rounded-full px-2 py-0.5">
          <BadgeCheck className="w-2.5 h-2.5 text-white" />
          <span className="text-[8px] text-white font-medium">Vérifié</span>
        </div>
      </div>
      {/* Info */}
      <div className="px-3 py-3">
        <h3 className="text-sm font-bold text-white">Appartement 3 pièces</h3>
        <div className="flex items-center gap-1 mt-1">
          <MapPin className="w-3 h-3 text-muted" />
          <span className="text-[10px] text-muted">Fidjrossè, Cotonou</span>
        </div>
        <div className="mt-2">
          <span className="text-lg font-bold text-primary">75 000 FCFA</span>
          <span className="text-[10px] text-muted"> /mois</span>
        </div>
        {/* Amenities */}
        <div className="mt-3 grid grid-cols-2 gap-1.5">
          {[
            { icon: Wifi, label: "WiFi" },
            { icon: Car, label: "Parking" },
            { icon: Droplets, label: "Eau courante" },
            { icon: Wind, label: "Climatisation" },
            { icon: Zap, label: "Électricité" },
            { icon: Shield, label: "Sécurité" },
          ].map((a) => (
            <div key={a.label} className="flex items-center gap-1.5 bg-surface rounded-lg px-2 py-1.5 border border-border">
              <a.icon className="w-3 h-3 text-primary" />
              <span className="text-[9px] text-muted">{a.label}</span>
            </div>
          ))}
        </div>
        {/* Contact buttons */}
        <div className="mt-3 flex gap-2">
          <div className="flex-1 flex items-center justify-center gap-1.5 bg-green-600 rounded-lg py-2">
            <Phone className="w-3 h-3 text-white" />
            <span className="text-[10px] text-white font-medium">WhatsApp</span>
          </div>
          <div className="flex-1 flex items-center justify-center gap-1.5 bg-primary rounded-lg py-2">
            <Mail className="w-3 h-3 text-white" />
            <span className="text-[10px] text-white font-medium">Email</span>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─── Laptop Screen: Map View (Leaflet real OSM map) ─── */
function MapViewScreen() {
  return (
    <div style={{ height: "100%", position: "relative", overflow: "hidden", background: "#e8f0e8" }}>
      {/* Real Leaflet map fills the entire screen */}
      <div style={{ position: "absolute", inset: 0, zIndex: 0, overflow: "hidden" }}>
        <CotonnouMap />
      </div>

      {/* Google Maps-style search bar overlay */}
      <div style={{ position: "absolute", top: 8, left: 8, right: 44, zIndex: 10, display: "flex", alignItems: "center", gap: 8, background: "#fff", borderRadius: 10, padding: "6px 12px", boxShadow: "0 2px 12px rgba(0,0,0,0.18)", border: "1px solid #e0ddd8" }}>
        <Search style={{ width: 12, height: 12, color: "#4285f4", flexShrink: 0 }} />
        <span style={{ fontSize: 10, color: "#333", flex: 1 }}>Rechercher un quartier à Cotonou...</span>
        <div style={{ width: 1, height: 14, background: "#e0ddd8" }} />
        <MapPin style={{ width: 11, height: 11, color: "#ea4335" }} />
      </div>

      {/* Zoom controls */}
      <div style={{ position: "absolute", top: 44, right: 8, zIndex: 10, display: "flex", flexDirection: "column", boxShadow: "0 2px 8px rgba(0,0,0,0.2)", borderRadius: 6, overflow: "hidden" }}>
        <div style={{ width: 28, height: 28, background: "#fff", display: "flex", alignItems: "center", justifyContent: "center", borderBottom: "1px solid #e0ddd8", fontSize: 16, color: "#555", fontWeight: 300 }}>+</div>
        <div style={{ width: 28, height: 28, background: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 16, color: "#555", fontWeight: 300 }}>−</div>
      </div>

      {/* Fullscreen button */}
      <div style={{ position: "absolute", top: 108, right: 8, zIndex: 10, width: 28, height: 28, background: "#fff", borderRadius: 4, display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 2px 8px rgba(0,0,0,0.2)" }}>
        <div style={{ width: 10, height: 10, border: "1.5px solid #555", borderRadius: 1 }} />
      </div>
    </div>
  );
}

export default function MockupsShowcase() {
  return (
    <section className="py-20 lg:py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <Badge variant="primary" className="mb-4">
            Aperçu
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading mb-4">
            Découvrez ImmoApp{" "}
            <span className="gradient-text">en action</span>
          </h2>
          <p className="text-lg text-muted max-w-2xl mx-auto">
            Une interface intuitive, pensée pour le marché béninois. Parcourez les annonces,
            consultez les détails et contactez les propriétaires en quelques clics.
          </p>
        </motion.div>

        {/* Phone mockups row */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-12 mb-20">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="text-center mb-4 lg:mb-6">
              <h3 className="text-lg font-semibold text-white font-heading">Page d&apos;accueil</h3>
              <p className="text-sm text-muted">Parcourez les annonces vérifiées</p>
            </div>
            <ScreenshotPhone src="/app-listing-detail.jpg" alt="ImmoApp — Détail d'une annonce" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            <div className="text-center mb-4 lg:mb-6">
              <h3 className="text-lg font-semibold text-white font-heading">Détail d&apos;une annonce</h3>
              <p className="text-sm text-muted">Toutes les infos en un coup d&apos;œil</p>
            </div>
            <ScreenshotPhone src="/app-pricing-detail.jpg" alt="ImmoApp — Prix et description" />
          </motion.div>
        </div>

        {/* Laptop mockup */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="flex flex-col items-center"
        >
          <div className="text-center mb-6">
            <h3 className="text-lg font-semibold text-white font-heading">Vue carte interactive</h3>
            <p className="text-sm text-muted">Explorez les biens par localisation sur ordinateur</p>
          </div>
          <LaptopFrame>
            <MapViewScreen />
          </LaptopFrame>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center mt-12"
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
