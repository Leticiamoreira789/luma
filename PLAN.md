# PLAN.md: Buzzvel Front-End Coding Challenge (Nov 2026)

> **Como usar:** coloque este arquivo na raiz do projeto e diga ao Claude Code no VS Code:
> *"Leia o PLAN.md inteiro. Execute somente a Fase N, rode os checks dessa fase e pare para eu revisar."*
> Vá fase por fase. Não peça tudo de uma vez.

---

## 0. Requisitos do PDF (checklist de aceitação)

**Entrega:** uma página completa e responsiva, a partir do Figma, com **Next.js App Router, TypeScript e Tailwind CSS**.
**Figma:** https://www.figma.com/design/G0zSf6gyynwzEusOCgm2CM/Buzzvel-FE---Test-2026
**Prazo:** sexta-feira, **20/11/2026**. O horário e o fuso de corte estão no convite. Envio pelo formulário:
https://forms.clickup.com/6647387/f/6avjv-18455/PLUYAZ40HA3XTQOEFW

- [ ] **Todas** as seções do design desktop **e** mobile estão implementadas.
- [ ] O visual fica fiel ao design: tipografia, espaçamentos e imagens.
- [ ] Funciona em mobile, tablet e desktop.
- [ ] Os componentes são claros e reutilizáveis, com **props tipadas**.
- [ ] As interações mostradas no design funcionam e usam dados locais/mock (sem backend ou CMS).
- [ ] O HTML é semântico, os controles funcionam por teclado, as imagens têm `alt` e a página tem metadata.
- [ ] Imagens, fontes e carregamento são eficientes, e as animações respeitam `prefers-reduced-motion`.
- [ ] O repositório no GitHub é **público** e tem **README em inglês** com: instalação, execução e build; decisões, lacunas conhecidas e tempo gasto; ferramentas de IA usadas e como o resultado foi verificado.
- [ ] O build de produção (`npm run build`) passa, e a página foi conferida em mobile e desktop.
- [ ] Opcional: deploy na Vercel e screenshot do Lighthouse, que é rápido e conta pontos. Storybook e testes também são opcionais.

**Critérios de avaliação:** fidelidade ao design, responsividade, qualidade de código, interações funcionando, acessibilidade, performance e atenção a detalhes.
**Ambiguidades:** escolha algo razoável e **documente no README**.

---

## Fase 0: Extrair o design do Figma (manual, feita por você, ~30–40 min)

> ⚠️ **O conector do Figma (MCP) NÃO funciona com este arquivo.** O acesso a ele é só de visualização, e o MCP exige mais permissão (testei e deu "you don't have edit access"). Além disso, no plano Starter o MCP não está disponível para assento Full. Por isso o Claude Code vai trabalhar com **imagens e anotações exportadas por você**. Não perca tempo tentando configurar o MCP.

Abra o link no navegador, logada, e crie esta estrutura no projeto (depois da Fase 1, ou numa pasta temporária):

```
design-refs/
  desktop-full.png          # frame desktop inteiro, export PNG 1x
  mobile-full.png           # frame mobile inteiro, export PNG 2x
  desktop/01-header.png     # cada seção separada, PNG 2x (nome = ordem + seção)
  desktop/02-hero.png
  ...
  mobile/01-header.png
  ...
  notes.md                  # tokens e interações (modelo abaixo)
public/
  images/                   # fotos/ilustrações exportadas (PNG ou JPG 2x; o next/image otimiza)
  icons/                    # ícones e logo em SVG
```

**Como exportar com acesso só de visualização:** selecione o frame ou a camada, abra o painel direito, vá em **Export** (+), escolha o formato e clique em Export. Também dá para clicar com o botão direito e usar **Copy/Paste as → Copy as PNG/SVG**. Se o painel Export não aparecer, use `Ctrl+Shift+E` para exportar a seleção, ou tire prints de cada seção como último recurso.

**Modelo de `design-refs/notes.md`** (preencha clicando nas camadas e lendo o painel de propriedades e o texto):

