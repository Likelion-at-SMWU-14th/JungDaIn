import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { products } from "../data/products";

export const useProductStore = create(
  devtools(
    (_set, get) => ({
      products,
      getProductById: (id) => get().products.find((product) => product.id === id),
    }),
    { name: "ProductStore" }
  )
);
