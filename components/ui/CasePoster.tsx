/**
 * CARTAZ EDITORIAL — composição gráfica autoral, não um placeholder (§9 revisado)
 *
 * Enquanto não existe fotografia oficial de um projeto, o card não mostra
 * uma caixa vazia nem iniciais do cliente — mostra uma peça gráfica
 * construída com o próprio sistema visual do Studio Rua: tipografia,
 * grid, linhas, stickers e os pictogramas da marca. A ausência da foto
 * é uma decisão de direção de arte, não uma pendência visível.
 *
 * SISTEMA DE COLEÇÃO (refinamento de acabamento editorial):
 * Os 4 templates têm personalidade própria na "zona de personalidade"
 * central, mas compartilham uma gramática fixa via <PosterFrame> —
 * margens, posição do selo (sempre canto superior direito, mesmo ícone,
 * mesma rotação -8°), posição da edição (sempre canto inferior direito,
 * mesmo estilo), peso da régua (sempre 1px/48px). É essa moldura comum
 * que faz a coleção parecer assinada pelo mesmo diretor de arte, mesmo
 * com quatro composições internas distintas.
 *
 * Projetos futuros fora do REGISTRY caem no fallback: alternam pelos
 * mesmos 4 templates por índice — nunca em caixa cinza ou sigla.
 */

import type { ReactNode } from "react";
import { PictogramEye, PictogramSpark } from "@/components/ui/Pictograms";
import type { Project } from "@/content/projects";

interface PosterProps {
  project: Project;
  index: number; // posição no array — vira o número de edição "0X/04" e escolhe o template
}

function edition(index: number, total: number) {
  return `${String(index + 1).padStart(2, "0")}/${String(total).padStart(2, "0")}`;
}

/** Selo — o mesmo ícone, mesmo tamanho, mesma rotação em toda a coleção. */
function PosterSeal({ dark }: { dark?: boolean }) {
  return <PictogramSpark size={18} className={`rotate-[-8deg] ${dark ? "text-white" : "text-rua"}`} />;
}

/**
 * Moldura compartilhada — a gramática fixa da coleção.
 * `background` é a camada decorativa de cada template (ícone gigante,
 * réguas, marcas de registro), renderizada por trás do conteúdo.
 * `align` controla só a zona de personalidade: "end" (esquerda, ancorado
 * embaixo — A/B) ou "center" (simétrico — C/D). Selo e edição nunca mudam.
 */
function PosterFrame({
  segmento,
  index,
  dark = false,
  align = "end",
  background,
  className = "",
  children,
}: {
  segmento: string;
  index: number;
  dark?: boolean;
  align?: "end" | "center";
  background?: ReactNode;
  className?: string;
  children: ReactNode;
}) {
  const labelColor = dark ? "text-white/70" : "text-rua";
  const editionColor = dark ? "text-white/50" : "text-rua-ink/40";
  const contentAlign = align === "center" ? "items-center justify-center text-center" : "justify-end";

  return (
    <div className={`relative h-full w-full overflow-hidden ${className}`}>
      {background}
      <div className="relative flex h-full flex-col p-5 md:p-7">
        <div className="flex items-start justify-between">
          <span className={`wayfinding-label ${labelColor}`}>{segmento}</span>
          <PosterSeal dark={dark} />
        </div>
        <div className={`flex flex-1 flex-col ${contentAlign}`}>{children}</div>
      </div>
      <span className={`wayfinding-label absolute bottom-4 right-5 md:bottom-5 md:right-7 ${editionColor}`}>
        {edition(index, 4)}
      </span>
    </div>
  );
}

/** Template 1 — plano claro, ícone gigante sangrando o canto, nome em duas escalas. */
function PosterEditorial({ project, index }: PosterProps) {
  const [first, ...rest] = project.cliente.split(" ");
  return (
    <PosterFrame
      segmento={project.segmento}
      index={index}
      className="bg-white"
      background={
        <PictogramEye size={255} className="pointer-events-none absolute -bottom-12 -right-12 text-rua/[0.07]" />
      }
    >
      <div className="mb-3 h-px w-12 bg-rua" aria-hidden="true" />
      <p className="font-display text-3xl font-extrabold leading-[0.95] text-rua md:text-4xl">{first}</p>
      {rest.length > 0 && (
        <p className="font-display text-xl font-bold leading-tight text-rua-ink/60 md:text-2xl">{rest.join(" ")}</p>
      )}
    </PosterFrame>
  );
}

