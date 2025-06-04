import { Product } from "@/types/product";

export const products: Product[] = [
  {
    id: "1",
    name: "Premium Headphones",
    description: "Noise cancelling wireless headphones with premium sound quality",
    price: 249.99,
    image: "https://images.pexels.com/photos/577769/pexels-photo-577769.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "electronics"
  },
  {
    id: "2",
    name: "Smart Watch",
    description: "Track your fitness and stay connected with this sleek smart watch",
    price: 199.99,
    image: "https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "electronics"
  },
  {
    id: "3",
    name: "Wireless Earbuds",
    description: "Ultra-portable earbuds with crystal clear sound and long battery life",
    price: 149.99,
    image: "https://images.pexels.com/photos/3780681/pexels-photo-3780681.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "electronics"
  },
  {
    id: "4",
    name: "Desk Lamp",
    description: "Modern desk lamp with adjustable brightness and color temperature",
    price: 59.99,
    image: "https://images.pexels.com/photos/7027714/pexels-photo-7027714.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "home"
  },
  {
    id: "5",
    name: "Coffee Maker",
    description: "Programmable coffee maker with thermal carafe to keep your coffee hot",
    price: 89.99,
    image: "https://images.pexels.com/photos/312418/pexels-photo-312418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "home"
  },
  {
    id: "6",
    name: "Bluetooth Speaker",
    description: "Portable waterproof speaker with 360° sound and 24-hour battery life",
    price: 129.99,
    image: "https://images.pexels.com/photos/1279107/pexels-photo-1279107.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "electronics"
  }
];

export const categories = [
  { id: "all", name: "All Products" },
  { id: "electronics", name: "Electronics" },
  { id: "home", name: "Home & Kitchen" }
];

export function getProductById(id: string): Product | undefined {
  return products.find(product => product.id === id);
}

export function getProductsByCategory(category: string): Product[] {
  if (category === "all") return products;
  return products.filter(product => product.category === category);
}