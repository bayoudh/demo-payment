"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

interface CategoryFilterProps {
  categories: { id: string; name: string }[];
  activeCategory?: string;
}

export function CategoryFilter({ categories, activeCategory = "all" }: CategoryFilterProps) {
  const pathname = usePathname();

  return (
    <div className="flex flex-wrap items-center gap-2 border-b pb-4">
      {categories.map((category) => (
        <Link
          key={category.id}
          href={{
            pathname,
            query: category.id === "all" ? {} : { category: category.id },
          }}
          className={cn(
            "inline-flex items-center rounded-md px-3 py-1 text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
            activeCategory === category.id
              ? "bg-primary text-primary-foreground hover:bg-primary/90"
              : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
          )}
        >
          {category.name}
        </Link>
      ))}
    </div>
  );
}