/** Template 2 — invertido em azul-rua, composição diagonal, energia de estúdio criativo. */
function PosterInvertida({ project, index }: PosterProps) {
  return (
    <PosterFrame
      segmento={project.segmento}
      index={index}
      dark
      className="bg-rua"
      background={
        <PictogramSpark
          size={200}
          className="pointer-events-none absolute -left-16 -top-16 rotate-[12deg] text-white/[0.05]"
        />
      }
    >
      <div className="rotate-[-1.5deg]">
        <p className="max-w-[85%] font-display text-2xl font-extrabold leading-[1.02] text-white md:text-3xl">
          {project.cliente}
        </p>
        <div className="mt-3 h-px w-12 bg-white/60" aria-hidden="true" />
      </div>
    </PosterFrame>
  );
}

/** Template 3 — grid de regras finas tipo pauta/ledger, nome centrado. */
function PosterPautada({ project, index }: PosterProps) {
  return (
    <PosterFrame
      segmento={project.segmento}
      index={index}
      align="center"
      className="bg-white"
      background={
        <div className="pointer-events-none absolute inset-0 flex justify-between px-8 md:px-10" aria-hidden="true">
          {Array.from({ length: 5 }).map((_, i) => (
            <span key={i} className="h-full w-px bg-rua-40/30" />
          ))}
        </div>
      }
    >
      <p className="font-display text-[27px] font-extrabold leading-tight text-rua md:text-[33px]">
        {project.cliente}
      </p>
      <div className="mx-auto mt-3 h-px w-12 bg-rua" aria-hidden="true" />
    </PosterFrame>
  );
}

/** Template 4 — placa/nameplate institucional, moldura, marcas de registro nos cantos. */
function PosterPlaca({ project, index }: PosterProps) {
  const corners = [
    "left-3 top-3 border-l-2 border-t-2",
    "right-3 top-3 border-r-2 border-t-2",
    "left-3 bottom-3 border-l-2 border-b-2",
    "right-3 bottom-3 border-r-2 border-b-2",
  ];
  return (
    <PosterFrame
      segmento={project.segmento}
      index={index}
      align="center"
      className="bg-rua-mist"
      background={corners.map((pos) => (
        <span key={pos} aria-hidden="true" className={`pointer-events-none absolute h-3 w-3 border-rua/40 ${pos}`} />
      ))}
    >
      <div className="w-full max-w-[93%] border-2 border-rua bg-white px-6 py-7 text-center md:px-8 md:py-9">
        <p className="font-display text-xl font-extrabold uppercase tracking-wide text-rua md:text-2xl">
          {project.cliente}
        </p>
        <div className="mx-auto mt-3 h-px w-12 bg-rua-40" aria-hidden="true" />
      </div>
    </PosterFrame>
  );
}

const TEMPLATES = [PosterEditorial, PosterInvertida, PosterPautada, PosterPlaca];

/**
 * Registro autoral fixo para os 4 clientes atuais — cada um recebeu o
 * template pensado especificamente para o seu posicionamento. Qualquer
 * projeto futuro fora deste registro cai no fallback abaixo, que ainda
 * assim nunca é uma caixa cinza: alterna pelos mesmos 4 templates.
 */
const REGISTRY: Record<string, number> = {
  "casa-nataly-rodrigues": 0, // claro, ícone de olhar — delicadeza do espaço
  "cassia-lobao": 1, // invertido, diagonal — energia de estúdio criativo
  "dra-marlene": 2, // pautada — clareza e proximidade jurídica
  "pantrigo-advocacia": 3, // placa institucional — tradição com linguagem contemporânea
};

export function CasePoster({ project, index }: PosterProps) {
  const templateIndex = REGISTRY[project.slug] ?? index % TEMPLATES.length;
  const Template = TEMPLATES[templateIndex];
  return <Template project={project} index={index} />;
}
