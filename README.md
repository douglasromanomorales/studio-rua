# Estúdio Rua — Site institucional

Next.js 15 · React 19 · TypeScript · Tailwind CSS · Framer Motion
Direção criativa: `creative-direction-studio-rua.md` (v1.2 — documento definitivo, fonte de toda decisão de design).

Status: **Release Final** — pronto para deploy. Ver `RELEASE-FINAL-CHECKLIST.md` para a auditoria completa desta fase.

---

## Instalação e desenvolvimento local

Pré-requisito: Node.js 18.18 ou superior (recomendado: 20 LTS).

```bash
npm install
npm run dev
```

Abre em `http://localhost:3000`.

## Build de produção

```bash
npm run build
npm start
```

`npm run build` é o mesmo comando que o Vercel roda no deploy. Rodar localmente antes de subir é a forma mais rápida de pegar qualquer erro de ambiente antes da publicação.

## Lint

```bash
npm run lint
```

---

## Deploy no Vercel

O projeto não precisa de nenhuma configuração manual — é um projeto Next.js 15 padrão (App Router), e o Vercel detecta e builda automaticamente.

1. Suba este repositório para o GitHub.
2. No [vercel.com](https://vercel.com), clique em **Add New → Project** e importe o repositório.
3. Framework Preset: **Next.js** (detectado automaticamente — não mexer).
4. Build Command / Output Directory / Install Command: deixar em branco (usa os defaults do Next.js).
5. Antes de clicar em Deploy, confirme os itens da seção "Pendências de dados reais" abaixo — em especial o domínio final em `config/site.ts`, que afeta canonical URLs, Open Graph e o `sitemap.xml`.
6. Deploy.
7. Depois do primeiro deploy, em **Settings → Domains**, adicionar o domínio definitivo do Estúdio Rua.

Nenhuma variável de ambiente é necessária para o site funcionar como está. Se/quando o formulário de contato for conectado a um serviço de envio (Resend, Formspree, etc.), a chave de API desse serviço deverá ser adicionada em **Settings → Environment Variables**.

---

## Estrutura do projeto

```
app/                     Rotas (App Router)
  page.tsx                Home
  projetos/page.tsx       Índice de projetos
  projetos/[slug]/        Página de case individual
  not-found.tsx           404 (pombo Perdido)
  layout.tsx               Layout raiz, fontes, metadados, JSON-LD
  sitemap.ts / robots.ts   SEO técnico
  icon.svg                 Favicon (convenção nativa do Next 15)
components/
  sections/                Uma seção da Home ou de página = um arquivo
  ui/                       Componentes reutilizáveis (CTAs, pictogramas, split-flap, mapa, capa de case)
  pigeon/                   O personagem — sistema de estados (Pigeon.tsx)
config/site.ts             Fonte única de verdade: contato, redes, mensagens de WhatsApp por contexto
content/projects.ts        Conteúdo tipado dos cases — adicionar projeto = adicionar 1 objeto
```

## Pendências de dados reais (não são bugs — são decisões/assets que só o cliente final pode fornecer)

- **Domínio final** — `site.domain` em `config/site.ts`
- **URL final da CodeChain** — `site.developer.url` em `config/site.ts`
- **Endpoint do formulário de contato** — `components/sections/ContactForm.tsx` está pronto para plugar Resend, Formspree ou uma rota própria `/api/contato`; hoje ele valida e simula o envio
- **Fotografias de capa dos 4 cases** — preencher o campo `capa` em `content/projects.ts` com o caminho da foto (ex.: `/projetos/casa-nataly/capa.jpg`, arquivo colocado em `public/projetos/casa-nataly/capa.jpg`). **Importante:** essas fotos precisam ser obtidas diretamente com cada cliente (arquivo original em alta resolução) ou baixadas por vocês mesmos do Instagram oficial de cada um, com autorização de uso — isso não pode ser automatizado por mim por questão de direito autoral (o conteúdo publicado no Instagram pertence a cada marca/fotógrafo). A arquitetura (`components/ui/CaseCover.tsx`) já faz o swap automático do placeholder para a foto real assim que o campo for preenchido — zero mudança de componente.
- **Estágio real dos projetos em desenvolvimento** — as narrativas de Dra. Marlene Pantrigo e Pantrigo Advocacia em `content/projects.ts` foram escritas com uma suposição editorial de estágio (documentada no topo do arquivo); validar com o Studio Rua
- **Segmento duplicado** — Dra. Marlene Pantrigo e Pantrigo Advocacia agora compartilham o segmento "Jurídico" após a correção do case (ela é advogada, não médica). Se houver uma especialidade real que os diferencie, vale refletir isso no campo `segmento` de cada um.

## Regras de implementação (válidas para qualquer manutenção futura)

- Dados de contato **somente** em `config/site.ts` — nunca hardcoded em componentes.
- Toda seção deve responder às 4 perguntas do critério de aprovação da Creative Direction (§13) antes de ser considerada concluída.
- `prefers-reduced-motion` obrigatório em toda animação nova.
- Nenhuma cor fora do sistema de tokens do Tailwind config — `rua-40` é exclusivo para bordas/divisores/decoração, nunca para texto informativo (ver `RC-CHECKLIST.md` para o porquê).
- Alvos de toque ≥ 48px (`min-h-12`) em qualquer elemento interativo novo.

## Histórico de fases

| Fase | Escopo |
|---|---|
| 1 | Fundação, tokens, config central, Header, Hero (Painel de Embarque + pombo Guia), Manifesto, Footer, SEO base |
| 2 | Serviços (Painel de Linhas + pictogramas custom), Como Olhamos, Processo (Linha do Trajeto), dados reais de contato, Adendo semântico v1.1 |
| 3 | Projetos (4 clientes reais), `/projetos`, páginas de case, Convite, Contato, WhatsApp flutuante, 404 |
| 4 | Auditoria de qualidade: contraste WCAG, linguagem de marca, alvos de toque, safe-area, comportamento do pombo, narrativas reais para cases em desenvolvimento, arquitetura de capa de case, remoção do marquee (CD v1.2) |
| 5 (esta) | Release Candidate: revisão técnica completa, ESLint configurado, metadados completos (Twitter card, viewport/themeColor), favicon e OG art reais, verificação exaustiva de imports/rotas/JSON-LD |