```md
## Frames
- Desktop width: ____px | Mobile width: ____px | Content max-width: ____px | Side padding desktop/mobile: __/__px

## Fonts
- Headings: [família] pesos [__] | Body: [família] pesos [__]
- H1 desktop/mobile: __px/__px, line-height __, letter-spacing __
- H2 ... | Body ... | Small/Label ... | Button ...

## Colors (hex)
- primary: # | secondary: # | text: # | text-muted: # | background: # | surface: # | border: #

## Radius / Shadows
- buttons: __px | cards: __px | shadow: ____

## Sections (ordem)
1. Header/Nav: ...
2. Hero: ...
...

## Interactions (veja no modo Prototype ▶ e em variantes/estados no canvas)
- Menu mobile (hamburger) abre/fecha?
- Carrossel/slider? Setas, dots, autoplay?
- Tabs? Accordion/FAQ? Hover em cards/botões? Formulário (newsletter/contato)?
- Links âncora/scroll suave?
```

> Dica: o modo **Prototype (▶ Present)** revela interações que o canvas não mostra. Veja tudo nele antes de preencher a seção *Interactions*.

---

## Fase 1: Setup do projeto (~10 min)

```bash
npx create-next-app@latest buzzvel-fe-test --ts --tailwind --eslint --app --src-dir --import-alias "@/*" --use-npm
cd buzzvel-fe-test
npm install clsx
git init && git add -A && git commit -m "chore: bootstrap Next.js + TS + Tailwind"
```

Depois:
1. Copie `design-refs/`, `public/images/` e `public/icons/` para o projeto. Adicione `design-refs/` ao repositório: ele mostra o processo para quem avaliar e ajuda o Claude Code.
2. Crie um repositório **público** no GitHub e faça o push.
3. (Recomendado) Conecte o repo na **Vercel**. Assim cada push gera um preview e você ganha o "live preview" opcional sem esforço extra.

**Regras para o Claude Code nesta fase:**
- Não adicionar bibliotecas pesadas. Nada de UI kits, framer-motion ou libs de carrossel, a menos que a interação seja complexa demais. Para carrossel simples, usar CSS scroll-snap e um pouco de JS.
- `clsx` é a única dependência extra permitida, e serve para compor classes.
- Habilitar `"strict": true` no `tsconfig` (o create-next-app já faz isso).

---

## Fase 2: Design tokens, fontes e layout base (~20 min)

**Prompt para o Claude Code:**
> "Leia `design-refs/notes.md` e veja `design-refs/desktop-full.png` e `design-refs/mobile-full.png`. Configure os design tokens e o layout base conforme a Fase 2 do PLAN.md."

Tarefas:
1. **Tokens no Tailwind v4.** Em `src/app/globals.css`, use `@theme` com as cores (`--color-primary` etc.), as fontes (`--font-heading`, `--font-body`) e, se necessário, a escala de tamanhos do design (`--text-h1` etc.) e o `--breakpoint-*`. Se o projeto vier com Tailwind v3, use `tailwind.config.ts`.
2. **Fontes com `next/font`.** Use `next/font/google` se for fonte do Google, ou `next/font/local` com os arquivos em `src/fonts/`. Carregue só os pesos usados, com `display: "swap"`, e exponha como variáveis CSS.
3. **`src/app/layout.tsx`:**
   - `<html lang="en">`. Use o idioma do conteúdo do design: se o texto do Figma estiver em inglês, `en`.
   - `export const metadata: Metadata` com `title`, `description`, `openGraph` (título, descrição, imagem), `icons` e `metadataBase`.
   - `export const viewport: Viewport` com `themeColor`.
   - Um **skip link** ("Skip to content") apontando para `<main id="main">`.
4. **Estilos globais:** `scroll-behavior: smooth` só dentro de `@media (prefers-reduced-motion: no-preference)`; regra global de `prefers-reduced-motion: reduce` que zera as animações e transições; estilo de `:focus-visible` bem visível.
5. **Primitivos em `src/components/ui/`**, todos com props tipadas:
   - `Container` (max-width e padding lateral do design)
   - `Button`, com variantes conforme o design e prop `href`: renderiza `<Link>` quando há href e `<button>` quando não há
   - `SectionHeading` (eyebrow, título e subtítulo; o nível do heading vem por prop `as`)
   - `Icon` ou SVGs inline como componentes, se forem poucos

