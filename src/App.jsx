import Landing from "./pages/Landing";
import Admin from "./pages/Admin";

/**
 * Two routes, so no router dependency: Netlify's SPA rewrite serves index.html
 * for every path and we pick the page from the pathname.
 */
export default function App() {
  const path = window.location.pathname.replace(/\/+$/, "");
  return path === "/admin" ? <Admin /> : <Landing />;
}
