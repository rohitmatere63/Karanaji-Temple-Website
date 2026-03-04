import { NAV_LINKS, TEMPLE_META, UI_TEXT } from "../../data/templeData.js";
import { scrollToSection } from "../../utils/scroll";
// import { TEMPLE_META,NAV_LINKS } from "../../data/templateData";


export default function Footer({ t }) {
  return (
    <footer className="bg-stone-950 py-10 px-4">
      <div className="max-w-lg mx-auto">
        {/* Brand */}
        <div className="flex items-center gap-3 mb-6">
          <span className="text-2xl">🪔</span>
          <div>
            <div className="font-display text-amber-200 text-lg font-semibold">
              {t(TEMPLE_META.name)}
            </div>
            <div className="font-body text-xs text-stone-500 tracking-widest uppercase">
              Est. {TEMPLE_META.established} · {TEMPLE_META.location}
            </div>
          </div>
        </div>

        {/* Nav Links */}
        <div className="flex flex-wrap gap-x-4 gap-y-2 mb-6">
          {NAV_LINKS.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className="font-body text-xs text-stone-500 hover:text-amber-500 transition-colors"
            >
              {t(link.label)}
            </button>
          ))}
        </div>

        <div className="gold-line mb-6" />

        <div className="flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="font-body text-stone-600 text-xs">
            © {new Date().getFullYear()} {t(TEMPLE_META.name)} Trust.
          </p>
          {/* <p className="font-display text-amber-800/60 text-sm italic">
            ॐ नमः शिवाय
          </p> */}
        </div>
      </div>
    </footer>
  );
}