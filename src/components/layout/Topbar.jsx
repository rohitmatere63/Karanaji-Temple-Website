import LanguageSwitcher from "../ui/LanguageSwitcher";
import { TEMPLE_META } from "../../data/templeData.js";

export default function Topbar({ lang, setLang, t }) {
  return (
    <div className="bg-amber-700 px-4 py-2">
      <div className="flex items-center justify-between">
        {/* Phone on left */}
        {/* <p className="font-body text-amber-100 text-xs tracking-wide">
          📞 {TEMPLE_META.phone}
        </p> */}

        {/* Temple name centered */}
        <p className="font-display text-white text-base font-semibold tracking-wide absolute left-1/2 -translate-x-1/2">
          {t(TEMPLE_META.name)}
        </p>

        {/* Language switcher on right */}
        <LanguageSwitcher lang={lang} setLang={setLang} />
      </div>
    </div>
  );
}