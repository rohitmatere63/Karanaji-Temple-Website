import { EVENTS } from "../../data/templeData.js";
import FadeIn from "../ui/FadeIn";
import SectionHeader from "../ui/SectionHeader";

export default function Events({ t }) {
  return (
    <section id="events" className="py-16 px-4 bg-stone-50">
      <div className="max-w-lg mx-auto">
        <SectionHeader eyebrow="Upcoming" heading="Festivals & Events" />

        <div className="flex flex-col gap-4">
          {EVENTS.map((event, i) => (
            <EventCard key={event.title.en} event={event} delay={i * 0.08} t={t} />
          ))}
        </div>
      </div>
    </section>
  );
}

function EventCard({ event, delay, t }) {
  return (
    <FadeIn delay={delay}>
      <article className="bg-white border border-stone-100 rounded-2xl p-5 shadow-sm hover:shadow-md hover:border-amber-200 transition-all duration-300">
        {/* Top row */}
        <div className="flex items-start justify-between mb-3">
          <div>
            <p className="font-display text-3xl text-amber-700 leading-none">
              {event.date}
            </p>
            <p className="font-body text-xs text-stone-400 tracking-widest uppercase mt-1">
              {event.year}
            </p>
          </div>
          {/* <span className="tag-pill text-amber-800 bg-amber-50 border border-amber-200 px-2.5 py-1 rounded-full">
            {t(event.tag)}
          </span> */}
        </div>

        {/* Title */}
        <h3 className="font-display text-2xl text-stone-900 font-semibold mb-2">
          {t(event.title)}
        </h3>

        {/* Description */}
        <p className="font-body text-stone-500 text-sm leading-relaxed">
          {t(event.description)}
        </p>

        <div className="mt-4 h-px bg-gradient-to-r from-amber-200 to-transparent" />
      </article>
    </FadeIn>
  );
}