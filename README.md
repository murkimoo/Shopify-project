# Shopify Wishlist App

A minimal embedded Shopify app that adds a "Save for Later / Wishlist" feature to a storefront.

## Features

- Product listings with "Add to Cart" and "Save for Later" functionality
- Dedicated wishlist page to view saved products
- Ability to remove items from wishlist or move them to cart
- Session-based persistence using Remix cookies

## Setup

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

## Persistence Implementation

This app uses Remix session cookies for persisting the wishlist data. Cookies were chosen over localStorage because:

1. They work server-side, enabling server-rendered pages with wishlist data
2. They persist across sessions without requiring the user to be logged in
3. They're secure and can be set with appropriate options (HTTP-only, SameSite, etc.)

The implementation uses Remix's `createCookie` and session utilities to store product IDs in the user's session. When a user adds a product to their wishlist, the product ID is stored in their session cookie.

## Future Improvements

If I were to continue development, I would implement:

- Integration with Shopify's product data through GraphQL API instead of dummy data
- User account linking to persist wishlist across devices
- Analytics to track product save rates and wishlist conversion metrics
- Email notifications for price drops on wishlisted items