/**
 * PICTOGRAMAS DE SERVIÇO — Creative Direction §3.4 + Adendo v1.1
 *
 * Desenhados do zero na linguagem de sinalização da marca:
 * grid 24px, stroke 2.5, terminais arredondados — a mesma espessura
 * de linha do pombo. Cada um traduz a transformação do serviço,
 * não a ferramenta ("olhar", não "lupa"; "presença", não "megafone").
 */

interface PictogramProps {
  size?: number;
  className?: string;
}

const base = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2.5,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": true,
  focusable: false,
} as const;

/** Branding — o selo/faísca da marca: identidade que marca posição. */
export function PictogramSpark({ size = 32, className }: PictogramProps) {
  return (
    <svg {...base} width={size} height={size} className={className}>
      <path d="M12 3v5M12 16v5M3 12h5M16 12h5M6 6l3.5 3.5M14.5 14.5L18 18M18 6l-3.5 3.5M9.5 14.5L6 18" />
    </svg>
  );
}

/** Identidade visual — o olhar: enxergar a verdade da marca. */
export function PictogramEye({ size = 32, className }: PictogramProps) {
  return (
    <svg {...base} width={size} height={size} className={className}>
      <path d="M2.5 12C5 7 8.5 4.5 12 4.5S19 7 21.5 12C19 17 15.5 19.5 12 19.5S5 17 2.5 12Z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}

/** Web design — rota que converte: trajeto com chegada. */
export function PictogramRoute({ size = 32, className }: PictogramProps) {
  return (
    <svg {...base} width={size} height={size} className={className}>
      <circle cx="5" cy="19" r="2.2" />
      <path d="M7.2 19H15a4 4 0 0 0 0-8H9a4 4 0 0 1 0-8h4" />
      <path d="M15.5 3h4v4" />
      <path d="M19.5 3l-5 5" />
    </svg>
  );
}

/** Social media — presença: um ponto que irradia na cidade. */
export function PictogramSignal({ size = 32, className }: PictogramProps) {
  return (
    <svg {...base} width={size} height={size} className={className}>
      <circle cx="12" cy="14" r="2.2" fill="currentColor" stroke="none" />
      <path d="M8.5 17.5a5 5 0 0 1 0-7M15.5 10.5a5 5 0 0 1 0 7" />
      <path d="M5.5 20.5a9 9 0 0 1 0-13M18.5 7.5a9 9 0 0 1 0 13" />
    </svg>
  );
}
