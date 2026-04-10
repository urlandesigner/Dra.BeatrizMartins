import { CONFIG } from "../config";

/* ─────────────────────────────────────────────────────────────
   Contato — Direção Editorial Premium
   Duas colunas: informações à esquerda · CTA + mapa à direita
   Botão WhatsApp em ink escuro — sobriado, não verde
───────────────────────────────────────────────────────────── */

export default function Contato() {
  const { local, endereco, telefone, email, horarios, mapaUrl } = CONFIG.contato;
  const waLink = `https://wa.me/${CONFIG.whatsapp.numero}?text=${encodeURIComponent(
    CONFIG.whatsapp.mensagem
  )}`;

  return (
    <section id="contato" className="contato-section">
      <div className="contato-inner">

        {/* ── Cabeçalho ─────────────────────────────────────────── */}
        <div className="contato-header reveal">
          <div className="sobre-eyebrow">
            <span className="sobre-eyebrow-line" aria-hidden />
            <span className="sobre-eyebrow-text">Contato</span>
          </div>
          <h2 className="contato-title">Agende sua consulta</h2>
        </div>

        {/* ── Corpo em duas colunas ─────────────────────────────── */}
        <div className="contato-body">

          {/* — Coluna esquerda: informações ─────────────────────── */}
          <address className="contato-info reveal" style={{ fontStyle: "normal" }}>

            {local && (
              <div className="contato-info-group">
                <span className="contato-label">Local</span>
                <span className="contato-value">{local}</span>
              </div>
            )}

            <div className="contato-info-group">
              <span className="contato-label">Endereço</span>
              <span className="contato-value">{endereco}</span>
            </div>

            <div className="contato-info-group">
              <span className="contato-label">WhatsApp</span>
              <a
                href={`tel:${telefone.replace(/\D/g, "")}`}
                className="contato-value"
              >
                {telefone}
              </a>
            </div>

            {email && (
              <div className="contato-info-group">
                <span className="contato-label">E-mail</span>
                <a href={`mailto:${email}`} className="contato-value">
                  {email}
                </a>
              </div>
            )}

            {horarios.length > 0 && (
              <div className="contato-info-group">
                <span className="contato-label">Horários de atendimento</span>
                {horarios.map((h, i) => (
                  <span key={i} className="contato-value">
                    {h.dia}: {h.horario}
                  </span>
                ))}
              </div>
            )}

            {CONFIG.instagram && (
              <div className="contato-info-group">
                <span className="contato-label">Instagram</span>
                <a
                  href={CONFIG.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contato-value"
                >
                  @beatrizmartins_pneumo
                </a>
              </div>
            )}

          </address>

          {/* — Coluna direita: CTA + mapa ────────────────────────── */}
          <div className="contato-cta-col reveal">

            <a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="contato-wa-btn"
              aria-label="Agendar consulta pelo WhatsApp"
            >
              {/* Ícone WhatsApp */}
              <svg width={18} height={18} fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              <span>Agendar pelo WhatsApp</span>
            </a>

            {/* Mapa */}
            <div className="contato-map">
              <iframe
                src={mapaUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização do consultório"
              />
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
