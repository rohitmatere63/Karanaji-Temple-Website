import { TEMPLE_META } from "../../data/templeData.js";

export default function Topbar({ t }) {
  return (
    <div className="bg-amber-700 px-4 py-2">
      <p className="font-display text-white text-base font-semibold tracking-wide text-center leading-tight">
        {t(TEMPLE_META.name)}
      </p>
    </div>
  );
}