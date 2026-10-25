import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { clearCart, decreaseQuantity, increaseQuantity, removeFromCart } from "../features/cart/cartSlice";

const formatPrice = (price) => `₹${price.toLocaleString("en-IN")}`;

export default function Cart() {
  const items = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const totalItems = items.reduce((total, item) => total + item.quantity, 0);
  const subtotal = items.reduce((total, item) => total + item.price * item.quantity, 0);

  function checkout() {
    if (items.length > 0) navigate("/checkout", { state: { items, subtotal, totalItems } });
  }

  if (items.length === 0) {
    return (
      <main className="page-shell">
        <section className="page-intro compact-intro"><span className="eyebrow">YOUR SELECTION</span><h1>Your cart.</h1><p>A few good things could go a long way.</p></section>
        <section className="empty-state cart-empty"><span className="empty-icon">↗</span><h2>Your cart is taking a little break.</h2><p>You haven't added anything just yet. Let's find something you'll love.</p><Link className="button button-dark" to="/products">Explore products <span>→</span></Link></section>
      </main>
    );
  }

  return (
    <main className="page-shell">
      <section className="page-intro compact-intro"><span className="eyebrow">YOUR SELECTION</span><h1>Your cart.</h1><p>{totalItems} {totalItems === 1 ? "item" : "items"} selected. Looking good.</p></section>
      <div className="cart-layout">
        <section className="cart-items">
          <div className="cart-table-head"><span>PRODUCT</span><span>QUANTITY</span><span>SUBTOTAL</span></div>
          {items.map((item) => (
            <article className="cart-row" key={item.id}>
              <div className="cart-product">
                <img src={item.image} alt={item.name} />
                <div><span className="product-category-text">{item.category}</span><h3>{item.name}</h3><p>{formatPrice(item.price)} each</p><button className="remove-link" onClick={() => dispatch(removeFromCart(item.id))}>Remove</button></div>
              </div>
              <div className="quantity-control">
                <button onClick={() => dispatch(decreaseQuantity(item.id))} aria-label={`Decrease ${item.name} quantity`}>−</button>
                <span>{item.quantity}</span>
                <button onClick={() => dispatch(increaseQuantity(item.id))} aria-label={`Increase ${item.name} quantity`}>＋</button>
              </div>
              <strong className="line-total">{formatPrice(item.price * item.quantity)}</strong>
            </article>
          ))}
          <div className="cart-bottom-links"><Link to="/products" className="text-link">← Continue shopping</Link><button className="remove-link" onClick={() => dispatch(clearCart())}>Clear cart</button></div>
        </section>
        <aside className="order-summary">
          <span className="eyebrow">THE TOTAL</span><h2>Order summary</h2>
          <div className="summary-line"><span>Items ({totalItems})</span><span>{formatPrice(subtotal)}</span></div>
          <div className="summary-line"><span>Delivery</span><span className="free-label">FREE</span></div>
          <div className="summary-line"><span>Taxes</span><span>Included</span></div>
          <div className="summary-total"><span>Total</span><strong>{formatPrice(subtotal)}</strong></div>
          <button className="button button-dark button-full" onClick={checkout}>Continue to checkout <span>→</span></button>
          <p className="secure-note">A little treat, just a few steps away.</p>
        </aside>
      </div>
    </main>
  );
}
