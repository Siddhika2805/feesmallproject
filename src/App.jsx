import React from "react";
import { useEffect } from "react";
import { Link, Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Cart from "./pages/Cart";
import About from "./pages/About";
import Checkout from "./pages/Checkout";
import OrderSuccess from "./pages/OrderSuccess";
import NotFound from "./pages/NotFound"

export default function App() {
  const items = useSelector((state) => state.cart.items);

  useEffect(() => {
    try {
      localStorage.setItem("forma-cart", JSON.stringify(items));
    } catch {
      // The app still works if localStorage is unavailable.
    }
  }, [items]);

  return (
    <div className="app">
      <div className="announcement">A LITTLE MORE THOUGHT IN EVERYDAY LIVING <span>✳</span> DISCOVER YOUR NEW FAVOURITE</div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/about" element={<About />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/order-success" element={<OrderSuccess />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <footer className="site-footer">
        <Link to="/" className="brand footer-brand"><span className="brand-mark">f.</span> forma</Link>
        <p>Everyday essentials, thoughtfully chosen.</p>
        <span>© {new Date().getFullYear()} FORMA. STUDENT PROJECT.</span>
      </footer>
    </div>
  );
}
