/**
 * O POMBO — sistema de personagem (Creative Direction §4)
 *
 * Ilustração vetorial original no estilo de linha da marca (traço uniforme,
 * terminais arredondados, monocromático azul-rua). Desenhada para ser
 * substituída 1:1 pelo SVG oficial do mascote quando o Studio Rua
 * disponibilizar os assets — a API do componente não muda.
 *
 * Regras invioláveis implementadas aqui:
 * - aria-hidden: decorativo funcional (CD §12)
 * - Animações com fim e estado de repouso (Guia olha para baixo 2x e para)
 * - prefers-reduced-motion neutraliza tudo via globals.css
 */

type PigeonState = "guia" | "aponta" | "static";

interface PigeonProps {
  state?: PigeonState;
  /** Largura em px. CD §4.2: 48–96 em contextos funcionais. */
  size?: number;
  className?: string;
}

export function Pigeon({ state = "static", size = 88, className = "" }: PigeonProps) {
  const headClass = state === "guia" ? "pigeon-head-guia" : "";
  const eyeClass = state === "guia" ? "pigeon-eye" : "";
  // Estado Aponta (CD §4.1): pose estática — corpo inclinado na direção
  // do próximo destino. Comunica por postura, nunca por balão (regra 5).
  const bodyStyle =
    state === "aponta" ? { transform: "rotate(-8deg) translateY(4px)" } : undefined;

  return (
    <svg
      viewBox="0 0 120 120"
      width={size}
      height={size}
      aria-hidden="true"
      focusable="false"
      className={className}
      style={bodyStyle}
      fill="none"
      stroke="#1D3AE0"
      strokeWidth="4"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {/* Cauda */}
      <path d="M22 62 L6 50 M24 68 L6 62 M23 74 L8 74" />

      {/* Corpo */}
      <path
        d="M22 60
           C22 44 40 36 58 38
           C60 38 62 38 64 39
           C78 42 86 54 84 68
           C82 84 68 94 52 92
           C34 90 22 78 22 60 Z"
        fill="#FFFFFF"
      />

      {/* Asa */}
      <path
        d="M40 58
           C46 50 60 50 66 58
           C62 68 48 72 38 68
           C38 64 38 61 40 58 Z"
        fill="#FFFFFF"
      />

      {/* Pernas + tênis */}
      <path d="M50 92 L50 100" />
      <path d="M66 90 L66 100" />
      <path d="M44 104 C44 100 47 99 50 100 L56 100 C58 100 58 104 56 105 L46 105 C45 105 44 105 44 104 Z" fill="#FFFFFF" />
      <path d="M60 104 C60 100 63 99 66 100 L72 100 C74 100 74 104 72 105 L62 105 C61 105 60 105 60 104 Z" fill="#FFFFFF" />

      {/* Cabeça — grupo animável (estado Guia) */}
      <g className={headClass}>
        {/* Pescoço + cabeça */}
        <path
          d="M64 39
             C64 28 72 20 82 20
             C92 20 100 28 100 38
             C100 46 94 52 86 53
             C76 54 66 50 64 39 Z"
          fill="#FFFFFF"
        />
        {/* Bico */}
        <path d="M100 34 L112 38 L100 43" fill="#FFFFFF" />
        {/* Olho */}
        <g className={eyeClass}>
          <circle cx="86" cy="34" r="3.5" fill="#1D3AE0" stroke="none" />
        </g>
        {/* Boné */}
        <path d="M70 22 C72 12 92 12 94 22 Z" fill="#1D3AE0" stroke="#1D3AE0" />
        <path d="M92 20 L108 18" strokeWidth="5" />
      </g>
    </svg>
  );
}