Check: `npm run lint && npx tsc --noEmit`.

---

## Fase 3: Seções estáticas (~2–3 h, o grosso do trabalho)

**Prompt para o Claude Code (uma ou duas seções por vez):**
> "Implemente as seções N e N+1 conforme a Fase 3 do PLAN.md. Use `design-refs/desktop/NN-*.png` e `design-refs/mobile/NN-*.png` como referência visual exata. Mobile-first."

Estrutura:
```
src/
  app/
    layout.tsx
    page.tsx              # só compõe as seções, na ordem do design
    globals.css
  components/
    ui/                   # primitivos reutilizáveis (Fase 2)
    layout/Header.tsx, Footer.tsx
    sections/Hero.tsx, Features.tsx, ...   # um arquivo por seção do Figma
  data/
    content.ts            # todo o texto, listas e cards, tipados (mock data)
  types/
    content.ts            # interfaces: NavItem, Feature, Testimonial, ...
```

Regras:
- **Mobile-first:** as classes base valem para o mobile, e `md:` (tablet, ~768px) e `lg:`/`xl:` (desktop) se aplicam por cima. Testar em **375, 768, 1024 e 1440 px**. O tablet não existe no Figma, então ele é decisão sua e vai documentado no README.
- **Conteúdo fora do JSX:** listas (nav, cards, depoimentos, links do footer) ficam em `src/data/content.ts`, tipadas, e os componentes recebem os dados por props. Isso atende a "reusable components with typed props".
- **HTML semântico:** `<header>`, `<nav aria-label="Main">`, `<main id="main">`, `<section aria-labelledby="...">`, `<footer>`. Um único `<h1>` na página e hierarquia de headings correta. Usar listas (`ul/li`) para grupos de cards e links.
- **Imagens:** sempre `next/image` com `alt` descritivo (`alt=""` só para imagens decorativas), `width`/`height` ou `fill` + `sizes` corretos. A imagem do hero (LCP) leva `priority`. Fundos decorativos podem ser CSS.
- **Fidelidade:** usar os valores exatos de `notes.md` (px → classes do Tailwind ou valores arbitrários `text-[56px]` quando não houver equivalente; melhor ainda como tokens). Não "arredondar" espaçamentos. Comparar lado a lado com o PNG a cada seção.
- Componentes são **Server Components** por padrão. `"use client"` vai apenas nos componentes interativos da Fase 4, e o mais "folha" possível na árvore.

Commit a cada seção concluída (`feat: hero section` etc.).

---

## Fase 4: Interações (~1–1,5 h)

Implemente **somente** as interações que o design mostra (veja `notes.md` → Interactions). Padrões de acessibilidade obrigatórios:

| Interação | Implementação acessível |
|---|---|
| Menu mobile | `<button aria-expanded aria-controls aria-label="Open menu">`; fecha com `Esc`, ao clicar num link e ao clicar fora; foco vai para o menu ao abrir e volta para o botão ao fechar; trava o scroll do body enquanto está aberto |
| Carrossel/slider | Scroll-snap em CSS + botões prev/next (`<button aria-label>`), `aria-roledescription="carousel"`, slides com `aria-label="2 of 5"`; setas do teclado funcionam; **sem autoplay**, ou com pausa e desligado em reduced-motion |
| Tabs | `role="tablist"/"tab"/"tabpanel"`, `aria-selected`, navegação com setas |
| Accordion/FAQ | `<button aria-expanded aria-controls>` ou `<details>/<summary>` nativo |
| Formulário (newsletter/contato) | `<label>` real, `type="email"`, `required`, validação no client, mensagem de sucesso/erro com `aria-live="polite"`; envio mock (sem backend) |
| Hover/estados | Todo `hover:` tem um `focus-visible:` equivalente |
| Animações de entrada | Opcionais. Se usar, `motion-safe:` do Tailwind ou IntersectionObserver checando `prefers-reduced-motion` |

Check: navegar a página inteira **só com Tab/Shift+Tab/Enter/Esc/setas**.

---

## Fase 5: Qualidade, performance e acessibilidade (~30–45 min)

