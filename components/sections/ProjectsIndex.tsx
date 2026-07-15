"use client";

/**
 * ÍNDICE DE PROJETOS — /projetos (CD §11.1)
 *
 * Nasce pronta para dezenas de cases: filtro por segmento gerado
 * automaticamente do conteúdo. Com 4 projetos já funciona; com 40,
 * continua funcionando sem tocar em código.
 *
 * Filtro em pills (o que é redondo, é clicável — CD §3.3).
 */

import Link from "next/link";
import { useState } from "react";
import { projects, segments } from "@/content/projects";
import { CaseCover } from "@/components/ui/CaseCover";

export function ProjectsIndex() {
  const [activeSegment, setActiveSegment] = useState<string | null>(null);
  const visible = activeSegment ? projects.filter((p) => p.segmento === activeSegment) : projects;

  return (
    <section className="pb-20 md:pb-28" aria-labelledby="projetos-index-title">
      <div className="block-container">
        <p className="wayfinding-label mb-4 text-rua">Projetos</p>
        <h1 id="projetos-index-title" className="max-w-4xl font-display text-display-lg font-extrabold text-rua">
          Cada marca, uma linguagem.
        </h1>

        {/* Filtro por segmento */}
        <div className="mt-10 flex flex-wrap gap-3" role="group" aria-label="Filtrar por segmento">
          <button
            type="button"
            onClick={() => setActiveSegment(null)}
            aria-pressed={activeSegment === null}
            className={`wayfinding-label min-h-12 rounded-full border-2 px-5 transition-colors duration-200 ease-rua ${
              activeSegment === null
                ? "border-rua bg-rua text-white"
                : "border-rua-40 text-rua-ink hover:border-rua"
            }`}
          >
            Todos
          </button>
          {segments.map((segment) => (
            <button
              key={segment}
              type="button"
              onClick={() => setActiveSegment(segment)}
              aria-pressed={activeSegment === segment}
              className={`wayfinding-label min-h-12 rounded-full border-2 px-5 transition-colors duration-200 ease-rua ${
                activeSegment === segment
                  ? "border-rua bg-rua text-white"
                  : "border-rua-40 text-rua-ink hover:border-rua"
              }`}
            >
              {segment}
            </button>
          ))}
        </div>

        <ul className="mt-12 border-t-2 border-rua" role="list">
          {visible.map((project) => (
            <li key={project.slug} className="group relative border-b border-rua-40/60">
              <div
                aria-hidden="true"
                className="absolute inset-0 origin-left scale-x-0 bg-rua-mist transition-transform duration-500 ease-rua group-hover:scale-x-100"
              />
              <div className="relative grid grid-cols-[5.5rem_1fr] items-center gap-5 py-6 md:grid-cols-[8rem_1fr_auto] md:gap-8 md:py-8">
                <div className="relative aspect-[4/3] w-full">
                  <CaseCover project={project} className="absolute inset-0 h-full w-full" />
                </div>
                <div>
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="wayfinding-label text-rua">{project.segmento}</span>
                    <span className="wayfinding-label text-rua-ink/70">{project.ano}</span>
                    {project.parceria && <span className="wayfinding-label text-rua-ink/70">Parceria</span>}
                    {project.status === "em-desenvolvimento" && (
                      <span className="wayfinding-label text-rua-ink/70">Em construção</span>
                    )}
                  </div>
                  <h2 className="mt-3 font-display text-3xl font-extrabold text-rua md:text-4xl">
                    <Link href={`/projetos/${project.slug}`} className="after:absolute after:inset-0">
                      {project.cliente}
                    </Link>
                  </h2>
                  <p className="mt-2 max-w-2xl font-sans text-base text-rua-ink/80">{project.sintese}</p>
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
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
