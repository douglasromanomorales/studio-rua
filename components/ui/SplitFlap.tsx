"use client";

/**
 * PAINEL SPLIT-FLAP — assinatura do Hero (Creative Direction §10)
 *
 * Painel de embarque reconstruído em CSS transforms puros:
 * cada célula gira em rotateX com stagger de 40ms, trocando o
 * caractere no meio do giro. Sem canvas, sem vídeo, sem libs.
 *
 * A11y: aria-live="off" — a troca de palavras é decorativa;
 * o conteúdo semântico está na headline do Hero.
 * prefers-reduced-motion: troca instantânea, sem giro (globals.css).
 */

import { useEffect, useRef, useState } from "react";

interface SplitFlapProps {
  words: readonly string[];
  /** Intervalo entre trocas, em ms. CD §10: ~3.5s. */
  interval?: number;
  className?: string;
}

const FLIP_HALF_MS = 280; // deve espelhar .flap-card em globals.css
const STAGGER_MS = 40;

export function SplitFlap({ words, interval = 3500, className = "" }: SplitFlapProps) {
  const cellCount = Math.max(...words.map((w) => w.length));
  const [wordIndex, setWordIndex] = useState(0);
  const [flipping, setFlipping] = useState(false);
  const reducedMotion = useRef(false);

  useEffect(() => {
    reducedMotion.current = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const timer = setInterval(() => {
      if (reducedMotion.current) {
        setWordIndex((i) => (i + 1) % words.length);
        return;
      }
      setFlipping(true);
      // Troca o caractere no ponto em que a última célula está de perfil
      setTimeout(() => {
        setWordIndex((i) => (i + 1) % words.length);
        setFlipping(false);
      }, FLIP_HALF_MS + STAGGER_MS * cellCount);
    }, interval);

    return () => clearInterval(timer);
  }, [words.length, interval, cellCount]);

  const word = words[wordIndex].padEnd(cellCount, " ");

  return (
    <span className={`inline-flex gap-1 ${className}`} aria-live="off">
      {Array.from(word).map((char, i) => (
        <span key={i} className="flap-cell inline-block">
          <span
            className={`flap-card flex h-[1.6em] w-[1.1em] items-center justify-center rounded-sm bg-rua font-display font-bold text-white ${
              flipping ? "is-flipping" : ""
            }`}
            style={{ transitionDelay: flipping ? `${i * STAGGER_MS}ms` : "0ms" }}
          >
            {char === " " ? "\u00A0" : char}
          </span>
        </span>
      ))}
    </span>
  );
}
