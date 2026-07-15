/**
 * CONFIG CENTRAL — fonte única de verdade (Creative Direction §12)
 * Nenhum outro arquivo do projeto deve conter dados de contato hardcoded.
 * Itens [PENDENTE] restantes: domínio final e URL da CodeChain.
 */

export const site = {
  name: "Estúdio Rua",
  legalName: "Estúdio Rua Design",
  domain: "https://estudiorua.com.br", // [PENDENTE] confirmar domínio
  description:
    "Estúdio criativo autoral de branding e design digital. Traduzimos o olhar, a linguagem e o ritmo de cada marca em identidades com presença.",
  locale: "pt-BR",

  contact: {
    whatsapp: "5513991688000",
    phoneDisplay: "(13) 99168-8000",
    email: "olaestudiorua@gmail.com",
    address: {
      street: "Rua Luiz Antonio de Andrade Vieira, 216 — Boqueirão",
      city: "Praia Grande",
      state: "SP",
      zip: "11701-040",
      mapsUrl:
        "https://www.google.com/maps/search/?api=1&query=Rua+Luiz+Antonio+de+Andrade+Vieira+216+Boqueir%C3%A3o+Praia+Grande+SP",
    },
  },

  social: {
    instagram: "https://www.instagram.com/estudioruadesign",
    linkedin: "https://www.linkedin.com/company/estudio-rua/",
  },

  developer: {
    name: "CodeChain Automações",
    url: "https://codechain.com.br", // [PENDENTE] confirmar URL final
  },
} as const;

/**
 * Mensagens de WhatsApp pré-preenchidas por contexto (CD §6).
 * Cada ponto de conversão inicia a conversa já qualificada.
 */
export const whatsappContexts = {
  hero: "Olá, Estúdio Rua! Quero começar uma conversa sobre um projeto.",
  servicos: "Olá! Vi os serviços de vocês no site e quero entender qual faz sentido para a minha marca.",
  projetos: "Olá! Vi os projetos de vocês no site e quero conversar sobre a minha marca.",
  convite: "Olá! Quero agendar um papo de 15 minutos com o Estúdio Rua.",
  contato: "Olá, Estúdio Rua! Cheguei pelo site e quero iniciar um projeto.",
  flutuante: "Olá, Estúdio Rua! Estou navegando no site e quero tirar uma dúvida.",
} as const;

export type WhatsappContext = keyof typeof whatsappContexts;

export function whatsappLink(context: WhatsappContext): string {
  const message = encodeURIComponent(whatsappContexts[context]);
  return `https://wa.me/${site.contact.whatsapp}?text=${message}`;
}

export const nav = [
  { label: "Sobre", href: "/#manifesto" },
  { label: "Serviços", href: "/#servicos" },
  { label: "Processo", href: "/#processo" },
  { label: "Projetos", href: "/#projetos" },
  { label: "Contato", href: "/#contato" },
] as const;
