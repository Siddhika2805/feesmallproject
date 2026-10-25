import { useMemo, useState } from "react";
import { products } from "../data/products";
import ProductCard from "../components/ProductCard";

export default function Products() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [notice, setNotice] = useState("");
  const categories = ["All", ...new Set(products.map((product) => product.category))];

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesSearch = product.name.toLowerCase().includes(search.toLowerCase());
      const matchesCategory = category === "All" || product.category === category;
      return matchesSearch && matchesCategory;
    });
  }, [search, category]);

  return (
    <main className="page-shell">
      <section className="page-intro">
        <span className="eyebrow">THE FORMA COLLECTION</span>
        <h1>Good design, <em>every day.</em></h1>
        <p>Useful essentials. Considered details. Things you'll reach for again and again.</p>
      </section>
      {notice && <div className="toast" role="status"><span>✓</span> {notice}<button onClick={() => setNotice("")} aria-label="Dismiss message">×</button></div>}
      <section className="catalog-toolbar">
        <div><span className="result-count">{filteredProducts.length} PRODUCTS</span><span className="toolbar-divider">/</span><span className="muted">Find your everyday favourite</span></div>
        <div className="catalog-controls">
          <label className="search-box"><span>⌕</span><input value={search} onChange={(event) => setSearch(event.target.value)} placeholder="Search products..." aria-label="Search products" /></label>
          <select value={category} onChange={(event) => setCategory(event.target.value)} aria-label="Filter by category">
            {categories.map((item) => <option key={item} value={item}>{item === "All" ? "All categories" : item}</option>)}
          </select>
        </div>
      </section>
      {filteredProducts.length > 0 ? (
        <section className="product-grid">
          {filteredProducts.map((product) => <ProductCard key={product.id} product={product} onAdded={setNotice} />)}
        </section>
      ) : (
        <div className="empty-state"><span className="empty-icon">⌕</span><h2>No products found</h2><p>Try a different search term or category.</p><button className="button button-outline" onClick={() => { setSearch(""); setCategory("All"); }}>Clear filters</button></div>
      )}
    </main>
  );
}
