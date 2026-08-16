import { Link } from "react-router-dom";
import { useCartStore } from "../store/useCartStore";
import CartItem from "../components/CartItem";
import "./CartPage.css";

function CartPage() {
  const cartItems = useCartStore((state) => state.cartItems);

  return (
    <div className="cart-page">
      <h1 className="cart-page__title">The goods you saved</h1>

      {cartItems.length === 0 ? (
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
