"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import { useCart } from "@/context/cart-context";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

export function Header() {
  const pathname = usePathname();
  const { totalItems } = useCart();

  const routes = [
    { href: "/", label: "Home" },
    { href: "/products", label: "Products" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex justify-center">
      <div className="container flex h-16 items-center justify-between ">
        <div className="flex items-center gap-6 md:gap-10">
          <Link href="/" className="flex items-center space-x-2">
            <span className="hidden font-bold sm:inline-block">
              Demo payment 
            </span>
          </Link>

          <nav className="hidden gap-6 md:flex">
            {routes.map((route) => (
              <Link
                key={route.href}
                href={route.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary",
                  pathname === route.href
                    ? "text-foreground"
                    : "text-muted-foreground"
                )}
              >
                {route.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="flex items-center gap-4">
          <ThemeToggle />
          <Link href="/cart">
            <Button variant="outline" size="icon" className="relative">
              <ShoppingCart className="h-5 w-5" />
              {totalItems > 0 && (
                <span className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-xs text-primary-foreground">
                  {totalItems}
                </span>
              )}
              <span className="sr-only">Shopping Cart</span>
            </Button>
          </Link>

          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="pr-0">
              <MobileNav routes={routes} pathname={pathname} />
            </SheetContent>
          </Sheet>
        </div>
      </div>
      </div>
    </header>
  );
}

function MobileNav({ 
  routes, 
  pathname 
}: { 
  routes: { href: string; label: string }[];
  pathname: string;
}) {
  return (
    <nav className="grid gap-6 text-lg font-medium">
      <Link href="/" className="flex items-center space-x-2 pb-4">
        <span className="font-bold">Demo payment </span>
      </Link>
      {routes.map((route) => (
        <Link
          key={route.href}
          href={route.href}
          className={cn(
            "transition-colors hover:text-primary",
            pathname === route.href
              ? "text-foreground"
              : "text-muted-foreground"
          )}
        >
          {route.label}
        </Link>
      ))}
    </nav>
  );
}