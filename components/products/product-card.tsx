"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ShoppingCart } from "lucide-react";
import { useCart } from "@/context/cart-context";
import { Product } from "@/types/product";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { formatPrice } from "@/lib/format";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const { addItem } = useCart();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      whileHover={{ y: -5 }}
    >
      <Card className="overflow-hidden">
        <Link href={`/products/${product.id}`}>
          <div className="relative aspect-square overflow-hidden">
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-cover transition-transform duration-300 hover:scale-110"
            />
          </div>
        </Link>
        <CardContent className="p-4">
          <div className="space-y-1">
            <h3 className="font-medium">{product.name}</h3>
            <p className="text-sm text-muted-foreground line-clamp-2">
              {product.description}
            </p>
          </div>
        </CardContent>
        <CardFooter className="flex items-center justify-between p-4 pt-0">
          <span className="font-semibold">{formatPrice(product.price)}</span>
          <Button
            size="sm"
            className="gap-1"
            onClick={() => addItem(product)}
          >
            <ShoppingCart className="h-4 w-4" />
            Add
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
}