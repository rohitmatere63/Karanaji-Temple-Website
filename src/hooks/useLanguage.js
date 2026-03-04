import { useState } from "react";

export function useLanguage() {
  const [lang, setLang] = useState("mr");

  // Helper — pass any { en, hi, mr } object and get the right string
  const t = (obj) => {
    if (!obj) return "";
    if (typeof obj === "string") return obj;
    return obj[lang] || obj.en || "";
  };

  return { lang, setLang, t };
}