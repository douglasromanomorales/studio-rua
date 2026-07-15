"use client";

/**
 * SERVIÇOS — O PAINEL DE LINHAS (CD §11 seção 03 + diretrizes Fase 2)
 *
 * Dispositivo próprio da seção: não são cards — são "linhas" de um painel
 * de partidas, irmão visual do split-flap do Hero. Cada linha anuncia a
 * transformação que o cliente conquista; a entrega é a etiqueta, não a manchete.
 *
 * Critério §13 + Adendo D:
 * 1. Identidade? Painel de linhas só existe no universo wayfinding do Rua.
 * 2. Responde? "O que vocês fazem?" — em termos de conquista do cliente.
 * 3. Conversa? CTA contextual "servicos" ao final da seção.
 * 4. Outra agência? Lista de cards genéricos, sim; painel de linhas, não.
 */

import { motion, useReducedMotion } from "framer-motion";
import { whatsappLink } from "@/config/site";
import { CtaPrimary } from "@/components/ui/Cta";
import {
  PictogramSpark,
  PictogramEye,
  PictogramRoute,
  PictogramSignal,
} from "@/components/ui/Pictograms";
import type { ComponentType } from "react";

interface ServiceLine {
  code: string;
  label: string; // a entrega (etiqueta)
  headline: string; // a transformação (manchete)
  detail: string;
  Pictogram: ComponentType<{ size?: number; className?: string }>;
}

const LINES: ServiceLine[] = [
  {
    code: "L1",
    label: "Branding",
    headline: "Marcas que deixam de ser esquecidas.",
    detail: "Posicionamento, narrativa e personalidade: o que a sua marca é, diz e defende.",
    Pictogram: PictogramSpark,
  },
  {
    code: "L2",
    label: "Identidade visual",
    headline: "Um jeito próprio de ser reconhecida.",
    detail: "Logotipo, cor, tipografia e gesto gráfico: a linguagem visual que só a sua marca tem.",
    Pictogram: PictogramEye,
  },
  {
    code: "L3",
    label: "Web design",
    headline: "Experiências digitais que convertem.",
    detail: "Sites com ritmo, direção e intenção — desenhados para transformar visita em conversa.",
    Pictogram: PictogramRoute,
  },
  {
    code: "L4",
    label: "Social media",
    headline: "Comunicação que gera presença.",
    detail: "Conteúdo com identidade e constância: a sua marca ocupando espaço todos os dias.",
    Pictogram: PictogramSignal,
  },
];

export function Services() {
  const reduced = useReducedMotion();

  return (
    <section id="servicos" className="bg-white py-20 md:py-28" aria-labelledby="servicos-title">
      <div className="block-container">
        <p className="wayfinding-label mb-4 text-rua">Seção 03 — O que fazemos</p>
        <h2 id="servicos-title" className="max-w-3xl font-display text-display-md font-bold text-rua-ink">
          Todas as linhas levam a mesma pergunta: o que a sua marca conquista?
        </h2>

        <ul className="mt-12 border-t-2 border-rua" role="list">
          {LINES.map((line, i) => (
            <motion.li
              key={line.code}
              initial={reduced ? false : { opacity: 0, x: -32 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: i * 0.07 }}
              className="group relative border-b border-rua-40/60"
            >
              {/* Fundo azul-neblina desliza como um trem chegando à plataforma */}
              <div
                aria-hidden="true"
                className="absolute inset-0 origin-left scale-x-0 bg-rua-mist transition-transform duration-500 ease-rua group-hover:scale-x-100"
              />
              <div className="relative grid grid-cols-[auto_1fr] items-center gap-x-5 gap-y-2 py-7 md:grid-cols-[5rem_3rem_1fr_auto] md:gap-x-8 md:py-9">
                <span className="wayfinding-label hidden text-rua-ink/70 md:block">{line.code}</span>
                <span className="text-rua">
                  <line.Pictogram size={34} />
                </span>
                <div>
                  <p className="wayfinding-label mb-1.5 text-rua-ink/60">{line.label}</p>
                  <h3 className="font-display text-2xl font-bold text-rua md:text-3xl">{line.headline}</h3>
                  <p className="mt-2 max-w-xl font-sans text-base text-rua-ink/80">{line.detail}</p>
                </div>
                <svg
                  viewBox="0 0 24 24"
                  width="28"
                  height="28"
                  aria-hidden="true"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="hidden text-rua transition-transform duration-300 ease-rua group-hover:translate-x-1.5 md:block"
                >
                  <path d="M4 12h15M13 6l6 6-6 6" />
                </svg>
              </div>
            </motion.li>
          ))}
        </ul>

        <div className="mt-12">
          <CtaPrimary href={whatsappLink("servicos")} external>
            Descobrir a linha da sua marca
          </CtaPrimary>
        </div>
      </div>
    </section>
  );
}
