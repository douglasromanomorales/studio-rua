"use client";

/**
 * PROCESSO — A LINHA DO TRAJETO (CD §11 seção 05 + diretrizes Fase 2)
 *
 * Dispositivo próprio da seção: um diagrama de linha de transporte.
 * Quatro paradas até o destino — a metáfora do trajeto é literal na
 * forma: trilho, estações, partida e destino. Desktop: linha horizontal
 * que se desenha ao entrar em cena. Mobile: linha vertical.
 *
 * Critério §13 + Adendo D:
 * 1. Identidade? Diagrama de linha é wayfinding puro — só faz sentido aqui.
 * 2. Responde? "Como vocês trabalham?" — como uma jornada com paradas.
 * 3. Conversa? A última parada é "Presença" e desemboca na seção de projetos.
 * 4. Outra agência? Steps numerados genéricos, sim; linha com estações, não.
 */

import { motion, useReducedMotion } from "framer-motion";

const STOPS = [
  {
    code: "P1",
    flag: "Partida",
    name: "Escuta",
    detail: "Imersão na marca: contexto, público, momento. Entendemos antes de propor.",
  },
  {
    code: "P2",
    flag: "Rota",
    name: "Leitura",
    detail: "Traduzimos o que ouvimos em direção: conceito, linguagem, tom de voz.",
  },
  {
    code: "P3",
    flag: "Construção",
    name: "Expressão",
    detail: "A identidade ganha forma: design, movimento, experiência.",
  },
  {
    code: "P4",
    flag: "Destino",
    name: "Presença",
    detail: "Entrega, lançamento e acompanhamento. A marca ocupa a cidade.",
  },
] as const;

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

export function Process() {
  const reduced = useReducedMotion();

  return (
    <section id="processo" className="overflow-hidden bg-white py-20 md:py-28" aria-labelledby="processo-title">
      <div className="block-container">
        <p className="wayfinding-label mb-4 text-rua">Seção 05 — Como trabalhamos</p>
        <h2 id="processo-title" className="max-w-3xl font-display text-display-md font-bold text-rua-ink">
          Quatro paradas entre a sua marca e a presença dela.
        </h2>

        {/* Desktop: linha horizontal */}
        <div className="relative mt-16 hidden md:block" aria-hidden="false">
          {/* Trilho */}
          <div className="absolute left-0 right-0 top-[9px] h-1 rounded bg-rua-40/40" aria-hidden="true" />
          <motion.div
            aria-hidden="true"
            className="absolute left-0 right-0 top-[9px] h-1 origin-left rounded bg-rua"
            initial={reduced ? false : { scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 1.1, ease: EASE }}
          />
          <ol className="relative grid grid-cols-4 gap-8" role="list">
            {STOPS.map((stop, i) => (
              <motion.li
                key={stop.code}
                initial={reduced ? false : { opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.45, ease: EASE, delay: 0.2 + i * 0.22 }}
              >
                {/* Estação */}
                <span className="relative z-10 block h-[22px] w-[22px] rounded-full border-4 border-rua bg-white" aria-hidden="true" />
                <p className="wayfinding-label mt-5 text-rua-ink/70">
                  {stop.code} · {stop.flag}
                </p>
                <h3 className="mt-2 font-display text-2xl font-bold text-rua">{stop.name}</h3>
                <p className="mt-2 font-sans text-base text-rua-ink/80">{stop.detail}</p>
              </motion.li>
            ))}
          </ol>
        </div>

        {/* Mobile: linha vertical */}
        <div className="relative mt-12 md:hidden">
          <div className="absolute bottom-2 left-[9px] top-2 w-1 rounded bg-rua-40/40" aria-hidden="true" />
          <motion.div
            aria-hidden="true"
            className="absolute bottom-2 left-[9px] top-2 w-1 origin-top rounded bg-rua"
            initial={reduced ? false : { scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1.1, ease: EASE }}
          />
          <ol className="relative flex flex-col gap-10" role="list">
            {STOPS.map((stop, i) => (
              <motion.li
                key={stop.code}
                className="grid grid-cols-[22px_1fr] gap-x-5"
                initial={reduced ? false : { opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.45, ease: EASE, delay: i * 0.1 }}
              >
                <span className="relative z-10 mt-1 block h-[22px] w-[22px] rounded-full border-4 border-rua bg-white" aria-hidden="true" />
                <div>
                  <p className="wayfinding-label text-rua-ink/70">
                    {stop.code} · {stop.flag}
                  </p>
                  <h3 className="mt-1.5 font-display text-2xl font-bold text-rua">{stop.name}</h3>
                  <p className="mt-2 font-sans text-base text-rua-ink/80">{stop.detail}</p>
                </div>
              </motion.li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
