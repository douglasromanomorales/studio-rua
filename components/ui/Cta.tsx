/**
 * CTAs — hierarquia de conversão (Creative Direction §6)
 *
 * O que é redondo, é clicável (CD §3.3): border-radius pill é
 * exclusividade de CTAs e tags. Hover: a seta "anda" 4px — passo,
 * não salto (animate-cta-step).
 *
 * Regra: um único CTA primário visível por dobra.
 */

import Link from "next/link";
import type { ReactNode } from "react";

function ArrowIcon() {
  return (
    <svg
      viewBox="0 0 20 20"
      width="18"
      height="18"
      aria-hidden="true"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="transition-transform group-hover:animate-cta-step"
    >
      <path d="M3 10h13M11 5l5 5-5 5" />
    </svg>
  );
}

interface CtaProps {
  href: string;
  children: ReactNode;
  external?: boolean;
  className?: string;
  /** Usar sobre fundo azul-rua (avenidas). Evita empilhar !important. */
  inverted?: boolean;
}

export function CtaPrimary({ href, children, external, className = "", inverted = false }: CtaProps) {
  const palette = inverted
    ? "bg-white text-rua hover:bg-rua-mist"
    : "bg-rua text-white hover:bg-rua-ink";

  return (
    <Link
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className={`group inline-flex min-h-12 items-center gap-3 rounded-full px-7 py-3.5 font-sans text-base font-semibold transition-colors duration-200 ease-rua ${palette} ${className}`}
    >
      {children}
      <ArrowIcon />
    </Link>
  );
}

export function CtaSecondary({ href, children, external, className = "" }: CtaProps) {
  return (
    <Link
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className={`group inline-flex min-h-12 items-center gap-3 rounded-full border-2 border-rua px-7 py-3.5 font-sans text-base font-semibold text-rua transition-colors duration-200 ease-rua hover:bg-rua-mist ${className}`}
    >
      {children}
      <ArrowIcon />
    </Link>
  );
}
