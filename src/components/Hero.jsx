import { CONFIG } from "../config";

/* ─────────────────────────────────────────────────────────────
   Hero — Direção Editorial Premium · Refinado
   Layout 60/40 · Cormorant Garamond · Fundo creme quente
   Sem cards · Sem fundo escuro · CTA textual
   Para usar a foto real: adicionar em src/assets/hero.jpg
   e atualizar config.js (ver comentário lá)
───────────────────────────────────────────────────────────── */

export default function Hero() {
  const { nome, especialidade, subfraseHero, foto, anosExperiencia, crm } =
    CONFIG.medico;

  const waLink = `https://wa.me/${CONFIG.whatsapp.numero}?text=${encodeURIComponent(
    CONFIG.whatsapp.mensagem
  )}`;

  // Hierarquia tipográfica do nome
  // "Dra. Ana Beatriz Sousa" → 3 linhas com pesos distintos
  const words = nome.split(" ");
  const line1 = words.slice(0, 2).join(" "); // "Dra. Ana"
  const line2 = words[2] ?? "";              // "Beatriz"
  const line3 = words.slice(3).join(" ");    // "Sousa" (itálico)

  // Iniciais para o placeholder (sem "Dra.")
  const initials = words
    .filter((w) => !w.startsWith("Dr"))
    .map((w) => w[0])
    .slice(0, 2)
    .join("");

  return (
    <section
      className="relative bg-[var(--color-base)]"
      style={{ paddingTop: "var(--header-h)" }}
      aria-label="Apresentação"
    >
      <div className="hero-grid">

        {/* ── Coluna esquerda — Conteúdo ──────────────────────────── */}
        <div className="hero-content">

          {/* — Rótulo da especialidade ─────────────────────────── */}
          <div className="animate-fade-up hero-eyebrow">
            <span className="hero-eyebrow-line" aria-hidden />
            <span className="hero-eyebrow-text">{especialidade}</span>
          </div>

          {/* — Nome principal ──────────────────────────────────── */}
          <h1 className="animate-fade-up delay-100 hero-name">
            <span className="hero-name-main">{line1}</span>
            {line2 && <span className="hero-name-main">{line2}</span>}
            {line3 && <span className="hero-name-italic">{line3}</span>}
          </h1>

          {/* — Tagline ─────────────────────────────────────────── */}
          <p className="animate-fade-up delay-200 hero-tagline">
            {subfraseHero}
          </p>

          {/* — CTA textual ─────────────────────────────────────── */}
          <div className="animate-fade-up delay-300 hero-cta-wrap">
            <a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="hero-cta"
              aria-label="Agendar consulta via WhatsApp"
            >
              <span className="hero-cta-label">Agendar consulta</span>
              <span className="hero-cta-arrow" aria-hidden>→</span>
            </a>
          </div>

          {/* — Credibilidade integrada ─────────────────────────── */}
          <div className="animate-fade-up delay-400 hero-credibility">
            {anosExperiencia && (
              <>
                <span>{anosExperiencia}+ anos de experiência</span>
                <span className="hero-cred-dot" aria-hidden />
              </>
            )}
            <span>{crm}</span>
          </div>

        </div>

        {/* ── Coluna direita — Foto ou Placeholder ────────────────── */}
        <div className="hero-photo animate-fade-in delay-200">
          {foto ? (
            <img src={foto} alt={`Foto de ${nome}`} draggable="false" />
          ) : (
            <div className="hero-placeholder" aria-hidden>
              {/* Luzes decorativas que simulam iluminação de estúdio */}
              <div className="hero-placeholder-glow hero-placeholder-glow--top"    />
              <div className="hero-placeholder-glow hero-placeholder-glow--bottom" />

              {/* Iniciais em Cormorant — muito sutis */}
              <span className="hero-placeholder-initials">{initials}</span>

              {/* Label de instrução — mínimo, editorial */}
              <span className="hero-placeholder-label">foto da médica</span>
            </div>
          )}

          {/* Gradiente de fade na base — apenas mobile */}
          <div className="hero-photo-fade" aria-hidden />
        </div>

      </div>

      {/* ── Indicador de scroll ──────────────────────────────────── */}
      <div className="hero-scroll animate-fade-up delay-600" aria-hidden>
        <span className="hero-scroll-label">scroll</span>
        <div className="hero-scroll-line" />
      </div>

    </section>
  );
}
