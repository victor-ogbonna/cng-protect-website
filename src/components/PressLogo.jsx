import { useState } from "react";

/**
 * Renders `public/media/press/<slug>.svg` when one exists, and falls back to a
 * typographic plate built from `mark` + `face`. Drop real logo files in and
 * they take over with no code change.
 */
export default function PressLogo({ item, className = "" }) {
  const [useMark, setUseMark] = useState(false);
  const { slug, mark, face } = item;

  if (useMark || !slug) {
    return (
      <span
        aria-hidden="true"
        className={`grid size-11 shrink-0 place-items-center rounded-lg border border-line bg-panel-2 text-[15px] leading-none text-ink ${face} ${className}`}
      >
        {mark}
      </span>
    );
  }

  return (
    <img
      src={`/media/press/${slug}.svg`}
      alt=""
      onError={() => setUseMark(true)}
      className={`size-11 shrink-0 rounded-lg border border-line bg-panel-2 object-contain p-1.5 ${className}`}
    />
  );
}
