/**
 * MAPA ESTILIZADO — não usa embed do Google Maps (diretriz explícita §6 + §7).
 * SVG original nas cores da marca: grid de ruas + pin, no vocabulário
 * de wayfinding do sistema. Custo de performance: ~0 (SVG inline).
 */

interface StyledMapProps {
  className?: string;
}

export function StyledMap({ className = "" }: StyledMapProps) {
  return (
    <svg
      viewBox="0 0 400 280"
      className={className}
      role="img"
      aria-label="Ilustração de mapa indicando a localização do Estúdio Rua no Boqueirão, Praia Grande"
    >
      <rect width="400" height="280" fill="#EEF1FD" />
      {/* Grid de ruas */}
      <g stroke="#A5B0F3" strokeWidth="2">
        <path d="M0 40h400M0 100h400M0 160h400M0 220h400" />
        <path d="M60 0v280M140 0v280M230 0v280M320 0v280" />
      </g>
      {/* Avenida principal em destaque */}
      <path d="M0 160h400" stroke="#1D3AE0" strokeWidth="6" />
      <path d="M140 0v280" stroke="#1D3AE0" strokeWidth="6" />

      {/* Pin de localização */}
      <g transform="translate(140 160)">
        <circle r="34" fill="#1D3AE0" opacity="0.12" />
        <path
          d="M0 -26C13 -26 23 -16 23 -3C23 14 0 30 0 30S-23 14 -23 -3C-23 -16 -13 -26 0 -26Z"
          fill="#1D3AE0"
          stroke="#FFFFFF"
          strokeWidth="3"
        />
        <circle r="7" fill="#FFFFFF" />
      </g>
    </svg>
  );
}
