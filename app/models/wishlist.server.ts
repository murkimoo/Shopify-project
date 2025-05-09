import { createCookie } from "@remix-run/node";
import { Product } from "./product.server";

// Create a cookie to store wishlist items
export const wishlistCookie = createCookie("wishlist", {
  maxAge: 60 * 60 * 24 * 30, // 30 days
  secure: process.env.NODE_ENV === "production",
  httpOnly: true,
  sameSite: "lax",
  path: "/",
});

// Get wishlist from cookies
export async function getWishlist(request: Request): Promise<string[]> {
  const cookieHeader = request.headers.get("Cookie");
  const wishlistItems = await wishlistCookie.parse(cookieHeader) || [];
  return Array.isArray(wishlistItems) ? wishlistItems : [];
}

// Add item to wishlist
export async function addToWishlist(request: Request, productId: string): Promise<string[]> {
  const wishlistItems = await getWishlist(request);
  
  if (!wishlistItems.includes(productId)) {
    wishlistItems.push(productId);
  }
  
  return wishlistItems;
}

// Remove item from wishlist
export async function removeFromWishlist(request: Request, productId: string): Promise<string[]> {
  const wishlistItems = await getWishlist(request);
  const updatedWishlist = wishlistItems.filter(id => id !== productId);
  
  return updatedWishlist;
}

// Check if item is in wishlist
export async function isInWishlist(request: Request, productId: string): Promise<boolean> {
  const wishlistItems = await getWishlist(request);
  return wishlistItems.includes(productId);
}