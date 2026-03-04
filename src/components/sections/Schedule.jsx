import { DAILY_SCHEDULE } from "../../data/templeData.js";
import FadeIn from "../ui/FadeIn";
import SectionHeader from "../ui/SectionHeader";

export default function Schedule({ t }) {
  return (
    <section
      id="schedule"
      className="py-16 px-4"
      style={{ background: "linear-gradient(135deg, #1c1208 0%, #2a1a0a 100%)" }}
    >
      <div className="max-w-lg mx-auto">
        <SectionHeader
          eyebrow="Daily Rituals"
          heading="Temple Schedule"
          theme="dark"
        />

        <div className="flex flex-col gap-3">
          {DAILY_SCHEDULE.map((item, i) => (
            <FadeIn key={item.time} delay={i * 0.07}>
              <div
                className="flex items-center gap-4 p-4 rounded-xl border border-amber-900/30 hover:border-amber-700/50 transition-all duration-300"
                style={{ background: "rgba(255,255,255,0.04)" }}
              >
                <span className="text-2xl">{item.icon}</span>
                <div className="flex-1">
                  <p className="font-display text-amber-400 text-lg leading-none">
                    {item.time}
                  </p>
                  <p className="font-body text-stone-300 text-sm mt-1">
                    {t(item.ritual)}
                  </p>
                </div>
                <div className="w-1.5 h-1.5 rounded-full bg-amber-700" />
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.5}>
          <p className="font-body text-stone-500 text-xs text-center mt-8 leading-relaxed">
            Temple open daily 
          </p>
        </FadeIn>
      </div>
    </section>
  );
}