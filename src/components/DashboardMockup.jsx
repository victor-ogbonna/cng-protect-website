import { useEffect, useMemo, useRef, useState } from "react";

const FLEET = [
  { id: "NODE-017", plate: "ENU-482-XA", route: "Enugu → Onitsha", base: 0 },
  { id: "NODE-024", plate: "LAG-119-KJ", route: "Lagos → Ibadan", base: 0 },
  { id: "NODE-031", plate: "ABJ-703-PC", route: "Abuja → Lokoja", base: 6 },
  { id: "NODE-042", plate: "PHC-288-RF", route: "PH → Aba", base: 0 },
];

/** Chart is drawn in % LEL: full scale 30, cut-off armed at 20 (typical for methane). */
const SCALE_MAX = 30;
const ALARM_LEL = 20;
const yFor = (v) => 51 - Math.min(v / SCALE_MAX, 1) * 41;

const HEX = "0123456789abcdef";
const randHash = () =>
  "0x" + Array.from({ length: 40 }, () => HEX[Math.floor(Math.random() * 16)]).join("");

/** Deterministic first frame so SSR/first paint doesn't flash empty. */
const seedLedger = () =>
  Array.from({ length: 5 }, (_, i) => ({
    key: `seed-${i}`,
    hash: randHash(),
    node: FLEET[i % FLEET.length].id,
    lel: [0, 0, 6, 0, 0][i],
    block: 2194887 - i,
  }));

