import { useCartStore } from "../store/useCartStore";
import "./CartItem.css";

function CartItem({ item }) {
  const increaseQuantity = useCartStore((state) => state.increaseQuantity);
  const decreaseQuantity = useCartStore((state) => state.decreaseQuantity);
  const removeFromCart = useCartStore((state) => state.removeFromCart);

  return (
    <div className="cart-item">
      <div className="cart-item__stepper">
        <button type="button" onClick={() => decreaseQuantity(item.id)} aria-label="수량 감소">
          -
        </button>
        <span>{item.quantity}</span>
        <button type="button" onClick={() => increaseQuantity(item.id)} aria-label="수량 증가">
          +
        </button>
      </div>
      <img src={item.image} alt={item.name} className="cart-item__image" />
      <button type="button" className="cart-item__delete" onClick={() => removeFromCart(item.id)}>
        delete ?
      </button>
    </div>
  );
}

export default CartItem;
