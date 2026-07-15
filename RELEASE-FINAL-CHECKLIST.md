# CHECKLIST — RELEASE FINAL
**Estúdio Rua · Site institucional**
CodeChain Automações · Julho 2026

## Transparência sobre o ambiente

Este projeto foi desenvolvido num ambiente **sem acesso à internet** (confirmado nesta sessão: `curl https://registry.npmjs.org` retorna `403 host_not_allowed` do proxy de rede; sem cache de pacotes; `next` e `framer-motion` não existem em lugar nenhum do sistema). Não foi possível rodar `npm install` / `npm run build` / `npm run lint` de verdade aqui, e isso não está sendo apresentado como se tivesse sido feito.

Em compensação, para esta fase eu construí um ambiente de verificação de tipos com **stubs reais das APIs exatas usadas no projeto** — React 19 (`useState`, `useEffect`, `useRef` com as mesmas sobrecargas que pegaram o bug do `useRef` corrigido numa fase anterior), Next.js 15 (`Metadata`, `Viewport`, `Link`, `Image`, `notFound`, `next/font/google`), Framer Motion (`motion`, `useReducedMotion`, `whileHover`) — e rodei o compilador TypeScript estrito contra **o projeto inteiro de uma vez** (`app/`, `components/`, `config/`, `content/`, `lib/`), não arquivo por arquivo como nas fases anteriores.

**Resultado: 0 erros.** Isso é substancialmente mais forte que os checks anteriores porque há inferência de tipo real acontecendo — não é mais "ignorar erro de módulo não encontrado".

**O que isso não substitui:** `npm run build` real. O primeiro `npm install && npm run build` no seu ambiente (ou o do próprio Vercel, no deploy) é o que fecha essa lacuna definitivamente.

---

## ✅ Checklist executado

| Item pedido | Resultado |
|---|---|
| Validar todos os imports | ✅ 100% dos imports `@/...` resolvidos programaticamente contra o filesystem — nenhum quebrado |
| Validar todas as rotas | ✅ 5 rotas do App Router inventariadas: `/`, `/projetos`, `/projetos/[slug]`, `layout.tsx`, `not-found.tsx` — todas com `params` no padrão Promise do Next 15 onde aplicável |
| Validar todos os componentes | ✅ Nenhum componente órfão (criado e nunca importado) |
| Validar tipagem TypeScript | ✅ 0 erros em check estrito com stubs reais das APIs (ver acima) |
| Validar build de produção | ⚠️ Não executável neste sandbox (sem rede) — validação de tipo real feita como substituto mais próximo possível; `npm run build` real fica para o seu ambiente/Vercel |
| Validar Next.js | ✅ App Router puro, convenções corretas (`page.tsx`, `layout.tsx`, `not-found.tsx`, `sitemap.ts`, `robots.ts`, `icon.svg`), `params` assíncrono corrigido |
| Validar Tailwind | ✅ `tailwind.config.ts` consistente com os tokens usados no código; nenhuma classe fora do sistema de cores da marca |
| Validar Framer Motion | ✅ Uso correto de `whileInView`/`whileHover`/`useReducedMotion`; conflito de `transform` entre scroll-reveal e hover resolvido nesta fase |
| Validar metadata | ✅ Title template, description, canonical, Open Graph, Twitter card, `viewport`/`themeColor` |
| Validar JSON-LD | ✅ Objeto `ProfessionalService` executado e testado com `JSON.parse()` — sintaticamente válido |
| Validar sitemap | ✅ `sitemap.ts` inclui Home + `/projetos` + todos os cases dinamicamente |
| Validar robots | ✅ `robots.ts` aponta para o sitemap correto |
| Validar favicon | ✅ `app/icon.svg` (convenção nativa Next 15) |
| Validar Open Graph | ✅ `public/og.png` real, 1200×630, gerado e verificado |
| Validar links internos | ✅ Todas as âncoras do menu (`/#manifesto`, `/#servicos`, `/#processo`, `/#projetos`, `/#contato`) batem com IDs reais na Home; todas as rotas dinâmicas (`/projetos/[slug]`) resolvem contra o conteúdo real |
| Validar links externos | ✅ 11 links `target="_blank"` no projeto — 100% com `rel="noopener noreferrer"` |
| Validar responsividade | ✅ Revisão de código: breakpoints `md:` consistentes, grid mobile-first, menu fullscreen mobile, alvos de toque ≥48px |
| Validar acessibilidade | ✅ Contraste WCAG AA recalculado e corrigido (fase anterior), `aria-hidden` correto nos cartazes decorativos, `prefers-reduced-motion` sistêmico, foco visível |
| Validar Core Web Vitals | ✅ Por revisão de código: fontes self-hosted via `next/font` com `swap`, zero imagens não otimizadas acima da dobra nos cartazes (SVG/CSS puro), `next/image` só quando há foto real |
| Remover arquivos temporários | ✅ Nenhum `.bak`/`.tmp`/`.DS_Store`/`.orig` no projeto |
| Remover código morto | ✅ Nenhuma função ou export não utilizado encontrado |
| Remover componentes não utilizados | ✅ Confirmado junto com órfãos acima |
| Remover imports não utilizados | ✅ Varredura automática — nenhum |
| Confirmar ausência de placeholder antigo | ✅ Nenhuma sigla `CN`/`CL`/`DM`/`PA` isolada restante (checado com word-boundary) |
| Confirmar ausência de referência médica (Dra. Marlene) | ✅ Segmento = "Jurídico", nenhuma menção a "médic-" no código (fora do comentário que documenta a própria correção) |

