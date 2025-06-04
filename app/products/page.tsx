import { Suspense } from "react";
import { Metadata } from "next";
import { ProductList } from "@/components/products/product-list";
import { ProductSkeleton } from "@/components/products/product-skeleton";
import { categories } from "@/data/products";
import { CategoryFilter } from "@/components/products/category-filter";

export const metadata: Metadata = {
  title: "Products | Demo payment ",
  description: "Browse our collection of products",
};

export default function ProductsPage({
  searchParams,
}: {
  searchParams?: { category?: string };
}) {
  const category = searchParams?.category || "all";
  
  return (
    <div className="flex justify-center ">
    <div className="container py-10  ">
      <div className="space-y-4">
        <h1 className="text-3xl font-bold tracking-tight md:text-4xl">Products</h1>
        <p className="text-muted-foreground">
          Browse our collection of high-quality products
        </p>
      </div>
      
      <div className="mt-8">
        <CategoryFilter categories={categories} activeCategory={category} />
      </div>
      
      <Suspense fallback={<ProductSkeletonGrid />}>
        <ProductList category={category} />
      </Suspense>
    </div>
    </div>
  );
}

function ProductSkeletonGrid() {
  return (
    <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {Array(8).fill(0).map((_, i) => (
        <ProductSkeleton key={i} />
      ))}
    </div>
  );
}