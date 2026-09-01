import { create } from "zustand";
import { devtools } from "zustand/middleware";

export const useCartStore = create(
  devtools(
    (set, get) => ({
      cartItems: [],

      addToCart: (product) =>
        set(
          (state) => {
            const existing = state.cartItems.find((item) => item.id === product.id);
            if (existing) {
              return {
                cartItems: state.cartItems.map((item) =>
                  item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
                ),
              };
            }
            return { cartItems: [...state.cartItems, { ...product, quantity: 1 }] };
          },
          undefined,
          "cart/addToCart"
        ),

      removeFromCart: (id) =>
        set(
          (state) => ({ cartItems: state.cartItems.filter((item) => item.id !== id) }),
          undefined,
          "cart/removeFromCart"
        ),

      increaseQuantity: (id) =>
        set(
          (state) => ({
            cartItems: state.cartItems.map((item) =>
              item.id === id ? { ...item, quantity: item.quantity + 1 } : item
            ),
          }),
          undefined,
          "cart/increaseQuantity"
        ),

      decreaseQuantity: (id) =>
        set(
          (state) => ({
            cartItems: state.cartItems.map((item) =>
              item.id === id && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item
            ),
          }),
          undefined,
          "cart/decreaseQuantity"
        ),

      getTotalCount: () => get().cartItems.reduce((sum, item) => sum + item.quantity, 0),
      getTotalPrice: () =>
        get().cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0),
    }),
    { name: "CartStore" }
  )
);
