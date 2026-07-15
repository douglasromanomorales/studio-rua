/**
 * CAPA DO CASE — arquitetura pronta para os assets reais (CD §9 revisado)
 *
 * Sem `project.capa`: renderiza o Cartaz Editorial (components/ui/CasePoster.tsx)
 * — uma composição gráfica autoral construída com tipografia, grid, linhas
 * e os pictogramas da marca. Nunca uma caixa cinza, nunca sigla do cliente.
 * A ausência da foto é uma decisão de design, não uma pendência visível.
 *
 * Com `project.capa`: troca automaticamente para a fotografia real via
 * next/image, sem nenhuma mudança nos componentes que consomem isso.
 *
 * Adicionar o asset real = preencher `capa` em content/projects.ts com
 * o caminho da foto em /public. Zero redesign.
 */

import Image from "next/image";
import type { Project } from "@/content/projects";
import { CasePoster } from "@/components/ui/CasePoster";
import { projects } from "@/content/projects";

interface CaseCoverProps {
  project: Project;
  /** Prioriza o carregamento — usar apenas na imagem acima da dobra da página do case. */
  priority?: boolean;
  className?: string;
}

export function CaseCover({ project, priority = false, className = "" }: CaseCoverProps) {
  if (project.capa) {
    return (
      <div className={`relative overflow-hidden border-2 border-rua bg-white ${className}`}>
        <Image
          src={project.capa}
          alt={`Fotografia do projeto ${project.cliente}`}
          fill
          priority={priority}
          className="object-cover"
          sizes="(min-width: 768px) 50vw, 100vw"
        />
      </div>
    );
  }

  const index = projects.findIndex((p) => p.slug === project.slug);

  return (
    <div className={`relative overflow-hidden border-2 border-rua ${className}`} aria-hidden="true">
      <CasePoster project={project} index={index === -1 ? 0 : index} />
    </div>
  );
}
