import { CONFIG } from "../config";

/* ─────────────────────────────────────────────────────────────
   Depoimentos — Direção Editorial Premium
   Fundo creme · citações em Cormorant itálico
   Sem cards escuros · sem fotos · sem estrelas
   Três colunas separadas por linhas verticais finas
───────────────────────────────────────────────────────────── */

export default function Depoimentos() {
  return (
    <section id="depoimentos" className="depo-section">
      <div className="depo-inner">

        {/* ── Cabeçalho ─────────────────────────────────────────── */}
        <div className="depo-header reveal">
          <div className="sobre-eyebrow">
            <span className="sobre-eyebrow-line" aria-hidden />
            <span className="sobre-eyebrow-text">Depoimentos</span>
          </div>
          <h2 className="depo-title">O que dizem as pacientes</h2>
        </div>

        {/* ── Grade de citações ─────────────────────────────────── */}
        <div className="depo-grid">
          {CONFIG.depoimentos.map((d, i) => (
            <blockquote key={i} className="depo-card reveal">
              <p className="depo-quote">{d.texto}</p>
              <footer>
                <div className="depo-footer-line" aria-hidden />
                <cite className="depo-nome">{d.nome}</cite>
              </footer>
            </blockquote>
          ))}
        </div>

      </div>
    </section>
  );
}
