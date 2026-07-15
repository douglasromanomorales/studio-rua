/**
 * NARRATIVA DE CASE — template fixo (CD §11.1 + Adendo v1.1-C)
 *
 * Desafio → Estratégia → Solução → Resultado, sempre nesta ordem,
 * mesmo para projetos em desenvolvimento. Numeração de atos no
 * vocabulário de wayfinding (etapas de uma rota, não de um artigo).
 *
 * Navegação final: pombo Aponta indicando o próximo case — o mesmo
 * gesto de "presença que acompanha" da seção 06 da Home.
 */

import Link from "next/link";
import type { Project } from "@/content/projects";
import { getNextProject } from "@/content/projects";
import { whatsappLink } from "@/config/site";
import { CtaPrimary } from "@/components/ui/Cta";
import { CaseCover } from "@/components/ui/CaseCover";
import { Pigeon } from "@/components/pigeon/Pigeon";

const ACTS: { key: keyof Project["narrativa"]; label: string; code: string }[] = [
  { key: "desafio", label: "Desafio", code: "01" },
  { key: "estrategia", label: "Estratégia", code: "02" },
  { key: "solucao", label: "Solução", code: "03" },
  { key: "resultado", label: "Resultado", code: "04" },
];

export function CaseNarrative({ project }: { project: Project }) {
  const next = getNextProject(project.slug);

  return (
    <>
      <header className="border-b-2 border-rua bg-white py-16 md:py-24">
        <div className="block-container">
          <Link href="/projetos" className="wayfinding-label mb-8 inline-flex items-center gap-2 text-rua-ink/70 transition-colors hover:text-rua">
            <svg viewBox="0 0 20 20" width="16" height="16" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M17 10H4M9 5l-5 5 5 5" />
            </svg>
            Todos os projetos
          </Link>
          <div className="flex flex-wrap items-center gap-3">
            <span className="wayfinding-label rounded-full border-2 border-rua px-3 py-1.5 text-rua">{project.segmento}</span>
            <span className="wayfinding-label text-rua-ink/70">{project.ano}</span>
            {project.parceria && <span className="wayfinding-label text-rua-ink/70">Projeto em parceria</span>}
            {project.status === "em-desenvolvimento" && (
              <span className="wayfinding-label text-rua-ink/70">Em construção</span>
            )}
          </div>
          <h1 className="mt-6 font-display text-display-lg font-extrabold text-rua">{project.cliente}</h1>
          <p className="mt-5 max-w-2xl font-sans text-lg text-rua-ink/80">{project.sintese}</p>

          <a
            href={project.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="group mt-5 inline-flex items-center gap-2 font-sans font-semibold text-rua"
          >
            <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="2.2">
              <rect x="3" y="3" width="18" height="18" rx="5" />
              <circle cx="12" cy="12" r="4" />
              <circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none" />
            </svg>
            Ver no Instagram
            <svg viewBox="0 0 20 20" width="16" height="16" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="transition-transform duration-200 ease-rua group-hover:translate-x-1">
              <path d="M3 10h13M11 5l5 5-5 5" />
            </svg>
          </a>

          <div className="relative mt-10 aspect-[16/9] w-full max-w-4xl md:aspect-[21/9]">
            <CaseCover project={project} priority className="absolute inset-0 h-full w-full" />
          </div>
        </div>
      </header>

      <section className="bg-white py-16 md:py-24" aria-label="A história do projeto">
        <div className="block-container flex flex-col gap-16 md:gap-20">
          {ACTS.map((act) => (
            <article key={act.key} className="grid gap-4 md:grid-cols-[10rem_1fr] md:gap-12">
              <p className="wayfinding-label text-rua">
                {act.code} — {act.label}
              </p>
              <p className="max-w-2xl font-sans text-lg leading-relaxed text-rua-ink">
                {project.narrativa[act.key]}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-rua py-16 md:py-20" aria-labelledby="proximo-projeto-title">
        <div className="block-container flex flex-col justify-between gap-10 md:flex-row md:items-end">
          <div>
            <p id="proximo-projeto-title" className="wayfinding-label mb-3 text-white/80">
              Próxima parada
            </p>
            <Link href={`/projetos/${next.slug}`} className="group inline-flex items-baseline gap-4">
              <h2 className="font-display text-display-md font-extrabold text-white transition-opacity group-hover:opacity-80">
                {next.cliente}
              </h2>
              <Pigeon state="aponta" size={44} className="hidden md:block" />
            </Link>
          </div>
          <CtaPrimary href={whatsappLink("projetos")} external inverted>
            Conversar sobre a sua marca
          </CtaPrimary>
        </div>
      </section>
    </>
  );
}
