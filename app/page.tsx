import Link from "next/link";
import Image from "next/image";
import { ShoppingBag, Shield, Truck, CreditCard } from "lucide-react";
import { Button } from "@/components/ui/button";
import { products } from "@/data/products";
import { ProductCard } from "@/components/products/product-card";

export default function Home() {
  const featuredProducts = products.slice(0, 3);

  return (
    
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[70vh] overflow-hidden">
        
        <div className="absolute inset-0">
          <Image
            src="https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="Hero Background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/80 to-background/40" />
        </div>
        
        <div className="container relative flex h-full flex-col items-center justify-center gap-6 pt-16 md:max-w-[64rem] md:pt-0 ">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl md:text-6xl/none">
            Shop with confidence <br className="hidden sm:inline" />
            <span className="text-primary">Pay with PayPal</span>
          </h1>
          <p className="max-w-[42rem] text-muted-foreground sm:text-xl">
            Discover our premium collection with secure, fast checkout powered by PayPal.
            Shop now for the best deals on electronics, home goods, and more.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row">
            <Button asChild size="lg" className="gap-2">
              <Link href="/products">
                <ShoppingBag className="h-5 w-5" />
                Shop Now
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/about">Learn More</Link>
            </Button>
          </div>
        </div>
       
      </section>

      {/* Features Section */}
      <section className="bg-muted py-12 md:py-20 flex justify-center">
        <div className="container">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
            <div className="flex flex-col items-center gap-2 text-center">
              <div className="rounded-full bg-primary/10 p-4">
                <Shield className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold">Secure Checkout</h3>
              <p className="text-sm text-muted-foreground">
                Shop with confidence knowing your payments are secure
              </p>
            </div>
            <div className="flex flex-col items-center gap-2 text-center">
              <div className="rounded-full bg-primary/10 p-4">
                <Truck className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold">Fast Delivery</h3>
              <p className="text-sm text-muted-foreground">
                Get your orders quickly with our expedited shipping
              </p>
            </div>
            <div className="flex flex-col items-center gap-2 text-center">
              <div className="rounded-full bg-primary/10 p-4">
                <CreditCard className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold">PayPal Protection</h3>
              <p className="text-sm text-muted-foreground">
                Enjoy PayPal's buyer protection on all purchases
              </p>
            </div>
            <div className="flex flex-col items-center gap-2 text-center">
              <div className="rounded-full bg-primary/10 p-4">
                <ShoppingBag className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold">Easy Returns</h3>
              <p className="text-sm text-muted-foreground">
                Simple, hassle-free return process if you're not satisfied
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-12 md:py-20 flex justify-center ">
        <div className="container">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <h2 className="text-3xl font-bold tracking-tight">Featured Products</h2>
              <p className="text-muted-foreground">
                Check out our newest and best-selling items
              </p>
            </div>
            <Button asChild variant="outline">
              <Link href="/products">View All Products</Link>
            </Button>
          </div>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* PayPal Banner */}
      <section className="bg-primary py-12 md:py-20 flex justify-center">
        <div className="container ">
          <div className="flex flex-col items-center gap-6 text-center text-primary-foreground md:max-w-[42rem] md:mx-auto">
            <h2 className="text-3xl font-bold tracking-tight">Secure Checkout with PayPal</h2>
            <p className="text-lg">
              Shop with confidence using PayPal's secure payment system. Pay quickly and securely with your preferred payment method.
            </p>
            <Button asChild size="lg" variant="secondary">
              <Link href="/products">
                Shop Now
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}