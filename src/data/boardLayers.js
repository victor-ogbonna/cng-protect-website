/**
 * The physical layer stack of the edge node, shared by the exploded-view
 * diagram and the legend beside it so the numbering can never drift apart.
 */
export const BOARD_LAYERS = [
  {
    y: 0,
    label: "IP65 lid + tamper loop",
    accent: "#94A3B8",
    parts: [{ kind: "switch" }],
  },
  {
    y: 92,
    label: "Winsen MH-440D NDIR sensor",
    accent: "#22D3EE",
    parts: [{ kind: "ndir" }],
  },
  {
    y: 184,
    label: "Custom PCB — ESP32-S3 · ATECC608 · 4G",
    accent: "#FF6B1A",
    parts: [{ kind: "pcb" }],
  },
  {
    y: 276,
    label: "Relay carrier — 30 A fuel cut-off",
    accent: "#34D399",
    parts: [{ kind: "relay" }],
  },
];
