import { BOARD_LAYERS } from "../data/boardLayers";

/**
 * Exploded view of the edge-node stack: enclosure lid, NDIR sensor, the custom
 * PCB (ESP32-S3 + ATECC608 + 4G modem), and the relay carrier board.
 */

export default function BoardDiagram() {
  return (
    <svg
      viewBox="0 0 560 420"
      className="h-auto w-full"
      role="img"
      aria-label="Exploded view of the edge node: IP65 lid with tamper microswitch loop, Winsen MH-440D NDIR methane sensor, the custom PCB carrying the ESP32-S3 and ATECC608 secure element with a 4G modem, and the relay carrier board driving the 30 amp fuel cut-off."
    >
      <defs>
        <linearGradient id="bd-plate" x1="0" y1="0" x2="1" y2="0.6">
          <stop offset="0%" stopColor="#16213A" />
          <stop offset="100%" stopColor="#0A1122" />
        </linearGradient>
        <linearGradient id="bd-pcb" x1="0" y1="0" x2="1" y2="0.6">
          <stop offset="0%" stopColor="#123A2E" />
          <stop offset="100%" stopColor="#0B2620" />
        </linearGradient>
      </defs>

      {BOARD_LAYERS.map((layer, i) => {
        const isPcb = layer.parts[0].kind === "pcb";
        return (
          <g key={i} transform={`translate(40 ${28 + layer.y})`}>
            {/* isometric plate */}
            <path
              d="M0 34 L140 0 L340 44 L200 78 Z"
              fill={isPcb ? "url(#bd-pcb)" : "url(#bd-plate)"}
              stroke={layer.accent}
              strokeOpacity="0.55"
              strokeWidth="1.6"
            />

            {/* per-layer components */}
            {layer.parts[0].kind === "switch" && (
              <g>
                <path
                  d="M18 32 L140 5 L322 44 L200 71"
                  fill="none"
                  stroke="#FF6B1A"
                  strokeWidth="1.4"
                  strokeDasharray="6 4"
                  strokeOpacity="0.75"
                />
                {[
                  [26, 31],
                  [140, 7],
                  [312, 44],
                  [200, 68],
                ].map(([x, y], k) => (
                  <circle key={k} cx={x} cy={y} r="3.4" fill="#FF6B1A" />
                ))}
              </g>
            )}

            {layer.parts[0].kind === "ndir" && (
              <g>
                <ellipse cx="160" cy="38" rx="42" ry="15" fill="#0E2A38" stroke="#22D3EE" strokeWidth="1.5" />
                <ellipse cx="160" cy="32" rx="42" ry="15" fill="#123B4D" stroke="#22D3EE" strokeWidth="1.5" />
                <ellipse cx="160" cy="32" rx="22" ry="8" fill="#0A1122" stroke="#22D3EE" strokeOpacity="0.6" />
                {/* optical bench: IR source → detector */}
                <path d="M142 32h36" stroke="#22D3EE" strokeWidth="1.4" strokeDasharray="3 3" />
                <circle cx="140" cy="32" r="3" fill="#22D3EE" />
                <circle cx="180" cy="32" r="3" fill="#34D399" />
              </g>
            )}

            {isPcb && (
              <g>
                {/* copper traces */}
                <g stroke="#34D399" strokeOpacity="0.4" strokeWidth="1.1" fill="none">
                  <path d="M60 36 L120 22 L190 39 L250 26" />
                  <path d="M78 44 L150 27 L224 45" />
                  <path d="M110 50 L176 34 L258 53" />
                </g>
                {/* ESP32-S3 */}
                <g>
                  <path d="M96 30 L142 19 L182 29 L136 40 Z" fill="#0B1B18" stroke="#FF6B1A" strokeWidth="1.6" />
                  <text x="139" y="33" textAnchor="middle" className="fill-safety-300 font-mono text-[8px] font-bold">
                    ESP32-S3
                  </text>
                </g>
                {/* ATECC608 secure element */}
                <g>
                  <path d="M198 40 L224 34 L246 40 L220 46 Z" fill="#0B1B18" stroke="#22D3EE" strokeWidth="1.5" />
                  <text x="222" y="42.5" textAnchor="middle" className="fill-cyan-flow font-mono text-[7px] font-bold">
                    ATECC608
                  </text>
                </g>
                {/* 4G modem + SIM */}
                <g>
                  <path d="M252 46 L288 37 L312 44 L276 53 Z" fill="#0B1B18" stroke="#94A3B8" strokeWidth="1.3" />
                  <text x="282" y="46.5" textAnchor="middle" className="fill-slate-400 font-mono text-[7px]">
                    4G / SIM
                  </text>
                </g>
                {/* header pins */}
                <g fill="#FFB27A">
                  {[0, 1, 2, 3, 4, 5].map((k) => (
                    <circle key={k} cx={34 + k * 8} cy={38 - k * 1.9} r="1.7" />
                  ))}
                </g>
              </g>
            )}

            {layer.parts[0].kind === "relay" && (
              <g>
                <path d="M120 30 L168 18 L212 30 L164 42 Z" fill="#0A1122" stroke="#34D399" strokeWidth="1.6" />
                <text x="166" y="32" textAnchor="middle" className="fill-green-safe font-mono text-[8px] font-bold">
                  30 A RELAY
                </text>
                {/* harness out to the fuel pump */}
                <path d="M212 34 L300 58" stroke="#FF6B1A" strokeWidth="2.4" strokeLinecap="round" />
                <path d="M212 40 L298 64" stroke="#1F3055" strokeWidth="2.4" strokeLinecap="round" />
              </g>
            )}

            {/* leader line + label */}
            <path
              d={`M340 44 L400 ${44 - layer.y * 0.06} L${420} ${44 - layer.y * 0.06}`}
              fill="none"
              stroke={layer.accent}
              strokeOpacity="0.4"
              strokeWidth="1.2"
            />
            <circle cx="340" cy="44" r="2.6" fill={layer.accent} />
            <text
              x="428"
              y={48 - layer.y * 0.06}
              className="fill-slate-300 font-mono text-[9.5px]"
              style={{ fill: layer.accent }}
            >
              {`0${i + 1}`}
            </text>
          </g>
        );
      })}

      {/* stack alignment axis */}
      <g stroke="#1F3055" strokeWidth="1.4" strokeDasharray="4 6">
        <path d="M180 40v330M380 70v330" />
      </g>
    </svg>
  );
}
