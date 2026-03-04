import { TEMPLE_META, UI_TEXT } from "../../data/templeData.js";
import FadeIn from "../ui/FadeIn";
import SectionHeader from "../ui/SectionHeader";

export default function About({ t }) {
  return (
    <section id="about" className="py-16 px-4 bg-stone-50">
      <div className="max-w-lg mx-auto">
        <SectionHeader
          eyebrow={t(UI_TEXT.ourStory)}
          heading={t(UI_TEXT.aHomeForThe) + " " + t(UI_TEXT.divine)}
        />

        {/* Image placeholder */}
        <FadeIn>
          <div className="relative rounded-2xl overflow-hidden mb-8">
            <div className="aspect-[16/9] bg-gradient-to-br from-amber-900 to-stone-900 flex items-center justify-center">
              <div className="text-center">
                <div className="text-7xl mb-3">🛕</div>
                <p className="font-display text-amber-200/60 text-xl italic">
                  {t(TEMPLE_META.name)}
                </p>
              </div>
            </div>
            {/* Overlay quote */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
              <p className="font-display text-white text-lg italic">
                "Where devotion meets divinity"
              </p>
            </div>
          </div>
        </FadeIn>

        {/* Text */}
        <FadeIn delay={0.1}>
          <p className="font-body text-stone-600 leading-relaxed mb-4 text-sm">
            Founded in {TEMPLE_META.established} by the visionary saint Swami
            Prakashananda, {t(TEMPLE_META.name)} has stood for over six decades
            as a beacon of spiritual learning, community service, and devotional
            worship in Pune.
          </p>
          <p className="font-body text-stone-600 leading-relaxed mb-8 text-sm">
            Our temple is consecrated to {t(TEMPLE_META.deity)}, with subsidiary
            shrines to Goddess Parvati, Lord Ganesha, and Lord Vishnu. The
            temple complex spans three acres and includes a meditation hall,
            Vedic school, and community kitchen.
          </p>
        </FadeIn>

        {/* Stats */}
        <FadeIn delay={0.2}>
          <div className="grid grid-cols-3 gap-4">
            {TEMPLE_META.stats.map(({ value, label }) => (
              <div
                key={value}
                className="text-center p-4 bg-white rounded-xl border border-stone-100 shadow-sm"
              >
                <div className="font-display text-3xl text-amber-700">{value}</div>
                <div className="font-body text-xs text-stone-500 mt-1 leading-tight">
                  {t(label)}
                </div>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}