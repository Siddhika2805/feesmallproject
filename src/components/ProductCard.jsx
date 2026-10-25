import { useDispatch } from "react-redux";
import { addToCart } from "../features/cart/cartSlice";

export default function ProductCard({ product, onAdded }) {
  const dispatch = useDispatch();

  function handleAdd() {
    dispatch(addToCart(product));
    onAdded(`${product.name} added to your cart.`);
  }

  return (
    <article className="product-card">
      <div className="product-image-wrap">
        <img className="product-image" src={product.image} alt={product.name} loading="lazy" />
        <span className="product-category">{product.category}</span>
      </div>
      <div className="product-info">
        <div className="product-heading">
          <h3>{product.name}</h3>
          <strong>₹{product.price.toLocaleString("en-IN")}</strong>
        </div>
        <p>{product.description}</p>
        <button className="button button-dark button-full" onClick={handleAdd}>
          <span>＋</span> Add to cart
        </button>
      </div>
    </article>
  );
}
