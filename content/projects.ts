/**
 * PROJETOS — estrutura de conteúdo tipada (CD §11.1 + Adendo v1.1-C)
 *
 * Adicionar o case nº 30 = adicionar 1 objeto neste arquivo. Zero redesign.
 * `segmento` é informação de primeira classe: a diversidade de segmentos
 * É o argumento da seção (prova de tradução).
 *
 * Template narrativo obrigatório: Desafio → Estratégia → Solução → Resultado.
 * Projetos em desenvolvimento contam a história até onde ela existe.
 *
 * ⚠️ [PENDENTE] As narrativas de Dra. Marlene Pantrigo e Pantrigo Advocacia
 * foram escritas como momentos reais de jornada (ancoradas nas etapas do
 * Processo — Escuta, Leitura, Expressão, Presença), a pedido do cliente,
 * para eliminar o placeholder genérico duplicado identificado na auditoria
 * de Fase 3. O ESTÁGIO ATRIBUÍDO A CADA PROJETO (Marlene: saindo da Leitura
 * para a Expressão · Pantrigo: saindo da Escuta para a Leitura) é uma
 * suposição editorial da CodeChain — validar com o Studio Rua o estágio
 * real de cada projeto antes do deploy e ajustar o texto se necessário.
 *
 * ⚠️ CORREÇÃO: Dra. Marlene é advogada, não médica — segmento corrigido de
 * "Saúde" para "Jurídico" e narrativa reescrita por completo. Nome exibido
 * atualizado para "Dra. Marlene Pantrigo" com base no handle do Instagram
 * oficial (@marlenepantrigo) — confirmar com o Studio Rua se esse é de fato
 * o nome de exibição correto. Consequência a validar com o cliente: agora
 * DOIS dos quatro cases (Marlene Pantrigo e Pantrigo Advocacia) compartilham
 * o segmento "Jurídico" — se houver uma especialidade real que os diferencie
 * (ex.: direito de família vs. direito empresarial), vale refletir isso nos
 * segmentos para preservar o argumento de diversidade da seção de Projetos.
 *
 * Copy da Casa Nataly e Cássia Lobão segue sujeita à validação de texto
 * institucional já sinalizada anteriormente.
 */

export type ProjectStatus = "no-ar" | "em-desenvolvimento";

export interface Project {
  slug: string;
  cliente: string;
  segmento: string;
  ano: number;
  parceria: boolean;
  status: ProjectStatus;
  featured: boolean;
  /** Frase-síntese exibida no card (a "manchete" do case). */
  sintese: string;
  /**
   * Caminho da imagem de capa em /public (ex.: "/projetos/casa-nataly/capa.jpg").
   * Ausente = renderiza o frame de mockup estilizado (placeholder do sistema,
   * CD §9). Preencher assim que os assets reais forem disponibilizados —
   * nenhuma mudança de componente necessária.
   */
  capa?: string;
  /** Instagram oficial do CLIENTE (não confundir com o do Studio Rua). */
  instagram: string;
  narrativa: {
    desafio: string;
    estrategia: string;
    solucao: string;
    resultado: string;
  };
}

