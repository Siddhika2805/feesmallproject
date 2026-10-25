import { useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { clearCart } from "../features/cart/cartSlice";

export default function Checkout() {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const order = location.state;

  useEffect(() => {
    if (!order || !order.items?.length) navigate("/cart", { replace: true });
  }, [order, navigate]);

  if (!order || !order.items?.length) return null;

  function placeOrder() {
    dispatch(clearCart());
    navigate("/order-success", { replace: true, state: { total: order.subtotal, count: order.totalItems } });
  }

  return (
    <main className="page-shell checkout-shell">
      <section className="page-intro compact-intro"><span className="eyebrow">ALMOST YOURS</span><h1>Checkout.</h1><p>Here's a final look at your selection.</p></section>
      <div className="checkout-card">
        <div><span className="eyebrow">ORDER SUMMARY</span><h2>Your items</h2>
          {order.items.map((item) => <div className="checkout-item" key={item.id}><img src={item.image} alt={item.name} /><div><strong>{item.name}</strong><span>Qty: {item.quantity}</span></div><strong>₹{(item.price * item.quantity).toLocaleString("en-IN")}</strong></div>)}
        </div>
        <div className="checkout-total"><span>Total ({order.totalItems} items)</span><strong>₹{order.subtotal.toLocaleString("en-IN")}</strong></div>
        <p className="demo-note">Demo checkout only — no payment or personal details are collected.</p>
        <button className="button button-dark button-full" onClick={placeOrder}>Place demo order <span>→</span></button>
        <Link className="text-link checkout-back" to="/cart">← Back to cart</Link>
      </div>
    </main>
  );
}
