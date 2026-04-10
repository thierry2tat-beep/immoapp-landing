"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Cookie, X } from "lucide-react";

const COOKIE_CONSENT_KEY = "immoapp_cookie_consent";

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem(COOKIE_CONSENT_KEY);
    if (!consent) {
      // Small delay so it doesn't flash on load
      const timer = setTimeout(() => setVisible(true), 800);
      return () => clearTimeout(timer);
    }
  }, []);

  function accept() {
    localStorage.setItem(
      COOKIE_CONSENT_KEY,
      JSON.stringify({ accepted: true, date: new Date().toISOString() })
    );
    setVisible(false);
  }

  function decline() {
    localStorage.setItem(
      COOKIE_CONSENT_KEY,
      JSON.stringify({ accepted: false, date: new Date().toISOString() })
    );
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 inset-x-0 z-[9999] p-4 sm:p-6 pointer-events-none">
      <div className="relative pointer-events-auto max-w-2xl mx-auto rounded-2xl bg-card border border-border shadow-2xl shadow-black/40 p-5 sm:p-6 animate-slide-up">
        {/* Close */}
        <button
          onClick={decline}
          aria-label="Fermer"
          className="absolute top-3 right-3 text-muted hover:text-white transition-colors"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="flex items-start gap-4">
          {/* Icon */}
          <div className="hidden sm:flex w-10 h-10 rounded-xl bg-primary/15 items-center justify-center flex-shrink-0 mt-0.5">
            <Cookie className="w-5 h-5 text-primary" />
          </div>

          <div className="flex-1 min-w-0">
            <h3 className="text-sm font-semibold text-white font-heading mb-1.5">
              Nous utilisons des cookies
            </h3>
            <p className="text-xs leading-relaxed text-muted mb-4">
              Ce site utilise des cookies pour am&eacute;liorer votre
              exp&eacute;rience, analyser le trafic et personnaliser le contenu.
              En cliquant sur &laquo;&nbsp;Accepter&nbsp;&raquo;, vous consentez
              &agrave; l&apos;utilisation de tous les cookies. Consultez notre{" "}
              <Link
                href="/privacy"
                className="text-primary hover:underline"
              >
                Politique de confidentialit&eacute;
              </Link>{" "}
              pour en savoir plus.
            </p>

            <div className="flex flex-wrap gap-2.5">
              <button
                onClick={accept}
                className="px-5 py-2 text-xs font-semibold rounded-lg bg-primary text-white hover:bg-primary-light transition-colors cursor-pointer"
              >
                Accepter tout
              </button>
              <button
                onClick={decline}
                className="px-5 py-2 text-xs font-semibold rounded-lg bg-transparent border border-border text-muted hover:text-white hover:border-muted transition-colors cursor-pointer"
              >
                Refuser
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
