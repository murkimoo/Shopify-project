var __defProp = Object.defineProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
};

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
import { PassThrough } from "stream";
import { Response } from "@remix-run/web-fetch";
import { RemixServer } from "@remix-run/react";
import { renderToPipeableStream } from "react-dom/server";
import { jsxDEV } from "react/jsx-dev-runtime";
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let { pipe, abort } = renderToPipeableStream(
      /* @__PURE__ */ jsxDEV(RemixServer, { context: remixContext, url: request.url }, void 0, !1, {
        fileName: "app/entry.server.tsx",
        lineNumber: 15,
        columnNumber: 7
      }, this),
      {
        onShellReady() {
          let body = new PassThrough();
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new Response(body, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          ), pipe(body);
        },
        onError(error) {
          reject(error);
        }
      }
    );
    setTimeout(abort, 5e3);
  });
}

// app/root.tsx
var root_exports = {};
__export(root_exports, {
  default: () => App,
  links: () => links,
  loader: () => loader
});
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration
} from "@remix-run/react";
import { json } from "@remix-run/node";

// app/components/AppBridgeProvider.tsx
import { useEffect, useState } from "react";
import pkg from "@shopify/app-bridge-react";
import { AppProvider } from "@shopify/polaris";
import { useLoaderData } from "@remix-run/react";
import { jsxDEV as jsxDEV2 } from "react/jsx-dev-runtime";
var defaultTranslations = {
  Polaris: {
    Common: {
      loading: "Loading"
    }
  }
}, { Provider } = pkg;
function AppBridgeProvider({ children }) {
  let { ENV } = useLoaderData(), [translations, setTranslations] = useState(defaultTranslations), [config, setConfig] = useState(null);
  return useEffect(() => {
    if (import("@shopify/polaris/locales/en.json").then((module) => setTranslations(module.default)).catch((error) => console.error("Failed to load translations:", error)), typeof window < "u") {
      let host = window.location.host;
      setConfig({
        host,
        apiKey: ENV.SHOPIFY_API_KEY,
        forceRedirect: !0
      });
    }
  }, [ENV.SHOPIFY_API_KEY]), /* @__PURE__ */ jsxDEV2(AppProvider, { i18n: translations, children: config ? /* @__PURE__ */ jsxDEV2(Provider, { config, children }, void 0, !1, {
    fileName: "app/components/AppBridgeProvider.tsx",
    lineNumber: 55,
    columnNumber: 17
  }, this) : children }, void 0, !1, {
    fileName: "app/components/AppBridgeProvider.tsx",
    lineNumber: 54,
    columnNumber: 5
  }, this);
}

// app/env.server.ts
function getEnvVar(key, fallback) {
  let value = process.env[key];
  if (!value && fallback === void 0)
    throw new Error(`Missing environment variable: ${key}`);
  return value || fallback || "";
}

