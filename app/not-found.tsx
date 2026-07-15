import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CtaPrimary } from "@/components/ui/Cta";

export const metadata: Metadata = { title: "Página não encontrada" };

/**
 * 404 — POMBO PERDIDO (CD §4.1)
 * Único momento de protagonismo total do personagem: pombo grande,
 * olhando um mapa de cabeça para baixo. Estático — não é o estado
 * Guia, é uma pose própria, exclusiva desta página.
 */
export default function NotFound() {
  return (
    <>
      <Header />
      <main className="flex min-h-svh flex-col items-center justify-center bg-white px-5 pt-24 text-center">
        <svg
          viewBox="0 0 160 160"
          width="140"
          height="140"
          aria-hidden="true"
          fill="none"
          stroke="#1D3AE0"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="mb-6"
        >
          {/* Mapa de cabeça para baixo */}
          <g transform="rotate(180 128 30)">
            <rect x="98" y="10" width="60" height="40" rx="2" fill="#FFFFFF" />
            <path d="M98 22h60M112 10v40M138 10v40" strokeWidth="2" />
          </g>
          {/* Pombo, corpo maior, olhando para o mapa invertido com confusão */}
          <path d="M30 90 C30 68 54 56 78 60 C96 63 108 80 104 100 C100 122 80 134 58 130 C36 126 30 108 30 90 Z" fill="#FFFFFF" />
          <path d="M12 96 L-2 82 M14 104 L-4 96 M14 112 L-2 112" transform="translate(20 0)" />
          <path d="M78 60 C78 46 88 36 100 36 C112 36 120 46 118 58 C116 68 106 74 96 72 C86 70 78 68 78 60 Z" fill="#FFFFFF" />
          <path d="M118 52 L134 56 L120 62" fill="#FFFFFF" />
          <circle cx="100" cy="50" r="4" fill="#1D3AE0" />
          <path d="M86 38 C88 26 110 26 112 38 Z" fill="#1D3AE0" />
        </svg>

        <p className="wayfinding-label mb-4 text-rua">Rota não encontrada</p>
        <h1 className="max-w-xl font-display text-display-md font-extrabold text-rua">
          Até nós nos perdemos às vezes.
        </h1>
        <p className="mt-4 max-w-md font-sans text-lg text-rua-ink/80">
          Essa página não existe — mas o caminho de volta é fácil.
        </p>
        <div className="mt-10">
          <CtaPrimary href="/">Voltar para a Home</CtaPrimary>
        </div>
        <Link href="/projetos" className="wayfinding-label mt-6 text-rua-ink/60 hover:text-rua">
          Ou ver os projetos
        </Link>
      </main>
      <Footer />
    </>
  );
}
