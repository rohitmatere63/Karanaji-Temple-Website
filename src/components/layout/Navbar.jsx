import { useState } from "react";
import { NAV_LINKS, UI_TEXT } from "../../data/templeData.js";
import { useScrolled } from "../../hooks/useScrolled.js";
import { scrollToSection } from "../../utils/scroll.js";
import LanguageSwitcher from "../ui/LanguageSwitcher";

export default function Navbar({ activeSection, onNavClick, t, lang, setLang }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const scrolled = useScrolled(40);

  const handleClick = (id) => {
    scrollToSection(id);
    onNavClick(id);
    setMenuOpen(false);
  };

  return (
    <nav
      className={`transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-sm shadow-sm border-b border-stone-200"
          : "bg-white/90"
      }`}
    >
      {/* Desktop */}
      <div className="hidden md:flex items-center justify-center h-12 relative px-4">

        {/* Centered nav links */}
        <div className="flex items-center justify-center gap-1">
          {NAV_LINKS.map((link) => (
            <button
              key={link.id}
              onClick={() => handleClick(link.id)}
              className={`font-body text-sm px-3 py-2 rounded transition-colors ${
                activeSection === link.id
                  ? "text-amber-700 font-medium"
                  : "text-stone-600 hover:text-stone-900"
              }`}
            >
              {t(link.label)}
            </button>
          ))}
        </div>

        {/* Right side — language + visit us */}
        <div className="flex items-center gap-2 absolute right-4">
          
          <button
            onClick={() => handleClick("contact")}
            className="font-body text-sm px-4 py-2 bg-amber-700 text-white rounded hover:bg-amber-800 transition-colors"
          >
            {t(UI_TEXT.visitUs)}
          </button>
          <LanguageSwitcher lang={lang} setLang={setLang} />
        </div>

      </div>

      {/* Mobile — hamburger */}
      <div className="md:hidden flex items-center justify-between px-4 h-12">
  {/* Language on left */}
  <LanguageSwitcher lang={lang} setLang={setLang} />

  {/* Hamburger on right */}
  <button
    aria-label="Toggle menu"
    onClick={() => setMenuOpen((prev) => !prev)}
    className="p-2"
  >
    <div className="w-5 flex flex-col gap-1.5">
      <span className={`block h-px bg-stone-800 transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2.5" : ""}`} />
      <span className={`block h-px bg-stone-800 transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
      <span className={`block h-px bg-stone-800 transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
    </div>
  </button>
</div>

      {/* Mobile Drawer */}
      {/* Mobile Drawer */}
{menuOpen && (
  <div className="md:hidden bg-white border-t border-stone-100 px-4 py-3 grid grid-cols-2 gap-1">
    {NAV_LINKS.map((link) => (
      <button
        key={link.id}
        onClick={() => handleClick(link.id)}
        className="font-body text-sm text-left py-2.5 px-3 rounded text-stone-700 hover:bg-amber-50 hover:text-amber-700 transition-colors"
      >
        {t(link.label)}
      </button>
    ))}
    <button
      onClick={() => handleClick("contact")}
      className="font-body text-sm text-left py-2.5 px-3 rounded text-amber-700 font-medium hover:bg-amber-50 transition-colors"
    >
      {t(UI_TEXT.visitUs)}
    </button>
  </div>
)}
    </nav>
  );
}