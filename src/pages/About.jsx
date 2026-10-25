import { Link } from "react-router-dom";

export default function About() {
  return (
    <main className="page-shell about-page">
      <section className="about-hero">
        <div><span className="eyebrow">A NOTE ABOUT FORMA</span><h1>Everyday things,<br /><em>thoughtfully chosen.</em></h1></div>
        <p>We believe the objects around us should do more than fill a space. They should be useful, feel good to use, and bring a little intention to the everyday.</p>
      </section>
      <div className="about-image"><img src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1600&q=90" alt="Thoughtfully styled, warm modern living room" /></div>
      <section className="about-values">
        <div><span className="strip-number">01 / OUR POINT OF VIEW</span><h2>Less noise.<br /><em>More meaning.</em></h2></div>
        <div><p>Forma is a concept store built around the small things that make daily life feel a little more considered. Our collection brings together style, utility, and simplicity.</p><p>This mini store is a student project demonstrating product browsing, client-side navigation, and a shared shopping cart powered by Redux Toolkit.</p><Link to="/" className="button button-dark">Back to home <span>→</span></Link></div>
      </section>
    </main>
  );
}
