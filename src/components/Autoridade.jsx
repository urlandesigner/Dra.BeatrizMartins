import { CONFIG } from "../config";

/* ─────────────────────────────────────────────────────────────
   Autoridade — Direção Editorial Premium
   Duas colunas · lista com em-dash · fundo creme-alt
   Formação à esquerda · Certificações à direita
───────────────────────────────────────────────────────────── */

export default function Autoridade() {
  const { formacao, certificacoes } = CONFIG.autoridade;

  return (
    <section id="autoridade" className="autor-section">
      <div className="autor-inner">

        {/* ── Cabeçalho ─────────────────────────────────────────── */}
        <div className="autor-header reveal">
          <div className="sobre-eyebrow">
            <span className="sobre-eyebrow-line" aria-hidden />
            <span className="sobre-eyebrow-text">Credenciais</span>
          </div>
          <h2 className="autor-title">Formação & Certificações</h2>
        </div>

        {/* ── Duas colunas ──────────────────────────────────────── */}
        <div className="autor-cols">

          <div className="autor-col reveal">
            <h3 className="autor-col-heading">Formação acadêmica</h3>
            <ul className="autor-list" aria-label="Formação acadêmica">
              {formacao.map((item, i) => (
                <li key={i} className="autor-list-item">{item}</li>
              ))}
            </ul>
          </div>

          <div className="autor-col reveal">
            <h3 className="autor-col-heading">Certificações</h3>
            <ul className="autor-list" aria-label="Certificações">
              {certificacoes.map((item, i) => (
                <li key={i} className="autor-list-item">{item}</li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}