**Prompt para o Claude Code:**
> "Execute a Fase 5 do PLAN.md: rode todos os checks, corrija o que falhar e me liste o que não deu para corrigir."

1. `npm run lint`, `npx tsc --noEmit` e `npm run build`, todos **sem erros nem warnings**.
2. `npm run start` e **Lighthouse** (Chrome DevTools, modo mobile e desktop). Meta: Performance ≥ 90 e Accessibility, Best Practices e SEO ≥ 95. Salve um screenshot em `docs/lighthouse.png`.
3. Revisão visual em 375 / 768 / 1024 / 1440 comparando com `design-refs/`. Nada de scroll horizontal em nenhuma largura.
4. Checklist final:
   - [ ] Contraste de texto AA
   - [ ] Todas as imagens com `alt` adequado
   - [ ] Foco visível em tudo que é clicável
   - [ ] Um `<h1>` e headings em ordem
   - [ ] Sem erros no console
   - [ ] `prefers-reduced-motion` testado (DevTools → Rendering → Emulate)
   - [ ] Metadata e OG presentes (ver o `<head>`)
5. (Opcional, ~20 min, só se sobrar tempo) **Um teste pequeno** com Vitest + Testing Library para o menu mobile: abre, `aria-expanded` muda e fecha com Esc. O PDF diz que é bem-vindo, mas não obrigatório.

---

## Fase 6: README em inglês e entrega (~20 min)

**Prompt para o Claude Code:**
> "Escreva o README.md em inglês conforme a Fase 6 do PLAN.md, com base no que foi implementado de fato."

Estrutura do `README.md`:
```md
# Buzzvel – Front-End Coding Challenge (Nov 2026)
Live preview: <vercel-url> · Figma: <link>
![Lighthouse](docs/lighthouse.png)

## Stack
Next.js (App Router) · TypeScript · Tailwind CSS · next/font · next/image

## Getting started
npm install · npm run dev · npm run build && npm run start · npm run lint

## Project structure
(short tree + one line per folder)

## Key decisions
- Tablet layout (not in Figma): ...
- Interactions without libraries (scroll-snap carousel, etc.) to keep the bundle small
- Content in typed data file (mock data) ...
- Assumptions on unclear behaviors: ...

## Accessibility & performance
(skip link, semantic landmarks, keyboard support, reduced motion, image optimization, font loading)

## Known gaps / issues
(be honest – list anything not pixel-perfect or not done)

## Time spent
~X hours

## AI tools used
Claude (planning + Claude Code in VS Code for implementation). Verified by: comparing each section
against Figma exports at 375/768/1440, keyboard-only testing, Lighthouse, lint/type-check/production build,
and reviewing every generated file so I can explain the code.
```

Entrega:
1. Último `npm run build` limpo, commit e push.
2. Abra o repositório numa aba anônima para confirmar que está **público**.
3. Envie o link pelo formulário: https://forms.clickup.com/6647387/f/6avjv-18455/PLUYAZ40HA3XTQOEFW

---

## Regras gerais para o Claude Code (cole também no CLAUDE.md, se quiser)

- Siga o design em `design-refs/` com exatidão. Na dúvida, pergunte ou escolha algo razoável **e anote para o README**.
- TypeScript estrito: sem `any`, e props sempre tipadas com `interface`/`type`.
- Nada de dependências novas sem justificar.
- Server Components por padrão; `"use client"` só onde há estado ou eventos.
- Sem texto hardcoded repetido: conteúdo em `src/data/content.ts`.
- Ao fim de cada fase, rode `npm run lint && npx tsc --noEmit` e reporte o resultado.
- Commits pequenos e descritivos (Conventional Commits).

## Ordem e tempo estimado

| Fase | Tempo |
|---|---|
| 0. Exportar o Figma (manual) | 30–40 min |
| 1. Setup | 10 min |
| 2. Tokens e layout base | 20 min |
| 3. Seções | 2–3 h |
| 4. Interações | 1–1,5 h |
| 5. QA, Lighthouse e a11y | 30–45 min |
| 6. README e entrega | 20 min |
| **Total** | **~5–6,5 h** |
