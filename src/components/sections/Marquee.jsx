import { MARQUEE_CHANTS } from "../../data/templeData.js";

export default function Marquee() {
  const repeated = [...MARQUEE_CHANTS, ...MARQUEE_CHANTS, ...MARQUEE_CHANTS, ...MARQUEE_CHANTS];

  return (
    <div className="bg-amber-700 overflow-hidden py-2.5">
      <div className="flex gap-12 whitespace-nowrap marquee-track font-body text-amber-100 text-xs tracking-widest uppercase">
        {repeated.map((chant, i) => (
          <span key={i}>{chant}</span>
        ))}
      </div>
    </div>
  );
}