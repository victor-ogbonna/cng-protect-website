import { useState } from "react";

/**
 * Renders `public/media/press/<slug>.png` when one exists, and falls back to a
 * typographic plate built from `mark` + `face` if the file is missing.
 *
 * The plate is deliberately white in both themes: several of these marks carry
 * their own background colour (BusinessDay red, TVC magenta, Guardian blue),
 * and they are only recognisable on the ground their owners designed them for.
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
      src={`/media/press/${slug}.png`}
      alt=""
      width="128"
      height="128"
      loading="lazy"
      onError={() => setUseMark(true)}
      className={`size-11 shrink-0 rounded-lg border border-line bg-white object-contain p-1 ${className}`}
    />
  );
}
