/**
 * MANIFESTO — primeira "avenida" azul (Creative Direction §11, seção 02)
 *
 * Pergunta respondida: "Quem são vocês?"
 * Bloco sólido de azul-rua ecoando a faixa do banner da marca.
 * Máximo de 2 avenidas na Home (esta é a 1ª).
 *
 * ⚠️ Copy proposta — refinar com o posicionamento real do Studio Rua
 * assim que os textos institucionais forem validados.
 */

export function Manifesto() {
  return (
    <section id="manifesto" className="bg-rua py-20 md:py-28" aria-labelledby="manifesto-title">
      <div className="block-container">
        <p className="wayfinding-label mb-8 text-white/80">Seção 02 — Quem somos</p>
        <h2 id="manifesto-title" className="max-w-5xl font-display text-display-lg font-bold text-white">
          Toda rua tem linguagem própria: um olhar, um gesto, um ritmo que só ela tem. Toda marca também.
        </h2>
        <p className="mt-8 max-w-2xl font-sans text-lg text-white/85">
          Somos um estúdio criativo autoral. Encontramos a linguagem de cada marca e a transformamos em identidade,
          expressão e presença — para negócios completamente diferentes entre si, cada um com o seu próprio jeito de
          ocupar a cidade.
        </p>
      </div>
    </section>
  );
}