export const projects: Project[] = [
  {
    slug: "casa-nataly-rodrigues",
    cliente: "Casa Nataly Rodrigues",
    segmento: "Beleza & bem-estar",
    ano: 2026,
    parceria: true,
    status: "no-ar",
    featured: true,
    sintese: "Um espaço de beleza traduzido em experiência digital com a mesma delicadeza do atendimento presencial.",
    instagram: "https://www.instagram.com/casanatalyrodrigues/",
    narrativa: {
      desafio:
        "A Casa Nataly Rodrigues oferece uma experiência presencial acolhedora e sofisticada — mas a presença digital não comunicava esse nível. O desafio: fazer o primeiro contato online transmitir a mesma sensação de entrar no espaço físico.",
      estrategia:
        "Em vez de um site de serviços, uma experiência editorial: ritmo calmo de navegação, linguagem visual delicada e uma jornada que apresenta o espaço antes de vender procedimentos — porque nesse segmento, confiança vem antes da conversão.",
      solucao:
        "Site institucional completo com direção de arte própria, movimento sutil e arquitetura pensada para agendamento direto — cada seção conduz naturalmente ao WhatsApp.",
      resultado:
        "Uma presença digital à altura do espaço físico, no ar e gerando agendamentos. O projeto foi desenvolvido em parceria com a CodeChain Automações.",
    },
  },
  {
    slug: "cassia-lobao",
    cliente: "Cássia Lobão Estúdio Criativo",
    segmento: "Estúdio criativo",
    ano: 2026,
    parceria: true,
    status: "no-ar",
    featured: true,
    sintese: "Uma marca criativa apresentada com a autoralidade que ela mesma entrega aos próprios clientes.",
    instagram: "https://www.instagram.com/cassialobao.estudiocriativo/",
    narrativa: {
      desafio:
        "Comunicar o trabalho de um estúdio criativo é um desafio duplo: o site precisa provar, na própria forma, a qualidade que promete no discurso. Qualquer solução genérica desmentiria a marca.",
      estrategia:
        "Deixar o trabalho falar: hierarquia que coloca o portfólio no centro, identidade visual respeitada à risca e uma navegação com personalidade — do jeito que a própria Cássia constrói para os clientes dela.",
      solucao:
        "Site autoral com refinamento de nível internacional em design e movimento, construído sobre a identidade existente da marca sem diluí-la.",
      resultado:
        "Uma vitrine digital coerente com o nível do estúdio, no ar. Projeto desenvolvido em parceria com a CodeChain Automações.",
    },
  },
  {
    slug: "dra-marlene",
    cliente: "Dra. Marlene Pantrigo",
    segmento: "Jurídico",
    ano: 2026,
    parceria: false,
    status: "em-desenvolvimento",
    featured: true,
    sintese: "Credibilidade jurídica construída com proximidade — não com frieza institucional.",
    instagram: "https://www.instagram.com/marlenepantrigo/",
    narrativa: {
      desafio:
        "No meio jurídico, a maioria das marcas escolhe entre parecer técnica demais ou informal demais. O desafio da Dra. Marlene: transmitir segurança jurídica e proximidade ao mesmo tempo, sem recorrer aos clichês visuais que o mercado repete há décadas.",
      estrategia:
        "Construir a identidade a partir do jeito real de atender: clareza no lugar de jargão, presença próxima no lugar de distância institucional, e uma comunicação que explica em vez de impressionar — credibilidade que se sente antes de precisar ser declarada.",
      solucao:
        "O projeto já passou pela Escuta e pela Leitura — a imersão na prática e no público da Dra. Marlene e a tradução dessa vivência em direção de marca estão fechadas. Agora entra na etapa de Expressão: identidade visual e presença digital ganhando forma a partir do que foi ouvido.",
      resultado:
        "Ainda não é o resultado final — é o meio do caminho. A próxima parada é a Presença: lançamento e acompanhamento. Essa história continua.",
    },
  },
  {
    slug: "pantrigo-advocacia",
    cliente: "Pantrigo Advocacia",
    segmento: "Jurídico",
    ano: 2026,
    parceria: false,
    status: "em-desenvolvimento",
    featured: true,
    sintese: "Tradição jurídica com linguagem contemporânea — sem clichês de coluna grega.",
    instagram: "https://www.instagram.com/pantrigoadvocacia/",
    narrativa: {
      desafio:
        "O mercado jurídico repete os mesmos códigos visuais há décadas. A Pantrigo precisava comunicar seriedade sem se parecer com todos os concorrentes.",
      estrategia:
        "Manter o rigor que o segmento exige e trocar os clichês por uma linguagem própria: tipografia contemporânea, comunicação direta e identidade com presença.",
      solucao:
        "A etapa de Escuta está concluída — a imersão no escritório, no público e no posicionamento já aconteceu. O projeto está agora na Leitura: traduzindo o que foi ouvido em direção de marca, antes de qualquer traço definitivo.",
      resultado:
        "Ainda no início da rota, com direção clara. As próximas paradas são Expressão e Presença — o antes e o depois dessa marca ainda vão ficar bem diferentes um do outro.",
    },
  },
];

export const segments = Array.from(new Set(projects.map((p) => p.segmento)));

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getNextProject(slug: string): Project {
  const index = projects.findIndex((p) => p.slug === slug);
  return projects[(index + 1) % projects.length];
}
