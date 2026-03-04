const LANGUAGES = [
  { code: "en", label: "EN" },
  { code: "hi", label: "हि" },
  { code: "mr", label: "म" },
];

export default function LanguageSwitcher({ lang, setLang }) {
  return (
    <div className="flex items-center gap-0.5">
      {LANGUAGES.map(({ code, label }, i) => (
        <span key={code} className="flex items-center gap-1">
          <button
            onClick={() => setLang(code)}
            className={`font-body text-xs px-2 py-0.5 rounded transition-all duration-200 ${
              lang === code
                ? "bg-amber-700 text-white"
                : "text-stone-500 hover:text-amber-700"
            }`}
          >
            {label}
          </button>
          {i < LANGUAGES.length - 1 && (
            <span className="text-stone-300 text-xs">|</span>
          )}
        </span>
      ))}
    </div>
  );
}