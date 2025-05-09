import {
  require_product,
  require_wishlist
} from "/build/_shared/chunk-ZW7C7DOU.js";
import {
  Banner,
  BlockStack,
  Button,
  Card,
  InlineStack,
  Layout,
  Page,
  ResourceItem,
  ResourceList,
  Text,
  Thumbnail,
  require_node
} from "/build/_shared/chunk-YI62TSEZ.js";
import {
  Form,
  useLoaderData,
  useNavigation
} from "/build/_shared/chunk-FURRT6A2.js";
import {
  createHotContext
} from "/build/_shared/chunk-NY2WKPAM.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XGOTYLZ5.js";
import "/build/_shared/chunk-U4FRFQSK.js";
import "/build/_shared/chunk-7M6SC7J5.js";
import "/build/_shared/chunk-UWV35TSL.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/routes/_index.tsx
var import_node = __toESM(require_node(), 1);
var import_product = __toESM(require_product(), 1);
var import_wishlist = __toESM(require_wishlist(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\routes\\\\_index.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\routes\\_index.tsx"
  );
  import.meta.hot.lastModified = "1746770347573.6982";
}
function Index() {
  _s();
  const {
    products,
    wishlistCount
  } = useLoaderData();
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Page, { title: "Products", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Layout, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Layout.Section, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Banner, { title: `Your Wishlist has ${wishlistCount} items`, action: {
      content: "View Wishlist",
      url: "/wishlist"
    } }, void 0, false, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 72,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 71,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Layout.Section, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ResourceList, { resourceName: {
      singular: "product",
      plural: "products"
    }, items: products, renderItem: (product) => {
      const {
        id,
        title,
        price,
        description,
        image,
        inWishlist
      } = product;
      return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ResourceItem, { id, media: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Thumbnail, { source: image, alt: title }, void 0, false, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 91,
        columnNumber: 49
      }, this), accessibilityLabel: `View details for ${title}`, onClick: () => {
      }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(InlineStack, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(BlockStack, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { variant: "headingMd", as: "h3", children: title }, void 0, false, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 94,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { as: "p", children: [
            "$",
            price.toFixed(2)
          ] }, void 0, true, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 95,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { as: "p", children: description }, void 0, false, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 96,
            columnNumber: 25
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 93,
          columnNumber: 23
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(BlockStack, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(BlockStack, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, { variant: "primary", children: "Add to Cart" }, void 0, false, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 100,
            columnNumber: 29
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { method: "post", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "hidden", name: "productId", value: id }, void 0, false, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 102,
              columnNumber: 31
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "hidden", name: "action", value: inWishlist ? "remove" : "add" }, void 0, false, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 103,
              columnNumber: 31
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, { submit: true, disabled: isSubmitting, variant: inWishlist ? "monochromePlain" : "plain", children: inWishlist ? "Saved to Wishlist" : "Save for Later" }, void 0, false, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 104,
              columnNumber: 31
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 101,
            columnNumber: 29
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 99,
          columnNumber: 27
        }, this) }, void 0, false, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 98,
          columnNumber: 23
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 92,
        columnNumber: 21
      }, this) }, void 0, false, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 91,
        columnNumber: 20
      }, this);
    } }, void 0, false, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 79,
      columnNumber: 13
    }, this) }, void 0, false, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 78,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 77,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/_index.tsx",
    lineNumber: 70,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/_index.tsx",
    lineNumber: 69,
    columnNumber: 10
  }, this);
}
_s(Index, "tpBEhAT4eX6QtnveUMP4dv76uuU=", false, function() {
  return [useLoaderData, useNavigation];
});
_c = Index;
var _c;
$RefreshReg$(_c, "Index");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  Index as default
};
//# sourceMappingURL=/build/routes/_index-I5JNCCGW.js.map
