import { useEffect } from "react";
import { CONFIG } from "./config";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Sobre from "./components/Sobre";
import Especialidades from "./components/Especialidades";
import Autoridade from "./components/Autoridade";
import Depoimentos from "./components/Depoimentos";
import Contato from "./components/Contato";
import FAQ from "./components/FAQ";
import CTAWhatsApp from "./components/CTAWhatsApp";

export default function App() {
  // Scroll reveal — observa todos os elementos com classe .reveal
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen">
      <Header />

      <main>
        {/* Fluxo narrativo: quem → o quê → por quê confiar → prova social → dúvidas → contato */}
        <Hero />
        <Sobre />
        <Especialidades />
        <Autoridade />
        <Depoimentos />
        <FAQ />
        <Contato />
        <CTAWhatsApp />
      </main>

      {/* Footer minimalista — sob o CTA Final escuro */}
      <footer className="footer-bar" role="contentinfo">
        <div className="footer-inner">
          <span className="footer-copy">
            © {new Date().getFullYear()} {CONFIG.medico.nome}. Todos os direitos reservados.
          </span>
          <span className="footer-crm">{CONFIG.medico.crm}</span>
        </div>
      </footer>
    </div>
  );
}
