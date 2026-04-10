# PROJECT.md — Site Institucional para Médicos

> Documento de referência do projeto. Leia antes de contribuir, alterar ou evoluir qualquer parte do código ou do design.

---

## 1. Objetivo do Projeto

Este projeto é um **site institucional desenvolvido como template reutilizável para médicos e profissionais da saúde**.

O ponto de partida é o site da Dra. Ana Beatriz Sousa, dermatologista. Mas o projeto foi concebido desde o início para ser replicado para outros médicos com o mínimo de esforço — trocando apenas dados de configuração, sem reescrever estrutura, visual ou lógica.

O site deve cumprir três funções simultâneas:

1. **Posicionar** o médico como autoridade na sua especialidade
2. **Transmitir confiança** por meio de credenciais, prova social e apresentação profissional
3. **Converter** o visitante em paciente — principalmente via WhatsApp

---

## 2. Público-Alvo

### Usuários finais (pacientes)
- Pessoas que buscam um especialista de confiança na área médica
- Navegam majoritariamente pelo celular
- Decidem pelo médico com base em aparência, credenciais e depoimentos
- Esperam encontrar informações claras e um caminho direto para contato

### Clientes (médicos e clínicas)
- Profissionais que precisam de presença digital de qualidade
- Valorizam visual premium e identidade própria
- Precisam de um site que transmita autoridade sem parecer genérico
- Em geral não têm conhecimento técnico — a personalização deve ser simples

---

## 3. Estrutura do Site

O site é composto por seções fixas, nesta ordem:

| Seção | Propósito |
|---|---|
| **Header** | Navegação fixa. Logo, links e botão de agendamento. |
| **Hero** | Primeira impressão. Foto, nome, especialidade e CTA principal. |
| **Sobre** | Apresentação humana da médica. Credenciais e formação em destaque. |
| **Especialidades** | Cards com serviços oferecidos. Deixa claro o que a médica trata. |
| **Autoridade** | CRM, certificações e anos de experiência. Reforço de credibilidade. |
| **Depoimentos** | Avaliações reais de pacientes. Elemento decisivo de conversão. |
| **Contato** | Endereço, mapa, telefone, e-mail e horários de atendimento. |
| **FAQ** | Respostas para dúvidas comuns antes que o visitante precise perguntar. |
| **CTA Final** | Último reforço de agendamento antes do footer. |
| **Footer** | Nome, CRM, especialidade e copyright. |

---

## 4. Diretrizes de Design

### Identidade visual
- **Tipografia:** Playfair Display (títulos — serifa elegante) + DM Sans (corpo — sans-serif refinado)
- **Paleta:** azul-marinho profundo (`#0d1b2a`), creme quente (`#faf7f2`), dourado como acento (`#c9a96e`)
- **Sensação:** sofisticação sem ostentação, autoridade sem frieza, acolhimento sem informalidade

### O que construir
- Layouts limpos com hierarquia visual clara
- Tipografia com peso e proporção bem definidos
- Espaçamento generoso e consistente
- Contraste adequado em todos os textos (mínimo 4.5:1)
- Transições e animações sutis — presença sem exagero
- Foto da médica como elemento central de confiança

### O que evitar
- Layouts genéricos de "site de clínica" com azul claro e fontes sem personalidade
- Excesso de cores, gradientes chamativos ou elementos decorativos competindo com o conteúdo
- Bordas arredondadas exageradas no estilo "app de saúde"
- Animações excessivas que distraem da leitura
- Stock photos óbvias ou ícones de clipart

### Ritmo de fundos entre seções
Alternar de forma consistente para criar separação visual entre as seções:

```
Hero        → navy
Sobre       → white
Especialidades → cream
Autoridade  → white
Depoimentos → navy
Contato     → white
FAQ         → cream
CTA Final   → navy
Footer      → navy
```

---

## 5. Diretrizes de UX

### Conversão em primeiro lugar
- **Botão de WhatsApp fixo** na tela o tempo todo (canto inferior direito)
- **CTA primário no Hero** — o botão mais visível da página
- **CTAs secundários** ao final das seções Sobre, Especialidades e Depoimentos
- **CTA final** dedicado antes do footer

### Hierarquia e escaneabilidade
- Cada seção tem um eyebrow (categoria em caps pequenos), um título principal e um corpo de texto — nunca tudo com o mesmo peso
- Textos curtos e diretos — o visitante escaneia antes de ler
- Bullets e listas quando há mais de dois itens paralelos

