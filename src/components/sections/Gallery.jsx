import { GALLERY_ITEMS } from "../../data/templeData.js";
import FadeIn from "../ui/FadeIn";
import SectionHeader from "../ui/SectionHeader";

export default function Gallery({ t }) {
  return (
    <section id="gallery" className="py-16 px-4 bg-white">
      <div className="max-w-lg mx-auto">
        <SectionHeader eyebrow="Visual Journey" heading="Temple Gallery" />

        <div className="grid grid-cols-2 gap-3">
          {GALLERY_ITEMS.map((item, i) => (
            <GalleryCard key={item.label.en} item={item} delay={i * 0.08} t={t} />
          ))}
        </div>
      </div>
    </section>
  );
}

function GalleryCard({ item, delay, t }) {
  return (
    <FadeIn delay={delay}>
      <div
        className={`group relative rounded-2xl overflow-hidden aspect-square bg-gradient-to-br ${item.gradient} cursor-pointer`}
        role="img"
        aria-label={t(item.label)}
      >
        {/* Icon */}
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-5xl opacity-40 group-hover:opacity-70 group-hover:scale-110 transition-all duration-300">
            {item.icon}
          </span>
        </div>

        {/* Hover overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Label — always visible at bottom on mobile */}
        <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/60 to-transparent">
          <p className="font-body text-white text-xs tracking-wide">
            {t(item.label)}
          </p>
        </div>
      </div>
    </FadeIn>
  );
}