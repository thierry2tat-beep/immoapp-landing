"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "ImmoApp est-elle gratuite ?",
    answer:
      "Oui, ImmoApp est entièrement gratuite pour les locataires. Vous pouvez rechercher, filtrer et contacter les propriétaires sans aucun frais. Pour les propriétaires, un plan gratuit permet de publier jusqu'à 3 annonces par mois. Des plans Pro et Premium offrent plus de fonctionnalités.",
  },
  {
    question: "Comment vérifiez-vous les annonces ?",
    answer:
      "Chaque annonce publiée passe par un processus de modération. La cohérence des informations, la qualité et le nombre des photos et les coordonnées du propriétaire sont vérifiées.",
  },
  {
    question: "Quelles villes sont couvertes ?",
    answer:
      "ImmoApp couvre actuellement 10 villes du Bénin : Cotonou, Abomey-Calavi, Porto-Novo, Parakou, Bohicon, Ouidah, Natitingou, Lokossa, Abomey et Djougou. Nous étendons progressivement notre couverture à de nouvelles villes.",
  },
  {
    question: "Comment installer l'application sur mon téléphone ?",
    answer:
      "ImmoApp est une Progressive Web App (PWA). Rendez-vous sur immoapp.net depuis votre navigateur mobile, puis cliquez sur « Ajouter à l'écran d'accueil » dans le menu de votre navigateur. L'application s'installera comme une app native, sans passer par un store.",
  },
  {
    question: "Comment contacter un propriétaire ?",
    answer:
      "Sur chaque annonce, vous trouverez les boutons de contact : WhatsApp, Email et Téléphone. Choisissez le canal qui vous convient. Les propriétaires reçoivent votre demande instantanément et peuvent y répondre directement.",
  },
  {
    question: "Puis-je publier une annonce depuis mon téléphone ?",
    answer:
      "Absolument ! Le formulaire de publication est entièrement optimisé pour mobile. Vous pouvez prendre des photos directement avec votre téléphone, remplir les détails et publier votre annonce en moins de 5 minutes.",
  },
  {
    question: "Quels moyens de paiement acceptez-vous ?",
    answer:
      "Pour les abonnements Pro et Premium, nous acceptons MTN Mobile Money. Le paiement est sécurisé et vous recevez une confirmation instantanée.",
  },
  {
    question: "Mes données personnelles sont-elles en sécurité ?",
    answer:
      "Oui. ImmoApp utilise le chiffrement de bout en bout pour protéger vos données. Nous ne partageons jamais vos informations personnelles avec des tiers. Votre numéro de téléphone ainsi que votre adresse email, que vous aurez choisi personnellement de partager sur ImmoApp, ne sont visibles qu'aux potentiels locataires qui tenteront de vous contacter en personne via l'option WhatsApp/Email/Appel implémentée sur la page de détails de vos annonces publiées.",
  },
];

export default function Faq() {
  return (
    <section id="faq" className="py-20 lg:py-28 bg-surface/30">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <Badge variant="primary" className="mb-4">
            FAQ
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading mb-4">
            Questions{" "}
            <span className="gradient-text">fréquentes</span>
          </h2>
          <p className="text-lg text-muted">
            Tout ce que vous devez savoir sur ImmoApp.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <Accordion>
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`faq-${i}`}>
                <AccordionTrigger value={`faq-${i}`}>
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent value={`faq-${i}`}>
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
