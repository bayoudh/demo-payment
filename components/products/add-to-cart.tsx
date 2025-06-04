"use client";

import { useState } from "react";
import { ShoppingCart, Minus, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
} from "@/components/ui/card";
import { Product } from "@/types/product";
import { useCart } from "@/context/cart-context";

interface AddToCartProps {
  product: Product;
}

export function AddToCart({ product }: AddToCartProps) {
  const [quantity, setQuantity] = useState(1);
  const { addItem } = useCart();

  const incrementQuantity = () => setQuantity((prev) => prev + 1);
  
  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };

  const handleAddToCart = () => {
    addItem(product, quantity);
    setQuantity(1);
  };

  return (
    <Card>
      <CardContent className="p-6">
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                size="icon"
                onClick={decrementQuantity}
                disabled={quantity === 1}
              >
                <Minus className="h-4 w-4" />
                <span className="sr-only">Decrease quantity</span>
              </Button>
              <span className="w-8 text-center">{quantity}</span>
              <Button variant="outline" size="icon" onClick={incrementQuantity}>
                <Plus className="h-4 w-4" />
                <span className="sr-only">Increase quantity</span>
              </Button>
            </div>
            <Button
              className="w-full max-w-[200px] gap-2"
              onClick={handleAddToCart}
            >
              <ShoppingCart className="h-4 w-4" />
              Add to Cart
            </Button>
          </div>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span>Free shipping</span>
              <span>On all orders</span>
            </div>
            <div className="flex justify-between">
              <span>Secure payment</span>
              <span>Via PayPal</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}