/**
 * Returns the pilot-access form submissions for the admin page.
 *
 * The Netlify API token never reaches the browser: the page posts a passphrase,
 * this function checks it against ADMIN_PASSWORD and then calls the API itself.
 *
 * Required environment variables (Netlify → Site configuration → Environment):
 *   ADMIN_PASSWORD     the passphrase you type on /admin
 *   NETLIFY_API_TOKEN  a personal access token (User settings → Applications)
 *   FORM_NAME          optional, defaults to "pilot-access"
 */
import { timingSafeEqual } from "node:crypto";

const json = (status, body) =>
  new Response(JSON.stringify(body), {
    status,
    headers: { "content-type": "application/json", "cache-control": "no-store" },
  });

/** Constant-time compare that tolerates differing lengths. */
function passwordMatches(given, expected) {
  const a = Buffer.from(String(given));
  const b = Buffer.from(String(expected));
  if (a.length !== b.length) return false;
  return timingSafeEqual(a, b);
}

export default async (req, context) => {
  if (req.method !== "POST") return json(405, { error: "Use POST." });

  const expected = process.env.ADMIN_PASSWORD;
  const token = process.env.NETLIFY_API_TOKEN;
  const formName = process.env.FORM_NAME || "pilot-access";
  const siteId = process.env.SITE_ID || context?.site?.id;

  if (!expected || !token) {
    return json(500, {
      error: "Server not configured. Set ADMIN_PASSWORD and NETLIFY_API_TOKEN in Netlify.",
    });
  }

  let body = {};
  try {
    body = await req.json();
  } catch {
    return json(400, { error: "Expected a JSON body." });
  }

  if (!passwordMatches(body.password, expected)) {
    // Slow brute force down a little without holding the function open long.
    await new Promise((r) => setTimeout(r, 600));
    return json(401, { error: "Wrong passphrase." });
  }

  const api = async (path) => {
    const res = await fetch(`https://api.netlify.com/api/v1${path}`, {
      headers: { authorization: `Bearer ${token}` },
    });
    if (res.status === 401 || res.status === 403) {
      // By far the likeliest cause, and otherwise an opaque failure.
      throw new Error(
        "NETLIFY_API_TOKEN was rejected — it has most likely expired. " +
          "Create a new one under Netlify → User settings → Applications → " +
          "Personal access tokens, update the environment variable, and redeploy. " +
          "Bookings are unaffected: they are still arriving by email and are " +
          "listed under Netlify → Forms.",
      );
    }
    if (!res.ok) throw new Error(`Netlify API ${res.status} on ${path}`);
    return res.json();
  };

  try {
    const forms = await api(`/sites/${siteId}/forms`);
    const form = forms.find((f) => f.name === formName);
    if (!form) return json(200, { bookings: [], note: `No form named "${formName}" yet.` });

    const subs = await api(`/forms/${form.id}/submissions?per_page=200`);
    const bookings = subs.map((s) => ({
      id: s.id,
      at: s.created_at,
      name: s.data?.name ?? "",
      email: s.data?.email ?? "",
      organisation: s.data?.organisation ?? "",
      role: s.data?.role ?? "",
      fleet_size: s.data?.fleet_size ?? "",
      message: s.data?.message ?? "",
    }));
    return json(200, { bookings });
  } catch (err) {
    return json(502, { error: err.message });
  }
};
