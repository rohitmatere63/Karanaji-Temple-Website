import { useState } from "react";
import "./styles/global.css";

import { useLanguage } from "./hooks/useLanguage";

import Layout   from "./components/layout/Layout";
import Hero     from "./components/sections/Hero";
import Marquee  from "./components/sections/Marquee";
import About    from "./components/sections/About";
import Schedule from "./components/sections/Schedule";
import Events   from "./components/sections/Events";
import Gallery  from "./components/sections/Gallery";
import Updates  from "./components/sections/Updates";
import Contact  from "./components/sections/Contact";

export default function App() {
  const [activeSection, setActiveSection] = useState("home");
  const { lang, setLang, t } = useLanguage();

  return (
    <Layout
      lang={lang}
      setLang={setLang}
      activeSection={activeSection}
      onNavClick={setActiveSection}
      t={t}
    >
      <Hero     t={t} />
      <Marquee  />
      <About    t={t} />
      <Schedule t={t} />
      <Events   t={t} />
      <Gallery  t={t} />
      <Updates  t={t} />
      <Contact  t={t} lang={lang} />
    </Layout>
  );
}