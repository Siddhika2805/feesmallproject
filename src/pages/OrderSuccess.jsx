import { Link, useLocation } from "react-router-dom";

export default function OrderSuccess() {
  const { state } = useLocation();
  return (
    <main className="page-shell success-shell">
      <section className="empty-state success-card">
        <span className="success-check">✓</span><span className="eyebrow">ORDER CONFIRMED</span>
        <h1>Good choice.<br /><em>Enjoy the everyday.</em></h1>
        <p>Your demo order has been placed successfully.</p>
        {state && <div className="success-details"><span>{state.count} items</span><strong>₹{state.total.toLocaleString("en-IN")}</strong></div>}
        <Link to="/products" className="button button-dark">Back to shopping <span>→</span></Link>
      </section>
    </main>
  );
}
