/**
 * Wordmark + shield mark. The mark reads as a safety shield with a methane
 * molecule at its centre — one carbon node, four hydrogen nodes.
 */
export function Logo({ className = "h-9" }) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <svg viewBox="0 0 40 44" className="h-full w-auto" role="img" aria-label="CNG-Protect">
        <defs>
          <linearGradient id="shieldFill" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#17243F" />
            <stop offset="100%" stopColor="#0A1224" />
          </linearGradient>
        </defs>
        <path
          d="M20 1.5 37.5 7v14.8c0 9.7-6.6 17-17.5 20.7C9.1 38.8 2.5 31.5 2.5 21.8V7L20 1.5Z"
          fill="url(#shieldFill)"
          stroke="#22D3EE"
          strokeWidth="1.6"
        />
        <circle cx="20" cy="21" r="4.2" fill="#FF6B1A" />
        <g stroke="#22D3EE" strokeWidth="1.4" strokeLinecap="round">
          <path d="M20 16.8V11.5M20 25.2v5.3M15.8 21h-5.1M24.2 21h5.1" />
        </g>
        <g fill="#34D399">
          <circle cx="20" cy="10.4" r="2" />
          <circle cx="20" cy="31.6" r="2" />
          <circle cx="9.6" cy="21" r="2" />
          <circle cx="30.4" cy="21" r="2" />
        </g>
      </svg>
      <span className="text-[1.05rem] font-extrabold tracking-tight text-white sm:text-lg">
        CNG<span className="text-safety-500">-</span>Protect
      </span>
    </span>
  );
}
