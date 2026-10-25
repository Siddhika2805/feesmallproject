import React from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <main>
      <section className="hero">
        <div className="hero-copy">
          <span className="eyebrow"><span className="eyebrow-dot" /> THE EVERYDAY EDIT</span>
          <h1>Good things.<br /><em>Better living.</em></h1>
          <p>Thoughtful essentials for your space, your style, and everything in between.</p>
          <div className="hero-actions">
            <button className="button button-light" onClick={() => navigate("/products")}>Explore products <span>↗</span></button>
            <Link className="text-link hero-cart-link" to="/cart">View your cart <span>→</span></Link>
          </div>
          <div className="hero-note"><span className="note-stars">★★★★★</span> Small details. Everyday difference.</div>
        </div>
        <div className="hero-visual">
          <img src="https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?auto=format&fit=crop&w=1300&q=90" alt="Warm, minimal home interior" />
          <div className="floating-note"><span>01 / THE COLLECTION</span><strong>Made for your everyday.</strong></div>
          <div className="hero-stamp">LESS<br />BUT<br />BETTER</div>
        </div>
      </section>
      <section className="home-strip">
        <div><span className="strip-number">01</span><div><strong>Thoughtful design</strong><p>Useful things, beautifully considered.</p></div></div>
        <div><span className="strip-number">02</span><div><strong>Everyday quality</strong><p>Made to fit into your routine.</p></div></div>
        <div><span className="strip-number">03</span><div><strong>Easy shopping</strong><p>Find your next favourite in minutes.</p></div></div>
      </section>
      <section className="home-feature">
        <div><span className="eyebrow">A LITTLE SOMETHING FOR YOU</span><h2>Find your new<br /><em>favourite thing.</em></h2></div>
        <p>From practical accessories to details that make a room feel like home, discover a curated collection of everyday essentials.</p>
        <button className="button button-outline" onClick={() => navigate("/products")}>Shop the collection <span>↗</span></button>
      </section>
    </main>
  );
}