## Confirmações explícitas pedidas antes do .zip

- ✅ **`package.json` está na raiz do projeto** — confirmado em extração limpa
- ✅ **A pasta `app/` está na raiz** — confirmado
- ✅ **A pasta `public/` está na raiz** — confirmado
- ✅ **O Vercel reconhecerá automaticamente como Next.js** — `package.json` declara `"next"` como dependência, há `next.config.js` e estrutura `app/` válida: os três sinais que o Vercel usa para detecção automática de framework
- ✅ **Root Directory correto é `./`** — o zip não tem pasta-wrapper; extrair e apontar a raiz do repositório resultante é suficiente
- ⚠️ **Compila em produção sem erros** — verdadeiro no nível de tipos (verificado como acima); build real do Next.js (bundling, minificação, geração de rotas estáticas) não pôde ser executado neste ambiente

## ⚠️ Item que não pôde ser incluído: `package-lock.json`

Você pediu explicitamente esse arquivo na raiz do zip. Não incluí um, e a razão é importante: um lockfile descreve a árvore de dependências **exata** resolvida por um `npm install` real (versões travadas, hashes de integridade). Como nunca rodei `npm install` de verdade aqui, qualquer `package-lock.json` que eu gerasse à mão seria fabricado — hashes inventados que poderiam falhar verificação de integridade ou, pior, mascarar um problema real. Isso teria mais chance de causar um erro no seu deploy do que simplesmente não ter o arquivo.

**Não é um bloqueio:** a ausência de lockfile não impede o Vercel de fazer deploy — ele roda `npm install` normalmente no primeiro build e gera um lockfile válido sozinho. Depois desse primeiro deploy, se quiser fixar as versões, rode `npm install` localmente uma vez e comite o `package-lock.json` gerado no repositório.

---

## Comandos para rodar no seu ambiente (fecha a lacuna acima)

```bash
npm install
npm run build
npm run lint
```

Com o resultado de 0 erros de tipo já confirmado nesta fase, a expectativa é que esses três comandos passem sem necessidade de ajuste. Se algo divergir, me manda a mensagem de erro exata — os últimos dois erros reais que você encontrou (params do Next 15 e a assinatura do `useRef`) foram corrigidos e ambos os padrões foram varridos no projeto inteiro para garantir que não se repetem em nenhum outro arquivo.