// app/root.tsx
import { jsxDEV as jsxDEV3 } from "react/jsx-dev-runtime";
var links = () => [
  { rel: "stylesheet", href: "/styles/app.css" }
], loader = async () => json({
  ENV: {
    SHOPIFY_API_KEY: getEnvVar("SHOPIFY_API_KEY")
  }
});
function App() {
  return /* @__PURE__ */ jsxDEV3("html", { lang: "en", children: [
    /* @__PURE__ */ jsxDEV3("head", { children: [
      /* @__PURE__ */ jsxDEV3("meta", { charSet: "utf-8" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 31,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV3("meta", { name: "viewport", content: "width=device-width,initial-scale=1" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 32,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV3(Meta, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 33,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV3(Links, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 34,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 30,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV3("body", { children: [
      /* @__PURE__ */ jsxDEV3(AppBridgeProvider, { children: /* @__PURE__ */ jsxDEV3(Outlet, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 38,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 37,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV3(ScrollRestoration, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 40,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV3(Scripts, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 41,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV3(LiveReload, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 42,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 36,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.tsx",
    lineNumber: 29,
    columnNumber: 5
  }, this);
}

// app/routes/wishlist.tsx
var wishlist_exports = {};
__export(wishlist_exports, {
  action: () => action,
  default: () => Wishlist,
  loader: () => loader2
});
import { json as json2 } from "@remix-run/node";
import { useLoaderData as useLoaderData2, Form, useNavigation } from "@remix-run/react";
import {
  Page,
  Layout,
  Card,
  ResourceList,
  ResourceItem,
  Thumbnail,
  Button,
  EmptyState,
  Text,
  BlockStack,
  InlineStack,
  Box
} from "@shopify/polaris";

// app/models/product.server.ts
var products = [
  {
    id: "1",
    title: "Classic White T-Shirt",
    price: 24.99,
    description: "Soft cotton essential t-shirt in classic white.",
    image: "https://images.pexels.com/photos/4066293/pexels-photo-4066293.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
  {
    id: "2",
    title: "Denim Jacket",
    price: 89.99,
    description: "Vintage-style denim jacket with button closure.",
    image: "https://images.pexels.com/photos/1598507/pexels-photo-1598507.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
  {
    id: "3",
    title: "Leather Backpack",
    price: 129.99,
    description: "Genuine leather backpack with multiple compartments.",
    image: "https://images.pexels.com/photos/934673/pexels-photo-934673.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
  {
    id: "4",
    title: "Running Shoes",
    price: 119.99,
    description: "Lightweight running shoes with cushioned soles.",
    image: "https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
  {
    id: "5",
    title: "Smart Watch",
    price: 249.99,
    description: "Smart watch with fitness tracking and notifications.",
    image: "https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
  {
    id: "6",
    title: "Wireless Headphones",
    price: 179.99,
    description: "Noise-cancelling wireless headphones with long battery life.",
    image: "https://images.pexels.com/photos/3394660/pexels-photo-3394660.jpeg?auto=compress&cs=tinysrgb&w=600"
  }
];
function getProducts() {
  return products;
}
function getProduct(id) {
  return products.find((product) => product.id === id);
}

// app/models/wishlist.server.ts
import { createCookie } from "@remix-run/node";
var wishlistCookie = createCookie("wishlist", {
  maxAge: 60 * 60 * 24 * 30,
  // 30 days
  secure: !1,
  httpOnly: !0,
  sameSite: "lax",
  path: "/"
});
async function getWishlist(request) {
  let cookieHeader = request.headers.get("Cookie"), wishlistItems = await wishlistCookie.parse(cookieHeader) || [];
  return Array.isArray(wishlistItems) ? wishlistItems : [];
}
async function addToWishlist(request, productId) {
  let wishlistItems = await getWishlist(request);
  return wishlistItems.includes(productId) || wishlistItems.push(productId), wishlistItems;
}
async function removeFromWishlist(request, productId) {
  return (await getWishlist(request)).filter((id) => id !== productId);
}
async function isInWishlist(request, productId) {
  return (await getWishlist(request)).includes(productId);
}

// app/routes/wishlist.tsx
import { jsxDEV as jsxDEV4 } from "react/jsx-dev-runtime";
var loader2 = async ({ request }) => {
  let wishlistProducts = (await getWishlist(request)).map((id) => getProduct(id)).filter(Boolean);
  return json2({ wishlistProducts });
}, action = async ({ request }) => {
  let formData = await request.formData(), productId = formData.get("productId"), action3 = formData.get("action"), wishlistItems;
  return action3 === "remove" && (wishlistItems = await removeFromWishlist(request, productId)), json2(
    { success: !0 },
    {
      headers: {
        "Set-Cookie": await wishlistCookie.serialize(wishlistItems)
      }
    }
  );
};
function Wishlist() {
  let { wishlistProducts } = useLoaderData2(), isSubmitting = useNavigation().state === "submitting";
  return wishlistProducts.length === 0 ? /* @__PURE__ */ jsxDEV4(
    Page,
    {
      title: "Your Wishlist",
      backAction: {
        content: "Products",
        url: "/"
      },
      children: /* @__PURE__ */ jsxDEV4(Layout, { children: /* @__PURE__ */ jsxDEV4(Layout.Section, { children: /* @__PURE__ */ jsxDEV4(Card, { children: /* @__PURE__ */ jsxDEV4(
        EmptyState,
        {
          heading: "Your wishlist is empty",
          image: "/empty-wishlist.svg",
          action: { content: "Browse products", url: "/" },
          children: /* @__PURE__ */ jsxDEV4("p", { children: 'Save items for later by clicking "Save for Later" on product pages.' }, void 0, !1, {
            fileName: "app/routes/wishlist.tsx",
            lineNumber: 77,
            columnNumber: 17
          }, this)
        },
        void 0,
        !1,
        {
          fileName: "app/routes/wishlist.tsx",
          lineNumber: 72,
          columnNumber: 15
        },
        this
      ) }, void 0, !1, {
        fileName: "app/routes/wishlist.tsx",
        lineNumber: 71,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "app/routes/wishlist.tsx",
        lineNumber: 70,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/routes/wishlist.tsx",
        lineNumber: 69,
        columnNumber: 9
      }, this)
    },
    void 0,
    !1,
    {
      fileName: "app/routes/wishlist.tsx",
      lineNumber: 62,
      columnNumber: 7
    },
    this
  ) : /* @__PURE__ */ jsxDEV4(
    Page,
    {
      title: "Your Wishlist",
      backAction: {
        content: "Products",
        url: "/"
      },
      children: /* @__PURE__ */ jsxDEV4(Layout, { children: /* @__PURE__ */ jsxDEV4(Layout.Section, { children: /* @__PURE__ */ jsxDEV4(Card, { children: /* @__PURE__ */ jsxDEV4(
        ResourceList,
        {
          resourceName: { singular: "product", plural: "products" },
          items: wishlistProducts,
          renderItem: (product) => {
            let { id, title, price, description, image } = product;
            return /* @__PURE__ */ jsxDEV4(
              ResourceItem,
              {
                id,
                media: /* @__PURE__ */ jsxDEV4(Thumbnail, { source: image, alt: title }, void 0, !1, {
                  fileName: "app/routes/wishlist.tsx",
                  lineNumber: 106,
                  columnNumber: 28
                }, this),
                accessibilityLabel: `View details for ${title}`,
                onClick: () => {
                },
                children: /* @__PURE__ */ jsxDEV4(InlineStack, { children: [
                  /* @__PURE__ */ jsxDEV4(Box, { children: [
                    /* @__PURE__ */ jsxDEV4(Text, { variant: "headingMd", as: "h3", children: title }, void 0, !1, {
                      fileName: "app/routes/wishlist.tsx",
                      lineNumber: 112,
                      columnNumber: 25
                    }, this),
                    /* @__PURE__ */ jsxDEV4(Text, { as: "p", children: [
                      "$",
                      price.toFixed(2)
                    ] }, void 0, !0, {
                      fileName: "app/routes/wishlist.tsx",
                      lineNumber: 113,
                      columnNumber: 25
                    }, this),
                    /* @__PURE__ */ jsxDEV4(Text, { as: "p", children: description }, void 0, !1, {
                      fileName: "app/routes/wishlist.tsx",
                      lineNumber: 114,
                      columnNumber: 25
                    }, this)
                  ] }, void 0, !0, {
                    fileName: "app/routes/wishlist.tsx",
                    lineNumber: 111,
                    columnNumber: 23
                  }, this),
                  /* @__PURE__ */ jsxDEV4(Box, { children: /* @__PURE__ */ jsxDEV4(BlockStack, { children: [
                    /* @__PURE__ */ jsxDEV4(Button, { variant: "primary", children: "Move to Cart" }, void 0, !1, {
                      fileName: "app/routes/wishlist.tsx",
                      lineNumber: 118,
                      columnNumber: 27
                    }, this),
                    /* @__PURE__ */ jsxDEV4(Form, { method: "post", children: [
                      /* @__PURE__ */ jsxDEV4("input", { type: "hidden", name: "productId", value: id }, void 0, !1, {
                        fileName: "app/routes/wishlist.tsx",
                        lineNumber: 120,
                        columnNumber: 29
                      }, this),
                      /* @__PURE__ */ jsxDEV4("input", { type: "hidden", name: "action", value: "remove" }, void 0, !1, {
                        fileName: "app/routes/wishlist.tsx",
                        lineNumber: 121,
                        columnNumber: 29
                      }, this),
                      /* @__PURE__ */ jsxDEV4(
                        Button,
                        {
                          submit: !0,
                          disabled: isSubmitting,
                          variant: "primary",
                          tone: "critical",
                          children: "Remove"
                        },
                        void 0,
                        !1,
                        {
                          fileName: "app/routes/wishlist.tsx",
                          lineNumber: 122,
                          columnNumber: 29
                        },
                        this
                      )
                    ] }, void 0, !0, {
                      fileName: "app/routes/wishlist.tsx",
                      lineNumber: 119,
                      columnNumber: 27
                    }, this)
                  ] }, void 0, !0, {
                    fileName: "app/routes/wishlist.tsx",
                    lineNumber: 117,
                    columnNumber: 25
                  }, this) }, void 0, !1, {
                    fileName: "app/routes/wishlist.tsx",
                    lineNumber: 116,
                    columnNumber: 23
                  }, this)
                ] }, void 0, !0, {
                  fileName: "app/routes/wishlist.tsx",
                  lineNumber: 110,
                  columnNumber: 21
                }, this)
              },
              void 0,
              !1,
              {
                fileName: "app/routes/wishlist.tsx",
                lineNumber: 104,
                columnNumber: 19
              },
              this
            );
          }
        },
        void 0,
        !1,
        {
          fileName: "app/routes/wishlist.tsx",
          lineNumber: 97,
          columnNumber: 13
        },
        this
      ) }, void 0, !1, {
        fileName: "app/routes/wishlist.tsx",
        lineNumber: 96,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/routes/wishlist.tsx",
        lineNumber: 95,
        columnNumber: 9
      }, this) }, void 0, !1, {
        fileName: "app/routes/wishlist.tsx",
        lineNumber: 94,
        columnNumber: 7
      }, this)
    },
    void 0,
    !1,
    {
      fileName: "app/routes/wishlist.tsx",
      lineNumber: 87,
      columnNumber: 5
    },
    this
  );
}

// app/routes/_index.tsx
var index_exports = {};
__export(index_exports, {
  action: () => action2,
  default: () => Index,
  loader: () => loader3
});
import { json as json3 } from "@remix-run/node";
import { useLoaderData as useLoaderData3, Form as Form2, useNavigation as useNavigation2 } from "@remix-run/react";
import {
  Page as Page2,
  Layout as Layout2,
  Card as Card2,
  ResourceList as ResourceList2,
  ResourceItem as ResourceItem2,
  Thumbnail as Thumbnail2,
  Button as Button2,
  Banner,
  Text as Text2,
  BlockStack as BlockStack2,
  InlineStack as InlineStack2
} from "@shopify/polaris";
import { jsxDEV as jsxDEV5 } from "react/jsx-dev-runtime";
var loader3 = async ({ request }) => {
  let products2 = getProducts(), wishlistItems = await getWishlist(request), productsWithWishlistStatus = await Promise.all(
    products2.map(async (product) => ({
      ...product,
      inWishlist: await isInWishlist(request, product.id)
    }))
  );
  return json3({
    products: productsWithWishlistStatus,
    wishlistCount: wishlistItems.length
  });
}, action2 = async ({ request }) => {
  let formData = await request.formData(), productId = formData.get("productId"), action3 = formData.get("action"), wishlistItems;
  return action3 === "add" ? wishlistItems = await addToWishlist(request, productId) : action3 === "remove" && (wishlistItems = await removeFromWishlist(request, productId)), json3(
    { success: !0 },
    {
      headers: {
        "Set-Cookie": await wishlistCookie.serialize(wishlistItems)
      }
    }
  );
};
function Index() {
  let { products: products2, wishlistCount } = useLoaderData3(), isSubmitting = useNavigation2().state === "submitting";
  return /* @__PURE__ */ jsxDEV5(Page2, { title: "Products", children: /* @__PURE__ */ jsxDEV5(Layout2, { children: [
    /* @__PURE__ */ jsxDEV5(Layout2.Section, { children: /* @__PURE__ */ jsxDEV5(
      Banner,
      {
        title: `Your Wishlist has ${wishlistCount} items`,
        action: { content: "View Wishlist", url: "/wishlist" }
      },
      void 0,
      !1,
      {
        fileName: "app/routes/_index.tsx",
        lineNumber: 75,
        columnNumber: 11
      },
      this
    ) }, void 0, !1, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 74,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV5(Layout2.Section, { children: /* @__PURE__ */ jsxDEV5(Card2, { children: /* @__PURE__ */ jsxDEV5(
      ResourceList2,
      {
        resourceName: { singular: "product", plural: "products" },
        items: products2,
        renderItem: (product) => {
          let { id, title, price, description, image, inWishlist } = product;
          return /* @__PURE__ */ jsxDEV5(
            ResourceItem2,
            {
              id,
              media: /* @__PURE__ */ jsxDEV5(Thumbnail2, { source: image, alt: title }, void 0, !1, {
                fileName: "app/routes/_index.tsx",
                lineNumber: 91,
                columnNumber: 28
              }, this),
              accessibilityLabel: `View details for ${title}`,
              onClick: () => {
              },
              children: /* @__PURE__ */ jsxDEV5(InlineStack2, { children: [
                /* @__PURE__ */ jsxDEV5(BlockStack2, { children: [
                  /* @__PURE__ */ jsxDEV5(Text2, { variant: "headingMd", as: "h3", children: title }, void 0, !1, {
                    fileName: "app/routes/_index.tsx",
                    lineNumber: 97,
                    columnNumber: 25
                  }, this),
                  /* @__PURE__ */ jsxDEV5(Text2, { as: "p", children: [
                    "$",
                    price.toFixed(2)
                  ] }, void 0, !0, {
                    fileName: "app/routes/_index.tsx",
                    lineNumber: 98,
                    columnNumber: 25
                  }, this),
                  /* @__PURE__ */ jsxDEV5(Text2, { as: "p", children: description }, void 0, !1, {
                    fileName: "app/routes/_index.tsx",
                    lineNumber: 99,
                    columnNumber: 25
                  }, this)
                ] }, void 0, !0, {
                  fileName: "app/routes/_index.tsx",
                  lineNumber: 96,
                  columnNumber: 23
                }, this),
                /* @__PURE__ */ jsxDEV5(BlockStack2, { children: /* @__PURE__ */ jsxDEV5(BlockStack2, { children: [
                  /* @__PURE__ */ jsxDEV5(Button2, { variant: "primary", children: "Add to Cart" }, void 0, !1, {
                    fileName: "app/routes/_index.tsx",
                    lineNumber: 103,
                    columnNumber: 29
                  }, this),
                  /* @__PURE__ */ jsxDEV5(Form2, { method: "post", children: [
                    /* @__PURE__ */ jsxDEV5("input", { type: "hidden", name: "productId", value: id }, void 0, !1, {
                      fileName: "app/routes/_index.tsx",
                      lineNumber: 105,
                      columnNumber: 31
                    }, this),
                    /* @__PURE__ */ jsxDEV5(
                      "input",
                      {
                        type: "hidden",
                        name: "action",
                        value: inWishlist ? "remove" : "add"
                      },
                      void 0,
                      !1,
                      {
                        fileName: "app/routes/_index.tsx",
                        lineNumber: 106,
                        columnNumber: 31
                      },
                      this
                    ),
                    /* @__PURE__ */ jsxDEV5(
                      Button2,
                      {
                        submit: !0,
                        disabled: isSubmitting,
                        variant: inWishlist ? "monochromePlain" : "plain",
                        children: inWishlist ? "Saved to Wishlist" : "Save for Later"
                      },
                      void 0,
                      !1,
                      {
                        fileName: "app/routes/_index.tsx",
                        lineNumber: 111,
                        columnNumber: 31
                      },
                      this
                    )
                  ] }, void 0, !0, {
                    fileName: "app/routes/_index.tsx",
                    lineNumber: 104,
                    columnNumber: 29
                  }, this)
                ] }, void 0, !0, {
                  fileName: "app/routes/_index.tsx",
                  lineNumber: 102,
                  columnNumber: 27
                }, this) }, void 0, !1, {
                  fileName: "app/routes/_index.tsx",
                  lineNumber: 101,
                  columnNumber: 23
                }, this)
              ] }, void 0, !0, {
                fileName: "app/routes/_index.tsx",
                lineNumber: 95,
                columnNumber: 21
              }, this)
            },
            void 0,
            !1,
            {
              fileName: "app/routes/_index.tsx",
              lineNumber: 89,
              columnNumber: 19
            },
            this
          );
        }
      },
      void 0,
      !1,
      {
        fileName: "app/routes/_index.tsx",
        lineNumber: 82,
        columnNumber: 13
      },
      this
    ) }, void 0, !1, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 81,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 80,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/_index.tsx",
    lineNumber: 73,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/_index.tsx",
    lineNumber: 72,
    columnNumber: 5
  }, this);
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { entry: { module: "/build/entry.client-OCUZIBCF.js", imports: ["/build/_shared/chunk-O4BRYNJ4.js", "/build/_shared/chunk-FURRT6A2.js", "/build/_shared/chunk-NY2WKPAM.js", "/build/_shared/chunk-XGOTYLZ5.js", "/build/_shared/chunk-U4FRFQSK.js", "/build/_shared/chunk-7M6SC7J5.js", "/build/_shared/chunk-UWV35TSL.js", "/build/_shared/chunk-PNG5AS42.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-Z27LDKIS.js", imports: ["/build/_shared/chunk-YI62TSEZ.js"], hasAction: !1, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/_index": { id: "routes/_index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/_index-I5JNCCGW.js", imports: ["/build/_shared/chunk-ZW7C7DOU.js"], hasAction: !0, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/wishlist": { id: "routes/wishlist", parentId: "root", path: "wishlist", index: void 0, caseSensitive: void 0, module: "/build/routes/wishlist-4GSQ5UOI.js", imports: ["/build/_shared/chunk-ZW7C7DOU.js"], hasAction: !0, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 } }, version: "827a27a1", hmr: { runtime: "/build/_shared\\chunk-NY2WKPAM.js", timestamp: 1746800689788 }, url: "/build/manifest-827A27A1.js" };

// server-entry-module:@remix-run/dev/server-build
var mode = "development", assetsBuildDirectory = "public\\build", future = { v3_fetcherPersist: !1, v3_relativeSplatPath: !1, v3_throwAbortReason: !1, v3_routeConfig: !1, v3_singleFetch: !1, v3_lazyRouteDiscovery: !1, unstable_optimizeDeps: !1 }, publicPath = "/build/", entry = { module: entry_server_exports }, routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/wishlist": {
    id: "routes/wishlist",
    parentId: "root",
    path: "wishlist",
    index: void 0,
    caseSensitive: void 0,
    module: wishlist_exports
  },
  "routes/_index": {
    id: "routes/_index",
    parentId: "root",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: index_exports
  }
};
export {
  assets_manifest_default as assets,
  assetsBuildDirectory,
  entry,
  future,
  mode,
  publicPath,
  routes
};
//# sourceMappingURL=index.js.map
