"use client";

import { useState } from "react";
import { ArrowRight, CheckCircle, Loader2, Phone, Mail } from "lucide-react";

export default function QuoteForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    naam: "",
    bedrijf: "",
    email: "",
    telefoon: "",
    machine: "",
    duur: "",
    machinist: "nee",
    bericht: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1500));
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <section className="section-lg" style={{ background: "var(--white)" }} id="offerte">
      <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-14">
        <div className="grid lg:grid-cols-5 gap-16 lg:gap-24">

          {/* Left */}
          <div className="lg:col-span-2">
            <div className="label mb-5">Offerte aanvragen</div>
            <h2 className="heading mb-5" style={{ fontSize: "clamp(1.9rem, 4vw, 3rem)" }}>
              Vrijblijvende offerte
            </h2>
            <p className="text-sm leading-relaxed mb-10" style={{ color: "var(--text-muted)" }}>
              Vul het formulier in en ontvang binnen 24 uur een offerte op maat.
              Wij denken graag mee over de juiste machine voor uw project.
            </p>

            <div className="space-y-5">
              {[
                { icon: Phone, label: "Telefoon", value: "+31 6 12 34 56 78", href: "tel:+31612345678" },
                { icon: Mail, label: "E-mail", value: "info@trovaverhuur.nl", href: "mailto:info@trovaverhuur.nl" },
              ].map(({ icon: Icon, label, value, href }) => (
                <a
                  key={label}
                  href={href}
                  className="flex items-center gap-4 p-5 rounded-xl transition-all duration-200 contact-link"
                  style={{ background: "var(--bg)", border: "1px solid var(--border)" }}
                >
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ background: "var(--orange-bg)" }}
                  >
                    <Icon size={15} style={{ color: "var(--orange)" }} />
                  </div>
                  <div>
                    <div className="text-xs font-semibold mb-0.5" style={{ color: "var(--text-dim)" }}>
                      {label}
                    </div>
                    <div className="text-sm font-semibold" style={{ color: "var(--text-soft)" }}>
                      {value}
                    </div>
                  </div>
                </a>
              ))}

              <div
                className="p-5 rounded-xl text-sm"
                style={{ background: "var(--orange-bg)", border: "1px solid rgba(232,96,10,0.2)" }}
              >
                <div className="font-semibold mb-1" style={{ color: "var(--orange)" }}>
                  Werkdagen
                </div>
                <div style={{ color: "var(--text-soft)" }}>Maandag t/m vrijdag, 07:00–18:00</div>
              </div>
            </div>
          </div>

          {/* Right: form */}
          <div className="lg:col-span-3">
            {submitted ? (
              <div
                className="h-full flex flex-col items-center justify-center text-center p-12 rounded-2xl"
                style={{ background: "var(--bg)", border: "1px solid var(--border)" }}
              >
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center mb-6"
                  style={{ background: "var(--orange-bg)" }}
                >
                  <CheckCircle size={28} style={{ color: "var(--orange)" }} />
                </div>
                <h3 className="font-bold text-2xl mb-3" style={{ color: "var(--text)" }}>
                  Aanvraag ontvangen!
                </h3>
                <p style={{ color: "var(--text-muted)" }}>
                  Bedankt voor uw aanvraag. Wij nemen binnen 24 uur contact met u op.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="rounded-2xl p-10 space-y-6"
                style={{ background: "var(--bg)", border: "1px solid var(--border)" }}
              >
                <div className="grid grid-cols-2 gap-5">
                  <div>
                    <label className="form-label">Naam *</label>
                    <input name="naam" value={form.naam} onChange={handleChange} required className="form-input" placeholder="Jan de Vries" />
                  </div>
                  <div>
                    <label className="form-label">Bedrijf</label>
                    <input name="bedrijf" value={form.bedrijf} onChange={handleChange} className="form-input" placeholder="Bouwbedrijf BV" />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-5">
                  <div>
                    <label className="form-label">E-mail *</label>
                    <input type="email" name="email" value={form.email} onChange={handleChange} required className="form-input" placeholder="jan@bedrijf.nl" />
                  </div>
                  <div>
                    <label className="form-label">Telefoon</label>
                    <input type="tel" name="telefoon" value={form.telefoon} onChange={handleChange} className="form-input" placeholder="+31 6 00 00 00 00" />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-5">
                  <div>
                    <label className="form-label">Machine *</label>
                    <select name="machine" value={form.machine} onChange={handleChange} required className="form-input">
                      <option value="">Kies machine...</option>
                      <option value="minigraver-1.7t">Minigraver 1.7T</option>
                      <option value="minigraver-3.5t">Minigraver 3.5T</option>
                      <option value="minigraver-6t">Minigraver 6T</option>
                      <option value="shovel-13t">Shovel 13T</option>
                      <option value="anders">Weet ik niet</option>
                    </select>
                  </div>
                  <div>
                    <label className="form-label">Duur</label>
                    <select name="duur" value={form.duur} onChange={handleChange} className="form-input">
                      <option value="">Kies duur...</option>
                      <option value="1-dag">1 dag</option>
                      <option value="2-3-dagen">2–3 dagen</option>
                      <option value="1-week">1 week</option>
                      <option value="2-weken">2 weken</option>
                      <option value="1-maand">1 maand</option>
                      <option value="langer">Langer</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="form-label">Machinist gewenst?</label>
                  <div className="flex gap-6 mt-2">
                    {["ja", "nee", "optioneel"].map((opt) => (
                      <label key={opt} className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="radio"
                          name="machinist"
                          value={opt}
                          checked={form.machinist === opt}
                          onChange={handleChange}
                          style={{ accentColor: "var(--orange)" }}
                        />
                        <span className="text-sm font-medium capitalize" style={{ color: "var(--text-soft)" }}>
                          {opt}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="form-label">Aanvullende informatie</label>
                  <textarea
                    name="bericht"
                    value={form.bericht}
                    onChange={handleChange}
                    rows={4}
                    className="form-input"
                    placeholder="Beschrijf uw project, locatie of wensen..."
                    style={{ resize: "vertical" }}
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="btn btn-primary w-full justify-center"
                  style={{ opacity: loading ? 0.75 : 1 }}
                >
                  {loading ? (
                    <><Loader2 size={16} className="animate-spin" /> Versturen...</>
                  ) : (
                    <>Offerte aanvragen <ArrowRight size={16} /></>
                  )}
                </button>

                <p className="text-xs text-center" style={{ color: "var(--text-dim)" }}>
                  Geen verplichtingen. Wij reageren binnen 24 uur.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
