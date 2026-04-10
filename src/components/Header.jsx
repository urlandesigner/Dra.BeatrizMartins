import { useState, useEffect } from "react";
import { CONFIG } from "../config";

/* ─────────────────────────────────────────────────────────────
   Header — Direção Editorial Premium
   Transparente no topo · Emerge com blur no scroll
   Identidade tipográfica · Nav discreta · CTA textual
   Mobile: drawer lateral em Cormorant
───────────────────────────────────────────────────────────── */

const NAV_LINKS = [
  { label: "Sobre",          href: "#sobre"          },
  { label: "Especialidades", href: "#especialidades"  },
  { label: "Depoimentos",    href: "#depoimentos"     },
  { label: "Contato",        href: "#contato"         },
];

export default function Header() {
  const { nome, especialidade } = CONFIG.medico;
  const waLink = `https://wa.me/${CONFIG.whatsapp.numero}?text=${encodeURIComponent(
    CONFIG.whatsapp.mensagem
  )}`;

  // Nomes separados para o header
  const words     = nome.split(" ");
  const firstName = words.slice(1).join(" "); // "Ana Beatriz Sousa"

  const [scrolled,    setScrolled]    = useState(false);
  const [drawerOpen,  setDrawerOpen]  = useState(false);
  const [activeLink,  setActiveLink]  = useState("");

  /* ── Detecta scroll ── */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 72);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* ── Detecta seção ativa via IntersectionObserver ── */
  useEffect(() => {
    const sections = NAV_LINKS.map(({ href }) =>
      document.querySelector(href)
    ).filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveLink(`#${entry.target.id}`);
          }
        });
      },
      { rootMargin: "-30% 0px -60% 0px" }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  /* ── Bloqueia scroll do body quando drawer aberto ── */
  useEffect(() => {
    document.body.style.overflow = drawerOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [drawerOpen]);

  const closeDrawer = () => setDrawerOpen(false);

  return (
    <>
      {/* ── Barra principal ────────────────────────────────────── */}
      <header
        className="hdr-bar"
        data-scrolled={scrolled}
        aria-label="Navegação principal"
      >
        <div className="hdr-inner">

          {/* — Identidade ─────────────────────────────────────── */}
          <a href="#hero" className="hdr-identity" aria-label="Ir ao topo">
            <span className="hdr-identity-name">{firstName}</span>
            <span className="hdr-identity-sep" aria-hidden>·</span>
            <span className="hdr-identity-role">{especialidade}</span>
          </a>

          {/* — Navegação desktop ──────────────────────────────── */}
          <nav className="hdr-nav" aria-label="Menu">
            {NAV_LINKS.map(({ label, href }) => (
              <a
                key={href}
                href={href}
                className="hdr-nav-link"
                data-active={activeLink === href}
                aria-current={activeLink === href ? "page" : undefined}
              >
                {label}
              </a>
            ))}
          </nav>

          {/* — CTA + Trigger mobile ───────────────────────────── */}
          <div className="hdr-actions">
            {/* CTA desktop */}
            <a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="hdr-cta"
              aria-label="Agendar consulta via WhatsApp"
            >
              <span className="hdr-cta-label">Agendar</span>
              <span className="hdr-cta-arrow" aria-hidden>→</span>
            </a>

            {/* Trigger mobile — duas linhas finas */}
            <button
              className="hdr-trigger"
              onClick={() => setDrawerOpen(true)}
              aria-label="Abrir menu"
              aria-expanded={drawerOpen}
            >
              <span className="hdr-trigger-line" />
              <span className="hdr-trigger-line" />
            </button>
          </div>

        </div>
      </header>

      {/* ── Drawer mobile ──────────────────────────────────────── */}
      <div
        className="hdr-drawer-overlay"
        data-open={drawerOpen}
        onClick={closeDrawer}
        aria-hidden
      />

      <div
        className="hdr-drawer"
        data-open={drawerOpen}
        role="dialog"
        aria-modal="true"
        aria-label="Menu de navegação"
      >
        {/* Fechar */}
        <button
          className="hdr-drawer-close"
          onClick={closeDrawer}
          aria-label="Fechar menu"
        >
          ×
        </button>

        {/* Identidade no drawer */}
        <div className="hdr-drawer-identity">
          <span className="hdr-drawer-name">{firstName}</span>
          <span className="hdr-drawer-role">{especialidade}</span>
        </div>

        {/* Links em Cormorant grande */}
        <nav className="hdr-drawer-nav" aria-label="Menu mobile">
          {NAV_LINKS.map(({ label, href }, i) => (
            <a
              key={href}
              href={href}
              className="hdr-drawer-link"
              style={{ animationDelay: drawerOpen ? `${i * 60 + 80}ms` : "0ms" }}
              onClick={closeDrawer}
            >
              <span className="hdr-drawer-link-num">0{i + 1}</span>
              {label}
            </a>
          ))}
        </nav>

        {/* CTA no drawer */}
        <a
          href={waLink}
          target="_blank"
          rel="noopener noreferrer"
          className="hdr-drawer-cta"
          onClick={closeDrawer}
        >
          Agendar consulta →
        </a>
      </div>
    </>
  );
}
