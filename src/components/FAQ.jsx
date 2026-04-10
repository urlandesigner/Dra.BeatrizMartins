import { useState } from "react";
import { CONFIG } from "../config";

/* ─────────────────────────────────────────────────────────────
   FAQ — Direção Editorial Premium
   Accordion numerado · separadores finos · fundo creme-alt
   Animação via grid-template-rows (CSS puro, sem resize observer)
───────────────────────────────────────────────────────────── */

export default function FAQ() {
  const [open, setOpen] = useState(null);

  const toggle = (i) => setOpen(open === i ? null : i);

  return (
    <section id="faq" className="faq-section">
      <div className="faq-inner">

        {/* ── Cabeçalho ─────────────────────────────────────────── */}
        <div className="faq-header reveal">
          <div className="sobre-eyebrow">
            <span className="sobre-eyebrow-line" aria-hidden />
            <span className="sobre-eyebrow-text">FAQ</span>
          </div>
          <h2 className="faq-title">Perguntas frequentes</h2>
        </div>

        {/* ── Lista de perguntas ────────────────────────────────── */}
        <div className="faq-list" role="list">
          {CONFIG.faq.map((item, i) => (
            <div key={i} className="faq-item reveal" role="listitem">

              {/* Pergunta — botão acessível */}
              <button
                className="faq-question"
                onClick={() => toggle(i)}
                aria-expanded={open === i}
                aria-controls={`faq-answer-${i}`}
              >
                <span className="faq-num" aria-hidden>0{i + 1}</span>
                <span className="faq-question-text">{item.pergunta}</span>
                <span className="faq-chevron" aria-hidden data-open={open === i}>↓</span>
              </button>

              {/* Resposta — accordion CSS */}
              <div
                id={`faq-answer-${i}`}
                className="faq-answer"
                data-open={open === i}
                role="region"
              >
                <div className="faq-answer-inner">
                  <p className="faq-answer-text">{item.resposta}</p>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
