import { useCartStore } from "../store/useCartStore";
import "./ProductCard.css";

function ProductCard({ product }) {
  const addToCart = useCartStore((state) => state.addToCart);

  return (
    <button
      type="button"
      className="product-card"
      onClick={() => addToCart(product)}
      aria-label={`${product.name} 장바구니에 담기`}
    >
      <img src={product.image} alt={product.name} className="product-card__image" />
    </button>
  );
}

export default ProductCard;
