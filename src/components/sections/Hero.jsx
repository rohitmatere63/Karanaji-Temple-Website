import { useState, useEffect, useRef } from "react";
import { SLIDES, UI_TEXT } from "../../data/templeData.js";
import { scrollToSection } from "../../utils/scroll.js";

const EXTENDED_SLIDES = [...SLIDES, SLIDES[0]];

export default function Hero({ t }) {
  const [current, setCurrent] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const timerRef = useRef(null);

  useEffect(() => {
    timerRef.current = setInterval(() => {
      setCurrent((prev) => prev + 1);
      setIsTransitioning(true);
    }, 8000);
    return () => clearInterval(timerRef.current);
  }, []);

  useEffect(() => {
    if (current === EXTENDED_SLIDES.length - 1) {
      setTimeout(() => {
        setIsTransitioning(false);
        setCurrent(0);
      }, 800);
    }
  }, [current]);

  const goTo = (index) => {
    setIsTransitioning(true);
    setCurrent(index);
    clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setCurrent((prev) => prev + 1);
      setIsTransitioning(true);
    }, 8000);
  };

  return (
    <section id="home" className="relative h-[92vh] min-h-[500px] overflow-hidden">

      {/* Sliding track — all images in a row */}
      <div
        className="absolute inset-0 flex"
        style={{
          width: `${EXTENDED_SLIDES.length * 100}%`,
          transform: `translateX(-${(current * 100) / EXTENDED_SLIDES.length}%)`,
          transition: isTransitioning ? "transform 0.8s ease-in-out" : "none",
        }}
      >
        {EXTENDED_SLIDES.map((slide, i) => (
          <div
            key={i}
            className="h-full bg-cover bg-center flex-shrink-0"
            style={{
              width: `${100 / EXTENDED_SLIDES.length}%`,
              backgroundImage: `url(${slide.url})`,
            }}
          />
        ))}
      </div>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/55" style={{ zIndex: 2 }} />

      {/* Content */}
      <div
        className="relative h-full flex flex-col items-center justify-center px-6 text-center"
        style={{ zIndex: 3 }}
      >
        {/* <p className="font-body text-amber-400 text-xs tracking-[0.3em] uppercase mb-4">
          Est. 1962 · Pune, Maharashtra
        </p> */}

        {/* <h1 className="font-display text-white text-4xl md:text-6xl font-light leading-tight mb-3">
          Shri Mahadev <br />
          <em className="text-amber-400 not-italic">Mandir</em>
        </h1> */}

        <div className="gold-line w-24 mx-auto my-4" />

        {/* <p className="font-body text-stone-300 text-base md:text-lg max-w-sm mx-auto mb-8">
          {t(SLIDES[current].caption)}
        </p> */}

        {/* <div className="flex flex-col sm:flex-row gap-3 w-full max-w-xs mx-auto">
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
        </div> */}
      </div>

      {/* Left arrow */}
      <button
        onClick={() => goTo((current - 1 + SLIDES.length) % SLIDES.length)}
        className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/30 hover:bg-black/50 text-white flex items-center justify-center transition-colors"
        style={{ zIndex: 3 }}
        aria-label="Previous slide"
      >
        ‹
      </button>

      {/* Right arrow */}
      <button
        onClick={() => goTo((current + 1) % SLIDES.length)}
        className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/30 hover:bg-black/50 text-white flex items-center justify-center transition-colors"
        style={{ zIndex: 3 }}
        aria-label="Next slide"
      >
        ›
      </button>

      {/* Dot indicators */}
      <div
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2"
        style={{ zIndex: 3 }}
      >
        {SLIDES.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            className={`rounded-full transition-all duration-300 ${
              i === current % SLIDES.length
                ? "bg-amber-400 w-6 h-2"
                : "bg-white/40 w-2 h-2"
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>

      {/* Slide counter */}
      <div className="absolute bottom-6 right-4" style={{ zIndex: 3 }}>
        <p className="font-body text-white/40 text-xs">
          {(current % SLIDES.length) + 1} / {SLIDES.length}
        </p>
      </div>
    </section>
  );
}