### Responsividade
- Mobile-first: o layout base é desenhado para 375px e escala progressivamente
- Breakpoints: `sm` (640px), `md` (768px), `lg` (1024px), `xl` (1280px)
- Botões e áreas clicáveis com no mínimo 44px de altura em mobile
- Nenhum elemento deve quebrar, sobrepor ou transbordar em nenhum tamanho de tela
- O botão flutuante do WhatsApp não deve cobrir conteúdo importante

### Animações
- Scroll reveal suave (`opacity` + `translateY`) para dar qualidade de percepção
- Delay progressivo entre elementos do mesmo bloco
- Hover states claros em todos os elementos interativos
- Nunca usar `transition: all` — especificar propriedades exatas

---

## 6. Diretrizes Técnicas

### Stack
- **React** com componentes funcionais
- **Vite** como bundler
- **Tailwind CSS v4** com tema definido via `@theme` no `index.css`
- Sem `tailwind.config.js` externo — toda a identidade visual em variáveis CSS

### Organização do código

```
src/
├── config.js          → dados e conteúdo do médico (único arquivo a editar por cliente)
├── index.css          → tema: variáveis, reset, keyframes, classes de animação
├── main.jsx           → entry point
├── App.jsx            → composição das seções
└── components/        → um arquivo por seção
    ├── Header.jsx
    ├── Hero.jsx
    ├── Sobre.jsx
    ├── Especialidades.jsx
    ├── Autoridade.jsx
    ├── Depoimentos.jsx
    ├── Contato.jsx
    ├── FAQ.jsx
    └── CTAWhatsApp.jsx
```

### Regras de código
- **Separação total entre conteúdo e estrutura:** nenhum texto, número ou dado fixo dentro dos componentes — tudo vem do `config.js`
- **Componentes independentes:** cada seção é autossuficiente e não depende do estado de outras
- **Sem lógica duplicada:** padrões que se repetem viram componentes ou utilitários
- **Sem dependências desnecessárias:** solução nativa antes de instalar biblioteca
- **Sem `transition: all`:** especificar sempre as propriedades exatas que animam
- **Sem valores arbitrários de espaçamento:** usar a escala do Tailwind; exceções apenas quando documentadas
- **Container padrão:** `max-w-6xl mx-auto px-6` em todas as seções
- **Imagens no bundle:** assets da médica ficam em `src/assets/` e são importados no `config.js`

---

## 7. Escalabilidade do Template

Para adaptar o site a outro médico, deve ser suficiente editar **apenas o `src/config.js`**, trocando:

- Nome completo e título
- Especialidade
- CRM
- Foto (importação do asset)
- Frase e subfrase do Hero
- Texto de apresentação (Sobre)
- Anos de experiência e número de pacientes
- Lista de especialidades
- Formação e certificações
- Depoimentos
- Número de WhatsApp e mensagem padrão
- Endereço, telefone, e-mail e horários
- Link do Google Maps

Alterações de identidade visual (cores, fontes) devem ser feitas **apenas nas variáveis CSS do `index.css`**, sem tocar nos componentes.

### Caminhos futuros

- **Multi-cliente:** monorepo onde cada médico tem seu próprio `config.js` e build separado
- **Variações de tema:** paletas alternativas para odontologia, psicologia, pediatria etc.
- **CMS leve:** integração com Notion ou similar para o médico atualizar dados sem tocar no código
- **Analytics:** rastreamento de cliques em WhatsApp, scroll depth e eventos de conversão

---

## 8. Regras para IA

Ao usar IA para desenvolver ou manter este projeto:

**Antes de qualquer alteração:**
- Leia o arquivo que vai modificar antes de propor mudanças
- Verifique se já existe componente ou padrão similar antes de criar algo novo
- Confirme que a alteração não quebra a separação conteúdo/estrutura

**Durante a implementação:**
- Nunca colocar dados de conteúdo dentro de componentes — usar `config.js`
- Nunca alterar o `config.js` ao fazer mudanças visuais
- Manter o container padrão (`max-w-6xl mx-auto px-6`) em todas as seções
- Respeitar o ritmo de alternância de fundos entre as seções
- Seguir mobile-first em toda adição de estilo
- Não adicionar dependências sem justificativa clara

**Qualidade e consistência:**
- Novos elementos devem seguir a paleta, tipografia e espaçamento já definidos
- Hierarquia tipográfica: eyebrow → título → corpo — sempre respeitada
- Animações sutis e com propósito — sem exageros
- Código limpo, sem duplicação e sem gambiarras

**O que não fazer:**
- Redesenhar seções sem instrução explícita
- Adicionar seções não previstas na estrutura
- Mudar a stack ou instalar bibliotecas por conta própria
- Fazer "melhorias" não solicitadas além do escopo pedido
- Alterar o `PROJECT.md` ou o `config.js` sem instrução explícita
