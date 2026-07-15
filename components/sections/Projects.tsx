"use client";

/**
 * PROJETOS — PROVA DE TRADUÇÃO (CD §11 seção 06 + Adendo v1.1-C)
 *
 * Dispositivo próprio: "placas de projeto". Cada case é uma placa do
 * sistema de wayfinding — segmento como etiqueta de primeira classe,
 * porque a diversidade de segmentos É o argumento: quatro mercados
 * completamente diferentes, quatro linguagens completamente diferentes.
 * Reação desejada: "eles sabem construir marcas".
 *
 * Critério §13 + Adendo D:
 * 1. Identidade? Placas do sistema wayfinding, síntese narrativa no lugar de thumbnail.
 * 2. Responde? "Por que confiar?" — com histórias, não imagens soltas.
 * 3. Conversa? CTA contextual "projetos" + pombo Aponta indicando o caminho.
 * 4. Outra agência? Grid de thumbnails, sim; placas narrativas por segmento, não.
 */

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { projects } from "@/content/projects";
import { whatsappLink } from "@/config/site";
import { CtaPrimary, CtaSecondary } from "@/components/ui/Cta";
import { CaseCover } from "@/components/ui/CaseCover";
import { Pigeon } from "@/components/pigeon/Pigeon";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

export function Projects() {
  const reduced = useReducedMotion();
  const featured = projects.filter((p) => p.featured).slice(0, 4);

  return (
    <section id="projetos" className="bg-rua-mist py-20 md:py-28" aria-labelledby="projetos-title">
      <div className="block-container">
        <p className="wayfinding-label mb-4 text-rua">Seção 06 — Por que confiar</p>
        <h2 id="projetos-title" className="max-w-4xl font-display text-display-md font-bold text-rua-ink">
          Segmentos completamente diferentes. Linguagens completamente diferentes. O mesmo olhar.
        </h2>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {featured.map((project, i) => (
            <motion.article
              key={project.slug}
              initial={reduced ? false : { opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, ease: EASE, delay: (i % 2) * 0.08 }}
              whileHover={
                reduced
                  ? undefined
                  : {
                      y: -6,
                      scale: 1.01,
                      boxShadow: "0 16px 28px -18px rgba(0,0,0,0.18)",
                      transition: { duration: 0.25, ease: EASE },
                    }
              }
              className="group relative flex flex-col justify-between border-2 border-rua bg-white p-7 transition-colors duration-300 ease-rua hover:bg-rua md:p-9"
            >
              <div>
                <div className="relative mb-6 aspect-[16/10] w-full">
                  <CaseCover project={project} className="absolute inset-0 h-full w-full" />
                </div>
                <h3 className="mt-6 font-display text-3xl font-extrabold text-rua transition-colors duration-300 group-hover:text-white md:text-4xl">
                  {project.cliente}
                </h3>
                <p className="mt-4 font-sans text-base text-rua-ink/80 transition-colors duration-300 group-hover:text-white/85">
                  {project.sintese}
                </p>
                <div className="mt-5 flex flex-wrap items-center gap-3">
                  <span className="wayfinding-label rounded-full border border-current px-3 py-1.5 text-rua transition-colors duration-300 group-hover:text-white">
                    {project.segmento}
                  </span>
                  {project.parceria && (
                    <span className="wayfinding-label text-rua-ink/70 transition-colors duration-300 group-hover:text-white/80">
                      Projeto em parceria
                    </span>
                  )}
                  {project.status === "em-desenvolvimento" && (
                    <span className="wayfinding-label text-rua-ink/70 transition-colors duration-300 group-hover:text-white/80">
                      Em construção
                    </span>
                  )}
                </div>
              </div>
              <Link
                href={`/projetos/${project.slug}`}
                className="mt-8 inline-flex w-fit items-center gap-2 font-sans font-semibold text-rua transition-colors duration-300 after:absolute after:inset-0 group-hover:text-white"
              >
                Ler a história
                <svg viewBox="0 0 20 20" width="18" height="18" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 10h13M11 5l5 5-5 5" />
                </svg>
              </Link>
            </motion.article>
          ))}
        </div>

        {/* Pombo Aponta — presença que indica o caminho (CD §4.1 + Adendo B) */}
        <div className="mt-14 flex flex-wrap items-end justify-between gap-8">
          <div className="flex flex-wrap items-center gap-4">
            <CtaPrimary href={whatsappLink("projetos")} external>
              Conversar sobre a sua marca
            </CtaPrimary>
            <CtaSecondary href="/projetos">Todos os projetos</CtaSecondary>
          </div>
          <div className="hidden items-end gap-3 md:flex" aria-hidden="true">
            <Pigeon state="aponta" size={64} />
            <span className="wayfinding-label pb-1 text-rua-ink/60">A próxima história pode ser a sua →</span>
          </div>
        </div>
      </div>
    </section>
  );
}
