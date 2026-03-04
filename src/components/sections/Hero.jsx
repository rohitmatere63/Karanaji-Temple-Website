import { useState, useEffect } from "react";
import { SLIDES, UI_TEXT } from "../../data/templeData.js";
import { scrollToSection } from "../../utils/scroll";

export default function Hero({ t }) {
  const [current, setCurrent] = useState(0);
  const [fade, setFade] = useState(true);

  // Auto-advance every 4 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrent((prev) => (prev + 1) % SLIDES.length);
        setFade(true);
      }, 400);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const goTo = (index) => {
    setFade(false);
    setTimeout(() => {
      setCurrent(index);
      setFade(true);
    }, 400);
  };

  return (
    <section id="home" className="relative h-[92vh] min-h-[500px] overflow-hidden">

      {/* Slide Image */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-opacity duration-500"
        style={{
          backgroundImage: `url(${SLIDES[current].url})`,
          opacity: fade ? 1 : 0,
        }}
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/55" />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center px-6 text-center">
        <p className="font-body text-amber-400 text-xs tracking-[0.3em] uppercase mb-4">
          Est. 1962 · Pune, Maharashtra
        </p>

        <h1 className="font-display text-white text-4xl md:text-6xl font-light leading-tight mb-3">
          Shri Mahadev <br />
          <em className="text-amber-400 not-italic">Mandir</em>
        </h1>

        <div className="gold-line w-24 mx-auto my-4" />

        {/* Slide caption */}
        <p
          className="font-body text-stone-300 text-base md:text-lg max-w-sm mx-auto mb-8 transition-opacity duration-400"
          style={{ opacity: fade ? 1 : 0 }}
        >
          {t(SLIDES[current].caption)}
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 w-full max-w-xs mx-auto">
          <button
            onClick={() => scrollToSection("schedule")}
            className="font-body text-sm px-6 py-3 bg-amber-700 text-white rounded hover:bg-amber-600 transition-colors tracking-wide w-full"
          >
            {t(UI_TEXT.todaySchedule)}
          </button>
          <button
            onClick={() => scrollToSection("about")}
            className="font-body text-sm px-6 py-3 border border-white/40 text-white rounded hover:border-amber-400 hover:text-amber-400 transition-colors tracking-wide w-full"
          >
            {t(UI_TEXT.learnMore)}
          </button>
        </div>
      </div>

      {/* Dot indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {SLIDES.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            className={`rounded-full transition-all duration-300 ${
              i === current
                ? "bg-amber-400 w-6 h-2"
                : "bg-white/40 w-2 h-2 hover:bg-white/70"
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>

      {/* Slide counter */}
      <div className="absolute bottom-6 right-4 z-10">
        <p className="font-body text-white/40 text-xs">
          {current + 1} / {SLIDES.length}
        </p>
      </div>
    </section>
  );
}