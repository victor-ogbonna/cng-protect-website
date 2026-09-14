/** Wordmark + the CNG-Protect shield mark. The PNG is keyed to transparency so
 *  the one file works on light, dark and brand-green grounds. */
export function Logo({ className = "h-9", showWord = true }) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <img
        src="/media/logo-mark.png"
        alt=""
        width="512"
        height="512"
        className="h-full w-auto"
      />
      {showWord && (
        <span className="text-[1.05rem] font-extrabold tracking-tight text-ink sm:text-lg">
          CNG<span className="text-brand">-</span>Protect
        </span>
      )}
    </span>
  );
}
