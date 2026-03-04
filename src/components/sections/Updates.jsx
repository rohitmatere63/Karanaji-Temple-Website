import { UPDATES } from "../../data/templeData.js";
import FadeIn from "../ui/FadeIn";
import SectionHeader from "../ui/SectionHeader";

export default function Updates({ t }) {
  return (
    <section id="updates" className="py-16 px-4 bg-stone-50">
      <div className="max-w-lg mx-auto">
        <SectionHeader eyebrow="Latest News" heading="Temple Updates" />

        <div className="flex flex-col gap-4">
          {UPDATES.map((update, i) => (
            <UpdateCard key={update.title.en} update={update} delay={i * 0.08} t={t} />
          ))}
        </div>
      </div>
    </section>
  );
}

function UpdateCard({ update, delay, t }) {
  return (
    <FadeIn delay={delay}>
      <article className="flex gap-4 p-4 bg-white rounded-2xl border border-stone-100 shadow-sm hover:border-amber-200 hover:shadow-md transition-all duration-300">
        {/* Icon badge */}
        <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-amber-100 border border-amber-200 flex items-center justify-center">
          <span className="text-lg">📢</span>
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0">
          <div className="flex flex-wrap items-center gap-2 mb-1">
            <h3 className="font-display text-lg text-stone-900 font-semibold leading-tight">
              {t(update.title)}
            </h3>
          </div>
          <time className="font-body text-xs text-amber-700 tracking-wide block mb-1.5">
            {update.date}
          </time>
          <p className="font-body text-stone-500 text-sm leading-relaxed">
            {t(update.description)}
          </p>
        </div>
      </article>
    </FadeIn>
  );
}