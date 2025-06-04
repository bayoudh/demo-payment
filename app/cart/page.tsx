"use client";

import Link from "next/link";
import { useCart } from "@/context/cart-context";
import { Button } from "@/components/ui/button";
import { CartItem } from "@/components/cart/cart-item";
import { CartSummary } from "@/components/cart/cart-summary";

export default function CartPage() {
  const { items, totalItems } = useCart();

  if (items.length === 0) {
    return (
      <div className="container flex flex-col items-center justify-center py-20 text-center">
        <h1 className="text-3xl font-bold tracking-tight">Your cart is empty</h1>
        <p className="mt-4 text-muted-foreground">
          Looks like you haven't added anything to your cart yet.
        </p>
        <Button asChild className="mt-8">
          <Link href="/products">Browse Products</Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="flex justify-center">
    <div className="container py-10">
      <h1 className="text-3xl font-bold tracking-tight">
        Your Cart ({totalItems} {totalItems === 1 ? "item" : "items"})
      </h1>
      <div className="mt-8 grid gap-8 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <div className="space-y-4">
            {items.map((item) => (
              <CartItem key={item.id} item={item} />
            ))}
          </div>
        </div>
        <div>
          <CartSummary />
        </div>
      </div>
    </div>
    </div>
  );
}