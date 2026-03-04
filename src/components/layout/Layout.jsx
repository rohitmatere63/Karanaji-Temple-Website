import Topbar from "./Topbar";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Layout({ children, lang, setLang, activeSection, onNavClick, t }) {
  return (
    <div className="relative">
      <div className="fixed top-0 left-0 right-0 z-50">
        <Topbar lang={lang} setLang={setLang} t={t} />
        <Navbar activeSection={activeSection} onNavClick={onNavClick} t={t} lang={lang} setLang={setLang} />
      </div>
      <main className="pt-[80px]">{children}</main>
      <Footer t={t} />
    </div>
  );
}

