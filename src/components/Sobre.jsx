import { CONFIG } from "../config";

/* ─────────────────────────────────────────────────────────────
   Sobre — Direção Editorial Premium
   Epígrafe em Cormorant · Corpo em DM Sans · Sem foto
   Fundo creme-alt · Transição suave do Hero
   Sem cards, sem badges, sem colunas simétricas
───────────────────────────────────────────────────────────── */

export default function Sobre() {
  const { epigrafe, paragrafos, formacao } = CONFIG.medico.sobre;

  return (
    <section id="sobre" className="sobre-section reveal">
      <div className="sobre-inner">

        {/* ── Rótulo ────────────────────────────────────────── */}
        <div className="sobre-eyebrow">
          <span className="sobre-eyebrow-line" aria-hidden />
          <span className="sobre-eyebrow-text">Sobre</span>
        </div>

        {/* ── Epígrafe — voz da médica em Cormorant ─────────── */}
        <blockquote className="sobre-epigrafe">
          "{epigrafe}"
        </blockquote>

        {/* ── Corpo de texto ────────────────────────────────── */}
        <div className="sobre-body">
          {paragrafos.map((p, i) => (
            <p
              key={i}
              className="sobre-paragrafo"
              data-emphasis={i === 0}
            >
              {p}
            </p>
          ))}
        </div>

        {/* ── Metadado de formação ──────────────────────────── */}
        <footer className="sobre-meta">
          <div className="sobre-meta-line" aria-hidden />
          <ul className="sobre-meta-list" aria-label="Formação">
            {formacao.map((item, i) => (
              <li key={i} className="sobre-meta-item">
                {i > 0 && <span className="sobre-meta-dot" aria-hidden />}
                {item}
              </li>
            ))}
          </ul>
        </footer>

      </div>
    </section>
  );
}
