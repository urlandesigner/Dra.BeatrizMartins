import { CONFIG } from "../config";

/* ─────────────────────────────────────────────────────────────
   Especialidades — Direção Editorial Premium
   Lista numerada em grid 2×3 · sem cards · tipografia dominante
   Separadores finos · fundo creme contínuo do Hero
───────────────────────────────────────────────────────────── */

export default function Especialidades() {
  const waLink = `https://wa.me/${CONFIG.whatsapp.numero}?text=${encodeURIComponent(
    CONFIG.whatsapp.mensagem
  )}`;

  return (
    <section id="especialidades" className="espec-section">
      <div className="espec-inner">

        {/* ── Cabeçalho ─────────────────────────────────────────── */}
        <div className="espec-header reveal">
          <div className="sobre-eyebrow">
            <span className="sobre-eyebrow-line" aria-hidden />
            <span className="sobre-eyebrow-text">Especialidades</span>
          </div>
          <h2 className="espec-title">Áreas de atuação</h2>
        </div>

        {/* ── Grade de especialidades ────────────────────────────── */}
        <div className="espec-grid">
          {CONFIG.especialidades.map((item, i) => (
            <div key={i} className="espec-item reveal">
              {/* Número ordinal */}
              <span className="espec-num" aria-hidden>
                0{i + 1}
              </span>

              {/* Conteúdo */}
              <div>
                <h3 className="espec-item-title">{item.titulo}</h3>
                <p className="espec-item-desc">{item.descricao}</p>
              </div>
            </div>
          ))}
        </div>

        {/* ── CTA textual — mesmo padrão do Hero ────────────────── */}
        <div className="espec-cta reveal">
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

      </div>
    </section>
  );
}
