"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
//import { toast } from "@/hooks/use-toast";
import { Product } from "@/types/product";

export type CartItem = {
  id: string;
  product: Product;
  quantity: number;
};

type CartContextType = {
  items: CartItem[];
  addItem: (product: Product, quantity?: number) => void;
  removeItem: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  clearCart: () => void;
  totalItems: number;
  subtotal: number;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);

  // Load cart from localStorage on client-side
  useEffect(() => {
    try {
      const savedCart = localStorage.getItem("cart");
      if (savedCart) {
        setItems(JSON.parse(savedCart));
      }
    } catch (error) {
      console.error("Failed to load cart from localStorage:", error);
    }
  }, []);

  // Save cart to localStorage when it changes
  useEffect(() => {
    try {
      localStorage.setItem("cart", JSON.stringify(items));
    } catch (error) {
      console.error("Failed to save cart to localStorage:", error);
    }
  }, [items]);

  const addItem = (product: Product, quantity = 1) => {
    setItems(prevItems => {
      // Check if the product is already in the cart
      const existingItemIndex = prevItems.findIndex(
        item => item.product.id === product.id
      );

      if (existingItemIndex !== -1) {
        // Update quantity of existing item
        const updatedItems = [...prevItems];
        updatedItems[existingItemIndex].quantity += quantity;
        
       /*  toast({
          title: "Item updated",
          description: `${product.name} quantity updated in your cart`,
          duration: 2000,
        }); */
        
        return updatedItems;
      } else {
        // Add new item
       /*  toast({
          title: "Item added",
          description: `${product.name} added to your cart`,
          duration: 2000,
        }); */
        
        return [...prevItems, { id: uuidv4(), product, quantity }];
      }
    });
  };

  const removeItem = (id: string) => {
    setItems(prevItems => {
      const itemToRemove = prevItems.find(item => item.id === id);
      if (itemToRemove) {
        /* toast({
          title: "Item removed",
          description: `${itemToRemove.product.name} removed from your cart`,
          duration: 2000,
        }); */
      }
      return prevItems.filter(item => item.id !== id);
    });
  };

  const updateQuantity = (id: string, quantity: number) => {
    if (quantity <= 0) {
      removeItem(id);
      return;
    }

    setItems(prevItems =>
      prevItems.map(item =>
        item.id === id ? { ...item, quantity } : item
      )
    );
  };

  const clearCart = () => {
    setItems([]);
   /*  toast({
      title: "Cart cleared",
      description: "All items have been removed from your cart",
      duration: 2000,
    }); */
  };

  const totalItems = items.reduce((total, item) => total + item.quantity, 0);
  
  const subtotal = items.reduce(
    (total, item) => total + item.product.price * item.quantity,
    0
  );

  const value = {
    items,
    addItem,
    removeItem,
    updateQuantity,
    clearCart,
    totalItems,
    subtotal,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}