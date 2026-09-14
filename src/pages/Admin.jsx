import { useState } from "react";
import { Logo } from "../components/Brand";
import ThemeToggle from "../components/ThemeToggle";
import { Button, Card } from "../components/UI";

const FIELD =
  "w-full rounded-lg border border-line-strong bg-panel px-3.5 py-2.5 text-[0.95rem] text-ink " +
  "placeholder:text-faint transition-colors focus:border-brand focus:outline-none";

const COLUMNS = [
  ["at", "Received"],
  ["name", "Name"],
  ["email", "Email"],
  ["organisation", "Organisation"],
  ["role", "Role"],
  ["fleet_size", "Fleet"],
  ["message", "Notes"],
];

const fmt = (iso) => {
  if (!iso) return "—";
  const d = new Date(iso);
  return Number.isNaN(d.getTime())
    ? iso
    : d.toLocaleString(undefined, { dateStyle: "medium", timeStyle: "short" });
};

function toCsv(rows) {
  const esc = (v) => `"${String(v ?? "").replace(/"/g, '""')}"`;
  const head = COLUMNS.map(([, label]) => esc(label)).join(",");
  const body = rows.map((r) => COLUMNS.map(([key]) => esc(r[key])).join(",")).join("\n");
  return `${head}\n${body}`;
}

export default function Admin() {
  const [password, setPassword] = useState("");
  const [state, setState] = useState("idle"); // idle | loading | ready | error
  const [error, setError] = useState("");
  const [note, setNote] = useState("");
  const [rows, setRows] = useState([]);
  const [q, setQ] = useState("");

  async function load(e) {
    e?.preventDefault();
    setState("loading");
    setError("");
    try {
      const res = await fetch("/api/bookings", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ password }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || `Request failed (${res.status})`);
      setRows(data.bookings || []);
      setNote(data.note || "");
      setState("ready");
    } catch (err) {
      setError(err.message);
      setState("error");
    }
  }

  function download() {
    const blob = new Blob([toCsv(filtered)], { type: "text/csv;charset=utf-8" });
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = `cng-protect-bookings-${new Date().toISOString().slice(0, 10)}.csv`;
    a.click();
    URL.revokeObjectURL(a.href);
  }

  const needle = q.trim().toLowerCase();
  const filtered = needle
    ? rows.filter((r) =>
        COLUMNS.some(([k]) => String(r[k] ?? "").toLowerCase().includes(needle)),
      )
    : rows;

  return (
    <div className="min-h-dvh bg-canvas-2">
      <header className="border-b border-line bg-canvas">
        <div className="mx-auto flex h-16 w-full max-w-7xl items-center gap-4 px-5 sm:px-8">
          <a href="/" aria-label="Back to the CNG-Protect site">
            <Logo className="h-8" />
          </a>
          <span className="rounded-full border border-line bg-panel-2 px-2.5 py-0.5 font-mono text-[10px] tracking-[0.14em] text-muted uppercase">
            Admin
          </span>
          <div className="ml-auto flex items-center gap-2">
            <ThemeToggle />
            <Button href="/" variant="outline" size="sm">
              View site
            </Button>
          </div>
        </div>
      </header>

      <main className="mx-auto w-full max-w-7xl px-5 py-10 sm:px-8">
        <h1 className="text-2xl font-bold sm:text-3xl">Pilot bookings</h1>
        <p className="mt-2 max-w-2xl text-[0.95rem] leading-relaxed text-muted">
          Everyone who has requested pilot access through the site. The same submissions are
          emailed to you as they arrive.
        </p>

        {state !== "ready" ? (
          <Card hover={false} className="mt-8 max-w-md p-6 sm:p-8">
            <form onSubmit={load} className="grid gap-4">
              <label className="grid gap-1.5">
                <span className="text-[11px] font-medium tracking-wide text-muted uppercase">
                  Admin passphrase
                </span>
                <input
                  type="password"
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  autoComplete="current-password"
                  required
                  placeholder="••••••••"
                  className={FIELD}
                />
              </label>
              <Button as="button" type="submit" disabled={state === "loading"} className="disabled:opacity-60">
                {state === "loading" ? "Checking…" : "Unlock"}
              </Button>
              {error && (
                <p role="alert" className="text-[0.85rem] leading-relaxed text-danger">
                  {error}
                </p>
              )}
            </form>
          </Card>
        ) : (
          <>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <input
                value={q}
                onChange={(e) => setQ(e.target.value)}
                placeholder="Filter by name, email, organisation…"
                className={`${FIELD} max-w-xs`}
                aria-label="Filter bookings"
              />
              <span className="font-mono text-[12px] text-muted">
                {filtered.length} of {rows.length}
              </span>
              <div className="ml-auto flex gap-2">
                <Button as="button" type="button" variant="outline" size="sm" onClick={load}>
                  Refresh
                </Button>
                <Button
                  as="button"
                  type="button"
                  size="sm"
                  onClick={download}
                  disabled={!filtered.length}
                  className="disabled:opacity-60"
                >
                  Export CSV
                </Button>
              </div>
            </div>

            {note && (
              <p className="mt-4 rounded-lg border border-line bg-panel-2 px-4 py-3 text-[0.9rem] text-muted">
                {note}
              </p>
            )}

            {filtered.length === 0 ? (
              <Card hover={false} className="mt-5 p-10 text-center">
                <p className="text-[0.95rem] text-muted">
                  {rows.length ? "Nothing matches that filter." : "No bookings yet."}
                </p>
              </Card>
            ) : (
              <Card hover={false} className="mt-5 overflow-hidden p-0">
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse text-left text-[0.88rem]">
                    <thead>
                      <tr className="border-b border-line bg-panel-2">
                        {COLUMNS.map(([key, label]) => (
                          <th
                            key={key}
                            scope="col"
                            className="px-4 py-3 font-mono text-[10px] tracking-[0.12em] whitespace-nowrap text-muted uppercase"
                          >
                            {label}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {filtered.map((r) => (
                        <tr key={r.id} className="border-b border-line last:border-0 align-top">
                          <td className="px-4 py-3 font-mono text-[11.5px] whitespace-nowrap text-muted">
                            {fmt(r.at)}
                          </td>
                          <td className="px-4 py-3 font-medium whitespace-nowrap text-ink">
                            {r.name || "—"}
                          </td>
                          <td className="px-4 py-3 whitespace-nowrap">
                            {r.email ? (
                              <a href={`mailto:${r.email}`} className="text-brand hover:underline">
                                {r.email}
                              </a>
                            ) : (
                              "—"
                            )}
                          </td>
                          <td className="px-4 py-3 text-body">{r.organisation || "—"}</td>
                          <td className="px-4 py-3 whitespace-nowrap text-body">{r.role || "—"}</td>
                          <td className="px-4 py-3 whitespace-nowrap text-body">{r.fleet_size || "—"}</td>
                          <td className="max-w-sm px-4 py-3 text-muted">{r.message || "—"}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </Card>
            )}
          </>
        )}
      </main>
    </div>
  );
}
