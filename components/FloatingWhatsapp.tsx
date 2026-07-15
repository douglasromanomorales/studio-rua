"use client";

/**
 * WHATSAPP FLUTUANTE + POMBO ESPERA (CD §4.1)
 *
 * Mobile (CD §8): CTA fixo na base após passar do Hero; some quando
 * Contato está visível. Estado Espera do pombo desativado no mobile
 * (tela pequena demais para aparição periférica — regra explícita §8).
 *
 * Desktop: após ~10s de inatividade, o pombo surge perto do botão,
 * bica o chão uma vez, para. No máximo 1x por sessão (regra §4.1).
 */

import { useEffect, useRef, useState } from "react";
import { whatsappLink } from "@/config/site";
import { Pigeon } from "@/components/pigeon/Pigeon";

const IDLE_MS = 10_000;

export function FloatingWhatsapp() {
  const [pastHero, setPastHero] = useState(false);
  const [inContact, setInContact] = useState(false);
  const [showPigeon, setShowPigeon] = useState(false);
  const hasShownPigeon = useRef(false);
  const idleTimer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

  useEffect(() => {
    const hero = document.querySelector("section[aria-labelledby='hero-title']");
    const contact = document.getElementById("contato");
    if (!hero || !contact) return;

    const heroObserver = new IntersectionObserver(([entry]) => setPastHero(!entry.isIntersecting), {
      rootMargin: "-10% 0px 0px 0px",
    });
    const contactObserver = new IntersectionObserver(([entry]) => setInContact(entry.isIntersecting), {
      threshold: 0.2,
    });
    heroObserver.observe(hero);
    contactObserver.observe(contact);
    return () => {
      heroObserver.disconnect();
      contactObserver.disconnect();
    };
  }, []);

  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const isDesktop = window.matchMedia("(min-width: 768px)").matches;
    if (reducedMotion || !isDesktop) return;

    function resetIdleTimer() {
      if (hasShownPigeon.current) return;
      if (idleTimer.current) clearTimeout(idleTimer.current);
      idleTimer.current = setTimeout(() => {
        hasShownPigeon.current = true;
        setShowPigeon(true);
        setTimeout(() => setShowPigeon(false), 2600);
      }, IDLE_MS);
    }

    const events: (keyof WindowEventMap)[] = ["mousemove", "scroll", "keydown"];
    events.forEach((ev) => window.addEventListener(ev, resetIdleTimer, { passive: true }));
    resetIdleTimer();

    return () => {
      events.forEach((ev) => window.removeEventListener(ev, resetIdleTimer));
      if (idleTimer.current) clearTimeout(idleTimer.current);
    };
  }, []);

  const visible = pastHero && !inContact;

  return (
    <div
      className={`fixed bottom-[max(1.25rem,env(safe-area-inset-bottom))] right-5 z-40 flex items-end gap-3 transition-all duration-300 ease-rua md:bottom-[max(2rem,env(safe-area-inset-bottom))] md:right-8 ${
        visible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-4 opacity-0"
      }`}
    >
      {showPigeon && (
        <div className="hidden md:block" aria-hidden="true">
          <Pigeon state="static" size={52} />
        </div>
      )}
      <a
        href={whatsappLink("flutuante")}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Conversar no WhatsApp"
        className="flex h-14 w-14 items-center justify-center rounded-full bg-rua text-white shadow-lg transition-colors duration-200 ease-rua hover:bg-rua-ink"
      >
        <svg viewBox="0 0 24 24" width="26" height="26" fill="currentColor" aria-hidden="true">
          <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.87.52 3.63 1.42 5.13L2 22l5.13-1.5a9.85 9.85 0 0 0 4.9 1.31h.01c5.46 0 9.91-4.45 9.91-9.91S17.5 2 12.04 2Zm5.79 14.13c-.24.68-1.4 1.3-1.93 1.36-.5.06-1.06.24-3.56-.74-3-1.17-4.93-4.24-5.08-4.44-.15-.2-1.22-1.62-1.22-3.09s.77-2.2 1.04-2.5c.27-.3.6-.37.8-.37h.57c.18 0 .43-.03.66.5.24.56.81 1.94.88 2.08.07.15.12.32.02.51-.1.2-.15.32-.3.5-.15.17-.31.38-.44.51-.15.15-.3.31-.13.61.17.3.75 1.24 1.62 2.01 1.11.99 2.05 1.3 2.35 1.44.3.15.48.13.66-.08.18-.2.76-.88.97-1.19.2-.3.4-.25.68-.15.28.1 1.77.83 2.07 1 .3.14.5.22.57.35.08.13.08.75-.16 1.43Z" />
        </svg>
      </a>
    </div>
  );
}
