"use client";

/**
 * HEADER — Creative Direction §7 (desktop) e §8 (mobile)
 *
 * Desktop: fixo, fundo branco, borda 1px azul-40; encolhe ao rolar.
 * Mobile: menu fullscreen azul-rua com links em display branco gigante —
 * o menu é um momento de marca, não um drawer genérico.
 */

import Link from "next/link";
import { useEffect, useState } from "react";
import { nav, whatsappLink } from "@/config/site";
import { CtaPrimary } from "@/components/ui/Cta";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Trava o scroll do body enquanto o menu fullscreen está aberto
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b border-rua-40/60 bg-white transition-all duration-300 ease-rua ${
        scrolled ? "py-2.5" : "py-4"
      }`}
    >
      <div className="block-container flex items-center justify-between">
        <Link
          href="/"
          className="font-display text-2xl font-extrabold lowercase tracking-tight text-rua"
          aria-label="Estúdio Rua — início"
        >
          estúdio rua<span className="text-rua-40">*</span>
        </Link>

        {/* Navegação desktop */}
        <nav aria-label="Principal" className="hidden items-center gap-8 lg:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="wayfinding-label text-rua-ink transition-colors duration-200 hover:text-rua"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <CtaPrimary href={whatsappLink("hero")} external className="!min-h-0 !px-5 !py-2.5 !text-sm">
            Começar uma conversa
          </CtaPrimary>
        </div>

        {/* Botão do menu mobile */}
        <button
          type="button"
          onClick={() => setMenuOpen(true)}
          className="wayfinding-label flex min-h-12 items-center gap-2 text-rua lg:hidden"
          aria-expanded={menuOpen}
          aria-controls="menu-mobile"
        >
          Menu
          <svg viewBox="0 0 20 20" width="18" height="18" aria-hidden="true" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
            <path d="M3 6h14M3 14h14" />
          </svg>
        </button>
      </div>

      {/* Menu fullscreen mobile — momento de marca */}
      {menuOpen && (
        <div id="menu-mobile" className="fixed inset-0 z-50 flex flex-col bg-rua lg:hidden" role="dialog" aria-modal="true" aria-label="Menu">
          <div className="block-container flex items-center justify-between py-4">
            <span className="font-display text-2xl font-extrabold lowercase text-white">
              estúdio rua<span className="opacity-60">*</span>
            </span>
            <button
              type="button"
              onClick={() => setMenuOpen(false)}
              className="wayfinding-label flex min-h-12 items-center gap-2 text-white"
            >
              Fechar
              <svg viewBox="0 0 20 20" width="18" height="18" aria-hidden="true" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                <path d="M5 5l10 10M15 5L5 15" />
              </svg>
            </button>
          </div>

          <nav aria-label="Principal" className="block-container flex flex-1 flex-col justify-center gap-2">
            {nav.map((item, i) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="flex items-baseline gap-4 py-2 font-display text-display-md font-bold text-white"
              >
                <span className="wayfinding-label text-white/50">0{i + 1}</span>
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="block-container pb-10">
            <a
              href={whatsappLink("hero")}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMenuOpen(false)}
              className="inline-flex min-h-12 items-center gap-3 rounded-full bg-white px-7 py-3.5 font-sans font-semibold text-rua"
            >
              Começar uma conversa
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
