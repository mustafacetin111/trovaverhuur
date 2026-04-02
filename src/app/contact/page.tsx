import type { Metadata } from "next";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import QuoteForm from "@/components/QuoteForm";

export const metadata: Metadata = {
  title: "Contact | Trova Verhuur & Transport",
  description: "Neem contact op met Trova Verhuur & Transport voor een vrijblijvende offerte of meer informatie over onze grondverzet machines.",
};

export default function ContactPage() {
  return (
    <div style={{ paddingTop: "5rem" }}>
      {/* Header */}
      <section
        className="py-24 relative overflow-hidden grid-lines"
        style={{ background: "var(--black)" }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `radial-gradient(ellipse 60% 60% at 80% 50%, rgba(232,93,4,0.09) 0%, transparent 60%)`,
          }}
        />
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
          <div className="section-label mb-6">Contact</div>
          <h1
            className="font-display mb-6"
            style={{ fontSize: "clamp(3rem, 7vw, 7rem)", color: "var(--white)" }}
          >
            NEEM <span className="gradient-text">CONTACT</span> OP
          </h1>
          <p
            className="max-w-xl text-base leading-relaxed"
            style={{ color: "var(--text-muted)" }}
          >
            Heeft u vragen over onze machines of wilt u direct een offerte aanvragen?
            Wij staan voor u klaar — persoonlijk advies zonder verplichtingen.
          </p>
        </div>
      </section>

      {/* Contact info bar */}
      <div style={{ background: "var(--surface-2)", borderBottom: "1px solid var(--border)" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-px" style={{ background: "var(--border)" }}>
            {[
              {
                icon: Phone,
                label: "Telefoon",
                value: "+31 6 12 34 56 78",
                href: "tel:+31612345678",
              },
              {
                icon: Mail,
                label: "E-mail",
                value: "info@trovaverhuur.nl",
                href: "mailto:info@trovaverhuur.nl",
              },
              {
                icon: MapPin,
                label: "Locatie",
                value: "Groningen, Nederland",
                href: null,
              },
              {
                icon: Clock,
                label: "Bereikbaar",
                value: "Ma–Vr 07:00–18:00",
                href: null,
              },
            ].map(({ icon: Icon, label, value, href }) => (
              <div
                key={label}
                className="flex items-center gap-4 p-6"
                style={{ background: "var(--surface-2)" }}
              >
                <div
                  className="w-10 h-10 flex items-center justify-center flex-shrink-0"
                  style={{ background: "var(--surface-3)", border: "1px solid var(--border)" }}
                >
                  <Icon size={16} style={{ color: "var(--orange)" }} />
                </div>
                <div>
                  <div
                    className="font-display-medium text-xs mb-0.5"
                    style={{ color: "var(--text-dim)", letterSpacing: "0.12em" }}
                  >
                    {label.toUpperCase()}
                  </div>
                  {href ? (
                    <a
                      href={href}
                      className="contact-link font-display text-sm"
                    >
                      {value}
                    </a>
                  ) : (
                    <div className="font-display text-sm" style={{ color: "var(--text)" }}>
                      {value}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Form */}
      <QuoteForm />
    </div>
  );
}
