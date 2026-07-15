/**
 * COMO OLHAMOS — CD §11 seção 04, renomeada pelo Adendo v1.1-A
 *
 * Diretriz da Fase 2: extremamente curta. Zero texto institucional.
 * Três princípios no formato "X antes de Y" — o método demonstrado
 * pela forma, não explicado por parágrafos.
 *
 * Critério §13: o dispositivo é tipográfico puro (display gigante +
 * contraponto pequeno). Nenhum card, nenhum ícone — a seção mais
 * silenciosa do site, de propósito: é onde o estúdio fala mais baixo
 * e diz mais.
 */

const PRINCIPLES = [
  {
    strong: "Olhar",
    weak: "antes de desenhar.",
    note: "Toda marca já tem uma verdade. Nosso trabalho começa enxergando ela.",
  },
  {
    strong: "Linguagem",
    weak: "antes de estética.",
    note: "Bonito é consequência. Primeiro definimos o que a marca diz — e como.",
  },
  {
    strong: "Ritmo",
    weak: "antes de barulho.",
    note: "Presença constante vale mais que impacto isolado.",
  },
] as const;

export function HowWeSee() {
  return (
    <section id="como-olhamos" className="bg-rua-mist py-20 md:py-28" aria-labelledby="como-olhamos-title">
      <div className="block-container">
        <p className="wayfinding-label mb-4 text-rua">Seção 04 — Como olhamos</p>
        <h2 id="como-olhamos-title" className="sr-only">
          Como olhamos: os três princípios do Estúdio Rua
        </h2>

        <dl className="mt-8 flex flex-col gap-14 md:gap-16">
          {PRINCIPLES.map((p) => (
            <div key={p.strong} className="grid gap-3 md:grid-cols-[1fr_20rem] md:items-end md:gap-12">
              <dt className="font-display text-display-lg font-extrabold text-rua">
                {p.strong} <span className="font-bold text-rua-ink/50">{p.weak}</span>
              </dt>
              <dd className="max-w-xs font-sans text-base text-rua-ink/80 md:pb-2">{p.note}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
