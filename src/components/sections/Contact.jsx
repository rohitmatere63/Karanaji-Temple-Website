import { useState } from "react";
import { TEMPLE_META, CONTACT_PURPOSES, UI_TEXT } from "../../data/templeData.js";

import FadeIn from "../ui/FadeIn";
import SectionHeader from "../ui/SectionHeader";

const CONTACT_INFO = (t) => [
  { icon: "📍", labelKey: UI_TEXT.address,     valueKey: TEMPLE_META.address },
  { icon: "🕐", labelKey: UI_TEXT.templeHours, valueKey: TEMPLE_META.hours },
  { icon: "📞", labelKey: UI_TEXT.contact,     valueKey: `${TEMPLE_META.phone}\n${TEMPLE_META.email}` },
  { icon: "🚌", labelKey: UI_TEXT.howToReach,  valueKey: TEMPLE_META.directions },
];

const INITIAL_FORM = { name: "", email: "", phone: "", purpose: "", message: "" };

export default function Contact({ t, lang }) {
  const [form, setForm] = useState(INITIAL_FORM);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", form);
    setSubmitted(true);
    setForm(INITIAL_FORM);
  };

  const inputClass =
    "w-full font-body text-sm bg-stone-900/60 border border-stone-700 text-stone-200 placeholder-stone-500 rounded-xl px-4 py-3 focus:outline-none focus:border-amber-600 transition-colors";

  return (
    <section
      id="contact"
      className="py-16 px-4"
      style={{ background: "linear-gradient(135deg, #1c1208 0%, #2a1a0a 100%)" }}
    >
      <div className="max-w-lg mx-auto">
        <SectionHeader eyebrow="Find Us" heading="Visit the Temple" theme="dark" />

        {/* Contact Info */}
        <FadeIn>
          <div className="flex flex-col gap-5 mb-8">
            {CONTACT_INFO(t).map(({ icon, labelKey, valueKey }) => (
              <div key={labelKey.en} className="flex gap-4">
                <span className="text-xl mt-0.5">{icon}</span>
                <div>
                  <p className="font-body text-amber-600 text-xs tracking-widest uppercase mb-1">
                    {t(labelKey)}
                  </p>
                  <p className="font-body text-stone-300 text-sm leading-relaxed whitespace-pre-line">
                    {t(valueKey) || valueKey}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </FadeIn>

        {/* Map placeholder */}
        <FadeIn delay={0.1}>
  <div className="rounded-2xl overflow-hidden mb-8 border border-amber-900/30">
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3742.675509012671!2d73.8889664755965!3d20.27228808119447!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdddef660a42c47%3A0x92c01ad85bbd017!2sKardamashram%20Datta%20Devsthan!5e0!3m2!1sen!2sin!4v1772645445603!5m2!1sen!2sin"
      width="100%"
      height="250"
      style={{ border: 0 }}
      allowFullScreen=""
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      title="Temple Location"
    />
  </div>
</FadeIn>

        {/* Contact Form */}
        <FadeIn delay={0.2}>
          <div className="bg-stone-800/50 border border-amber-900/30 rounded-2xl p-5">
            <h3 className="font-display text-2xl text-amber-200 mb-5">
              {t(UI_TEXT.sendMessage).replace("🙏", "").trim()}
            </h3>

            {submitted ? (
              <div className="text-center py-8">
                <div className="text-5xl mb-4">🙏</div>
                <p className="font-display text-amber-300 text-xl mb-2">
                  {t(UI_TEXT.thankYou)}
                </p>
                <p className="font-body text-stone-400 text-sm leading-relaxed mb-5">
                  {t(UI_TEXT.receivedMsg)}
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="font-body text-xs text-amber-600 hover:text-amber-400 tracking-widest uppercase transition-colors"
                >
                  {t(UI_TEXT.sendAnother)}
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-3" noValidate>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder={t(UI_TEXT.yourName)}
                  required
                  className={inputClass}
                />
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder={t(UI_TEXT.email)}
                  required
                  className={inputClass}
                />
                <input
                  type="tel"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder={t(UI_TEXT.phone)}
                  className={inputClass}
                />
                <select
                  name="purpose"
                  value={form.purpose}
                  onChange={handleChange}
                  required
                  className={`${inputClass} text-stone-400`}
                >
                  <option value="" disabled>
                    {t(UI_TEXT.selectPurpose)}
                  </option>
                  {CONTACT_PURPOSES[lang].map((p) => (
                    <option key={p} value={p}>
                      {p}
                    </option>
                  ))}
                </select>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder={t(UI_TEXT.yourMessage)}
                  rows={4}
                  required
                  className={`${inputClass} resize-none`}
                />
                <button
                  type="submit"
                  className="w-full font-body text-sm py-3.5 bg-amber-700 text-white rounded-xl hover:bg-amber-600 transition-colors tracking-widest uppercase mt-1"
                >
                  {t(UI_TEXT.sendMessage)}
                </button>
              </form>
            )}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}