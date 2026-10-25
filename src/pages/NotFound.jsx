import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <main className="page-shell not-found">
      <span className="eyebrow">OOPS — WRONG TURN</span>
      <h1>404<span>.</span></h1>
      <h2>This page isn't on our shelves.</h2>
      <p>The page you're looking for may have moved or doesn't exist.</p>
      <Link to="/" className="button button-dark">Return home <span>→</span></Link>
    </main>
  );
}
