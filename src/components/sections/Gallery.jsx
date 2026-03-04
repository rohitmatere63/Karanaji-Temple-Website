import { GALLERY_ITEMS } from "../../data/templeData.js";
import FadeIn from "../ui/FadeIn";
import SectionHeader from "../ui/SectionHeader";

export default function Gallery({ t }) {
  return (
    <section id="gallery" className="py-16 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        <SectionHeader eyebrow="Visual Journey" heading="Temple Gallery" />

        <div className="grid grid-cols-2 gap-3">
          {GALLERY_ITEMS.map((item, i) => (
            <GalleryCard key={i} item={item} delay={i * 0.08} t={t} />
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
        className="group relative rounded-2xl overflow-hidden aspect-square cursor-pointer bg-stone-200"
        role="img"
        aria-label={t(item.label)}
      >
        {/* Real image */}
        <img
          src={item.url}
          alt={t(item.label)}
          className="w-full h-full object-cover"
          loading="lazy"
        />

        {/* Label overlay — always visible at bottom */}
        <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/70 to-transparent">
          <p className="font-body text-white text-xs tracking-wide">
            {t(item.label)}
          </p>
        </div>
      </div>
    </FadeIn>
  );
}   