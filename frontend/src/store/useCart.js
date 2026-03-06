import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export const useCart = create(
  persist(
    (set, get) => ({
      cart: [],

      addToCart: (product) => {
        const cart = get().cart;
        const findItem = cart.find((item) => item._id === product._id);

        if (findItem) {
          // If exists, increase quantity
          const newCart = cart.map((item) =>
            item._id === product._id ? { ...item, qty: (item.qty || 1) + 1 } : item
          );
          set({ cart: newCart });
        } else {
          // If new, add to cart with qty 1
          set({ cart: [...cart, { ...product, qty: 1 }] });
        }
      },

      removeFromCart: (id) => {
        set({ cart: get().cart.filter((item) => item._id !== id) });
      },

      updateQty: (id, type) => {
        const cart = get().cart;

        const updatedCart = cart
          .map((item) => {
            if (item._id === id) {
              const newQty = type === "inc" ? (item.qty || 1) + 1 : (item.qty || 1) - 1;
              return { ...item, qty: newQty };
            }
            return item;
          })
          // Filter out any item where the quantity dropped to 0
          .filter((item) => item.qty > 0);

        set({ cart: updatedCart });
      },

      clearCart: () => set({ cart: [] }),
    }),
    { name: 'cart-storage' } // Saves cart to LocalStorage automatically
  )
);
