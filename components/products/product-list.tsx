import { getProductsByCategory } from "@/data/products";
import { ProductCard } from "@/components/products/product-card";

interface ProductListProps {
  category?: string;
}

export function ProductList({ category = "all" }: ProductListProps) {
  const products = getProductsByCategory(category);

  if (products.length === 0) {
    return (
      <div className="mt-10 flex flex-col items-center justify-center py-10">
        <h3 className="text-xl font-semibold">No products found</h3>
        <p className="text-muted-foreground">
          Try changing your filter or check back later.
        </p>
      </div>
    );
  }

  return (
    <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}