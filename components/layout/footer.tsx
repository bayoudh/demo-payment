import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t bg-background flex justify-center ">
      <div className="container py-8 md:py-12 ">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Demo payment </h3>
            <p className="text-sm text-muted-foreground">
              A modern e-commerce platform with secure PayPal payment integration.
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Shop</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link 
                  href="/products" 
                  className="text-muted-foreground hover:text-foreground"
                >
                  All Products
                </Link>
              </li>
              <li>
                <Link 
                  href="/products?category=electronics" 
                  className="text-muted-foreground hover:text-foreground"
                >
                  Electronics
                </Link>
              </li>
              <li>
                <Link 
                  href="/products?category=home" 
                  className="text-muted-foreground hover:text-foreground"
                >
                  Home & Kitchen
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Company</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link 
                  href="/about" 
                  className="text-muted-foreground hover:text-foreground"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link 
                  href="/contact" 
                  className="text-muted-foreground hover:text-foreground"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link 
                  href="/privacy" 
                  className="text-muted-foreground hover:text-foreground"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link 
                  href="/terms" 
                  className="text-muted-foreground hover:text-foreground"
                >
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Support</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link 
                  href="/faq" 
                  className="text-muted-foreground hover:text-foreground"
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link 
                  href="/shipping" 
                  className="text-muted-foreground hover:text-foreground"
                >
                  Shipping & Returns
                </Link>
              </li>
              <li>
                <Link 
                  href="/orders" 
                  className="text-muted-foreground hover:text-foreground"
                >
                  Order Tracking
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col items-center justify-between gap-4 border-t pt-8 md:flex-row md:pt-12">
          <p className="text-center text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Demo payment . All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link 
              href="/terms" 
              className="text-sm text-muted-foreground hover:text-foreground"
            >
              Terms
            </Link>
            <Link 
              href="/privacy" 
              className="text-sm text-muted-foreground hover:text-foreground"
            >
              Privacy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}