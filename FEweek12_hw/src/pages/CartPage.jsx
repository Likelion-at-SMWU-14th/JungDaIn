import { Link } from "react-router-dom";
import { useCartStore } from "../store/useCartStore";
import CartItem from "../components/CartItem";
import "./CartPage.css";

function CartPage() {
  const cartItems = useCartStore((state) => state.cartItems);

  const isEmpty = cartItems.length === 0;

  return (
    <div className={`cart-page${isEmpty ? " cart-page--empty" : ""}`}>
      <h1 className="cart-page__title">The goods you saved</h1>

      {isEmpty ? (
        <Link to="/" className="cart-page__empty">
          Do you wanna go shopping again?
        </Link>
      ) : (
        <div className="cart-page__grid">
          {cartItems.map((item) => (
            <CartItem key={item.id} item={item} />
          ))}
        </div>
      )}
    </div>
  );
}

export default CartPage;
