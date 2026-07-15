import type { Config } from "tailwindcss";

/**
 * Sistema de tokens — Creative Direction §3
 * Duas cores de marca + derivados funcionais. Nenhuma cor nova entra no sistema.
 */
const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./content/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        rua: {
          DEFAULT: "#1D3AE0", // azul-rua — cor de marca
          ink: "#101E66", // azul-tinta — texto corrido, hover/pressed
          mist: "#EEF1FD", // azul-neblina — superfícies, seções alternadas
          40: "#A5B0F3", // azul-40 — bordas, divisores, disabled
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"], // Bricolage Grotesque
        sans: ["var(--font-sans)", "sans-serif"], // Archivo
      },
      fontSize: {
        // Escala de display — CD §3.2
        "display-xl": ["clamp(3rem, 7vw, 6rem)", { lineHeight: "0.97", letterSpacing: "-0.02em" }],
        "display-lg": ["clamp(2.5rem, 5vw, 4.5rem)", { lineHeight: "0.98", letterSpacing: "-0.02em" }],
        "display-md": ["clamp(2rem, 4vw, 3.5rem)", { lineHeight: "1.0", letterSpacing: "-0.01em" }],
        label: ["0.8125rem", { lineHeight: "1", letterSpacing: "0.08em" }],
        "label-sm": ["0.6875rem", { lineHeight: "1", letterSpacing: "0.08em" }],
      },
      maxWidth: {
        site: "90rem", // 1440px — CD §3.3
      },
      transitionTimingFunction: {
        // Easing padrão do sistema — chegada firme, sem bounce (CD §5)
        rua: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
      keyframes: {
        "cta-step": {
          "0%, 100%": { transform: "translateX(0)" },
          "50%": { transform: "translateX(4px)" },
        },
      },
      animation: {
        "cta-step": "cta-step 0.45s cubic-bezier(0.22, 1, 0.36, 1)",
      },
    },
  },
  plugins: [],
};

export default config;