export default function DashboardMockup() {
  const [tick, setTick] = useState(0);
  const [ledger, setLedger] = useState(seedLedger);
  const [selected, setSelected] = useState(0);
  const paused = useRef(false);

  useEffect(() => {
    const reduce = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;
    const id = setInterval(() => {
      if (paused.current) return;
      setTick((t) => t + 1);
      setLedger((rows) => {
        const node = FLEET[Math.floor(Math.random() * FLEET.length)];
        const next = {
          key: `${Date.now()}-${Math.random()}`,
          hash: randHash(),
          node: node.id,
          lel: node.base ? node.base + Math.floor(Math.random() * 4) : 0,
          block: 2194887 + Math.floor(Math.random() * 40),
        };
        return [next, ...rows].slice(0, 5);
      });
    }, 2600);
    return () => clearInterval(id);
  }, []);

  /** Methane trace: flat-zero for healthy nodes, a low simmer for NODE-031. */
  const trace = useMemo(() => {
    const v = FLEET[selected].base;
    return Array.from({ length: 40 }, (_, i) => {
      const n = Math.sin((i + tick) * 0.6) * 0.5 + Math.sin((i + tick) * 0.21) * 0.5;
      return Math.max(0, v ? v + n * 2.2 : 0);
    });
  }, [selected, tick]);

  const active = FLEET[selected];
  const level = active.base ? Math.round(trace[trace.length - 1] * 10) / 10 : 0;
  const warn = level > 4;

  // 0% sits just above the bottom gridline so a healthy flat trace still reads.
  const points = trace
    .map((v, i) => `${(i / (trace.length - 1)) * 320},${yFor(v)}`)
    .join(" ");

  return (
    <div
      onMouseEnter={() => (paused.current = true)}
      onMouseLeave={() => (paused.current = false)}
      className="overflow-hidden rounded-2xl border border-navy-500/70 bg-navy-900/90 shadow-2xl shadow-black/50 backdrop-blur"
    >
      {/* window chrome */}
      <div className="flex items-center gap-3 border-b border-navy-600 bg-navy-800/80 px-4 py-2.5">
        <div className="flex gap-1.5">
          <span className="size-2.5 rounded-full bg-navy-500" />
          <span className="size-2.5 rounded-full bg-navy-500" />
          <span className="size-2.5 rounded-full bg-navy-500" />
        </div>
        <p className="font-mono text-[11px] text-slate-500">
          app.cngprotect.io<span className="text-slate-600">/fleet/ogbontor-transit</span>
        </p>
        <span className="ml-auto inline-flex items-center gap-1.5 font-mono text-[10px] text-green-safe">
          <span className="size-1.5 animate-pulse rounded-full bg-green-safe" />
          LIVE
        </span>
      </div>

      <div className="grid gap-px bg-navy-600/60 sm:grid-cols-[1fr_1.35fr]">
        {/* ---- fleet list ---- */}
        <div className="bg-navy-900 p-4">
          <p className="font-mono text-[10px] tracking-[0.16em] text-slate-500 uppercase">
            Fleet · 4 nodes
          </p>
          <ul className="mt-3 space-y-1.5">
            {FLEET.map((v, i) => {
              const isWarn = v.base > 0;
              const on = i === selected;
              return (
                <li key={v.id}>
                  <button
                    type="button"
                    onClick={() => setSelected(i)}
                    aria-pressed={on}
                    className={`flex w-full items-center gap-2.5 rounded-lg border px-2.5 py-2 text-left transition-colors ${
                      on
                        ? "border-cyan-flow/50 bg-navy-700"
                        : "border-transparent hover:border-navy-500 hover:bg-navy-800"
                    }`}
                  >
                    <span
                      className={`size-2 shrink-0 rounded-full ${
                        isWarn ? "bg-safety-500" : "bg-green-safe"
                      }`}
                    />
                    <span className="min-w-0 flex-1">
                      <span className="block truncate font-mono text-[11.5px] font-medium text-white">
                        {v.plate}
                      </span>
                      <span className="block truncate text-[10.5px] text-slate-500">{v.route}</span>
                    </span>
                    <span
                      className={`shrink-0 font-mono text-[10px] ${
                        isWarn ? "text-safety-300" : "text-slate-500"
                      }`}
                    >
                      {isWarn ? "WATCH" : "SAFE"}
                    </span>
                  </button>
                </li>
              );
            })}
          </ul>

          <dl className="mt-4 grid grid-cols-2 gap-2 border-t border-navy-700 pt-4">
            {[
              ["Uptime", "99.4%"],
              ["Cut-offs", "0"],
              ["Signed pkts", "1.2 M"],
              ["Audit gaps", "0"],
            ].map(([k, val]) => (
              <div key={k}>
                <dt className="text-[10px] text-slate-500">{k}</dt>
                <dd className="font-mono text-[13px] font-semibold text-white">{val}</dd>
              </div>
            ))}
          </dl>
        </div>

        {/* ---- telemetry detail ---- */}
        <div className="bg-navy-900 p-4">
          <div className="flex flex-wrap items-start justify-between gap-3">
            <div>
              <p className="font-mono text-[11px] text-slate-500">{active.id}</p>
              <p className="text-sm font-semibold text-white">{active.plate}</p>
            </div>
            <span
              className={`rounded-md border px-2.5 py-1 font-mono text-[10px] font-bold tracking-wider ${
                warn
                  ? "border-safety-500/50 bg-safety-500/10 text-safety-300"
                  : "border-green-safe/40 bg-green-safe/10 text-green-safe"
              }`}
            >
              {warn ? "ELEVATED" : "SAFE"}
            </span>
          </div>

          <div className="mt-3 grid grid-cols-3 gap-2">
            {[
              ["Methane", `${level.toFixed(1)}% LEL`, warn ? "text-safety-300" : "text-green-safe"],
              ["Cabin", "32.8 °C", "text-white"],
              ["Cut-off", "ARMED", "text-cyan-flow"],
            ].map(([k, val, tone]) => (
              <div key={k} className="rounded-lg border border-navy-600 bg-navy-800/70 px-2.5 py-2">
                <p className="text-[9.5px] tracking-wide text-slate-500 uppercase">{k}</p>
                <p className={`font-mono text-[13px] font-bold ${tone}`}>{val}</p>
              </div>
            ))}
          </div>

          {/* methane trace */}
          <div className="mt-3 rounded-lg border border-navy-600 bg-navy-950/70 p-2.5">
            <svg viewBox="0 0 320 60" className="h-16 w-full" aria-hidden="true">
              <g stroke="#1F3055" strokeWidth="0.8">
                <path d="M0 10h320M0 33h320M0 56h320" />
              </g>
              <path
                d={`M0 ${yFor(ALARM_LEL)}h320`}
                stroke="#FF6B1A"
                strokeOpacity="0.5"
                strokeWidth="1"
                strokeDasharray="4 4"
              />
              <polyline
                points={points}
                fill="none"
                stroke={warn ? "#FF6B1A" : "#34D399"}
                strokeWidth="1.8"
                strokeLinejoin="round"
              />
            </svg>
            <div className="flex justify-between font-mono text-[9px] text-slate-600">
              <span>−120 s</span>
              <span className="text-safety-300/70">cut-off threshold {ALARM_LEL}% LEL</span>
              <span>now</span>
            </div>
          </div>

          {/* on-chain ledger */}
          <p className="mt-4 font-mono text-[10px] tracking-[0.16em] text-slate-500 uppercase">
            Lisk attestation ledger
          </p>
          <ul className="mt-2 space-y-1">
            {ledger.map((row) => (
              <li
                key={row.key}
                className="flex items-center gap-2 rounded border border-navy-700/80 bg-navy-800/40 px-2 py-1.5 font-mono text-[10px]"
              >
                <span className="text-green-safe">✓</span>
                <span className="min-w-0 flex-1 truncate text-cyan-flow/80">{row.hash}</span>
                <span className="hidden shrink-0 text-slate-500 sm:inline">#{row.block}</span>
                <span
                  className={`shrink-0 ${row.lel ? "text-safety-300" : "text-slate-500"}`}
                >
                  {row.lel ? `${row.lel}%` : "0%"}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
