import React from "react";
import { NavLink, Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Navbar() {
  const items = useSelector((state) => state.cart.items);
  const itemCount = items.reduce((total, item) => total + item.quantity, 0);

  const linkClass = ({ isActive }) => isActive ? "nav-link active" : "nav-link";

  return (
    <header className="site-header">
      <div className="nav-inner">
        <Link to="/" className="brand"><span className="brand-mark">f.</span> forma</Link>
        <nav className="nav-links" aria-label="Main navigation">
          <NavLink to="/" end className={linkClass}>Home</NavLink>
          <NavLink to="/products" className={linkClass}>Products</NavLink>
          <NavLink to="/about" className={linkClass}>About</NavLink>
          <NavLink to="/cart" className={linkClass}>
            Cart <span className="cart-count">{itemCount}</span>
          </NavLink>
        </nav>
      </div>
    </header>
  );
}
