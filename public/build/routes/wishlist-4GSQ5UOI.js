import {
  require_product,
  require_wishlist
} from "/build/_shared/chunk-ZW7C7DOU.js";
import {
  BlockStack,
  Box,
  Button,
  Card,
  EmptyState,
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

// app/routes/wishlist.tsx
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
    window.$RefreshRuntime$.register(type, '"app\\\\routes\\\\wishlist.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\routes\\wishlist.tsx"
  );
  import.meta.hot.lastModified = "1746769589071.027";
}
function Wishlist() {
  _s();
  const {
    wishlistProducts
  } = useLoaderData();
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";
  if (wishlistProducts.length === 0) {
    return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Page, { title: "Your Wishlist", backAction: {
      content: "Products",
      url: "/"
    }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Layout, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Layout.Section, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(EmptyState, { heading: "Your wishlist is empty", image: "/empty-wishlist.svg", action: {
      content: "Browse products",
      url: "/"
    }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: 'Save items for later by clicking "Save for Later" on product pages.' }, void 0, false, {
      fileName: "app/routes/wishlist.tsx",
      lineNumber: 73,
      columnNumber: 17
    }, this) }, void 0, false, {
      fileName: "app/routes/wishlist.tsx",
      lineNumber: 69,
      columnNumber: 15
    }, this) }, void 0, false, {
      fileName: "app/routes/wishlist.tsx",
      lineNumber: 68,
      columnNumber: 13
    }, this) }, void 0, false, {
      fileName: "app/routes/wishlist.tsx",
      lineNumber: 67,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/routes/wishlist.tsx",
      lineNumber: 66,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/wishlist.tsx",
      lineNumber: 62,
      columnNumber: 12
    }, this);
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Page, { title: "Your Wishlist", backAction: {
    content: "Products",
    url: "/"
  }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Layout, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Layout.Section, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ResourceList, { resourceName: {
    singular: "product",
    plural: "products"
  }, items: wishlistProducts, renderItem: (product) => {
    const {
      id,
      title,
      price,
      description,
      image
    } = product;
    return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ResourceItem, { id, media: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Thumbnail, { source: image, alt: title }, void 0, false, {
      fileName: "app/routes/wishlist.tsx",
      lineNumber: 98,
      columnNumber: 49
    }, this), accessibilityLabel: `View details for ${title}`, onClick: () => {
    }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(InlineStack, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { variant: "headingMd", as: "h3", children: title }, void 0, false, {
          fileName: "app/routes/wishlist.tsx",
          lineNumber: 101,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { as: "p", children: [
          "$",
          price.toFixed(2)
        ] }, void 0, true, {
          fileName: "app/routes/wishlist.tsx",
          lineNumber: 102,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { as: "p", children: description }, void 0, false, {
          fileName: "app/routes/wishlist.tsx",
          lineNumber: 103,
          columnNumber: 25
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/wishlist.tsx",
        lineNumber: 100,
        columnNumber: 23
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(BlockStack, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, { variant: "primary", children: "Move to Cart" }, void 0, false, {
          fileName: "app/routes/wishlist.tsx",
          lineNumber: 107,
          columnNumber: 27
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { method: "post", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "hidden", name: "productId", value: id }, void 0, false, {
            fileName: "app/routes/wishlist.tsx",
            lineNumber: 109,
            columnNumber: 29
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "hidden", name: "action", value: "remove" }, void 0, false, {
            fileName: "app/routes/wishlist.tsx",
            lineNumber: 110,
            columnNumber: 29
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, { submit: true, disabled: isSubmitting, variant: "primary", tone: "critical", children: "Remove" }, void 0, false, {
            fileName: "app/routes/wishlist.tsx",
            lineNumber: 111,
            columnNumber: 29
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/wishlist.tsx",
          lineNumber: 108,
          columnNumber: 27
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/wishlist.tsx",
        lineNumber: 106,
        columnNumber: 25
      }, this) }, void 0, false, {
        fileName: "app/routes/wishlist.tsx",
        lineNumber: 105,
        columnNumber: 23
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/wishlist.tsx",
      lineNumber: 99,
      columnNumber: 21
    }, this) }, void 0, false, {
      fileName: "app/routes/wishlist.tsx",
      lineNumber: 98,
      columnNumber: 20
    }, this);
  } }, void 0, false, {
    fileName: "app/routes/wishlist.tsx",
    lineNumber: 87,
    columnNumber: 13
  }, this) }, void 0, false, {
    fileName: "app/routes/wishlist.tsx",
    lineNumber: 86,
    columnNumber: 11
  }, this) }, void 0, false, {
    fileName: "app/routes/wishlist.tsx",
    lineNumber: 85,
    columnNumber: 9
  }, this) }, void 0, false, {
    fileName: "app/routes/wishlist.tsx",
    lineNumber: 84,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/wishlist.tsx",
    lineNumber: 80,
    columnNumber: 10
  }, this);
}
_s(Wishlist, "+z3DnEG0BIJGDaGLaCwVzCt5qp4=", false, function() {
  return [useLoaderData, useNavigation];
});
_c = Wishlist;
var _c;
$RefreshReg$(_c, "Wishlist");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  Wishlist as default
};
//# sourceMappingURL=/build/routes/wishlist-4GSQ5UOI.js.map
