/**
 * CONVITE — segunda e última avenida azul (CD §11 seção 07, §3.1: máx. 2 avenidas)
 * Pergunta respondida: "E se eu quiser começar?"
 */

import { whatsappLink } from "@/config/site";
import { CtaPrimary } from "@/components/ui/Cta";

const SEGMENTS = ["Beleza & bem-estar", "Estúdio criativo", "Saúde", "Jurídico"];

export function Invitation() {
  return (
    <section className="bg-rua py-20 md:py-28" aria-labelledby="convite-title">
      <div className="block-container flex flex-col items-start gap-8">
        <p className="wayfinding-label text-white/80">Seção 07 — Vamos começar</p>
        <h2 id="convite-title" className="max-w-3xl font-display text-display-lg font-bold text-white">
          A próxima marca com presença pode ser a sua.
        </h2>

        <div className="flex flex-wrap gap-3" aria-label="Segmentos atendidos">
          {SEGMENTS.map((s) => (
            <span key={s} className="wayfinding-label rounded-full border border-white/40 px-4 py-2 text-white/80">
              {s}
            </span>
          ))}
        </div>

        <CtaPrimary href={whatsappLink("convite")} external inverted>
          Agendar um papo de 15 min
        </CtaPrimary>
      </div>
    </section>
  );
}
