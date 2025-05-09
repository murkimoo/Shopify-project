export interface Product {
  id: string;
  title: string;
  price: number;
  description: string;
  image: string;
}

// Dummy product data for development without a live store
export const products: Product[] = [
  {
    id: "1",
    title: "Classic White T-Shirt",
    price: 24.99,
    description: "Soft cotton essential t-shirt in classic white.",
    image: "https://images.pexels.com/photos/4066293/pexels-photo-4066293.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: "2",
    title: "Denim Jacket",
    price: 89.99,
    description: "Vintage-style denim jacket with button closure.",
    image: "https://images.pexels.com/photos/1598507/pexels-photo-1598507.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: "3",
    title: "Leather Backpack",
    price: 129.99,
    description: "Genuine leather backpack with multiple compartments.",
    image: "https://images.pexels.com/photos/934673/pexels-photo-934673.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: "4",
    title: "Running Shoes",
    price: 119.99,
    description: "Lightweight running shoes with cushioned soles.",
    image: "https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: "5",
    title: "Smart Watch",
    price: 249.99,
    description: "Smart watch with fitness tracking and notifications.",
    image: "https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: "6",
    title: "Wireless Headphones",
    price: 179.99,
    description: "Noise-cancelling wireless headphones with long battery life.",
    image: "https://images.pexels.com/photos/3394660/pexels-photo-3394660.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
];

export function getProducts() {
  return products;
}

export function getProduct(id: string) {
  return products.find(product => product.id === id);
}