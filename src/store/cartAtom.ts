"use client";
import { Product } from '@/store/productAtom';
import { atom } from "jotai";

// Define the cart atom
export const cartAtom = atom<Product[]>([]);

// Action to add a product to the cart
export const addToCart = (product: Product, setCartProduct: (update: (prev: Product[]) => Product[]) => void) => {
  setCartProduct((prev: Product[]) => {
    const existingItem = prev.find((item) => item._id === product._id);
    if (existingItem) {
      return prev.map((item) =>
        item._id === product._id
          ? { ...item, quantity: item.stock + 1 }
          : item
      );
    }
    return [...prev, { ...product, quantity: 1 }];
  });
};

// Action to decrease product quantity
export const decreaseQuantity = (productId: string, setCartProduct: (update: (prev: Product[]) => Product[]) => void) => {
  setCartProduct((prev: Product[]) =>
    prev.map((item) =>
      item._id === productId
        ? { ...item, quantity: Math.max(item.stock - 1, 1) }
        : item
    )
  );
};

// Action to remove a product from the cart
export const removeFromCart = (productId: string, setCartProduct: (update: (prev: Product[]) => Product[]) => void) => {
  setCartProduct((prev: Product[]) => prev.filter((item) => item._id !== productId));
};
