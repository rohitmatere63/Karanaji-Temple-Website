import FadeIn from "./FadeIn";

export default function SectionHeader({ eyebrow, heading, theme = "light" }) {
  const eyebrowColor = theme === "dark" ? "text-amber-500/80" : "text-amber-700";
  const headingColor = theme === "dark" ? "text-amber-100"   : "text-stone-900";

  return (
    <FadeIn>
      <div className="text-center mb-10">
        <p className={`font-body text-xs tracking-[0.3em] uppercase mb-3 ${eyebrowColor}`}>
          {eyebrow}
        </p>
        <h2 className={`font-display text-4xl font-light ${headingColor}`}>
          {heading}
        </h2>
        <div className="gold-line w-20 mx-auto mt-4" />
      </div>
    </FadeIn>
  );
}