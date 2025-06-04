"use client";

import Image from "next/image";
import Link from "next/link";
import { Minus, Plus, Trash2 } from "lucide-react";
import { CartItem as CartItemType, useCart } from "@/context/cart-context";
import { Button } from "@/components/ui/button";
import { formatPrice } from "@/lib/format";

interface CartItemProps {
  item: CartItemType;
}

export function CartItem({ item }: CartItemProps) {
  const { updateQuantity, removeItem } = useCart();
  const { product, quantity, id } = item;

  return (
    <div className="flex items-start gap-4 rounded-lg border p-4">
      <div className="relative aspect-square h-20 w-20 overflow-hidden rounded-md">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover"
        />
      </div>
      <div className="flex flex-1 flex-col gap-1">
        <div className="flex justify-between">
          <Link
            href={`/products/${product.id}`}
            className="font-semibold hover:underline"
          >
            {product.name}
          </Link>
          <span className="font-medium">{formatPrice(product.price)}</span>
        </div>
        <p className="text-sm text-muted-foreground">{product.category}</p>
        <div className="mt-2 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="icon"
              className="h-8 w-8"
              onClick={() => updateQuantity(id, quantity - 1)}
              disabled={quantity === 1}
            >
              <Minus className="h-3 w-3" />
              <span className="sr-only">Decrease quantity</span>
            </Button>
            <span className="w-8 text-center text-sm">{quantity}</span>
            <Button
              variant="outline"
              size="icon"
              className="h-8 w-8"
              onClick={() => updateQuantity(id, quantity + 1)}
            >
              <Plus className="h-3 w-3" />
              <span className="sr-only">Increase quantity</span>
            </Button>
          </div>
          <Button
            variant="ghost"
            size="icon"
            className="text-muted-foreground hover:text-destructive"
            onClick={() => removeItem(id)}
          >
            <Trash2 className="h-4 w-4" />
            <span className="sr-only">Remove item</span>
          </Button>
        </div>
      </div>
    </div>
  );
}