import dynamic from "next/dynamic";
import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import DualPath from "@/components/landing/DualPath";

const MockupsShowcase = dynamic(() => import("@/components/landing/MockupsShowcase"));
const PropertyTypes = dynamic(() => import("@/components/landing/PropertyTypes"));
const Pricing = dynamic(() => import("@/components/landing/Pricing"));
const CityMap = dynamic(() => import("@/components/landing/CityMap"));
const PwaPromote = dynamic(() => import("@/components/landing/PwaPromote"));
const TrustEngine = dynamic(() => import("@/components/landing/TrustEngine"));
const Testimonials = dynamic(() => import("@/components/landing/Testimonials"));
const Faq = dynamic(() => import("@/components/landing/Faq"));
const CtaFinal = dynamic(() => import("@/components/landing/CtaFinal"));
const Footer = dynamic(() => import("@/components/landing/Footer"));

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <DualPath />
        <MockupsShowcase />
        <PropertyTypes />
        <Pricing />
        <CityMap />
        <PwaPromote />
        <TrustEngine />
        <Testimonials />
        <Faq />
        <CtaFinal />
      </main>
      <Footer />
    </>
  );
}
