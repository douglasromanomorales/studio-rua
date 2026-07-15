/**
 * HERO — O PAINEL DE EMBARQUE (Creative Direction §10)
 *
 * Validação contra o critério de aprovação (CD §13):
 * 1. Nasce da identidade? Sim — wayfinding + pombo navegador, só faz sentido aqui.
 * 2. Responde uma pergunta? "Onde eu cheguei?" — nome, promessa e destino em 1 dobra.
 * 3. Aproxima da conversa? CTA primário WhatsApp com contexto "hero".
 * 4. Custa performance? LCP é a headline (texto). Painel em CSS puro,
 *    pombo em SVG inline (~2KB). Zero imagens acima da dobra.
 */

import { site, whatsappLink } from "@/config/site";
import { CtaPrimary, CtaSecondary } from "@/components/ui/Cta";
import { SplitFlap } from "@/components/ui/SplitFlap";
import { Pigeon } from "@/components/pigeon/Pigeon";

const DESTINATIONS = ["OLHAR", "GESTO", "LINGUAGEM", "RITMO", "PRESENÇA"] as const;

export function Hero() {
  return (
    <section className="flex min-h-svh flex-col justify-between bg-white pt-28 md:pt-32" aria-labelledby="hero-title">
      <div className="block-container flex flex-1 flex-col justify-center gap-10 py-8 md:gap-14">
        <div className="max-w-4xl">
          <p className="wayfinding-label mb-6 flex items-center gap-3 text-rua">
            <span className="inline-block h-2.5 w-2.5 rounded-full bg-rua" aria-hidden="true" />
            {site.name} — estúdio criativo
          </p>
          <h1 id="hero-title" className="font-display text-display-xl font-extrabold text-rua">
            Marcas que sabem
            <br />
            para onde vão.
          </h1>
        </div>

        {/* O Painel de Embarque */}
        <div className="relative w-fit">
          <div className="rounded-lg border-2 border-rua bg-white p-5 pr-8 md:p-7 md:pr-12">
            <p className="wayfinding-label mb-3 text-rua-ink/70">Próxima parada</p>
            <SplitFlap words={DESTINATIONS} className="text-2xl md:text-4xl" />
          </div>
          {/* Pombo em estado Guia, pousado no canto do painel (CD §4.1) */}
          <div className="absolute -top-[72px] right-4 md:-top-[84px] md:right-6">
            <Pigeon state="guia" size={88} className="hidden md:block" />
            <Pigeon state="guia" size={64} className="md:hidden" />
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-4">
          <CtaPrimary href={whatsappLink("hero")} external>
            Começar uma conversa
          </CtaPrimary>
          <CtaSecondary href="/#projetos">Ver projetos</CtaSecondary>
        </div>
      </div>

      {/* Indicador de scroll no vocabulário do sistema */}
      <div className="block-container flex items-center gap-3 pb-8 text-rua" aria-hidden="true">
        <svg viewBox="0 0 20 20" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M10 3v13M5 11l5 5 5-5" />
        </svg>
        <span className="wayfinding-label">400m até os projetos</span>
      </div>
    </section>
  );
}
