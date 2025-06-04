import { Suspense } from "react";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import { getProductById,products } from "@/data/products";
import { Skeleton } from "@/components/ui/skeleton";
import { AddToCart } from "@/components/products/add-to-cart";
import { formatPrice } from "@/lib/format";

interface ProductPageProps {
  params: {
    id: string;
  };
}
export function generateStaticParams() {
  return products.map((product) => ({
    id: product.id,
  }));
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const product = getProductById(params.id);

  if (!product) {
    return {
      title: "Product Not Found",
    };
  }

  return {
    title: `${product.name} | Demo payment `,
    description: product.description,
  };
}



export default function ProductPage({ params }: ProductPageProps) {
  const product = getProductById(params.id);

  if (!product) {
    notFound();
  }

  return (
    <div className="flex justify-center">
    <div className="container py-10">
      <div className="grid gap-8 md:grid-cols-2">
        <div className="relative aspect-square overflow-hidden rounded-lg bg-muted">
          <Suspense fallback={<Skeleton className="h-full w-full" />}>
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </Suspense>
        </div>
        <div className="flex flex-col justify-between">
          <div className="space-y-4">
            <h1 className="text-3xl font-bold">{product.name}</h1>
            <p className="text-2xl font-semibold">
              {formatPrice(product.price)}
            </p>
            <div className="prose max-w-none dark:prose-invert">
              <p>{product.description}</p>
            </div>
          </div>
          <div className="mt-8 space-y-4">
            <AddToCart product={product} />
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}