import {
  require_react_dom
} from "/build/_shared/chunk-U4FRFQSK.js";
import {
  require_react
} from "/build/_shared/chunk-7M6SC7J5.js";
import {
  __commonJS,
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// empty-module:@remix-run/node
var require_node = __commonJS({
  "empty-module:@remix-run/node"(exports, module) {
    module.exports = {};
  }
});

// node_modules/deepmerge/dist/cjs.js
var require_cjs = __commonJS({
  "node_modules/deepmerge/dist/cjs.js"(exports, module) {
    "use strict";
    var isMergeableObject = function isMergeableObject2(value) {
      return isNonNullObject(value) && !isSpecial(value);
    };
    function isNonNullObject(value) {
      return !!value && typeof value === "object";
    }
    function isSpecial(value) {
      var stringValue = Object.prototype.toString.call(value);
      return stringValue === "[object RegExp]" || stringValue === "[object Date]" || isReactElement2(value);
    }
    var canUseSymbol = typeof Symbol === "function" && Symbol.for;
    var REACT_ELEMENT_TYPE = canUseSymbol ? Symbol.for("react.element") : 60103;
    function isReactElement2(value) {
      return value.$$typeof === REACT_ELEMENT_TYPE;
    }
    function emptyTarget(val) {
      return Array.isArray(val) ? [] : {};
    }
    function cloneUnlessOtherwiseSpecified(value, options) {
      return options.clone !== false && options.isMergeableObject(value) ? deepmerge2(emptyTarget(value), value, options) : value;
    }
    function defaultArrayMerge(target, source, options) {
      return target.concat(source).map(function(element) {
        return cloneUnlessOtherwiseSpecified(element, options);
      });
    }
    function getMergeFunction(key, options) {
      if (!options.customMerge) {
        return deepmerge2;
      }
      var customMerge = options.customMerge(key);
      return typeof customMerge === "function" ? customMerge : deepmerge2;
    }
    function getEnumerableOwnPropertySymbols(target) {
      return Object.getOwnPropertySymbols ? Object.getOwnPropertySymbols(target).filter(function(symbol) {
        return Object.propertyIsEnumerable.call(target, symbol);
      }) : [];
    }
    function getKeys(target) {
      return Object.keys(target).concat(getEnumerableOwnPropertySymbols(target));
    }
    function propertyIsOnObject(object, property) {
      try {
        return property in object;
      } catch (_) {
        return false;
      }
    }
    function propertyIsUnsafe(target, key) {
      return propertyIsOnObject(target, key) && !(Object.hasOwnProperty.call(target, key) && Object.propertyIsEnumerable.call(target, key));
    }
    function mergeObject(target, source, options) {
      var destination = {};
      if (options.isMergeableObject(target)) {
        getKeys(target).forEach(function(key) {
          destination[key] = cloneUnlessOtherwiseSpecified(target[key], options);
        });
      }
      getKeys(source).forEach(function(key) {
        if (propertyIsUnsafe(target, key)) {
          return;
        }
        if (propertyIsOnObject(target, key) && options.isMergeableObject(source[key])) {
          destination[key] = getMergeFunction(key, options)(target[key], source[key], options);
        } else {
          destination[key] = cloneUnlessOtherwiseSpecified(source[key], options);
        }
      });
      return destination;
    }
    function deepmerge2(target, source, options) {
      options = options || {};
      options.arrayMerge = options.arrayMerge || defaultArrayMerge;
      options.isMergeableObject = options.isMergeableObject || isMergeableObject;
      options.cloneUnlessOtherwiseSpecified = cloneUnlessOtherwiseSpecified;
      var sourceIsArray = Array.isArray(source);
      var targetIsArray = Array.isArray(target);
      var sourceAndTargetTypesMatch = sourceIsArray === targetIsArray;
      if (!sourceAndTargetTypesMatch) {
        return cloneUnlessOtherwiseSpecified(source, options);
      } else if (sourceIsArray) {
        return options.arrayMerge(target, source, options);
      } else {
        return mergeObject(target, source, options);
      }
    }
    deepmerge2.all = function deepmergeAll(array, options) {
      if (!Array.isArray(array)) {
        throw new Error("first argument should be an array");
      }
      return array.reduce(function(prev, next) {
        return deepmerge2(prev, next, options);
      }, {});
    };
    var deepmerge_1 = deepmerge2;
    module.exports = deepmerge_1;
  }
});

// node_modules/react-fast-compare/index.js
var require_react_fast_compare = __commonJS({
  "node_modules/react-fast-compare/index.js"(exports, module) {
    var hasElementType = typeof Element !== "undefined";
    var hasMap = typeof Map === "function";
    var hasSet = typeof Set === "function";
    var hasArrayBuffer = typeof ArrayBuffer === "function" && !!ArrayBuffer.isView;
    function equal(a, b) {
      if (a === b)
        return true;
      if (a && b && typeof a == "object" && typeof b == "object") {
        if (a.constructor !== b.constructor)
          return false;
        var length, i, keys;
        if (Array.isArray(a)) {
          length = a.length;
          if (length != b.length)
            return false;
          for (i = length; i-- !== 0; )
            if (!equal(a[i], b[i]))
              return false;
          return true;
        }
        var it;
        if (hasMap && a instanceof Map && b instanceof Map) {
          if (a.size !== b.size)
            return false;
          it = a.entries();
          while (!(i = it.next()).done)
            if (!b.has(i.value[0]))
              return false;
          it = a.entries();
          while (!(i = it.next()).done)
            if (!equal(i.value[1], b.get(i.value[0])))
              return false;
          return true;
        }
        if (hasSet && a instanceof Set && b instanceof Set) {
          if (a.size !== b.size)
            return false;
          it = a.entries();
          while (!(i = it.next()).done)
            if (!b.has(i.value[0]))
              return false;
          return true;
        }
        if (hasArrayBuffer && ArrayBuffer.isView(a) && ArrayBuffer.isView(b)) {
          length = a.length;
          if (length != b.length)
            return false;
          for (i = length; i-- !== 0; )
            if (a[i] !== b[i])
              return false;
          return true;
        }
        if (a.constructor === RegExp)
          return a.source === b.source && a.flags === b.flags;
        if (a.valueOf !== Object.prototype.valueOf && typeof a.valueOf === "function" && typeof b.valueOf === "function")
          return a.valueOf() === b.valueOf();
        if (a.toString !== Object.prototype.toString && typeof a.toString === "function" && typeof b.toString === "function")
          return a.toString() === b.toString();
        keys = Object.keys(a);
        length = keys.length;
        if (length !== Object.keys(b).length)
          return false;
        for (i = length; i-- !== 0; )
          if (!Object.prototype.hasOwnProperty.call(b, keys[i]))
            return false;
        if (hasElementType && a instanceof Element)
          return false;
        for (i = length; i-- !== 0; ) {
          if ((keys[i] === "_owner" || keys[i] === "__v" || keys[i] === "__o") && a.$$typeof) {
            continue;
          }
          if (!equal(a[keys[i]], b[keys[i]]))
            return false;
        }
        return true;
      }
      return a !== a && b !== b;
    }
    module.exports = function isEqual2(a, b) {
      try {
        return equal(a, b);
      } catch (error) {
        if ((error.message || "").match(/stack|recursion/i)) {
          console.warn("react-fast-compare cannot handle circular refs");
          return false;
        }
        throw error;
      }
    };
  }
});

// node_modules/@shopify/polaris/build/esm/components/Text/Text.js
var import_react = __toESM(require_react());

// node_modules/@shopify/polaris-tokens/dist/esm/_virtual/_rollupPluginBabelHelpers.mjs
function _arrayLikeToArray(r, a) {
  (null == a || a > r.length) && (a = r.length);
  for (var e = 0, n = Array(a); e < a; e++)
    n[e] = r[e];
  return n;
}
function _arrayWithHoles(r) {
  if (Array.isArray(r))
    return r;
}
function _iterableToArrayLimit(r, l) {
  var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
  if (null != t) {
    var e, n, i, u, a = [], f = true, o = false;
    try {
      if (i = (t = t.call(r)).next, 0 === l) {
        if (Object(t) !== t)
          return;
        f = false;
      } else
        for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = true)
          ;
    } catch (r2) {
      o = true, n = r2;
    } finally {
      try {
        if (!f && null != t.return && (u = t.return(), Object(u) !== u))
          return;
      } finally {
        if (o)
          throw n;
      }
    }
    return a;
  }
}
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _slicedToArray(r, e) {
  return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest();
}
function _taggedTemplateLiteralLoose(e, t) {
  return t || (t = e.slice(0)), e.raw = t, e;
}
function _unsupportedIterableToArray(r, a) {
  if (r) {
    if ("string" == typeof r)
      return _arrayLikeToArray(r, a);
    var t = {}.toString.call(r).slice(8, -1);
    return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0;
  }
}

// node_modules/@shopify/polaris-tokens/dist/esm/src/themes/utils.mjs
var import_deepmerge = __toESM(require_cjs(), 1);

// node_modules/@shopify/polaris-tokens/dist/esm/src/utils.mjs
var _templateObject;
var BASE_FONT_SIZE = 16;
var UNIT_PX = "px";
var UNIT_EM = "em";
var UNIT_REM = "rem";
var DIGIT_REGEX = new RegExp(String.raw(_templateObject || (_templateObject = _taggedTemplateLiteralLoose(["-?d+(?:.d+|d*)"], ["-?\\d+(?:\\.\\d+|\\d*)"]))));
var UNIT_REGEX = new RegExp(UNIT_PX + "|" + UNIT_EM + "|" + UNIT_REM);
function getUnit(value) {
  if (value === void 0) {
    value = "";
  }
  var unit = value.match(new RegExp(DIGIT_REGEX.source + "(" + UNIT_REGEX.source + ")"));
  return unit && unit[1];
}
function toPx(value) {
  if (value === void 0) {
    value = "";
  }
  var unit = getUnit(value);
  if (!unit)
    return value;
  if (unit === UNIT_PX) {
    return value;
  }
  if (unit === UNIT_EM || unit === UNIT_REM) {
    return "" + parseFloat(value) * BASE_FONT_SIZE + UNIT_PX;
  }
}
function toEm(value, fontSize) {
  if (value === void 0) {
    value = "";
  }
  if (fontSize === void 0) {
    fontSize = BASE_FONT_SIZE;
  }
  var unit = getUnit(value);
  if (!unit)
    return value;
  if (unit === UNIT_EM) {
    return value;
  }
  if (unit === UNIT_PX) {
    return "" + parseFloat(value) / fontSize + UNIT_EM;
  }
  if (unit === UNIT_REM) {
    return "" + parseFloat(value) * BASE_FONT_SIZE / fontSize + UNIT_EM;
  }
}
function getTokenNames(theme) {
  return Object.values(theme).flatMap(function(tokenGroup) {
    return Object.keys(tokenGroup);
  });
}
function getMediaConditions(breakpoints) {
  var breakpointEntries = Object.entries(breakpoints);
  var lastBreakpointIndex = breakpointEntries.length - 1;
  return Object.fromEntries(breakpointEntries.map(function(entry, index) {
    var _ref3 = entry, _ref4 = _slicedToArray(_ref3, 2), breakpointsTokenName = _ref4[0], breakpoint = _ref4[1];
    var upMediaCondition = getUpMediaCondition(breakpoint);
    var downMediaCondition = getDownMediaCondition(breakpoint);
    var onlyMediaCondition = index === lastBreakpointIndex ? upMediaCondition : upMediaCondition + " and " + getDownMediaCondition(breakpointEntries[index + 1][1]);
    return [breakpointsTokenName, {
      // Media condition for the current breakpoint and up
      up: upMediaCondition,
      // Media condition for current breakpoint and down
      down: downMediaCondition,
      // Media condition for only the current breakpoint
      only: onlyMediaCondition
    }];
  }));
}
function getUpMediaCondition(breakpoint) {
  return "(min-width: " + toEm(breakpoint) + ")";
}
function getDownMediaCondition(breakpoint) {
  var _toPx2;
  var offsetBreakpoint = parseFloat((_toPx2 = toPx(breakpoint)) != null ? _toPx2 : "") - 0.04;
  return "(max-width: " + toEm(offsetBreakpoint + "px") + ")";
}

// node_modules/@shopify/polaris-tokens/dist/esm/src/themes/base/breakpoints.mjs
var breakpointsAliases = ["xs", "sm", "md", "lg", "xl"];

// node_modules/@shopify/polaris-tokens/dist/esm/src/themes/utils.mjs
function createThemeClassName(themeName) {
  return "p-theme-" + themeName;
}
function createIsTokenName(theme) {
  var tokenNames = new Set(getTokenNames(theme));
  return function(tokenName) {
    return tokenNames.has(tokenName);
  };
}

// node_modules/@shopify/polaris-tokens/dist/esm/src/themes/constants.mjs
var themeNameLight = "light";
var themeNameDefault = themeNameLight;
var themeNames = [themeNameLight, "light-mobile", "light-high-contrast-experimental", "dark-experimental"];

// node_modules/@shopify/polaris-tokens/dist/esm/build/index.mjs
var themes = {
  "light": {
    "border": {
      "border-radius-0": "0rem",
      "border-radius-050": "0.125rem",
      "border-radius-100": "0.25rem",
      "border-radius-150": "0.375rem",
      "border-radius-200": "0.5rem",
      "border-radius-300": "0.75rem",
      "border-radius-400": "1rem",
      "border-radius-500": "1.25rem",
      "border-radius-750": "1.875rem",
      "border-radius-full": "624.9375rem",
      "border-width-0": "0rem",
      "border-width-0165": "0.04125rem",
      "border-width-025": "0.0625rem",
      "border-width-050": "0.125rem",
      "border-width-100": "0.25rem"
    },
    "breakpoints": {
      "breakpoints-xs": "0rem",
      "breakpoints-sm": "30.625rem",
      "breakpoints-md": "48rem",
      "breakpoints-lg": "65rem",
      "breakpoints-xl": "90rem"
    },
    "color": {
      "color-scheme": "light",
      "color-bg": "rgba(241, 241, 241, 1)",
      "color-bg-inverse": "rgba(26, 26, 26, 1)",
      "color-bg-surface": "rgba(255, 255, 255, 1)",
      "color-bg-surface-hover": "rgba(247, 247, 247, 1)",
      "color-bg-surface-active": "rgba(243, 243, 243, 1)",
      "color-bg-surface-selected": "rgba(241, 241, 241, 1)",
      "color-bg-surface-disabled": "rgba(0, 0, 0, 0.05)",
      "color-bg-surface-secondary": "rgba(247, 247, 247, 1)",
      "color-bg-surface-secondary-hover": "rgba(241, 241, 241, 1)",
      "color-bg-surface-secondary-active": "rgba(235, 235, 235, 1)",
      "color-bg-surface-secondary-selected": "rgba(235, 235, 235, 1)",
      "color-bg-surface-tertiary": "rgba(243, 243, 243, 1)",
      "color-bg-surface-tertiary-hover": "rgba(235, 235, 235, 1)",
      "color-bg-surface-tertiary-active": "rgba(227, 227, 227, 1)",
      "color-bg-surface-brand": "rgba(227, 227, 227, 1)",
      "color-bg-surface-brand-hover": "rgba(235, 235, 235, 1)",
      "color-bg-surface-brand-active": "rgba(241, 241, 241, 1)",
      "color-bg-surface-brand-selected": "rgba(241, 241, 241, 1)",
      "color-bg-surface-info": "rgba(234, 244, 255, 1)",
      "color-bg-surface-info-hover": "rgba(224, 240, 255, 1)",
      "color-bg-surface-info-active": "rgba(202, 230, 255, 1)",
      "color-bg-surface-success": "rgba(205, 254, 212, 1)",
      "color-bg-surface-success-hover": "rgba(175, 254, 191, 1)",
      "color-bg-surface-success-active": "rgba(146, 252, 172, 1)",
      "color-bg-surface-caution": "rgba(255, 248, 219, 1)",
      "color-bg-surface-caution-hover": "rgba(255, 244, 191, 1)",
      "color-bg-surface-caution-active": "rgba(255, 239, 157, 1)",
      "color-bg-surface-warning": "rgba(255, 241, 227, 1)",
      "color-bg-surface-warning-hover": "rgba(255, 235, 213, 1)",
      "color-bg-surface-warning-active": "rgba(255, 228, 198, 1)",
      "color-bg-surface-critical": "rgba(254, 232, 235, 1)",
      "color-bg-surface-critical-hover": "rgba(254, 225, 230, 1)",
      "color-bg-surface-critical-active": "rgba(254, 217, 223, 1)",
      "color-bg-surface-emphasis": "rgba(240, 242, 255, 1)",
      "color-bg-surface-emphasis-hover": "rgba(234, 237, 255, 1)",
      "color-bg-surface-emphasis-active": "rgba(226, 231, 255, 1)",
      "color-bg-surface-magic": "rgba(248, 247, 255, 1)",
      "color-bg-surface-magic-hover": "rgba(243, 241, 255, 1)",
      "color-bg-surface-magic-active": "rgba(233, 229, 255, 1)",
      "color-bg-surface-inverse": "rgba(48, 48, 48, 1)",
      "color-bg-surface-transparent": "rgba(0, 0, 0, 0)",
      "color-bg-fill": "rgba(255, 255, 255, 1)",
      "color-bg-fill-hover": "rgba(250, 250, 250, 1)",
      "color-bg-fill-active": "rgba(247, 247, 247, 1)",
      "color-bg-fill-selected": "rgba(204, 204, 204, 1)",
      "color-bg-fill-disabled": "rgba(0, 0, 0, 0.05)",
      "color-bg-fill-secondary": "rgba(241, 241, 241, 1)",
      "color-bg-fill-secondary-hover": "rgba(235, 235, 235, 1)",
      "color-bg-fill-secondary-active": "rgba(227, 227, 227, 1)",
      "color-bg-fill-secondary-selected": "rgba(227, 227, 227, 1)",
      "color-bg-fill-tertiary": "rgba(227, 227, 227, 1)",
      "color-bg-fill-tertiary-hover": "rgba(212, 212, 212, 1)",
      "color-bg-fill-tertiary-active": "rgba(204, 204, 204, 1)",
      "color-bg-fill-brand": "rgba(48, 48, 48, 1)",
      "color-bg-fill-brand-hover": "rgba(26, 26, 26, 1)",
      "color-bg-fill-brand-active": "rgba(26, 26, 26, 1)",
      "color-bg-fill-brand-selected": "rgba(48, 48, 48, 1)",
      "color-bg-fill-brand-disabled": "rgba(0, 0, 0, 0.17)",
      "color-bg-fill-info": "rgba(145, 208, 255, 1)",
      "color-bg-fill-info-hover": "rgba(81, 192, 255, 1)",
      "color-bg-fill-info-active": "rgba(0, 148, 213, 1)",
      "color-bg-fill-info-secondary": "rgba(213, 235, 255, 1)",
      "color-bg-fill-success": "rgba(4, 123, 93, 1)",
      "color-bg-fill-success-hover": "rgba(3, 94, 76, 1)",
      "color-bg-fill-success-active": "rgba(1, 75, 64, 1)",
      "color-bg-fill-success-secondary": "rgba(175, 254, 191, 1)",
      "color-bg-fill-warning": "rgba(255, 184, 0, 1)",
      "color-bg-fill-warning-hover": "rgba(229, 165, 0, 1)",
      "color-bg-fill-warning-active": "rgba(178, 132, 0, 1)",
      "color-bg-fill-warning-secondary": "rgba(255, 214, 164, 1)",
      "color-bg-fill-caution": "rgba(255, 230, 0, 1)",
      "color-bg-fill-caution-hover": "rgba(234, 211, 0, 1)",
      "color-bg-fill-caution-active": "rgba(225, 203, 0, 1)",
      "color-bg-fill-caution-secondary": "rgba(255, 235, 120, 1)",
      "color-bg-fill-critical": "rgba(199, 10, 36, 1)",
      "color-bg-fill-critical-hover": "rgba(163, 10, 36, 1)",
      "color-bg-fill-critical-active": "rgba(142, 11, 33, 1)",
      "color-bg-fill-critical-selected": "rgba(142, 11, 33, 1)",
      "color-bg-fill-critical-secondary": "rgba(254, 209, 215, 1)",
      "color-bg-fill-emphasis": "rgba(0, 91, 211, 1)",
      "color-bg-fill-emphasis-hover": "rgba(0, 66, 153, 1)",
      "color-bg-fill-emphasis-active": "rgba(0, 46, 106, 1)",
      "color-bg-fill-magic": "rgba(128, 81, 255, 1)",
      "color-bg-fill-magic-secondary": "rgba(233, 229, 255, 1)",
      "color-bg-fill-magic-secondary-hover": "rgba(228, 222, 255, 1)",
      "color-bg-fill-magic-secondary-active": "rgba(223, 217, 255, 1)",
      "color-bg-fill-inverse": "rgba(48, 48, 48, 1)",
      "color-bg-fill-inverse-hover": "rgba(74, 74, 74, 1)",
      "color-bg-fill-inverse-active": "rgba(97, 97, 97, 1)",
      "color-bg-fill-transparent": "rgba(0, 0, 0, 0.02)",
      "color-bg-fill-transparent-hover": "rgba(0, 0, 0, 0.05)",
      "color-bg-fill-transparent-active": "rgba(0, 0, 0, 0.08)",
      "color-bg-fill-transparent-selected": "rgba(0, 0, 0, 0.08)",
      "color-bg-fill-transparent-secondary": "rgba(0, 0, 0, 0.06)",
      "color-bg-fill-transparent-secondary-hover": "rgba(0, 0, 0, 0.08)",
      "color-bg-fill-transparent-secondary-active": "rgba(0, 0, 0, 0.11)",
      "color-text": "rgba(48, 48, 48, 1)",
      "color-text-secondary": "rgba(97, 97, 97, 1)",
      "color-text-disabled": "rgba(181, 181, 181, 1)",
      "color-text-link": "rgba(0, 91, 211, 1)",
      "color-text-link-hover": "rgba(0, 66, 153, 1)",
      "color-text-link-active": "rgba(0, 46, 106, 1)",
      "color-text-brand": "rgba(74, 74, 74, 1)",
      "color-text-brand-hover": "rgba(48, 48, 48, 1)",
      "color-text-brand-on-bg-fill": "rgba(255, 255, 255, 1)",
      "color-text-brand-on-bg-fill-hover": "rgba(227, 227, 227, 1)",
      "color-text-brand-on-bg-fill-active": "rgba(204, 204, 204, 1)",
      "color-text-brand-on-bg-fill-disabled": "rgba(255, 255, 255, 1)",
      "color-text-info": "rgba(0, 58, 90, 1)",
      "color-text-info-hover": "rgba(0, 58, 90, 1)",
      "color-text-info-active": "rgba(0, 33, 51, 1)",
      "color-text-info-secondary": "rgba(0, 124, 180, 1)",
      "color-text-info-on-bg-fill": "rgba(0, 33, 51, 1)",
      "color-text-success": "rgba(1, 75, 64, 1)",
      "color-text-success-hover": "rgba(7, 54, 48, 1)",
      "color-text-success-active": "rgba(2, 38, 34, 1)",
      "color-text-success-secondary": "rgba(4, 123, 93, 1)",
      "color-text-success-on-bg-fill": "rgba(250, 255, 251, 1)",
      "color-text-caution": "rgba(79, 71, 0, 1)",
      "color-text-caution-hover": "rgba(51, 46, 0, 1)",
      "color-text-caution-active": "rgba(31, 28, 0, 1)",
      "color-text-caution-secondary": "rgba(130, 117, 0, 1)",
      "color-text-caution-on-bg-fill": "rgba(51, 46, 0, 1)",
      "color-text-warning": "rgba(94, 66, 0, 1)",
      "color-text-warning-hover": "rgba(65, 45, 0, 1)",
      "color-text-warning-active": "rgba(37, 26, 0, 1)",
      "color-text-warning-secondary": "rgba(149, 111, 0, 1)",
      "color-text-warning-on-bg-fill": "rgba(37, 26, 0, 1)",
      "color-text-critical": "rgba(142, 11, 33, 1)",
      "color-text-critical-hover": "rgba(95, 7, 22, 1)",
      "color-text-critical-active": "rgba(47, 4, 11, 1)",
      "color-text-critical-secondary": "rgba(199, 10, 36, 1)",
      "color-text-critical-on-bg-fill": "rgba(255, 250, 251, 1)",
      "color-text-emphasis": "rgba(0, 91, 211, 1)",
      "color-text-emphasis-hover": "rgba(0, 66, 153, 1)",
      "color-text-emphasis-active": "rgba(0, 46, 106, 1)",
      "color-text-emphasis-on-bg-fill": "rgba(252, 253, 255, 1)",
      "color-text-emphasis-on-bg-fill-hover": "rgba(226, 231, 255, 1)",
      "color-text-emphasis-on-bg-fill-active": "rgba(213, 220, 255, 1)",
      "color-text-magic": "rgba(87, 0, 209, 1)",
      "color-text-magic-secondary": "rgba(113, 38, 255, 1)",
      "color-text-magic-on-bg-fill": "rgba(253, 253, 255, 1)",
      "color-text-inverse": "rgba(227, 227, 227, 1)",
      "color-text-inverse-secondary": "rgba(181, 181, 181, 1)",
      "color-text-link-inverse": "rgba(197, 208, 255, 1)",
      "color-border": "rgba(227, 227, 227, 1)",
      "color-border-hover": "rgba(204, 204, 204, 1)",
      "color-border-disabled": "rgba(235, 235, 235, 1)",
      "color-border-secondary": "rgba(235, 235, 235, 1)",
      "color-border-tertiary": "rgba(204, 204, 204, 1)",
      "color-border-focus": "rgba(0, 91, 211, 1)",
      "color-border-brand": "rgba(227, 227, 227, 1)",
      "color-border-info": "rgba(168, 216, 255, 1)",
      "color-border-success": "rgba(146, 252, 172, 1)",
      "color-border-caution": "rgba(255, 235, 120, 1)",
      "color-border-warning": "rgba(255, 200, 121, 1)",
      "color-border-critical": "rgba(254, 193, 199, 1)",
      "color-border-critical-secondary": "rgba(142, 11, 33, 1)",
      "color-border-emphasis": "rgba(0, 91, 211, 1)",
      "color-border-emphasis-hover": "rgba(0, 66, 153, 1)",
      "color-border-emphasis-active": "rgba(0, 46, 106, 1)",
      "color-border-magic": "rgba(228, 222, 255, 1)",
      "color-border-magic-secondary": "rgba(148, 116, 255, 1)",
      "color-border-magic-secondary-hover": "rgba(128, 81, 255, 1)",
      "color-border-inverse": "rgba(97, 97, 97, 1)",
      "color-border-inverse-hover": "rgba(204, 204, 204, 1)",
      "color-border-inverse-active": "rgba(227, 227, 227, 1)",
      "color-tooltip-tail-down-border": "rgba(212, 212, 212, 1)",
      "color-tooltip-tail-up-border": "rgba(227, 227, 227, 1)",
      "color-icon": "rgba(74, 74, 74, 1)",
      "color-icon-hover": "rgba(48, 48, 48, 1)",
      "color-icon-active": "rgba(26, 26, 26, 1)",
      "color-icon-disabled": "rgba(204, 204, 204, 1)",
      "color-icon-secondary": "rgba(138, 138, 138, 1)",
      "color-icon-secondary-hover": "rgba(97, 97, 97, 1)",
      "color-icon-secondary-active": "rgba(74, 74, 74, 1)",
      "color-icon-brand": "rgba(26, 26, 26, 1)",
      "color-icon-info": "rgba(0, 148, 213, 1)",
      "color-icon-success": "rgba(4, 123, 93, 1)",
      "color-icon-caution": "rgba(153, 138, 0, 1)",
      "color-icon-warning": "rgba(178, 132, 0, 1)",
      "color-icon-critical": "rgba(226, 44, 56, 1)",
      "color-icon-emphasis": "rgba(0, 91, 211, 1)",
      "color-icon-emphasis-hover": "rgba(0, 66, 153, 1)",
      "color-icon-emphasis-active": "rgba(0, 46, 106, 1)",
      "color-icon-magic": "rgba(128, 81, 255, 1)",
      "color-icon-inverse": "rgba(227, 227, 227, 1)",
      "color-avatar-bg-fill": "rgba(181, 181, 181, 1)",
      "color-avatar-five-bg-fill": "rgba(253, 75, 146, 1)",
      "color-avatar-five-text-on-bg-fill": "rgba(255, 246, 248, 1)",
      "color-avatar-four-bg-fill": "rgba(81, 192, 255, 1)",
      "color-avatar-four-text-on-bg-fill": "rgba(0, 33, 51, 1)",
      "color-avatar-one-bg-fill": "rgba(197, 48, 197, 1)",
      "color-avatar-one-text-on-bg-fill": "rgba(253, 239, 253, 1)",
      "color-avatar-seven-bg-fill": "rgba(148, 116, 255, 1)",
      "color-avatar-seven-text-on-bg-fill": "rgba(248, 247, 255, 1)",
      "color-avatar-six-bg-fill": "rgba(37, 232, 43, 1)",
      "color-avatar-six-text-on-bg-fill": "rgba(3, 61, 5, 1)",
      "color-avatar-text-on-bg-fill": "rgba(255, 255, 255, 1)",
      "color-avatar-three-bg-fill": "rgba(44, 224, 212, 1)",
      "color-avatar-three-text-on-bg-fill": "rgba(3, 60, 57, 1)",
      "color-avatar-two-bg-fill": "rgba(82, 244, 144, 1)",
      "color-avatar-two-text-on-bg-fill": "rgba(1, 75, 64, 1)",
      "color-backdrop-bg": "rgba(0, 0, 0, 0.71)",
      "color-button-gradient-bg-fill": "linear-gradient(180deg, rgba(48, 48, 48, 0) 63.53%, rgba(255, 255, 255, 0.15) 100%)",
      "color-checkbox-bg-surface-disabled": "rgba(0, 0, 0, 0.08)",
      "color-checkbox-icon-disabled": "rgba(255, 255, 255, 1)",
      "color-input-bg-surface": "rgba(253, 253, 253, 1)",
      "color-input-bg-surface-hover": "rgba(250, 250, 250, 1)",
      "color-input-bg-surface-active": "rgba(247, 247, 247, 1)",
      "color-input-border": "rgba(138, 138, 138, 1)",
      "color-input-border-hover": "rgba(97, 97, 97, 1)",
      "color-input-border-active": "rgba(26, 26, 26, 1)",
      "color-nav-bg": "rgba(235, 235, 235, 1)",
      "color-nav-bg-surface": "rgba(0, 0, 0, 0.02)",
      "color-nav-bg-surface-hover": "rgba(241, 241, 241, 1)",
      "color-nav-bg-surface-active": "rgba(250, 250, 250, 1)",
      "color-nav-bg-surface-selected": "rgba(250, 250, 250, 1)",
      "color-radio-button-bg-surface-disabled": "rgba(0, 0, 0, 0.08)",
      "color-radio-button-icon-disabled": "rgba(255, 255, 255, 1)",
      "color-video-thumbnail-play-button-bg-fill-hover": "rgba(0, 0, 0, 0.81)",
      "color-video-thumbnail-play-button-bg-fill": "rgba(0, 0, 0, 0.71)",
      "color-video-thumbnail-play-button-text-on-bg-fill": "rgba(255, 255, 255, 1)",
      "color-scrollbar-thumb-bg-hover": "rgba(138, 138, 138, 1)",
      "color-scrollbar-thumb-bg": "rgba(181, 181, 181, 1)"
    },
    "font": {
      "font-family-sans": "'Inter', -apple-system, BlinkMacSystemFont, 'San Francisco', 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif",
      "font-family-mono": "ui-monospace, SFMono-Regular, 'SF Mono', Consolas, 'Liberation Mono', Menlo, monospace",
      "font-size-275": "0.6875rem",
      "font-size-300": "0.75rem",
      "font-size-325": "0.8125rem",
      "font-size-350": "0.875rem",
      "font-size-400": "1rem",
      "font-size-450": "1.125rem",
      "font-size-500": "1.25rem",
      "font-size-550": "1.375rem",
      "font-size-600": "1.5rem",
      "font-size-750": "1.875rem",
      "font-size-800": "2rem",
      "font-size-900": "2.25rem",
      "font-size-1000": "2.5rem",
      "font-weight-regular": "450",
      "font-weight-medium": "550",
      "font-weight-semibold": "650",
      "font-weight-bold": "700",
      "font-letter-spacing-densest": "-0.03375rem",
      "font-letter-spacing-denser": "-0.01875rem",
      "font-letter-spacing-dense": "-0.0125rem",
      "font-letter-spacing-normal": "0rem",
      "font-line-height-300": "0.75rem",
      "font-line-height-400": "1rem",
      "font-line-height-500": "1.25rem",
      "font-line-height-600": "1.5rem",
      "font-line-height-700": "1.75rem",
      "font-line-height-800": "2rem",
      "font-line-height-1000": "2.5rem",
      "font-line-height-1200": "3rem"
    },
    "height": {
      "height-0": "0rem",
      "height-025": "0.0625rem",
      "height-050": "0.125rem",
      "height-100": "0.25rem",
      "height-150": "0.375rem",
      "height-200": "0.5rem",
      "height-300": "0.75rem",
      "height-400": "1rem",
      "height-500": "1.25rem",
      "height-600": "1.5rem",
      "height-700": "1.75rem",
      "height-800": "2rem",
      "height-900": "2.25rem",
      "height-1000": "2.5rem",
      "height-1200": "3rem",
      "height-1600": "4rem",
      "height-2000": "5rem",
      "height-2400": "6rem",
      "height-2800": "7rem",
      "height-3200": "8rem"
    },
    "motion": {
      "motion-duration-0": "0ms",
      "motion-duration-50": "50ms",
      "motion-duration-100": "100ms",
      "motion-duration-150": "150ms",
      "motion-duration-200": "200ms",
      "motion-duration-250": "250ms",
      "motion-duration-300": "300ms",
      "motion-duration-350": "350ms",
      "motion-duration-400": "400ms",
      "motion-duration-450": "450ms",
      "motion-duration-500": "500ms",
      "motion-duration-5000": "5000ms",
      "motion-ease": "cubic-bezier(0.25, 0.1, 0.25, 1)",
      "motion-ease-in": "cubic-bezier(0.42, 0, 1, 1)",
      "motion-ease-out": "cubic-bezier(0.19, 0.91, 0.38, 1)",
      "motion-ease-in-out": "cubic-bezier(0.42, 0, 0.58, 1)",
      "motion-linear": "cubic-bezier(0, 0, 1, 1)",
      "motion-keyframes-bounce": "{ from, 65%, 85% { transform: scale(1) } 75% { transform: scale(0.85) } 82.5% { transform: scale(1.05) } }",
      "motion-keyframes-fade-in": "{ to { opacity: 1 } }",
      "motion-keyframes-pulse": "{ from, 75% { transform: scale(0.85); opacity: 1; } to { transform: scale(2.5); opacity: 0; } }",
      "motion-keyframes-spin": "{ to { transform: rotate(1turn) } }",
      "motion-keyframes-appear-above": "{ from { transform: translateY(var(--p-space-100)); opacity: 0; } to { transform: none; opacity: 1; } }",
      "motion-keyframes-appear-below": "{ from { transform: translateY(calc(var(--p-space-100) * -1)); opacity: 0; } to { transform: none; opacity: 1; } }"
    },
    "shadow": {
      "shadow-0": "none",
      "shadow-100": "0rem 0.0625rem 0rem 0rem rgba(26, 26, 26, 0.07)",
      "shadow-200": "0rem 0.1875rem 0.0625rem -0.0625rem rgba(26, 26, 26, 0.07)",
      "shadow-300": "0rem 0.25rem 0.375rem -0.125rem rgba(26, 26, 26, 0.20)",
      "shadow-400": "0rem 0.5rem 1rem -0.25rem rgba(26, 26, 26, 0.22)",
      "shadow-500": "0rem 0.75rem 1.25rem -0.5rem rgba(26, 26, 26, 0.24)",
      "shadow-600": "0rem 1.25rem 1.25rem -0.5rem rgba(26, 26, 26, 0.28)",
      "shadow-bevel-100": "0.0625rem 0rem 0rem 0rem rgba(0, 0, 0, 0.13) inset, -0.0625rem 0rem 0rem 0rem rgba(0, 0, 0, 0.13) inset, 0rem -0.0625rem 0rem 0rem rgba(0, 0, 0, 0.17) inset, 0rem 0.0625rem 0rem 0rem rgba(204, 204, 204, 0.5) inset",
      "shadow-inset-100": "0rem 0.0625rem 0.125rem 0rem rgba(26, 26, 26, 0.15) inset, 0rem 0.0625rem 0.0625rem 0rem rgba(26, 26, 26, 0.15) inset",
      "shadow-inset-200": "0rem 0.125rem 0.0625rem 0rem rgba(26, 26, 26, 0.20) inset, 0.0625rem 0rem 0.0625rem 0rem rgba(26, 26, 26, 0.12) inset, -0.0625rem 0rem 0.0625rem 0rem rgba(26, 26, 26, 0.12) inset",
      "shadow-button": "0rem -0.0625rem 0rem 0rem #b5b5b5 inset, 0rem 0rem 0rem 0.0625rem rgba(0, 0, 0, 0.1) inset, 0rem 0.03125rem 0rem 0.09375rem #FFF inset",
      "shadow-button-hover": "0rem 0.0625rem 0rem 0rem #EBEBEB inset, -0.0625rem 0rem 0rem 0rem #EBEBEB inset, 0.0625rem 0rem 0rem 0rem #EBEBEB inset, 0rem -0.0625rem 0rem 0rem #CCC inset",
      "shadow-button-inset": "-0.0625rem 0rem 0.0625rem 0rem rgba(26, 26, 26, 0.122) inset, 0.0625rem 0rem 0.0625rem 0rem rgba(26, 26, 26, 0.122) inset, 0rem 0.125rem 0.0625rem 0rem rgba(26, 26, 26, 0.2) inset",
      "shadow-button-primary": "0rem -0.0625rem 0rem 0.0625rem rgba(0, 0, 0, 0.8) inset, 0rem 0rem 0rem 0.0625rem rgba(48, 48, 48, 1) inset, 0rem 0.03125rem 0rem 0.09375rem rgba(255, 255, 255, 0.25) inset",
      "shadow-button-primary-hover": "0rem 0.0625rem 0rem 0rem rgba(255, 255, 255, 0.24) inset, 0.0625rem 0rem 0rem 0rem rgba(255, 255, 255, 0.20) inset, -0.0625rem 0rem 0rem 0rem rgba(255, 255, 255, 0.20) inset, 0rem -0.0625rem 0rem 0rem #000 inset, 0rem -0.0625rem 0rem 0.0625rem #1A1A1A",
      "shadow-button-primary-inset": "0rem 0.1875rem 0rem 0rem rgb(0, 0, 0) inset",
      "shadow-button-primary-critical": "0rem -0.0625rem 0rem 0.0625rem rgba(142, 31, 11, 0.8) inset, 0rem 0rem 0rem 0.0625rem rgba(181, 38, 11, 0.8) inset, 0rem 0.03125rem 0rem 0.09375rem rgba(255, 255, 255, 0.349) inset",
      "shadow-button-primary-critical-hover": "0rem 0.0625rem 0rem 0rem rgba(255, 255, 255, 0.48) inset, 0.0625rem 0rem 0rem 0rem rgba(255, 255, 255, 0.20) inset, -0.0625rem 0rem 0rem 0rem rgba(255, 255, 255, 0.20) inset, 0rem -0.09375rem 0rem 0rem rgba(0, 0, 0, 0.25) inset",
      "shadow-button-primary-critical-inset": "-0.0625rem 0rem 0.0625rem 0rem rgba(0, 0, 0, 0.2) inset, 0.0625rem 0rem 0.0625rem 0rem rgba(0, 0, 0, 0.2) inset, 0rem 0.125rem 0rem 0rem rgba(0, 0, 0, 0.6) inset",
      "shadow-button-primary-success": "0rem -0.0625rem 0rem 0.0625rem rgba(12, 81, 50, 0.8) inset, 0rem 0rem 0rem 0.0625rem rgba(19, 111, 69, 0.8) inset, 0rem 0.03125rem 0rem 0.09375rem rgba(255, 255, 255, 0.251) inset",
      "shadow-button-primary-success-hover": "0rem 0.0625rem 0rem 0rem rgba(255, 255, 255, 0.48) inset, 0.0625rem 0rem 0rem 0rem rgba(255, 255, 255, 0.20) inset, -0.0625rem 0rem 0rem 0rem rgba(255, 255, 255, 0.20) inset, 0rem -0.09375rem 0rem 0rem rgba(0, 0, 0, 0.25) inset",
      "shadow-button-primary-success-inset": "-0.0625rem 0rem 0.0625rem 0rem rgba(0, 0, 0, 0.2) inset, 0.0625rem 0rem 0.0625rem 0rem rgba(0, 0, 0, 0.2) inset, 0rem 0.125rem 0rem 0rem rgba(0, 0, 0, 0.6) inset",
      "shadow-border-inset": "0rem 0rem 0rem 0.0625rem rgba(0, 0, 0, 0.08) inset"
    },
    "space": {
      "space-0": "0rem",
      "space-025": "0.0625rem",
      "space-050": "0.125rem",
      "space-100": "0.25rem",
      "space-150": "0.375rem",
      "space-200": "0.5rem",
      "space-300": "0.75rem",
      "space-400": "1rem",
      "space-500": "1.25rem",
      "space-600": "1.5rem",
      "space-800": "2rem",
      "space-1000": "2.5rem",
      "space-1200": "3rem",
      "space-1600": "4rem",
      "space-2000": "5rem",
      "space-2400": "6rem",
      "space-2800": "7rem",
      "space-3200": "8rem",
      "space-button-group-gap": "0.5rem",
      "space-card-gap": "1rem",
      "space-card-padding": "1rem",
      "space-table-cell-padding": "0.375rem"
    },
    "text": {
      "text-heading-3xl-font-family": "'Inter', -apple-system, BlinkMacSystemFont, 'San Francisco', 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif",
      "text-heading-3xl-font-size": "2.25rem",
      "text-heading-3xl-font-weight": "700",
      "text-heading-3xl-font-letter-spacing": "-0.03375rem",
      "text-heading-3xl-font-line-height": "3rem",
      "text-heading-2xl-font-family": "'Inter', -apple-system, BlinkMacSystemFont, 'San Francisco', 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif",
      "text-heading-2xl-font-size": "1.875rem",
      "text-heading-2xl-font-weight": "700",
      "text-heading-2xl-font-letter-spacing": "-0.01875rem",
      "text-heading-2xl-font-line-height": "2.5rem",
      "text-heading-xl-font-family": "'Inter', -apple-system, BlinkMacSystemFont, 'San Francisco', 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif",
      "text-heading-xl-font-size": "1.5rem",
      "text-heading-xl-font-weight": "700",
      "text-heading-xl-font-letter-spacing": "-0.0125rem",
      "text-heading-xl-font-line-height": "2rem",
      "text-heading-lg-font-family": "'Inter', -apple-system, BlinkMacSystemFont, 'San Francisco', 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif",
      "text-heading-lg-font-size": "1.25rem",
      "text-heading-lg-font-weight": "650",
      "text-heading-lg-font-letter-spacing": "-0.0125rem",
      "text-heading-lg-font-line-height": "1.5rem",
      "text-heading-md-font-family": "'Inter', -apple-system, BlinkMacSystemFont, 'San Francisco', 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif",
      "text-heading-md-font-size": "0.875rem",
      "text-heading-md-font-weight": "650",
      "text-heading-md-font-letter-spacing": "0rem",
      "text-heading-md-font-line-height": "1.25rem",
      "text-heading-sm-font-family": "'Inter', -apple-system, BlinkMacSystemFont, 'San Francisco', 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif",
      "text-heading-sm-font-size": "0.8125rem",
      "text-heading-sm-font-weight": "650",
      "text-heading-sm-font-letter-spacing": "0rem",
      "text-heading-sm-font-line-height": "1.25rem",
      "text-heading-xs-font-family": "'Inter', -apple-system, BlinkMacSystemFont, 'San Francisco', 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif",
      "text-heading-xs-font-size": "0.75rem",
      "text-heading-xs-font-weight": "650",
      "text-heading-xs-font-letter-spacing": "0rem",
      "text-heading-xs-font-line-height": "1rem",
      "text-body-lg-font-family": "'Inter', -apple-system, BlinkMacSystemFont, 'San Francisco', 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif",
      "text-body-lg-font-size": "0.875rem",
      "text-body-lg-font-weight": "450",
      "text-body-lg-font-letter-spacing": "0rem",
      "text-body-lg-font-line-height": "1.25rem",
      "text-body-md-font-family": "'Inter', -apple-system, BlinkMacSystemFont, 'San Francisco', 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif",
      "text-body-md-font-size": "0.8125rem",
      "text-body-md-font-weight": "450",
      "text-body-md-font-letter-spacing": "0rem",
      "text-body-md-font-line-height": "1.25rem",
      "text-body-sm-font-family": "'Inter', -apple-system, BlinkMacSystemFont, 'San Francisco', 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif",
      "text-body-sm-font-size": "0.75rem",
      "text-body-sm-font-weight": "450",
      "text-body-sm-font-letter-spacing": "0rem",
      "text-body-sm-font-line-height": "1rem",
      "text-body-xs-font-family": "'Inter', -apple-system, BlinkMacSystemFont, 'San Francisco', 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif",
      "text-body-xs-font-size": "0.6875rem",
      "text-body-xs-font-weight": "450",
      "text-body-xs-font-letter-spacing": "0rem",
      "text-body-xs-font-line-height": "0.75rem"
    },
    "width": {
      "width-0": "0rem",
      "width-025": "0.0625rem",
      "width-050": "0.125rem",
      "width-100": "0.25rem",
      "width-150": "0.375rem",
      "width-200": "0.5rem",
      "width-300": "0.75rem",
      "width-400": "1rem",
      "width-500": "1.25rem",
      "width-600": "1.5rem",
      "width-700": "1.75rem",
      "width-800": "2rem",
      "width-900": "2.25rem",
      "width-1000": "2.5rem",
      "width-1200": "3rem",
      "width-1600": "4rem",
      "width-2000": "5rem",
      "width-2400": "6rem",
      "width-2800": "7rem",
      "width-3200": "8rem"
    },
    "zIndex": {
      "z-index-0": "auto",
      "z-index-1": "100",
      "z-index-2": "400",
      "z-index-3": "510",
      "z-index-4": "512",
      "z-index-5": "513",
      "z-index-6": "514",
      "z-index-7": "515",
      "z-index-8": "516",
      "z-index-9": "517",
      "z-index-10": "518",
      "z-index-11": "519",
      "z-index-12": "520"
    }
  },
  "light-mobile": {
    "border": {
      "border-radius-0": "0rem",
      "border-radius-050": "0.125rem",
      "border-radius-100": "0.25rem",
      "border-radius-150": "0.375rem",
      "border-radius-200": "0.5rem",
      "border-radius-300": "0.75rem",
      "border-radius-400": "1rem",
      "border-radius-500": "1.25rem",
      "border-radius-750": "1.875rem",
      "border-radius-full": "624.9375rem",
      "border-width-0": "0rem",
      "border-width-0165": "0.04125rem",
      "border-width-025": "0.0625rem",
      "border-width-050": "0.125rem",
      "border-width-100": "0.25rem"
    },
    "breakpoints": {
      "breakpoints-xs": "0rem",
      "breakpoints-sm": "30.625rem",
      "breakpoints-md": "48rem",
      "breakpoints-lg": "65rem",
      "breakpoints-xl": "90rem"
    },
    "color": {
      "color-scheme": "light",
      "color-bg": "rgba(241, 241, 241, 1)",
      "color-bg-inverse": "rgba(26, 26, 26, 1)",
      "color-bg-surface": "rgba(255, 255, 255, 1)",
      "color-bg-surface-hover": "rgba(247, 247, 247, 1)",
      "color-bg-surface-active": "rgba(243, 243, 243, 1)",
      "color-bg-surface-selected": "rgba(241, 241, 241, 1)",
      "color-bg-surface-disabled": "rgba(0, 0, 0, 0.05)",
      "color-bg-surface-secondary": "rgba(247, 247, 247, 1)",
      "color-bg-surface-secondary-hover": "rgba(241, 241, 241, 1)",
      "color-bg-surface-secondary-active": "rgba(235, 235, 235, 1)",
      "color-bg-surface-secondary-selected": "rgba(235, 235, 235, 1)",
      "color-bg-surface-tertiary": "rgba(243, 243, 243, 1)",
      "color-bg-surface-tertiary-hover": "rgba(235, 235, 235, 1)",
      "color-bg-surface-tertiary-active": "rgba(227, 227, 227, 1)",
      "color-bg-surface-brand": "rgba(227, 227, 227, 1)",
      "color-bg-surface-brand-hover": "rgba(235, 235, 235, 1)",
      "color-bg-surface-brand-active": "rgba(241, 241, 241, 1)",
      "color-bg-surface-brand-selected": "rgba(241, 241, 241, 1)",
      "color-bg-surface-info": "rgba(234, 244, 255, 1)",
      "color-bg-surface-info-hover": "rgba(224, 240, 255, 1)",
      "color-bg-surface-info-active": "rgba(202, 230, 255, 1)",
      "color-bg-surface-success": "rgba(205, 254, 212, 1)",
      "color-bg-surface-success-hover": "rgba(175, 254, 191, 1)",
      "color-bg-surface-success-active": "rgba(146, 252, 172, 1)",
      "color-bg-surface-caution": "rgba(255, 248, 219, 1)",
      "color-bg-surface-caution-hover": "rgba(255, 244, 191, 1)",
      "color-bg-surface-caution-active": "rgba(255, 239, 157, 1)",
      "color-bg-surface-warning": "rgba(255, 241, 227, 1)",
      "color-bg-surface-warning-hover": "rgba(255, 235, 213, 1)",
      "color-bg-surface-warning-active": "rgba(255, 228, 198, 1)",
      "color-bg-surface-critical": "rgba(254, 232, 235, 1)",
      "color-bg-surface-critical-hover": "rgba(254, 225, 230, 1)",
      "color-bg-surface-critical-active": "rgba(254, 217, 223, 1)",
      "color-bg-surface-emphasis": "rgba(240, 242, 255, 1)",
      "color-bg-surface-emphasis-hover": "rgba(234, 237, 255, 1)",
      "color-bg-surface-emphasis-active": "rgba(226, 231, 255, 1)",
      "color-bg-surface-magic": "rgba(248, 247, 255, 1)",
      "color-bg-surface-magic-hover": "rgba(243, 241, 255, 1)",
      "color-bg-surface-magic-active": "rgba(233, 229, 255, 1)",
      "color-bg-surface-inverse": "rgba(48, 48, 48, 1)",
      "color-bg-surface-transparent": "rgba(0, 0, 0, 0)",
      "color-bg-fill": "rgba(255, 255, 255, 1)",
      "color-bg-fill-hover": "rgba(250, 250, 250, 1)",
      "color-bg-fill-active": "rgba(247, 247, 247, 1)",
      "color-bg-fill-selected": "rgba(204, 204, 204, 1)",
      "color-bg-fill-disabled": "rgba(0, 0, 0, 0.05)",
      "color-bg-fill-secondary": "rgba(241, 241, 241, 1)",
      "color-bg-fill-secondary-hover": "rgba(235, 235, 235, 1)",
      "color-bg-fill-secondary-active": "rgba(227, 227, 227, 1)",
      "color-bg-fill-secondary-selected": "rgba(227, 227, 227, 1)",
      "color-bg-fill-tertiary": "rgba(227, 227, 227, 1)",
      "color-bg-fill-tertiary-hover": "rgba(212, 212, 212, 1)",
      "color-bg-fill-tertiary-active": "rgba(204, 204, 204, 1)",
      "color-bg-fill-brand": "rgba(48, 48, 48, 1)",
      "color-bg-fill-brand-hover": "rgba(26, 26, 26, 1)",
      "color-bg-fill-brand-active": "rgba(26, 26, 26, 1)",
      "color-bg-fill-brand-selected": "rgba(48, 48, 48, 1)",
      "color-bg-fill-brand-disabled": "rgba(0, 0, 0, 0.17)",
      "color-bg-fill-info": "rgba(145, 208, 255, 1)",
      "color-bg-fill-info-hover": "rgba(81, 192, 255, 1)",
      "color-bg-fill-info-active": "rgba(0, 148, 213, 1)",
      "color-bg-fill-info-secondary": "rgba(213, 235, 255, 1)",
      "color-bg-fill-success": "rgba(4, 123, 93, 1)",
      "color-bg-fill-success-hover": "rgba(3, 94, 76, 1)",
      "color-bg-fill-success-active": "rgba(1, 75, 64, 1)",
      "color-bg-fill-success-secondary": "rgba(175, 254, 191, 1)",
      "color-bg-fill-warning": "rgba(255, 184, 0, 1)",
      "color-bg-fill-warning-hover": "rgba(229, 165, 0, 1)",
      "color-bg-fill-warning-active": "rgba(178, 132, 0, 1)",
      "color-bg-fill-warning-secondary": "rgba(255, 214, 164, 1)",
      "color-bg-fill-caution": "rgba(255, 230, 0, 1)",
      "color-bg-fill-caution-hover": "rgba(234, 211, 0, 1)",
      "color-bg-fill-caution-active": "rgba(225, 203, 0, 1)",
      "color-bg-fill-caution-secondary": "rgba(255, 235, 120, 1)",
      "color-bg-fill-critical": "rgba(199, 10, 36, 1)",
      "color-bg-fill-critical-hover": "rgba(163, 10, 36, 1)",
      "color-bg-fill-critical-active": "rgba(142, 11, 33, 1)",
      "color-bg-fill-critical-selected": "rgba(142, 11, 33, 1)",
      "color-bg-fill-critical-secondary": "rgba(254, 209, 215, 1)",
      "color-bg-fill-emphasis": "rgba(0, 91, 211, 1)",
      "color-bg-fill-emphasis-hover": "rgba(0, 66, 153, 1)",
      "color-bg-fill-emphasis-active": "rgba(0, 46, 106, 1)",
      "color-bg-fill-magic": "rgba(128, 81, 255, 1)",
      "color-bg-fill-magic-secondary": "rgba(233, 229, 255, 1)",
      "color-bg-fill-magic-secondary-hover": "rgba(228, 222, 255, 1)",
      "color-bg-fill-magic-secondary-active": "rgba(223, 217, 255, 1)",
      "color-bg-fill-inverse": "rgba(48, 48, 48, 1)",
      "color-bg-fill-inverse-hover": "rgba(74, 74, 74, 1)",
      "color-bg-fill-inverse-active": "rgba(97, 97, 97, 1)",
      "color-bg-fill-transparent": "rgba(0, 0, 0, 0.02)",
      "color-bg-fill-transparent-hover": "rgba(0, 0, 0, 0.05)",
      "color-bg-fill-transparent-active": "rgba(0, 0, 0, 0.08)",
      "color-bg-fill-transparent-selected": "rgba(0, 0, 0, 0.08)",
      "color-bg-fill-transparent-secondary": "rgba(0, 0, 0, 0.06)",
      "color-bg-fill-transparent-secondary-hover": "rgba(0, 0, 0, 0.08)",
      "color-bg-fill-transparent-secondary-active": "rgba(0, 0, 0, 0.11)",
      "color-text": "rgba(48, 48, 48, 1)",
      "color-text-secondary": "rgba(97, 97, 97, 1)",
      "color-text-disabled": "rgba(181, 181, 181, 1)",
      "color-text-link": "rgba(0, 91, 211, 1)",
      "color-text-link-hover": "rgba(0, 66, 153, 1)",
      "color-text-link-active": "rgba(0, 46, 106, 1)",
      "color-text-brand": "rgba(74, 74, 74, 1)",
      "color-text-brand-hover": "rgba(48, 48, 48, 1)",
      "color-text-brand-on-bg-fill": "rgba(255, 255, 255, 1)",
      "color-text-brand-on-bg-fill-hover": "rgba(227, 227, 227, 1)",
      "color-text-brand-on-bg-fill-active": "rgba(204, 204, 204, 1)",
      "color-text-brand-on-bg-fill-disabled": "rgba(255, 255, 255, 1)",
      "color-text-info": "rgba(0, 58, 90, 1)",
      "color-text-info-hover": "rgba(0, 58, 90, 1)",
      "color-text-info-active": "rgba(0, 33, 51, 1)",
      "color-text-info-secondary": "rgba(0, 124, 180, 1)",
      "color-text-info-on-bg-fill": "rgba(0, 33, 51, 1)",
      "color-text-success": "rgba(1, 75, 64, 1)",
      "color-text-success-hover": "rgba(7, 54, 48, 1)",
      "color-text-success-active": "rgba(2, 38, 34, 1)",
      "color-text-success-secondary": "rgba(4, 123, 93, 1)",
      "color-text-success-on-bg-fill": "rgba(250, 255, 251, 1)",
      "color-text-caution": "rgba(79, 71, 0, 1)",
      "color-text-caution-hover": "rgba(51, 46, 0, 1)",
      "color-text-caution-active": "rgba(31, 28, 0, 1)",
      "color-text-caution-secondary": "rgba(130, 117, 0, 1)",
      "color-text-caution-on-bg-fill": "rgba(51, 46, 0, 1)",
      "color-text-warning": "rgba(94, 66, 0, 1)",
      "color-text-warning-hover": "rgba(65, 45, 0, 1)",
      "color-text-warning-active": "rgba(37, 26, 0, 1)",
      "color-text-warning-secondary": "rgba(149, 111, 0, 1)",
      "color-text-warning-on-bg-fill": "rgba(37, 26, 0, 1)",
      "color-text-critical": "rgba(142, 11, 33, 1)",
      "color-text-critical-hover": "rgba(95, 7, 22, 1)",
      "color-text-critical-active": "rgba(47, 4, 11, 1)",
      "color-text-critical-secondary": "rgba(199, 10, 36, 1)",
      "color-text-critical-on-bg-fill": "rgba(255, 250, 251, 1)",
      "color-text-emphasis": "rgba(0, 91, 211, 1)",
      "color-text-emphasis-hover": "rgba(0, 66, 153, 1)",
      "color-text-emphasis-active": "rgba(0, 46, 106, 1)",
      "color-text-emphasis-on-bg-fill": "rgba(252, 253, 255, 1)",
      "color-text-emphasis-on-bg-fill-hover": "rgba(226, 231, 255, 1)",
      "color-text-emphasis-on-bg-fill-active": "rgba(213, 220, 255, 1)",
      "color-text-magic": "rgba(87, 0, 209, 1)",
      "color-text-magic-secondary": "rgba(113, 38, 255, 1)",
      "color-text-magic-on-bg-fill": "rgba(253, 253, 255, 1)",
      "color-text-inverse": "rgba(227, 227, 227, 1)",
      "color-text-inverse-secondary": "rgba(181, 181, 181, 1)",
      "color-text-link-inverse": "rgba(197, 208, 255, 1)",
      "color-border": "rgba(227, 227, 227, 1)",
      "color-border-hover": "rgba(204, 204, 204, 1)",
      "color-border-disabled": "rgba(235, 235, 235, 1)",
      "color-border-secondary": "rgba(235, 235, 235, 1)",
      "color-border-tertiary": "rgba(204, 204, 204, 1)",
      "color-border-focus": "rgba(0, 91, 211, 1)",
      "color-border-brand": "rgba(227, 227, 227, 1)",
      "color-border-info": "rgba(168, 216, 255, 1)",
      "color-border-success": "rgba(146, 252, 172, 1)",
      "color-border-caution": "rgba(255, 235, 120, 1)",
      "color-border-warning": "rgba(255, 200, 121, 1)",
      "color-border-critical": "rgba(254, 193, 199, 1)",
      "color-border-critical-secondary": "rgba(142, 11, 33, 1)",
      "color-border-emphasis": "rgba(0, 91, 211, 1)",
      "color-border-emphasis-hover": "rgba(0, 66, 153, 1)",
      "color-border-emphasis-active": "rgba(0, 46, 106, 1)",
      "color-border-magic": "rgba(228, 222, 255, 1)",
      "color-border-magic-secondary": "rgba(148, 116, 255, 1)",
      "color-border-magic-secondary-hover": "rgba(128, 81, 255, 1)",
      "color-border-inverse": "rgba(97, 97, 97, 1)",
      "color-border-inverse-hover": "rgba(204, 204, 204, 1)",
      "color-border-inverse-active": "rgba(227, 227, 227, 1)",
      "color-tooltip-tail-down-border": "rgba(212, 212, 212, 1)",
      "color-tooltip-tail-up-border": "rgba(227, 227, 227, 1)",
      "color-icon": "rgba(74, 74, 74, 1)",
      "color-icon-hover": "rgba(48, 48, 48, 1)",
      "color-icon-active": "rgba(26, 26, 26, 1)",
      "color-icon-disabled": "rgba(204, 204, 204, 1)",
      "color-icon-secondary": "rgba(138, 138, 138, 1)",
      "color-icon-secondary-hover": "rgba(97, 97, 97, 1)",
      "color-icon-secondary-active": "rgba(74, 74, 74, 1)",
      "color-icon-brand": "rgba(26, 26, 26, 1)",
      "color-icon-info": "rgba(0, 148, 213, 1)",
      "color-icon-success": "rgba(4, 123, 93, 1)",
      "color-icon-caution": "rgba(153, 138, 0, 1)",
      "color-icon-warning": "rgba(178, 132, 0, 1)",
      "color-icon-critical": "rgba(226, 44, 56, 1)",
      "color-icon-emphasis": "rgba(0, 91, 211, 1)",
      "color-icon-emphasis-hover": "rgba(0, 66, 153, 1)",
      "color-icon-emphasis-active": "rgba(0, 46, 106, 1)",
      "color-icon-magic": "rgba(128, 81, 255, 1)",
      "color-icon-inverse": "rgba(227, 227, 227, 1)",
      "color-avatar-bg-fill": "rgba(181, 181, 181, 1)",
      "color-avatar-five-bg-fill": "rgba(253, 75, 146, 1)",
      "color-avatar-five-text-on-bg-fill": "rgba(255, 246, 248, 1)",
      "color-avatar-four-bg-fill": "rgba(81, 192, 255, 1)",
      "color-avatar-four-text-on-bg-fill": "rgba(0, 33, 51, 1)",
      "color-avatar-one-bg-fill": "rgba(197, 48, 197, 1)",
      "color-avatar-one-text-on-bg-fill": "rgba(253, 239, 253, 1)",
      "color-avatar-seven-bg-fill": "rgba(148, 116, 255, 1)",
      "color-avatar-seven-text-on-bg-fill": "rgba(248, 247, 255, 1)",
      "color-avatar-six-bg-fill": "rgba(37, 232, 43, 1)",
      "color-avatar-six-text-on-bg-fill": "rgba(3, 61, 5, 1)",
      "color-avatar-text-on-bg-fill": "rgba(255, 255, 255, 1)",
      "color-avatar-three-bg-fill": "rgba(44, 224, 212, 1)",
      "color-avatar-three-text-on-bg-fill": "rgba(3, 60, 57, 1)",
      "color-avatar-two-bg-fill": "rgba(82, 244, 144, 1)",
      "color-avatar-two-text-on-bg-fill": "rgba(1, 75, 64, 1)",
      "color-backdrop-bg": "rgba(0, 0, 0, 0.71)",
      "color-button-gradient-bg-fill": "none",
      "color-checkbox-bg-surface-disabled": "rgba(0, 0, 0, 0.08)",
      "color-checkbox-icon-disabled": "rgba(255, 255, 255, 1)",
      "color-input-bg-surface": "rgba(253, 253, 253, 1)",
      "color-input-bg-surface-hover": "rgba(250, 250, 250, 1)",
      "color-input-bg-surface-active": "rgba(247, 247, 247, 1)",
      "color-input-border": "rgba(138, 138, 138, 1)",
      "color-input-border-hover": "rgba(97, 97, 97, 1)",
      "color-input-border-active": "rgba(26, 26, 26, 1)",
      "color-nav-bg": "rgba(235, 235, 235, 1)",
      "color-nav-bg-surface": "rgba(0, 0, 0, 0.02)",
      "color-nav-bg-surface-hover": "rgba(241, 241, 241, 1)",
      "color-nav-bg-surface-active": "rgba(250, 250, 250, 1)",
      "color-nav-bg-surface-selected": "rgba(250, 250, 250, 1)",
      "color-radio-button-bg-surface-disabled": "rgba(0, 0, 0, 0.08)",
      "color-radio-button-icon-disabled": "rgba(255, 255, 255, 1)",
      "color-video-thumbnail-play-button-bg-fill-hover": "rgba(0, 0, 0, 0.81)",
      "color-video-thumbnail-play-button-bg-fill": "rgba(0, 0, 0, 0.71)",
      "color-video-thumbnail-play-button-text-on-bg-fill": "rgba(255, 255, 255, 1)",
      "color-scrollbar-thumb-bg-hover": "rgba(138, 138, 138, 1)",
      "color-scrollbar-thumb-bg": "rgba(181, 181, 181, 1)"
    },
    "font": {
      "font-family-sans": "'Inter', -apple-system, BlinkMacSystemFont, 'San Francisco', 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif",
      "font-family-mono": "ui-monospace, SFMono-Regular, 'SF Mono', Consolas, 'Liberation Mono', Menlo, monospace",
      "font-size-275": "0.6875rem",
      "font-size-300": "0.75rem",
      "font-size-325": "0.8125rem",
      "font-size-350": "0.875rem",
      "font-size-400": "1rem",
      "font-size-450": "1.125rem",
      "font-size-500": "1.25rem",
      "font-size-550": "1.375rem",
      "font-size-600": "1.5rem",
      "font-size-750": "1.875rem",
      "font-size-800": "2rem",
      "font-size-900": "2.25rem",
      "font-size-1000": "2.5rem",
      "font-weight-regular": "450",
      "font-weight-medium": "550",
      "font-weight-semibold": "650",
      "font-weight-bold": "700",
      "font-letter-spacing-densest": "-0.03375rem",
      "font-letter-spacing-denser": "-0.01875rem",
      "font-letter-spacing-dense": "-0.0125rem",
      "font-letter-spacing-normal": "0rem",
      "font-line-height-300": "0.75rem",
      "font-line-height-400": "1rem",
      "font-line-height-500": "1.25rem",
      "font-line-height-600": "1.5rem",
      "font-line-height-700": "1.75rem",
      "font-line-height-800": "2rem",
      "font-line-height-1000": "2.5rem",
      "font-line-height-1200": "3rem"
    },
    "height": {
      "height-0": "0rem",
      "height-025": "0.0625rem",
      "height-050": "0.125rem",
      "height-100": "0.25rem",
      "height-150": "0.375rem",
      "height-200": "0.5rem",
      "height-300": "0.75rem",
      "height-400": "1rem",
      "height-500": "1.25rem",
      "height-600": "1.5rem",
      "height-700": "1.75rem",
      "height-800": "2rem",
      "height-900": "2.25rem",
      "height-1000": "2.5rem",
      "height-1200": "3rem",
      "height-1600": "4rem",
      "height-2000": "5rem",
      "height-2400": "6rem",
      "height-2800": "7rem",
      "height-3200": "8rem"
    },
    "motion": {
      "motion-duration-0": "0ms",
      "motion-duration-50": "50ms",
      "motion-duration-100": "100ms",
      "motion-duration-150": "150ms",
      "motion-duration-200": "200ms",
      "motion-duration-250": "250ms",
      "motion-duration-300": "300ms",
      "motion-duration-350": "350ms",
      "motion-duration-400": "400ms",
      "motion-duration-450": "450ms",
      "motion-duration-500": "500ms",
      "motion-duration-5000": "5000ms",
      "motion-ease": "cubic-bezier(0.25, 0.1, 0.25, 1)",
      "motion-ease-in": "cubic-bezier(0.42, 0, 1, 1)",
      "motion-ease-out": "cubic-bezier(0.19, 0.91, 0.38, 1)",
      "motion-ease-in-out": "cubic-bezier(0.42, 0, 0.58, 1)",
      "motion-linear": "cubic-bezier(0, 0, 1, 1)",
      "motion-keyframes-bounce": "{ from, 65%, 85% { transform: scale(1) } 75% { transform: scale(0.85) } 82.5% { transform: scale(1.05) } }",
      "motion-keyframes-fade-in": "{ to { opacity: 1 } }",
      "motion-keyframes-pulse": "{ from, 75% { transform: scale(0.85); opacity: 1; } to { transform: scale(2.5); opacity: 0; } }",
      "motion-keyframes-spin": "{ to { transform: rotate(1turn) } }",
      "motion-keyframes-appear-above": "{ from { transform: translateY(var(--p-space-100)); opacity: 0; } to { transform: none; opacity: 1; } }",
      "motion-keyframes-appear-below": "{ from { transform: translateY(calc(var(--p-space-100) * -1)); opacity: 0; } to { transform: none; opacity: 1; } }"
    },
    "shadow": {
      "shadow-0": "none",
      "shadow-100": "none",
      "shadow-200": "0rem 0.1875rem 0.0625rem -0.0625rem rgba(26, 26, 26, 0.07)",
      "shadow-300": "0rem 0.25rem 0.375rem -0.125rem rgba(26, 26, 26, 0.20)",
      "shadow-400": "0rem 0.5rem 1rem -0.25rem rgba(26, 26, 26, 0.22)",
      "shadow-500": "0rem 0.75rem 1.25rem -0.5rem rgba(26, 26, 26, 0.24)",
      "shadow-600": "0rem 1.25rem 1.25rem -0.5rem rgba(26, 26, 26, 0.28)",
      "shadow-bevel-100": "none",
      "shadow-inset-100": "0rem 0.0625rem 0.125rem 0rem rgba(26, 26, 26, 0.15) inset, 0rem 0.0625rem 0.0625rem 0rem rgba(26, 26, 26, 0.15) inset",
      "shadow-inset-200": "0rem 0.125rem 0.0625rem 0rem rgba(26, 26, 26, 0.20) inset, 0.0625rem 0rem 0.0625rem 0rem rgba(26, 26, 26, 0.12) inset, -0.0625rem 0rem 0.0625rem 0rem rgba(26, 26, 26, 0.12) inset",
      "shadow-button": "0 0 0 var(--p-border-width-025) var(--p-color-border) inset",
      "shadow-button-hover": "0 0 0 var(--p-border-width-025) var(--p-color-border) inset",
      "shadow-button-inset": "0 0 0 var(--p-border-width-025) var(--p-color-border) inset",
      "shadow-button-primary": "none",
      "shadow-button-primary-hover": "none",
      "shadow-button-primary-inset": "none",
      "shadow-button-primary-critical": "none",
      "shadow-button-primary-critical-hover": "none",
      "shadow-button-primary-critical-inset": "none",
      "shadow-button-primary-success": "none",
      "shadow-button-primary-success-hover": "none",
      "shadow-button-primary-success-inset": "none",
      "shadow-border-inset": "0rem 0rem 0rem 0.0625rem rgba(0, 0, 0, 0.08) inset"
    },
    "space": {
      "space-0": "0rem",
      "space-025": "0.0625rem",
      "space-050": "0.125rem",
      "space-100": "0.25rem",
      "space-150": "0.375rem",
      "space-200": "0.5rem",
      "space-300": "0.75rem",
      "space-400": "1rem",
      "space-500": "1.25rem",
      "space-600": "1.5rem",
      "space-800": "2rem",
      "space-1000": "2.5rem",
      "space-1200": "3rem",
      "space-1600": "4rem",
      "space-2000": "5rem",
      "space-2400": "6rem",
      "space-2800": "7rem",
      "space-3200": "8rem",
      "space-button-group-gap": "0.5rem",
      "space-card-gap": "0.5rem",
      "space-card-padding": "1rem",
      "space-table-cell-padding": "0.375rem"
    },
    "text": {
      "text-heading-3xl-font-family": "'Inter', -apple-system, BlinkMacSystemFont, 'San Francisco', 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif",
      "text-heading-3xl-font-size": "2.25rem",
      "text-heading-3xl-font-weight": "700",
      "text-heading-3xl-font-letter-spacing": "-0.03375rem",
      "text-heading-3xl-font-line-height": "3rem",
      "text-heading-2xl-font-family": "'Inter', -apple-system, BlinkMacSystemFont, 'San Francisco', 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif",
      "text-heading-2xl-font-size": "2rem",
      "text-heading-2xl-font-weight": "700",
      "text-heading-2xl-font-letter-spacing": "-0.01875rem",
      "text-heading-2xl-font-line-height": "2.5rem",
      "text-heading-xl-font-family": "'Inter', -apple-system, BlinkMacSystemFont, 'San Francisco', 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif",
      "text-heading-xl-font-size": "1.375rem",
      "text-heading-xl-font-weight": "700",
      "text-heading-xl-font-letter-spacing": "-0.0125rem",
      "text-heading-xl-font-line-height": "1.75rem",
      "text-heading-lg-font-family": "'Inter', -apple-system, BlinkMacSystemFont, 'San Francisco', 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif",
      "text-heading-lg-font-size": "1.125rem",
      "text-heading-lg-font-weight": "650",
      "text-heading-lg-font-letter-spacing": "-0.0125rem",
      "text-heading-lg-font-line-height": "1.5rem",
      "text-heading-md-font-family": "'Inter', -apple-system, BlinkMacSystemFont, 'San Francisco', 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif",
      "text-heading-md-font-size": "1rem",
      "text-heading-md-font-weight": "650",
      "text-heading-md-font-letter-spacing": "0rem",
      "text-heading-md-font-line-height": "1.25rem",
      "text-heading-sm-font-family": "'Inter', -apple-system, BlinkMacSystemFont, 'San Francisco', 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif",
      "text-heading-sm-font-size": "0.875rem",
      "text-heading-sm-font-weight": "650",
      "text-heading-sm-font-letter-spacing": "0rem",
      "text-heading-sm-font-line-height": "1.25rem",
      "text-heading-xs-font-family": "'Inter', -apple-system, BlinkMacSystemFont, 'San Francisco', 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif",
      "text-heading-xs-font-size": "0.75rem",
      "text-heading-xs-font-weight": "650",
      "text-heading-xs-font-letter-spacing": "0rem",
      "text-heading-xs-font-line-height": "1rem",
      "text-body-lg-font-family": "'Inter', -apple-system, BlinkMacSystemFont, 'San Francisco', 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif",
      "text-body-lg-font-size": "1.125rem",
      "text-body-lg-font-weight": "450",
      "text-body-lg-font-letter-spacing": "0rem",
      "text-body-lg-font-line-height": "1.75rem",
      "text-body-md-font-family": "'Inter', -apple-system, BlinkMacSystemFont, 'San Francisco', 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif",
      "text-body-md-font-size": "1rem",
      "text-body-md-font-weight": "450",
      "text-body-md-font-letter-spacing": "0rem",
      "text-body-md-font-line-height": "1.5rem",
      "text-body-sm-font-family": "'Inter', -apple-system, BlinkMacSystemFont, 'San Francisco', 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif",
      "text-body-sm-font-size": "0.875rem",
      "text-body-sm-font-weight": "450",
      "text-body-sm-font-letter-spacing": "0rem",
      "text-body-sm-font-line-height": "1.25rem",
      "text-body-xs-font-family": "'Inter', -apple-system, BlinkMacSystemFont, 'San Francisco', 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif",
      "text-body-xs-font-size": "0.75rem",
      "text-body-xs-font-weight": "450",
      "text-body-xs-font-letter-spacing": "0rem",
      "text-body-xs-font-line-height": "1rem"
    },
    "width": {
      "width-0": "0rem",
      "width-025": "0.0625rem",
      "width-050": "0.125rem",
      "width-100": "0.25rem",
      "width-150": "0.375rem",
      "width-200": "0.5rem",
      "width-300": "0.75rem",
      "width-400": "1rem",
      "width-500": "1.25rem",
      "width-600": "1.5rem",
      "width-700": "1.75rem",
      "width-800": "2rem",
      "width-900": "2.25rem",
      "width-1000": "2.5rem",
      "width-1200": "3rem",
      "width-1600": "4rem",
      "width-2000": "5rem",
      "width-2400": "6rem",
      "width-2800": "7rem",
      "width-3200": "8rem"
    },
    "zIndex": {
      "z-index-0": "auto",
      "z-index-1": "100",
      "z-index-2": "400",
      "z-index-3": "510",
      "z-index-4": "512",
      "z-index-5": "513",
      "z-index-6": "514",
      "z-index-7": "515",
      "z-index-8": "516",
      "z-index-9": "517",
      "z-index-10": "518",
      "z-index-11": "519",
      "z-index-12": "520"
    }
  },
  "light-high-contrast-experimental": {
    "border": {
      "border-radius-0": "0rem",
      "border-radius-050": "0.125rem",
      "border-radius-100": "0.25rem",
      "border-radius-150": "0.375rem",
      "border-radius-200": "0.5rem",
      "border-radius-300": "0.75rem",
      "border-radius-400": "1rem",
      "border-radius-500": "1.25rem",
      "border-radius-750": "1.875rem",
      "border-radius-full": "624.9375rem",
      "border-width-0": "0rem",
      "border-width-0165": "0.04125rem",
      "border-width-025": "0.0625rem",
      "border-width-050": "0.125rem",
      "border-width-100": "0.25rem"
    },
    "breakpoints": {
      "breakpoints-xs": "0rem",
      "breakpoints-sm": "30.625rem",
      "breakpoints-md": "48rem",
      "breakpoints-lg": "65rem",
      "breakpoints-xl": "90rem"
    },
    "color": {
      "color-scheme": "light",
      "color-bg": "rgba(241, 241, 241, 1)",
      "color-bg-inverse": "rgba(26, 26, 26, 1)",
      "color-bg-surface": "rgba(255, 255, 255, 1)",
      "color-bg-surface-hover": "rgba(247, 247, 247, 1)",
      "color-bg-surface-active": "rgba(243, 243, 243, 1)",
      "color-bg-surface-selected": "rgba(241, 241, 241, 1)",
      "color-bg-surface-disabled": "rgba(0, 0, 0, 0.05)",
      "color-bg-surface-secondary": "rgba(241, 241, 241, 1)",
      "color-bg-surface-secondary-hover": "rgba(241, 241, 241, 1)",
      "color-bg-surface-secondary-active": "rgba(235, 235, 235, 1)",
      "color-bg-surface-secondary-selected": "rgba(235, 235, 235, 1)",
      "color-bg-surface-tertiary": "rgba(243, 243, 243, 1)",
      "color-bg-surface-tertiary-hover": "rgba(235, 235, 235, 1)",
      "color-bg-surface-tertiary-active": "rgba(227, 227, 227, 1)",
      "color-bg-surface-brand": "rgba(227, 227, 227, 1)",
      "color-bg-surface-brand-hover": "rgba(235, 235, 235, 1)",
      "color-bg-surface-brand-active": "rgba(241, 241, 241, 1)",
      "color-bg-surface-brand-selected": "rgba(241, 241, 241, 1)",
      "color-bg-surface-info": "rgba(234, 244, 255, 1)",
      "color-bg-surface-info-hover": "rgba(224, 240, 255, 1)",
      "color-bg-surface-info-active": "rgba(202, 230, 255, 1)",
      "color-bg-surface-success": "rgba(205, 254, 212, 1)",
      "color-bg-surface-success-hover": "rgba(175, 254, 191, 1)",
      "color-bg-surface-success-active": "rgba(146, 252, 172, 1)",
      "color-bg-surface-caution": "rgba(255, 248, 219, 1)",
      "color-bg-surface-caution-hover": "rgba(255, 244, 191, 1)",
      "color-bg-surface-caution-active": "rgba(255, 239, 157, 1)",
      "color-bg-surface-warning": "rgba(255, 241, 227, 1)",
      "color-bg-surface-warning-hover": "rgba(255, 235, 213, 1)",
      "color-bg-surface-warning-active": "rgba(255, 228, 198, 1)",
      "color-bg-surface-critical": "rgba(254, 232, 235, 1)",
      "color-bg-surface-critical-hover": "rgba(254, 225, 230, 1)",
      "color-bg-surface-critical-active": "rgba(254, 217, 223, 1)",
      "color-bg-surface-emphasis": "rgba(240, 242, 255, 1)",
      "color-bg-surface-emphasis-hover": "rgba(234, 237, 255, 1)",
      "color-bg-surface-emphasis-active": "rgba(226, 231, 255, 1)",
      "color-bg-surface-magic": "rgba(248, 247, 255, 1)",
      "color-bg-surface-magic-hover": "rgba(243, 241, 255, 1)",
      "color-bg-surface-magic-active": "rgba(233, 229, 255, 1)",
      "color-bg-surface-inverse": "rgba(48, 48, 48, 1)",
      "color-bg-surface-transparent": "rgba(0, 0, 0, 0)",
      "color-bg-fill": "rgba(255, 255, 255, 1)",
      "color-bg-fill-hover": "rgba(250, 250, 250, 1)",
      "color-bg-fill-active": "rgba(247, 247, 247, 1)",
      "color-bg-fill-selected": "rgba(204, 204, 204, 1)",
      "color-bg-fill-disabled": "rgba(0, 0, 0, 0.05)",
      "color-bg-fill-secondary": "rgba(241, 241, 241, 1)",
      "color-bg-fill-secondary-hover": "rgba(235, 235, 235, 1)",
      "color-bg-fill-secondary-active": "rgba(227, 227, 227, 1)",
      "color-bg-fill-secondary-selected": "rgba(227, 227, 227, 1)",
      "color-bg-fill-tertiary": "rgba(227, 227, 227, 1)",
      "color-bg-fill-tertiary-hover": "rgba(212, 212, 212, 1)",
      "color-bg-fill-tertiary-active": "rgba(204, 204, 204, 1)",
      "color-bg-fill-brand": "rgba(48, 48, 48, 1)",
      "color-bg-fill-brand-hover": "rgba(26, 26, 26, 1)",
      "color-bg-fill-brand-active": "rgba(26, 26, 26, 1)",
      "color-bg-fill-brand-selected": "rgba(48, 48, 48, 1)",
      "color-bg-fill-brand-disabled": "rgba(0, 0, 0, 0.17)",
      "color-bg-fill-info": "rgba(145, 208, 255, 1)",
      "color-bg-fill-info-hover": "rgba(81, 192, 255, 1)",
      "color-bg-fill-info-active": "rgba(0, 148, 213, 1)",
      "color-bg-fill-info-secondary": "rgba(213, 235, 255, 1)",
      "color-bg-fill-success": "rgba(4, 123, 93, 1)",
      "color-bg-fill-success-hover": "rgba(3, 94, 76, 1)",
      "color-bg-fill-success-active": "rgba(1, 75, 64, 1)",
      "color-bg-fill-success-secondary": "rgba(175, 254, 191, 1)",
      "color-bg-fill-warning": "rgba(255, 184, 0, 1)",
      "color-bg-fill-warning-hover": "rgba(229, 165, 0, 1)",
      "color-bg-fill-warning-active": "rgba(178, 132, 0, 1)",
      "color-bg-fill-warning-secondary": "rgba(255, 214, 164, 1)",
      "color-bg-fill-caution": "rgba(255, 230, 0, 1)",
      "color-bg-fill-caution-hover": "rgba(234, 211, 0, 1)",
      "color-bg-fill-caution-active": "rgba(225, 203, 0, 1)",
      "color-bg-fill-caution-secondary": "rgba(255, 235, 120, 1)",
      "color-bg-fill-critical": "rgba(199, 10, 36, 1)",
      "color-bg-fill-critical-hover": "rgba(163, 10, 36, 1)",
      "color-bg-fill-critical-active": "rgba(142, 11, 33, 1)",
      "color-bg-fill-critical-selected": "rgba(142, 11, 33, 1)",
      "color-bg-fill-critical-secondary": "rgba(254, 209, 215, 1)",
      "color-bg-fill-emphasis": "rgba(0, 91, 211, 1)",
      "color-bg-fill-emphasis-hover": "rgba(0, 66, 153, 1)",
      "color-bg-fill-emphasis-active": "rgba(0, 46, 106, 1)",
      "color-bg-fill-magic": "rgba(128, 81, 255, 1)",
      "color-bg-fill-magic-secondary": "rgba(233, 229, 255, 1)",
      "color-bg-fill-magic-secondary-hover": "rgba(228, 222, 255, 1)",
      "color-bg-fill-magic-secondary-active": "rgba(223, 217, 255, 1)",
      "color-bg-fill-inverse": "rgba(48, 48, 48, 1)",
      "color-bg-fill-inverse-hover": "rgba(74, 74, 74, 1)",
      "color-bg-fill-inverse-active": "rgba(97, 97, 97, 1)",
      "color-bg-fill-transparent": "rgba(0, 0, 0, 0.02)",
      "color-bg-fill-transparent-hover": "rgba(0, 0, 0, 0.05)",
      "color-bg-fill-transparent-active": "rgba(0, 0, 0, 0.08)",
      "color-bg-fill-transparent-selected": "rgba(0, 0, 0, 0.08)",
      "color-bg-fill-transparent-secondary": "rgba(0, 0, 0, 0.06)",
      "color-bg-fill-transparent-secondary-hover": "rgba(0, 0, 0, 0.08)",
      "color-bg-fill-transparent-secondary-active": "rgba(0, 0, 0, 0.11)",
      "color-text": "rgba(26, 26, 26, 1)",
      "color-text-secondary": "rgba(26, 26, 26, 1)",
      "color-text-disabled": "rgba(181, 181, 181, 1)",
      "color-text-link": "rgba(0, 91, 211, 1)",
      "color-text-link-hover": "rgba(0, 66, 153, 1)",
      "color-text-link-active": "rgba(0, 46, 106, 1)",
      "color-text-brand": "rgba(26, 26, 26, 1)",
      "color-text-brand-hover": "rgba(48, 48, 48, 1)",
      "color-text-brand-on-bg-fill": "rgba(255, 255, 255, 1)",
      "color-text-brand-on-bg-fill-hover": "rgba(227, 227, 227, 1)",
      "color-text-brand-on-bg-fill-active": "rgba(204, 204, 204, 1)",
      "color-text-brand-on-bg-fill-disabled": "rgba(255, 255, 255, 1)",
      "color-text-info": "rgba(0, 58, 90, 1)",
      "color-text-info-hover": "rgba(0, 58, 90, 1)",
      "color-text-info-active": "rgba(0, 33, 51, 1)",
      "color-text-info-secondary": "rgba(0, 124, 180, 1)",
      "color-text-info-on-bg-fill": "rgba(0, 33, 51, 1)",
      "color-text-success": "rgba(1, 75, 64, 1)",
      "color-text-success-hover": "rgba(7, 54, 48, 1)",
      "color-text-success-active": "rgba(2, 38, 34, 1)",
      "color-text-success-secondary": "rgba(4, 123, 93, 1)",
      "color-text-success-on-bg-fill": "rgba(250, 255, 251, 1)",
      "color-text-caution": "rgba(79, 71, 0, 1)",
      "color-text-caution-hover": "rgba(51, 46, 0, 1)",
      "color-text-caution-active": "rgba(31, 28, 0, 1)",
      "color-text-caution-secondary": "rgba(130, 117, 0, 1)",
      "color-text-caution-on-bg-fill": "rgba(51, 46, 0, 1)",
      "color-text-warning": "rgba(94, 66, 0, 1)",
      "color-text-warning-hover": "rgba(65, 45, 0, 1)",
      "color-text-warning-active": "rgba(37, 26, 0, 1)",
      "color-text-warning-secondary": "rgba(149, 111, 0, 1)",
      "color-text-warning-on-bg-fill": "rgba(37, 26, 0, 1)",
      "color-text-critical": "rgba(142, 11, 33, 1)",
      "color-text-critical-hover": "rgba(95, 7, 22, 1)",
      "color-text-critical-active": "rgba(47, 4, 11, 1)",
      "color-text-critical-secondary": "rgba(199, 10, 36, 1)",
      "color-text-critical-on-bg-fill": "rgba(255, 250, 251, 1)",
      "color-text-emphasis": "rgba(0, 91, 211, 1)",
      "color-text-emphasis-hover": "rgba(0, 66, 153, 1)",
      "color-text-emphasis-active": "rgba(0, 46, 106, 1)",
      "color-text-emphasis-on-bg-fill": "rgba(252, 253, 255, 1)",
      "color-text-emphasis-on-bg-fill-hover": "rgba(226, 231, 255, 1)",
      "color-text-emphasis-on-bg-fill-active": "rgba(213, 220, 255, 1)",
      "color-text-magic": "rgba(87, 0, 209, 1)",
      "color-text-magic-secondary": "rgba(113, 38, 255, 1)",
      "color-text-magic-on-bg-fill": "rgba(253, 253, 255, 1)",
      "color-text-inverse": "rgba(227, 227, 227, 1)",
      "color-text-inverse-secondary": "rgba(181, 181, 181, 1)",
      "color-text-link-inverse": "rgba(197, 208, 255, 1)",
      "color-border": "rgba(138, 138, 138, 1)",
      "color-border-hover": "rgba(204, 204, 204, 1)",
      "color-border-disabled": "rgba(235, 235, 235, 1)",
      "color-border-secondary": "rgba(138, 138, 138, 1)",
      "color-border-tertiary": "rgba(204, 204, 204, 1)",
      "color-border-focus": "rgba(0, 91, 211, 1)",
      "color-border-brand": "rgba(227, 227, 227, 1)",
      "color-border-info": "rgba(168, 216, 255, 1)",
      "color-border-success": "rgba(146, 252, 172, 1)",
      "color-border-caution": "rgba(255, 235, 120, 1)",
      "color-border-warning": "rgba(255, 200, 121, 1)",
      "color-border-critical": "rgba(254, 193, 199, 1)",
      "color-border-critical-secondary": "rgba(142, 11, 33, 1)",
      "color-border-emphasis": "rgba(0, 91, 211, 1)",
      "color-border-emphasis-hover": "rgba(0, 66, 153, 1)",
      "color-border-emphasis-active": "rgba(0, 46, 106, 1)",
      "color-border-magic": "rgba(228, 222, 255, 1)",
      "color-border-magic-secondary": "rgba(148, 116, 255, 1)",
      "color-border-magic-secondary-hover": "rgba(128, 81, 255, 1)",
      "color-border-inverse": "rgba(97, 97, 97, 1)",
      "color-border-inverse-hover": "rgba(204, 204, 204, 1)",
      "color-border-inverse-active": "rgba(227, 227, 227, 1)",
      "color-tooltip-tail-down-border": "rgba(212, 212, 212, 1)",
      "color-tooltip-tail-up-border": "rgba(227, 227, 227, 1)",
      "color-icon": "rgba(74, 74, 74, 1)",
      "color-icon-hover": "rgba(48, 48, 48, 1)",
      "color-icon-active": "rgba(26, 26, 26, 1)",
      "color-icon-disabled": "rgba(204, 204, 204, 1)",
      "color-icon-secondary": "rgba(74, 74, 74, 1)",
      "color-icon-secondary-hover": "rgba(97, 97, 97, 1)",
      "color-icon-secondary-active": "rgba(74, 74, 74, 1)",
      "color-icon-brand": "rgba(26, 26, 26, 1)",
      "color-icon-info": "rgba(0, 148, 213, 1)",
      "color-icon-success": "rgba(4, 123, 93, 1)",
      "color-icon-caution": "rgba(153, 138, 0, 1)",
      "color-icon-warning": "rgba(178, 132, 0, 1)",
      "color-icon-critical": "rgba(226, 44, 56, 1)",
      "color-icon-emphasis": "rgba(0, 91, 211, 1)",
      "color-icon-emphasis-hover": "rgba(0, 66, 153, 1)",
      "color-icon-emphasis-active": "rgba(0, 46, 106, 1)",
      "color-icon-magic": "rgba(128, 81, 255, 1)",
      "color-icon-inverse": "rgba(227, 227, 227, 1)",
      "color-avatar-bg-fill": "rgba(181, 181, 181, 1)",
      "color-avatar-five-bg-fill": "rgba(253, 75, 146, 1)",
      "color-avatar-five-text-on-bg-fill": "rgba(255, 246, 248, 1)",
      "color-avatar-four-bg-fill": "rgba(81, 192, 255, 1)",
      "color-avatar-four-text-on-bg-fill": "rgba(0, 33, 51, 1)",
      "color-avatar-one-bg-fill": "rgba(197, 48, 197, 1)",
      "color-avatar-one-text-on-bg-fill": "rgba(253, 239, 253, 1)",
      "color-avatar-seven-bg-fill": "rgba(148, 116, 255, 1)",
      "color-avatar-seven-text-on-bg-fill": "rgba(248, 247, 255, 1)",
      "color-avatar-six-bg-fill": "rgba(37, 232, 43, 1)",
      "color-avatar-six-text-on-bg-fill": "rgba(3, 61, 5, 1)",
      "color-avatar-text-on-bg-fill": "rgba(255, 255, 255, 1)",
      "color-avatar-three-bg-fill": "rgba(44, 224, 212, 1)",
      "color-avatar-three-text-on-bg-fill": "rgba(3, 60, 57, 1)",
      "color-avatar-two-bg-fill": "rgba(82, 244, 144, 1)",
      "color-avatar-two-text-on-bg-fill": "rgba(1, 75, 64, 1)",
      "color-backdrop-bg": "rgba(0, 0, 0, 0.71)",
      "color-button-gradient-bg-fill": "linear-gradient(180deg, rgba(48, 48, 48, 0) 63.53%, rgba(255, 255, 255, 0.15) 100%)",
      "color-checkbox-bg-surface-disabled": "rgba(0, 0, 0, 0.08)",
      "color-checkbox-icon-disabled": "rgba(255, 255, 255, 1)",
      "color-input-bg-surface": "rgba(253, 253, 253, 1)",
      "color-input-bg-surface-hover": "rgba(250, 250, 250, 1)",
      "color-input-bg-surface-active": "rgba(247, 247, 247, 1)",
      "color-input-border": "rgba(74, 74, 74, 1)",
      "color-input-border-hover": "rgba(97, 97, 97, 1)",
      "color-input-border-active": "rgba(26, 26, 26, 1)",
      "color-nav-bg": "rgba(235, 235, 235, 1)",
      "color-nav-bg-surface": "rgba(0, 0, 0, 0.02)",
      "color-nav-bg-surface-hover": "rgba(241, 241, 241, 1)",
      "color-nav-bg-surface-active": "rgba(250, 250, 250, 1)",
      "color-nav-bg-surface-selected": "rgba(250, 250, 250, 1)",
      "color-radio-button-bg-surface-disabled": "rgba(0, 0, 0, 0.08)",
      "color-radio-button-icon-disabled": "rgba(255, 255, 255, 1)",
      "color-video-thumbnail-play-button-bg-fill-hover": "rgba(0, 0, 0, 0.81)",
      "color-video-thumbnail-play-button-bg-fill": "rgba(0, 0, 0, 0.71)",
      "color-video-thumbnail-play-button-text-on-bg-fill": "rgba(255, 255, 255, 1)",
      "color-scrollbar-thumb-bg-hover": "rgba(138, 138, 138, 1)",
      "color-scrollbar-thumb-bg": "rgba(181, 181, 181, 1)"
    },
    "font": {
      "font-family-sans": "'Inter', -apple-system, BlinkMacSystemFont, 'San Francisco', 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif",
      "font-family-mono": "ui-monospace, SFMono-Regular, 'SF Mono', Consolas, 'Liberation Mono', Menlo, monospace",
      "font-size-275": "0.6875rem",
      "font-size-300": "0.75rem",
      "font-size-325": "0.8125rem",
      "font-size-350": "0.875rem",
      "font-size-400": "1rem",
      "font-size-450": "1.125rem",
      "font-size-500": "1.25rem",
      "font-size-550": "1.375rem",
      "font-size-600": "1.5rem",
      "font-size-750": "1.875rem",
      "font-size-800": "2rem",
      "font-size-900": "2.25rem",
      "font-size-1000": "2.5rem",
      "font-weight-regular": "450",
      "font-weight-medium": "550",
      "font-weight-semibold": "650",
      "font-weight-bold": "700",
      "font-letter-spacing-densest": "-0.03375rem",
      "font-letter-spacing-denser": "-0.01875rem",
      "font-letter-spacing-dense": "-0.0125rem",
      "font-letter-spacing-normal": "0rem",
      "font-line-height-300": "0.75rem",
      "font-line-height-400": "1rem",
      "font-line-height-500": "1.25rem",
      "font-line-height-600": "1.5rem",
      "font-line-height-700": "1.75rem",
      "font-line-height-800": "2rem",
      "font-line-height-1000": "2.5rem",
      "font-line-height-1200": "3rem"
    },
    "height": {
      "height-0": "0rem",
      "height-025": "0.0625rem",
      "height-050": "0.125rem",
      "height-100": "0.25rem",
      "height-150": "0.375rem",
      "height-200": "0.5rem",
      "height-300": "0.75rem",
      "height-400": "1rem",
      "height-500": "1.25rem",
      "height-600": "1.5rem",
      "height-700": "1.75rem",
      "height-800": "2rem",
      "height-900": "2.25rem",
      "height-1000": "2.5rem",
      "height-1200": "3rem",
      "height-1600": "4rem",
      "height-2000": "5rem",
      "height-2400": "6rem",
      "height-2800": "7rem",
      "height-3200": "8rem"
    },
    "motion": {
      "motion-duration-0": "0ms",
      "motion-duration-50": "50ms",
      "motion-duration-100": "100ms",
      "motion-duration-150": "150ms",
      "motion-duration-200": "200ms",
      "motion-duration-250": "250ms",
      "motion-duration-300": "300ms",
      "motion-duration-350": "350ms",
      "motion-duration-400": "400ms",
      "motion-duration-450": "450ms",
      "motion-duration-500": "500ms",
      "motion-duration-5000": "5000ms",
      "motion-ease": "cubic-bezier(0.25, 0.1, 0.25, 1)",
      "motion-ease-in": "cubic-bezier(0.42, 0, 1, 1)",
      "motion-ease-out": "cubic-bezier(0.19, 0.91, 0.38, 1)",
      "motion-ease-in-out": "cubic-bezier(0.42, 0, 0.58, 1)",
      "motion-linear": "cubic-bezier(0, 0, 1, 1)",
      "motion-keyframes-bounce": "{ from, 65%, 85% { transform: scale(1) } 75% { transform: scale(0.85) } 82.5% { transform: scale(1.05) } }",
      "motion-keyframes-fade-in": "{ to { opacity: 1 } }",
      "motion-keyframes-pulse": "{ from, 75% { transform: scale(0.85); opacity: 1; } to { transform: scale(2.5); opacity: 0; } }",
      "motion-keyframes-spin": "{ to { transform: rotate(1turn) } }",
      "motion-keyframes-appear-above": "{ from { transform: translateY(var(--p-space-100)); opacity: 0; } to { transform: none; opacity: 1; } }",
      "motion-keyframes-appear-below": "{ from { transform: translateY(calc(var(--p-space-100) * -1)); opacity: 0; } to { transform: none; opacity: 1; } }"
    },
    "shadow": {
      "shadow-0": "none",
      "shadow-100": "0rem 0.0625rem 0rem 0rem rgba(26, 26, 26, 0.07)",
      "shadow-200": "0rem 0.1875rem 0.0625rem -0.0625rem rgba(26, 26, 26, 0.07)",
      "shadow-300": "0rem 0.25rem 0.375rem -0.125rem rgba(26, 26, 26, 0.20)",
      "shadow-400": "0rem 0.5rem 1rem -0.25rem rgba(26, 26, 26, 0.22)",
      "shadow-500": "0rem 0.75rem 1.25rem -0.5rem rgba(26, 26, 26, 0.24)",
      "shadow-600": "0rem 1.25rem 1.25rem -0.5rem rgba(26, 26, 26, 0.28)",
      "shadow-bevel-100": "0rem 0.0625rem 0rem 0rem rgba(26, 26, 26, 0.07), 0rem 0.0625rem 0rem 0rem rgba(208, 208, 208, 0.40) inset, 0.0625rem 0rem 0rem 0rem #CCC inset, -0.0625rem 0rem 0rem 0rem #CCC inset, 0rem -0.0625rem 0rem 0rem #999 inset",
      "shadow-inset-100": "0rem 0.0625rem 0.125rem 0rem rgba(26, 26, 26, 0.15) inset, 0rem 0.0625rem 0.0625rem 0rem rgba(26, 26, 26, 0.15) inset",
      "shadow-inset-200": "0rem 0.125rem 0.0625rem 0rem rgba(26, 26, 26, 0.20) inset, 0.0625rem 0rem 0.0625rem 0rem rgba(26, 26, 26, 0.12) inset, -0.0625rem 0rem 0.0625rem 0rem rgba(26, 26, 26, 0.12) inset",
      "shadow-button": "0rem -0.0625rem 0rem 0rem #b5b5b5 inset, 0rem 0rem 0rem 0.0625rem rgba(0, 0, 0, 0.1) inset, 0rem 0.03125rem 0rem 0.09375rem #FFF inset",
      "shadow-button-hover": "0rem 0.0625rem 0rem 0rem #EBEBEB inset, -0.0625rem 0rem 0rem 0rem #EBEBEB inset, 0.0625rem 0rem 0rem 0rem #EBEBEB inset, 0rem -0.0625rem 0rem 0rem #CCC inset",
      "shadow-button-inset": "-0.0625rem 0rem 0.0625rem 0rem rgba(26, 26, 26, 0.122) inset, 0.0625rem 0rem 0.0625rem 0rem rgba(26, 26, 26, 0.122) inset, 0rem 0.125rem 0.0625rem 0rem rgba(26, 26, 26, 0.2) inset",
      "shadow-button-primary": "0rem -0.0625rem 0rem 0.0625rem rgba(0, 0, 0, 0.8) inset, 0rem 0rem 0rem 0.0625rem rgba(48, 48, 48, 1) inset, 0rem 0.03125rem 0rem 0.09375rem rgba(255, 255, 255, 0.25) inset",
      "shadow-button-primary-hover": "0rem 0.0625rem 0rem 0rem rgba(255, 255, 255, 0.24) inset, 0.0625rem 0rem 0rem 0rem rgba(255, 255, 255, 0.20) inset, -0.0625rem 0rem 0rem 0rem rgba(255, 255, 255, 0.20) inset, 0rem -0.0625rem 0rem 0rem #000 inset, 0rem -0.0625rem 0rem 0.0625rem #1A1A1A",
      "shadow-button-primary-inset": "0rem 0.1875rem 0rem 0rem rgb(0, 0, 0) inset",
      "shadow-button-primary-critical": "0rem -0.0625rem 0rem 0.0625rem rgba(142, 31, 11, 0.8) inset, 0rem 0rem 0rem 0.0625rem rgba(181, 38, 11, 0.8) inset, 0rem 0.03125rem 0rem 0.09375rem rgba(255, 255, 255, 0.349) inset",
      "shadow-button-primary-critical-hover": "0rem 0.0625rem 0rem 0rem rgba(255, 255, 255, 0.48) inset, 0.0625rem 0rem 0rem 0rem rgba(255, 255, 255, 0.20) inset, -0.0625rem 0rem 0rem 0rem rgba(255, 255, 255, 0.20) inset, 0rem -0.09375rem 0rem 0rem rgba(0, 0, 0, 0.25) inset",
      "shadow-button-primary-critical-inset": "-0.0625rem 0rem 0.0625rem 0rem rgba(0, 0, 0, 0.2) inset, 0.0625rem 0rem 0.0625rem 0rem rgba(0, 0, 0, 0.2) inset, 0rem 0.125rem 0rem 0rem rgba(0, 0, 0, 0.6) inset",
      "shadow-button-primary-success": "0rem -0.0625rem 0rem 0.0625rem rgba(12, 81, 50, 0.8) inset, 0rem 0rem 0rem 0.0625rem rgba(19, 111, 69, 0.8) inset, 0rem 0.03125rem 0rem 0.09375rem rgba(255, 255, 255, 0.251) inset",
      "shadow-button-primary-success-hover": "0rem 0.0625rem 0rem 0rem rgba(255, 255, 255, 0.48) inset, 0.0625rem 0rem 0rem 0rem rgba(255, 255, 255, 0.20) inset, -0.0625rem 0rem 0rem 0rem rgba(255, 255, 255, 0.20) inset, 0rem -0.09375rem 0rem 0rem rgba(0, 0, 0, 0.25) inset",
      "shadow-button-primary-success-inset": "-0.0625rem 0rem 0.0625rem 0rem rgba(0, 0, 0, 0.2) inset, 0.0625rem 0rem 0.0625rem 0rem rgba(0, 0, 0, 0.2) inset, 0rem 0.125rem 0rem 0rem rgba(0, 0, 0, 0.6) inset",
      "shadow-border-inset": "0rem 0rem 0rem 0.0625rem rgba(0, 0, 0, 0.08) inset"
    },
    "space": {
      "space-0": "0rem",
      "space-025": "0.0625rem",
      "space-050": "0.125rem",
      "space-100": "0.25rem",
      "space-150": "0.375rem",
      "space-200": "0.5rem",
      "space-300": "0.75rem",
      "space-400": "1rem",
      "space-500": "1.25rem",
      "space-600": "1.5rem",
      "space-800": "2rem",
      "space-1000": "2.5rem",
      "space-1200": "3rem",
      "space-1600": "4rem",
      "space-2000": "5rem",
      "space-2400": "6rem",
      "space-2800": "7rem",
      "space-3200": "8rem",
      "space-button-group-gap": "0.5rem",
      "space-card-gap": "1rem",
      "space-card-padding": "1rem",
      "space-table-cell-padding": "0.375rem"
    },
    "text": {
      "text-heading-3xl-font-family": "'Inter', -apple-system, BlinkMacSystemFont, 'San Francisco', 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif",
      "text-heading-3xl-font-size": "2.25rem",
      "text-heading-3xl-font-weight": "700",
      "text-heading-3xl-font-letter-spacing": "-0.03375rem",
      "text-heading-3xl-font-line-height": "3rem",
      "text-heading-2xl-font-family": "'Inter', -apple-system, BlinkMacSystemFont, 'San Francisco', 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif",
      "text-heading-2xl-font-size": "1.875rem",
      "text-heading-2xl-font-weight": "700",
      "text-heading-2xl-font-letter-spacing": "-0.01875rem",
      "text-heading-2xl-font-line-height": "2.5rem",
      "text-heading-xl-font-family": "'Inter', -apple-system, BlinkMacSystemFont, 'San Francisco', 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif",
      "text-heading-xl-font-size": "1.5rem",
      "text-heading-xl-font-weight": "700",
      "text-heading-xl-font-letter-spacing": "-0.0125rem",
      "text-heading-xl-font-line-height": "2rem",
      "text-heading-lg-font-family": "'Inter', -apple-system, BlinkMacSystemFont, 'San Francisco', 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif",
      "text-heading-lg-font-size": "1.25rem",
      "text-heading-lg-font-weight": "650",
      "text-heading-lg-font-letter-spacing": "-0.0125rem",
      "text-heading-lg-font-line-height": "1.5rem",
      "text-heading-md-font-family": "'Inter', -apple-system, BlinkMacSystemFont, 'San Francisco', 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif",
      "text-heading-md-font-size": "0.875rem",
      "text-heading-md-font-weight": "650",
      "text-heading-md-font-letter-spacing": "0rem",
      "text-heading-md-font-line-height": "1.25rem",
      "text-heading-sm-font-family": "'Inter', -apple-system, BlinkMacSystemFont, 'San Francisco', 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif",
      "text-heading-sm-font-size": "0.8125rem",
      "text-heading-sm-font-weight": "650",
      "text-heading-sm-font-letter-spacing": "0rem",
      "text-heading-sm-font-line-height": "1.25rem",
      "text-heading-xs-font-family": "'Inter', -apple-system, BlinkMacSystemFont, 'San Francisco', 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif",
      "text-heading-xs-font-size": "0.75rem",
      "text-heading-xs-font-weight": "650",
      "text-heading-xs-font-letter-spacing": "0rem",
      "text-heading-xs-font-line-height": "1rem",
      "text-body-lg-font-family": "'Inter', -apple-system, BlinkMacSystemFont, 'San Francisco', 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif",
      "text-body-lg-font-size": "0.875rem",
      "text-body-lg-font-weight": "450",
      "text-body-lg-font-letter-spacing": "0rem",
      "text-body-lg-font-line-height": "1.25rem",
      "text-body-md-font-family": "'Inter', -apple-system, BlinkMacSystemFont, 'San Francisco', 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif",
      "text-body-md-font-size": "0.8125rem",
      "text-body-md-font-weight": "450",
      "text-body-md-font-letter-spacing": "0rem",
      "text-body-md-font-line-height": "1.25rem",
      "text-body-sm-font-family": "'Inter', -apple-system, BlinkMacSystemFont, 'San Francisco', 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif",
      "text-body-sm-font-size": "0.75rem",
      "text-body-sm-font-weight": "450",
      "text-body-sm-font-letter-spacing": "0rem",
      "text-body-sm-font-line-height": "1rem",
      "text-body-xs-font-family": "'Inter', -apple-system, BlinkMacSystemFont, 'San Francisco', 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif",
      "text-body-xs-font-size": "0.6875rem",
      "text-body-xs-font-weight": "450",
      "text-body-xs-font-letter-spacing": "0rem",
      "text-body-xs-font-line-height": "0.75rem"
    },
    "width": {
      "width-0": "0rem",
      "width-025": "0.0625rem",
      "width-050": "0.125rem",
      "width-100": "0.25rem",
      "width-150": "0.375rem",
      "width-200": "0.5rem",
      "width-300": "0.75rem",
      "width-400": "1rem",
      "width-500": "1.25rem",
      "width-600": "1.5rem",
      "width-700": "1.75rem",
      "width-800": "2rem",
      "width-900": "2.25rem",
      "width-1000": "2.5rem",
      "width-1200": "3rem",
      "width-1600": "4rem",
      "width-2000": "5rem",
      "width-2400": "6rem",
      "width-2800": "7rem",
      "width-3200": "8rem"
    },
    "zIndex": {
      "z-index-0": "auto",
      "z-index-1": "100",
      "z-index-2": "400",
      "z-index-3": "510",
      "z-index-4": "512",
      "z-index-5": "513",
      "z-index-6": "514",
      "z-index-7": "515",
      "z-index-8": "516",
      "z-index-9": "517",
      "z-index-10": "518",
      "z-index-11": "519",
      "z-index-12": "520"
    }
  },
  "dark-experimental": {
    "border": {
      "border-radius-0": "0rem",
      "border-radius-050": "0.125rem",
      "border-radius-100": "0.25rem",
      "border-radius-150": "0.375rem",
      "border-radius-200": "0.5rem",
      "border-radius-300": "0.75rem",
      "border-radius-400": "1rem",
      "border-radius-500": "1.25rem",
      "border-radius-750": "1.875rem",
      "border-radius-full": "624.9375rem",
      "border-width-0": "0rem",
      "border-width-0165": "0.04125rem",
      "border-width-025": "0.0625rem",
      "border-width-050": "0.125rem",
      "border-width-100": "0.25rem"
    },
    "breakpoints": {
      "breakpoints-xs": "0rem",
      "breakpoints-sm": "30.625rem",
      "breakpoints-md": "48rem",
      "breakpoints-lg": "65rem",
      "breakpoints-xl": "90rem"
    },
    "color": {
      "color-scheme": "dark",
      "color-bg": "rgba(26, 26, 26, 1)",
      "color-bg-inverse": "rgba(26, 26, 26, 1)",
      "color-bg-surface": "rgba(48, 48, 48, 1)",
      "color-bg-surface-hover": "rgba(74, 74, 74, 1)",
      "color-bg-surface-active": "rgba(97, 97, 97, 1)",
      "color-bg-surface-selected": "rgba(97, 97, 97, 1)",
      "color-bg-surface-disabled": "rgba(0, 0, 0, 0.05)",
      "color-bg-surface-secondary": "rgba(247, 247, 247, 1)",
      "color-bg-surface-secondary-hover": "rgba(255, 255, 255, 0.06)",
      "color-bg-surface-secondary-active": "rgba(255, 255, 255, 0.14)",
      "color-bg-surface-secondary-selected": "rgba(235, 235, 235, 1)",
      "color-bg-surface-tertiary": "rgba(255, 255, 255, 0.08)",
      "color-bg-surface-tertiary-hover": "rgba(235, 235, 235, 1)",
      "color-bg-surface-tertiary-active": "rgba(227, 227, 227, 1)",
      "color-bg-surface-brand": "rgba(227, 227, 227, 1)",
      "color-bg-surface-brand-hover": "rgba(235, 235, 235, 1)",
      "color-bg-surface-brand-active": "rgba(241, 241, 241, 1)",
      "color-bg-surface-brand-selected": "rgba(74, 74, 74, 1)",
      "color-bg-surface-info": "rgba(234, 244, 255, 1)",
      "color-bg-surface-info-hover": "rgba(224, 240, 255, 1)",
      "color-bg-surface-info-active": "rgba(202, 230, 255, 1)",
      "color-bg-surface-success": "rgba(205, 254, 212, 1)",
      "color-bg-surface-success-hover": "rgba(175, 254, 191, 1)",
      "color-bg-surface-success-active": "rgba(146, 252, 172, 1)",
      "color-bg-surface-caution": "rgba(255, 248, 219, 1)",
      "color-bg-surface-caution-hover": "rgba(255, 244, 191, 1)",
      "color-bg-surface-caution-active": "rgba(255, 239, 157, 1)",
      "color-bg-surface-warning": "rgba(255, 241, 227, 1)",
      "color-bg-surface-warning-hover": "rgba(255, 235, 213, 1)",
      "color-bg-surface-warning-active": "rgba(255, 228, 198, 1)",
      "color-bg-surface-critical": "rgba(254, 232, 235, 1)",
      "color-bg-surface-critical-hover": "rgba(254, 225, 230, 1)",
      "color-bg-surface-critical-active": "rgba(254, 217, 223, 1)",
      "color-bg-surface-emphasis": "rgba(240, 242, 255, 1)",
      "color-bg-surface-emphasis-hover": "rgba(234, 237, 255, 1)",
      "color-bg-surface-emphasis-active": "rgba(226, 231, 255, 1)",
      "color-bg-surface-magic": "rgba(248, 247, 255, 1)",
      "color-bg-surface-magic-hover": "rgba(243, 241, 255, 1)",
      "color-bg-surface-magic-active": "rgba(233, 229, 255, 1)",
      "color-bg-surface-inverse": "rgba(48, 48, 48, 1)",
      "color-bg-surface-transparent": "rgba(0, 0, 0, 0)",
      "color-bg-fill": "rgba(48, 48, 48, 1)",
      "color-bg-fill-hover": "rgba(255, 255, 255, 0.05)",
      "color-bg-fill-active": "rgba(97, 97, 97, 1)",
      "color-bg-fill-selected": "rgba(97, 97, 97, 1)",
      "color-bg-fill-disabled": "rgba(255, 255, 255, 0.05)",
      "color-bg-fill-secondary": "rgba(255, 255, 255, 0.08)",
      "color-bg-fill-secondary-hover": "rgba(255, 255, 255, 0.11)",
      "color-bg-fill-secondary-active": "rgba(227, 227, 227, 1)",
      "color-bg-fill-secondary-selected": "rgba(255, 255, 255, 0.17)",
      "color-bg-fill-tertiary": "rgba(48, 48, 48, 1)",
      "color-bg-fill-tertiary-hover": "rgba(212, 212, 212, 1)",
      "color-bg-fill-tertiary-active": "rgba(204, 204, 204, 1)",
      "color-bg-fill-brand": "rgba(255, 255, 255, 1)",
      "color-bg-fill-brand-hover": "rgba(243, 243, 243, 1)",
      "color-bg-fill-brand-active": "rgba(247, 247, 247, 1)",
      "color-bg-fill-brand-selected": "rgba(212, 212, 212, 1)",
      "color-bg-fill-brand-disabled": "rgba(255, 255, 255, 0.22)",
      "color-bg-fill-info": "rgba(145, 208, 255, 1)",
      "color-bg-fill-info-hover": "rgba(81, 192, 255, 1)",
      "color-bg-fill-info-active": "rgba(0, 148, 213, 1)",
      "color-bg-fill-info-secondary": "rgba(213, 235, 255, 1)",
      "color-bg-fill-success": "rgba(4, 123, 93, 1)",
      "color-bg-fill-success-hover": "rgba(3, 94, 76, 1)",
      "color-bg-fill-success-active": "rgba(1, 75, 64, 1)",
      "color-bg-fill-success-secondary": "rgba(175, 254, 191, 1)",
      "color-bg-fill-warning": "rgba(255, 184, 0, 1)",
      "color-bg-fill-warning-hover": "rgba(229, 165, 0, 1)",
      "color-bg-fill-warning-active": "rgba(178, 132, 0, 1)",
      "color-bg-fill-warning-secondary": "rgba(255, 214, 164, 1)",
      "color-bg-fill-caution": "rgba(255, 230, 0, 1)",
      "color-bg-fill-caution-hover": "rgba(234, 211, 0, 1)",
      "color-bg-fill-caution-active": "rgba(225, 203, 0, 1)",
      "color-bg-fill-caution-secondary": "rgba(255, 235, 120, 1)",
      "color-bg-fill-critical": "rgba(199, 10, 36, 1)",
      "color-bg-fill-critical-hover": "rgba(163, 10, 36, 1)",
      "color-bg-fill-critical-active": "rgba(142, 11, 33, 1)",
      "color-bg-fill-critical-selected": "rgba(142, 11, 33, 1)",
      "color-bg-fill-critical-secondary": "rgba(254, 209, 215, 1)",
      "color-bg-fill-emphasis": "rgba(0, 91, 211, 1)",
      "color-bg-fill-emphasis-hover": "rgba(0, 66, 153, 1)",
      "color-bg-fill-emphasis-active": "rgba(0, 46, 106, 1)",
      "color-bg-fill-magic": "rgba(128, 81, 255, 1)",
      "color-bg-fill-magic-secondary": "rgba(233, 229, 255, 1)",
      "color-bg-fill-magic-secondary-hover": "rgba(228, 222, 255, 1)",
      "color-bg-fill-magic-secondary-active": "rgba(223, 217, 255, 1)",
      "color-bg-fill-inverse": "rgba(48, 48, 48, 1)",
      "color-bg-fill-inverse-hover": "rgba(74, 74, 74, 1)",
      "color-bg-fill-inverse-active": "rgba(97, 97, 97, 1)",
      "color-bg-fill-transparent": "rgba(255, 255, 255, 0.11)",
      "color-bg-fill-transparent-hover": "rgba(255, 255, 255, 0.14)",
      "color-bg-fill-transparent-active": "rgba(255, 255, 255, 0.17)",
      "color-bg-fill-transparent-selected": "rgba(255, 255, 255, 0.22)",
      "color-bg-fill-transparent-secondary": "rgba(0, 0, 0, 0.06)",
      "color-bg-fill-transparent-secondary-hover": "rgba(0, 0, 0, 0.08)",
      "color-bg-fill-transparent-secondary-active": "rgba(0, 0, 0, 0.11)",
      "color-text": "rgba(227, 227, 227, 1)",
      "color-text-secondary": "rgba(181, 181, 181, 1)",
      "color-text-disabled": "rgba(74, 74, 74, 1)",
      "color-text-link": "rgba(0, 91, 211, 1)",
      "color-text-link-hover": "rgba(0, 66, 153, 1)",
      "color-text-link-active": "rgba(0, 46, 106, 1)",
      "color-text-brand": "rgba(74, 74, 74, 1)",
      "color-text-brand-hover": "rgba(48, 48, 48, 1)",
      "color-text-brand-on-bg-fill": "rgba(48, 48, 48, 1)",
      "color-text-brand-on-bg-fill-hover": "rgba(227, 227, 227, 1)",
      "color-text-brand-on-bg-fill-active": "rgba(204, 204, 204, 1)",
      "color-text-brand-on-bg-fill-disabled": "rgba(138, 138, 138, 1)",
      "color-text-info": "rgba(0, 58, 90, 1)",
      "color-text-info-hover": "rgba(0, 58, 90, 1)",
      "color-text-info-active": "rgba(0, 33, 51, 1)",
      "color-text-info-secondary": "rgba(0, 124, 180, 1)",
      "color-text-info-on-bg-fill": "rgba(0, 33, 51, 1)",
      "color-text-success": "rgba(1, 75, 64, 1)",
      "color-text-success-hover": "rgba(7, 54, 48, 1)",
      "color-text-success-active": "rgba(2, 38, 34, 1)",
      "color-text-success-secondary": "rgba(4, 123, 93, 1)",
      "color-text-success-on-bg-fill": "rgba(250, 255, 251, 1)",
      "color-text-caution": "rgba(79, 71, 0, 1)",
      "color-text-caution-hover": "rgba(51, 46, 0, 1)",
      "color-text-caution-active": "rgba(31, 28, 0, 1)",
      "color-text-caution-secondary": "rgba(130, 117, 0, 1)",
      "color-text-caution-on-bg-fill": "rgba(51, 46, 0, 1)",
      "color-text-warning": "rgba(94, 66, 0, 1)",
      "color-text-warning-hover": "rgba(65, 45, 0, 1)",
      "color-text-warning-active": "rgba(37, 26, 0, 1)",
      "color-text-warning-secondary": "rgba(149, 111, 0, 1)",
      "color-text-warning-on-bg-fill": "rgba(37, 26, 0, 1)",
      "color-text-critical": "rgba(142, 11, 33, 1)",
      "color-text-critical-hover": "rgba(95, 7, 22, 1)",
      "color-text-critical-active": "rgba(47, 4, 11, 1)",
      "color-text-critical-secondary": "rgba(199, 10, 36, 1)",
      "color-text-critical-on-bg-fill": "rgba(255, 250, 251, 1)",
      "color-text-emphasis": "rgba(0, 91, 211, 1)",
      "color-text-emphasis-hover": "rgba(0, 66, 153, 1)",
      "color-text-emphasis-active": "rgba(0, 46, 106, 1)",
      "color-text-emphasis-on-bg-fill": "rgba(252, 253, 255, 1)",
      "color-text-emphasis-on-bg-fill-hover": "rgba(226, 231, 255, 1)",
      "color-text-emphasis-on-bg-fill-active": "rgba(213, 220, 255, 1)",
      "color-text-magic": "rgba(87, 0, 209, 1)",
      "color-text-magic-secondary": "rgba(113, 38, 255, 1)",
      "color-text-magic-on-bg-fill": "rgba(253, 253, 255, 1)",
      "color-text-inverse": "rgba(227, 227, 227, 1)",
      "color-text-inverse-secondary": "rgba(181, 181, 181, 1)",
      "color-text-link-inverse": "rgba(197, 208, 255, 1)",
      "color-border": "rgba(227, 227, 227, 1)",
      "color-border-hover": "rgba(204, 204, 204, 1)",
      "color-border-disabled": "rgba(235, 235, 235, 1)",
      "color-border-secondary": "rgba(74, 74, 74, 1)",
      "color-border-tertiary": "rgba(204, 204, 204, 1)",
      "color-border-focus": "rgba(0, 91, 211, 1)",
      "color-border-brand": "rgba(227, 227, 227, 1)",
      "color-border-info": "rgba(168, 216, 255, 1)",
      "color-border-success": "rgba(146, 252, 172, 1)",
      "color-border-caution": "rgba(255, 235, 120, 1)",
      "color-border-warning": "rgba(255, 200, 121, 1)",
      "color-border-critical": "rgba(254, 193, 199, 1)",
      "color-border-critical-secondary": "rgba(142, 11, 33, 1)",
      "color-border-emphasis": "rgba(0, 91, 211, 1)",
      "color-border-emphasis-hover": "rgba(0, 66, 153, 1)",
      "color-border-emphasis-active": "rgba(0, 46, 106, 1)",
      "color-border-magic": "rgba(228, 222, 255, 1)",
      "color-border-magic-secondary": "rgba(148, 116, 255, 1)",
      "color-border-magic-secondary-hover": "rgba(128, 81, 255, 1)",
      "color-border-inverse": "rgba(97, 97, 97, 1)",
      "color-border-inverse-hover": "rgba(204, 204, 204, 1)",
      "color-border-inverse-active": "rgba(227, 227, 227, 1)",
      "color-tooltip-tail-down-border": "rgba(60, 60, 60, 1)",
      "color-tooltip-tail-up-border": "rgba(71, 71, 71, 1)",
      "color-icon": "rgba(227, 227, 227, 1)",
      "color-icon-hover": "rgba(48, 48, 48, 1)",
      "color-icon-active": "rgba(26, 26, 26, 1)",
      "color-icon-disabled": "rgba(74, 74, 74, 1)",
      "color-icon-secondary": "rgba(181, 181, 181, 1)",
      "color-icon-secondary-hover": "rgba(97, 97, 97, 1)",
      "color-icon-secondary-active": "rgba(74, 74, 74, 1)",
      "color-icon-brand": "rgba(74, 74, 74, 1)",
      "color-icon-info": "rgba(0, 148, 213, 1)",
      "color-icon-success": "rgba(4, 123, 93, 1)",
      "color-icon-caution": "rgba(153, 138, 0, 1)",
      "color-icon-warning": "rgba(178, 132, 0, 1)",
      "color-icon-critical": "rgba(226, 44, 56, 1)",
      "color-icon-emphasis": "rgba(0, 91, 211, 1)",
      "color-icon-emphasis-hover": "rgba(0, 66, 153, 1)",
      "color-icon-emphasis-active": "rgba(0, 46, 106, 1)",
      "color-icon-magic": "rgba(128, 81, 255, 1)",
      "color-icon-inverse": "rgba(227, 227, 227, 1)",
      "color-avatar-bg-fill": "rgba(181, 181, 181, 1)",
      "color-avatar-five-bg-fill": "rgba(253, 75, 146, 1)",
      "color-avatar-five-text-on-bg-fill": "rgba(255, 246, 248, 1)",
      "color-avatar-four-bg-fill": "rgba(81, 192, 255, 1)",
      "color-avatar-four-text-on-bg-fill": "rgba(0, 33, 51, 1)",
      "color-avatar-one-bg-fill": "rgba(197, 48, 197, 1)",
      "color-avatar-one-text-on-bg-fill": "rgba(253, 239, 253, 1)",
      "color-avatar-seven-bg-fill": "rgba(148, 116, 255, 1)",
      "color-avatar-seven-text-on-bg-fill": "rgba(248, 247, 255, 1)",
      "color-avatar-six-bg-fill": "rgba(37, 232, 43, 1)",
      "color-avatar-six-text-on-bg-fill": "rgba(3, 61, 5, 1)",
      "color-avatar-text-on-bg-fill": "rgba(255, 255, 255, 1)",
      "color-avatar-three-bg-fill": "rgba(44, 224, 212, 1)",
      "color-avatar-three-text-on-bg-fill": "rgba(3, 60, 57, 1)",
      "color-avatar-two-bg-fill": "rgba(82, 244, 144, 1)",
      "color-avatar-two-text-on-bg-fill": "rgba(1, 75, 64, 1)",
      "color-backdrop-bg": "rgba(0, 0, 0, 0.71)",
      "color-button-gradient-bg-fill": "linear-gradient(180deg, rgba(48, 48, 48, 0) 63.53%, rgba(255, 255, 255, 0.15) 100%)",
      "color-checkbox-bg-surface-disabled": "rgba(0, 0, 0, 0.08)",
      "color-checkbox-icon-disabled": "rgba(255, 255, 255, 1)",
      "color-input-bg-surface": "rgba(253, 253, 253, 1)",
      "color-input-bg-surface-hover": "rgba(250, 250, 250, 1)",
      "color-input-bg-surface-active": "rgba(247, 247, 247, 1)",
      "color-input-border": "rgba(138, 138, 138, 1)",
      "color-input-border-hover": "rgba(97, 97, 97, 1)",
      "color-input-border-active": "rgba(26, 26, 26, 1)",
      "color-nav-bg": "rgba(235, 235, 235, 1)",
      "color-nav-bg-surface": "rgba(0, 0, 0, 0.02)",
      "color-nav-bg-surface-hover": "rgba(241, 241, 241, 1)",
      "color-nav-bg-surface-active": "rgba(250, 250, 250, 1)",
      "color-nav-bg-surface-selected": "rgba(250, 250, 250, 1)",
      "color-radio-button-bg-surface-disabled": "rgba(0, 0, 0, 0.08)",
      "color-radio-button-icon-disabled": "rgba(255, 255, 255, 1)",
      "color-video-thumbnail-play-button-bg-fill-hover": "rgba(0, 0, 0, 0.81)",
      "color-video-thumbnail-play-button-bg-fill": "rgba(0, 0, 0, 0.71)",
      "color-video-thumbnail-play-button-text-on-bg-fill": "rgba(255, 255, 255, 1)",
      "color-scrollbar-thumb-bg-hover": "rgba(138, 138, 138, 1)",
      "color-scrollbar-thumb-bg": "rgba(181, 181, 181, 1)"
    },
    "font": {
      "font-family-sans": "'Inter', -apple-system, BlinkMacSystemFont, 'San Francisco', 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif",
      "font-family-mono": "ui-monospace, SFMono-Regular, 'SF Mono', Consolas, 'Liberation Mono', Menlo, monospace",
      "font-size-275": "0.6875rem",
      "font-size-300": "0.75rem",
      "font-size-325": "0.8125rem",
      "font-size-350": "0.875rem",
      "font-size-400": "1rem",
      "font-size-450": "1.125rem",
      "font-size-500": "1.25rem",
      "font-size-550": "1.375rem",
      "font-size-600": "1.5rem",
      "font-size-750": "1.875rem",
      "font-size-800": "2rem",
      "font-size-900": "2.25rem",
      "font-size-1000": "2.5rem",
      "font-weight-regular": "450",
      "font-weight-medium": "550",
      "font-weight-semibold": "650",
      "font-weight-bold": "700",
      "font-letter-spacing-densest": "-0.03375rem",
      "font-letter-spacing-denser": "-0.01875rem",
      "font-letter-spacing-dense": "-0.0125rem",
      "font-letter-spacing-normal": "0rem",
      "font-line-height-300": "0.75rem",
      "font-line-height-400": "1rem",
      "font-line-height-500": "1.25rem",
      "font-line-height-600": "1.5rem",
      "font-line-height-700": "1.75rem",
      "font-line-height-800": "2rem",
      "font-line-height-1000": "2.5rem",
      "font-line-height-1200": "3rem"
    },
    "height": {
      "height-0": "0rem",
      "height-025": "0.0625rem",
      "height-050": "0.125rem",
      "height-100": "0.25rem",
      "height-150": "0.375rem",
      "height-200": "0.5rem",
      "height-300": "0.75rem",
      "height-400": "1rem",
      "height-500": "1.25rem",
      "height-600": "1.5rem",
      "height-700": "1.75rem",
      "height-800": "2rem",
      "height-900": "2.25rem",
      "height-1000": "2.5rem",
      "height-1200": "3rem",
      "height-1600": "4rem",
      "height-2000": "5rem",
      "height-2400": "6rem",
      "height-2800": "7rem",
      "height-3200": "8rem"
    },
    "motion": {
      "motion-duration-0": "0ms",
      "motion-duration-50": "50ms",
      "motion-duration-100": "100ms",
      "motion-duration-150": "150ms",
      "motion-duration-200": "200ms",
      "motion-duration-250": "250ms",
      "motion-duration-300": "300ms",
      "motion-duration-350": "350ms",
      "motion-duration-400": "400ms",
      "motion-duration-450": "450ms",
      "motion-duration-500": "500ms",
      "motion-duration-5000": "5000ms",
      "motion-ease": "cubic-bezier(0.25, 0.1, 0.25, 1)",
      "motion-ease-in": "cubic-bezier(0.42, 0, 1, 1)",
      "motion-ease-out": "cubic-bezier(0.19, 0.91, 0.38, 1)",
      "motion-ease-in-out": "cubic-bezier(0.42, 0, 0.58, 1)",
      "motion-linear": "cubic-bezier(0, 0, 1, 1)",
      "motion-keyframes-bounce": "{ from, 65%, 85% { transform: scale(1) } 75% { transform: scale(0.85) } 82.5% { transform: scale(1.05) } }",
      "motion-keyframes-fade-in": "{ to { opacity: 1 } }",
      "motion-keyframes-pulse": "{ from, 75% { transform: scale(0.85); opacity: 1; } to { transform: scale(2.5); opacity: 0; } }",
      "motion-keyframes-spin": "{ to { transform: rotate(1turn) } }",
      "motion-keyframes-appear-above": "{ from { transform: translateY(var(--p-space-100)); opacity: 0; } to { transform: none; opacity: 1; } }",
      "motion-keyframes-appear-below": "{ from { transform: translateY(calc(var(--p-space-100) * -1)); opacity: 0; } to { transform: none; opacity: 1; } }"
    },
    "shadow": {
      "shadow-0": "none",
      "shadow-100": "0rem 0.0625rem 0rem 0rem rgba(26, 26, 26, 0.07)",
      "shadow-200": "0rem 0.1875rem 0.0625rem -0.0625rem rgba(26, 26, 26, 0.07)",
      "shadow-300": "0rem 0.25rem 0.375rem -0.125rem rgba(26, 26, 26, 0.20)",
      "shadow-400": "0rem 0.5rem 1rem -0.25rem rgba(26, 26, 26, 0.22)",
      "shadow-500": "0rem 0.75rem 1.25rem -0.5rem rgba(26, 26, 26, 0.24)",
      "shadow-600": "0rem 1.25rem 1.25rem -0.5rem rgba(26, 26, 26, 0.28)",
      "shadow-bevel-100": "0.0625rem 0rem 0rem 0rem rgba(204, 204, 204, 0.08) inset, -0.0625rem 0rem 0rem 0rem rgba(204, 204, 204, 0.08) inset, 0rem -0.0625rem 0rem 0rem rgba(204, 204, 204, 0.08) inset, 0rem 0.0625rem 0rem 0rem rgba(204, 204, 204, 0.16) inset",
      "shadow-inset-100": "0rem 0.0625rem 0.125rem 0rem rgba(26, 26, 26, 0.15) inset, 0rem 0.0625rem 0.0625rem 0rem rgba(26, 26, 26, 0.15) inset",
      "shadow-inset-200": "0rem 0.125rem 0.0625rem 0rem rgba(26, 26, 26, 0.20) inset, 0.0625rem 0rem 0.0625rem 0rem rgba(26, 26, 26, 0.12) inset, -0.0625rem 0rem 0.0625rem 0rem rgba(26, 26, 26, 0.12) inset",
      "shadow-button": "0rem -0.0625rem 0rem 0rem #b5b5b5 inset, 0rem 0rem 0rem 0.0625rem rgba(0, 0, 0, 0.1) inset, 0rem 0.03125rem 0rem 0.09375rem #FFF inset",
      "shadow-button-hover": "0rem 0.0625rem 0rem 0rem #EBEBEB inset, -0.0625rem 0rem 0rem 0rem #EBEBEB inset, 0.0625rem 0rem 0rem 0rem #EBEBEB inset, 0rem -0.0625rem 0rem 0rem #CCC inset",
      "shadow-button-inset": "-0.0625rem 0rem 0.0625rem 0rem rgba(26, 26, 26, 0.122) inset, 0.0625rem 0rem 0.0625rem 0rem rgba(26, 26, 26, 0.122) inset, 0rem 0.125rem 0.0625rem 0rem rgba(26, 26, 26, 0.2) inset",
      "shadow-button-primary": "0rem -0.0625rem 0rem 0.0625rem rgba(0, 0, 0, 0.8) inset, 0rem 0rem 0rem 0.0625rem rgba(48, 48, 48, 1) inset, 0rem 0.03125rem 0rem 0.09375rem rgba(255, 255, 255, 0.25) inset",
      "shadow-button-primary-hover": "0rem 0.0625rem 0rem 0rem rgba(255, 255, 255, 0.24) inset, 0.0625rem 0rem 0rem 0rem rgba(255, 255, 255, 0.20) inset, -0.0625rem 0rem 0rem 0rem rgba(255, 255, 255, 0.20) inset, 0rem -0.0625rem 0rem 0rem #000 inset, 0rem -0.0625rem 0rem 0.0625rem #1A1A1A",
      "shadow-button-primary-inset": "0rem 0.1875rem 0rem 0rem rgb(0, 0, 0) inset",
      "shadow-button-primary-critical": "0rem -0.0625rem 0rem 0.0625rem rgba(142, 31, 11, 0.8) inset, 0rem 0rem 0rem 0.0625rem rgba(181, 38, 11, 0.8) inset, 0rem 0.03125rem 0rem 0.09375rem rgba(255, 255, 255, 0.349) inset",
      "shadow-button-primary-critical-hover": "0rem 0.0625rem 0rem 0rem rgba(255, 255, 255, 0.48) inset, 0.0625rem 0rem 0rem 0rem rgba(255, 255, 255, 0.20) inset, -0.0625rem 0rem 0rem 0rem rgba(255, 255, 255, 0.20) inset, 0rem -0.09375rem 0rem 0rem rgba(0, 0, 0, 0.25) inset",
      "shadow-button-primary-critical-inset": "-0.0625rem 0rem 0.0625rem 0rem rgba(0, 0, 0, 0.2) inset, 0.0625rem 0rem 0.0625rem 0rem rgba(0, 0, 0, 0.2) inset, 0rem 0.125rem 0rem 0rem rgba(0, 0, 0, 0.6) inset",
      "shadow-button-primary-success": "0rem -0.0625rem 0rem 0.0625rem rgba(12, 81, 50, 0.8) inset, 0rem 0rem 0rem 0.0625rem rgba(19, 111, 69, 0.8) inset, 0rem 0.03125rem 0rem 0.09375rem rgba(255, 255, 255, 0.251) inset",
      "shadow-button-primary-success-hover": "0rem 0.0625rem 0rem 0rem rgba(255, 255, 255, 0.48) inset, 0.0625rem 0rem 0rem 0rem rgba(255, 255, 255, 0.20) inset, -0.0625rem 0rem 0rem 0rem rgba(255, 255, 255, 0.20) inset, 0rem -0.09375rem 0rem 0rem rgba(0, 0, 0, 0.25) inset",
      "shadow-button-primary-success-inset": "-0.0625rem 0rem 0.0625rem 0rem rgba(0, 0, 0, 0.2) inset, 0.0625rem 0rem 0.0625rem 0rem rgba(0, 0, 0, 0.2) inset, 0rem 0.125rem 0rem 0rem rgba(0, 0, 0, 0.6) inset",
      "shadow-border-inset": "0rem 0rem 0rem 0.0625rem rgba(0, 0, 0, 0.08) inset"
    },
    "space": {
      "space-0": "0rem",
      "space-025": "0.0625rem",
      "space-050": "0.125rem",
      "space-100": "0.25rem",
      "space-150": "0.375rem",
      "space-200": "0.5rem",
      "space-300": "0.75rem",
      "space-400": "1rem",
      "space-500": "1.25rem",
      "space-600": "1.5rem",
      "space-800": "2rem",
      "space-1000": "2.5rem",
      "space-1200": "3rem",
      "space-1600": "4rem",
      "space-2000": "5rem",
      "space-2400": "6rem",
      "space-2800": "7rem",
      "space-3200": "8rem",
      "space-button-group-gap": "0.5rem",
      "space-card-gap": "1rem",
      "space-card-padding": "1rem",
      "space-table-cell-padding": "0.375rem"
    },
    "text": {
      "text-heading-3xl-font-family": "'Inter', -apple-system, BlinkMacSystemFont, 'San Francisco', 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif",
      "text-heading-3xl-font-size": "2.25rem",
      "text-heading-3xl-font-weight": "700",
      "text-heading-3xl-font-letter-spacing": "-0.03375rem",
      "text-heading-3xl-font-line-height": "3rem",
      "text-heading-2xl-font-family": "'Inter', -apple-system, BlinkMacSystemFont, 'San Francisco', 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif",
      "text-heading-2xl-font-size": "1.875rem",
      "text-heading-2xl-font-weight": "700",
      "text-heading-2xl-font-letter-spacing": "-0.01875rem",
      "text-heading-2xl-font-line-height": "2.5rem",
      "text-heading-xl-font-family": "'Inter', -apple-system, BlinkMacSystemFont, 'San Francisco', 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif",
      "text-heading-xl-font-size": "1.5rem",
      "text-heading-xl-font-weight": "700",
      "text-heading-xl-font-letter-spacing": "-0.0125rem",
      "text-heading-xl-font-line-height": "2rem",
      "text-heading-lg-font-family": "'Inter', -apple-system, BlinkMacSystemFont, 'San Francisco', 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif",
      "text-heading-lg-font-size": "1.25rem",
      "text-heading-lg-font-weight": "650",
      "text-heading-lg-font-letter-spacing": "-0.0125rem",
      "text-heading-lg-font-line-height": "1.5rem",
      "text-heading-md-font-family": "'Inter', -apple-system, BlinkMacSystemFont, 'San Francisco', 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif",
      "text-heading-md-font-size": "0.875rem",
      "text-heading-md-font-weight": "650",
      "text-heading-md-font-letter-spacing": "0rem",
      "text-heading-md-font-line-height": "1.25rem",
      "text-heading-sm-font-family": "'Inter', -apple-system, BlinkMacSystemFont, 'San Francisco', 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif",
      "text-heading-sm-font-size": "0.8125rem",
      "text-heading-sm-font-weight": "650",
      "text-heading-sm-font-letter-spacing": "0rem",
      "text-heading-sm-font-line-height": "1.25rem",
      "text-heading-xs-font-family": "'Inter', -apple-system, BlinkMacSystemFont, 'San Francisco', 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif",
      "text-heading-xs-font-size": "0.75rem",
      "text-heading-xs-font-weight": "650",
      "text-heading-xs-font-letter-spacing": "0rem",
      "text-heading-xs-font-line-height": "1rem",
      "text-body-lg-font-family": "'Inter', -apple-system, BlinkMacSystemFont, 'San Francisco', 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif",
      "text-body-lg-font-size": "0.875rem",
      "text-body-lg-font-weight": "450",
      "text-body-lg-font-letter-spacing": "0rem",
      "text-body-lg-font-line-height": "1.25rem",
      "text-body-md-font-family": "'Inter', -apple-system, BlinkMacSystemFont, 'San Francisco', 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif",
      "text-body-md-font-size": "0.8125rem",
      "text-body-md-font-weight": "450",
      "text-body-md-font-letter-spacing": "0rem",
      "text-body-md-font-line-height": "1.25rem",
      "text-body-sm-font-family": "'Inter', -apple-system, BlinkMacSystemFont, 'San Francisco', 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif",
      "text-body-sm-font-size": "0.75rem",
      "text-body-sm-font-weight": "450",
      "text-body-sm-font-letter-spacing": "0rem",
      "text-body-sm-font-line-height": "1rem",
      "text-body-xs-font-family": "'Inter', -apple-system, BlinkMacSystemFont, 'San Francisco', 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif",
      "text-body-xs-font-size": "0.6875rem",
      "text-body-xs-font-weight": "450",
      "text-body-xs-font-letter-spacing": "0rem",
      "text-body-xs-font-line-height": "0.75rem"
    },
    "width": {
      "width-0": "0rem",
      "width-025": "0.0625rem",
      "width-050": "0.125rem",
      "width-100": "0.25rem",
      "width-150": "0.375rem",
      "width-200": "0.5rem",
      "width-300": "0.75rem",
      "width-400": "1rem",
      "width-500": "1.25rem",
      "width-600": "1.5rem",
      "width-700": "1.75rem",
      "width-800": "2rem",
      "width-900": "2.25rem",
      "width-1000": "2.5rem",
      "width-1200": "3rem",
      "width-1600": "4rem",
      "width-2000": "5rem",
      "width-2400": "6rem",
      "width-2800": "7rem",
      "width-3200": "8rem"
    },
    "zIndex": {
      "z-index-0": "auto",
      "z-index-1": "100",
      "z-index-2": "400",
      "z-index-3": "510",
      "z-index-4": "512",
      "z-index-5": "513",
      "z-index-6": "514",
      "z-index-7": "515",
      "z-index-8": "516",
      "z-index-9": "517",
      "z-index-10": "518",
      "z-index-11": "519",
      "z-index-12": "520"
    }
  }
};
var themeDefault = themes[themeNameDefault];
var isTokenName = createIsTokenName(themes[themeNameDefault]);

// node_modules/@shopify/polaris/build/esm/utilities/is-object.js
function isObject(value) {
  const type = typeof value;
  return value != null && (type === "object" || type === "function");
}

// node_modules/@shopify/polaris/build/esm/utilities/css.js
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
function variationName(name, value) {
  return `${name}${value.charAt(0).toUpperCase()}${value.slice(1)}`;
}
function sanitizeCustomProperties(styles49) {
  const nonNullValues = Object.entries(styles49).filter(([_, value]) => value != null);
  return nonNullValues.length ? Object.fromEntries(nonNullValues) : void 0;
}
function getResponsiveProps(componentName, componentProp, tokenSubgroup, responsiveProp) {
  if (!responsiveProp)
    return {};
  let result;
  if (!isObject(responsiveProp)) {
    result = {
      [breakpointsAliases[0]]: `var(--p-${tokenSubgroup}-${responsiveProp})`
    };
  } else {
    result = Object.fromEntries(Object.entries(responsiveProp).map(([breakpointAlias, aliasOrScale]) => [breakpointAlias, `var(--p-${tokenSubgroup}-${aliasOrScale})`]));
  }
  return Object.fromEntries(Object.entries(result).map(([breakpointAlias, value]) => [`--pc-${componentName}-${componentProp}-${breakpointAlias}`, value]));
}
function getResponsiveValue(componentName, componentProp, responsiveProp) {
  if (!responsiveProp)
    return {};
  if (!isObject(responsiveProp)) {
    return {
      [`--pc-${componentName}-${componentProp}-${breakpointsAliases[0]}`]: responsiveProp
    };
  }
  return Object.fromEntries(Object.entries(responsiveProp).map(([breakpointAlias, responsiveValue]) => [`--pc-${componentName}-${componentProp}-${breakpointAlias}`, responsiveValue]));
}

// node_modules/@shopify/polaris/build/esm/components/Text/Text.css.js
var styles = {
  "root": "Polaris-Text--root",
  "block": "Polaris-Text--block",
  "truncate": "Polaris-Text--truncate",
  "visuallyHidden": "Polaris-Text--visuallyHidden",
  "start": "Polaris-Text--start",
  "center": "Polaris-Text--center",
  "end": "Polaris-Text--end",
  "justify": "Polaris-Text--justify",
  "base": "Polaris-Text--base",
  "inherit": "Polaris-Text--inherit",
  "disabled": "Polaris-Text--disabled",
  "success": "Polaris-Text--success",
  "critical": "Polaris-Text--critical",
  "caution": "Polaris-Text--caution",
  "subdued": "Polaris-Text--subdued",
  "magic": "Polaris-Text--magic",
  "magic-subdued": "Polaris-Text__magic--subdued",
  "text-inverse": "Polaris-Text__text--inverse",
  "text-inverse-secondary": "Polaris-Text--textInverseSecondary",
  "headingXs": "Polaris-Text--headingXs",
  "headingSm": "Polaris-Text--headingSm",
  "headingMd": "Polaris-Text--headingMd",
  "headingLg": "Polaris-Text--headingLg",
  "headingXl": "Polaris-Text--headingXl",
  "heading2xl": "Polaris-Text--heading2xl",
  "heading3xl": "Polaris-Text--heading3xl",
  "bodyXs": "Polaris-Text--bodyXs",
  "bodySm": "Polaris-Text--bodySm",
  "bodyMd": "Polaris-Text--bodyMd",
  "bodyLg": "Polaris-Text--bodyLg",
  "regular": "Polaris-Text--regular",
  "medium": "Polaris-Text--medium",
  "semibold": "Polaris-Text--semibold",
  "bold": "Polaris-Text--bold",
  "break": "Polaris-Text--break",
  "numeric": "Polaris-Text--numeric",
  "line-through": "Polaris-Text__line--through"
};

// node_modules/@shopify/polaris/build/esm/components/Text/Text.js
var deprecatedVariants = {
  heading3xl: "heading2xl"
};
var Text = ({
  alignment,
  as,
  breakWord,
  children,
  tone,
  fontWeight,
  id,
  numeric = false,
  truncate = false,
  variant,
  visuallyHidden = false,
  textDecorationLine
}) => {
  if (variant && Object.prototype.hasOwnProperty.call(deprecatedVariants, variant)) {
    console.warn(`Deprecation: <Text variant="${variant}" />. The value "${variant}" will be removed in a future major version of Polaris. Use "${deprecatedVariants[variant]}" instead.`);
  }
  const Component4 = as || (visuallyHidden ? "span" : "p");
  const className = classNames(styles.root, variant && styles[variant], fontWeight && styles[fontWeight], (alignment || truncate) && styles.block, alignment && styles[alignment], breakWord && styles.break, tone && styles[tone], numeric && styles.numeric, truncate && styles.truncate, visuallyHidden && styles.visuallyHidden, textDecorationLine && styles[textDecorationLine]);
  return /* @__PURE__ */ import_react.default.createElement(Component4, Object.assign({
    className
  }, id && {
    id
  }), children);
};

// node_modules/@shopify/polaris/build/esm/components/Button/Button.js
var import_react32 = __toESM(require_react());

// node_modules/@shopify/polaris-icons/dist/icons/AlertCircleIcon.svg.mjs
var import_react2 = __toESM(require_react(), 1);
var SvgAlertCircleIcon = function SvgAlertCircleIcon2(props) {
  return /* @__PURE__ */ import_react2.default.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /* @__PURE__ */ import_react2.default.createElement("path", {
    d: "M10 6a.75.75 0 0 1 .75.75v3.5a.75.75 0 0 1-1.5 0v-3.5a.75.75 0 0 1 .75-.75Z"
  }), /* @__PURE__ */ import_react2.default.createElement("path", {
    d: "M11 13a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"
  }), /* @__PURE__ */ import_react2.default.createElement("path", {
    fillRule: "evenodd",
    d: "M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Zm-1.5 0a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0Z"
  }));
};
SvgAlertCircleIcon.displayName = "AlertCircleIcon";

// node_modules/@shopify/polaris-icons/dist/icons/AlertDiamondIcon.svg.mjs
var import_react3 = __toESM(require_react(), 1);
var SvgAlertDiamondIcon = function SvgAlertDiamondIcon2(props) {
  return /* @__PURE__ */ import_react3.default.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /* @__PURE__ */ import_react3.default.createElement("path", {
    d: "M10 6a.75.75 0 0 1 .75.75v3.5a.75.75 0 0 1-1.5 0v-3.5a.75.75 0 0 1 .75-.75Z"
  }), /* @__PURE__ */ import_react3.default.createElement("path", {
    d: "M11 13a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"
  }), /* @__PURE__ */ import_react3.default.createElement("path", {
    fillRule: "evenodd",
    d: "M11.237 3.177a1.75 1.75 0 0 0-2.474 0l-5.586 5.585a1.75 1.75 0 0 0 0 2.475l5.586 5.586a1.75 1.75 0 0 0 2.474 0l5.586-5.586a1.75 1.75 0 0 0 0-2.475l-5.586-5.585Zm-1.414 1.06a.25.25 0 0 1 .354 0l5.586 5.586a.25.25 0 0 1 0 .354l-5.586 5.585a.25.25 0 0 1-.354 0l-5.586-5.585a.25.25 0 0 1 0-.354l5.586-5.586Z"
  }));
};
SvgAlertDiamondIcon.displayName = "AlertDiamondIcon";

// node_modules/@shopify/polaris-icons/dist/icons/AlertTriangleIcon.svg.mjs
var import_react4 = __toESM(require_react(), 1);
var SvgAlertTriangleIcon = function SvgAlertTriangleIcon2(props) {
  return /* @__PURE__ */ import_react4.default.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /* @__PURE__ */ import_react4.default.createElement("path", {
    d: "M10 6.75a.75.75 0 0 1 .75.75v3.5a.75.75 0 1 1-1.5 0v-3.5a.75.75 0 0 1 .75-.75Z"
  }), /* @__PURE__ */ import_react4.default.createElement("path", {
    d: "M11 13.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"
  }), /* @__PURE__ */ import_react4.default.createElement("path", {
    fillRule: "evenodd",
    d: "M10 3.5c-1.045 0-1.784.702-2.152 1.447a449.26 449.26 0 0 1-2.005 3.847l-.028.052a403.426 403.426 0 0 0-2.008 3.856c-.372.752-.478 1.75.093 2.614.57.863 1.542 1.184 2.464 1.184h7.272c.922 0 1.895-.32 2.464-1.184.57-.864.465-1.862.093-2.614-.21-.424-1.113-2.147-2.004-3.847l-.032-.061a429.497 429.497 0 0 1-2.005-3.847c-.368-.745-1.107-1.447-2.152-1.447Zm-.808 2.112c.404-.816 1.212-.816 1.616 0 .202.409 1.112 2.145 2.022 3.88a418.904 418.904 0 0 1 2.018 3.875c.404.817 0 1.633-1.212 1.633h-7.272c-1.212 0-1.617-.816-1.212-1.633.202-.408 1.113-2.147 2.023-3.883a421.932 421.932 0 0 0 2.017-3.872Z"
  }));
};
SvgAlertTriangleIcon.displayName = "AlertTriangleIcon";

// node_modules/@shopify/polaris-icons/dist/icons/ArrowLeftIcon.svg.mjs
var import_react5 = __toESM(require_react(), 1);
var SvgArrowLeftIcon = function SvgArrowLeftIcon2(props) {
  return /* @__PURE__ */ import_react5.default.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /* @__PURE__ */ import_react5.default.createElement("path", {
    fillRule: "evenodd",
    d: "M16.5 10a.75.75 0 0 1-.75.75h-9.69l2.72 2.72a.75.75 0 0 1-1.06 1.06l-4-4a.75.75 0 0 1 0-1.06l4-4a.75.75 0 1 1 1.06 1.06l-2.72 2.72h9.69a.75.75 0 0 1 .75.75Z"
  }));
};
SvgArrowLeftIcon.displayName = "ArrowLeftIcon";

// node_modules/@shopify/polaris-icons/dist/icons/CheckIcon.svg.mjs
var import_react6 = __toESM(require_react(), 1);
var SvgCheckIcon = function SvgCheckIcon2(props) {
  return /* @__PURE__ */ import_react6.default.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /* @__PURE__ */ import_react6.default.createElement("path", {
    fillRule: "evenodd",
    d: "M15.78 5.97a.75.75 0 0 1 0 1.06l-6.5 6.5a.75.75 0 0 1-1.06 0l-3.25-3.25a.75.75 0 1 1 1.06-1.06l2.72 2.72 5.97-5.97a.75.75 0 0 1 1.06 0Z"
  }));
};
SvgCheckIcon.displayName = "CheckIcon";

// node_modules/@shopify/polaris-icons/dist/icons/CheckboxIcon.svg.mjs
var import_react7 = __toESM(require_react(), 1);
var SvgCheckboxIcon = function SvgCheckboxIcon2(props) {
  return /* @__PURE__ */ import_react7.default.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /* @__PURE__ */ import_react7.default.createElement("path", {
    d: "M13.28 8.78a.75.75 0 0 0-1.06-1.06l-2.97 2.97-1.22-1.22a.75.75 0 0 0-1.06 1.06l1.75 1.75a.75.75 0 0 0 1.06 0l3.5-3.5Z"
  }), /* @__PURE__ */ import_react7.default.createElement("path", {
    fillRule: "evenodd",
    d: "M6.25 3.5a2.75 2.75 0 0 0-2.75 2.75v7.5a2.75 2.75 0 0 0 2.75 2.75h7.5a2.75 2.75 0 0 0 2.75-2.75v-7.5a2.75 2.75 0 0 0-2.75-2.75h-7.5Zm-1.25 2.75c0-.69.56-1.25 1.25-1.25h7.5c.69 0 1.25.56 1.25 1.25v7.5c0 .69-.56 1.25-1.25 1.25h-7.5c-.69 0-1.25-.56-1.25-1.25v-7.5Z"
  }));
};
SvgCheckboxIcon.displayName = "CheckboxIcon";

// node_modules/@shopify/polaris-icons/dist/icons/ChevronDownIcon.svg.mjs
var import_react8 = __toESM(require_react(), 1);
var SvgChevronDownIcon = function SvgChevronDownIcon2(props) {
  return /* @__PURE__ */ import_react8.default.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /* @__PURE__ */ import_react8.default.createElement("path", {
    fillRule: "evenodd",
    d: "M5.72 8.47a.75.75 0 0 1 1.06 0l3.47 3.47 3.47-3.47a.75.75 0 1 1 1.06 1.06l-4 4a.75.75 0 0 1-1.06 0l-4-4a.75.75 0 0 1 0-1.06Z"
  }));
};
SvgChevronDownIcon.displayName = "ChevronDownIcon";

// node_modules/@shopify/polaris-icons/dist/icons/ChevronLeftIcon.svg.mjs
var import_react9 = __toESM(require_react(), 1);
var SvgChevronLeftIcon = function SvgChevronLeftIcon2(props) {
  return /* @__PURE__ */ import_react9.default.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /* @__PURE__ */ import_react9.default.createElement("path", {
    fillRule: "evenodd",
    d: "M11.764 5.204a.75.75 0 0 1 .032 1.06l-3.516 3.736 3.516 3.736a.75.75 0 1 1-1.092 1.028l-4-4.25a.75.75 0 0 1 0-1.028l4-4.25a.75.75 0 0 1 1.06-.032Z"
  }));
};
SvgChevronLeftIcon.displayName = "ChevronLeftIcon";

// node_modules/@shopify/polaris-icons/dist/icons/ChevronRightIcon.svg.mjs
var import_react10 = __toESM(require_react(), 1);
var SvgChevronRightIcon = function SvgChevronRightIcon2(props) {
  return /* @__PURE__ */ import_react10.default.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /* @__PURE__ */ import_react10.default.createElement("path", {
    fillRule: "evenodd",
    d: "M7.72 14.53a.75.75 0 0 1 0-1.06l3.47-3.47-3.47-3.47a.75.75 0 0 1 1.06-1.06l4 4a.75.75 0 0 1 0 1.06l-4 4a.75.75 0 0 1-1.06 0Z"
  }));
};
SvgChevronRightIcon.displayName = "ChevronRightIcon";

// node_modules/@shopify/polaris-icons/dist/icons/ChevronUpIcon.svg.mjs
var import_react11 = __toESM(require_react(), 1);
var SvgChevronUpIcon = function SvgChevronUpIcon2(props) {
  return /* @__PURE__ */ import_react11.default.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /* @__PURE__ */ import_react11.default.createElement("path", {
    fillRule: "evenodd",
    d: "M14.53 12.28a.75.75 0 0 1-1.06 0l-3.47-3.47-3.47 3.47a.75.75 0 0 1-1.06-1.06l4-4a.75.75 0 0 1 1.06 0l4 4a.75.75 0 0 1 0 1.06Z"
  }));
};
SvgChevronUpIcon.displayName = "ChevronUpIcon";

// node_modules/@shopify/polaris-icons/dist/icons/InfoIcon.svg.mjs
var import_react12 = __toESM(require_react(), 1);
var SvgInfoIcon = function SvgInfoIcon2(props) {
  return /* @__PURE__ */ import_react12.default.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /* @__PURE__ */ import_react12.default.createElement("path", {
    d: "M10 14a.75.75 0 0 1-.75-.75v-3.5a.75.75 0 0 1 1.5 0v3.5a.75.75 0 0 1-.75.75Z"
  }), /* @__PURE__ */ import_react12.default.createElement("path", {
    d: "M9 7a1 1 0 1 1 2 0 1 1 0 0 1-2 0Z"
  }), /* @__PURE__ */ import_react12.default.createElement("path", {
    fillRule: "evenodd",
    d: "M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Zm-1.5 0a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0Z"
  }));
};
SvgInfoIcon.displayName = "InfoIcon";

// node_modules/@shopify/polaris-icons/dist/icons/MenuHorizontalIcon.svg.mjs
var import_react13 = __toESM(require_react(), 1);
var SvgMenuHorizontalIcon = function SvgMenuHorizontalIcon2(props) {
  return /* @__PURE__ */ import_react13.default.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /* @__PURE__ */ import_react13.default.createElement("path", {
    d: "M6 10a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"
  }), /* @__PURE__ */ import_react13.default.createElement("path", {
    d: "M11.5 10a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"
  }), /* @__PURE__ */ import_react13.default.createElement("path", {
    d: "M17 10a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"
  }));
};
SvgMenuHorizontalIcon.displayName = "MenuHorizontalIcon";

// node_modules/@shopify/polaris-icons/dist/icons/MinusIcon.svg.mjs
var import_react14 = __toESM(require_react(), 1);
var SvgMinusIcon = function SvgMinusIcon2(props) {
  return /* @__PURE__ */ import_react14.default.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /* @__PURE__ */ import_react14.default.createElement("path", {
    fillRule: "evenodd",
    d: "M5 10c0-.414.336-.75.75-.75h8.5c.414 0 .75.336.75.75s-.336.75-.75.75h-8.5c-.414 0-.75-.336-.75-.75Z"
  }));
};
SvgMinusIcon.displayName = "MinusIcon";

// node_modules/@shopify/polaris-icons/dist/icons/SearchIcon.svg.mjs
var import_react15 = __toESM(require_react(), 1);
var SvgSearchIcon = function SvgSearchIcon2(props) {
  return /* @__PURE__ */ import_react15.default.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /* @__PURE__ */ import_react15.default.createElement("path", {
    fillRule: "evenodd",
    d: "M12.323 13.383a5.5 5.5 0 1 1 1.06-1.06l2.897 2.897a.75.75 0 1 1-1.06 1.06l-2.897-2.897Zm.677-4.383a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z"
  }));
};
SvgSearchIcon.displayName = "SearchIcon";

// node_modules/@shopify/polaris-icons/dist/icons/SelectIcon.svg.mjs
var import_react16 = __toESM(require_react(), 1);
var SvgSelectIcon = function SvgSelectIcon2(props) {
  return /* @__PURE__ */ import_react16.default.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /* @__PURE__ */ import_react16.default.createElement("path", {
    d: "M10.884 4.323a1.25 1.25 0 0 0-1.768 0l-2.646 2.647a.75.75 0 0 0 1.06 1.06l2.47-2.47 2.47 2.47a.75.75 0 1 0 1.06-1.06l-2.646-2.647Z"
  }), /* @__PURE__ */ import_react16.default.createElement("path", {
    d: "m13.53 13.03-2.646 2.647a1.25 1.25 0 0 1-1.768 0l-2.646-2.647a.75.75 0 0 1 1.06-1.06l2.47 2.47 2.47-2.47a.75.75 0 0 1 1.06 1.06Z"
  }));
};
SvgSelectIcon.displayName = "SelectIcon";

// node_modules/@shopify/polaris-icons/dist/icons/XCircleIcon.svg.mjs
var import_react17 = __toESM(require_react(), 1);
var SvgXCircleIcon = function SvgXCircleIcon2(props) {
  return /* @__PURE__ */ import_react17.default.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /* @__PURE__ */ import_react17.default.createElement("path", {
    d: "M13.03 6.97a.75.75 0 0 1 0 1.06l-1.97 1.97 1.97 1.97a.75.75 0 1 1-1.06 1.06l-1.97-1.97-1.97 1.97a.75.75 0 0 1-1.06-1.06l1.97-1.97-1.97-1.97a.75.75 0 0 1 1.06-1.06l1.97 1.97 1.97-1.97a.75.75 0 0 1 1.06 0Z"
  }), /* @__PURE__ */ import_react17.default.createElement("path", {
    fillRule: "evenodd",
    d: "M10 17a7 7 0 1 0 0-14 7 7 0 0 0 0 14Zm0-1.5a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11Z"
  }));
};
SvgXCircleIcon.displayName = "XCircleIcon";

// node_modules/@shopify/polaris-icons/dist/icons/XIcon.svg.mjs
var import_react18 = __toESM(require_react(), 1);
var SvgXIcon = function SvgXIcon2(props) {
  return /* @__PURE__ */ import_react18.default.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /* @__PURE__ */ import_react18.default.createElement("path", {
    d: "M13.97 15.03a.75.75 0 1 0 1.06-1.06l-3.97-3.97 3.97-3.97a.75.75 0 0 0-1.06-1.06l-3.97 3.97-3.97-3.97a.75.75 0 0 0-1.06 1.06l3.97 3.97-3.97 3.97a.75.75 0 1 0 1.06 1.06l3.97-3.97 3.97 3.97Z"
  }));
};
SvgXIcon.displayName = "XIcon";

// node_modules/@shopify/polaris-icons/dist/index.mjs
var import_react19 = __toESM(require_react(), 1);

// node_modules/@shopify/polaris/build/esm/utilities/breakpoints.js
var import_react21 = __toESM(require_react());

// node_modules/@shopify/polaris/build/esm/utilities/target.js
var isServer = typeof window === "undefined" || typeof document === "undefined";

// node_modules/@shopify/polaris/build/esm/utilities/use-isomorphic-layout-effect.js
var import_react20 = __toESM(require_react());
var useIsomorphicLayoutEffect = isServer ? import_react20.useEffect : import_react20.useLayoutEffect;

// node_modules/@shopify/polaris/build/esm/utilities/breakpoints.js
var Breakpoints = {
  // TODO: Update to smDown
  navigationBarCollapsed: "767.95px",
  // TODO: Update to lgDown
  stackedContent: "1039.95px"
};
var noWindowMatches = {
  media: "",
  addListener: noop,
  removeListener: noop,
  matches: false,
  onchange: noop,
  addEventListener: noop,
  removeEventListener: noop,
  dispatchEvent: (_) => true
};
function noop() {
}
function navigationBarCollapsed() {
  return isServer ? noWindowMatches : window.matchMedia(`(max-width: ${Breakpoints.navigationBarCollapsed})`);
}
function stackedContent() {
  return isServer ? noWindowMatches : window.matchMedia(`(max-width: ${Breakpoints.stackedContent})`);
}
var hookCallbacks = /* @__PURE__ */ new Set();
var breakpointsQueryEntries = getBreakpointsQueryEntries(themeDefault.breakpoints);
if (!isServer) {
  breakpointsQueryEntries.forEach(([breakpointAlias, query]) => {
    const eventListener = (event) => {
      for (const hookCallback of hookCallbacks) {
        hookCallback(breakpointAlias, event.matches);
      }
    };
    const mql = window.matchMedia(query);
    if (mql.addListener) {
      mql.addListener(eventListener);
    } else {
      mql.addEventListener("change", eventListener);
    }
  });
}
function getDefaultMatches(defaults) {
  return Object.fromEntries(breakpointsQueryEntries.map(([directionAlias]) => [directionAlias, typeof defaults === "boolean" ? defaults : defaults?.[directionAlias] ?? false]));
}
function getLiveMatches() {
  return Object.fromEntries(breakpointsQueryEntries.map(([directionAlias, query]) => [directionAlias, window.matchMedia(query).matches]));
}
function useBreakpoints(options) {
  const [breakpoints, setBreakpoints] = (0, import_react21.useState)(getDefaultMatches(options?.defaults));
  useIsomorphicLayoutEffect(() => {
    setBreakpoints(getLiveMatches());
    const callback = (breakpointAlias, matches2) => {
      setBreakpoints((prevBreakpoints) => ({
        ...prevBreakpoints,
        [breakpointAlias]: matches2
      }));
    };
    hookCallbacks.add(callback);
    return () => {
      hookCallbacks.delete(callback);
    };
  }, []);
  return breakpoints;
}
function getBreakpointsQueryEntries(breakpoints) {
  const mediaConditionEntries = Object.entries(getMediaConditions(breakpoints));
  return mediaConditionEntries.map(([breakpointsToken, mediaConditions]) => Object.entries(mediaConditions).map(([direction, mediaCondition]) => {
    const breakpointsAlias = breakpointsToken.split("-")[1];
    const directionAlias = `${breakpointsAlias}${capitalize(direction)}`;
    return [directionAlias, mediaCondition];
  })).flat();
}
function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

// node_modules/@shopify/polaris/build/esm/utilities/is-element-in-viewport.js
function isElementInViewport(element) {
  const {
    top,
    left,
    bottom,
    right
  } = element.getBoundingClientRect();
  const window2 = element.ownerDocument.defaultView || globalThis.window;
  return top >= 0 && right <= window2.innerWidth && bottom <= window2.innerHeight && left >= 0;
}

// node_modules/@shopify/polaris/build/esm/utilities/focus.js
var FOCUSABLE_SELECTOR = 'a,frame,iframe,input:not([type=hidden]):not(:disabled),select:not(:disabled),textarea:not(:disabled),button:not([aria-disabled="true"]):not([tabindex="-1"]):not(:disabled),*[tabindex]';
var KEYBOARD_FOCUSABLE_SELECTORS = 'a,frame,iframe,input:not([type=hidden]):not(:disabled),select:not(:disabled),textarea:not(:disabled),button:not([aria-disabled="true"]):not([tabindex="-1"]):not(:disabled),*[tabindex]:not([tabindex="-1"])';
var MENUITEM_FOCUSABLE_SELECTORS = 'a[role="menuitem"],frame[role="menuitem"],iframe[role="menuitem"],input[role="menuitem"]:not([type=hidden]):not(:disabled),select[role="menuitem"]:not(:disabled),textarea[role="menuitem"]:not(:disabled),button[role="menuitem"]:not(:disabled),*[tabindex]:not([tabindex="-1"])';
var handleMouseUpByBlurring = ({
  currentTarget
}) => currentTarget.blur();
function nextFocusableNode(node, filter) {
  const allFocusableElements = [...document.querySelectorAll(FOCUSABLE_SELECTOR)];
  const sliceLocation = allFocusableElements.indexOf(node) + 1;
  const focusableElementsAfterNode = allFocusableElements.slice(sliceLocation);
  for (const focusableElement of focusableElementsAfterNode) {
    if (isElementInViewport(focusableElement) && (!filter || filter && filter(focusableElement))) {
      return focusableElement;
    }
  }
  return null;
}
function findFirstFocusableNode(element, onlyDescendants = true) {
  if (!onlyDescendants && matches(element, FOCUSABLE_SELECTOR)) {
    return element;
  }
  return element.querySelector(FOCUSABLE_SELECTOR);
}
function findFirstFocusableNodeIncludingDisabled(element) {
  const focusableSelector = `a,button,frame,iframe,input:not([type=hidden]),select,textarea,*[tabindex]`;
  if (matches(element, focusableSelector)) {
    return element;
  }
  return element.querySelector(focusableSelector);
}
function focusNextFocusableNode(node, filter) {
  const nextFocusable = nextFocusableNode(node, filter);
  if (nextFocusable && nextFocusable instanceof HTMLElement) {
    nextFocusable.focus();
    return true;
  }
  return false;
}
function findFirstKeyboardFocusableNode(element, onlyDescendants = true) {
  if (!onlyDescendants && matches(element, KEYBOARD_FOCUSABLE_SELECTORS)) {
    return element;
  }
  return element.querySelector(KEYBOARD_FOCUSABLE_SELECTORS);
}
function wrapFocusPreviousFocusableMenuItem(parentElement, currentFocusedElement) {
  const allFocusableChildren = getMenuFocusableDescendants(parentElement);
  const currentItemIdx = getCurrentFocusedElementIndex(allFocusableChildren, currentFocusedElement);
  if (currentItemIdx === -1) {
    allFocusableChildren[0].focus();
  } else {
    allFocusableChildren[(currentItemIdx - 1 + allFocusableChildren.length) % allFocusableChildren.length].focus();
  }
}
function wrapFocusNextFocusableMenuItem(parentElement, currentFocusedElement) {
  const allFocusableChildren = getMenuFocusableDescendants(parentElement);
  const currentItemIdx = getCurrentFocusedElementIndex(allFocusableChildren, currentFocusedElement);
  if (currentItemIdx === -1) {
    allFocusableChildren[0].focus();
  } else {
    allFocusableChildren[(currentItemIdx + 1) % allFocusableChildren.length].focus();
  }
}
function getMenuFocusableDescendants(element) {
  return element.querySelectorAll(MENUITEM_FOCUSABLE_SELECTORS);
}
function getCurrentFocusedElementIndex(allFocusableChildren, currentFocusedElement) {
  let currentItemIdx = 0;
  for (const focusableChild of allFocusableChildren) {
    if (focusableChild === currentFocusedElement) {
      break;
    }
    currentItemIdx++;
  }
  return currentItemIdx === allFocusableChildren.length ? -1 : currentItemIdx;
}
function matches(node, selector) {
  if (node.matches) {
    return node.matches(selector);
  }
  const matches2 = (node.ownerDocument || document).querySelectorAll(selector);
  let i = matches2.length;
  while (--i >= 0 && matches2.item(i) !== node)
    return i > -1;
}

// node_modules/@shopify/polaris/build/esm/components/Button/Button.css.js
var styles2 = {
  "Button": "Polaris-Button",
  "disabled": "Polaris-Button--disabled",
  "pressed": "Polaris-Button--pressed",
  "variantPrimary": "Polaris-Button--variantPrimary",
  "variantSecondary": "Polaris-Button--variantSecondary",
  "variantTertiary": "Polaris-Button--variantTertiary",
  "variantPlain": "Polaris-Button--variantPlain",
  "removeUnderline": "Polaris-Button--removeUnderline",
  "variantMonochromePlain": "Polaris-Button--variantMonochromePlain",
  "toneSuccess": "Polaris-Button--toneSuccess",
  "toneCritical": "Polaris-Button--toneCritical",
  "sizeMicro": "Polaris-Button--sizeMicro",
  "sizeSlim": "Polaris-Button--sizeSlim",
  "sizeMedium": "Polaris-Button--sizeMedium",
  "sizeLarge": "Polaris-Button--sizeLarge",
  "textAlignCenter": "Polaris-Button--textAlignCenter",
  "textAlignStart": "Polaris-Button--textAlignStart",
  "textAlignLeft": "Polaris-Button--textAlignLeft",
  "textAlignEnd": "Polaris-Button--textAlignEnd",
  "textAlignRight": "Polaris-Button--textAlignRight",
  "fullWidth": "Polaris-Button--fullWidth",
  "iconOnly": "Polaris-Button--iconOnly",
  "iconWithText": "Polaris-Button--iconWithText",
  "disclosure": "Polaris-Button--disclosure",
  "loading": "Polaris-Button--loading",
  "pressable": "Polaris-Button--pressable",
  "hidden": "Polaris-Button--hidden",
  "Icon": "Polaris-Button__Icon",
  "Spinner": "Polaris-Button__Spinner"
};

// node_modules/@shopify/polaris/build/esm/components/Icon/Icon.js
var import_react22 = __toESM(require_react());

// node_modules/@shopify/polaris/build/esm/components/Icon/Icon.css.js
var styles3 = {
  "Icon": "Polaris-Icon",
  "toneInherit": "Polaris-Icon--toneInherit",
  "toneBase": "Polaris-Icon--toneBase",
  "toneSubdued": "Polaris-Icon--toneSubdued",
  "toneCaution": "Polaris-Icon--toneCaution",
  "toneWarning": "Polaris-Icon--toneWarning",
  "toneCritical": "Polaris-Icon--toneCritical",
  "toneInteractive": "Polaris-Icon--toneInteractive",
  "toneInfo": "Polaris-Icon--toneInfo",
  "toneSuccess": "Polaris-Icon--toneSuccess",
  "tonePrimary": "Polaris-Icon--tonePrimary",
  "toneEmphasis": "Polaris-Icon--toneEmphasis",
  "toneMagic": "Polaris-Icon--toneMagic",
  "toneTextCaution": "Polaris-Icon--toneTextCaution",
  "toneTextWarning": "Polaris-Icon--toneTextWarning",
  "toneTextCritical": "Polaris-Icon--toneTextCritical",
  "toneTextInfo": "Polaris-Icon--toneTextInfo",
  "toneTextPrimary": "Polaris-Icon--toneTextPrimary",
  "toneTextSuccess": "Polaris-Icon--toneTextSuccess",
  "toneTextMagic": "Polaris-Icon--toneTextMagic",
  "Svg": "Polaris-Icon__Svg",
  "Img": "Polaris-Icon__Img",
  "Placeholder": "Polaris-Icon__Placeholder"
};

// node_modules/@shopify/polaris/build/esm/components/Icon/Icon.js
function Icon({
  source,
  tone,
  accessibilityLabel
}) {
  let sourceType;
  if (typeof source === "function") {
    sourceType = "function";
  } else if (source === "placeholder") {
    sourceType = "placeholder";
  } else {
    sourceType = "external";
  }
  if (tone && sourceType === "external" && true) {
    console.warn("Recoloring external SVGs is not supported. Set the intended color on your SVG instead.");
  }
  const className = classNames(styles3.Icon, tone && styles3[variationName("tone", tone)]);
  const {
    mdDown
  } = useBreakpoints();
  const SourceComponent = source;
  const contentMarkup = {
    function: /* @__PURE__ */ import_react22.default.createElement(SourceComponent, Object.assign({
      className: styles3.Svg,
      focusable: "false",
      "aria-hidden": "true"
      // On Mobile we're scaling the viewBox to 18x18 to make the icons bigger
      // Also, we're setting the viewport origin to 1x1 to center the icon
      // We use this syntax so we don't override the existing viewBox value if we don't need to.
    }, mdDown ? {
      viewBox: "1 1 18 18"
    } : {})),
    placeholder: /* @__PURE__ */ import_react22.default.createElement("div", {
      className: styles3.Placeholder
    }),
    external: /* @__PURE__ */ import_react22.default.createElement("img", {
      className: styles3.Img,
      src: `data:image/svg+xml;utf8,${source}`,
      alt: "",
      "aria-hidden": "true"
    })
  };
  return /* @__PURE__ */ import_react22.default.createElement("span", {
    className
  }, accessibilityLabel && /* @__PURE__ */ import_react22.default.createElement(Text, {
    as: "span",
    visuallyHidden: true
  }, accessibilityLabel), contentMarkup[sourceType]);
}

// node_modules/@shopify/polaris/build/esm/components/Spinner/Spinner.js
var import_react24 = __toESM(require_react());

// node_modules/@shopify/polaris/build/esm/utilities/use-is-after-initial-mount.js
var import_react23 = __toESM(require_react());
function useIsAfterInitialMount() {
  const [isAfterInitialMount, setIsAfterInitialMount] = (0, import_react23.useState)(false);
  (0, import_react23.useEffect)(() => {
    setIsAfterInitialMount(true);
  }, []);
  return isAfterInitialMount;
}

// node_modules/@shopify/polaris/build/esm/components/Spinner/Spinner.css.js
var styles4 = {
  "Spinner": "Polaris-Spinner",
  "sizeSmall": "Polaris-Spinner--sizeSmall",
  "sizeLarge": "Polaris-Spinner--sizeLarge"
};

// node_modules/@shopify/polaris/build/esm/components/Spinner/Spinner.js
function Spinner({
  size = "large",
  accessibilityLabel,
  hasFocusableParent
}) {
  const isAfterInitialMount = useIsAfterInitialMount();
  const className = classNames(styles4.Spinner, size && styles4[variationName("size", size)]);
  const spinnerSVGMarkup = size === "large" ? /* @__PURE__ */ import_react24.default.createElement("svg", {
    viewBox: "0 0 44 44",
    xmlns: "http://www.w3.org/2000/svg"
  }, /* @__PURE__ */ import_react24.default.createElement("path", {
    d: "M15.542 1.487A21.507 21.507 0 00.5 22c0 11.874 9.626 21.5 21.5 21.5 9.847 0 18.364-6.675 20.809-16.072a1.5 1.5 0 00-2.904-.756C37.803 34.755 30.473 40.5 22 40.5 11.783 40.5 3.5 32.217 3.5 22c0-8.137 5.3-15.247 12.942-17.65a1.5 1.5 0 10-.9-2.863z"
  })) : /* @__PURE__ */ import_react24.default.createElement("svg", {
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg"
  }, /* @__PURE__ */ import_react24.default.createElement("path", {
    d: "M7.229 1.173a9.25 9.25 0 1011.655 11.412 1.25 1.25 0 10-2.4-.698 6.75 6.75 0 11-8.506-8.329 1.25 1.25 0 10-.75-2.385z"
  }));
  const spanAttributes = {
    ...!hasFocusableParent && {
      role: "status"
    }
  };
  const accessibilityLabelMarkup = (isAfterInitialMount || !hasFocusableParent) && /* @__PURE__ */ import_react24.default.createElement(Text, {
    as: "span",
    visuallyHidden: true
  }, accessibilityLabel);
  return /* @__PURE__ */ import_react24.default.createElement(import_react24.default.Fragment, null, /* @__PURE__ */ import_react24.default.createElement("span", {
    className
  }, spinnerSVGMarkup), /* @__PURE__ */ import_react24.default.createElement("span", spanAttributes, accessibilityLabelMarkup));
}

// node_modules/@shopify/polaris/build/esm/components/UnstyledButton/UnstyledButton.js
var import_react29 = __toESM(require_react());

// node_modules/@shopify/polaris/build/esm/utilities/use-disable-interaction.js
var import_react25 = __toESM(require_react());
function useDisableClick(disabled, handleClick) {
  const handleClickWrapper = (0, import_react25.useCallback)((event) => {
    if (disabled) {
      event.preventDefault();
      event.stopPropagation();
    }
  }, [disabled]);
  if (!disabled) {
    return handleClick;
  }
  return handleClickWrapper;
}

// node_modules/@shopify/polaris/build/esm/components/UnstyledLink/UnstyledLink.js
var import_react28 = __toESM(require_react());

// node_modules/@shopify/polaris/build/esm/components/shared.js
var scrollable = {
  props: {
    "data-polaris-scrollable": true
  },
  selector: "[data-polaris-scrollable]"
};
var overlay = {
  props: {
    "data-polaris-overlay": true
  },
  selector: "[data-polaris-overlay]"
};
var layer = {
  props: {
    "data-polaris-layer": true
  },
  selector: "[data-polaris-layer]"
};
var unstyled = {
  props: {
    "data-polaris-unstyled": true
  },
  selector: "[data-polaris-unstyled]"
};
var dataPolarisTopBar = {
  props: {
    "data-polaris-top-bar": true
  },
  selector: "[data-polaris-top-bar]"
};
var portal = {
  props: ["data-portal-id"],
  selector: "[data-portal-id]"
};

// node_modules/@shopify/polaris/build/esm/utilities/link/hooks.js
var import_react27 = __toESM(require_react());

// node_modules/@shopify/polaris/build/esm/utilities/link/context.js
var import_react26 = __toESM(require_react());
var LinkContext = /* @__PURE__ */ (0, import_react26.createContext)(void 0);

// node_modules/@shopify/polaris/build/esm/utilities/link/hooks.js
function useLink() {
  return (0, import_react27.useContext)(LinkContext);
}

// node_modules/@shopify/polaris/build/esm/components/UnstyledLink/UnstyledLink.js
var UnstyledLink = /* @__PURE__ */ (0, import_react28.memo)(/* @__PURE__ */ (0, import_react28.forwardRef)(function UnstyledLink2(props, _ref) {
  const LinkComponent = useLink();
  if (LinkComponent) {
    return /* @__PURE__ */ import_react28.default.createElement(LinkComponent, Object.assign({}, unstyled.props, props, {
      ref: _ref
    }));
  }
  const {
    external,
    url,
    target: targetProp,
    ...rest
  } = props;
  let target;
  if (external) {
    target = "_blank";
  } else {
    target = targetProp ?? void 0;
  }
  const rel = target === "_blank" ? "noopener noreferrer" : void 0;
  return /* @__PURE__ */ import_react28.default.createElement("a", Object.assign({
    target
  }, rest, {
    href: url,
    rel
  }, unstyled.props, {
    ref: _ref
  }));
}));

// node_modules/@shopify/polaris/build/esm/components/UnstyledButton/UnstyledButton.js
function UnstyledButton({
  id,
  children,
  className,
  url,
  external,
  target,
  download,
  submit,
  disabled,
  loading,
  pressed,
  accessibilityLabel,
  role,
  ariaControls,
  ariaExpanded,
  ariaDescribedBy,
  ariaChecked,
  onClick,
  onFocus,
  onBlur,
  onKeyDown,
  onKeyPress,
  onKeyUp,
  onMouseEnter,
  onTouchStart,
  ...rest
}) {
  let buttonMarkup;
  const commonProps = {
    id,
    className,
    "aria-label": accessibilityLabel
  };
  const interactiveProps = {
    ...commonProps,
    role,
    onClick,
    onFocus,
    onBlur,
    onMouseUp: handleMouseUpByBlurring,
    onMouseEnter,
    onTouchStart
  };
  const handleClick = useDisableClick(disabled, onClick);
  if (url) {
    buttonMarkup = disabled ? (
      // Render an `<a>` so toggling disabled/enabled state changes only the
      // `href` attribute instead of replacing the whole element.
      /* @__PURE__ */ import_react29.default.createElement("a", commonProps, children)
    ) : /* @__PURE__ */ import_react29.default.createElement(UnstyledLink, Object.assign({}, interactiveProps, {
      url,
      external,
      target,
      download
    }, rest), children);
  } else {
    buttonMarkup = /* @__PURE__ */ import_react29.default.createElement("button", Object.assign({}, interactiveProps, {
      "aria-disabled": disabled,
      type: submit ? "submit" : "button",
      "aria-busy": loading ? true : void 0,
      "aria-controls": ariaControls,
      "aria-expanded": ariaExpanded,
      "aria-describedby": ariaDescribedBy,
      "aria-checked": ariaChecked,
      "aria-pressed": pressed,
      onKeyDown,
      onKeyUp,
      onKeyPress,
      onClick: handleClick,
      tabIndex: disabled ? -1 : void 0
    }, rest), children);
  }
  return buttonMarkup;
}

// node_modules/@shopify/polaris/build/esm/utilities/i18n/hooks.js
var import_react31 = __toESM(require_react());

// node_modules/@shopify/polaris/build/esm/utilities/errors.js
var MissingAppProviderError = class extends Error {
  constructor(message = "") {
    super(`${message ? `${message} ` : message}Your application must be wrapped in an <AppProvider> component. See https://polaris.shopify.com/components/app-provider for implementation instructions.`);
    this.name = "MissingAppProviderError";
  }
};

// node_modules/@shopify/polaris/build/esm/utilities/i18n/context.js
var import_react30 = __toESM(require_react());
var I18nContext = /* @__PURE__ */ (0, import_react30.createContext)(void 0);

// node_modules/@shopify/polaris/build/esm/utilities/i18n/hooks.js
function useI18n() {
  const i18n = (0, import_react31.useContext)(I18nContext);
  if (!i18n) {
    throw new MissingAppProviderError("No i18n was provided.");
  }
  return i18n;
}

// node_modules/@shopify/polaris/build/esm/components/Button/Button.js
function Button({
  id,
  children,
  url,
  disabled,
  external,
  download,
  target,
  submit,
  loading,
  pressed,
  accessibilityLabel,
  role,
  ariaControls,
  ariaExpanded,
  ariaDescribedBy,
  ariaChecked,
  onClick,
  onFocus,
  onBlur,
  onKeyDown,
  onKeyPress,
  onKeyUp,
  onMouseEnter,
  onTouchStart,
  onPointerDown,
  icon,
  disclosure,
  removeUnderline,
  size = "medium",
  textAlign = "center",
  fullWidth,
  dataPrimaryLink,
  tone,
  variant = "secondary"
}) {
  const i18n = useI18n();
  const isDisabled = disabled || loading;
  const {
    mdUp
  } = useBreakpoints();
  const className = classNames(styles2.Button, styles2.pressable, styles2[variationName("variant", variant)], styles2[variationName("size", size)], styles2[variationName("textAlign", textAlign)], fullWidth && styles2.fullWidth, disclosure && styles2.disclosure, icon && children && styles2.iconWithText, icon && children == null && styles2.iconOnly, isDisabled && styles2.disabled, loading && styles2.loading, pressed && !disabled && !url && styles2.pressed, removeUnderline && styles2.removeUnderline, tone && styles2[variationName("tone", tone)]);
  const disclosureMarkup = disclosure ? /* @__PURE__ */ import_react32.default.createElement("span", {
    className: loading ? styles2.hidden : styles2.Icon
  }, /* @__PURE__ */ import_react32.default.createElement(Icon, {
    source: loading ? "placeholder" : getDisclosureIconSource(disclosure, SvgChevronUpIcon, SvgChevronDownIcon)
  })) : null;
  const iconSource = isIconSource(icon) ? /* @__PURE__ */ import_react32.default.createElement(Icon, {
    source: loading ? "placeholder" : icon
  }) : icon;
  const iconMarkup = iconSource ? /* @__PURE__ */ import_react32.default.createElement("span", {
    className: loading ? styles2.hidden : styles2.Icon
  }, iconSource) : null;
  const hasPlainText = ["plain", "monochromePlain"].includes(variant);
  let textFontWeight = "medium";
  if (hasPlainText) {
    textFontWeight = "regular";
  } else if (variant === "primary") {
    textFontWeight = mdUp ? "medium" : "semibold";
  }
  let textVariant = "bodySm";
  if (size === "large" || hasPlainText && size !== "micro") {
    textVariant = "bodyMd";
  }
  const childMarkup = children ? /* @__PURE__ */ import_react32.default.createElement(Text, {
    as: "span",
    variant: textVariant,
    fontWeight: textFontWeight,
    key: disabled ? "text-disabled" : "text"
  }, children) : null;
  const spinnerSVGMarkup = loading ? /* @__PURE__ */ import_react32.default.createElement("span", {
    className: styles2.Spinner
  }, /* @__PURE__ */ import_react32.default.createElement(Spinner, {
    size: "small",
    accessibilityLabel: i18n.translate("Polaris.Button.spinnerAccessibilityLabel")
  })) : null;
  const commonProps = {
    id,
    className,
    accessibilityLabel,
    ariaDescribedBy,
    role,
    onClick,
    onFocus,
    onBlur,
    onMouseUp: handleMouseUpByBlurring,
    onMouseEnter,
    onTouchStart,
    "data-primary-link": dataPrimaryLink
  };
  const linkProps = {
    url,
    external,
    download,
    target
  };
  const actionProps = {
    submit,
    disabled: isDisabled,
    loading,
    ariaControls,
    ariaExpanded,
    ariaChecked,
    pressed,
    onKeyDown,
    onKeyUp,
    onKeyPress,
    onPointerDown
  };
  const buttonMarkup = /* @__PURE__ */ import_react32.default.createElement(UnstyledButton, Object.assign({}, commonProps, linkProps, actionProps), spinnerSVGMarkup, iconMarkup, childMarkup, disclosureMarkup);
  return buttonMarkup;
}
function isIconSource(x) {
  return typeof x === "string" || typeof x === "object" && x.body || typeof x === "function";
}
function getDisclosureIconSource(disclosure, upIcon, downIcon) {
  if (disclosure === "select") {
    return SvgSelectIcon;
  }
  return disclosure === "up" ? upIcon : downIcon;
}

// node_modules/@shopify/polaris/build/esm/components/Box/Box.js
var import_react33 = __toESM(require_react());

// node_modules/@shopify/polaris/build/esm/components/Box/Box.css.js
var styles5 = {
  "listReset": "Polaris-Box--listReset",
  "Box": "Polaris-Box",
  "visuallyHidden": "Polaris-Box--visuallyHidden",
  "printHidden": "Polaris-Box--printHidden"
};

// node_modules/@shopify/polaris/build/esm/components/Box/Box.js
var Box = /* @__PURE__ */ (0, import_react33.forwardRef)(({
  as = "div",
  background,
  borderColor,
  borderStyle,
  borderWidth,
  borderBlockStartWidth,
  borderBlockEndWidth,
  borderInlineStartWidth,
  borderInlineEndWidth,
  borderRadius,
  borderEndStartRadius,
  borderEndEndRadius,
  borderStartStartRadius,
  borderStartEndRadius,
  children,
  color,
  id,
  minHeight,
  minWidth,
  maxWidth,
  overflowX,
  overflowY,
  outlineColor,
  outlineStyle,
  outlineWidth,
  padding,
  paddingBlock,
  paddingBlockStart,
  paddingBlockEnd,
  paddingInline,
  paddingInlineStart,
  paddingInlineEnd,
  role,
  shadow,
  tabIndex,
  width,
  printHidden,
  visuallyHidden,
  position,
  insetBlockStart,
  insetBlockEnd,
  insetInlineStart,
  insetInlineEnd,
  zIndex,
  opacity,
  ...restProps
}, ref) => {
  const borderStyleValue = borderStyle ? borderStyle : borderColor || borderWidth || borderBlockStartWidth || borderBlockEndWidth || borderInlineStartWidth || borderInlineEndWidth ? "solid" : void 0;
  const outlineStyleValue = outlineStyle ? outlineStyle : outlineColor || outlineWidth ? "solid" : void 0;
  const style = {
    "--pc-box-color": color ? `var(--p-color-${color})` : void 0,
    "--pc-box-background": background ? `var(--p-color-${background})` : void 0,
    // eslint-disable-next-line no-nested-ternary
    "--pc-box-border-color": borderColor ? borderColor === "transparent" ? "transparent" : `var(--p-color-${borderColor})` : void 0,
    "--pc-box-border-style": borderStyleValue,
    "--pc-box-border-radius": borderRadius ? `var(--p-border-radius-${borderRadius})` : void 0,
    "--pc-box-border-end-start-radius": borderEndStartRadius ? `var(--p-border-radius-${borderEndStartRadius})` : void 0,
    "--pc-box-border-end-end-radius": borderEndEndRadius ? `var(--p-border-radius-${borderEndEndRadius})` : void 0,
    "--pc-box-border-start-start-radius": borderStartStartRadius ? `var(--p-border-radius-${borderStartStartRadius})` : void 0,
    "--pc-box-border-start-end-radius": borderStartEndRadius ? `var(--p-border-radius-${borderStartEndRadius})` : void 0,
    "--pc-box-border-width": borderWidth ? `var(--p-border-width-${borderWidth})` : void 0,
    "--pc-box-border-block-start-width": borderBlockStartWidth ? `var(--p-border-width-${borderBlockStartWidth})` : void 0,
    "--pc-box-border-block-end-width": borderBlockEndWidth ? `var(--p-border-width-${borderBlockEndWidth})` : void 0,
    "--pc-box-border-inline-start-width": borderInlineStartWidth ? `var(--p-border-width-${borderInlineStartWidth})` : void 0,
    "--pc-box-border-inline-end-width": borderInlineEndWidth ? `var(--p-border-width-${borderInlineEndWidth})` : void 0,
    "--pc-box-min-height": minHeight,
    "--pc-box-min-width": minWidth,
    "--pc-box-max-width": maxWidth,
    "--pc-box-outline-color": outlineColor ? `var(--p-color-${outlineColor})` : void 0,
    "--pc-box-outline-style": outlineStyleValue,
    "--pc-box-outline-width": outlineWidth ? `var(--p-border-width-${outlineWidth})` : void 0,
    "--pc-box-overflow-x": overflowX,
    "--pc-box-overflow-y": overflowY,
    ...getResponsiveProps("box", "padding-block-start", "space", paddingBlockStart || paddingBlock || padding),
    ...getResponsiveProps("box", "padding-block-end", "space", paddingBlockEnd || paddingBlock || padding),
    ...getResponsiveProps("box", "padding-inline-start", "space", paddingInlineStart || paddingInline || padding),
    ...getResponsiveProps("box", "padding-inline-end", "space", paddingInlineEnd || paddingInline || padding),
    "--pc-box-shadow": shadow ? `var(--p-shadow-${shadow})` : void 0,
    "--pc-box-width": width,
    position,
    "--pc-box-inset-block-start": insetBlockStart ? `var(--p-space-${insetBlockStart})` : void 0,
    "--pc-box-inset-block-end": insetBlockEnd ? `var(--p-space-${insetBlockEnd})` : void 0,
    "--pc-box-inset-inline-start": insetInlineStart ? `var(--p-space-${insetInlineStart})` : void 0,
    "--pc-box-inset-inline-end": insetInlineEnd ? `var(--p-space-${insetInlineEnd})` : void 0,
    zIndex,
    opacity
  };
  const className = classNames(styles5.Box, visuallyHidden && styles5.visuallyHidden, printHidden && styles5.printHidden, as === "ul" && styles5.listReset);
  return /* @__PURE__ */ import_react33.default.createElement(as, {
    className,
    id,
    ref,
    style: sanitizeCustomProperties(style),
    role,
    tabIndex,
    ...restProps
  }, children);
});
Box.displayName = "Box";

// node_modules/@shopify/polaris/build/esm/components/Card/Card.js
var import_react36 = __toESM(require_react());

// node_modules/@shopify/polaris/build/esm/utilities/within-content-context.js
var import_react34 = __toESM(require_react());
var WithinContentContext = /* @__PURE__ */ (0, import_react34.createContext)(false);

// node_modules/@shopify/polaris/build/esm/components/ShadowBevel/ShadowBevel.js
var import_react35 = __toESM(require_react());

// node_modules/@shopify/polaris/build/esm/components/ShadowBevel/ShadowBevel.css.js
var styles6 = {
  "ShadowBevel": "Polaris-ShadowBevel"
};

// node_modules/@shopify/polaris/build/esm/components/ShadowBevel/ShadowBevel.js
function ShadowBevel(props) {
  const {
    as = "div",
    bevel = true,
    borderRadius,
    boxShadow,
    children,
    zIndex = "0"
  } = props;
  const Component4 = as;
  return /* @__PURE__ */ import_react35.default.createElement(Component4, {
    className: styles6.ShadowBevel,
    style: {
      "--pc-shadow-bevel-z-index": zIndex,
      ...getResponsiveValue("shadow-bevel", "content", mapResponsiveProp(bevel, (bevel2) => bevel2 ? '""' : "none")),
      ...getResponsiveValue("shadow-bevel", "box-shadow", mapResponsiveProp(bevel, (bevel2) => bevel2 ? `var(--p-shadow-${boxShadow})` : "none")),
      ...getResponsiveValue("shadow-bevel", "border-radius", mapResponsiveProp(bevel, (bevel2) => bevel2 ? `var(--p-border-radius-${borderRadius})` : "var(--p-border-radius-0)"))
    }
  }, children);
}
function mapResponsiveProp(responsiveProp, callback) {
  if (typeof responsiveProp === "boolean") {
    return callback(responsiveProp);
  }
  return Object.fromEntries(Object.entries(responsiveProp).map(([breakpointsAlias, value]) => [breakpointsAlias, callback(value)]));
}

// node_modules/@shopify/polaris/build/esm/components/Card/Card.js
var Card = ({
  children,
  background = "bg-surface",
  padding = {
    xs: "400"
  },
  roundedAbove = "sm"
}) => {
  const breakpoints = useBreakpoints();
  const defaultBorderRadius = "300";
  const hasBorderRadius = Boolean(breakpoints[`${roundedAbove}Up`]);
  return /* @__PURE__ */ import_react36.default.createElement(WithinContentContext.Provider, {
    value: true
  }, /* @__PURE__ */ import_react36.default.createElement(ShadowBevel, {
    boxShadow: "100",
    borderRadius: hasBorderRadius ? defaultBorderRadius : "0",
    zIndex: "32"
  }, /* @__PURE__ */ import_react36.default.createElement(Box, {
    background,
    padding,
    overflowX: "clip",
    overflowY: "clip",
    minHeight: "100%"
  }, children)));
};

// node_modules/@shopify/polaris/build/esm/components/InlineStack/InlineStack.js
var import_react37 = __toESM(require_react());

// node_modules/@shopify/polaris/build/esm/components/InlineStack/InlineStack.css.js
var styles7 = {
  "InlineStack": "Polaris-InlineStack"
};

// node_modules/@shopify/polaris/build/esm/components/InlineStack/InlineStack.js
var InlineStack = function InlineStack2({
  as: Element2 = "div",
  align,
  direction = "row",
  blockAlign,
  gap,
  wrap = true,
  children
}) {
  const style = {
    "--pc-inline-stack-align": align,
    "--pc-inline-stack-block-align": blockAlign,
    "--pc-inline-stack-wrap": wrap ? "wrap" : "nowrap",
    ...getResponsiveProps("inline-stack", "gap", "space", gap),
    ...getResponsiveValue("inline-stack", "flex-direction", direction)
  };
  return /* @__PURE__ */ import_react37.default.createElement(Element2, {
    className: styles7.InlineStack,
    style
  }, children);
};

// node_modules/@shopify/polaris/build/esm/components/BlockStack/BlockStack.js
var import_react38 = __toESM(require_react());

// node_modules/@shopify/polaris/build/esm/components/BlockStack/BlockStack.css.js
var styles8 = {
  "BlockStack": "Polaris-BlockStack",
  "listReset": "Polaris-BlockStack--listReset",
  "fieldsetReset": "Polaris-BlockStack--fieldsetReset"
};

// node_modules/@shopify/polaris/build/esm/components/BlockStack/BlockStack.js
var BlockStack = ({
  as = "div",
  children,
  align,
  inlineAlign,
  gap,
  id,
  reverseOrder = false,
  ...restProps
}) => {
  const className = classNames(styles8.BlockStack, (as === "ul" || as === "ol") && styles8.listReset, as === "fieldset" && styles8.fieldsetReset);
  const style = {
    "--pc-block-stack-align": align ? `${align}` : null,
    "--pc-block-stack-inline-align": inlineAlign ? `${inlineAlign}` : null,
    "--pc-block-stack-order": reverseOrder ? "column-reverse" : "column",
    ...getResponsiveProps("block-stack", "gap", "space", gap)
  };
  return /* @__PURE__ */ import_react38.default.createElement(as, {
    className,
    id,
    style: sanitizeCustomProperties(style),
    ...restProps
  }, children);
};

// node_modules/@shopify/polaris/build/esm/components/Banner/Banner.js
var import_react46 = __toESM(require_react());

// node_modules/@shopify/polaris/build/esm/utilities/banner-context.js
var import_react39 = __toESM(require_react());
var BannerContext = /* @__PURE__ */ (0, import_react39.createContext)(false);

// node_modules/@shopify/polaris/build/esm/utilities/use-event-listener.js
var import_react40 = __toESM(require_react());
function useEventListener(eventName, handler, target, options) {
  const handlerRef = (0, import_react40.useRef)(handler);
  const optionsRef = (0, import_react40.useRef)(options);
  useIsomorphicLayoutEffect(() => {
    handlerRef.current = handler;
  }, [handler]);
  useIsomorphicLayoutEffect(() => {
    optionsRef.current = options;
  }, [options]);
  (0, import_react40.useEffect)(() => {
    if (!(typeof eventName === "string" && target !== null))
      return;
    let targetElement;
    if (typeof target === "undefined") {
      targetElement = window;
    } else if ("current" in target) {
      if (target.current === null)
        return;
      targetElement = target.current;
    } else {
      targetElement = target;
    }
    const eventOptions = optionsRef.current;
    const eventListener = (event) => handlerRef.current(event);
    targetElement.addEventListener(eventName, eventListener, eventOptions);
    return () => {
      targetElement.removeEventListener(eventName, eventListener, eventOptions);
    };
  }, [eventName, target]);
}

// node_modules/@shopify/polaris/build/esm/components/Banner/Banner.css.js
var styles9 = {
  "Banner": "Polaris-Banner",
  "keyFocused": "Polaris-Banner--keyFocused",
  "withinContentContainer": "Polaris-Banner--withinContentContainer",
  "withinPage": "Polaris-Banner--withinPage",
  "DismissIcon": "Polaris-Banner__DismissIcon",
  "text-success-on-bg-fill": "Polaris-Banner--textSuccessOnBgFill",
  "text-success": "Polaris-Banner__text--success",
  "text-warning-on-bg-fill": "Polaris-Banner--textWarningOnBgFill",
  "text-warning": "Polaris-Banner__text--warning",
  "text-critical-on-bg-fill": "Polaris-Banner--textCriticalOnBgFill",
  "text-critical": "Polaris-Banner__text--critical",
  "text-info-on-bg-fill": "Polaris-Banner--textInfoOnBgFill",
  "text-info": "Polaris-Banner__text--info",
  "icon-secondary": "Polaris-Banner__icon--secondary"
};

// node_modules/@shopify/polaris/build/esm/components/Banner/utilities.js
var import_react41 = __toESM(require_react());
var bannerAttributes = {
  success: {
    withinPage: {
      background: "bg-fill-success",
      text: "text-success-on-bg-fill",
      icon: "text-success-on-bg-fill"
    },
    withinContentContainer: {
      background: "bg-surface-success",
      text: "text-success",
      icon: "text-success"
    },
    icon: SvgCheckIcon
  },
  warning: {
    withinPage: {
      background: "bg-fill-warning",
      text: "text-warning-on-bg-fill",
      icon: "text-warning-on-bg-fill"
    },
    withinContentContainer: {
      background: "bg-surface-warning",
      text: "text-warning",
      icon: "text-warning"
    },
    icon: SvgAlertTriangleIcon
  },
  critical: {
    withinPage: {
      background: "bg-fill-critical",
      text: "text-critical-on-bg-fill",
      icon: "text-critical-on-bg-fill"
    },
    withinContentContainer: {
      background: "bg-surface-critical",
      text: "text-critical",
      icon: "text-critical"
    },
    icon: SvgAlertDiamondIcon
  },
  info: {
    withinPage: {
      background: "bg-fill-info",
      text: "text-info-on-bg-fill",
      icon: "text-info-on-bg-fill"
    },
    withinContentContainer: {
      background: "bg-surface-info",
      text: "text-info",
      icon: "text-info"
    },
    icon: SvgInfoIcon
  }
};
function useBannerFocus(bannerRef) {
  const wrapperRef = (0, import_react41.useRef)(null);
  const [shouldShowFocus, setShouldShowFocus] = (0, import_react41.useState)(false);
  (0, import_react41.useImperativeHandle)(bannerRef, () => ({
    focus: () => {
      wrapperRef.current?.focus();
      setShouldShowFocus(true);
    }
  }), []);
  const handleKeyUp = (event) => {
    if (event.target === wrapperRef.current) {
      setShouldShowFocus(true);
    }
  };
  const handleBlur = () => setShouldShowFocus(false);
  const handleMouseUp = (event) => {
    event.currentTarget.blur();
    setShouldShowFocus(false);
  };
  return {
    wrapperRef,
    handleKeyUp,
    handleBlur,
    handleMouseUp,
    shouldShowFocus
  };
}

// node_modules/@shopify/polaris/build/esm/components/ButtonGroup/ButtonGroup.js
var import_react45 = __toESM(require_react());

// node_modules/@shopify/polaris/build/esm/utilities/components.js
var import_react42 = __toESM(require_react());
function wrapWithComponent(element, Component4, props) {
  if (element == null) {
    return null;
  }
  return isElementOfType(element, Component4) ? element : /* @__PURE__ */ import_react42.default.createElement(Component4, props, element);
}
var isComponent = true ? hotReloadComponentCheck : (AComponent, AnotherComponent) => AComponent === AnotherComponent;
function isElementOfType(element, Component4) {
  if (element == null || !/* @__PURE__ */ (0, import_react42.isValidElement)(element) || typeof element.type === "string") {
    return false;
  }
  const {
    type: defaultType
  } = element;
  const overrideType = element.props?.__type__;
  const type = overrideType || defaultType;
  const Components = Array.isArray(Component4) ? Component4 : [Component4];
  return Components.some((AComponent) => typeof type !== "string" && isComponent(AComponent, type));
}
function elementChildren(children, predicate = () => true) {
  return import_react42.Children.toArray(children).filter((child) => /* @__PURE__ */ (0, import_react42.isValidElement)(child) && predicate(child));
}
function ConditionalWrapper({
  condition,
  wrapper,
  children
}) {
  return condition ? wrapper(children) : children;
}
function ConditionalRender({
  condition,
  children
}) {
  return condition ? children : null;
}
function hotReloadComponentCheck(AComponent, AnotherComponent) {
  const componentName = AComponent.name;
  const anotherComponentName = AnotherComponent.displayName;
  return AComponent === AnotherComponent || Boolean(componentName) && componentName === anotherComponentName;
}

// node_modules/@shopify/polaris/build/esm/components/ButtonGroup/ButtonGroup.css.js
var styles10 = {
  "ButtonGroup": "Polaris-ButtonGroup",
  "Item": "Polaris-ButtonGroup__Item",
  "Item-plain": "Polaris-ButtonGroup__Item--plain",
  "variantSegmented": "Polaris-ButtonGroup--variantSegmented",
  "Item-focused": "Polaris-ButtonGroup__Item--focused",
  "fullWidth": "Polaris-ButtonGroup--fullWidth",
  "extraTight": "Polaris-ButtonGroup--extraTight",
  "tight": "Polaris-ButtonGroup--tight",
  "loose": "Polaris-ButtonGroup--loose",
  "noWrap": "Polaris-ButtonGroup--noWrap"
};

// node_modules/@shopify/polaris/build/esm/components/ButtonGroup/components/Item/Item.js
var import_react44 = __toESM(require_react());

// node_modules/@shopify/polaris/build/esm/utilities/use-toggle.js
var import_react43 = __toESM(require_react());
function useToggle(initialState) {
  const [value, setState] = (0, import_react43.useState)(initialState);
  return {
    value,
    toggle: (0, import_react43.useCallback)(() => setState((state) => !state), []),
    setTrue: (0, import_react43.useCallback)(() => setState(true), []),
    setFalse: (0, import_react43.useCallback)(() => setState(false), [])
  };
}

// node_modules/@shopify/polaris/build/esm/components/ButtonGroup/components/Item/Item.js
function Item({
  button
}) {
  const {
    value: focused,
    setTrue: forceTrueFocused,
    setFalse: forceFalseFocused
  } = useToggle(false);
  const className = classNames(styles10.Item, focused && styles10["Item-focused"], button.props.variant === "plain" && styles10["Item-plain"]);
  return /* @__PURE__ */ import_react44.default.createElement("div", {
    className,
    onFocus: forceTrueFocused,
    onBlur: forceFalseFocused
  }, button);
}

// node_modules/@shopify/polaris/build/esm/components/ButtonGroup/ButtonGroup.js
function ButtonGroup({
  children,
  gap,
  variant,
  fullWidth,
  connectedTop,
  noWrap
}) {
  const className = classNames(styles10.ButtonGroup, gap && styles10[gap], variant && styles10[variationName("variant", variant)], fullWidth && styles10.fullWidth, noWrap && styles10.noWrap);
  const contents = elementChildren(children).map((child, index) => /* @__PURE__ */ import_react45.default.createElement(Item, {
    button: child,
    key: index
  }));
  return /* @__PURE__ */ import_react45.default.createElement("div", {
    className,
    "data-buttongroup-variant": variant,
    "data-buttongroup-connected-top": connectedTop,
    "data-buttongroup-full-width": fullWidth,
    "data-buttongroup-no-wrap": noWrap
  }, contents);
}

// node_modules/@shopify/polaris/build/esm/components/Banner/Banner.js
var Banner = /* @__PURE__ */ (0, import_react46.forwardRef)(function Banner2(props, bannerRef) {
  const {
    tone,
    stopAnnouncements
  } = props;
  const withinContentContainer = (0, import_react46.useContext)(WithinContentContext);
  const {
    wrapperRef,
    handleKeyUp,
    handleBlur,
    handleMouseUp,
    shouldShowFocus
  } = useBannerFocus(bannerRef);
  const className = classNames(styles9.Banner, shouldShowFocus && styles9.keyFocused, withinContentContainer ? styles9.withinContentContainer : styles9.withinPage);
  return /* @__PURE__ */ import_react46.default.createElement(BannerContext.Provider, {
    value: true
  }, /* @__PURE__ */ import_react46.default.createElement("div", {
    className,
    tabIndex: 0,
    ref: wrapperRef,
    role: tone === "warning" || tone === "critical" ? "alert" : "status",
    "aria-live": stopAnnouncements ? "off" : "polite",
    onMouseUp: handleMouseUp,
    onKeyUp: handleKeyUp,
    onBlur: handleBlur
  }, /* @__PURE__ */ import_react46.default.createElement(BannerLayout, props)));
});
function BannerLayout({
  tone = "info",
  icon,
  hideIcon,
  onDismiss,
  action,
  secondaryAction,
  title,
  children
}) {
  const i18n = useI18n();
  const withinContentContainer = (0, import_react46.useContext)(WithinContentContext);
  const isInlineIconBanner = !title && !withinContentContainer;
  const bannerTone = Object.keys(bannerAttributes).includes(tone) ? tone : "info";
  const bannerColors = bannerAttributes[bannerTone][withinContentContainer ? "withinContentContainer" : "withinPage"];
  const sharedBannerProps = {
    backgroundColor: bannerColors.background,
    textColor: bannerColors.text,
    bannerTitle: title ? /* @__PURE__ */ import_react46.default.createElement(Text, {
      as: "h2",
      variant: "headingSm",
      breakWord: true
    }, title) : null,
    bannerIcon: hideIcon ? null : /* @__PURE__ */ import_react46.default.createElement("span", {
      className: styles9[bannerColors.icon]
    }, /* @__PURE__ */ import_react46.default.createElement(Icon, {
      source: icon ?? bannerAttributes[bannerTone].icon
    })),
    actionButtons: action || secondaryAction ? /* @__PURE__ */ import_react46.default.createElement(ButtonGroup, null, action && /* @__PURE__ */ import_react46.default.createElement(Button, Object.assign({
      onClick: action.onAction
    }, action), action.content), secondaryAction && /* @__PURE__ */ import_react46.default.createElement(Button, Object.assign({
      onClick: secondaryAction.onAction
    }, secondaryAction), secondaryAction.content)) : null,
    dismissButton: onDismiss ? /* @__PURE__ */ import_react46.default.createElement(Button, {
      variant: "tertiary",
      icon: /* @__PURE__ */ import_react46.default.createElement("span", {
        className: styles9[isInlineIconBanner ? "icon-secondary" : bannerColors.icon]
      }, /* @__PURE__ */ import_react46.default.createElement(Icon, {
        source: SvgXIcon
      })),
      onClick: onDismiss,
      accessibilityLabel: i18n.translate("Polaris.Banner.dismissButton")
    }) : null
  };
  const childrenMarkup = children ? /* @__PURE__ */ import_react46.default.createElement(Text, {
    as: "span",
    variant: "bodyMd"
  }, children) : null;
  if (withinContentContainer) {
    return /* @__PURE__ */ import_react46.default.createElement(WithinContentContainerBanner, sharedBannerProps, childrenMarkup);
  }
  if (isInlineIconBanner) {
    return /* @__PURE__ */ import_react46.default.createElement(InlineIconBanner, sharedBannerProps, childrenMarkup);
  }
  return /* @__PURE__ */ import_react46.default.createElement(DefaultBanner, sharedBannerProps, childrenMarkup);
}
function DefaultBanner({
  backgroundColor,
  textColor,
  bannerTitle,
  bannerIcon,
  actionButtons,
  dismissButton,
  children
}) {
  const {
    smUp
  } = useBreakpoints();
  const hasContent = children || actionButtons;
  return /* @__PURE__ */ import_react46.default.createElement(Box, {
    width: "100%"
  }, /* @__PURE__ */ import_react46.default.createElement(BlockStack, {
    align: "space-between"
  }, /* @__PURE__ */ import_react46.default.createElement(Box, {
    background: backgroundColor,
    color: textColor,
    borderStartStartRadius: smUp ? "300" : void 0,
    borderStartEndRadius: smUp ? "300" : void 0,
    borderEndStartRadius: !hasContent && smUp ? "300" : void 0,
    borderEndEndRadius: !hasContent && smUp ? "300" : void 0,
    padding: "300"
  }, /* @__PURE__ */ import_react46.default.createElement(InlineStack, {
    align: "space-between",
    blockAlign: "center",
    gap: "200",
    wrap: false
  }, /* @__PURE__ */ import_react46.default.createElement(InlineStack, {
    gap: "100",
    wrap: false
  }, bannerIcon, bannerTitle), dismissButton)), hasContent && /* @__PURE__ */ import_react46.default.createElement(Box, {
    padding: {
      xs: "300",
      md: "400"
    },
    paddingBlockStart: "300"
  }, /* @__PURE__ */ import_react46.default.createElement(BlockStack, {
    gap: "200"
  }, /* @__PURE__ */ import_react46.default.createElement("div", null, children), actionButtons))));
}
function InlineIconBanner({
  backgroundColor,
  bannerIcon,
  actionButtons,
  dismissButton,
  children
}) {
  const [blockAlign, setBlockAlign] = (0, import_react46.useState)("center");
  const contentNode = (0, import_react46.useRef)(null);
  const iconNode = (0, import_react46.useRef)(null);
  const dismissIconNode = (0, import_react46.useRef)(null);
  const handleResize = (0, import_react46.useCallback)(() => {
    const contentHeight = contentNode.current?.offsetHeight;
    const iconBoxHeight = iconNode.current?.offsetHeight || dismissIconNode.current?.offsetHeight;
    if (!contentHeight || !iconBoxHeight)
      return;
    contentHeight > iconBoxHeight ? setBlockAlign("start") : setBlockAlign("center");
  }, []);
  (0, import_react46.useEffect)(() => handleResize(), [handleResize]);
  useEventListener("resize", handleResize);
  return /* @__PURE__ */ import_react46.default.createElement(Box, {
    width: "100%",
    padding: "300",
    borderRadius: "300"
  }, /* @__PURE__ */ import_react46.default.createElement(InlineStack, {
    align: "space-between",
    blockAlign,
    wrap: false
  }, /* @__PURE__ */ import_react46.default.createElement(Box, {
    width: "100%"
  }, /* @__PURE__ */ import_react46.default.createElement(InlineStack, {
    gap: "200",
    wrap: false,
    blockAlign
  }, bannerIcon ? /* @__PURE__ */ import_react46.default.createElement("div", {
    ref: iconNode
  }, /* @__PURE__ */ import_react46.default.createElement(Box, {
    background: backgroundColor,
    borderRadius: "200",
    padding: "100"
  }, bannerIcon)) : null, /* @__PURE__ */ import_react46.default.createElement(Box, {
    ref: contentNode,
    width: "100%"
  }, /* @__PURE__ */ import_react46.default.createElement(BlockStack, {
    gap: "200"
  }, /* @__PURE__ */ import_react46.default.createElement("div", null, children), actionButtons)))), /* @__PURE__ */ import_react46.default.createElement("div", {
    ref: dismissIconNode,
    className: styles9.DismissIcon
  }, dismissButton)));
}
function WithinContentContainerBanner({
  backgroundColor,
  textColor,
  bannerTitle,
  bannerIcon,
  actionButtons,
  dismissButton,
  children
}) {
  return /* @__PURE__ */ import_react46.default.createElement(Box, {
    width: "100%",
    background: backgroundColor,
    padding: "200",
    borderRadius: "200",
    color: textColor
  }, /* @__PURE__ */ import_react46.default.createElement(InlineStack, {
    align: "space-between",
    blockAlign: "start",
    wrap: false,
    gap: "200"
  }, /* @__PURE__ */ import_react46.default.createElement(InlineStack, {
    gap: "150",
    wrap: false
  }, bannerIcon, /* @__PURE__ */ import_react46.default.createElement(Box, {
    width: "100%"
  }, /* @__PURE__ */ import_react46.default.createElement(BlockStack, {
    gap: "200"
  }, /* @__PURE__ */ import_react46.default.createElement(BlockStack, {
    gap: "050"
  }, bannerTitle, /* @__PURE__ */ import_react46.default.createElement("div", null, children)), actionButtons))), dismissButton));
}

// node_modules/@shopify/polaris/build/esm/components/EmptyState/EmptyState.js
var import_react49 = __toESM(require_react());

// node_modules/@shopify/polaris/build/esm/components/EmptyState/EmptyState.css.js
var styles11 = {
  "ImageContainer": "Polaris-EmptyState__ImageContainer",
  "Image": "Polaris-EmptyState__Image",
  "loaded": "Polaris-EmptyState--loaded",
  "imageContained": "Polaris-EmptyState--imageContained",
  "SkeletonImageContainer": "Polaris-EmptyState__SkeletonImageContainer",
  "SkeletonImage": "Polaris-EmptyState__SkeletonImage"
};

// node_modules/@shopify/polaris/build/esm/components/Button/utils.js
var import_react47 = __toESM(require_react());
function buttonsFrom(actions, overrides = {}) {
  if (Array.isArray(actions)) {
    return actions.map((action, index) => buttonFrom(action, overrides, index));
  } else {
    const action = actions;
    return buttonFrom(action, overrides);
  }
}
function buttonFrom({
  content,
  onAction,
  plain,
  destructive,
  ...action
}, overrides, key) {
  const plainVariant = plain ? "plain" : void 0;
  const destructiveVariant = destructive ? "primary" : void 0;
  const tone = !overrides?.tone && destructive ? "critical" : overrides?.tone;
  return /* @__PURE__ */ import_react47.default.createElement(Button, Object.assign({
    key,
    onClick: onAction,
    tone,
    variant: plainVariant || destructiveVariant
  }, action, overrides), content);
}

// node_modules/@shopify/polaris/build/esm/components/Image/Image.js
var import_react48 = __toESM(require_react());
var Image = /* @__PURE__ */ (0, import_react48.forwardRef)(({
  alt,
  sourceSet,
  source,
  crossOrigin,
  onLoad,
  className,
  ...rest
}, ref) => {
  const finalSourceSet = sourceSet ? sourceSet.map(({
    source: subSource,
    descriptor
  }) => `${subSource} ${descriptor}`).join(",") : null;
  const handleLoad = (0, import_react48.useCallback)(() => {
    if (onLoad)
      onLoad();
  }, [onLoad]);
  return /* @__PURE__ */ import_react48.default.createElement("img", Object.assign({
    ref,
    alt,
    src: source,
    crossOrigin,
    className,
    onLoad: handleLoad
  }, finalSourceSet ? {
    srcSet: finalSourceSet
  } : {}, rest));
});
Image.displayName = "Image";

// node_modules/@shopify/polaris/build/esm/components/EmptyState/EmptyState.js
function EmptyState({
  children,
  heading,
  image,
  largeImage,
  imageContained,
  fullWidth = false,
  action,
  secondaryAction,
  footerContent
}) {
  const [imageLoaded, setImageLoaded] = (0, import_react49.useState)(false);
  const imageRef = (0, import_react49.useRef)(null);
  (0, import_react49.useEffect)(() => {
    if (imageRef.current?.complete)
      setImageLoaded(true);
  }, []);
  const imageClassNames = classNames(styles11.Image, imageLoaded && styles11.loaded, imageContained && styles11.imageContained);
  const loadedImageMarkup = largeImage ? /* @__PURE__ */ import_react49.default.createElement(Image, {
    alt: "",
    role: "presentation",
    ref: imageRef,
    source: largeImage,
    className: imageClassNames,
    sourceSet: [{
      source: image,
      descriptor: "568w"
    }, {
      source: largeImage,
      descriptor: "1136w"
    }],
    sizes: "(max-width: 568px) 60vw",
    onLoad: () => setImageLoaded(true)
  }) : /* @__PURE__ */ import_react49.default.createElement(Image, {
    alt: "",
    role: "presentation",
    ref: imageRef,
    className: imageClassNames,
    source: image,
    onLoad: () => setImageLoaded(true)
  });
  const skeletonImageClassNames = classNames(styles11.SkeletonImage, imageLoaded && styles11.loaded);
  const imageContainerClassNames = classNames(styles11.ImageContainer, !imageLoaded && styles11.SkeletonImageContainer);
  const imageMarkup = /* @__PURE__ */ import_react49.default.createElement("div", {
    className: imageContainerClassNames
  }, loadedImageMarkup, /* @__PURE__ */ import_react49.default.createElement("div", {
    className: skeletonImageClassNames
  }));
  const secondaryActionMarkup = secondaryAction ? buttonFrom(secondaryAction, {}) : null;
  const footerContentMarkup = footerContent ? /* @__PURE__ */ import_react49.default.createElement(Box, {
    paddingBlockStart: "400"
  }, /* @__PURE__ */ import_react49.default.createElement(Text, {
    as: "span",
    alignment: "center",
    variant: "bodySm"
  }, footerContent)) : null;
  const primaryActionMarkup = action ? buttonFrom(action, {
    variant: "primary",
    size: "medium"
  }) : null;
  const headingMarkup = heading ? /* @__PURE__ */ import_react49.default.createElement(Box, {
    paddingBlockEnd: "150"
  }, /* @__PURE__ */ import_react49.default.createElement(Text, {
    variant: "headingMd",
    as: "p",
    alignment: "center"
  }, heading)) : null;
  const childrenMarkup = children ? /* @__PURE__ */ import_react49.default.createElement(Text, {
    as: "span",
    alignment: "center",
    variant: "bodySm"
  }, children) : null;
  const textContentMarkup = headingMarkup || children ? /* @__PURE__ */ import_react49.default.createElement(Box, {
    paddingBlockEnd: "400"
  }, headingMarkup, childrenMarkup) : null;
  const actionsMarkup = primaryActionMarkup || secondaryActionMarkup ? /* @__PURE__ */ import_react49.default.createElement(InlineStack, {
    align: "center",
    gap: "200"
  }, secondaryActionMarkup, primaryActionMarkup) : null;
  const detailsMarkup = textContentMarkup || actionsMarkup || footerContentMarkup ? /* @__PURE__ */ import_react49.default.createElement(Box, {
    maxWidth: fullWidth ? "100%" : "400px"
  }, /* @__PURE__ */ import_react49.default.createElement(BlockStack, {
    inlineAlign: "center"
  }, textContentMarkup, actionsMarkup, footerContentMarkup)) : null;
  return /* @__PURE__ */ import_react49.default.createElement(Box, {
    paddingInlineStart: "0",
    paddingInlineEnd: "0",
    paddingBlockStart: "500",
    paddingBlockEnd: "1600"
  }, /* @__PURE__ */ import_react49.default.createElement(BlockStack, {
    inlineAlign: "center"
  }, imageMarkup, detailsMarkup));
}

// node_modules/@shopify/polaris/build/esm/components/Layout/Layout.js
var import_react53 = __toESM(require_react());

// node_modules/@shopify/polaris/build/esm/components/Layout/Layout.css.js
var styles12 = {
  "Layout": "Polaris-Layout",
  "Section": "Polaris-Layout__Section",
  "Section-fullWidth": "Polaris-Layout__Section--fullWidth",
  "Section-oneHalf": "Polaris-Layout__Section--oneHalf",
  "Section-oneThird": "Polaris-Layout__Section--oneThird",
  "AnnotatedSection": "Polaris-Layout__AnnotatedSection",
  "AnnotationWrapper": "Polaris-Layout__AnnotationWrapper",
  "AnnotationContent": "Polaris-Layout__AnnotationContent",
  "Annotation": "Polaris-Layout__Annotation"
};

// node_modules/@shopify/polaris/build/esm/components/Layout/components/AnnotatedSection/AnnotatedSection.js
var import_react51 = __toESM(require_react());

// node_modules/@shopify/polaris/build/esm/components/TextContainer/TextContainer.js
var import_react50 = __toESM(require_react());

// node_modules/@shopify/polaris/build/esm/components/TextContainer/TextContainer.css.js
var styles13 = {
  "TextContainer": "Polaris-TextContainer",
  "spacingTight": "Polaris-TextContainer--spacingTight",
  "spacingLoose": "Polaris-TextContainer--spacingLoose"
};

// node_modules/@shopify/polaris/build/esm/components/TextContainer/TextContainer.js
function TextContainer({
  spacing,
  children
}) {
  const className = classNames(styles13.TextContainer, spacing && styles13[variationName("spacing", spacing)]);
  return /* @__PURE__ */ import_react50.default.createElement("div", {
    className
  }, children);
}

// node_modules/@shopify/polaris/build/esm/components/Layout/components/AnnotatedSection/AnnotatedSection.js
function AnnotatedSection({
  children,
  title,
  description,
  id
}) {
  const descriptionMarkup = typeof description === "string" ? /* @__PURE__ */ import_react51.default.createElement(Text, {
    as: "p",
    variant: "bodyMd"
  }, description) : description;
  return /* @__PURE__ */ import_react51.default.createElement("div", {
    className: styles12.AnnotatedSection
  }, /* @__PURE__ */ import_react51.default.createElement("div", {
    className: styles12.AnnotationWrapper
  }, /* @__PURE__ */ import_react51.default.createElement("div", {
    className: styles12.Annotation
  }, /* @__PURE__ */ import_react51.default.createElement(TextContainer, {
    spacing: "tight"
  }, /* @__PURE__ */ import_react51.default.createElement(Text, {
    id,
    variant: "headingMd",
    as: "h2"
  }, title), descriptionMarkup && /* @__PURE__ */ import_react51.default.createElement(Box, {
    color: "text-secondary"
  }, descriptionMarkup))), /* @__PURE__ */ import_react51.default.createElement("div", {
    className: styles12.AnnotationContent
  }, children)));
}

// node_modules/@shopify/polaris/build/esm/components/Layout/components/Section/Section.js
var import_react52 = __toESM(require_react());
function Section({
  children,
  variant
}) {
  const className = classNames(styles12.Section, styles12[`Section-${variant}`]);
  return /* @__PURE__ */ import_react52.default.createElement("div", {
    className
  }, children);
}

// node_modules/@shopify/polaris/build/esm/components/Layout/Layout.js
var Layout = function Layout2({
  sectioned,
  children
}) {
  const content = sectioned ? /* @__PURE__ */ import_react53.default.createElement(Section, null, children) : children;
  return /* @__PURE__ */ import_react53.default.createElement("div", {
    className: styles12.Layout
  }, content);
};
Layout.AnnotatedSection = AnnotatedSection;
Layout.Section = Section;

// node_modules/@shopify/polaris/build/esm/components/Page/Page.js
var import_react106 = __toESM(require_react());

// node_modules/@shopify/polaris/build/esm/utilities/is-interface.js
var import_react54 = __toESM(require_react());
function isInterface(x) {
  return !/* @__PURE__ */ (0, import_react54.isValidElement)(x) && x !== void 0;
}

// node_modules/@shopify/polaris/build/esm/utilities/is-react-element.js
var import_react55 = __toESM(require_react());
function isReactElement(x) {
  return /* @__PURE__ */ (0, import_react55.isValidElement)(x) && x !== void 0;
}

// node_modules/@shopify/polaris/build/esm/components/Page/Page.css.js
var styles14 = {
  "Page": "Polaris-Page",
  "fullWidth": "Polaris-Page--fullWidth",
  "narrowWidth": "Polaris-Page--narrowWidth",
  "Content": "Polaris-Page__Content"
};

// node_modules/@shopify/polaris/build/esm/components/Page/components/Header/Header.js
var import_react105 = __toESM(require_react());

// node_modules/@shopify/polaris/build/esm/components/Page/components/Header/Header.css.js
var styles15 = {
  "TitleWrapper": "Polaris-Page-Header__TitleWrapper",
  "TitleWrapperExpand": "Polaris-Page-Header__TitleWrapperExpand",
  "BreadcrumbWrapper": "Polaris-Page-Header__BreadcrumbWrapper",
  "PaginationWrapper": "Polaris-Page-Header__PaginationWrapper",
  "PrimaryActionWrapper": "Polaris-Page-Header__PrimaryActionWrapper",
  "Row": "Polaris-Page-Header__Row",
  "mobileView": "Polaris-Page-Header--mobileView",
  "RightAlign": "Polaris-Page-Header__RightAlign",
  "noBreadcrumbs": "Polaris-Page-Header--noBreadcrumbs",
  "AdditionalMetaData": "Polaris-Page-Header__AdditionalMetaData",
  "Actions": "Polaris-Page-Header__Actions",
  "longTitle": "Polaris-Page-Header--longTitle",
  "mediumTitle": "Polaris-Page-Header--mediumTitle",
  "isSingleRow": "Polaris-Page-Header--isSingleRow"
};

// node_modules/@shopify/polaris/build/esm/components/Breadcrumbs/Breadcrumbs.js
var import_react56 = __toESM(require_react());
function Breadcrumbs({
  backAction
}) {
  const {
    content
  } = backAction;
  return /* @__PURE__ */ import_react56.default.createElement(Button, {
    key: content,
    url: "url" in backAction ? backAction.url : void 0,
    onClick: "onAction" in backAction ? backAction.onAction : void 0,
    onPointerDown: handleMouseUpByBlurring,
    icon: SvgArrowLeftIcon,
    accessibilityLabel: backAction.accessibilityLabel ?? content
  });
}

// node_modules/@shopify/polaris/build/esm/components/Page/components/Header/components/Title/Title.js
var import_react58 = __toESM(require_react());

// node_modules/@shopify/polaris/build/esm/components/Page/components/Header/components/Title/Title.css.js
var styles16 = {
  "Title": "Polaris-Header-Title",
  "TitleWithSubtitle": "Polaris-Header-Title__TitleWithSubtitle",
  "TitleWrapper": "Polaris-Header-Title__TitleWrapper",
  "SubTitle": "Polaris-Header-Title__SubTitle",
  "SubtitleCompact": "Polaris-Header-Title__SubtitleCompact",
  "SubtitleMaxWidth": "Polaris-Header-Title__SubtitleMaxWidth"
};

// node_modules/@shopify/polaris/build/esm/components/Bleed/Bleed.js
var import_react57 = __toESM(require_react());

// node_modules/@shopify/polaris/build/esm/components/Bleed/Bleed.css.js
var styles17 = {
  "Bleed": "Polaris-Bleed"
};

// node_modules/@shopify/polaris/build/esm/components/Bleed/Bleed.js
var Bleed = ({
  marginInline,
  marginBlock,
  marginBlockStart,
  marginBlockEnd,
  marginInlineStart,
  marginInlineEnd,
  children
}) => {
  const getNegativeMargins = (direction) => {
    const xAxis = ["marginInlineStart", "marginInlineEnd"];
    const yAxis = ["marginBlockStart", "marginBlockEnd"];
    const directionValues = {
      marginBlockStart,
      marginBlockEnd,
      marginInlineStart,
      marginInlineEnd,
      marginInline,
      marginBlock
    };
    if (directionValues[direction]) {
      return directionValues[direction];
    } else if (xAxis.includes(direction) && marginInline) {
      return directionValues.marginInline;
    } else if (yAxis.includes(direction) && marginBlock) {
      return directionValues.marginBlock;
    }
  };
  const negativeMarginBlockStart = getNegativeMargins("marginBlockStart");
  const negativeMarginBlockEnd = getNegativeMargins("marginBlockEnd");
  const negativeMarginInlineStart = getNegativeMargins("marginInlineStart");
  const negativeMarginInlineEnd = getNegativeMargins("marginInlineEnd");
  const style = {
    ...getResponsiveProps("bleed", "margin-block-start", "space", negativeMarginBlockStart),
    ...getResponsiveProps("bleed", "margin-block-end", "space", negativeMarginBlockEnd),
    ...getResponsiveProps("bleed", "margin-inline-start", "space", negativeMarginInlineStart),
    ...getResponsiveProps("bleed", "margin-inline-end", "space", negativeMarginInlineEnd)
  };
  return /* @__PURE__ */ import_react57.default.createElement("div", {
    className: styles17.Bleed,
    style: sanitizeCustomProperties(style)
  }, children);
};

// node_modules/@shopify/polaris/build/esm/components/Page/components/Header/components/Title/Title.js
function Title({
  title,
  subtitle,
  titleMetadata,
  compactTitle,
  hasSubtitleMaxWidth
}) {
  const className = classNames(styles16.Title, subtitle && styles16.TitleWithSubtitle);
  const titleMarkup = title ? /* @__PURE__ */ import_react58.default.createElement("h1", {
    className
  }, /* @__PURE__ */ import_react58.default.createElement(Text, {
    as: "span",
    variant: "headingLg",
    fontWeight: "bold"
  }, title)) : null;
  const titleMetadataMarkup = titleMetadata ? /* @__PURE__ */ import_react58.default.createElement(Bleed, {
    marginBlock: "100"
  }, titleMetadata) : null;
  const wrappedTitleMarkup = /* @__PURE__ */ import_react58.default.createElement("div", {
    className: styles16.TitleWrapper
  }, titleMarkup, titleMetadataMarkup);
  const subtitleMarkup = subtitle ? /* @__PURE__ */ import_react58.default.createElement("div", {
    className: classNames(styles16.SubTitle, compactTitle && styles16.SubtitleCompact, hasSubtitleMaxWidth && styles16.SubtitleMaxWidth)
  }, /* @__PURE__ */ import_react58.default.createElement(Text, {
    as: "p",
    variant: "bodySm",
    tone: "subdued"
  }, subtitle)) : null;
  return /* @__PURE__ */ import_react58.default.createElement(import_react58.default.Fragment, null, wrappedTitleMarkup, subtitleMarkup);
}

// node_modules/@shopify/polaris/build/esm/components/ActionMenu/ActionMenu.js
var import_react101 = __toESM(require_react());

// node_modules/@shopify/polaris/build/esm/components/ActionMenu/ActionMenu.css.js
var styles18 = {
  "ActionMenu": "Polaris-ActionMenu"
};

// node_modules/@shopify/polaris/build/esm/components/ActionMenu/components/RollupActions/RollupActions.js
var import_react96 = __toESM(require_react());

// node_modules/@shopify/polaris/build/esm/components/ActionMenu/components/RollupActions/RollupActions.css.js
var styles19 = {
  "RollupActivator": "Polaris-ActionMenu-RollupActions__RollupActivator"
};

// node_modules/@shopify/polaris/build/esm/components/Popover/Popover.js
var import_react76 = __toESM(require_react());

// node_modules/@shopify/polaris/build/esm/components/Popover/set-activator-attributes.js
function setActivatorAttributes(activator, {
  id,
  active = false,
  ariaHaspopup,
  activatorDisabled = false
}) {
  if (!activatorDisabled) {
    activator.tabIndex = activator.tabIndex || 0;
  }
  activator.setAttribute("aria-controls", id);
  activator.setAttribute("aria-owns", id);
  activator.setAttribute("aria-expanded", String(active));
  activator.setAttribute("data-state", active ? "open" : "closed");
  if (ariaHaspopup != null) {
    activator.setAttribute("aria-haspopup", String(ariaHaspopup));
  }
}

// node_modules/@shopify/polaris/build/esm/components/Popover/components/PopoverOverlay/PopoverOverlay.js
var import_react71 = __toESM(require_react());

// node_modules/@shopify/polaris/build/esm/types.js
var Key = /* @__PURE__ */ function(Key2) {
  Key2[Key2["Backspace"] = 8] = "Backspace";
  Key2[Key2["Tab"] = 9] = "Tab";
  Key2[Key2["Enter"] = 13] = "Enter";
  Key2[Key2["Shift"] = 16] = "Shift";
  Key2[Key2["Ctrl"] = 17] = "Ctrl";
  Key2[Key2["Alt"] = 18] = "Alt";
  Key2[Key2["Pause"] = 19] = "Pause";
  Key2[Key2["CapsLock"] = 20] = "CapsLock";
  Key2[Key2["Escape"] = 27] = "Escape";
  Key2[Key2["Space"] = 32] = "Space";
  Key2[Key2["PageUp"] = 33] = "PageUp";
  Key2[Key2["PageDown"] = 34] = "PageDown";
  Key2[Key2["End"] = 35] = "End";
  Key2[Key2["Home"] = 36] = "Home";
  Key2[Key2["LeftArrow"] = 37] = "LeftArrow";
  Key2[Key2["UpArrow"] = 38] = "UpArrow";
  Key2[Key2["RightArrow"] = 39] = "RightArrow";
  Key2[Key2["DownArrow"] = 40] = "DownArrow";
  Key2[Key2["Insert"] = 45] = "Insert";
  Key2[Key2["Delete"] = 46] = "Delete";
  Key2[Key2["Key0"] = 48] = "Key0";
  Key2[Key2["Key1"] = 49] = "Key1";
  Key2[Key2["Key2"] = 50] = "Key2";
  Key2[Key2["Key3"] = 51] = "Key3";
  Key2[Key2["Key4"] = 52] = "Key4";
  Key2[Key2["Key5"] = 53] = "Key5";
  Key2[Key2["Key6"] = 54] = "Key6";
  Key2[Key2["Key7"] = 55] = "Key7";
  Key2[Key2["Key8"] = 56] = "Key8";
  Key2[Key2["Key9"] = 57] = "Key9";
  Key2[Key2["KeyA"] = 65] = "KeyA";
  Key2[Key2["KeyB"] = 66] = "KeyB";
  Key2[Key2["KeyC"] = 67] = "KeyC";
  Key2[Key2["KeyD"] = 68] = "KeyD";
  Key2[Key2["KeyE"] = 69] = "KeyE";
  Key2[Key2["KeyF"] = 70] = "KeyF";
  Key2[Key2["KeyG"] = 71] = "KeyG";
  Key2[Key2["KeyH"] = 72] = "KeyH";
  Key2[Key2["KeyI"] = 73] = "KeyI";
  Key2[Key2["KeyJ"] = 74] = "KeyJ";
  Key2[Key2["KeyK"] = 75] = "KeyK";
  Key2[Key2["KeyL"] = 76] = "KeyL";
  Key2[Key2["KeyM"] = 77] = "KeyM";
  Key2[Key2["KeyN"] = 78] = "KeyN";
  Key2[Key2["KeyO"] = 79] = "KeyO";
  Key2[Key2["KeyP"] = 80] = "KeyP";
  Key2[Key2["KeyQ"] = 81] = "KeyQ";
  Key2[Key2["KeyR"] = 82] = "KeyR";
  Key2[Key2["KeyS"] = 83] = "KeyS";
  Key2[Key2["KeyT"] = 84] = "KeyT";
  Key2[Key2["KeyU"] = 85] = "KeyU";
  Key2[Key2["KeyV"] = 86] = "KeyV";
  Key2[Key2["KeyW"] = 87] = "KeyW";
  Key2[Key2["KeyX"] = 88] = "KeyX";
  Key2[Key2["KeyY"] = 89] = "KeyY";
  Key2[Key2["KeyZ"] = 90] = "KeyZ";
  Key2[Key2["LeftMeta"] = 91] = "LeftMeta";
  Key2[Key2["RightMeta"] = 92] = "RightMeta";
  Key2[Key2["Select"] = 93] = "Select";
  Key2[Key2["Numpad0"] = 96] = "Numpad0";
  Key2[Key2["Numpad1"] = 97] = "Numpad1";
  Key2[Key2["Numpad2"] = 98] = "Numpad2";
  Key2[Key2["Numpad3"] = 99] = "Numpad3";
  Key2[Key2["Numpad4"] = 100] = "Numpad4";
  Key2[Key2["Numpad5"] = 101] = "Numpad5";
  Key2[Key2["Numpad6"] = 102] = "Numpad6";
  Key2[Key2["Numpad7"] = 103] = "Numpad7";
  Key2[Key2["Numpad8"] = 104] = "Numpad8";
  Key2[Key2["Numpad9"] = 105] = "Numpad9";
  Key2[Key2["Multiply"] = 106] = "Multiply";
  Key2[Key2["Add"] = 107] = "Add";
  Key2[Key2["Subtract"] = 109] = "Subtract";
  Key2[Key2["Decimal"] = 110] = "Decimal";
  Key2[Key2["Divide"] = 111] = "Divide";
  Key2[Key2["F1"] = 112] = "F1";
  Key2[Key2["F2"] = 113] = "F2";
  Key2[Key2["F3"] = 114] = "F3";
  Key2[Key2["F4"] = 115] = "F4";
  Key2[Key2["F5"] = 116] = "F5";
  Key2[Key2["F6"] = 117] = "F6";
  Key2[Key2["F7"] = 118] = "F7";
  Key2[Key2["F8"] = 119] = "F8";
  Key2[Key2["F9"] = 120] = "F9";
  Key2[Key2["F10"] = 121] = "F10";
  Key2[Key2["F11"] = 122] = "F11";
  Key2[Key2["F12"] = 123] = "F12";
  Key2[Key2["NumLock"] = 144] = "NumLock";
  Key2[Key2["ScrollLock"] = 145] = "ScrollLock";
  Key2[Key2["Semicolon"] = 186] = "Semicolon";
  Key2[Key2["Equals"] = 187] = "Equals";
  Key2[Key2["Comma"] = 188] = "Comma";
  Key2[Key2["Dash"] = 189] = "Dash";
  Key2[Key2["Period"] = 190] = "Period";
  Key2[Key2["ForwardSlash"] = 191] = "ForwardSlash";
  Key2[Key2["GraveAccent"] = 192] = "GraveAccent";
  Key2[Key2["OpenBracket"] = 219] = "OpenBracket";
  Key2[Key2["BackSlash"] = 220] = "BackSlash";
  Key2[Key2["CloseBracket"] = 221] = "CloseBracket";
  Key2[Key2["SingleQuote"] = 222] = "SingleQuote";
  return Key2;
}({});

// node_modules/@shopify/polaris/build/esm/components/Popover/Popover.css.js
var styles20 = {
  "Popover": "Polaris-Popover",
  "PopoverOverlay": "Polaris-Popover__PopoverOverlay",
  "PopoverOverlay-noAnimation": "Polaris-Popover__PopoverOverlay--noAnimation",
  "PopoverOverlay-entering": "Polaris-Popover__PopoverOverlay--entering",
  "PopoverOverlay-open": "Polaris-Popover__PopoverOverlay--open",
  "measuring": "Polaris-Popover--measuring",
  "PopoverOverlay-exiting": "Polaris-Popover__PopoverOverlay--exiting",
  "fullWidth": "Polaris-Popover--fullWidth",
  "Content": "Polaris-Popover__Content",
  "positionedAbove": "Polaris-Popover--positionedAbove",
  "positionedCover": "Polaris-Popover--positionedCover",
  "ContentContainer": "Polaris-Popover__ContentContainer",
  "Content-fullHeight": "Polaris-Popover__Content--fullHeight",
  "Content-fluidContent": "Polaris-Popover__Content--fluidContent",
  "Pane": "Polaris-Popover__Pane",
  "Pane-fixed": "Polaris-Popover__Pane--fixed",
  "Pane-subdued": "Polaris-Popover__Pane--subdued",
  "Pane-captureOverscroll": "Polaris-Popover__Pane--captureOverscroll",
  "Section": "Polaris-Popover__Section",
  "FocusTracker": "Polaris-Popover__FocusTracker",
  "PopoverOverlay-hideOnPrint": "Polaris-Popover__PopoverOverlay--hideOnPrint"
};

// node_modules/@shopify/polaris/build/esm/components/Popover/components/Pane/Pane.js
var import_react66 = __toESM(require_react());

// node_modules/@shopify/polaris/build/esm/components/Popover/components/Section/Section.js
var import_react59 = __toESM(require_react());
function Section2({
  children
}) {
  return /* @__PURE__ */ import_react59.default.createElement("div", {
    className: styles20.Section
  }, /* @__PURE__ */ import_react59.default.createElement(Box, {
    paddingInlineStart: "300",
    paddingInlineEnd: "300",
    paddingBlockStart: "200",
    paddingBlockEnd: "150"
  }, children));
}

// node_modules/@shopify/polaris/build/esm/components/Scrollable/Scrollable.js
var import_react65 = __toESM(require_react());

// node_modules/@shopify/polaris/build/esm/utilities/debounce.js
function debounce(func, waitArg, options) {
  let lastArgs;
  let lastThis;
  let maxWait;
  let result;
  let timerId;
  let lastCallTime;
  let lastInvokeTime = 0;
  let leading = false;
  let maxing = false;
  let trailing = true;
  const useRAF = !waitArg && waitArg !== 0;
  if (typeof func !== "function") {
    throw new TypeError("Expected a function");
  }
  const wait = waitArg || 0;
  if (typeof options === "object") {
    leading = Boolean(options.leading);
    maxing = "maxWait" in options;
    maxWait = maxing ? Math.max(Number(options.maxWait) || 0, wait) : void 0;
    trailing = "trailing" in options ? Boolean(options.trailing) : trailing;
  }
  function invokeFunc(time) {
    const args = lastArgs;
    const thisArg = lastThis;
    lastArgs = void 0;
    lastThis = void 0;
    lastInvokeTime = time;
    result = func.apply(thisArg, args);
    return result;
  }
  function startTimer(pendingFunc, wait2) {
    if (useRAF) {
      cancelAnimationFrame(timerId);
      return requestAnimationFrame(pendingFunc);
    }
    return setTimeout(pendingFunc, wait2);
  }
  function cancelTimer(id) {
    if (useRAF) {
      return cancelAnimationFrame(id);
    }
    clearTimeout(id);
  }
  function leadingEdge(time) {
    lastInvokeTime = time;
    timerId = startTimer(timerExpired, wait);
    return leading ? invokeFunc(time) : result;
  }
  function remainingWait(time) {
    const timeSinceLastCall = time - lastCallTime;
    const timeSinceLastInvoke = time - lastInvokeTime;
    const timeWaiting = wait - timeSinceLastCall;
    return maxing && maxWait ? Math.min(timeWaiting, maxWait - timeSinceLastInvoke) : timeWaiting;
  }
  function shouldInvoke(time) {
    const timeSinceLastCall = time - lastCallTime;
    const timeSinceLastInvoke = time - lastInvokeTime;
    return lastCallTime === void 0 || timeSinceLastCall >= wait || timeSinceLastCall < 0 || maxing && maxWait && timeSinceLastInvoke >= maxWait;
  }
  function timerExpired() {
    const time = Date.now();
    if (shouldInvoke(time)) {
      return trailingEdge(time);
    }
    timerId = startTimer(timerExpired, remainingWait(time));
  }
  function trailingEdge(time) {
    timerId = void 0;
    if (trailing && lastArgs) {
      return invokeFunc(time);
    }
    lastArgs = lastThis = void 0;
    return result;
  }
  function cancel() {
    if (timerId !== void 0) {
      cancelTimer(timerId);
    }
    lastInvokeTime = 0;
    lastArgs = lastCallTime = lastThis = timerId = void 0;
  }
  function flush() {
    return timerId === void 0 ? result : trailingEdge(Date.now());
  }
  function pending() {
    return timerId !== void 0;
  }
  function debounced(...args) {
    const time = Date.now();
    const isInvoking = shouldInvoke(time);
    lastArgs = args;
    lastThis = this;
    lastCallTime = time;
    if (isInvoking) {
      if (timerId === void 0) {
        return leadingEdge(lastCallTime);
      }
      if (maxing) {
        timerId = startTimer(timerExpired, wait);
        return invokeFunc(lastCallTime);
      }
    }
    if (timerId === void 0) {
      timerId = startTimer(timerExpired, wait);
    }
    return result;
  }
  debounced.cancel = cancel;
  debounced.flush = flush;
  debounced.pending = pending;
  return debounced;
}

// node_modules/@shopify/polaris/build/esm/utilities/use-lazy-ref.js
var import_react60 = __toESM(require_react());
var UNIQUE_IDENTIFIER = Symbol("unique_identifier");
function useLazyRef(initialValue) {
  const lazyRef = (0, import_react60.useRef)(UNIQUE_IDENTIFIER);
  if (lazyRef.current === UNIQUE_IDENTIFIER) {
    lazyRef.current = initialValue();
  }
  return lazyRef;
}

// node_modules/@shopify/polaris/build/esm/utilities/use-component-did-mount.js
var import_react61 = __toESM(require_react());
function useComponentDidMount(callback) {
  const isAfterInitialMount = useIsAfterInitialMount();
  const hasInvokedLifeCycle = (0, import_react61.useRef)(false);
  if (isAfterInitialMount && !hasInvokedLifeCycle.current) {
    hasInvokedLifeCycle.current = true;
    return callback();
  }
}

// node_modules/@shopify/polaris/build/esm/components/Scrollable/context.js
var import_react62 = __toESM(require_react());
var ScrollableContext = /* @__PURE__ */ (0, import_react62.createContext)(void 0);

// node_modules/@shopify/polaris/build/esm/components/Scrollable/Scrollable.css.js
var styles21 = {
  "Scrollable": "Polaris-Scrollable",
  "hasTopShadow": "Polaris-Scrollable--hasTopShadow",
  "hasBottomShadow": "Polaris-Scrollable--hasBottomShadow",
  "horizontal": "Polaris-Scrollable--horizontal",
  "vertical": "Polaris-Scrollable--vertical",
  "scrollbarWidthThin": "Polaris-Scrollable--scrollbarWidthThin",
  "scrollbarWidthNone": "Polaris-Scrollable--scrollbarWidthNone",
  "scrollbarWidthAuto": "Polaris-Scrollable--scrollbarWidthAuto",
  "scrollbarGutterStable": "Polaris-Scrollable--scrollbarGutterStable",
  "scrollbarGutterStableboth-edges": "Polaris-Scrollable__scrollbarGutterStableboth--edges"
};

// node_modules/@shopify/polaris/build/esm/components/Scrollable/components/ScrollTo/ScrollTo.js
var import_react63 = __toESM(require_react());
function ScrollTo() {
  const anchorNode = (0, import_react63.useRef)(null);
  const scrollToPosition = (0, import_react63.useContext)(ScrollableContext);
  (0, import_react63.useEffect)(() => {
    if (!scrollToPosition || !anchorNode.current) {
      return;
    }
    scrollToPosition(anchorNode.current.offsetTop);
  }, [scrollToPosition]);
  const id = (0, import_react63.useId)();
  return /* @__PURE__ */ import_react63.default.createElement("a", {
    id,
    ref: anchorNode
  });
}

// node_modules/@shopify/polaris/build/esm/utilities/geometry.js
var Rect = class {
  static get zero() {
    return new Rect();
  }
  constructor({
    top = 0,
    left = 0,
    width = 0,
    height = 0
  } = {}) {
    this.top = top;
    this.left = left;
    this.width = width;
    this.height = height;
  }
  get center() {
    return {
      x: this.left + this.width / 2,
      y: this.top + this.height / 2
    };
  }
};
function getRectForNode(node) {
  try {
    const rect = node.getBoundingClientRect();
    return new Rect({
      top: rect.top,
      left: rect.left,
      width: rect.width,
      height: rect.height
    });
  } catch (_) {
    return new Rect({
      width: window.innerWidth,
      height: window.innerHeight
    });
  }
}

// node_modules/@shopify/polaris/build/esm/utilities/sticky-manager/sticky-manager.js
var SIXTY_FPS = 1e3 / 60;
var StickyManager = class {
  constructor(container) {
    this.stickyItems = [];
    this.stuckItems = [];
    this.container = null;
    this.topBarOffset = 0;
    this.handleResize = debounce(() => {
      this.manageStickyItems();
    }, SIXTY_FPS, {
      leading: true,
      trailing: true,
      maxWait: SIXTY_FPS
    });
    this.handleScroll = debounce(() => {
      this.manageStickyItems();
    }, SIXTY_FPS, {
      leading: true,
      trailing: true,
      maxWait: SIXTY_FPS
    });
    if (container) {
      this.setContainer(container);
    }
  }
  registerStickyItem(stickyItem) {
    this.stickyItems.push(stickyItem);
  }
  unregisterStickyItem(nodeToRemove) {
    const nodeIndex = this.stickyItems.findIndex(({
      stickyNode
    }) => nodeToRemove === stickyNode);
    this.stickyItems.splice(nodeIndex, 1);
  }
  getStickyItem(node) {
    return this.stickyItems.find(({
      stickyNode
    }) => node === stickyNode);
  }
  setContainer(el) {
    this.container = el;
    if (isDocument(el)) {
      this.setTopBarOffset(el);
    }
    this.container.addEventListener("scroll", this.handleScroll);
    window.addEventListener("resize", this.handleResize);
    this.manageStickyItems();
  }
  removeScrollListener() {
    if (this.container) {
      this.container.removeEventListener("scroll", this.handleScroll);
      window.removeEventListener("resize", this.handleResize);
    }
  }
  manageStickyItems() {
    if (this.stickyItems.length <= 0) {
      return;
    }
    const scrollTop = this.container ? scrollTopFor(this.container) : 0;
    const containerTop = getRectForNode(this.container).top + this.topBarOffset;
    this.stickyItems.forEach((stickyItem) => {
      const {
        handlePositioning
      } = stickyItem;
      const {
        sticky,
        top,
        left,
        width
      } = this.evaluateStickyItem(stickyItem, scrollTop, containerTop);
      this.updateStuckItems(stickyItem, sticky);
      handlePositioning(sticky, top, left, width);
    });
  }
  evaluateStickyItem(stickyItem, scrollTop, containerTop) {
    const {
      stickyNode,
      placeHolderNode,
      boundingElement,
      offset,
      disableWhenStacked
    } = stickyItem;
    if (disableWhenStacked && stackedContent().matches) {
      return {
        sticky: false,
        top: 0,
        left: 0,
        width: "auto"
      };
    }
    const stickyOffset = offset ? this.getOffset(stickyNode) + parseInt(
      // Important: This will not update when the active theme changes.
      // Update this to `useTheme` once converted to a function component.
      themeDefault.space["space-500"],
      10
    ) : this.getOffset(stickyNode);
    const scrollPosition2 = scrollTop + stickyOffset;
    const placeHolderNodeCurrentTop = placeHolderNode.getBoundingClientRect().top - containerTop + scrollTop;
    const top = containerTop + stickyOffset;
    const width = placeHolderNode.getBoundingClientRect().width;
    const left = placeHolderNode.getBoundingClientRect().left;
    let sticky;
    if (boundingElement == null) {
      sticky = scrollPosition2 >= placeHolderNodeCurrentTop;
    } else {
      const stickyItemHeight = stickyNode.getBoundingClientRect().height || stickyNode.firstElementChild?.getBoundingClientRect().height || 0;
      const stickyItemBottomPosition = boundingElement.getBoundingClientRect().bottom - stickyItemHeight + scrollTop - containerTop;
      sticky = scrollPosition2 >= placeHolderNodeCurrentTop && scrollPosition2 < stickyItemBottomPosition;
    }
    return {
      sticky,
      top,
      left,
      width
    };
  }
  updateStuckItems(item, sticky) {
    const {
      stickyNode
    } = item;
    if (sticky && !this.isNodeStuck(stickyNode)) {
      this.addStuckItem(item);
    } else if (!sticky && this.isNodeStuck(stickyNode)) {
      this.removeStuckItem(item);
    }
  }
  addStuckItem(stickyItem) {
    this.stuckItems.push(stickyItem);
  }
  removeStuckItem(stickyItem) {
    const {
      stickyNode: nodeToRemove
    } = stickyItem;
    const nodeIndex = this.stuckItems.findIndex(({
      stickyNode
    }) => nodeToRemove === stickyNode);
    this.stuckItems.splice(nodeIndex, 1);
  }
  getOffset(node) {
    if (this.stuckItems.length === 0) {
      return 0;
    }
    let offset = 0;
    let count = 0;
    const stuckNodesLength = this.stuckItems.length;
    const nodeRect = getRectForNode(node);
    while (count < stuckNodesLength) {
      const stuckNode = this.stuckItems[count].stickyNode;
      if (stuckNode !== node) {
        const stuckNodeRect = getRectForNode(stuckNode);
        if (!horizontallyOverlaps(nodeRect, stuckNodeRect)) {
          offset += getRectForNode(stuckNode).height;
        }
      } else {
        break;
      }
      count++;
    }
    return offset;
  }
  isNodeStuck(node) {
    const nodeFound = this.stuckItems.findIndex(({
      stickyNode
    }) => node === stickyNode);
    return nodeFound >= 0;
  }
  setTopBarOffset(container) {
    const topbarElement = container.querySelector(`:not(${scrollable.selector}) ${dataPolarisTopBar.selector}`);
    this.topBarOffset = topbarElement ? topbarElement.clientHeight : 0;
  }
};
function isDocument(node) {
  return node === document;
}
function scrollTopFor(container) {
  return isDocument(container) ? document.body.scrollTop || document.documentElement.scrollTop : container.scrollTop;
}
function horizontallyOverlaps(rect1, rect2) {
  const rect1Left = rect1.left;
  const rect1Right = rect1.left + rect1.width;
  const rect2Left = rect2.left;
  const rect2Right = rect2.left + rect2.width;
  return rect2Right < rect1Left || rect1Right < rect2Left;
}

// node_modules/@shopify/polaris/build/esm/utilities/sticky-manager/context.js
var import_react64 = __toESM(require_react());
var StickyManagerContext = /* @__PURE__ */ (0, import_react64.createContext)(void 0);

// node_modules/@shopify/polaris/build/esm/components/Scrollable/Scrollable.js
var MAX_SCROLL_HINT_DISTANCE = 100;
var LOW_RES_BUFFER = 2;
var ScrollableComponent = /* @__PURE__ */ (0, import_react65.forwardRef)(({
  children,
  className,
  horizontal = true,
  vertical = true,
  shadow,
  hint,
  focusable,
  scrollbarWidth = "thin",
  scrollbarGutter,
  onScrolledToBottom,
  ...rest
}, forwardedRef) => {
  const [topShadow, setTopShadow] = (0, import_react65.useState)(false);
  const [bottomShadow, setBottomShadow] = (0, import_react65.useState)(false);
  const stickyManager = useLazyRef(() => new StickyManager());
  const scrollArea = (0, import_react65.useRef)(null);
  const scrollTo = (0, import_react65.useCallback)((scrollY, options = {}) => {
    const optionsBehavior = options.behavior || "smooth";
    const behavior = prefersReducedMotion() ? "auto" : optionsBehavior;
    scrollArea.current?.scrollTo({
      top: scrollY,
      behavior
    });
  }, []);
  const defaultRef = (0, import_react65.useRef)();
  (0, import_react65.useImperativeHandle)(forwardedRef || defaultRef, () => ({
    scrollTo
  }));
  const handleScroll = (0, import_react65.useCallback)(() => {
    const currentScrollArea = scrollArea.current;
    if (!currentScrollArea) {
      return;
    }
    requestAnimationFrame(() => {
      const {
        scrollTop,
        clientHeight,
        scrollHeight
      } = currentScrollArea;
      const canScroll = Boolean(scrollHeight > clientHeight);
      const isBelowTopOfScroll = Boolean(scrollTop > 0);
      const isAtBottomOfScroll = Boolean(scrollTop + clientHeight >= scrollHeight - LOW_RES_BUFFER);
      setTopShadow(isBelowTopOfScroll);
      setBottomShadow(!isAtBottomOfScroll);
      if (canScroll && isAtBottomOfScroll && onScrolledToBottom) {
        onScrolledToBottom();
      }
    });
  }, [onScrolledToBottom]);
  useComponentDidMount(() => {
    handleScroll();
    if (hint) {
      requestAnimationFrame(() => performScrollHint(scrollArea.current));
    }
  });
  (0, import_react65.useEffect)(() => {
    const currentScrollArea = scrollArea.current;
    if (!currentScrollArea) {
      return;
    }
    const handleResize = debounce(handleScroll, 50, {
      trailing: true
    });
    stickyManager.current?.setContainer(currentScrollArea);
    currentScrollArea.addEventListener("scroll", handleScroll);
    globalThis.addEventListener("resize", handleResize);
    return () => {
      currentScrollArea.removeEventListener("scroll", handleScroll);
      globalThis.removeEventListener("resize", handleResize);
    };
  }, [stickyManager, handleScroll]);
  const finalClassName = classNames(className, styles21.Scrollable, vertical && styles21.vertical, horizontal && styles21.horizontal, shadow && topShadow && styles21.hasTopShadow, shadow && bottomShadow && styles21.hasBottomShadow, scrollbarWidth && styles21[variationName("scrollbarWidth", scrollbarWidth)], scrollbarGutter && styles21[variationName("scrollbarGutter", scrollbarGutter.replace(" ", ""))]);
  return /* @__PURE__ */ import_react65.default.createElement(ScrollableContext.Provider, {
    value: scrollTo
  }, /* @__PURE__ */ import_react65.default.createElement(StickyManagerContext.Provider, {
    value: stickyManager.current
  }, /* @__PURE__ */ import_react65.default.createElement("div", Object.assign({
    className: finalClassName
  }, scrollable.props, rest, {
    ref: scrollArea,
    tabIndex: focusable ? 0 : void 0
  }), children)));
});
ScrollableComponent.displayName = "Scrollable";
function prefersReducedMotion() {
  try {
    return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  } catch (err) {
    return false;
  }
}
function performScrollHint(elem) {
  if (!elem || prefersReducedMotion()) {
    return;
  }
  const scrollableDistance = elem.scrollHeight - elem.clientHeight;
  const distanceToPeek = Math.min(MAX_SCROLL_HINT_DISTANCE, scrollableDistance) - LOW_RES_BUFFER;
  const goBackToTop = () => {
    requestAnimationFrame(() => {
      if (elem.scrollTop >= distanceToPeek) {
        elem.removeEventListener("scroll", goBackToTop);
        elem.scrollTo({
          top: 0,
          behavior: "smooth"
        });
      }
    });
  };
  elem.addEventListener("scroll", goBackToTop);
  elem.scrollTo({
    top: MAX_SCROLL_HINT_DISTANCE,
    behavior: "smooth"
  });
}
var forNode = (node) => {
  const closestElement = node.closest(scrollable.selector);
  return closestElement instanceof HTMLElement ? closestElement : document;
};
var Scrollable = ScrollableComponent;
Scrollable.ScrollTo = ScrollTo;
Scrollable.forNode = forNode;

// node_modules/@shopify/polaris/build/esm/components/Popover/components/Pane/Pane.js
function Pane({
  captureOverscroll = false,
  fixed,
  sectioned,
  children,
  height,
  maxHeight,
  minHeight,
  subdued,
  onScrolledToBottom
}) {
  const className = classNames(styles20.Pane, fixed && styles20["Pane-fixed"], subdued && styles20["Pane-subdued"], captureOverscroll && styles20["Pane-captureOverscroll"]);
  const content = sectioned ? wrapWithComponent(children, Section2, {}) : children;
  const style = {
    height,
    maxHeight,
    minHeight
  };
  return fixed ? /* @__PURE__ */ import_react66.default.createElement("div", {
    style,
    className
  }, content) : /* @__PURE__ */ import_react66.default.createElement(Scrollable, {
    shadow: true,
    className,
    style,
    onScrolledToBottom,
    scrollbarWidth: "thin"
  }, content);
}

// node_modules/@shopify/polaris/build/esm/utilities/portals/context.js
var import_react67 = __toESM(require_react());
var PortalsManagerContext = /* @__PURE__ */ (0, import_react67.createContext)(void 0);

// node_modules/@shopify/polaris/build/esm/components/EventListener/EventListener.js
var import_react68 = __toESM(require_react());
var EventListener = class extends import_react68.PureComponent {
  componentDidMount() {
    this.attachListener();
  }
  componentDidUpdate({
    passive,
    ...detachProps
  }) {
    this.detachListener(detachProps);
    this.attachListener();
  }
  componentWillUnmount() {
    this.detachListener();
  }
  render() {
    return null;
  }
  attachListener() {
    const {
      event,
      handler,
      capture,
      passive,
      window: customWindow
    } = this.props;
    const window2 = customWindow || globalThis.window;
    window2.addEventListener(event, handler, {
      capture,
      passive
    });
  }
  detachListener(prevProps) {
    const {
      event,
      handler,
      capture,
      window: customWindow
    } = prevProps || this.props;
    const window2 = customWindow || globalThis.window;
    window2.removeEventListener(event, handler, capture);
  }
};

// node_modules/@shopify/polaris/build/esm/components/KeypressListener/KeypressListener.js
var import_react69 = __toESM(require_react());
function KeypressListener({
  keyCode,
  handler,
  keyEvent = "keyup",
  options,
  useCapture,
  document: ownerDocument = globalThis.document
}) {
  const tracked = (0, import_react69.useRef)({
    handler,
    keyCode
  });
  useIsomorphicLayoutEffect(() => {
    tracked.current = {
      handler,
      keyCode
    };
  }, [handler, keyCode]);
  const handleKeyEvent = (0, import_react69.useCallback)((event) => {
    const {
      handler: handler2,
      keyCode: keyCode2
    } = tracked.current;
    if (event.keyCode === keyCode2) {
      handler2(event);
    }
  }, []);
  (0, import_react69.useEffect)(() => {
    ownerDocument.addEventListener(keyEvent, handleKeyEvent, useCapture || options);
    return () => {
      ownerDocument.removeEventListener(keyEvent, handleKeyEvent, useCapture || options);
    };
  }, [keyEvent, handleKeyEvent, useCapture, options, ownerDocument]);
  return null;
}

// node_modules/@shopify/polaris/build/esm/components/PositionedOverlay/PositionedOverlay.js
var import_react70 = __toESM(require_react());

// node_modules/@shopify/polaris/build/esm/components/PositionedOverlay/utilities/math.js
function calculateVerticalPosition(activatorRect, overlayRect, overlayMargins, scrollableContainerRect, containerRect, preferredPosition, fixed, topBarOffset = 0) {
  const activatorTop = activatorRect.top;
  const activatorBottom = activatorTop + activatorRect.height;
  const spaceAbove = activatorRect.top - topBarOffset;
  const spaceBelow = containerRect.height - activatorRect.top - activatorRect.height;
  const desiredHeight = overlayRect.height;
  const verticalMargins = overlayMargins.activator + overlayMargins.container;
  const minimumSpaceToScroll = overlayMargins.container;
  const distanceToTopScroll = activatorRect.top - Math.max(scrollableContainerRect.top, 0);
  const distanceToBottomScroll = containerRect.top + Math.min(containerRect.height, scrollableContainerRect.top + scrollableContainerRect.height) - (activatorRect.top + activatorRect.height);
  const enoughSpaceFromTopScroll = distanceToTopScroll >= minimumSpaceToScroll;
  const enoughSpaceFromBottomScroll = distanceToBottomScroll >= minimumSpaceToScroll;
  const heightIfAbove = Math.min(spaceAbove, desiredHeight);
  const heightIfBelow = Math.min(spaceBelow, desiredHeight);
  const heightIfAboveCover = Math.min(spaceAbove + activatorRect.height, desiredHeight);
  const heightIfBelowCover = Math.min(spaceBelow + activatorRect.height, desiredHeight);
  const containerRectTop = fixed ? 0 : containerRect.top;
  const positionIfAbove = {
    height: heightIfAbove - verticalMargins,
    top: activatorTop + containerRectTop - heightIfAbove,
    positioning: "above"
  };
  const positionIfBelow = {
    height: heightIfBelow - verticalMargins,
    top: activatorBottom + containerRectTop,
    positioning: "below"
  };
  const positionIfCoverBelow = {
    height: heightIfBelowCover - verticalMargins,
    top: activatorTop + containerRectTop,
    positioning: "cover"
  };
  const positionIfCoverAbove = {
    height: heightIfAboveCover - verticalMargins,
    top: activatorTop + containerRectTop - heightIfAbove + activatorRect.height + verticalMargins,
    positioning: "cover"
  };
  if (preferredPosition === "above") {
    return (enoughSpaceFromTopScroll || distanceToTopScroll >= distanceToBottomScroll && !enoughSpaceFromBottomScroll) && (spaceAbove > desiredHeight || spaceAbove > spaceBelow) ? positionIfAbove : positionIfBelow;
  }
  if (preferredPosition === "below") {
    return (enoughSpaceFromBottomScroll || distanceToBottomScroll >= distanceToTopScroll && !enoughSpaceFromTopScroll) && (spaceBelow > desiredHeight || spaceBelow > spaceAbove) ? positionIfBelow : positionIfAbove;
  }
  if (preferredPosition === "cover") {
    return (enoughSpaceFromBottomScroll || distanceToBottomScroll >= distanceToTopScroll && !enoughSpaceFromTopScroll) && (spaceBelow + activatorRect.height > desiredHeight || spaceBelow > spaceAbove) ? positionIfCoverBelow : positionIfCoverAbove;
  }
  if (enoughSpaceFromTopScroll && enoughSpaceFromBottomScroll) {
    return spaceAbove > spaceBelow ? positionIfAbove : positionIfBelow;
  }
  return distanceToTopScroll > minimumSpaceToScroll ? positionIfAbove : positionIfBelow;
}
function calculateHorizontalPosition(activatorRect, overlayRect, containerRect, overlayMargins, preferredAlignment) {
  const maximum = containerRect.width - overlayRect.width;
  if (preferredAlignment === "left") {
    return Math.min(maximum, Math.max(0, activatorRect.left - overlayMargins.horizontal));
  } else if (preferredAlignment === "right") {
    const activatorRight = containerRect.width - (activatorRect.left + activatorRect.width);
    return Math.min(maximum, Math.max(0, activatorRight - overlayMargins.horizontal));
  }
  return Math.min(maximum, Math.max(0, activatorRect.center.x - overlayRect.width / 2));
}
function rectIsOutsideOfRect(inner, outer) {
  const {
    center
  } = inner;
  return center.y < outer.top || center.y > outer.top + outer.height;
}
function intersectionWithViewport(rect, viewport = windowRect()) {
  const top = Math.max(rect.top, 0);
  const left = Math.max(rect.left, 0);
  const bottom = Math.min(rect.top + rect.height, viewport.height);
  const right = Math.min(rect.left + rect.width, viewport.width);
  return new Rect({
    top,
    left,
    height: bottom - top,
    width: right - left
  });
}
function windowRect(node) {
  const document2 = node?.ownerDocument || globalThis.document;
  const window2 = document2.defaultView || globalThis.window;
  return new Rect({
    top: window2.scrollY,
    left: window2.scrollX,
    height: window2.innerHeight,
    width: document2.body.clientWidth
  });
}

// node_modules/@shopify/polaris/build/esm/components/PositionedOverlay/PositionedOverlay.css.js
var styles22 = {
  "PositionedOverlay": "Polaris-PositionedOverlay",
  "fixed": "Polaris-PositionedOverlay--fixed",
  "calculating": "Polaris-PositionedOverlay--calculating",
  "preventInteraction": "Polaris-PositionedOverlay--preventInteraction"
};

// node_modules/@shopify/polaris/build/esm/components/PositionedOverlay/PositionedOverlay.js
var OBSERVER_CONFIG = {
  childList: true,
  subtree: true,
  characterData: true,
  attributeFilter: ["style"]
};
var PositionedOverlay = class extends import_react70.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      measuring: true,
      activatorRect: getRectForNode(this.props.activator),
      right: void 0,
      left: void 0,
      top: 0,
      height: 0,
      width: null,
      positioning: "below",
      zIndex: null,
      outsideScrollableContainer: false,
      lockPosition: false,
      chevronOffset: 0
    };
    this.overlay = null;
    this.scrollableContainers = [];
    this.overlayDetails = () => {
      const {
        measuring,
        left,
        right,
        positioning,
        height,
        activatorRect,
        chevronOffset
      } = this.state;
      return {
        measuring,
        left,
        right,
        desiredHeight: height,
        positioning,
        activatorRect,
        chevronOffset
      };
    };
    this.setOverlay = (node) => {
      this.overlay = node;
    };
    this.setScrollableContainers = () => {
      const containers = [];
      let scrollableContainer = Scrollable.forNode(this.props.activator);
      if (scrollableContainer) {
        containers.push(scrollableContainer);
        while (scrollableContainer?.parentElement) {
          scrollableContainer = Scrollable.forNode(scrollableContainer.parentElement);
          containers.push(scrollableContainer);
        }
      }
      this.scrollableContainers = containers;
    };
    this.registerScrollHandlers = () => {
      this.scrollableContainers.forEach((node) => {
        node.addEventListener("scroll", this.handleMeasurement);
      });
    };
    this.unregisterScrollHandlers = () => {
      this.scrollableContainers.forEach((node) => {
        node.removeEventListener("scroll", this.handleMeasurement);
      });
    };
    this.handleMeasurement = () => {
      const {
        lockPosition,
        top
      } = this.state;
      this.observer.disconnect();
      this.setState(({
        left,
        top: top2,
        right
      }) => ({
        left,
        right,
        top: top2,
        height: 0,
        positioning: "below",
        measuring: true
      }), () => {
        if (this.overlay == null || this.firstScrollableContainer == null) {
          return;
        }
        const {
          activator,
          preferredPosition = "below",
          preferredAlignment = "center",
          onScrollOut,
          fullWidth,
          fixed,
          preferInputActivator = true
        } = this.props;
        const document2 = activator.ownerDocument;
        const preferredActivator = preferInputActivator ? activator.querySelector("input") || activator : activator;
        const activatorRect = getRectForNode(preferredActivator);
        const currentOverlayRect = getRectForNode(this.overlay);
        const scrollableElement = isDocument2(this.firstScrollableContainer) ? document2.body : this.firstScrollableContainer;
        const scrollableContainerRect = getRectForNode(scrollableElement);
        const overlayRect = fullWidth || preferredPosition === "cover" ? new Rect({
          ...currentOverlayRect,
          width: activatorRect.width
        }) : currentOverlayRect;
        if (scrollableElement === document2.body) {
          scrollableContainerRect.height = document2.body.scrollHeight;
        }
        let topBarOffset = 0;
        const topBarElement = scrollableElement.querySelector(`${dataPolarisTopBar.selector}`);
        if (topBarElement) {
          topBarOffset = topBarElement.clientHeight;
        }
        let overlayMargins = {
          activator: 0,
          container: 0,
          horizontal: 0
        };
        if (this.overlay.firstElementChild) {
          const nodeMargins = getMarginsForNode(this.overlay.firstElementChild);
          overlayMargins = nodeMargins;
        }
        const containerRect = windowRect(activator);
        const zIndexForLayer = getZIndexForLayerFromNode(activator);
        const zIndex = zIndexForLayer == null ? zIndexForLayer : zIndexForLayer + 1;
        const verticalPosition = calculateVerticalPosition(activatorRect, overlayRect, overlayMargins, scrollableContainerRect, containerRect, preferredPosition, fixed, topBarOffset);
        const horizontalPosition = calculateHorizontalPosition(activatorRect, overlayRect, containerRect, overlayMargins, preferredAlignment);
        const chevronOffset = activatorRect.center.x - horizontalPosition + overlayMargins.horizontal * 2;
        this.setState({
          measuring: false,
          activatorRect: getRectForNode(activator),
          left: preferredAlignment !== "right" ? horizontalPosition : void 0,
          right: preferredAlignment === "right" ? horizontalPosition : void 0,
          top: lockPosition ? top : verticalPosition.top,
          lockPosition: Boolean(fixed),
          height: verticalPosition.height || 0,
          width: fullWidth || preferredPosition === "cover" ? overlayRect.width : null,
          positioning: verticalPosition.positioning,
          outsideScrollableContainer: onScrollOut != null && rectIsOutsideOfRect(activatorRect, intersectionWithViewport(scrollableContainerRect, containerRect)),
          zIndex,
          chevronOffset
        }, () => {
          if (!this.overlay)
            return;
          this.observer.observe(this.overlay, OBSERVER_CONFIG);
          this.observer.observe(activator, OBSERVER_CONFIG);
        });
      });
    };
    this.observer = new MutationObserver(this.handleMeasurement);
  }
  componentDidMount() {
    this.setScrollableContainers();
    if (this.scrollableContainers.length && !this.props.fixed) {
      this.registerScrollHandlers();
    }
    this.handleMeasurement();
  }
  componentWillUnmount() {
    this.observer.disconnect();
    if (this.scrollableContainers.length && !this.props.fixed) {
      this.unregisterScrollHandlers();
    }
  }
  componentDidUpdate() {
    const {
      outsideScrollableContainer,
      top
    } = this.state;
    const {
      onScrollOut,
      active
    } = this.props;
    if (active && onScrollOut != null && top !== 0 && outsideScrollableContainer) {
      onScrollOut();
    }
  }
  render() {
    const {
      left,
      right,
      top,
      zIndex,
      width
    } = this.state;
    const {
      render,
      fixed,
      preventInteraction,
      classNames: propClassNames,
      zIndexOverride
    } = this.props;
    const style = {
      top: top == null || isNaN(top) ? void 0 : top,
      left: left == null || isNaN(left) ? void 0 : left,
      right: right == null || isNaN(right) ? void 0 : right,
      width: width == null || isNaN(width) ? void 0 : width,
      zIndex: zIndexOverride || zIndex || void 0
    };
    const className = classNames(styles22.PositionedOverlay, fixed && styles22.fixed, preventInteraction && styles22.preventInteraction, propClassNames);
    return /* @__PURE__ */ import_react70.default.createElement("div", {
      className,
      style,
      ref: this.setOverlay
    }, /* @__PURE__ */ import_react70.default.createElement(EventListener, {
      event: "resize",
      handler: this.handleMeasurement,
      window: this.overlay?.ownerDocument.defaultView
    }), render(this.overlayDetails()));
  }
  get firstScrollableContainer() {
    return this.scrollableContainers[0] ?? null;
  }
  forceUpdatePosition() {
    requestAnimationFrame(this.handleMeasurement);
  }
};
function getMarginsForNode(node) {
  const window2 = node.ownerDocument.defaultView || globalThis.window;
  const nodeStyles = window2.getComputedStyle(node);
  return {
    activator: parseFloat(nodeStyles.marginTop || "0"),
    container: parseFloat(nodeStyles.marginBottom || "0"),
    horizontal: parseFloat(nodeStyles.marginLeft || "0")
  };
}
function getZIndexForLayerFromNode(node) {
  const layerNode = node.closest(layer.selector) || node.ownerDocument.body;
  const zIndex = layerNode === node.ownerDocument.body ? "auto" : parseInt(window.getComputedStyle(layerNode).zIndex || "0", 10);
  return zIndex === "auto" || isNaN(zIndex) ? null : zIndex;
}
function isDocument2(node) {
  return node.ownerDocument === null;
}

// node_modules/@shopify/polaris/build/esm/components/Popover/components/PopoverOverlay/PopoverOverlay.js
var PopoverCloseSource = /* @__PURE__ */ function(PopoverCloseSource2) {
  PopoverCloseSource2[PopoverCloseSource2["Click"] = 0] = "Click";
  PopoverCloseSource2[PopoverCloseSource2["EscapeKeypress"] = 1] = "EscapeKeypress";
  PopoverCloseSource2[PopoverCloseSource2["FocusOut"] = 2] = "FocusOut";
  PopoverCloseSource2[PopoverCloseSource2["ScrollOut"] = 3] = "ScrollOut";
  return PopoverCloseSource2;
}({});
var TransitionStatus = /* @__PURE__ */ function(TransitionStatus2) {
  TransitionStatus2["Entering"] = "entering";
  TransitionStatus2["Entered"] = "entered";
  TransitionStatus2["Exiting"] = "exiting";
  TransitionStatus2["Exited"] = "exited";
  return TransitionStatus2;
}(TransitionStatus || {});
var PopoverOverlay = class extends import_react71.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      transitionStatus: this.props.active ? TransitionStatus.Entering : TransitionStatus.Exited
    };
    this.contentNode = /* @__PURE__ */ (0, import_react71.createRef)();
    this.renderPopover = (overlayDetails) => {
      const {
        measuring,
        desiredHeight,
        positioning
      } = overlayDetails;
      const {
        id,
        children,
        sectioned,
        fullWidth,
        fullHeight,
        fluidContent,
        hideOnPrint,
        autofocusTarget,
        captureOverscroll
      } = this.props;
      const isCovering = positioning === "cover";
      const className = classNames(styles20.Popover, measuring && styles20.measuring, (fullWidth || isCovering) && styles20.fullWidth, hideOnPrint && styles20["PopoverOverlay-hideOnPrint"], positioning && styles20[variationName("positioned", positioning)]);
      const contentStyles = measuring ? void 0 : {
        height: desiredHeight
      };
      const contentClassNames = classNames(styles20.Content, fullHeight && styles20["Content-fullHeight"], fluidContent && styles20["Content-fluidContent"]);
      const {
        window: window2
      } = this.state;
      return /* @__PURE__ */ import_react71.default.createElement("div", Object.assign({
        className
      }, overlay.props), /* @__PURE__ */ import_react71.default.createElement(EventListener, {
        event: "click",
        handler: this.handleClick,
        window: window2
      }), /* @__PURE__ */ import_react71.default.createElement(EventListener, {
        event: "touchstart",
        handler: this.handleClick,
        window: window2
      }), /* @__PURE__ */ import_react71.default.createElement(KeypressListener, {
        keyCode: Key.Escape,
        handler: this.handleEscape,
        document: window2?.document
      }), /* @__PURE__ */ import_react71.default.createElement("div", {
        className: styles20.FocusTracker,
        tabIndex: 0,
        onFocus: this.handleFocusFirstItem
      }), /* @__PURE__ */ import_react71.default.createElement("div", {
        className: styles20.ContentContainer
      }, /* @__PURE__ */ import_react71.default.createElement("div", {
        id,
        tabIndex: autofocusTarget === "none" ? void 0 : -1,
        className: contentClassNames,
        style: contentStyles,
        ref: this.contentNode
      }, renderPopoverContent(children, {
        captureOverscroll,
        sectioned
      }))), /* @__PURE__ */ import_react71.default.createElement("div", {
        className: styles20.FocusTracker,
        tabIndex: 0,
        onFocus: this.handleFocusLastItem
      }));
    };
    this.handleClick = (event) => {
      const target = event.target;
      const {
        contentNode,
        props: {
          activator,
          onClose,
          preventCloseOnChildOverlayClick
        }
      } = this;
      const composedPath = event.composedPath();
      const wasDescendant = preventCloseOnChildOverlayClick ? wasPolarisPortalDescendant(composedPath, this.context.container) : wasContentNodeDescendant(composedPath, contentNode);
      const isActivatorDescendant = nodeContainsDescendant(activator, target);
      if (wasDescendant || isActivatorDescendant || this.state.transitionStatus !== TransitionStatus.Entered) {
        return;
      }
      onClose(PopoverCloseSource.Click);
    };
    this.handleScrollOut = () => {
      this.props.onClose(PopoverCloseSource.ScrollOut);
    };
    this.handleEscape = (event) => {
      const target = event.target;
      const {
        contentNode,
        props: {
          activator
        }
      } = this;
      const composedPath = event.composedPath();
      const wasDescendant = wasContentNodeDescendant(composedPath, contentNode);
      const isActivatorDescendant = nodeContainsDescendant(activator, target);
      if (wasDescendant || isActivatorDescendant) {
        this.props.onClose(PopoverCloseSource.EscapeKeypress);
      }
    };
    this.handleFocusFirstItem = () => {
      this.props.onClose(PopoverCloseSource.FocusOut);
    };
    this.handleFocusLastItem = () => {
      this.props.onClose(PopoverCloseSource.FocusOut);
    };
    this.overlayRef = /* @__PURE__ */ (0, import_react71.createRef)();
  }
  forceUpdatePosition() {
    this.overlayRef.current?.forceUpdatePosition();
  }
  changeTransitionStatus(transitionStatus, cb) {
    this.setState({
      transitionStatus
    }, cb);
    this.contentNode.current && this.contentNode.current.getBoundingClientRect();
  }
  componentDidMount() {
    if (this.props.active) {
      this.focusContent();
      this.changeTransitionStatus(TransitionStatus.Entered);
    }
    this.observer = new ResizeObserver(() => {
      this.setState({
        /**
         * This is a workaround to enable event listeners to be
         * re-attached when moving from one document to another
         * when using a React portal across iframes.
         * Using a resize observer works because when the clientWidth
         * will go from 0 to the real width after the activator
         * gets rendered in its new place.
         */
        window: this.props.activator.ownerDocument.defaultView
      });
    });
    this.observer.observe(this.props.activator);
  }
  componentDidUpdate(oldProps) {
    if (this.props.active && !oldProps.active) {
      this.focusContent();
      this.changeTransitionStatus(TransitionStatus.Entering, () => {
        this.clearTransitionTimeout();
        this.enteringTimer = window.setTimeout(() => {
          this.setState({
            transitionStatus: TransitionStatus.Entered
          });
        }, parseInt(themeDefault.motion["motion-duration-100"], 10));
      });
    }
    if (!this.props.active && oldProps.active) {
      this.clearTransitionTimeout();
      this.setState({
        transitionStatus: TransitionStatus.Exited
      });
    }
    if (this.props.activator !== oldProps.activator) {
      this.observer?.unobserve(oldProps.activator);
      this.observer?.observe(this.props.activator);
    }
  }
  componentWillUnmount() {
    this.clearTransitionTimeout();
    this.observer?.disconnect();
  }
  render() {
    const {
      active,
      activator,
      fullWidth,
      preferredPosition = "below",
      preferredAlignment = "center",
      preferInputActivator = true,
      fixed,
      zIndexOverride
    } = this.props;
    const {
      transitionStatus
    } = this.state;
    if (transitionStatus === TransitionStatus.Exited && !active)
      return null;
    const className = classNames(styles20.PopoverOverlay, transitionStatus === TransitionStatus.Entering && styles20["PopoverOverlay-entering"], transitionStatus === TransitionStatus.Entered && styles20["PopoverOverlay-open"], transitionStatus === TransitionStatus.Exiting && styles20["PopoverOverlay-exiting"], preferredPosition === "cover" && styles20["PopoverOverlay-noAnimation"]);
    return /* @__PURE__ */ import_react71.default.createElement(PositionedOverlay, {
      ref: this.overlayRef,
      fullWidth,
      active,
      activator,
      preferInputActivator,
      preferredPosition,
      preferredAlignment,
      render: this.renderPopover.bind(this),
      fixed,
      onScrollOut: this.handleScrollOut,
      classNames: className,
      zIndexOverride
    });
  }
  clearTransitionTimeout() {
    if (this.enteringTimer) {
      window.clearTimeout(this.enteringTimer);
    }
  }
  focusContent() {
    const {
      autofocusTarget = "container"
    } = this.props;
    if (autofocusTarget === "none" || this.contentNode == null) {
      return;
    }
    requestAnimationFrame(() => {
      if (this.contentNode.current == null) {
        return;
      }
      const focusableChild = findFirstKeyboardFocusableNode(this.contentNode.current);
      if (focusableChild && autofocusTarget === "first-node") {
        focusableChild.focus({
          preventScroll: true
        });
      } else {
        this.contentNode.current.focus({
          preventScroll: true
        });
      }
    });
  }
};
PopoverOverlay.contextType = PortalsManagerContext;
function renderPopoverContent(children, props) {
  const childrenArray = import_react71.Children.toArray(children);
  if (isElementOfType(childrenArray[0], Pane)) {
    return childrenArray;
  }
  return wrapWithComponent(childrenArray, Pane, props);
}
function nodeContainsDescendant(rootNode, descendant) {
  if (rootNode === descendant) {
    return true;
  }
  let parent = descendant.parentNode;
  while (parent != null) {
    if (parent === rootNode) {
      return true;
    }
    parent = parent.parentNode;
  }
  return false;
}
function wasContentNodeDescendant(composedPath, contentNode) {
  return contentNode.current != null && composedPath.includes(contentNode.current);
}
function wasPolarisPortalDescendant(composedPath, portalsContainerElement) {
  return composedPath.some((eventTarget) => eventTarget instanceof Node && portalsContainerElement?.contains(eventTarget));
}

// node_modules/@shopify/polaris/build/esm/components/Portal/Portal.js
var import_react75 = __toESM(require_react());
var import_react_dom = __toESM(require_react_dom());

// node_modules/@shopify/polaris/build/esm/utilities/use-theme.js
var import_react72 = __toESM(require_react());
var ThemeContext = /* @__PURE__ */ (0, import_react72.createContext)(null);
var ThemeNameContext = /* @__PURE__ */ (0, import_react72.createContext)(null);
function getTheme(themeName) {
  return themes[themeName];
}
function useTheme() {
  const theme = (0, import_react72.useContext)(ThemeContext);
  if (!theme) {
    throw new Error("No theme was provided. Your application must be wrapped in an <AppProvider> or <ThemeProvider> component. See https://polaris.shopify.com/components/app-provider for implementation instructions.");
  }
  return theme;
}
function useThemeName() {
  const themeName = (0, import_react72.useContext)(ThemeNameContext);
  if (!themeName) {
    throw new Error("No themeName was provided. Your application must be wrapped in an <AppProvider> or <ThemeProvider> component. See https://polaris.shopify.com/components/app-provider for implementation instructions.");
  }
  return themeName;
}

// node_modules/@shopify/polaris/build/esm/utilities/portals/hooks.js
var import_react73 = __toESM(require_react());
function usePortalsManager() {
  const portalsManager = (0, import_react73.useContext)(PortalsManagerContext);
  if (!portalsManager) {
    throw new Error("No portals manager was provided. Your application must be wrapped in an <AppProvider> component. See https://polaris.shopify.com/components/app-provider for implementation instructions.");
  }
  return portalsManager;
}

// node_modules/@shopify/polaris/build/esm/components/ThemeProvider/ThemeProvider.js
var import_react74 = __toESM(require_react());

// node_modules/@shopify/polaris/build/esm/components/ThemeProvider/ThemeProvider.css.js
var styles23 = {
  "themeContainer": "Polaris-ThemeProvider--themeContainer"
};

// node_modules/@shopify/polaris/build/esm/components/ThemeProvider/ThemeProvider.js
var themeNamesLocal = ["light", "dark-experimental"];
var isThemeNameLocal = (name) => themeNamesLocal.includes(name);
function ThemeProvider(props) {
  const {
    as: ThemeContainer = "div",
    children,
    className,
    theme: themeName = themeNameDefault
  } = props;
  return /* @__PURE__ */ import_react74.default.createElement(ThemeNameContext.Provider, {
    value: themeName
  }, /* @__PURE__ */ import_react74.default.createElement(ThemeContext.Provider, {
    value: getTheme(themeName)
  }, /* @__PURE__ */ import_react74.default.createElement(ThemeContainer, {
    "data-portal-id": props["data-portal-id"],
    className: classNames(createThemeClassName(themeName), styles23.themeContainer, className)
  }, children)));
}

// node_modules/@shopify/polaris/build/esm/components/Portal/Portal.js
function Portal({
  children,
  idPrefix = "",
  onPortalCreated = noop2
}) {
  const themeName = useThemeName();
  const {
    container
  } = usePortalsManager();
  const uniqueId = (0, import_react75.useId)();
  const portalId = idPrefix !== "" ? `${idPrefix}-${uniqueId}` : uniqueId;
  (0, import_react75.useEffect)(() => {
    onPortalCreated();
  }, [onPortalCreated]);
  return container ? /* @__PURE__ */ (0, import_react_dom.createPortal)(/* @__PURE__ */ import_react75.default.createElement(ThemeProvider, {
    theme: isThemeNameLocal(themeName) ? themeName : themeNameDefault,
    "data-portal-id": portalId
  }, children), container) : null;
}
function noop2() {
}

// node_modules/@shopify/polaris/build/esm/components/Popover/Popover.js
var PopoverComponent = /* @__PURE__ */ (0, import_react76.forwardRef)(function Popover({
  activatorWrapper = "div",
  children,
  onClose,
  activator,
  preventFocusOnClose,
  active,
  fixed,
  ariaHaspopup,
  preferInputActivator = true,
  zIndexOverride,
  ...rest
}, ref) {
  const [isDisplayed, setIsDisplay] = (0, import_react76.useState)(false);
  const [activatorNode, setActivatorNode] = (0, import_react76.useState)();
  const overlayRef = (0, import_react76.useRef)(null);
  const activatorContainer = (0, import_react76.useRef)(null);
  const WrapperComponent = activatorWrapper;
  const id = (0, import_react76.useId)();
  function forceUpdatePosition() {
    overlayRef.current?.forceUpdatePosition();
  }
  const handleClose = (source) => {
    onClose(source);
    if (activatorContainer.current == null || preventFocusOnClose) {
      return;
    }
    if (source === PopoverCloseSource.FocusOut && activatorNode) {
      const focusableActivator = findFirstFocusableNodeIncludingDisabled(activatorNode) || findFirstFocusableNodeIncludingDisabled(activatorContainer.current) || activatorContainer.current;
      if (!focusNextFocusableNode(focusableActivator, isInPortal)) {
        focusableActivator.focus();
      }
    } else if (source === PopoverCloseSource.EscapeKeypress && activatorNode) {
      const focusableActivator = findFirstFocusableNodeIncludingDisabled(activatorNode) || findFirstFocusableNodeIncludingDisabled(activatorContainer.current) || activatorContainer.current;
      if (focusableActivator) {
        focusableActivator.focus();
      } else {
        focusNextFocusableNode(focusableActivator, isInPortal);
      }
    }
  };
  (0, import_react76.useImperativeHandle)(ref, () => {
    return {
      forceUpdatePosition,
      close: (target = "activator") => {
        const source = target === "activator" ? PopoverCloseSource.EscapeKeypress : PopoverCloseSource.FocusOut;
        handleClose(source);
      }
    };
  });
  const setAccessibilityAttributes = (0, import_react76.useCallback)(() => {
    if (activatorContainer.current == null) {
      return;
    }
    const firstFocusable = findFirstFocusableNodeIncludingDisabled(activatorContainer.current);
    const focusableActivator = firstFocusable || activatorContainer.current;
    const activatorDisabled = "disabled" in focusableActivator && Boolean(focusableActivator.disabled);
    setActivatorAttributes(focusableActivator, {
      id,
      active,
      ariaHaspopup,
      activatorDisabled
    });
  }, [id, active, ariaHaspopup]);
  (0, import_react76.useEffect)(() => {
    function setDisplayState() {
      setIsDisplay(Boolean(activatorContainer.current && (activatorContainer.current.offsetParent !== null || activatorContainer.current === activatorContainer.current.ownerDocument.body && activatorContainer.current.clientWidth > 0)));
    }
    if (!activatorContainer.current) {
      return;
    }
    const observer = new ResizeObserver(setDisplayState);
    observer.observe(activatorContainer.current);
    setDisplayState();
    return () => {
      observer.disconnect();
    };
  }, []);
  (0, import_react76.useEffect)(() => {
    if (!activatorNode && activatorContainer.current) {
      setActivatorNode(activatorContainer.current.firstElementChild);
    } else if (activatorNode && activatorContainer.current && !activatorContainer.current.contains(activatorNode)) {
      setActivatorNode(activatorContainer.current.firstElementChild);
    }
    setAccessibilityAttributes();
  }, [activatorNode, setAccessibilityAttributes]);
  (0, import_react76.useEffect)(() => {
    if (activatorNode && activatorContainer.current) {
      setActivatorNode(activatorContainer.current.firstElementChild);
    }
    setAccessibilityAttributes();
  }, [activatorNode, setAccessibilityAttributes]);
  const portal2 = activatorNode && isDisplayed ? /* @__PURE__ */ import_react76.default.createElement(Portal, {
    idPrefix: "popover"
  }, /* @__PURE__ */ import_react76.default.createElement(PopoverOverlay, Object.assign({
    ref: overlayRef,
    id,
    activator: activatorNode,
    preferInputActivator,
    onClose: handleClose,
    active,
    fixed,
    zIndexOverride
  }, rest), children)) : null;
  return /* @__PURE__ */ import_react76.default.createElement(WrapperComponent, {
    ref: activatorContainer
  }, import_react76.Children.only(activator), portal2);
});
function isInPortal(element) {
  let parentElement = element.parentElement;
  while (parentElement) {
    if (parentElement.matches(portal.selector))
      return false;
    parentElement = parentElement.parentElement;
  }
  return true;
}
var Popover2 = Object.assign(PopoverComponent, {
  Pane,
  Section: Section2
});

// node_modules/@shopify/polaris/build/esm/components/ActionList/ActionList.js
var import_react95 = __toESM(require_react());

// node_modules/@shopify/polaris/build/esm/components/FilterActionsProvider/FilterActionsProvider.js
var import_react77 = __toESM(require_react());
var FilterActionsContext = /* @__PURE__ */ (0, import_react77.createContext)(false);
function FilterActionsProvider({
  children,
  filterActions
}) {
  return /* @__PURE__ */ import_react77.default.createElement(FilterActionsContext.Provider, {
    value: filterActions
  }, children);
}

// node_modules/@shopify/polaris/build/esm/components/ActionList/components/Section/Section.js
var import_react86 = __toESM(require_react());

// node_modules/@shopify/polaris/build/esm/components/ActionList/components/Item/Item.js
var import_react85 = __toESM(require_react());

// node_modules/@shopify/polaris/build/esm/components/ActionList/ActionList.css.js
var styles24 = {
  "Item": "Polaris-ActionList__Item",
  "default": "Polaris-ActionList--default",
  "active": "Polaris-ActionList--active",
  "destructive": "Polaris-ActionList--destructive",
  "disabled": "Polaris-ActionList--disabled",
  "Prefix": "Polaris-ActionList__Prefix",
  "Suffix": "Polaris-ActionList__Suffix",
  "indented": "Polaris-ActionList--indented",
  "menu": "Polaris-ActionList--menu",
  "Text": "Polaris-ActionList__Text"
};

// node_modules/@shopify/polaris/build/esm/components/Badge/Badge.js
var import_react80 = __toESM(require_react());

// node_modules/@shopify/polaris/build/esm/utilities/within-filter-context.js
var import_react78 = __toESM(require_react());
var WithinFilterContext = /* @__PURE__ */ (0, import_react78.createContext)(false);

// node_modules/@shopify/polaris/build/esm/components/Badge/Badge.css.js
var styles25 = {
  "Badge": "Polaris-Badge",
  "toneSuccess": "Polaris-Badge--toneSuccess",
  "toneSuccess-strong": "Polaris-Badge__toneSuccess--strong",
  "toneInfo": "Polaris-Badge--toneInfo",
  "toneInfo-strong": "Polaris-Badge__toneInfo--strong",
  "toneAttention": "Polaris-Badge--toneAttention",
  "toneAttention-strong": "Polaris-Badge__toneAttention--strong",
  "toneWarning": "Polaris-Badge--toneWarning",
  "toneWarning-strong": "Polaris-Badge__toneWarning--strong",
  "toneCritical": "Polaris-Badge--toneCritical",
  "toneCritical-strong": "Polaris-Badge__toneCritical--strong",
  "toneNew": "Polaris-Badge--toneNew",
  "toneMagic": "Polaris-Badge--toneMagic",
  "toneRead-only": "Polaris-Badge__toneRead--only",
  "toneEnabled": "Polaris-Badge--toneEnabled",
  "sizeLarge": "Polaris-Badge--sizeLarge",
  "withinFilter": "Polaris-Badge--withinFilter",
  "Icon": "Polaris-Badge__Icon",
  "PipContainer": "Polaris-Badge__PipContainer"
};

// node_modules/@shopify/polaris/build/esm/components/Badge/types.js
var ToneValue = /* @__PURE__ */ function(ToneValue2) {
  ToneValue2["Info"] = "info";
  ToneValue2["Success"] = "success";
  ToneValue2["Warning"] = "warning";
  ToneValue2["Critical"] = "critical";
  ToneValue2["Attention"] = "attention";
  ToneValue2["New"] = "new";
  ToneValue2["Magic"] = "magic";
  ToneValue2["InfoStrong"] = "info-strong";
  ToneValue2["SuccessStrong"] = "success-strong";
  ToneValue2["WarningStrong"] = "warning-strong";
  ToneValue2["CriticalStrong"] = "critical-strong";
  ToneValue2["AttentionStrong"] = "attention-strong";
  ToneValue2["ReadOnly"] = "read-only";
  ToneValue2["Enabled"] = "enabled";
  return ToneValue2;
}({});
var ProgressValue = /* @__PURE__ */ function(ProgressValue2) {
  ProgressValue2["Incomplete"] = "incomplete";
  ProgressValue2["PartiallyComplete"] = "partiallyComplete";
  ProgressValue2["Complete"] = "complete";
  return ProgressValue2;
}({});

// node_modules/@shopify/polaris/build/esm/components/Badge/utils.js
function getDefaultAccessibilityLabel(i18n, progress, tone) {
  let progressLabel = "";
  let toneLabel = "";
  if (!progress && !tone) {
    return "";
  }
  switch (progress) {
    case ProgressValue.Incomplete:
      progressLabel = i18n.translate("Polaris.Badge.PROGRESS_LABELS.incomplete");
      break;
    case ProgressValue.PartiallyComplete:
      progressLabel = i18n.translate("Polaris.Badge.PROGRESS_LABELS.partiallyComplete");
      break;
    case ProgressValue.Complete:
      progressLabel = i18n.translate("Polaris.Badge.PROGRESS_LABELS.complete");
      break;
  }
  switch (tone) {
    case ToneValue.Info:
    case ToneValue.InfoStrong:
      toneLabel = i18n.translate("Polaris.Badge.TONE_LABELS.info");
      break;
    case ToneValue.Success:
    case ToneValue.SuccessStrong:
      toneLabel = i18n.translate("Polaris.Badge.TONE_LABELS.success");
      break;
    case ToneValue.Warning:
    case ToneValue.WarningStrong:
      toneLabel = i18n.translate("Polaris.Badge.TONE_LABELS.warning");
      break;
    case ToneValue.Critical:
    case ToneValue.CriticalStrong:
      toneLabel = i18n.translate("Polaris.Badge.TONE_LABELS.critical");
      break;
    case ToneValue.Attention:
    case ToneValue.AttentionStrong:
      toneLabel = i18n.translate("Polaris.Badge.TONE_LABELS.attention");
      break;
    case ToneValue.New:
      toneLabel = i18n.translate("Polaris.Badge.TONE_LABELS.new");
      break;
    case ToneValue.ReadOnly:
      toneLabel = i18n.translate("Polaris.Badge.TONE_LABELS.readOnly");
      break;
    case ToneValue.Enabled:
      toneLabel = i18n.translate("Polaris.Badge.TONE_LABELS.enabled");
      break;
  }
  if (!tone && progress) {
    return progressLabel;
  } else if (tone && !progress) {
    return toneLabel;
  } else {
    return i18n.translate("Polaris.Badge.progressAndTone", {
      progressLabel,
      toneLabel
    });
  }
}

// node_modules/@shopify/polaris/build/esm/components/Badge/components/Pip/Pip.js
var import_react79 = __toESM(require_react());

// node_modules/@shopify/polaris/build/esm/components/Badge/components/Pip/Pip.css.js
var styles26 = {
  "Pip": "Polaris-Badge-Pip",
  "toneInfo": "Polaris-Badge-Pip--toneInfo",
  "toneSuccess": "Polaris-Badge-Pip--toneSuccess",
  "toneNew": "Polaris-Badge-Pip--toneNew",
  "toneAttention": "Polaris-Badge-Pip--toneAttention",
  "toneWarning": "Polaris-Badge-Pip--toneWarning",
  "toneCritical": "Polaris-Badge-Pip--toneCritical",
  "progressIncomplete": "Polaris-Badge-Pip--progressIncomplete",
  "progressPartiallyComplete": "Polaris-Badge-Pip--progressPartiallyComplete",
  "progressComplete": "Polaris-Badge-Pip--progressComplete"
};

// node_modules/@shopify/polaris/build/esm/components/Badge/components/Pip/Pip.js
function Pip({
  tone,
  progress = "complete",
  accessibilityLabelOverride
}) {
  const i18n = useI18n();
  const className = classNames(styles26.Pip, tone && styles26[variationName("tone", tone)], progress && styles26[variationName("progress", progress)]);
  const accessibilityLabel = accessibilityLabelOverride ? accessibilityLabelOverride : getDefaultAccessibilityLabel(i18n, progress, tone);
  return /* @__PURE__ */ import_react79.default.createElement("span", {
    className
  }, /* @__PURE__ */ import_react79.default.createElement(Text, {
    as: "span",
    visuallyHidden: true
  }, accessibilityLabel));
}

// node_modules/@shopify/polaris/build/esm/components/Badge/Badge.js
var DEFAULT_SIZE = "medium";
var progressIconMap = {
  complete: () => /* @__PURE__ */ import_react80.default.createElement("svg", {
    viewBox: "0 0 20 20"
  }, /* @__PURE__ */ import_react80.default.createElement("path", {
    d: "M6 10c0-.93 0-1.395.102-1.776a3 3 0 0 1 2.121-2.122C8.605 6 9.07 6 10 6c.93 0 1.395 0 1.776.102a3 3 0 0 1 2.122 2.122C14 8.605 14 9.07 14 10s0 1.395-.102 1.777a3 3 0 0 1-2.122 2.12C11.395 14 10.93 14 10 14s-1.395 0-1.777-.102a3 3 0 0 1-2.12-2.121C6 11.395 6 10.93 6 10Z"
  })),
  partiallyComplete: () => /* @__PURE__ */ import_react80.default.createElement("svg", {
    viewBox: "0 0 20 20"
  }, /* @__PURE__ */ import_react80.default.createElement("path", {
    fillRule: "evenodd",
    d: "m8.888 6.014-.017-.018-.02.02c-.253.013-.45.038-.628.086a3 3 0 0 0-2.12 2.122C6 8.605 6 9.07 6 10s0 1.395.102 1.777a3 3 0 0 0 2.121 2.12C8.605 14 9.07 14 10 14c.93 0 1.395 0 1.776-.102a3 3 0 0 0 2.122-2.121C14 11.395 14 10.93 14 10c0-.93 0-1.395-.102-1.776a3 3 0 0 0-2.122-2.122C11.395 6 10.93 6 10 6c-.475 0-.829 0-1.112.014ZM8.446 7.34a1.75 1.75 0 0 0-1.041.94l4.314 4.315c.443-.2.786-.576.941-1.042L8.446 7.34Zm4.304 2.536L10.124 7.25c.908.001 1.154.013 1.329.06a1.75 1.75 0 0 1 1.237 1.237c.047.175.059.42.06 1.329ZM8.547 12.69c.182.05.442.06 1.453.06h.106L7.25 9.894V10c0 1.01.01 1.27.06 1.453a1.75 1.75 0 0 0 1.237 1.237Z"
  })),
  incomplete: () => /* @__PURE__ */ import_react80.default.createElement("svg", {
    viewBox: "0 0 20 20"
  }, /* @__PURE__ */ import_react80.default.createElement("path", {
    fillRule: "evenodd",
    d: "M8.547 12.69c.183.05.443.06 1.453.06s1.27-.01 1.453-.06a1.75 1.75 0 0 0 1.237-1.237c.05-.182.06-.443.06-1.453s-.01-1.27-.06-1.453a1.75 1.75 0 0 0-1.237-1.237c-.182-.05-.443-.06-1.453-.06s-1.27.01-1.453.06A1.75 1.75 0 0 0 7.31 8.547c-.05.183-.06.443-.06 1.453s.01 1.27.06 1.453a1.75 1.75 0 0 0 1.237 1.237ZM6.102 8.224C6 8.605 6 9.07 6 10s0 1.395.102 1.777a3 3 0 0 0 2.122 2.12C8.605 14 9.07 14 10 14s1.395 0 1.777-.102a3 3 0 0 0 2.12-2.121C14 11.395 14 10.93 14 10c0-.93 0-1.395-.102-1.776a3 3 0 0 0-2.121-2.122C11.395 6 10.93 6 10 6c-.93 0-1.395 0-1.776.102a3 3 0 0 0-2.122 2.122Z"
  }))
};
function Badge({
  children,
  tone,
  progress,
  icon,
  size = DEFAULT_SIZE,
  toneAndProgressLabelOverride
}) {
  const i18n = useI18n();
  const withinFilter = (0, import_react80.useContext)(WithinFilterContext);
  const className = classNames(styles25.Badge, tone && styles25[variationName("tone", tone)], size && size !== DEFAULT_SIZE && styles25[variationName("size", size)], withinFilter && styles25.withinFilter);
  const accessibilityLabel = toneAndProgressLabelOverride ? toneAndProgressLabelOverride : getDefaultAccessibilityLabel(i18n, progress, tone);
  let accessibilityMarkup = Boolean(accessibilityLabel) && /* @__PURE__ */ import_react80.default.createElement(Text, {
    as: "span",
    visuallyHidden: true
  }, accessibilityLabel);
  if (progress && !icon) {
    accessibilityMarkup = /* @__PURE__ */ import_react80.default.createElement("span", {
      className: styles25.Icon
    }, /* @__PURE__ */ import_react80.default.createElement(Icon, {
      accessibilityLabel,
      source: progressIconMap[progress]
    }));
  }
  return /* @__PURE__ */ import_react80.default.createElement("span", {
    className
  }, accessibilityMarkup, icon && /* @__PURE__ */ import_react80.default.createElement("span", {
    className: styles25.Icon
  }, /* @__PURE__ */ import_react80.default.createElement(Icon, {
    source: icon
  })), children && /* @__PURE__ */ import_react80.default.createElement(Text, {
    as: "span",
    variant: "bodySm",
    fontWeight: tone === "new" ? "medium" : void 0
  }, children));
}
Badge.Pip = Pip;

// node_modules/@shopify/polaris/build/esm/components/Tooltip/Tooltip.js
var import_react84 = __toESM(require_react());

// node_modules/@shopify/polaris/build/esm/components/Tooltip/Tooltip.css.js
var styles27 = {
  "TooltipContainer": "Polaris-Tooltip__TooltipContainer",
  "HasUnderline": "Polaris-Tooltip__HasUnderline"
};

// node_modules/@shopify/polaris/build/esm/utilities/ephemeral-presence-manager/hooks.js
var import_react82 = __toESM(require_react());

// node_modules/@shopify/polaris/build/esm/utilities/ephemeral-presence-manager/context.js
var import_react81 = __toESM(require_react());
var EphemeralPresenceManagerContext = /* @__PURE__ */ (0, import_react81.createContext)(void 0);

// node_modules/@shopify/polaris/build/esm/utilities/ephemeral-presence-manager/hooks.js
function useEphemeralPresenceManager() {
  const ephemeralPresenceManager = (0, import_react82.useContext)(EphemeralPresenceManagerContext);
  if (!ephemeralPresenceManager) {
    throw new Error("No ephemeral presence manager was provided. Your application must be wrapped in an <AppProvider> component. See https://polaris.shopify.com/components/app-provider for implementation instructions.");
  }
  return ephemeralPresenceManager;
}

// node_modules/@shopify/polaris/build/esm/components/Tooltip/components/TooltipOverlay/TooltipOverlay.js
var import_react83 = __toESM(require_react());

// node_modules/@shopify/polaris/build/esm/components/Tooltip/components/TooltipOverlay/TooltipOverlay.css.js
var styles28 = {
  "TooltipOverlay": "Polaris-Tooltip-TooltipOverlay",
  "Tail": "Polaris-Tooltip-TooltipOverlay__Tail",
  "positionedAbove": "Polaris-Tooltip-TooltipOverlay--positionedAbove",
  "measuring": "Polaris-Tooltip-TooltipOverlay--measuring",
  "measured": "Polaris-Tooltip-TooltipOverlay--measured",
  "instant": "Polaris-Tooltip-TooltipOverlay--instant",
  "Content": "Polaris-Tooltip-TooltipOverlay__Content",
  "default": "Polaris-Tooltip-TooltipOverlay--default",
  "wide": "Polaris-Tooltip-TooltipOverlay--wide"
};

// node_modules/@shopify/polaris/build/esm/components/Tooltip/components/TooltipOverlay/TooltipOverlay.js
var tailUpPaths = /* @__PURE__ */ import_react83.default.createElement(import_react83.default.Fragment, null, /* @__PURE__ */ import_react83.default.createElement("path", {
  d: "M18.829 8.171 11.862.921A3 3 0 0 0 7.619.838L0 8.171h1.442l6.87-6.612a2 2 0 0 1 2.83.055l6.3 6.557h1.387Z",
  fill: "var(--p-color-tooltip-tail-up-border)"
}), /* @__PURE__ */ import_react83.default.createElement("path", {
  d: "M17.442 10.171h-16v-2l6.87-6.612a2 2 0 0 1 2.83.055l6.3 6.557v2Z",
  fill: "var(--p-color-bg-surface)"
}));
var tailDownPaths = /* @__PURE__ */ import_react83.default.createElement(import_react83.default.Fragment, null, /* @__PURE__ */ import_react83.default.createElement("path", {
  d: "m0 2 6.967 7.25a3 3 0 0 0 4.243.083L18.829 2h-1.442l-6.87 6.612a2 2 0 0 1-2.83-.055L1.387 2H0Z",
  fill: "var(--p-color-tooltip-tail-down-border)"
}), /* @__PURE__ */ import_react83.default.createElement("path", {
  d: "M1.387 0h16v2l-6.87 6.612a2 2 0 0 1-2.83-.055L1.387 2V0Z",
  fill: "var(--p-color-bg-surface)"
}));
function TooltipOverlay({
  active,
  activator,
  preferredPosition = "above",
  preventInteraction,
  id,
  children,
  accessibilityLabel,
  width,
  padding,
  borderRadius,
  zIndexOverride,
  instant
}) {
  const i18n = useI18n();
  const markup = active ? /* @__PURE__ */ import_react83.default.createElement(PositionedOverlay, {
    active,
    activator,
    preferredPosition,
    preventInteraction,
    render: renderTooltip,
    zIndexOverride
  }) : null;
  return markup;
  function renderTooltip(overlayDetails) {
    const {
      measuring,
      desiredHeight,
      positioning,
      chevronOffset
    } = overlayDetails;
    const containerClassName = classNames(styles28.TooltipOverlay, measuring && styles28.measuring, !measuring && styles28.measured, instant && styles28.instant, positioning === "above" && styles28.positionedAbove);
    const contentClassName = classNames(styles28.Content, width && styles28[width]);
    const contentStyles = measuring ? void 0 : {
      minHeight: desiredHeight
    };
    const style = {
      "--pc-tooltip-chevron-x-pos": `${chevronOffset}px`,
      "--pc-tooltip-border-radius": borderRadius ? `var(--p-border-radius-${borderRadius})` : void 0,
      "--pc-tooltip-padding": padding && padding === "default" ? "var(--p-space-100) var(--p-space-200)" : `var(--p-space-${padding})`
    };
    return /* @__PURE__ */ import_react83.default.createElement("div", Object.assign({
      style,
      className: containerClassName
    }, layer.props), /* @__PURE__ */ import_react83.default.createElement("svg", {
      className: styles28.Tail,
      width: "19",
      height: "11",
      fill: "none"
    }, positioning === "above" ? tailDownPaths : tailUpPaths), /* @__PURE__ */ import_react83.default.createElement("div", {
      id,
      role: "tooltip",
      className: contentClassName,
      style: {
        ...contentStyles,
        ...style
      },
      "aria-label": accessibilityLabel ? i18n.translate("Polaris.TooltipOverlay.accessibilityLabel", {
        label: accessibilityLabel
      }) : void 0
    }, children));
  }
}

// node_modules/@shopify/polaris/build/esm/components/Tooltip/Tooltip.js
var HOVER_OUT_TIMEOUT = 150;
function Tooltip({
  children,
  content,
  dismissOnMouseOut,
  active: originalActive,
  hoverDelay,
  preferredPosition = "above",
  activatorWrapper = "span",
  accessibilityLabel,
  width = "default",
  padding = "default",
  borderRadius: borderRadiusProp,
  zIndexOverride,
  hasUnderline,
  persistOnClick,
  onOpen,
  onClose
}) {
  const borderRadius = borderRadiusProp || "200";
  const WrapperComponent = activatorWrapper;
  const {
    value: active,
    setTrue: setActiveTrue,
    setFalse: handleBlur
  } = useToggle(Boolean(originalActive));
  const {
    value: persist,
    toggle: togglePersisting
  } = useToggle(Boolean(originalActive) && Boolean(persistOnClick));
  const [activatorNode, setActivatorNode] = (0, import_react84.useState)(null);
  const {
    presenceList,
    addPresence,
    removePresence
  } = useEphemeralPresenceManager();
  const id = (0, import_react84.useId)();
  const activatorContainer = (0, import_react84.useRef)(null);
  const mouseEntered = (0, import_react84.useRef)(false);
  const [shouldAnimate, setShouldAnimate] = (0, import_react84.useState)(Boolean(!originalActive));
  const hoverDelayTimeout = (0, import_react84.useRef)(null);
  const hoverOutTimeout = (0, import_react84.useRef)(null);
  const handleFocus = (0, import_react84.useCallback)(() => {
    if (originalActive !== false) {
      setActiveTrue();
    }
  }, [originalActive, setActiveTrue]);
  (0, import_react84.useEffect)(() => {
    const firstFocusable = activatorContainer.current ? findFirstFocusableNode(activatorContainer.current) : null;
    const accessibilityNode = firstFocusable || activatorContainer.current;
    if (!accessibilityNode)
      return;
    accessibilityNode.tabIndex = 0;
    accessibilityNode.setAttribute("aria-describedby", id);
    accessibilityNode.setAttribute("data-polaris-tooltip-activator", "true");
  }, [id, children]);
  (0, import_react84.useEffect)(() => {
    return () => {
      if (hoverDelayTimeout.current) {
        clearTimeout(hoverDelayTimeout.current);
      }
      if (hoverOutTimeout.current) {
        clearTimeout(hoverOutTimeout.current);
      }
    };
  }, []);
  const handleOpen = (0, import_react84.useCallback)(() => {
    setShouldAnimate(!presenceList.tooltip && !active);
    onOpen?.();
    addPresence("tooltip");
  }, [addPresence, presenceList.tooltip, onOpen, active]);
  const handleClose = (0, import_react84.useCallback)(() => {
    onClose?.();
    setShouldAnimate(false);
    hoverOutTimeout.current = setTimeout(() => {
      removePresence("tooltip");
    }, HOVER_OUT_TIMEOUT);
  }, [removePresence, onClose]);
  const handleKeyUp = (0, import_react84.useCallback)((event) => {
    if (event.key !== "Escape")
      return;
    handleClose?.();
    handleBlur();
    persistOnClick && togglePersisting();
  }, [handleBlur, handleClose, persistOnClick, togglePersisting]);
  (0, import_react84.useEffect)(() => {
    if (originalActive === false && active) {
      handleClose();
      handleBlur();
    }
  }, [originalActive, active, handleClose, handleBlur]);
  const portal2 = activatorNode ? /* @__PURE__ */ import_react84.default.createElement(Portal, {
    idPrefix: "tooltip"
  }, /* @__PURE__ */ import_react84.default.createElement(TooltipOverlay, {
    id,
    preferredPosition,
    activator: activatorNode,
    active,
    accessibilityLabel,
    onClose: noop3,
    preventInteraction: dismissOnMouseOut,
    width,
    padding,
    borderRadius,
    zIndexOverride,
    instant: !shouldAnimate
  }, /* @__PURE__ */ import_react84.default.createElement(Text, {
    as: "span",
    variant: "bodyMd"
  }, content))) : null;
  const wrapperClassNames = classNames(activatorWrapper === "div" && styles27.TooltipContainer, hasUnderline && styles27.HasUnderline);
  return /* @__PURE__ */ import_react84.default.createElement(WrapperComponent, {
    onFocus: () => {
      handleOpen();
      handleFocus();
    },
    onBlur: () => {
      handleClose();
      handleBlur();
      if (persistOnClick) {
        togglePersisting();
      }
    },
    onMouseLeave: handleMouseLeave,
    onMouseOver: handleMouseEnterFix,
    onMouseDown: persistOnClick ? togglePersisting : void 0,
    ref: setActivator,
    onKeyUp: handleKeyUp,
    className: wrapperClassNames
  }, children, portal2);
  function setActivator(node) {
    const activatorContainerRef = activatorContainer;
    if (node == null) {
      activatorContainerRef.current = null;
      setActivatorNode(null);
      return;
    }
    if (node.firstElementChild) {
      setActivatorNode(node.firstElementChild);
    }
    activatorContainerRef.current = node;
  }
  function handleMouseEnter() {
    mouseEntered.current = true;
    if (hoverDelay && !presenceList.tooltip) {
      hoverDelayTimeout.current = setTimeout(() => {
        handleOpen();
        handleFocus();
      }, hoverDelay);
    } else {
      handleOpen();
      handleFocus();
    }
  }
  function handleMouseLeave() {
    if (hoverDelayTimeout.current) {
      clearTimeout(hoverDelayTimeout.current);
      hoverDelayTimeout.current = null;
    }
    mouseEntered.current = false;
    handleClose();
    if (!persist) {
      handleBlur();
    }
  }
  function handleMouseEnterFix() {
    !mouseEntered.current && handleMouseEnter();
  }
}
function noop3() {
}

// node_modules/@shopify/polaris/build/esm/components/ActionList/components/Item/Item.js
function Item2({
  id,
  badge,
  content,
  accessibilityLabel,
  helpText,
  url,
  onAction,
  onMouseEnter,
  icon,
  image,
  prefix,
  suffix,
  disabled,
  external,
  destructive,
  ellipsis,
  truncate,
  active,
  role,
  variant = "default"
}) {
  const className = classNames(styles24.Item, disabled && styles24.disabled, destructive && styles24.destructive, active && styles24.active, variant === "default" && styles24.default, variant === "indented" && styles24.indented, variant === "menu" && styles24.menu);
  let prefixMarkup = null;
  if (prefix) {
    prefixMarkup = /* @__PURE__ */ import_react85.default.createElement("span", {
      className: styles24.Prefix
    }, prefix);
  } else if (icon) {
    prefixMarkup = /* @__PURE__ */ import_react85.default.createElement("span", {
      className: styles24.Prefix
    }, /* @__PURE__ */ import_react85.default.createElement(Icon, {
      source: icon
    }));
  } else if (image) {
    prefixMarkup = /* @__PURE__ */ import_react85.default.createElement("span", {
      role: "presentation",
      className: styles24.Prefix,
      style: {
        backgroundImage: `url(${image}`
      }
    });
  }
  let contentText = content || "";
  if (truncate && content) {
    contentText = /* @__PURE__ */ import_react85.default.createElement(TruncateText, null, content);
  } else if (ellipsis) {
    contentText = `${content}\u2026`;
  }
  const contentMarkup = helpText ? /* @__PURE__ */ import_react85.default.createElement(import_react85.default.Fragment, null, /* @__PURE__ */ import_react85.default.createElement(Box, null, contentText), /* @__PURE__ */ import_react85.default.createElement(Text, {
    as: "span",
    variant: "bodySm",
    tone: active || disabled ? void 0 : "subdued"
  }, helpText)) : /* @__PURE__ */ import_react85.default.createElement(Text, {
    as: "span",
    variant: "bodyMd",
    fontWeight: active ? "semibold" : "regular"
  }, contentText);
  const badgeMarkup = badge && /* @__PURE__ */ import_react85.default.createElement("span", {
    className: styles24.Suffix
  }, /* @__PURE__ */ import_react85.default.createElement(Badge, {
    tone: badge.tone
  }, badge.content));
  const suffixMarkup = suffix && /* @__PURE__ */ import_react85.default.createElement(Box, null, /* @__PURE__ */ import_react85.default.createElement("span", {
    className: styles24.Suffix
  }, suffix));
  const textMarkup = /* @__PURE__ */ import_react85.default.createElement("span", {
    className: styles24.Text
  }, /* @__PURE__ */ import_react85.default.createElement(Text, {
    as: "span",
    variant: "bodyMd",
    fontWeight: active ? "semibold" : "regular"
  }, contentMarkup));
  const contentElement = /* @__PURE__ */ import_react85.default.createElement(InlineStack, {
    blockAlign: "center",
    gap: "150",
    wrap: false
  }, prefixMarkup, textMarkup, badgeMarkup, suffixMarkup);
  const contentWrapper = /* @__PURE__ */ import_react85.default.createElement(Box, {
    width: "100%"
  }, contentElement);
  const scrollMarkup = active ? /* @__PURE__ */ import_react85.default.createElement(Scrollable.ScrollTo, null) : null;
  const control = url ? /* @__PURE__ */ import_react85.default.createElement(UnstyledLink, {
    id,
    url: disabled ? null : url,
    className,
    external,
    "aria-label": accessibilityLabel,
    onClick: disabled ? null : onAction,
    role
  }, contentWrapper) : /* @__PURE__ */ import_react85.default.createElement("button", {
    id,
    type: "button",
    className,
    disabled,
    "aria-label": accessibilityLabel,
    onClick: onAction,
    onMouseUp: handleMouseUpByBlurring,
    role,
    onMouseEnter
  }, contentWrapper);
  return /* @__PURE__ */ import_react85.default.createElement(import_react85.default.Fragment, null, scrollMarkup, control);
}
var TruncateText = ({
  children
}) => {
  const theme = useTheme();
  const textRef = (0, import_react85.useRef)(null);
  const [isOverflowing, setIsOverflowing] = (0, import_react85.useState)(false);
  useIsomorphicLayoutEffect(() => {
    if (textRef.current) {
      setIsOverflowing(textRef.current.scrollWidth > textRef.current.offsetWidth);
    }
  }, [children]);
  const text = /* @__PURE__ */ import_react85.default.createElement(Text, {
    as: "span",
    truncate: true
  }, /* @__PURE__ */ import_react85.default.createElement(Box, {
    width: "100%",
    ref: textRef
  }, children));
  return isOverflowing ? /* @__PURE__ */ import_react85.default.createElement(Tooltip, {
    zIndexOverride: Number(theme.zIndex["z-index-11"]),
    preferredPosition: "above",
    hoverDelay: 1e3,
    content: children,
    dismissOnMouseOut: true
  }, /* @__PURE__ */ import_react85.default.createElement(Text, {
    as: "span",
    truncate: true
  }, children)) : text;
};

// node_modules/@shopify/polaris/build/esm/components/ActionList/components/Section/Section.js
function Section3({
  section,
  hasMultipleSections,
  isFirst,
  actionRole,
  onActionAnyItem
}) {
  const handleAction = (itemOnAction) => {
    return () => {
      if (itemOnAction) {
        itemOnAction();
      }
      if (onActionAnyItem) {
        onActionAnyItem();
      }
    };
  };
  const actionMarkup = section.items.map(({
    content,
    helpText,
    onAction,
    ...item
  }, index) => {
    const itemMarkup = /* @__PURE__ */ import_react86.default.createElement(Item2, Object.assign({
      content,
      helpText,
      role: actionRole,
      onAction: handleAction(onAction)
    }, item));
    return /* @__PURE__ */ import_react86.default.createElement(Box, {
      as: "li",
      key: `${content}-${index}`,
      role: actionRole === "menuitem" ? "presentation" : void 0
    }, /* @__PURE__ */ import_react86.default.createElement(InlineStack, {
      wrap: false
    }, itemMarkup));
  });
  let titleMarkup = null;
  if (section.title) {
    titleMarkup = typeof section.title === "string" ? /* @__PURE__ */ import_react86.default.createElement(Box, {
      paddingBlockStart: "300",
      paddingBlockEnd: "100",
      paddingInlineStart: "300",
      paddingInlineEnd: "300"
    }, /* @__PURE__ */ import_react86.default.createElement(Text, {
      as: "p",
      variant: "headingSm"
    }, section.title)) : /* @__PURE__ */ import_react86.default.createElement(Box, {
      padding: "200",
      paddingInlineEnd: "150"
    }, section.title);
  }
  let sectionRole;
  switch (actionRole) {
    case "option":
      sectionRole = "presentation";
      break;
    case "menuitem":
      sectionRole = !hasMultipleSections ? "menu" : "presentation";
      break;
    default:
      sectionRole = void 0;
      break;
  }
  const sectionMarkup = /* @__PURE__ */ import_react86.default.createElement(import_react86.default.Fragment, null, titleMarkup, /* @__PURE__ */ import_react86.default.createElement(Box, Object.assign({
    as: "div",
    padding: "150"
  }, hasMultipleSections && {
    paddingBlockStart: "0"
  }, {
    tabIndex: !hasMultipleSections ? -1 : void 0
  }), /* @__PURE__ */ import_react86.default.createElement(BlockStack, Object.assign({
    gap: "050",
    as: "ul"
  }, sectionRole && {
    role: sectionRole
  }), actionMarkup)));
  return hasMultipleSections ? /* @__PURE__ */ import_react86.default.createElement(Box, Object.assign({
    as: "li",
    role: "presentation",
    borderColor: "border-secondary"
  }, !isFirst && {
    borderBlockStartWidth: "025"
  }, !section.title && {
    paddingBlockStart: "150"
  }), sectionMarkup) : sectionMarkup;
}

// node_modules/@shopify/polaris/build/esm/components/TextField/TextField.js
var import_react94 = __toESM(require_react());

// node_modules/@shopify/polaris/build/esm/components/TextField/TextField.css.js
var styles29 = {
  "TextField": "Polaris-TextField",
  "ClearButton": "Polaris-TextField__ClearButton",
  "Loading": "Polaris-TextField__Loading",
  "disabled": "Polaris-TextField--disabled",
  "error": "Polaris-TextField--error",
  "readOnly": "Polaris-TextField--readOnly",
  "Input": "Polaris-TextField__Input",
  "Backdrop": "Polaris-TextField__Backdrop",
  "multiline": "Polaris-TextField--multiline",
  "hasValue": "Polaris-TextField--hasValue",
  "focus": "Polaris-TextField--focus",
  "VerticalContent": "Polaris-TextField__VerticalContent",
  "InputAndSuffixWrapper": "Polaris-TextField__InputAndSuffixWrapper",
  "toneMagic": "Polaris-TextField--toneMagic",
  "Prefix": "Polaris-TextField__Prefix",
  "Suffix": "Polaris-TextField__Suffix",
  "AutoSizeWrapper": "Polaris-TextField__AutoSizeWrapper",
  "AutoSizeWrapperWithSuffix": "Polaris-TextField__AutoSizeWrapperWithSuffix",
  "suggestion": "Polaris-TextField--suggestion",
  "borderless": "Polaris-TextField--borderless",
  "slim": "Polaris-TextField--slim",
  "Input-hasClearButton": "Polaris-TextField__Input--hasClearButton",
  "Input-suffixed": "Polaris-TextField__Input--suffixed",
  "Input-alignRight": "Polaris-TextField__Input--alignRight",
  "Input-alignLeft": "Polaris-TextField__Input--alignLeft",
  "Input-alignCenter": "Polaris-TextField__Input--alignCenter",
  "Input-autoSize": "Polaris-TextField__Input--autoSize",
  "PrefixIcon": "Polaris-TextField__PrefixIcon",
  "CharacterCount": "Polaris-TextField__CharacterCount",
  "AlignFieldBottom": "Polaris-TextField__AlignFieldBottom",
  "Spinner": "Polaris-TextField__Spinner",
  "SpinnerIcon": "Polaris-TextField__SpinnerIcon",
  "Resizer": "Polaris-TextField__Resizer",
  "DummyInput": "Polaris-TextField__DummyInput",
  "Segment": "Polaris-TextField__Segment",
  "monospaced": "Polaris-TextField--monospaced"
};

// node_modules/@shopify/polaris/build/esm/components/Labelled/Labelled.js
var import_react89 = __toESM(require_react());

// node_modules/@shopify/polaris/build/esm/components/Labelled/Labelled.css.js
var styles30 = {
  "hidden": "Polaris-Labelled--hidden",
  "LabelWrapper": "Polaris-Labelled__LabelWrapper",
  "disabled": "Polaris-Labelled--disabled",
  "HelpText": "Polaris-Labelled__HelpText",
  "readOnly": "Polaris-Labelled--readOnly",
  "Error": "Polaris-Labelled__Error",
  "Action": "Polaris-Labelled__Action"
};

// node_modules/@shopify/polaris/build/esm/components/InlineError/InlineError.js
var import_react87 = __toESM(require_react());

// node_modules/@shopify/polaris/build/esm/components/InlineError/InlineError.css.js
var styles31 = {
  "InlineError": "Polaris-InlineError",
  "Icon": "Polaris-InlineError__Icon"
};

// node_modules/@shopify/polaris/build/esm/components/InlineError/InlineError.js
function InlineError({
  message,
  fieldID
}) {
  if (!message) {
    return null;
  }
  return /* @__PURE__ */ import_react87.default.createElement("div", {
    id: errorTextID(fieldID),
    className: styles31.InlineError
  }, /* @__PURE__ */ import_react87.default.createElement("div", {
    className: styles31.Icon
  }, /* @__PURE__ */ import_react87.default.createElement(Icon, {
    source: SvgAlertCircleIcon
  })), /* @__PURE__ */ import_react87.default.createElement(Text, {
    as: "span",
    variant: "bodyMd"
  }, message));
}
function errorTextID(id) {
  return `${id}Error`;
}

// node_modules/@shopify/polaris/build/esm/components/Label/Label.js
var import_react88 = __toESM(require_react());

// node_modules/@shopify/polaris/build/esm/components/Label/Label.css.js
var styles32 = {
  "Label": "Polaris-Label",
  "hidden": "Polaris-Label--hidden",
  "Text": "Polaris-Label__Text",
  "RequiredIndicator": "Polaris-Label__RequiredIndicator"
};

// node_modules/@shopify/polaris/build/esm/components/Label/Label.js
function labelID(id) {
  return `${id}Label`;
}
function Label({
  children,
  id,
  hidden,
  requiredIndicator
}) {
  const className = classNames(styles32.Label, hidden && styles32.hidden);
  return /* @__PURE__ */ import_react88.default.createElement("div", {
    className
  }, /* @__PURE__ */ import_react88.default.createElement("label", {
    id: labelID(id),
    htmlFor: id,
    className: classNames(styles32.Text, requiredIndicator && styles32.RequiredIndicator)
  }, /* @__PURE__ */ import_react88.default.createElement(Text, {
    as: "span",
    variant: "bodyMd"
  }, children)));
}

// node_modules/@shopify/polaris/build/esm/components/Labelled/Labelled.js
function Labelled({
  id,
  label,
  error,
  action,
  helpText,
  children,
  labelHidden,
  requiredIndicator,
  disabled,
  readOnly,
  ...rest
}) {
  const className = classNames(labelHidden && styles30.hidden, disabled && styles30.disabled, readOnly && styles30.readOnly);
  const actionMarkup = action ? /* @__PURE__ */ import_react89.default.createElement("div", {
    className: styles30.Action
  }, buttonFrom(action, {
    variant: "plain"
  })) : null;
  const helpTextMarkup = helpText ? /* @__PURE__ */ import_react89.default.createElement("div", {
    className: styles30.HelpText,
    id: helpTextID(id),
    "aria-disabled": disabled
  }, /* @__PURE__ */ import_react89.default.createElement(Text, {
    as: "span",
    tone: "subdued",
    variant: "bodyMd",
    breakWord: true
  }, helpText)) : null;
  const errorMarkup = error && typeof error !== "boolean" && /* @__PURE__ */ import_react89.default.createElement("div", {
    className: styles30.Error
  }, /* @__PURE__ */ import_react89.default.createElement(InlineError, {
    message: error,
    fieldID: id
  }));
  const labelMarkup = label ? /* @__PURE__ */ import_react89.default.createElement("div", {
    className: styles30.LabelWrapper
  }, /* @__PURE__ */ import_react89.default.createElement(Label, Object.assign({
    id,
    requiredIndicator
  }, rest, {
    hidden: false
  }), label), actionMarkup) : null;
  return /* @__PURE__ */ import_react89.default.createElement("div", {
    className
  }, labelMarkup, children, errorMarkup, helpTextMarkup);
}
function helpTextID(id) {
  return `${id}HelpText`;
}

// node_modules/@shopify/polaris/build/esm/components/Connected/Connected.js
var import_react91 = __toESM(require_react());

// node_modules/@shopify/polaris/build/esm/components/Connected/Connected.css.js
var styles33 = {
  "Connected": "Polaris-Connected",
  "Item": "Polaris-Connected__Item",
  "Item-primary": "Polaris-Connected__Item--primary",
  "Item-focused": "Polaris-Connected__Item--focused"
};

// node_modules/@shopify/polaris/build/esm/components/Connected/components/Item/Item.js
var import_react90 = __toESM(require_react());
function Item3({
  children,
  position
}) {
  const {
    value: focused,
    setTrue: forceTrueFocused,
    setFalse: forceFalseFocused
  } = useToggle(false);
  const className = classNames(styles33.Item, focused && styles33["Item-focused"], position === "primary" ? styles33["Item-primary"] : styles33["Item-connection"]);
  return /* @__PURE__ */ import_react90.default.createElement("div", {
    onBlur: forceFalseFocused,
    onFocus: forceTrueFocused,
    className
  }, children);
}

// node_modules/@shopify/polaris/build/esm/components/Connected/Connected.js
function Connected({
  children,
  left,
  right
}) {
  const leftConnectionMarkup = left ? /* @__PURE__ */ import_react91.default.createElement(Item3, {
    position: "left"
  }, left) : null;
  const rightConnectionMarkup = right ? /* @__PURE__ */ import_react91.default.createElement(Item3, {
    position: "right"
  }, right) : null;
  return /* @__PURE__ */ import_react91.default.createElement("div", {
    className: styles33.Connected
  }, leftConnectionMarkup, /* @__PURE__ */ import_react91.default.createElement(Item3, {
    position: "primary"
  }, children), rightConnectionMarkup);
}

// node_modules/@shopify/polaris/build/esm/components/TextField/components/Spinner/Spinner.js
var import_react92 = __toESM(require_react());
var Spinner2 = /* @__PURE__ */ import_react92.default.forwardRef(function Spinner3({
  onChange,
  onClick,
  onMouseDown,
  onMouseUp,
  onBlur
}, ref) {
  function handleStep(step) {
    return () => onChange(step);
  }
  function handleMouseDown(onChange2) {
    return (event) => {
      if (event.button !== 0)
        return;
      onMouseDown?.(onChange2);
    };
  }
  return /* @__PURE__ */ import_react92.default.createElement("div", {
    className: styles29.Spinner,
    onClick,
    "aria-hidden": true,
    ref
  }, /* @__PURE__ */ import_react92.default.createElement("div", {
    role: "button",
    className: styles29.Segment,
    tabIndex: -1,
    onClick: handleStep(1),
    onMouseDown: handleMouseDown(handleStep(1)),
    onMouseUp,
    onBlur
  }, /* @__PURE__ */ import_react92.default.createElement("div", {
    className: styles29.SpinnerIcon
  }, /* @__PURE__ */ import_react92.default.createElement(Icon, {
    source: SvgChevronUpIcon
  }))), /* @__PURE__ */ import_react92.default.createElement("div", {
    role: "button",
    className: styles29.Segment,
    tabIndex: -1,
    onClick: handleStep(-1),
    onMouseDown: handleMouseDown(handleStep(-1)),
    onMouseUp,
    onBlur
  }, /* @__PURE__ */ import_react92.default.createElement("div", {
    className: styles29.SpinnerIcon
  }, /* @__PURE__ */ import_react92.default.createElement(Icon, {
    source: SvgChevronDownIcon
  }))));
});

// node_modules/@shopify/polaris/build/esm/components/TextField/components/Resizer/Resizer.js
var import_react93 = __toESM(require_react());
function Resizer({
  contents,
  currentHeight: currentHeightProp = null,
  minimumLines,
  onHeightChange
}) {
  const contentNode = (0, import_react93.useRef)(null);
  const minimumLinesNode = (0, import_react93.useRef)(null);
  const animationFrame = (0, import_react93.useRef)();
  const currentHeight = (0, import_react93.useRef)(currentHeightProp);
  if (currentHeightProp !== currentHeight.current) {
    currentHeight.current = currentHeightProp;
  }
  (0, import_react93.useEffect)(() => {
    return () => {
      if (animationFrame.current) {
        cancelAnimationFrame(animationFrame.current);
      }
    };
  }, []);
  const minimumLinesMarkup = minimumLines ? /* @__PURE__ */ import_react93.default.createElement("div", {
    ref: minimumLinesNode,
    className: styles29.DummyInput,
    dangerouslySetInnerHTML: {
      __html: getContentsForMinimumLines(minimumLines)
    }
  }) : null;
  const handleHeightCheck = (0, import_react93.useCallback)(() => {
    if (animationFrame.current) {
      cancelAnimationFrame(animationFrame.current);
    }
    animationFrame.current = requestAnimationFrame(() => {
      if (!contentNode.current || !minimumLinesNode.current) {
        return;
      }
      const newHeight = Math.max(contentNode.current.offsetHeight, minimumLinesNode.current.offsetHeight);
      if (newHeight !== currentHeight.current) {
        onHeightChange(newHeight);
      }
    });
  }, [onHeightChange]);
  useIsomorphicLayoutEffect(() => {
    handleHeightCheck();
  });
  return /* @__PURE__ */ import_react93.default.createElement("div", {
    "aria-hidden": true,
    className: styles29.Resizer
  }, /* @__PURE__ */ import_react93.default.createElement(EventListener, {
    event: "resize",
    handler: handleHeightCheck
  }), /* @__PURE__ */ import_react93.default.createElement("div", {
    ref: contentNode,
    className: styles29.DummyInput,
    dangerouslySetInnerHTML: {
      __html: getFinalContents(contents)
    }
  }), minimumLinesMarkup);
}
var ENTITIES_TO_REPLACE = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  "\n": "<br>",
  "\r": ""
};
var REPLACE_REGEX = new RegExp(`[${Object.keys(ENTITIES_TO_REPLACE).join()}]`, "g");
function replaceEntity(entity) {
  return ENTITIES_TO_REPLACE[entity];
}
function getContentsForMinimumLines(minimumLines) {
  let content = "";
  for (let line = 0; line < minimumLines; line++) {
    content += "<br>";
  }
  return content;
}
function getFinalContents(contents) {
  return contents ? `${contents.replace(REPLACE_REGEX, replaceEntity)}<br>` : "<br>";
}

// node_modules/@shopify/polaris/build/esm/components/TextField/TextField.js
function TextField({
  prefix,
  suffix,
  verticalContent,
  placeholder,
  value = "",
  helpText,
  label,
  labelAction,
  labelHidden,
  disabled,
  clearButton,
  readOnly,
  autoFocus,
  focused,
  multiline,
  error,
  connectedRight,
  connectedLeft,
  type = "text",
  name,
  id: idProp,
  role,
  step,
  largeStep,
  autoComplete,
  max,
  maxLength,
  maxHeight,
  min,
  minLength,
  pattern,
  inputMode,
  spellCheck,
  ariaOwns,
  ariaControls,
  ariaExpanded,
  ariaActiveDescendant,
  ariaAutocomplete,
  showCharacterCount,
  align,
  requiredIndicator,
  monospaced,
  selectTextOnFocus,
  suggestion,
  variant = "inherit",
  size = "medium",
  onClearButtonClick,
  onChange,
  onSpinnerChange,
  onFocus,
  onBlur,
  tone,
  autoSize,
  loading
}) {
  const i18n = useI18n();
  const [height, setHeight] = (0, import_react94.useState)(null);
  const [focus, setFocus] = (0, import_react94.useState)(Boolean(focused));
  const isAfterInitial = useIsAfterInitialMount();
  const uniqId = (0, import_react94.useId)();
  const id = idProp ?? uniqId;
  const textFieldRef = (0, import_react94.useRef)(null);
  const inputRef = (0, import_react94.useRef)(null);
  const textAreaRef = (0, import_react94.useRef)(null);
  const prefixRef = (0, import_react94.useRef)(null);
  const suffixRef = (0, import_react94.useRef)(null);
  const loadingRef = (0, import_react94.useRef)(null);
  const verticalContentRef = (0, import_react94.useRef)(null);
  const buttonPressTimer = (0, import_react94.useRef)();
  const spinnerRef = (0, import_react94.useRef)(null);
  const getInputRef = (0, import_react94.useCallback)(() => {
    return multiline ? textAreaRef.current : inputRef.current;
  }, [multiline]);
  (0, import_react94.useEffect)(() => {
    const input2 = getInputRef();
    if (!input2 || focused === void 0)
      return;
    focused ? input2.focus() : input2.blur();
  }, [focused, verticalContent, getInputRef]);
  (0, import_react94.useEffect)(() => {
    const input2 = inputRef.current;
    const isSupportedInputType = type === "text" || type === "tel" || type === "search" || type === "url" || type === "password";
    if (!input2 || !isSupportedInputType || !suggestion) {
      return;
    }
    input2.setSelectionRange(value.length, suggestion.length);
  }, [focus, value, type, suggestion]);
  const normalizedValue = suggestion ? suggestion : value;
  const normalizedStep = step != null ? step : 1;
  const normalizedMax = max != null ? max : Infinity;
  const normalizedMin = min != null ? min : -Infinity;
  const className = classNames(styles29.TextField, Boolean(normalizedValue) && styles29.hasValue, disabled && styles29.disabled, readOnly && styles29.readOnly, error && styles29.error, tone && styles29[variationName("tone", tone)], multiline && styles29.multiline, focus && !disabled && styles29.focus, variant !== "inherit" && styles29[variant], size === "slim" && styles29.slim);
  const inputType = type === "currency" ? "text" : type;
  const isNumericType = type === "number" || type === "integer";
  const iconPrefix = /* @__PURE__ */ import_react94.default.isValidElement(prefix) && prefix.type === Icon;
  const prefixMarkup = prefix ? /* @__PURE__ */ import_react94.default.createElement("div", {
    className: classNames(styles29.Prefix, iconPrefix && styles29.PrefixIcon),
    id: `${id}-Prefix`,
    ref: prefixRef
  }, /* @__PURE__ */ import_react94.default.createElement(Text, {
    as: "span",
    variant: "bodyMd"
  }, prefix)) : null;
  const suffixMarkup = suffix ? /* @__PURE__ */ import_react94.default.createElement("div", {
    className: styles29.Suffix,
    id: `${id}-Suffix`,
    ref: suffixRef
  }, /* @__PURE__ */ import_react94.default.createElement(Text, {
    as: "span",
    variant: "bodyMd"
  }, suffix)) : null;
  const loadingMarkup = loading ? /* @__PURE__ */ import_react94.default.createElement("div", {
    className: styles29.Loading,
    id: `${id}-Loading`,
    ref: loadingRef
  }, /* @__PURE__ */ import_react94.default.createElement(Spinner, {
    size: "small"
  })) : null;
  let characterCountMarkup = null;
  if (showCharacterCount) {
    const characterCount = normalizedValue.length;
    const characterCountLabel = maxLength ? i18n.translate("Polaris.TextField.characterCountWithMaxLength", {
      count: characterCount,
      limit: maxLength
    }) : i18n.translate("Polaris.TextField.characterCount", {
      count: characterCount
    });
    const characterCountClassName = classNames(styles29.CharacterCount, multiline && styles29.AlignFieldBottom);
    const characterCountText = !maxLength ? characterCount : `${characterCount}/${maxLength}`;
    characterCountMarkup = /* @__PURE__ */ import_react94.default.createElement("div", {
      id: `${id}-CharacterCounter`,
      className: characterCountClassName,
      "aria-label": characterCountLabel,
      "aria-live": focus ? "polite" : "off",
      "aria-atomic": "true",
      onClick: handleClickChild
    }, /* @__PURE__ */ import_react94.default.createElement(Text, {
      as: "span",
      variant: "bodyMd"
    }, characterCountText));
  }
  const clearButtonVisible = normalizedValue !== "";
  const clearButtonMarkup = clearButton && clearButtonVisible ? /* @__PURE__ */ import_react94.default.createElement("button", {
    type: "button",
    className: styles29.ClearButton,
    onClick: handleClearButtonPress,
    disabled
  }, /* @__PURE__ */ import_react94.default.createElement(Text, {
    as: "span",
    visuallyHidden: true
  }, i18n.translate("Polaris.Common.clear")), /* @__PURE__ */ import_react94.default.createElement(Icon, {
    source: SvgXCircleIcon,
    tone: "base"
  })) : null;
  const handleNumberChange = (0, import_react94.useCallback)((steps, stepAmount = normalizedStep) => {
    if (onChange == null && onSpinnerChange == null) {
      return;
    }
    const dpl = (num) => (num.toString().split(".")[1] || []).length;
    const numericValue = value ? parseFloat(value) : 0;
    if (isNaN(numericValue)) {
      return;
    }
    const decimalPlaces = type === "integer" ? 0 : Math.max(dpl(numericValue), dpl(stepAmount));
    const newValue = Math.min(Number(normalizedMax), Math.max(numericValue + steps * stepAmount, Number(normalizedMin)));
    if (onSpinnerChange != null) {
      onSpinnerChange(String(newValue.toFixed(decimalPlaces)), id);
    } else if (onChange != null) {
      onChange(String(newValue.toFixed(decimalPlaces)), id);
    }
  }, [id, normalizedMax, normalizedMin, onChange, onSpinnerChange, normalizedStep, type, value]);
  const handleSpinnerButtonRelease = (0, import_react94.useCallback)(() => {
    clearTimeout(buttonPressTimer.current);
  }, []);
  const handleSpinnerButtonPress = (0, import_react94.useCallback)((onChange2) => {
    const minInterval = 50;
    const decrementBy = 10;
    let interval = 200;
    const onChangeInterval = () => {
      if (interval > minInterval)
        interval -= decrementBy;
      onChange2(0);
      buttonPressTimer.current = window.setTimeout(onChangeInterval, interval);
    };
    buttonPressTimer.current = window.setTimeout(onChangeInterval, interval);
    document.addEventListener("mouseup", handleSpinnerButtonRelease, {
      once: true
    });
  }, [handleSpinnerButtonRelease]);
  const spinnerMarkup = isNumericType && step !== 0 && !disabled && !readOnly ? /* @__PURE__ */ import_react94.default.createElement(Spinner2, {
    onClick: handleClickChild,
    onChange: handleNumberChange,
    onMouseDown: handleSpinnerButtonPress,
    onMouseUp: handleSpinnerButtonRelease,
    ref: spinnerRef,
    onBlur: handleOnBlur
  }) : null;
  const style = multiline && height ? {
    height,
    maxHeight
  } : null;
  const handleExpandingResize = (0, import_react94.useCallback)((height2) => {
    setHeight(height2);
  }, []);
  const resizer = multiline && isAfterInitial ? /* @__PURE__ */ import_react94.default.createElement(Resizer, {
    contents: normalizedValue || placeholder,
    currentHeight: height,
    minimumLines: typeof multiline === "number" ? multiline : 1,
    onHeightChange: handleExpandingResize
  }) : null;
  const describedBy = [];
  if (error) {
    describedBy.push(`${id}Error`);
  }
  if (helpText) {
    describedBy.push(helpTextID(id));
  }
  if (showCharacterCount) {
    describedBy.push(`${id}-CharacterCounter`);
  }
  const labelledBy = [];
  if (prefix) {
    labelledBy.push(`${id}-Prefix`);
  }
  if (suffix) {
    labelledBy.push(`${id}-Suffix`);
  }
  if (verticalContent) {
    labelledBy.push(`${id}-VerticalContent`);
  }
  labelledBy.unshift(labelID(id));
  const inputClassName = classNames(styles29.Input, align && styles29[variationName("Input-align", align)], suffix && styles29["Input-suffixed"], clearButton && styles29["Input-hasClearButton"], monospaced && styles29.monospaced, suggestion && styles29.suggestion, autoSize && styles29["Input-autoSize"]);
  const handleOnFocus = (event) => {
    setFocus(true);
    if (selectTextOnFocus && !suggestion) {
      const input2 = getInputRef();
      input2?.select();
    }
    if (onFocus) {
      onFocus(event);
    }
  };
  useEventListener("wheel", handleOnWheel, inputRef);
  function handleOnWheel(event) {
    if (document.activeElement === event.target && isNumericType) {
      event.stopPropagation();
    }
  }
  const input = /* @__PURE__ */ (0, import_react94.createElement)(multiline ? "textarea" : "input", {
    name,
    id,
    disabled,
    readOnly,
    role,
    autoFocus,
    value: normalizedValue,
    placeholder,
    style,
    autoComplete,
    className: inputClassName,
    ref: multiline ? textAreaRef : inputRef,
    min,
    max,
    step,
    minLength,
    maxLength,
    spellCheck,
    pattern,
    inputMode,
    type: inputType,
    rows: getRows(multiline),
    size: autoSize ? 1 : void 0,
    "aria-describedby": describedBy.length ? describedBy.join(" ") : void 0,
    "aria-labelledby": labelledBy.join(" "),
    "aria-invalid": Boolean(error),
    "aria-owns": ariaOwns,
    "aria-activedescendant": ariaActiveDescendant,
    "aria-autocomplete": ariaAutocomplete,
    "aria-controls": ariaControls,
    "aria-expanded": ariaExpanded,
    "aria-required": requiredIndicator,
    ...normalizeAriaMultiline(multiline),
    onFocus: handleOnFocus,
    onBlur: handleOnBlur,
    onClick: handleClickChild,
    onKeyPress: handleKeyPress,
    onKeyDown: handleKeyDown,
    onChange: !suggestion ? handleChange : void 0,
    onInput: suggestion ? handleChange : void 0,
    // 1Password disable data attribute
    "data-1p-ignore": autoComplete === "off" || void 0,
    // LastPass disable data attribute
    "data-lpignore": autoComplete === "off" || void 0,
    // Dashlane disable data attribute
    "data-form-type": autoComplete === "off" ? "other" : void 0
  });
  const inputWithVerticalContentMarkup = verticalContent ? /* @__PURE__ */ import_react94.default.createElement("div", {
    className: styles29.VerticalContent,
    id: `${id}-VerticalContent`,
    ref: verticalContentRef,
    onClick: handleClickChild
  }, verticalContent, input) : null;
  const inputMarkup = verticalContent ? inputWithVerticalContentMarkup : input;
  const backdropMarkup = /* @__PURE__ */ import_react94.default.createElement("div", {
    className: classNames(styles29.Backdrop, connectedLeft && styles29["Backdrop-connectedLeft"], connectedRight && styles29["Backdrop-connectedRight"])
  });
  const inputAndSuffixMarkup = autoSize ? /* @__PURE__ */ import_react94.default.createElement("div", {
    className: styles29.InputAndSuffixWrapper
  }, /* @__PURE__ */ import_react94.default.createElement("div", {
    className: classNames(styles29.AutoSizeWrapper, suffix && styles29.AutoSizeWrapperWithSuffix),
    "data-auto-size-value": value || placeholder
  }, inputMarkup), suffixMarkup) : /* @__PURE__ */ import_react94.default.createElement(import_react94.default.Fragment, null, inputMarkup, suffixMarkup);
  return /* @__PURE__ */ import_react94.default.createElement(Labelled, {
    label,
    id,
    error,
    action: labelAction,
    labelHidden,
    helpText,
    requiredIndicator,
    disabled,
    readOnly
  }, /* @__PURE__ */ import_react94.default.createElement(Connected, {
    left: connectedLeft,
    right: connectedRight
  }, /* @__PURE__ */ import_react94.default.createElement("div", {
    className,
    onClick: handleClick,
    ref: textFieldRef
  }, prefixMarkup, inputAndSuffixMarkup, characterCountMarkup, loadingMarkup, clearButtonMarkup, spinnerMarkup, backdropMarkup, resizer)));
  function handleChange(event) {
    onChange && onChange(event.currentTarget.value, id);
  }
  function handleClick(event) {
    const {
      target
    } = event;
    const inputRefRole = inputRef?.current?.getAttribute("role");
    if (target === inputRef.current && inputRefRole === "combobox") {
      inputRef.current?.focus();
      handleOnFocus(event);
      return;
    }
    if (isPrefixOrSuffix(target) || isVerticalContent(target) || isInput(target) || isSpinner(target) || isLoadingSpinner(target) || focus) {
      return;
    }
    getInputRef()?.focus();
  }
  function handleClickChild(event) {
    if (!isSpinner(event.target) && !isInput(event.target)) {
      event.stopPropagation();
    }
    if (isPrefixOrSuffix(event.target) || isVerticalContent(event.target) || isInput(event.target) || isLoadingSpinner(event.target) || focus) {
      return;
    }
    setFocus(true);
    getInputRef()?.focus();
  }
  function handleClearButtonPress() {
    onClearButtonClick && onClearButtonClick(id);
  }
  function handleKeyPress(event) {
    const {
      key,
      which
    } = event;
    const numbersSpec = /[\d.,eE+-]$/;
    const integerSpec = /[\deE+-]$/;
    if (!isNumericType || which === Key.Enter || type === "number" && numbersSpec.test(key) || type === "integer" && integerSpec.test(key)) {
      return;
    }
    event.preventDefault();
  }
  function handleKeyDown(event) {
    if (!isNumericType) {
      return;
    }
    const {
      key,
      which
    } = event;
    if (type === "integer" && (key === "ArrowUp" || which === Key.UpArrow)) {
      handleNumberChange(1);
      event.preventDefault();
    }
    if (type === "integer" && (key === "ArrowDown" || which === Key.DownArrow)) {
      handleNumberChange(-1);
      event.preventDefault();
    }
    if ((which === Key.Home || key === "Home") && min !== void 0) {
      if (onSpinnerChange != null) {
        onSpinnerChange(String(min), id);
      } else if (onChange != null) {
        onChange(String(min), id);
      }
    }
    if ((which === Key.End || key === "End") && max !== void 0) {
      if (onSpinnerChange != null) {
        onSpinnerChange(String(max), id);
      } else if (onChange != null) {
        onChange(String(max), id);
      }
    }
    if ((which === Key.PageUp || key === "PageUp") && largeStep !== void 0) {
      handleNumberChange(1, largeStep);
    }
    if ((which === Key.PageDown || key === "PageDown") && largeStep !== void 0) {
      handleNumberChange(-1, largeStep);
    }
  }
  function handleOnBlur(event) {
    setFocus(false);
    if (textFieldRef.current?.contains(event?.relatedTarget)) {
      return;
    }
    if (onBlur) {
      onBlur(event);
    }
  }
  function isInput(target) {
    const input2 = getInputRef();
    return target instanceof HTMLElement && input2 && (input2.contains(target) || input2.contains(document.activeElement));
  }
  function isPrefixOrSuffix(target) {
    return target instanceof Element && (prefixRef.current && prefixRef.current.contains(target) || suffixRef.current && suffixRef.current.contains(target));
  }
  function isSpinner(target) {
    return target instanceof Element && spinnerRef.current && spinnerRef.current.contains(target);
  }
  function isLoadingSpinner(target) {
    return target instanceof Element && loadingRef.current && loadingRef.current.contains(target);
  }
  function isVerticalContent(target) {
    return target instanceof Element && verticalContentRef.current && (verticalContentRef.current.contains(target) || verticalContentRef.current.contains(document.activeElement));
  }
}
function getRows(multiline) {
  if (!multiline)
    return void 0;
  return typeof multiline === "number" ? multiline : 1;
}
function normalizeAriaMultiline(multiline) {
  if (!multiline)
    return void 0;
  return Boolean(multiline) || typeof multiline === "number" && multiline > 0 ? {
    "aria-multiline": true
  } : void 0;
}

// node_modules/@shopify/polaris/build/esm/components/ActionList/ActionList.js
var FILTER_ACTIONS_THRESHOLD = 8;
function ActionList({
  items,
  sections = [],
  actionRole,
  allowFiltering,
  onActionAnyItem,
  filterLabel
}) {
  const i18n = useI18n();
  const filterActions = (0, import_react95.useContext)(FilterActionsContext);
  let finalSections = [];
  const actionListRef = (0, import_react95.useRef)(null);
  const [searchText, setSearchText] = (0, import_react95.useState)("");
  if (items) {
    finalSections = [{
      items
    }, ...sections];
  } else if (sections) {
    finalSections = sections;
  }
  const isFilterable = finalSections?.some((section) => section.items.some((item) => typeof item.content === "string"));
  const hasMultipleSections = finalSections.length > 1;
  const elementRole = hasMultipleSections && actionRole === "menuitem" ? "menu" : void 0;
  const elementTabIndex = hasMultipleSections && actionRole === "menuitem" ? -1 : void 0;
  const filteredSections = finalSections?.map((section) => ({
    ...section,
    items: section.items.filter(({
      content
    }) => typeof content === "string" ? content?.toLowerCase().includes(searchText.toLowerCase()) : content)
  }));
  const sectionMarkup = filteredSections.map((section, index) => {
    return section.items.length > 0 ? /* @__PURE__ */ import_react95.default.createElement(Section3, {
      key: typeof section.title === "string" ? section.title : index,
      section,
      hasMultipleSections,
      actionRole,
      onActionAnyItem,
      isFirst: index === 0
    }) : null;
  });
  const handleFocusPreviousItem = (evt) => {
    evt.preventDefault();
    if (actionListRef.current && evt.target) {
      if (actionListRef.current.contains(evt.target)) {
        wrapFocusPreviousFocusableMenuItem(actionListRef.current, evt.target);
      }
    }
  };
  const handleFocusNextItem = (evt) => {
    evt.preventDefault();
    if (actionListRef.current && evt.target) {
      if (actionListRef.current.contains(evt.target)) {
        wrapFocusNextFocusableMenuItem(actionListRef.current, evt.target);
      }
    }
  };
  const listeners = actionRole === "menuitem" ? /* @__PURE__ */ import_react95.default.createElement(import_react95.default.Fragment, null, /* @__PURE__ */ import_react95.default.createElement(KeypressListener, {
    keyEvent: "keydown",
    keyCode: Key.DownArrow,
    handler: handleFocusNextItem
  }), /* @__PURE__ */ import_react95.default.createElement(KeypressListener, {
    keyEvent: "keydown",
    keyCode: Key.UpArrow,
    handler: handleFocusPreviousItem
  })) : null;
  const totalFilteredActions = (0, import_react95.useMemo)(() => {
    const totalSectionItems = filteredSections?.reduce((acc, section) => acc + section.items.length, 0) || 0;
    return totalSectionItems;
  }, [filteredSections]);
  const totalActions = finalSections?.reduce((acc, section) => acc + section.items.length, 0) || 0;
  const hasManyActions = totalActions >= FILTER_ACTIONS_THRESHOLD;
  return /* @__PURE__ */ import_react95.default.createElement(import_react95.default.Fragment, null, (allowFiltering || filterActions) && hasManyActions && isFilterable && /* @__PURE__ */ import_react95.default.createElement(Box, {
    padding: "200",
    paddingBlockEnd: totalFilteredActions > 0 ? "0" : "200"
  }, /* @__PURE__ */ import_react95.default.createElement(TextField, {
    clearButton: true,
    labelHidden: true,
    label: filterLabel ? filterLabel : i18n.translate("Polaris.ActionList.SearchField.placeholder"),
    placeholder: filterLabel ? filterLabel : i18n.translate("Polaris.ActionList.SearchField.placeholder"),
    autoComplete: "off",
    value: searchText,
    onChange: (value) => setSearchText(value),
    prefix: /* @__PURE__ */ import_react95.default.createElement(Icon, {
      source: SvgSearchIcon
    }),
    onClearButtonClick: () => setSearchText("")
  })), /* @__PURE__ */ import_react95.default.createElement(Box, {
    as: hasMultipleSections ? "ul" : "div",
    ref: actionListRef,
    role: elementRole,
    tabIndex: elementTabIndex
  }, listeners, sectionMarkup));
}
ActionList.Item = Item2;

// node_modules/@shopify/polaris/build/esm/components/ActionMenu/components/RollupActions/RollupActions.js
function RollupActions({
  accessibilityLabel,
  items = [],
  sections = []
}) {
  const i18n = useI18n();
  const {
    value: rollupOpen,
    toggle: toggleRollupOpen
  } = useToggle(false);
  if (items.length === 0 && sections.length === 0) {
    return null;
  }
  const activatorMarkup = /* @__PURE__ */ import_react96.default.createElement("div", {
    className: styles19.RollupActivator
  }, /* @__PURE__ */ import_react96.default.createElement(Button, {
    icon: SvgMenuHorizontalIcon,
    accessibilityLabel: accessibilityLabel || i18n.translate("Polaris.ActionMenu.RollupActions.rollupButton"),
    onClick: toggleRollupOpen
  }));
  return /* @__PURE__ */ import_react96.default.createElement(Popover2, {
    active: rollupOpen,
    activator: activatorMarkup,
    preferredAlignment: "right",
    onClose: toggleRollupOpen,
    hideOnPrint: true
  }, /* @__PURE__ */ import_react96.default.createElement(ActionList, {
    items,
    sections,
    onActionAnyItem: toggleRollupOpen
  }));
}

// node_modules/@shopify/polaris/build/esm/components/ActionMenu/components/Actions/Actions.js
var import_react100 = __toESM(require_react());

// node_modules/@shopify/polaris/build/esm/components/ActionMenu/components/Actions/Actions.css.js
var styles34 = {
  "ActionsLayoutOuter": "Polaris-ActionMenu-Actions__ActionsLayoutOuter",
  "ActionsLayout": "Polaris-ActionMenu-Actions__ActionsLayout",
  "ActionsLayout--measuring": "Polaris-ActionMenu-Actions--actionsLayoutMeasuring",
  "ActionsLayoutMeasurer": "Polaris-ActionMenu-Actions__ActionsLayoutMeasurer"
};

// node_modules/@shopify/polaris/build/esm/components/ActionMenu/components/Actions/utilities.js
function getVisibleAndHiddenActionsIndices(actions = [], groups = [], disclosureWidth, actionsWidths, containerWidth) {
  const sumTabWidths = actionsWidths.reduce((sum, width) => sum + width, 0);
  const arrayOfActionsIndices = actions.map((_, index) => {
    return index;
  });
  const arrayOfGroupsIndices = groups.map((_, index) => {
    return index;
  });
  const visibleActions = [];
  const hiddenActions = [];
  const visibleGroups = [];
  const hiddenGroups = [];
  if (containerWidth > sumTabWidths) {
    visibleActions.push(...arrayOfActionsIndices);
    visibleGroups.push(...arrayOfGroupsIndices);
  } else {
    let accumulatedWidth = 0;
    arrayOfActionsIndices.forEach((currentActionsIndex) => {
      const currentActionsWidth = actionsWidths[currentActionsIndex];
      if (accumulatedWidth + currentActionsWidth >= containerWidth - disclosureWidth) {
        hiddenActions.push(currentActionsIndex);
        return;
      }
      visibleActions.push(currentActionsIndex);
      accumulatedWidth += currentActionsWidth;
    });
    arrayOfGroupsIndices.forEach((currentGroupsIndex) => {
      const currentActionsWidth = actionsWidths[currentGroupsIndex + actions.length];
      if (accumulatedWidth + currentActionsWidth >= containerWidth - disclosureWidth) {
        hiddenGroups.push(currentGroupsIndex);
        return;
      }
      visibleGroups.push(currentGroupsIndex);
      accumulatedWidth += currentActionsWidth;
    });
  }
  return {
    visibleActions,
    hiddenActions,
    visibleGroups,
    hiddenGroups
  };
}

// node_modules/@shopify/polaris/build/esm/components/ActionMenu/components/MenuGroup/MenuGroup.js
var import_react98 = __toESM(require_react());

// node_modules/@shopify/polaris/build/esm/components/ActionMenu/components/MenuGroup/MenuGroup.css.js
var styles35 = {
  "Details": "Polaris-ActionMenu-MenuGroup__Details"
};

// node_modules/@shopify/polaris/build/esm/components/ActionMenu/components/SecondaryAction/SecondaryAction.js
var import_react97 = __toESM(require_react());

// node_modules/@shopify/polaris/build/esm/components/ActionMenu/components/SecondaryAction/SecondaryAction.css.js
var styles36 = {
  "SecondaryAction": "Polaris-ActionMenu-SecondaryAction",
  "critical": "Polaris-ActionMenu-SecondaryAction--critical"
};

// node_modules/@shopify/polaris/build/esm/components/ActionMenu/components/SecondaryAction/SecondaryAction.js
function SecondaryAction({
  children,
  tone,
  helpText,
  onAction,
  destructive,
  ...rest
}) {
  const buttonMarkup = /* @__PURE__ */ import_react97.default.createElement(Button, Object.assign({
    onClick: onAction,
    tone: destructive ? "critical" : void 0
  }, rest), children);
  const actionMarkup = helpText ? /* @__PURE__ */ import_react97.default.createElement(Tooltip, {
    preferredPosition: "below",
    content: helpText
  }, buttonMarkup) : buttonMarkup;
  return /* @__PURE__ */ import_react97.default.createElement("div", {
    className: classNames(styles36.SecondaryAction, tone === "critical" && styles36.critical)
  }, actionMarkup);
}

// node_modules/@shopify/polaris/build/esm/components/ActionMenu/components/MenuGroup/MenuGroup.js
function MenuGroup({
  accessibilityLabel,
  active,
  actions,
  details,
  title,
  icon,
  disabled,
  onClick,
  onClose,
  onOpen,
  sections
}) {
  const handleClose = (0, import_react98.useCallback)(() => {
    onClose(title);
  }, [onClose, title]);
  const handleOpen = (0, import_react98.useCallback)(() => {
    onOpen(title);
  }, [onOpen, title]);
  const handleClick = (0, import_react98.useCallback)(() => {
    if (onClick) {
      onClick(handleOpen);
    } else {
      handleOpen();
    }
  }, [onClick, handleOpen]);
  const popoverActivator = /* @__PURE__ */ import_react98.default.createElement(SecondaryAction, {
    disclosure: true,
    disabled,
    icon,
    accessibilityLabel,
    onClick: handleClick
  }, title);
  return /* @__PURE__ */ import_react98.default.createElement(Popover2, {
    active: Boolean(active),
    activator: popoverActivator,
    preferredAlignment: "left",
    onClose: handleClose,
    hideOnPrint: true
  }, /* @__PURE__ */ import_react98.default.createElement(ActionList, {
    items: actions,
    sections,
    onActionAnyItem: handleClose
  }), details && /* @__PURE__ */ import_react98.default.createElement("div", {
    className: styles35.Details
  }, details));
}

// node_modules/@shopify/polaris/build/esm/components/ActionMenu/components/Actions/components/ActionsMeasurer/ActionsMeasurer.js
var import_react99 = __toESM(require_react());
var ACTION_SPACING = 8;
function ActionsMeasurer({
  actions = [],
  groups = [],
  handleMeasurement: handleMeasurementProp
}) {
  const i18n = useI18n();
  const containerNode = (0, import_react99.useRef)(null);
  const defaultRollupGroup = {
    title: i18n.translate("Polaris.ActionMenu.Actions.moreActions"),
    actions: []
  };
  const activator = /* @__PURE__ */ import_react99.default.createElement(SecondaryAction, {
    disclosure: true
  }, defaultRollupGroup.title);
  const handleMeasurement = (0, import_react99.useCallback)(() => {
    if (!containerNode.current) {
      return;
    }
    const containerWidth = containerNode.current.offsetWidth;
    const hiddenActionNodes = containerNode.current.children;
    const hiddenActionNodesArray = Array.from(hiddenActionNodes);
    const hiddenActionsWidths = hiddenActionNodesArray.map((node) => {
      const buttonWidth = Math.ceil(node.getBoundingClientRect().width);
      return buttonWidth + ACTION_SPACING;
    });
    const disclosureWidth = hiddenActionsWidths.pop() || 0;
    handleMeasurementProp({
      containerWidth,
      disclosureWidth,
      hiddenActionsWidths
    });
  }, [handleMeasurementProp]);
  (0, import_react99.useEffect)(() => {
    handleMeasurement();
  }, [handleMeasurement, actions, groups]);
  const actionsMarkup = actions.map((action) => {
    const {
      content,
      onAction,
      ...rest
    } = action;
    return /* @__PURE__ */ import_react99.default.createElement(SecondaryAction, Object.assign({
      key: content,
      onClick: onAction
    }, rest), content);
  });
  const groupsMarkup = groups.map((group) => {
    const {
      title,
      icon
    } = group;
    return /* @__PURE__ */ import_react99.default.createElement(SecondaryAction, {
      key: title,
      disclosure: true,
      icon
    }, title);
  });
  useEventListener("resize", handleMeasurement);
  return /* @__PURE__ */ import_react99.default.createElement("div", {
    className: styles34.ActionsLayoutMeasurer,
    ref: containerNode
  }, actionsMarkup, groupsMarkup, activator);
}

// node_modules/@shopify/polaris/build/esm/components/ActionMenu/components/Actions/Actions.js
function Actions({
  actions,
  groups,
  onActionRollup
}) {
  const i18n = useI18n();
  const rollupActiveRef = (0, import_react100.useRef)(null);
  const [activeMenuGroup, setActiveMenuGroup] = (0, import_react100.useState)(void 0);
  const [state, setState] = (0, import_react100.useReducer)((data, partialData) => {
    return {
      ...data,
      ...partialData
    };
  }, {
    disclosureWidth: 0,
    containerWidth: Infinity,
    actionsWidths: [],
    visibleActions: [],
    hiddenActions: [],
    visibleGroups: [],
    hiddenGroups: [],
    hasMeasured: false
  });
  const {
    visibleActions,
    hiddenActions,
    visibleGroups,
    hiddenGroups,
    containerWidth,
    disclosureWidth,
    actionsWidths,
    hasMeasured
  } = state;
  const defaultRollupGroup = {
    title: i18n.translate("Polaris.ActionMenu.Actions.moreActions"),
    actions: []
  };
  const handleMenuGroupToggle = (0, import_react100.useCallback)((group) => setActiveMenuGroup(activeMenuGroup ? void 0 : group), [activeMenuGroup]);
  const handleMenuGroupClose = (0, import_react100.useCallback)(() => setActiveMenuGroup(void 0), []);
  (0, import_react100.useEffect)(() => {
    if (containerWidth === 0) {
      return;
    }
    const {
      visibleActions: visibleActions2,
      visibleGroups: visibleGroups2,
      hiddenActions: hiddenActions2,
      hiddenGroups: hiddenGroups2
    } = getVisibleAndHiddenActionsIndices(actions, groups, disclosureWidth, actionsWidths, containerWidth);
    setState({
      visibleActions: visibleActions2,
      visibleGroups: visibleGroups2,
      hiddenActions: hiddenActions2,
      hiddenGroups: hiddenGroups2,
      hasMeasured: containerWidth !== Infinity
    });
  }, [containerWidth, disclosureWidth, actions, groups, actionsWidths, setState]);
  const actionsOrDefault = (0, import_react100.useMemo)(() => actions ?? [], [actions]);
  const groupsOrDefault = (0, import_react100.useMemo)(() => groups ?? [], [groups]);
  const actionsMarkup = actionsOrDefault.filter((_, index) => {
    if (!visibleActions.includes(index)) {
      return false;
    }
    return true;
  }).map((action) => {
    const {
      content,
      onAction,
      ...rest
    } = action;
    return /* @__PURE__ */ import_react100.default.createElement(SecondaryAction, Object.assign({
      key: content,
      onClick: onAction
    }, rest), content);
  });
  const groupsToFilter = hiddenGroups.length > 0 || hiddenActions.length > 0 ? [...groupsOrDefault, defaultRollupGroup] : [...groupsOrDefault];
  const filteredGroups = groupsToFilter.filter((group, index) => {
    const hasNoGroupsProp = groupsOrDefault.length === 0;
    const isVisibleGroup = visibleGroups.includes(index);
    const isDefaultGroup = group === defaultRollupGroup;
    if (hasNoGroupsProp) {
      return hiddenActions.length > 0;
    }
    if (isDefaultGroup) {
      return true;
    }
    return isVisibleGroup;
  });
  const hiddenActionObjects = hiddenActions.map((index) => actionsOrDefault[index]).filter((action) => action != null);
  const hiddenGroupObjects = hiddenGroups.map((index) => groupsOrDefault[index]).filter((group) => group != null);
  const groupsMarkup = filteredGroups.map((group) => {
    const {
      title,
      actions: groupActions,
      ...rest
    } = group;
    const isDefaultGroup = group === defaultRollupGroup;
    const allHiddenItems = [...hiddenActionObjects, ...hiddenGroupObjects];
    const [finalRolledUpActions, finalRolledUpSectionGroups] = allHiddenItems.reduce(([actions2, sections], action) => {
      if (isMenuGroup(action)) {
        sections.push({
          title: action.title,
          items: action.actions.map((sectionAction) => ({
            ...sectionAction,
            disabled: action.disabled || sectionAction.disabled
          }))
        });
      } else {
        actions2.push(action);
      }
      return [actions2, sections];
    }, [[], []]);
    if (!isDefaultGroup) {
      return /* @__PURE__ */ import_react100.default.createElement(MenuGroup, Object.assign({
        key: title,
        title,
        active: title === activeMenuGroup,
        actions: groupActions
      }, rest, {
        onOpen: handleMenuGroupToggle,
        onClose: handleMenuGroupClose
      }));
    }
    return /* @__PURE__ */ import_react100.default.createElement(MenuGroup, Object.assign({
      key: title,
      title,
      active: title === activeMenuGroup,
      actions: [...finalRolledUpActions, ...groupActions],
      sections: finalRolledUpSectionGroups
    }, rest, {
      onOpen: handleMenuGroupToggle,
      onClose: handleMenuGroupClose
    }));
  });
  const handleMeasurement = (0, import_react100.useCallback)((measurements) => {
    const {
      hiddenActionsWidths: actionsWidths2,
      containerWidth: containerWidth2,
      disclosureWidth: disclosureWidth2
    } = measurements;
    const {
      visibleActions: visibleActions2,
      hiddenActions: hiddenActions2,
      visibleGroups: visibleGroups2,
      hiddenGroups: hiddenGroups2
    } = getVisibleAndHiddenActionsIndices(actionsOrDefault, groupsOrDefault, disclosureWidth2, actionsWidths2, containerWidth2);
    if (onActionRollup) {
      const isRollupActive = hiddenActions2.length > 0 || hiddenGroups2.length > 0;
      if (rollupActiveRef.current !== isRollupActive) {
        onActionRollup(isRollupActive);
        rollupActiveRef.current = isRollupActive;
      }
    }
    setState({
      visibleActions: visibleActions2,
      hiddenActions: hiddenActions2,
      visibleGroups: visibleGroups2,
      hiddenGroups: hiddenGroups2,
      actionsWidths: actionsWidths2,
      containerWidth: containerWidth2,
      disclosureWidth: disclosureWidth2,
      hasMeasured: true
    });
  }, [actionsOrDefault, groupsOrDefault, onActionRollup]);
  const actionsMeasurer = /* @__PURE__ */ import_react100.default.createElement(ActionsMeasurer, {
    actions,
    groups,
    handleMeasurement
  });
  return /* @__PURE__ */ import_react100.default.createElement("div", {
    className: styles34.ActionsLayoutOuter
  }, actionsMeasurer, /* @__PURE__ */ import_react100.default.createElement("div", {
    className: classNames(styles34.ActionsLayout, !hasMeasured && styles34["ActionsLayout--measuring"])
  }, actionsMarkup, groupsMarkup));
}
function isMenuGroup(actionOrMenuGroup) {
  return "title" in actionOrMenuGroup;
}

// node_modules/@shopify/polaris/build/esm/components/ActionMenu/ActionMenu.js
function ActionMenu({
  actions = [],
  groups = [],
  rollup,
  rollupActionsLabel,
  onActionRollup
}) {
  if (actions.length === 0 && groups.length === 0) {
    return null;
  }
  const actionMenuClassNames = classNames(styles18.ActionMenu, rollup && styles18.rollup);
  const rollupSections = groups.map((group) => convertGroupToSection(group));
  return /* @__PURE__ */ import_react101.default.createElement("div", {
    className: actionMenuClassNames
  }, rollup ? /* @__PURE__ */ import_react101.default.createElement(RollupActions, {
    accessibilityLabel: rollupActionsLabel,
    items: actions,
    sections: rollupSections
  }) : /* @__PURE__ */ import_react101.default.createElement(Actions, {
    actions,
    groups,
    onActionRollup
  }));
}
function hasGroupsWithActions(groups = []) {
  return groups.length === 0 ? false : groups.some((group) => group.actions.length > 0);
}
function convertGroupToSection({
  title,
  actions,
  disabled
}) {
  return {
    title,
    items: actions.map((action) => ({
      ...action,
      disabled: disabled || action.disabled
    }))
  };
}

// node_modules/@shopify/polaris/build/esm/utilities/media-query/hooks.js
var import_react103 = __toESM(require_react());

// node_modules/@shopify/polaris/build/esm/utilities/media-query/context.js
var import_react102 = __toESM(require_react());
var MediaQueryContext = /* @__PURE__ */ (0, import_react102.createContext)(void 0);

// node_modules/@shopify/polaris/build/esm/utilities/media-query/hooks.js
function useMediaQuery() {
  const mediaQuery = (0, import_react103.useContext)(MediaQueryContext);
  if (!mediaQuery) {
    throw new Error("No mediaQuery was provided. Your application must be wrapped in an <AppProvider> component. See https://polaris.shopify.com/components/app-provider for implementation instructions.");
  }
  return mediaQuery;
}

// node_modules/@shopify/polaris/build/esm/components/Pagination/Pagination.js
var import_react104 = __toESM(require_react());

// node_modules/@shopify/polaris/build/esm/utilities/is-input-focused.js
var EditableTarget = /* @__PURE__ */ function(EditableTarget2) {
  EditableTarget2["Input"] = "INPUT";
  EditableTarget2["Textarea"] = "TEXTAREA";
  EditableTarget2["Select"] = "SELECT";
  EditableTarget2["ContentEditable"] = "contenteditable";
  return EditableTarget2;
}(EditableTarget || {});
function isInputFocused() {
  if (document == null || document.activeElement == null) {
    return false;
  }
  const {
    tagName
  } = document.activeElement;
  return tagName === EditableTarget.Input || tagName === EditableTarget.Textarea || tagName === EditableTarget.Select || document.activeElement.hasAttribute(EditableTarget.ContentEditable);
}

// node_modules/@shopify/polaris/build/esm/components/Pagination/Pagination.css.js
var styles37 = {
  "Pagination": "Polaris-Pagination",
  "table": "Polaris-Pagination--table",
  "TablePaginationActions": "Polaris-Pagination__TablePaginationActions"
};

// node_modules/@shopify/polaris/build/esm/components/Pagination/Pagination.js
function Pagination({
  hasNext,
  hasPrevious,
  nextURL,
  previousURL,
  onNext,
  onPrevious,
  nextTooltip,
  previousTooltip,
  nextKeys,
  previousKeys,
  accessibilityLabel,
  accessibilityLabels,
  label,
  type = "page"
}) {
  const i18n = useI18n();
  const node = /* @__PURE__ */ (0, import_react104.createRef)();
  const navLabel = accessibilityLabel || i18n.translate("Polaris.Pagination.pagination");
  const previousLabel = accessibilityLabels?.previous || i18n.translate("Polaris.Pagination.previous");
  const nextLabel = accessibilityLabels?.next || i18n.translate("Polaris.Pagination.next");
  const prev = /* @__PURE__ */ import_react104.default.createElement(Button, {
    icon: SvgChevronLeftIcon,
    accessibilityLabel: previousLabel,
    url: previousURL,
    onClick: onPrevious,
    disabled: !hasPrevious,
    id: "previousURL"
  });
  const constructedPrevious = previousTooltip && hasPrevious ? /* @__PURE__ */ import_react104.default.createElement(Tooltip, {
    activatorWrapper: "span",
    content: previousTooltip,
    preferredPosition: "below"
  }, prev) : prev;
  const next = /* @__PURE__ */ import_react104.default.createElement(Button, {
    icon: SvgChevronRightIcon,
    accessibilityLabel: nextLabel,
    url: nextURL,
    onClick: onNext,
    disabled: !hasNext,
    id: "nextURL"
  });
  const constructedNext = nextTooltip && hasNext ? /* @__PURE__ */ import_react104.default.createElement(Tooltip, {
    activatorWrapper: "span",
    content: nextTooltip,
    preferredPosition: "below"
  }, next) : next;
  const previousHandler = onPrevious || noop4;
  const previousButtonEvents = previousKeys && (previousURL || onPrevious) && hasPrevious && previousKeys.map((key) => /* @__PURE__ */ import_react104.default.createElement(KeypressListener, {
    key,
    keyCode: key,
    handler: previousURL ? handleCallback(clickPaginationLink("previousURL", node)) : handleCallback(previousHandler)
  }));
  const nextHandler = onNext || noop4;
  const nextButtonEvents = nextKeys && (nextURL || onNext) && hasNext && nextKeys.map((key) => /* @__PURE__ */ import_react104.default.createElement(KeypressListener, {
    key,
    keyCode: key,
    handler: nextURL ? handleCallback(clickPaginationLink("nextURL", node)) : handleCallback(nextHandler)
  }));
  if (type === "table") {
    const labelMarkup2 = label ? /* @__PURE__ */ import_react104.default.createElement(Box, {
      padding: "300",
      paddingBlockStart: "0",
      paddingBlockEnd: "0"
    }, /* @__PURE__ */ import_react104.default.createElement(Text, {
      as: "span",
      variant: "bodySm",
      fontWeight: "medium"
    }, label)) : null;
    return /* @__PURE__ */ import_react104.default.createElement("nav", {
      "aria-label": navLabel,
      ref: node,
      className: classNames(styles37.Pagination, styles37.table)
    }, previousButtonEvents, nextButtonEvents, /* @__PURE__ */ import_react104.default.createElement(Box, {
      background: "bg-surface-secondary",
      paddingBlockStart: "150",
      paddingBlockEnd: "150",
      paddingInlineStart: "300",
      paddingInlineEnd: "200"
    }, /* @__PURE__ */ import_react104.default.createElement(InlineStack, {
      align: "center",
      blockAlign: "center"
    }, /* @__PURE__ */ import_react104.default.createElement("div", {
      className: styles37.TablePaginationActions,
      "data-buttongroup-variant": "segmented"
    }, /* @__PURE__ */ import_react104.default.createElement("div", null, constructedPrevious), labelMarkup2, /* @__PURE__ */ import_react104.default.createElement("div", null, constructedNext)))));
  }
  const labelTextMarkup = hasNext && hasPrevious ? /* @__PURE__ */ import_react104.default.createElement("span", null, label) : /* @__PURE__ */ import_react104.default.createElement(Text, {
    tone: "subdued",
    as: "span"
  }, label);
  const labelMarkup = label ? /* @__PURE__ */ import_react104.default.createElement(Box, {
    padding: "300",
    paddingBlockStart: "0",
    paddingBlockEnd: "0"
  }, /* @__PURE__ */ import_react104.default.createElement("div", {
    "aria-live": "polite"
  }, labelTextMarkup)) : null;
  return /* @__PURE__ */ import_react104.default.createElement("nav", {
    "aria-label": navLabel,
    ref: node,
    className: styles37.Pagination
  }, previousButtonEvents, nextButtonEvents, /* @__PURE__ */ import_react104.default.createElement(ButtonGroup, {
    variant: "segmented"
  }, constructedPrevious, labelMarkup, constructedNext));
}
function clickPaginationLink(id, node) {
  return () => {
    if (node.current == null) {
      return;
    }
    const link = node.current.querySelector(`#${id}`);
    if (link) {
      link.click();
    }
  };
}
function handleCallback(fn) {
  return () => {
    if (isInputFocused()) {
      return;
    }
    fn();
  };
}
function noop4() {
}

// node_modules/@shopify/polaris/build/esm/components/Page/components/Header/Header.js
var SHORT_TITLE = 20;
var REALLY_SHORT_TITLE = 8;
var LONG_TITLE = 34;
function Header({
  title,
  subtitle,
  pageReadyAccessibilityLabel,
  titleMetadata,
  additionalMetadata,
  titleHidden = false,
  primaryAction,
  pagination,
  filterActions,
  backAction,
  secondaryActions = [],
  actionGroups = [],
  compactTitle = false,
  onActionRollup
}) {
  const i18n = useI18n();
  const {
    isNavigationCollapsed
  } = useMediaQuery();
  const isSingleRow = !primaryAction && !pagination && (isInterface(secondaryActions) && !secondaryActions.length || isReactElement(secondaryActions)) && !actionGroups.length;
  const hasActionGroupsOrSecondaryActions = actionGroups.length > 0 || isInterface(secondaryActions) && secondaryActions.length > 0 || isReactElement(secondaryActions);
  const breadcrumbMarkup = backAction ? /* @__PURE__ */ import_react105.default.createElement("div", {
    className: styles15.BreadcrumbWrapper
  }, /* @__PURE__ */ import_react105.default.createElement(Box, {
    maxWidth: "100%",
    paddingInlineEnd: "100",
    printHidden: true
  }, /* @__PURE__ */ import_react105.default.createElement(Breadcrumbs, {
    backAction
  }))) : null;
  const paginationMarkup = pagination && !isNavigationCollapsed ? /* @__PURE__ */ import_react105.default.createElement("div", {
    className: styles15.PaginationWrapper
  }, /* @__PURE__ */ import_react105.default.createElement(Box, {
    printHidden: true
  }, /* @__PURE__ */ import_react105.default.createElement(Pagination, Object.assign({}, pagination, {
    hasPrevious: pagination.hasPrevious,
    hasNext: pagination.hasNext
  })))) : null;
  const pageTitleMarkup = /* @__PURE__ */ import_react105.default.createElement("div", {
    className: classNames(styles15.TitleWrapper, !hasActionGroupsOrSecondaryActions && styles15.TitleWrapperExpand)
  }, /* @__PURE__ */ import_react105.default.createElement(Title, {
    title,
    subtitle,
    titleMetadata,
    compactTitle,
    hasSubtitleMaxWidth: hasActionGroupsOrSecondaryActions
  }));
  const labelForPageReadyAccessibilityLabel = pageReadyAccessibilityLabel || title;
  const pageReadyAccessibilityLabelMarkup = labelForPageReadyAccessibilityLabel ? /* @__PURE__ */ import_react105.default.createElement("div", {
    role: "status"
  }, /* @__PURE__ */ import_react105.default.createElement(Text, {
    visuallyHidden: true,
    as: "p"
  }, i18n.translate("Polaris.Page.Header.pageReadyAccessibilityLabel", {
    title: labelForPageReadyAccessibilityLabel
  }))) : void 0;
  const primaryActionMarkup = primaryAction ? /* @__PURE__ */ import_react105.default.createElement(PrimaryActionMarkup, {
    primaryAction
  }) : null;
  let actionMenuMarkup = null;
  if (isInterface(secondaryActions) && (secondaryActions.length > 0 || hasGroupsWithActions(actionGroups))) {
    actionMenuMarkup = /* @__PURE__ */ import_react105.default.createElement(ActionMenu, {
      actions: secondaryActions,
      groups: actionGroups,
      rollup: isNavigationCollapsed,
      rollupActionsLabel: title ? i18n.translate("Polaris.Page.Header.rollupActionsLabel", {
        title
      }) : void 0,
      onActionRollup
    });
  } else if (isReactElement(secondaryActions)) {
    actionMenuMarkup = /* @__PURE__ */ import_react105.default.createElement(import_react105.default.Fragment, null, secondaryActions);
  }
  const navigationMarkup = breadcrumbMarkup || paginationMarkup ? /* @__PURE__ */ import_react105.default.createElement(Box, {
    printHidden: true,
    paddingBlockEnd: "100",
    paddingInlineEnd: actionMenuMarkup && isNavigationCollapsed ? "1000" : void 0
  }, /* @__PURE__ */ import_react105.default.createElement(InlineStack, {
    gap: "400",
    align: "space-between",
    blockAlign: "center"
  }, breadcrumbMarkup, paginationMarkup)) : null;
  const additionalMetadataMarkup = additionalMetadata ? /* @__PURE__ */ import_react105.default.createElement("div", {
    className: styles15.AdditionalMetaData
  }, /* @__PURE__ */ import_react105.default.createElement(Text, {
    tone: "subdued",
    as: "span",
    variant: "bodySm"
  }, additionalMetadata)) : null;
  const headerClassNames = classNames(isSingleRow && styles15.isSingleRow, navigationMarkup && styles15.hasNavigation, actionMenuMarkup && styles15.hasActionMenu, isNavigationCollapsed && styles15.mobileView, !backAction && styles15.noBreadcrumbs, title && title.length < LONG_TITLE && styles15.mediumTitle, title && title.length > LONG_TITLE && styles15.longTitle);
  const {
    slot1,
    slot2,
    slot3,
    slot4,
    slot5
  } = determineLayout({
    actionMenuMarkup,
    additionalMetadataMarkup,
    breadcrumbMarkup,
    isNavigationCollapsed,
    pageTitleMarkup,
    paginationMarkup,
    primaryActionMarkup,
    title
  });
  return /* @__PURE__ */ import_react105.default.createElement(Box, {
    position: "relative",
    paddingBlockStart: {
      xs: "400",
      md: "600"
    },
    paddingBlockEnd: {
      xs: "400",
      md: "600"
    },
    paddingInlineStart: {
      xs: "400",
      sm: "0"
    },
    paddingInlineEnd: {
      xs: "400",
      sm: "0"
    },
    visuallyHidden: titleHidden
  }, pageReadyAccessibilityLabelMarkup, /* @__PURE__ */ import_react105.default.createElement("div", {
    className: headerClassNames
  }, /* @__PURE__ */ import_react105.default.createElement(FilterActionsProvider, {
    filterActions: Boolean(filterActions)
  }, /* @__PURE__ */ import_react105.default.createElement(ConditionalRender, {
    condition: [slot1, slot2, slot3, slot4].some(notNull)
  }, /* @__PURE__ */ import_react105.default.createElement("div", {
    className: styles15.Row
  }, slot1, slot2, /* @__PURE__ */ import_react105.default.createElement(ConditionalRender, {
    condition: [slot3, slot4].some(notNull)
  }, /* @__PURE__ */ import_react105.default.createElement("div", {
    className: styles15.RightAlign
  }, /* @__PURE__ */ import_react105.default.createElement(ConditionalWrapper, {
    condition: [slot3, slot4].every(notNull),
    wrapper: (children) => /* @__PURE__ */ import_react105.default.createElement("div", {
      className: styles15.Actions
    }, children)
  }, slot3, slot4))))), /* @__PURE__ */ import_react105.default.createElement(ConditionalRender, {
    condition: [slot5].some(notNull)
  }, /* @__PURE__ */ import_react105.default.createElement("div", {
    className: styles15.Row
  }, /* @__PURE__ */ import_react105.default.createElement(InlineStack, {
    gap: "400"
  }, slot5))))));
}
function PrimaryActionMarkup({
  primaryAction
}) {
  const {
    isNavigationCollapsed
  } = useMediaQuery();
  let actionMarkup;
  if (isInterface(primaryAction)) {
    const {
      primary: isPrimary,
      helpText
    } = primaryAction;
    const primary = isPrimary === void 0 ? true : isPrimary;
    const content = buttonFrom(shouldShowIconOnly(isNavigationCollapsed, primaryAction), {
      variant: primary ? "primary" : void 0
    });
    actionMarkup = helpText ? /* @__PURE__ */ import_react105.default.createElement(Tooltip, {
      content: helpText
    }, content) : content;
  } else {
    actionMarkup = primaryAction;
  }
  return /* @__PURE__ */ import_react105.default.createElement("div", {
    className: styles15.PrimaryActionWrapper
  }, /* @__PURE__ */ import_react105.default.createElement(Box, {
    printHidden: true
  }, actionMarkup));
}
function shouldShowIconOnly(isMobile, action) {
  let {
    content,
    accessibilityLabel
  } = action;
  const {
    icon
  } = action;
  if (icon == null)
    return {
      ...action,
      icon: void 0
    };
  if (isMobile) {
    accessibilityLabel = accessibilityLabel || content;
    content = void 0;
  }
  return {
    ...action,
    content,
    accessibilityLabel,
    icon
  };
}
function notNull(value) {
  return value != null;
}
function determineLayout({
  actionMenuMarkup,
  additionalMetadataMarkup,
  breadcrumbMarkup,
  isNavigationCollapsed,
  pageTitleMarkup,
  paginationMarkup,
  primaryActionMarkup,
  title
}) {
  const layouts = {
    mobileCompact: {
      slots: {
        slot1: null,
        slot2: pageTitleMarkup,
        slot3: actionMenuMarkup,
        slot4: primaryActionMarkup,
        slot5: additionalMetadataMarkup
      },
      condition: isNavigationCollapsed && breadcrumbMarkup == null && title != null && title.length <= REALLY_SHORT_TITLE
    },
    mobileDefault: {
      slots: {
        slot1: breadcrumbMarkup,
        slot2: pageTitleMarkup,
        slot3: actionMenuMarkup,
        slot4: primaryActionMarkup,
        slot5: additionalMetadataMarkup
      },
      condition: isNavigationCollapsed
    },
    desktopCompact: {
      slots: {
        slot1: breadcrumbMarkup,
        slot2: pageTitleMarkup,
        slot3: actionMenuMarkup,
        slot4: primaryActionMarkup,
        slot5: additionalMetadataMarkup
      },
      condition: !isNavigationCollapsed && paginationMarkup == null && actionMenuMarkup == null && title != null && title.length <= SHORT_TITLE
    },
    desktopDefault: {
      slots: {
        slot1: breadcrumbMarkup,
        slot2: pageTitleMarkup,
        slot3: /* @__PURE__ */ import_react105.default.createElement(import_react105.default.Fragment, null, actionMenuMarkup, primaryActionMarkup),
        slot4: paginationMarkup,
        slot5: additionalMetadataMarkup
      },
      condition: !isNavigationCollapsed
    }
  };
  const layout = Object.values(layouts).find((layout2) => layout2.condition) || layouts.desktopDefault;
  return layout.slots;
}

// node_modules/@shopify/polaris/build/esm/components/Page/Page.js
function Page({
  children,
  fullWidth,
  narrowWidth,
  ...rest
}) {
  const pageClassName = classNames(styles14.Page, fullWidth && styles14.fullWidth, narrowWidth && styles14.narrowWidth);
  const hasHeaderContent = rest.title != null && rest.title !== "" || rest.subtitle != null && rest.subtitle !== "" || rest.primaryAction != null || rest.secondaryActions != null && (isInterface(rest.secondaryActions) && rest.secondaryActions.length > 0 || isReactElement(rest.secondaryActions)) || rest.actionGroups != null && rest.actionGroups.length > 0 || rest.backAction != null;
  const contentClassName = classNames(!hasHeaderContent && styles14.Content);
  const headerMarkup = hasHeaderContent ? /* @__PURE__ */ import_react106.default.createElement(Header, Object.assign({
    filterActions: true
  }, rest)) : null;
  return /* @__PURE__ */ import_react106.default.createElement("div", {
    className: pageClassName
  }, headerMarkup, /* @__PURE__ */ import_react106.default.createElement("div", {
    className: contentClassName
  }, children));
}

// node_modules/@shopify/polaris/build/esm/components/ResourceItem/ResourceItem.js
var import_react112 = __toESM(require_react());
var import_react_fast_compare = __toESM(require_react_fast_compare());

// node_modules/@shopify/polaris/build/esm/components/ResourceItem/ResourceItem.css.js
var styles38 = {
  "ResourceItem": "Polaris-ResourceItem",
  "Actions": "Polaris-ResourceItem__Actions",
  "ItemWrapper": "Polaris-ResourceItem__ItemWrapper",
  "CheckboxWrapper": "Polaris-ResourceItem__CheckboxWrapper",
  "focusedInner": "Polaris-ResourceItem--focusedInner",
  "focused": "Polaris-ResourceItem--focused",
  "selected": "Polaris-ResourceItem--selected",
  "Link": "Polaris-ResourceItem__Link",
  "Button": "Polaris-ResourceItem__Button",
  "selectable": "Polaris-ResourceItem--selectable",
  "disabled": "Polaris-ResourceItem--disabled",
  "ListItem": "Polaris-ResourceItem__ListItem",
  "hasBulkActions": "Polaris-ResourceItem--hasBulkActions"
};

// node_modules/@shopify/polaris/build/esm/utilities/resource-list/types.js
var SELECT_ALL_ITEMS = "All";

// node_modules/@shopify/polaris/build/esm/utilities/resource-list/context.js
var import_react107 = __toESM(require_react());
var ResourceListContext = /* @__PURE__ */ (0, import_react107.createContext)({});

// node_modules/@shopify/polaris/build/esm/components/Checkbox/Checkbox.js
var import_react110 = __toESM(require_react());

// node_modules/@shopify/polaris/build/esm/utilities/listbox/context.js
var import_react108 = __toESM(require_react());
var WithinListboxContext = /* @__PURE__ */ (0, import_react108.createContext)(false);

// node_modules/@shopify/polaris/build/esm/components/Checkbox/Checkbox.css.js
var styles39 = {
  "Checkbox": "Polaris-Checkbox",
  "ChoiceLabel": "Polaris-Checkbox__ChoiceLabel",
  "Backdrop": "Polaris-Checkbox__Backdrop",
  "Input": "Polaris-Checkbox__Input",
  "Input-indeterminate": "Polaris-Checkbox__Input--indeterminate",
  "Icon": "Polaris-Checkbox__Icon",
  "animated": "Polaris-Checkbox--animated",
  "toneMagic": "Polaris-Checkbox--toneMagic",
  "hover": "Polaris-Checkbox--hover",
  "error": "Polaris-Checkbox--error",
  "checked": "Polaris-Checkbox--checked",
  "pathAnimation": "Polaris-Checkbox--pathAnimation"
};

// node_modules/@shopify/polaris/build/esm/components/Choice/Choice.js
var import_react109 = __toESM(require_react());

// node_modules/@shopify/polaris/build/esm/components/Choice/Choice.css.js
var styles40 = {
  "Choice": "Polaris-Choice",
  "labelHidden": "Polaris-Choice--labelHidden",
  "Label": "Polaris-Choice__Label",
  "Control": "Polaris-Choice__Control",
  "disabled": "Polaris-Choice--disabled",
  "toneMagic": "Polaris-Choice--toneMagic",
  "Descriptions": "Polaris-Choice__Descriptions",
  "HelpText": "Polaris-Choice__HelpText"
};

// node_modules/@shopify/polaris/build/esm/components/Choice/Choice.js
function Choice({
  id,
  label,
  disabled,
  error,
  children,
  labelHidden,
  helpText,
  onClick,
  labelClassName,
  fill,
  bleed,
  bleedBlockStart,
  bleedBlockEnd,
  bleedInlineStart,
  bleedInlineEnd,
  tone
}) {
  const className = classNames(styles40.Choice, labelHidden && styles40.labelHidden, disabled && styles40.disabled, tone && styles40[variationName("tone", tone)], labelClassName);
  const labelStyle = {
    // Pass through overrides for bleed values if they're set by the prop
    ...getResponsiveProps("choice", "bleed-block-end", "space", bleedBlockEnd || bleed),
    ...getResponsiveProps("choice", "bleed-block-start", "space", bleedBlockStart || bleed),
    ...getResponsiveProps("choice", "bleed-inline-start", "space", bleedInlineStart || bleed),
    ...getResponsiveProps("choice", "bleed-inline-end", "space", bleedInlineEnd || bleed),
    ...Object.fromEntries(Object.entries(getResponsiveValue("choice", "fill", fill)).map(
      // Map "true" => "100%" and "false" => "auto" for use in
      // inline/block-size calc()
      ([key, value]) => [key, value ? "100%" : "auto"]
    ))
  };
  const labelMarkup = (
    // NOTE: Can't use a Box here for a few reasons:
    // - as="label" fails `Element` typecheck (even though the JS works)
    // - Can't pass hard coded values to padding (forced to tokens)
    // - Can't pass negative values to padding
    // - Can't pass margins at all
    /* @__PURE__ */ import_react109.default.createElement("label", {
      className,
      htmlFor: id,
      onClick,
      style: sanitizeCustomProperties(labelStyle)
    }, /* @__PURE__ */ import_react109.default.createElement("span", {
      className: styles40.Control
    }, children), /* @__PURE__ */ import_react109.default.createElement("span", {
      className: styles40.Label
    }, /* @__PURE__ */ import_react109.default.createElement(Text, {
      as: "span",
      variant: "bodyMd"
    }, label)))
  );
  const helpTextMarkup = helpText ? /* @__PURE__ */ import_react109.default.createElement("div", {
    className: styles40.HelpText,
    id: helpTextID2(id)
  }, /* @__PURE__ */ import_react109.default.createElement(Text, {
    as: "span",
    tone: disabled ? void 0 : "subdued"
  }, helpText)) : null;
  const errorMarkup = error && typeof error !== "boolean" && /* @__PURE__ */ import_react109.default.createElement("div", {
    className: styles40.Error
  }, /* @__PURE__ */ import_react109.default.createElement(InlineError, {
    message: error,
    fieldID: id
  }));
  const descriptionMarkup = helpTextMarkup || errorMarkup ? /* @__PURE__ */ import_react109.default.createElement("div", {
    className: styles40.Descriptions
  }, errorMarkup, helpTextMarkup) : null;
  return descriptionMarkup ? /* @__PURE__ */ import_react109.default.createElement("div", null, labelMarkup, descriptionMarkup) : labelMarkup;
}
function helpTextID2(id) {
  return `${id}HelpText`;
}

// node_modules/@shopify/polaris/build/esm/components/Checkbox/Checkbox.js
var Checkbox = /* @__PURE__ */ (0, import_react110.forwardRef)(function Checkbox2({
  ariaControls,
  ariaDescribedBy: ariaDescribedByProp,
  label,
  labelHidden,
  checked = false,
  helpText,
  disabled,
  id: idProp,
  name,
  value,
  error,
  onChange,
  onFocus,
  onBlur,
  labelClassName,
  fill,
  bleed,
  bleedBlockStart,
  bleedBlockEnd,
  bleedInlineStart,
  bleedInlineEnd,
  tone
}, ref) {
  const inputNode = (0, import_react110.useRef)(null);
  const uniqId = (0, import_react110.useId)();
  const id = idProp ?? uniqId;
  const isWithinListbox = (0, import_react110.useContext)(WithinListboxContext);
  (0, import_react110.useImperativeHandle)(ref, () => ({
    focus: () => {
      if (inputNode.current) {
        inputNode.current.focus();
      }
    }
  }));
  const handleBlur = () => {
    onBlur && onBlur();
  };
  const handleOnClick = () => {
    if (onChange == null || inputNode.current == null || disabled) {
      return;
    }
    onChange(inputNode.current.checked, id);
    inputNode.current.focus();
  };
  const describedBy = [];
  if (error && typeof error !== "boolean") {
    describedBy.push(errorTextID(id));
  }
  if (helpText) {
    describedBy.push(helpTextID2(id));
  }
  if (ariaDescribedByProp) {
    describedBy.push(ariaDescribedByProp);
  }
  const ariaDescribedBy = describedBy.length ? describedBy.join(" ") : void 0;
  const wrapperClassName = classNames(styles39.Checkbox, error && styles39.error);
  const isIndeterminate = checked === "indeterminate";
  const isChecked = !isIndeterminate && Boolean(checked);
  const indeterminateAttributes = isIndeterminate ? {
    indeterminate: "true",
    "aria-checked": "mixed"
  } : {
    "aria-checked": isChecked
  };
  const iconSource = /* @__PURE__ */ import_react110.default.createElement("svg", {
    viewBox: "0 0 16 16",
    shapeRendering: "geometricPrecision",
    textRendering: "geometricPrecision"
  }, /* @__PURE__ */ import_react110.default.createElement("path", {
    className: classNames(checked && styles39.checked),
    d: "M1.5,5.5L3.44655,8.22517C3.72862,8.62007,4.30578,8.64717,4.62362,8.28044L10.5,1.5",
    transform: "translate(2 2.980376)",
    opacity: "0",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    pathLength: "1"
  }));
  const inputClassName = classNames(styles39.Input, isIndeterminate && styles39["Input-indeterminate"], tone && styles39[variationName("tone", tone)]);
  const extraChoiceProps = {
    helpText,
    error,
    bleed,
    bleedBlockStart,
    bleedBlockEnd,
    bleedInlineStart,
    bleedInlineEnd
  };
  return /* @__PURE__ */ import_react110.default.createElement(Choice, Object.assign({
    id,
    label,
    labelHidden,
    disabled,
    labelClassName: classNames(styles39.ChoiceLabel, labelClassName),
    fill,
    tone
  }, extraChoiceProps), /* @__PURE__ */ import_react110.default.createElement("span", {
    className: wrapperClassName
  }, /* @__PURE__ */ import_react110.default.createElement("input", Object.assign({
    ref: inputNode,
    id,
    name,
    value,
    type: "checkbox",
    checked: isChecked,
    disabled,
    className: inputClassName,
    onBlur: handleBlur,
    onChange: noop5,
    onClick: handleOnClick,
    onFocus,
    "aria-invalid": error != null,
    "aria-controls": ariaControls,
    "aria-describedby": ariaDescribedBy,
    role: isWithinListbox ? "presentation" : "checkbox"
  }, indeterminateAttributes)), /* @__PURE__ */ import_react110.default.createElement("span", {
    className: styles39.Backdrop,
    onClick: stopPropagation,
    onKeyUp: stopPropagation
  }), /* @__PURE__ */ import_react110.default.createElement("span", {
    className: classNames(styles39.Icon, !isIndeterminate && styles39.animated)
  }, isIndeterminate ? /* @__PURE__ */ import_react110.default.createElement(Icon, {
    source: SvgMinusIcon
  }) : iconSource)));
});
function noop5() {
}
function stopPropagation(event) {
  event.stopPropagation();
}

// node_modules/@shopify/polaris/build/esm/components/InlineGrid/InlineGrid.js
var import_react111 = __toESM(require_react());

// node_modules/@shopify/polaris/build/esm/components/InlineGrid/InlineGrid.css.js
var styles41 = {
  "InlineGrid": "Polaris-InlineGrid"
};

// node_modules/@shopify/polaris/build/esm/components/InlineGrid/InlineGrid.js
function InlineGrid({
  children,
  columns,
  gap,
  alignItems
}) {
  const style = {
    ...getResponsiveValue("inline-grid", "grid-template-columns", formatInlineGrid(columns)),
    ...getResponsiveProps("inline-grid", "gap", "space", gap),
    "--pc-inline-grid-align-items": alignItems
  };
  return /* @__PURE__ */ import_react111.default.createElement("div", {
    className: styles41.InlineGrid,
    style: sanitizeCustomProperties(style)
  }, children);
}
function formatInlineGrid(columns) {
  if (typeof columns === "object" && columns !== null && !Array.isArray(columns)) {
    return Object.fromEntries(Object.entries(columns).map(([breakpointAlias, breakpointInlineGrid]) => [breakpointAlias, getColumnValue(breakpointInlineGrid)]));
  }
  return getColumnValue(columns);
}
function getColumnValue(columns) {
  if (!columns)
    return void 0;
  if (typeof columns === "number" || !isNaN(Number(columns))) {
    return `repeat(${Number(columns)}, minmax(0, 1fr))`;
  }
  if (typeof columns === "string")
    return columns;
  return columns.map((column) => {
    switch (column) {
      case "oneThird":
        return "minmax(0, 1fr)";
      case "oneHalf":
        return "minmax(0, 1fr)";
      case "twoThirds":
        return "minmax(0, 2fr)";
    }
  }).join(" ");
}

// node_modules/@shopify/polaris/build/esm/components/ResourceItem/ResourceItem.js
var BaseResourceItem = class extends import_react112.Component {
  constructor(...args) {
    super(...args);
    this.state = {
      actionsMenuVisible: false,
      focused: false,
      focusedInner: false,
      selected: isSelected(this.props.id, this.props.context.selectedItems)
    };
    this.node = null;
    this.overlayRef = /* @__PURE__ */ (0, import_react112.createRef)();
    this.buttonOverlay = /* @__PURE__ */ (0, import_react112.createRef)();
    this.setNode = (node) => {
      this.node = node;
    };
    this.handleFocus = (event) => {
      if (event.target === this.buttonOverlay.current || this.node && event.target === this.overlayRef.current) {
        this.setState({
          focused: true,
          focusedInner: false
        });
      } else if (this.node && this.node.contains(event.target)) {
        this.setState({
          focused: true,
          focusedInner: true
        });
      }
    };
    this.handleBlur = ({
      relatedTarget
    }) => {
      if (this.node && relatedTarget instanceof Element && this.node.contains(relatedTarget)) {
        return;
      }
      this.setState({
        focused: false,
        focusedInner: false
      });
    };
    this.handleMouseOut = () => {
      this.state.focused && this.setState({
        focused: false,
        focusedInner: false
      });
      if (this.props.onMouseOut) {
        this.props.onMouseOut();
      }
    };
    this.handleLargerSelectionArea = (event) => {
      stopPropagation2(event);
      this.handleSelection(!this.state.selected, event.nativeEvent.shiftKey);
    };
    this.handleSelection = (value, shiftKey) => {
      const {
        id,
        sortOrder,
        context: {
          onSelectionChange
        }
      } = this.props;
      if (id == null || onSelectionChange == null) {
        return;
      }
      this.setState({
        focused: value,
        focusedInner: value
      });
      onSelectionChange(value, id, sortOrder, shiftKey);
    };
    this.handleClick = (event) => {
      stopPropagation2(event);
      const {
        id,
        onClick,
        url,
        context: {
          selectMode
        }
      } = this.props;
      const {
        ctrlKey,
        metaKey
      } = event.nativeEvent;
      const anchor = this.node && this.node.querySelector("a");
      if (selectMode) {
        this.handleLargerSelectionArea(event);
        return;
      }
      if (anchor === event.target) {
        return;
      }
      if (onClick) {
        onClick(id);
      }
      if (url && (ctrlKey || metaKey)) {
        window.open(url, "_blank");
        return;
      }
      if (url && anchor) {
        anchor.click();
      }
    };
    this.handleKeyUp = (event) => {
      const {
        disabled,
        onClick = noop6,
        context: {
          selectMode
        }
      } = this.props;
      const {
        key
      } = event;
      if (key === "Enter" && this.props.url && !selectMode && !disabled) {
        onClick();
      }
    };
    this.handleActionsClick = () => {
      this.setState(({
        actionsMenuVisible
      }) => ({
        actionsMenuVisible: !actionsMenuVisible
      }));
    };
    this.handleCloseRequest = () => {
      this.setState({
        actionsMenuVisible: false
      });
    };
  }
  static getDerivedStateFromProps(nextProps, prevState) {
    const selected = isSelected(nextProps.id, nextProps.context.selectedItems);
    if (prevState.selected === selected) {
      return null;
    }
    return {
      selected
    };
  }
  shouldComponentUpdate(nextProps, nextState) {
    const {
      children: nextChildren,
      context: {
        selectedItems: nextSelectedItems,
        ...restNextContext
      },
      ...restNextProps
    } = nextProps;
    const {
      children,
      context: {
        selectedItems,
        ...restContext
      },
      ...restProps
    } = this.props;
    const nextSelectMode = nextProps.context.selectMode;
    return !(0, import_react_fast_compare.default)(this.state, nextState) || this.props.context.selectMode !== nextSelectMode || !nextProps.context.selectMode && (!(0, import_react_fast_compare.default)(restProps, restNextProps) || !(0, import_react_fast_compare.default)(restContext, restNextContext));
  }
  render() {
    const {
      children,
      url,
      external,
      media,
      shortcutActions,
      ariaControls,
      ariaExpanded,
      persistActions = false,
      accessibilityLabel,
      name,
      context: {
        selectable,
        selectMode,
        hasBulkActions,
        loading,
        resourceName
      },
      i18n,
      verticalAlignment,
      dataHref,
      breakpoints,
      onMouseOver,
      disabled
    } = this.props;
    const {
      actionsMenuVisible,
      focused,
      focusedInner,
      selected
    } = this.state;
    let ownedMarkup = null;
    let handleMarkup = null;
    if (selectable) {
      const checkboxAccessibilityLabel = name || accessibilityLabel || i18n.translate("Polaris.Common.checkbox");
      handleMarkup = /* @__PURE__ */ import_react112.default.createElement("div", {
        className: styles38.CheckboxWrapper,
        onClick: stopPropagation2,
        onChange: this.handleLargerSelectionArea
      }, /* @__PURE__ */ import_react112.default.createElement(UseId, null, (id) => /* @__PURE__ */ import_react112.default.createElement(Checkbox, {
        id,
        label: checkboxAccessibilityLabel,
        labelHidden: true,
        checked: selected,
        disabled: loading || disabled,
        bleedInlineStart: "300",
        bleedInlineEnd: "300",
        bleedBlockStart: "300",
        bleedBlockEnd: "300",
        fill: true,
        labelClassName: styles38.CheckboxLabel
      })));
    }
    if (media || selectable) {
      ownedMarkup = /* @__PURE__ */ import_react112.default.createElement(InlineStack, {
        gap: "300",
        blockAlign: media && selectable ? "center" : getAlignment(verticalAlignment)
      }, handleMarkup, media);
    }
    const className = classNames(styles38.ResourceItem, focused && styles38.focused, selectable && styles38.selectable, selected && styles38.selected, selectMode && styles38.selectMode, persistActions && styles38.persistActions, focusedInner && styles38.focusedInner, disabled && styles38.disabled);
    const listItemClassName = classNames(styles38.ListItem, focused && !focusedInner && styles38.focused, hasBulkActions && styles38.hasBulkActions, selected && styles38.selected, selectable && styles38.selectable);
    let actionsMarkup = null;
    let disclosureMarkup = null;
    if (shortcutActions && !loading) {
      if (persistActions) {
        actionsMarkup = breakpoints?.lgUp ? /* @__PURE__ */ import_react112.default.createElement("div", {
          className: styles38.Actions,
          onClick: stopPropagation2
        }, /* @__PURE__ */ import_react112.default.createElement(ButtonGroup, null, buttonsFrom(shortcutActions, {
          variant: "tertiary"
        }))) : null;
        const disclosureAccessibilityLabel = name ? i18n.translate("Polaris.ResourceList.Item.actionsDropdownLabel", {
          accessibilityLabel: name
        }) : i18n.translate("Polaris.ResourceList.Item.actionsDropdown");
        disclosureMarkup = !selectMode && breakpoints?.lgDown ? /* @__PURE__ */ import_react112.default.createElement("div", {
          onClick: stopPropagation2
        }, /* @__PURE__ */ import_react112.default.createElement(Popover2, {
          activator: /* @__PURE__ */ import_react112.default.createElement(Button, {
            accessibilityLabel: disclosureAccessibilityLabel,
            onClick: this.handleActionsClick,
            variant: "tertiary",
            icon: SvgMenuHorizontalIcon
          }),
          onClose: this.handleCloseRequest,
          active: actionsMenuVisible
        }, /* @__PURE__ */ import_react112.default.createElement(ActionList, {
          items: shortcutActions
        }))) : null;
      } else if (breakpoints?.lgUp) {
        actionsMarkup = /* @__PURE__ */ import_react112.default.createElement("div", {
          className: styles38.Actions,
          onClick: stopPropagation2
        }, /* @__PURE__ */ import_react112.default.createElement(Box, {
          position: "absolute",
          insetBlockStart: "400",
          insetInlineEnd: "500"
        }, /* @__PURE__ */ import_react112.default.createElement(ButtonGroup, {
          variant: "segmented"
        }, buttonsFrom(shortcutActions, {
          size: "slim"
        }))));
      }
    }
    const containerMarkup = /* @__PURE__ */ import_react112.default.createElement(Box, {
      id: this.props.id,
      position: "relative",
      paddingInlineStart: "300",
      paddingInlineEnd: "300",
      paddingBlockStart: "300",
      paddingBlockEnd: "300",
      zIndex: "var(--pc-resource-item-content-stacking-order)"
    }, /* @__PURE__ */ import_react112.default.createElement(InlineGrid, {
      columns: {
        xs: "1fr auto"
      }
    }, /* @__PURE__ */ import_react112.default.createElement(InlineGrid, {
      columns: {
        xs: media || selectable ? "auto 1fr" : "1fr"
      },
      gap: "300"
    }, ownedMarkup, /* @__PURE__ */ import_react112.default.createElement(InlineStack, {
      blockAlign: getAlignment(verticalAlignment)
    }, /* @__PURE__ */ import_react112.default.createElement(Box, {
      width: "100%",
      padding: "0"
    }, children))), actionsMarkup, disclosureMarkup));
    const tabIndex = loading ? -1 : 0;
    const ariaLabel = accessibilityLabel || i18n.translate("Polaris.ResourceList.Item.viewItem", {
      itemName: name || resourceName && resourceName.singular || ""
    });
    const accessibleMarkup = url ? /* @__PURE__ */ import_react112.default.createElement(UseId, null, (id) => /* @__PURE__ */ import_react112.default.createElement(UnstyledLink, {
      "aria-describedby": this.props.id,
      "aria-label": ariaLabel,
      className: styles38.Link,
      url,
      external,
      tabIndex,
      id,
      ref: this.overlayRef
    })) : /* @__PURE__ */ import_react112.default.createElement("button", {
      className: styles38.Button,
      "aria-label": ariaLabel,
      "aria-controls": ariaControls,
      "aria-expanded": ariaExpanded,
      onClick: this.handleClick,
      tabIndex,
      ref: this.buttonOverlay
    });
    return /* @__PURE__ */ import_react112.default.createElement("li", {
      className: listItemClassName,
      "data-href": dataHref
    }, /* @__PURE__ */ import_react112.default.createElement("div", {
      className: styles38.ItemWrapper
    }, /* @__PURE__ */ import_react112.default.createElement("div", {
      ref: this.setNode,
      className,
      onClick: disabled ? () => {
      } : this.handleClick,
      onFocus: this.handleFocus,
      onBlur: this.handleBlur,
      onKeyUp: this.handleKeyUp,
      onMouseOver,
      onMouseOut: this.handleMouseOut,
      "data-href": url
    }, disabled ? null : accessibleMarkup, containerMarkup)));
  }
};
function noop6() {
}
function stopPropagation2(event) {
  event.stopPropagation();
}
function isSelected(id, selectedItems) {
  return Boolean(selectedItems && (Array.isArray(selectedItems) && selectedItems.includes(id) || selectedItems === SELECT_ALL_ITEMS));
}
function ResourceItem(props) {
  const breakpoints = useBreakpoints();
  return /* @__PURE__ */ import_react112.default.createElement(BaseResourceItem, Object.assign({}, props, {
    breakpoints,
    context: (0, import_react112.useContext)(ResourceListContext),
    i18n: useI18n()
  }));
}
function getAlignment(alignment) {
  switch (alignment) {
    case "leading":
      return "start";
    case "trailing":
      return "end";
    case "center":
      return "center";
    case "fill":
      return "stretch";
    case "baseline":
      return "baseline";
    default:
      return "start";
  }
}
function UseId(props) {
  const id = (0, import_react112.useId)();
  return props.children(id);
}

// node_modules/@shopify/polaris/build/esm/components/ResourceList/ResourceList.js
var import_react125 = __toESM(require_react());

// node_modules/@shopify/polaris/build/esm/components/ResourceList/ResourceList.css.js
var styles42 = {
  "FiltersWrapper": "Polaris-ResourceList__FiltersWrapper",
  "ResourceListWrapper": "Polaris-ResourceList__ResourceListWrapper",
  "ResourceList": "Polaris-ResourceList",
  "HeaderOuterWrapper": "Polaris-ResourceList__HeaderOuterWrapper",
  "BulkActionsWrapper": "Polaris-ResourceList__BulkActionsWrapper",
  "HeaderWrapper-disabled": "Polaris-ResourceList__HeaderWrapper--disabled",
  "HeaderWrapper-overlay": "Polaris-ResourceList__HeaderWrapper--overlay",
  "HeaderWrapper": "Polaris-ResourceList__HeaderWrapper",
  "HeaderWrapper-isSticky": "Polaris-ResourceList__HeaderWrapper--isSticky",
  "HeaderContentWrapper": "Polaris-ResourceList__HeaderContentWrapper",
  "HeaderWrapper-inSelectMode": "Polaris-ResourceList__HeaderWrapper--inSelectMode",
  "SortWrapper": "Polaris-ResourceList__SortWrapper",
  "AlternateToolWrapper": "Polaris-ResourceList__AlternateToolWrapper",
  "HeaderWrapper-hasSelect": "Polaris-ResourceList__HeaderWrapper--hasSelect",
  "HeaderWrapper-hasAlternateTool": "Polaris-ResourceList__HeaderWrapper--hasAlternateTool",
  "HeaderWrapper-hasSort": "Polaris-ResourceList__HeaderWrapper--hasSort",
  "HeaderTitleWrapper": "Polaris-ResourceList__HeaderTitleWrapper",
  "SelectAllActionsWrapper": "Polaris-ResourceList__SelectAllActionsWrapper",
  "SelectAllActionsWrapperSticky": "Polaris-ResourceList__SelectAllActionsWrapperSticky",
  "SelectAllActionsWrapperAtEnd": "Polaris-ResourceList__SelectAllActionsWrapperAtEnd",
  "SelectAllActionsWrapperAtEndAppear": "Polaris-ResourceList__SelectAllActionsWrapperAtEndAppear",
  "BulkActionsWrapperVisible": "Polaris-ResourceList__BulkActionsWrapperVisible",
  "PaginationWrapper": "Polaris-ResourceList__PaginationWrapper",
  "CheckableButtonWrapper": "Polaris-ResourceList__CheckableButtonWrapper",
  "SelectButtonWrapper": "Polaris-ResourceList__SelectButtonWrapper",
  "EmptySearchResultWrapper": "Polaris-ResourceList__EmptySearchResultWrapper",
  "ItemWrapper": "Polaris-ResourceList__ItemWrapper",
  "ItemWrapper-isLoading": "Polaris-ResourceList__ItemWrapper--isLoading",
  "SpinnerContainer": "Polaris-ResourceList__SpinnerContainer",
  "LoadingOverlay": "Polaris-ResourceList__LoadingOverlay",
  "DisabledPointerEvents": "Polaris-ResourceList__DisabledPointerEvents",
  "disableTextSelection": "Polaris-ResourceList--disableTextSelection"
};

// node_modules/@shopify/polaris/build/esm/components/Select/Select.js
var import_react113 = __toESM(require_react());

// node_modules/@shopify/polaris/build/esm/components/Select/Select.css.js
var styles43 = {
  "Select": "Polaris-Select",
  "disabled": "Polaris-Select--disabled",
  "error": "Polaris-Select--error",
  "Backdrop": "Polaris-Select__Backdrop",
  "Input": "Polaris-Select__Input",
  "Content": "Polaris-Select__Content",
  "InlineLabel": "Polaris-Select__InlineLabel",
  "Icon": "Polaris-Select__Icon",
  "SelectedOption": "Polaris-Select__SelectedOption",
  "Prefix": "Polaris-Select__Prefix",
  "hover": "Polaris-Select--hover",
  "toneMagic": "Polaris-Select--toneMagic"
};

// node_modules/@shopify/polaris/build/esm/components/Select/Select.js
var PLACEHOLDER_VALUE = "";
function Select({
  options: optionsProp,
  label,
  labelAction,
  labelHidden: labelHiddenProp,
  labelInline,
  disabled,
  helpText,
  placeholder,
  id: idProp,
  name,
  value = PLACEHOLDER_VALUE,
  error,
  onChange,
  onFocus,
  onBlur,
  requiredIndicator,
  tone
}) {
  const {
    value: focused,
    toggle: toggleFocused
  } = useToggle(false);
  const uniqId = (0, import_react113.useId)();
  const id = idProp ?? uniqId;
  const labelHidden = labelInline ? true : labelHiddenProp;
  const className = classNames(styles43.Select, error && styles43.error, tone && styles43[variationName("tone", tone)], disabled && styles43.disabled);
  const handleFocus = (0, import_react113.useCallback)((event) => {
    toggleFocused();
    onFocus?.(event);
  }, [onFocus, toggleFocused]);
  const handleBlur = (0, import_react113.useCallback)((event) => {
    toggleFocused();
    onBlur?.(event);
  }, [onBlur, toggleFocused]);
  const handleChange = onChange ? (event) => onChange(event.currentTarget.value, id) : void 0;
  const describedBy = [];
  if (helpText) {
    describedBy.push(helpTextID(id));
  }
  if (error) {
    describedBy.push(`${id}Error`);
  }
  const options = optionsProp || [];
  let normalizedOptions = options.map(normalizeOption);
  if (placeholder) {
    normalizedOptions = [{
      label: placeholder,
      value: PLACEHOLDER_VALUE,
      disabled: true
    }, ...normalizedOptions];
  }
  const inlineLabelMarkup = labelInline && /* @__PURE__ */ import_react113.default.createElement(Box, {
    paddingInlineEnd: "100"
  }, /* @__PURE__ */ import_react113.default.createElement(Text, {
    as: "span",
    variant: "bodyMd",
    tone: tone && tone === "magic" && !focused ? "magic-subdued" : "subdued",
    truncate: true
  }, label));
  const selectedOption = getSelectedOption(normalizedOptions, value);
  const prefixMarkup = selectedOption.prefix && /* @__PURE__ */ import_react113.default.createElement("div", {
    className: styles43.Prefix
  }, selectedOption.prefix);
  const contentMarkup = /* @__PURE__ */ import_react113.default.createElement("div", {
    className: styles43.Content,
    "aria-hidden": true,
    "aria-disabled": disabled
  }, inlineLabelMarkup, prefixMarkup, /* @__PURE__ */ import_react113.default.createElement("span", {
    className: styles43.SelectedOption
  }, selectedOption.label), /* @__PURE__ */ import_react113.default.createElement("span", {
    className: styles43.Icon
  }, /* @__PURE__ */ import_react113.default.createElement(Icon, {
    source: SvgSelectIcon
  })));
  const optionsMarkup = normalizedOptions.map(renderOption);
  return /* @__PURE__ */ import_react113.default.createElement(Labelled, {
    id,
    label,
    error,
    action: labelAction,
    labelHidden,
    helpText,
    requiredIndicator,
    disabled
  }, /* @__PURE__ */ import_react113.default.createElement("div", {
    className
  }, /* @__PURE__ */ import_react113.default.createElement("select", {
    id,
    name,
    value,
    className: styles43.Input,
    disabled,
    onFocus: handleFocus,
    onBlur: handleBlur,
    onChange: handleChange,
    "aria-invalid": Boolean(error),
    "aria-describedby": describedBy.length ? describedBy.join(" ") : void 0,
    "aria-required": requiredIndicator
  }, optionsMarkup), contentMarkup, /* @__PURE__ */ import_react113.default.createElement("div", {
    className: styles43.Backdrop
  })));
}
function isString(option) {
  return typeof option === "string";
}
function isGroup(option) {
  return typeof option === "object" && "options" in option && option.options != null;
}
function normalizeStringOption(option) {
  return {
    label: option,
    value: option
  };
}
function normalizeOption(option) {
  if (isString(option)) {
    return normalizeStringOption(option);
  } else if (isGroup(option)) {
    const {
      title,
      options
    } = option;
    return {
      title,
      options: options.map((option2) => {
        return isString(option2) ? normalizeStringOption(option2) : option2;
      })
    };
  }
  return option;
}
function getSelectedOption(options, value) {
  const flatOptions = flattenOptions(options);
  let selectedOption = flatOptions.find((option) => value === option.value);
  if (selectedOption === void 0) {
    selectedOption = flatOptions.find((option) => !option.hidden);
  }
  return selectedOption || {
    value: "",
    label: ""
  };
}
function flattenOptions(options) {
  let flatOptions = [];
  options.forEach((optionOrGroup) => {
    if (isGroup(optionOrGroup)) {
      flatOptions = flatOptions.concat(optionOrGroup.options);
    } else {
      flatOptions.push(optionOrGroup);
    }
  });
  return flatOptions;
}
function renderSingleOption(option) {
  const {
    value,
    label,
    prefix: _prefix,
    key,
    ...rest
  } = option;
  return /* @__PURE__ */ import_react113.default.createElement("option", Object.assign({
    key: key ?? value,
    value
  }, rest), label);
}
function renderOption(optionOrGroup) {
  if (isGroup(optionOrGroup)) {
    const {
      title,
      options
    } = optionOrGroup;
    return /* @__PURE__ */ import_react113.default.createElement("optgroup", {
      label: title,
      key: title
    }, options.map(renderSingleOption));
  }
  return renderSingleOption(optionOrGroup);
}

// node_modules/@shopify/polaris/build/esm/components/CheckableButton/CheckableButton.js
var import_react114 = __toESM(require_react());

// node_modules/@shopify/polaris/build/esm/components/CheckableButton/CheckableButton.css.js
var styles44 = {
  "CheckableButton": "Polaris-CheckableButton",
  "Checkbox": "Polaris-CheckableButton__Checkbox",
  "Label": "Polaris-CheckableButton__Label"
};

// node_modules/@shopify/polaris/build/esm/components/CheckableButton/CheckableButton.js
var CheckableButton = /* @__PURE__ */ (0, import_react114.forwardRef)(function CheckableButton2({
  accessibilityLabel,
  label = "",
  onToggleAll,
  selected,
  disabled,
  ariaLive
}, ref) {
  const checkBoxRef = (0, import_react114.useRef)(null);
  function focus() {
    checkBoxRef?.current?.focus();
  }
  (0, import_react114.useImperativeHandle)(ref, () => {
    return {
      focus
    };
  });
  return /* @__PURE__ */ import_react114.default.createElement("div", {
    className: styles44.CheckableButton,
    onClick: onToggleAll
  }, /* @__PURE__ */ import_react114.default.createElement("div", {
    className: styles44.Checkbox
  }, /* @__PURE__ */ import_react114.default.createElement(Checkbox, {
    label: accessibilityLabel,
    labelHidden: true,
    checked: selected,
    disabled,
    onChange: onToggleAll,
    ref: checkBoxRef
  })), label ? /* @__PURE__ */ import_react114.default.createElement("span", {
    className: styles44.Label,
    "aria-live": ariaLive
  }, /* @__PURE__ */ import_react114.default.createElement(Text, {
    as: "span",
    variant: "bodySm",
    fontWeight: "medium"
  }, label)) : null);
});

// node_modules/@shopify/polaris/build/esm/components/Sticky/Sticky.js
var import_react116 = __toESM(require_react());

// node_modules/@shopify/polaris/build/esm/utilities/sticky-manager/hooks.js
var import_react115 = __toESM(require_react());
function useStickyManager() {
  const stickyManager = (0, import_react115.useContext)(StickyManagerContext);
  if (!stickyManager) {
    throw new MissingAppProviderError("No StickyManager was provided.");
  }
  return stickyManager;
}

// node_modules/@shopify/polaris/build/esm/components/Sticky/Sticky.js
var StickyInner = class extends import_react116.Component {
  constructor(...args) {
    super(...args);
    this.state = {
      isSticky: false,
      style: {}
    };
    this.placeHolderNode = null;
    this.stickyNode = null;
    this.setPlaceHolderNode = (node) => {
      this.placeHolderNode = node;
    };
    this.setStickyNode = (node) => {
      this.stickyNode = node;
    };
    this.handlePositioning = (stick, top = 0, left = 0, width = 0) => {
      const {
        isSticky
      } = this.state;
      if (stick && !isSticky || !stick && isSticky) {
        this.adjustPlaceHolderNode(stick);
        this.setState({
          isSticky: !isSticky
        }, () => {
          if (this.props.onStickyChange == null) {
            return null;
          }
          this.props.onStickyChange(!isSticky);
          if (this.props.boundingElement == null) {
            return null;
          }
          this.props.boundingElement.toggleAttribute("data-sticky-active");
        });
      }
      const style = stick ? {
        position: "fixed",
        top,
        left,
        width
      } : {};
      this.setState({
        style
      });
    };
    this.adjustPlaceHolderNode = (add) => {
      if (this.placeHolderNode && this.stickyNode) {
        this.placeHolderNode.style.paddingBottom = add ? `${getRectForNode(this.stickyNode).height}px` : "0px";
      }
    };
  }
  componentDidMount() {
    const {
      boundingElement,
      offset = false,
      disableWhenStacked = false,
      stickyManager
    } = this.props;
    if (!this.stickyNode || !this.placeHolderNode)
      return;
    stickyManager.registerStickyItem({
      stickyNode: this.stickyNode,
      placeHolderNode: this.placeHolderNode,
      handlePositioning: this.handlePositioning,
      offset,
      boundingElement,
      disableWhenStacked
    });
  }
  componentDidUpdate() {
    const {
      boundingElement,
      offset = false,
      disableWhenStacked = false,
      stickyManager
    } = this.props;
    if (!this.stickyNode || !this.placeHolderNode)
      return;
    const stickyManagerItem = stickyManager.getStickyItem(this.stickyNode);
    const didPropsChange = !stickyManagerItem || boundingElement !== stickyManagerItem.boundingElement || offset !== stickyManagerItem.offset || disableWhenStacked !== stickyManagerItem.disableWhenStacked;
    if (!didPropsChange)
      return;
    stickyManager.unregisterStickyItem(this.stickyNode);
    stickyManager.registerStickyItem({
      stickyNode: this.stickyNode,
      placeHolderNode: this.placeHolderNode,
      handlePositioning: this.handlePositioning,
      offset,
      boundingElement,
      disableWhenStacked
    });
  }
  componentWillUnmount() {
    const {
      stickyManager
    } = this.props;
    if (!this.stickyNode)
      return;
    stickyManager.unregisterStickyItem(this.stickyNode);
  }
  render() {
    const {
      style,
      isSticky
    } = this.state;
    const {
      children
    } = this.props;
    const childrenContent = isFunction(children) ? children(isSticky) : children;
    return /* @__PURE__ */ import_react116.default.createElement("div", null, /* @__PURE__ */ import_react116.default.createElement("div", {
      ref: this.setPlaceHolderNode
    }), /* @__PURE__ */ import_react116.default.createElement("div", {
      ref: this.setStickyNode,
      style
    }, childrenContent));
  }
};
function isFunction(arg) {
  return typeof arg === "function";
}
function Sticky(props) {
  const stickyManager = useStickyManager();
  return /* @__PURE__ */ import_react116.default.createElement(StickyInner, Object.assign({}, props, {
    stickyManager
  }));
}

// node_modules/@shopify/polaris/build/esm/components/EmptySearchResult/EmptySearchResult.js
var import_react119 = __toESM(require_react());

// node_modules/@shopify/polaris/build/esm/components/EmptySearchResult/illustrations/empty-search.svg.js
var img = "data:image/svg+xml,%3csvg width='60' height='60' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M41.87 24a17.87 17.87 0 11-35.74 0 17.87 17.87 0 0135.74 0zm-3.15 18.96a24 24 0 114.24-4.24L59.04 54.8a3 3 0 11-4.24 4.24L38.72 42.96z' fill='%238C9196'/%3e%3c/svg%3e";
var emptySearch = img;

// node_modules/@shopify/polaris/build/esm/components/LegacyStack/LegacyStack.js
var import_react118 = __toESM(require_react());

// node_modules/@shopify/polaris/build/esm/components/LegacyStack/LegacyStack.css.js
var styles45 = {
  "LegacyStack": "Polaris-LegacyStack",
  "Item": "Polaris-LegacyStack__Item",
  "noWrap": "Polaris-LegacyStack--noWrap",
  "spacingNone": "Polaris-LegacyStack--spacingNone",
  "spacingExtraTight": "Polaris-LegacyStack--spacingExtraTight",
  "spacingTight": "Polaris-LegacyStack--spacingTight",
  "spacingBaseTight": "Polaris-LegacyStack--spacingBaseTight",
  "spacingLoose": "Polaris-LegacyStack--spacingLoose",
  "spacingExtraLoose": "Polaris-LegacyStack--spacingExtraLoose",
  "distributionLeading": "Polaris-LegacyStack--distributionLeading",
  "distributionTrailing": "Polaris-LegacyStack--distributionTrailing",
  "distributionCenter": "Polaris-LegacyStack--distributionCenter",
  "distributionEqualSpacing": "Polaris-LegacyStack--distributionEqualSpacing",
  "distributionFill": "Polaris-LegacyStack--distributionFill",
  "distributionFillEvenly": "Polaris-LegacyStack--distributionFillEvenly",
  "alignmentLeading": "Polaris-LegacyStack--alignmentLeading",
  "alignmentTrailing": "Polaris-LegacyStack--alignmentTrailing",
  "alignmentCenter": "Polaris-LegacyStack--alignmentCenter",
  "alignmentFill": "Polaris-LegacyStack--alignmentFill",
  "alignmentBaseline": "Polaris-LegacyStack--alignmentBaseline",
  "vertical": "Polaris-LegacyStack--vertical",
  "Item-fill": "Polaris-LegacyStack__Item--fill"
};

// node_modules/@shopify/polaris/build/esm/components/LegacyStack/components/Item/Item.js
var import_react117 = __toESM(require_react());
function Item4({
  children,
  fill
}) {
  const className = classNames(styles45.Item, fill && styles45["Item-fill"]);
  return /* @__PURE__ */ import_react117.default.createElement("div", {
    className
  }, children);
}

// node_modules/@shopify/polaris/build/esm/components/LegacyStack/LegacyStack.js
var LegacyStack = /* @__PURE__ */ (0, import_react118.memo)(function Stack({
  children,
  vertical,
  spacing,
  distribution,
  alignment,
  wrap
}) {
  const className = classNames(styles45.LegacyStack, vertical && styles45.vertical, spacing && styles45[variationName("spacing", spacing)], distribution && styles45[variationName("distribution", distribution)], alignment && styles45[variationName("alignment", alignment)], wrap === false && styles45.noWrap);
  const itemMarkup = elementChildren(children).map((child, index) => {
    const props = {
      key: index
    };
    return wrapWithComponent(child, Item4, props);
  });
  return /* @__PURE__ */ import_react118.default.createElement("div", {
    className
  }, itemMarkup);
});
LegacyStack.Item = Item4;

// node_modules/@shopify/polaris/build/esm/components/EmptySearchResult/EmptySearchResult.js
function EmptySearchResult({
  title,
  description,
  withIllustration
}) {
  const i18n = useI18n();
  const altText = i18n.translate("Polaris.EmptySearchResult.altText");
  const descriptionMarkup = description ? /* @__PURE__ */ import_react119.default.createElement("p", null, description) : null;
  const illustrationMarkup = withIllustration ? /* @__PURE__ */ import_react119.default.createElement(Image, {
    alt: altText,
    source: emptySearch,
    draggable: false
  }) : null;
  return /* @__PURE__ */ import_react119.default.createElement(LegacyStack, {
    alignment: "center",
    vertical: true
  }, illustrationMarkup, /* @__PURE__ */ import_react119.default.createElement(Text, {
    variant: "headingLg",
    as: "p"
  }, title), /* @__PURE__ */ import_react119.default.createElement(Text, {
    tone: "subdued",
    as: "span"
  }, descriptionMarkup));
}

// node_modules/@shopify/polaris/build/esm/components/BulkActions/BulkActions.js
var import_react124 = __toESM(require_react());

// node_modules/@shopify/polaris/build/esm/components/BulkActions/utilities.js
function getVisibleAndHiddenActionsIndices2(promotedActions = [], disclosureWidth, actionsWidths, containerWidth) {
  const sumTabWidths = actionsWidths.reduce((sum, width) => sum + width, 0);
  const arrayOfPromotedActionsIndices = promotedActions.map((_, index) => {
    return index;
  });
  const visiblePromotedActions = [];
  const hiddenPromotedActions = [];
  if (containerWidth > sumTabWidths) {
    visiblePromotedActions.push(...arrayOfPromotedActionsIndices);
  } else {
    let accumulatedWidth = 0;
    let hasReturned = false;
    arrayOfPromotedActionsIndices.forEach((currentPromotedActionsIndex) => {
      const currentActionsWidth = actionsWidths[currentPromotedActionsIndex];
      const notEnoughSpace = accumulatedWidth + currentActionsWidth >= containerWidth - disclosureWidth;
      if (notEnoughSpace || hasReturned) {
        hiddenPromotedActions.push(currentPromotedActionsIndex);
        hasReturned = true;
        return;
      }
      visiblePromotedActions.push(currentPromotedActionsIndex);
      accumulatedWidth += currentActionsWidth;
    });
  }
  return {
    visiblePromotedActions,
    hiddenPromotedActions
  };
}
function instanceOfBulkActionListSectionArray(actions) {
  const validList = actions.filter((action) => {
    return action.items;
  });
  return actions.length === validList.length;
}
function instanceOfBulkActionArray(actions) {
  const validList = actions.filter((action) => {
    return !action.items;
  });
  return actions.length === validList.length;
}
function instanceOfMenuGroupDescriptor(action) {
  return "title" in action && "actions" in action;
}
function instanceOfBulkActionListSection(action) {
  return "items" in action;
}
function getActionSections(actions) {
  if (!actions || actions.length === 0) {
    return;
  }
  if (instanceOfBulkActionListSectionArray(actions)) {
    return actions;
  }
  if (instanceOfBulkActionArray(actions)) {
    return [{
      items: actions
    }];
  }
}
function isNewBadgeInBadgeActions(actionSections) {
  if (!actionSections)
    return false;
  for (const action of actionSections) {
    for (const item of action.items) {
      if (item.badge?.tone === "new")
        return true;
    }
  }
  return false;
}

// node_modules/@shopify/polaris/build/esm/components/BulkActions/BulkActions.css.js
var styles46 = {
  "BulkActionsOuterLayout": "Polaris-BulkActions__BulkActionsOuterLayout",
  "BulkActionsSelectAllWrapper": "Polaris-BulkActions__BulkActionsSelectAllWrapper",
  "BulkActionsPromotedActionsWrapper": "Polaris-BulkActions__BulkActionsPromotedActionsWrapper",
  "BulkActionsLayout": "Polaris-BulkActions__BulkActionsLayout",
  "BulkActionsLayout--measuring": "Polaris-BulkActions--bulkActionsLayoutMeasuring",
  "BulkActionsMeasurerLayout": "Polaris-BulkActions__BulkActionsMeasurerLayout",
  "BulkActionButton": "Polaris-BulkActions__BulkActionButton",
  "disabled": "Polaris-BulkActions--disabled",
  "AllAction": "Polaris-BulkActions__AllAction"
};

// node_modules/@shopify/polaris/build/esm/components/BulkActions/components/BulkActionMenu/BulkActionMenu.js
var import_react122 = __toESM(require_react());

// node_modules/@shopify/polaris/build/esm/components/BulkActions/components/BulkActionButton/BulkActionButton.js
var import_react121 = __toESM(require_react());

// node_modules/@shopify/polaris/build/esm/components/Indicator/Indicator.js
var import_react120 = __toESM(require_react());

// node_modules/@shopify/polaris/build/esm/components/Indicator/Indicator.css.js
var styles47 = {
  "Indicator": "Polaris-Indicator",
  "pulseIndicator": "Polaris-Indicator--pulseIndicator"
};

// node_modules/@shopify/polaris/build/esm/components/Indicator/Indicator.js
function Indicator({
  pulse = true
}) {
  const className = classNames(styles47.Indicator, pulse && styles47.pulseIndicator);
  return /* @__PURE__ */ import_react120.default.createElement("span", {
    className
  });
}

// node_modules/@shopify/polaris/build/esm/components/BulkActions/components/BulkActionButton/BulkActionButton.js
function BulkActionButton({
  handleMeasurement,
  url,
  external,
  onAction,
  content,
  disclosure,
  accessibilityLabel,
  disabled,
  destructive,
  indicator,
  showContentInButton,
  size
}) {
  const bulkActionButton = (0, import_react121.useRef)(null);
  useComponentDidMount(() => {
    if (handleMeasurement && bulkActionButton.current) {
      const width = bulkActionButton.current.getBoundingClientRect().width;
      handleMeasurement(width);
    }
  });
  const isActivatorForMoreActionsPopover = disclosure && !showContentInButton;
  const buttonContent = isActivatorForMoreActionsPopover ? void 0 : content;
  const buttonMarkup = /* @__PURE__ */ import_react121.default.createElement(Button, {
    external,
    url,
    accessibilityLabel: isActivatorForMoreActionsPopover ? content : accessibilityLabel,
    tone: destructive ? "critical" : void 0,
    disclosure: disclosure && showContentInButton,
    onClick: onAction,
    disabled,
    size,
    icon: isActivatorForMoreActionsPopover ? /* @__PURE__ */ import_react121.default.createElement(Icon, {
      source: SvgMenuHorizontalIcon,
      tone: "base"
    }) : void 0
  }, buttonContent);
  return /* @__PURE__ */ import_react121.default.createElement("div", {
    className: styles46.BulkActionButton,
    ref: bulkActionButton
  }, isActivatorForMoreActionsPopover ? /* @__PURE__ */ import_react121.default.createElement(Tooltip, {
    content,
    preferredPosition: "below"
  }, buttonMarkup) : buttonMarkup, indicator && /* @__PURE__ */ import_react121.default.createElement(Indicator, null));
}

// node_modules/@shopify/polaris/build/esm/components/BulkActions/components/BulkActionMenu/BulkActionMenu.js
function BulkActionMenu({
  title,
  actions,
  isNewBadgeInBadgeActions: isNewBadgeInBadgeActions2,
  size
}) {
  const {
    value: isVisible,
    toggle: toggleMenuVisibility
  } = useToggle(false);
  return /* @__PURE__ */ import_react122.default.createElement(import_react122.default.Fragment, null, /* @__PURE__ */ import_react122.default.createElement(Popover2, {
    active: isVisible,
    activator: /* @__PURE__ */ import_react122.default.createElement(BulkActionButton, {
      disclosure: true,
      showContentInButton: true,
      onAction: toggleMenuVisibility,
      content: title,
      indicator: isNewBadgeInBadgeActions2,
      size
    }),
    onClose: toggleMenuVisibility,
    preferInputActivator: true
  }, /* @__PURE__ */ import_react122.default.createElement(ActionList, {
    items: actions,
    onActionAnyItem: toggleMenuVisibility
  })));
}

// node_modules/@shopify/polaris/build/esm/components/BulkActions/components/BulkActionsMeasurer/BulkActionsMeasurer.js
var import_react123 = __toESM(require_react());
var ACTION_SPACING2 = 4;
function BulkActionsMeasurer({
  promotedActions = [],
  disabled,
  buttonSize,
  handleMeasurement: handleMeasurementProp
}) {
  const i18n = useI18n();
  const containerNode = (0, import_react123.useRef)(null);
  const activatorLabel = i18n.translate("Polaris.ResourceList.BulkActions.moreActionsActivatorLabel");
  const activator = /* @__PURE__ */ import_react123.default.createElement(BulkActionButton, {
    disclosure: true,
    content: activatorLabel
  });
  const handleMeasurement = (0, import_react123.useCallback)(() => {
    if (!containerNode.current) {
      return;
    }
    const containerWidth = containerNode.current.offsetWidth;
    const hiddenActionNodes = containerNode.current.children;
    const hiddenActionNodesArray = Array.from(hiddenActionNodes);
    const hiddenActionsWidths = hiddenActionNodesArray.map((node) => {
      const buttonWidth = Math.ceil(node.getBoundingClientRect().width);
      return buttonWidth + ACTION_SPACING2;
    });
    const disclosureWidth = hiddenActionsWidths.pop() || 0;
    handleMeasurementProp({
      containerWidth,
      disclosureWidth,
      hiddenActionsWidths
    });
  }, [handleMeasurementProp]);
  (0, import_react123.useEffect)(() => {
    handleMeasurement();
  }, [handleMeasurement, promotedActions]);
  const promotedActionsMarkup = promotedActions.map((action, index) => {
    if (instanceOfMenuGroupDescriptor(action)) {
      return /* @__PURE__ */ import_react123.default.createElement(BulkActionButton, {
        key: index,
        disclosure: true,
        showContentInButton: true,
        content: action.title,
        size: buttonSize
      });
    }
    return /* @__PURE__ */ import_react123.default.createElement(BulkActionButton, Object.assign({
      key: index,
      disabled
    }, action, {
      size: buttonSize
    }));
  });
  useEventListener("resize", handleMeasurement);
  return /* @__PURE__ */ import_react123.default.createElement("div", {
    className: styles46.BulkActionsMeasurerLayout,
    ref: containerNode
  }, promotedActionsMarkup, activator);
}

// node_modules/@shopify/polaris/build/esm/components/BulkActions/BulkActions.js
var BulkActions = /* @__PURE__ */ (0, import_react124.forwardRef)(function BulkActions2({
  promotedActions,
  actions,
  disabled,
  buttonSize,
  paginatedSelectAllAction,
  paginatedSelectAllText,
  label,
  accessibilityLabel,
  selected,
  onToggleAll,
  onMoreActionPopoverToggle,
  width,
  selectMode
}, ref) {
  const i18n = useI18n();
  const [popoverActive, setPopoverActive] = (0, import_react124.useState)(false);
  const [state, setState] = (0, import_react124.useReducer)((data, partialData) => {
    return {
      ...data,
      ...partialData
    };
  }, {
    disclosureWidth: 0,
    containerWidth: Infinity,
    actionsWidths: [],
    visiblePromotedActions: [],
    hiddenPromotedActions: [],
    hasMeasured: false
  });
  const {
    visiblePromotedActions,
    hiddenPromotedActions,
    containerWidth,
    disclosureWidth,
    actionsWidths,
    hasMeasured
  } = state;
  (0, import_react124.useEffect)(() => {
    if (containerWidth === 0 || !promotedActions || promotedActions.length === 0) {
      return;
    }
    const {
      visiblePromotedActions: visiblePromotedActions2,
      hiddenPromotedActions: hiddenPromotedActions2
    } = getVisibleAndHiddenActionsIndices2(promotedActions, disclosureWidth, actionsWidths, containerWidth);
    setState({
      visiblePromotedActions: visiblePromotedActions2,
      hiddenPromotedActions: hiddenPromotedActions2,
      hasMeasured: containerWidth !== Infinity
    });
  }, [containerWidth, disclosureWidth, promotedActions, actionsWidths]);
  const activatorLabel = !promotedActions || promotedActions && visiblePromotedActions.length === 0 ? i18n.translate("Polaris.ResourceList.BulkActions.actionsActivatorLabel") : i18n.translate("Polaris.ResourceList.BulkActions.moreActionsActivatorLabel");
  const paginatedSelectAllMarkup = paginatedSelectAllAction ? /* @__PURE__ */ import_react124.default.createElement(UnstyledButton, {
    className: styles46.AllAction,
    onClick: paginatedSelectAllAction.onAction,
    size: "slim",
    disabled
  }, /* @__PURE__ */ import_react124.default.createElement(Text, {
    as: "span",
    variant: "bodySm",
    fontWeight: "medium"
  }, paginatedSelectAllAction.content)) : null;
  const hasTextAndAction = paginatedSelectAllText && paginatedSelectAllAction;
  const ariaLive = hasTextAndAction ? "polite" : void 0;
  const checkableButtonProps = {
    accessibilityLabel,
    label: hasTextAndAction ? paginatedSelectAllText : label,
    selected,
    onToggleAll,
    disabled,
    ariaLive,
    ref
  };
  const togglePopover = (0, import_react124.useCallback)(() => {
    onMoreActionPopoverToggle?.(popoverActive);
    setPopoverActive((popoverActive2) => !popoverActive2);
  }, [onMoreActionPopoverToggle, popoverActive]);
  const handleMeasurement = (0, import_react124.useCallback)((measurements) => {
    const {
      hiddenActionsWidths: actionsWidths2,
      containerWidth: containerWidth2,
      disclosureWidth: disclosureWidth2
    } = measurements;
    if (!promotedActions || promotedActions.length === 0) {
      return;
    }
    const {
      visiblePromotedActions: visiblePromotedActions2,
      hiddenPromotedActions: hiddenPromotedActions2
    } = getVisibleAndHiddenActionsIndices2(promotedActions, disclosureWidth2, actionsWidths2, containerWidth2);
    setState({
      visiblePromotedActions: visiblePromotedActions2,
      hiddenPromotedActions: hiddenPromotedActions2,
      actionsWidths: actionsWidths2,
      containerWidth: containerWidth2,
      disclosureWidth: disclosureWidth2,
      hasMeasured: true
    });
  }, [promotedActions]);
  const actionSections = getActionSections(actions);
  const promotedActionsMarkup = promotedActions ? promotedActions.filter((_, index) => {
    if (!visiblePromotedActions.includes(index)) {
      return false;
    }
    return true;
  }).map((action, index) => {
    if (instanceOfMenuGroupDescriptor(action)) {
      return /* @__PURE__ */ import_react124.default.createElement(BulkActionMenu, Object.assign({
        key: index
      }, action, {
        isNewBadgeInBadgeActions: isNewBadgeInBadgeActions(actionSections),
        size: buttonSize
      }));
    }
    return /* @__PURE__ */ import_react124.default.createElement(BulkActionButton, Object.assign({
      key: index,
      disabled
    }, action, {
      size: buttonSize
    }));
  }) : null;
  const hiddenPromotedActionObjects = hiddenPromotedActions.map((index) => promotedActions?.[index]);
  const mergedHiddenPromotedActions = hiddenPromotedActionObjects.reduce((memo3, action) => {
    if (!action)
      return memo3;
    if (instanceOfMenuGroupDescriptor(action)) {
      return memo3.concat(action.actions);
    }
    return memo3.concat(action);
  }, []);
  const hiddenPromotedSection = {
    items: mergedHiddenPromotedActions
  };
  const allHiddenActions = (0, import_react124.useMemo)(() => {
    if (actionSections) {
      return actionSections;
    }
    if (!actions) {
      return [];
    }
    let isAFlatArray = true;
    return actions.filter((action) => action).reduce((memo3, action) => {
      if (instanceOfBulkActionListSection(action)) {
        isAFlatArray = false;
        return memo3.concat(action);
      }
      if (isAFlatArray) {
        if (memo3.length === 0) {
          return [{
            items: [action]
          }];
        }
        const lastItem = memo3[memo3.length - 1];
        memo3.splice(memo3.length - 1, 1, {
          items: [...lastItem.items, action]
        });
        return memo3;
      }
      isAFlatArray = true;
      return memo3.concat({
        items: [action]
      });
    }, []);
  }, [actions, actionSections]);
  const activator = /* @__PURE__ */ import_react124.default.createElement(BulkActionButton, {
    disclosure: true,
    showContentInButton: !promotedActionsMarkup,
    onAction: togglePopover,
    content: activatorLabel,
    disabled,
    indicator: isNewBadgeInBadgeActions(actionSections),
    size: buttonSize
  });
  const actionsMarkup = allHiddenActions.length > 0 ? /* @__PURE__ */ import_react124.default.createElement(Popover2, {
    active: popoverActive,
    activator,
    preferredAlignment: "right",
    onClose: togglePopover
  }, /* @__PURE__ */ import_react124.default.createElement(ActionList, {
    sections: hiddenPromotedSection.items.length > 0 ? [hiddenPromotedSection, ...allHiddenActions] : allHiddenActions,
    onActionAnyItem: togglePopover
  })) : null;
  const measurerMarkup = /* @__PURE__ */ import_react124.default.createElement(BulkActionsMeasurer, {
    promotedActions,
    disabled,
    buttonSize,
    handleMeasurement
  });
  return /* @__PURE__ */ import_react124.default.createElement("div", {
    className: styles46.BulkActions,
    style: width ? {
      width
    } : void 0
  }, /* @__PURE__ */ import_react124.default.createElement(InlineStack, {
    gap: "400",
    blockAlign: "center"
  }, /* @__PURE__ */ import_react124.default.createElement("div", {
    className: styles46.BulkActionsSelectAllWrapper
  }, /* @__PURE__ */ import_react124.default.createElement(CheckableButton, checkableButtonProps), paginatedSelectAllMarkup), selectMode ? /* @__PURE__ */ import_react124.default.createElement("div", {
    className: styles46.BulkActionsPromotedActionsWrapper
  }, /* @__PURE__ */ import_react124.default.createElement(InlineStack, {
    gap: "100",
    blockAlign: "center"
  }, /* @__PURE__ */ import_react124.default.createElement("div", {
    className: styles46.BulkActionsOuterLayout
  }, measurerMarkup, /* @__PURE__ */ import_react124.default.createElement("div", {
    className: classNames(styles46.BulkActionsLayout, !hasMeasured && styles46["BulkActionsLayout--measuring"])
  }, promotedActionsMarkup)), actionsMarkup)) : null));
});

// node_modules/@shopify/polaris/build/esm/components/ResourceList/ResourceList.js
var SMALL_SPINNER_HEIGHT = 28;
var LARGE_SPINNER_HEIGHT = 45;
function getAllItemsOnPage(items, idForItem) {
  return items.map((item, index) => {
    return idForItem(item, index);
  });
}
var isBreakpointsXS = () => {
  return typeof window === "undefined" ? false : window.innerWidth < parseFloat(toPx(themeDefault.breakpoints["breakpoints-sm"]) ?? "");
};
function defaultIdForItem(item, index) {
  return Object.prototype.hasOwnProperty.call(item, "id") ? item.id : index.toString();
}
function ResourceList({
  items,
  filterControl,
  flushFilters,
  emptyState,
  emptySearchState,
  resourceName: resourceNameProp,
  promotedBulkActions,
  bulkActions,
  selectedItems = [],
  isFiltered,
  selectable,
  hasMoreItems,
  loading,
  headerContent,
  showHeader,
  totalItemsCount,
  sortValue,
  sortOptions,
  alternateTool,
  onSortChange,
  onSelectionChange,
  renderItem,
  idForItem = defaultIdForItem,
  resolveItemId,
  pagination
}) {
  const i18n = useI18n();
  const [selectMode, setSelectMode] = (0, import_react125.useState)(Boolean(selectedItems && selectedItems.length > 0));
  const [loadingPosition, setLoadingPositionState] = (0, import_react125.useState)(0);
  const [lastSelected, setLastSelected] = (0, import_react125.useState)();
  const [smallScreen, setSmallScreen] = (0, import_react125.useState)(isBreakpointsXS());
  const forceUpdate = (0, import_react125.useReducer)((x = 0) => x + 1, 0)[1];
  const checkableButtonRef = (0, import_react125.useRef)(null);
  const defaultResourceName = useLazyRef(() => ({
    singular: i18n.translate("Polaris.ResourceList.defaultItemSingular"),
    plural: i18n.translate("Polaris.ResourceList.defaultItemPlural")
  }));
  const listRef = (0, import_react125.useRef)(null);
  const handleSelectMode = (selectMode2) => {
    setSelectMode(selectMode2);
    if (!selectMode2 && onSelectionChange) {
      onSelectionChange([]);
    }
  };
  const handleResize = debounce(() => {
    const newSmallScreen = isBreakpointsXS();
    if (selectedItems && selectedItems.length === 0 && selectMode && !newSmallScreen) {
      handleSelectMode(false);
    }
    if (smallScreen !== newSmallScreen) {
      setSmallScreen(newSmallScreen);
    }
  }, 50, {
    leading: true,
    trailing: true,
    maxWait: 50
  });
  useEventListener("resize", handleResize);
  const isSelectable = Boolean(promotedBulkActions && promotedBulkActions.length > 0 || bulkActions && bulkActions.length > 0 || selectable) && !smallScreen;
  const selectAllSelectState = (0, import_react125.useMemo)(() => {
    let selectState = "indeterminate";
    if (!selectedItems || Array.isArray(selectedItems) && selectedItems.length === 0) {
      selectState = false;
    } else if (selectedItems === SELECT_ALL_ITEMS || Array.isArray(selectedItems) && selectedItems.length === items.length) {
      selectState = true;
    }
    return selectState;
  }, [items.length, selectedItems]);
  const resourceName = resourceNameProp ? resourceNameProp : defaultResourceName.current;
  const headerTitle = () => {
    const itemsCount = items.length;
    const resource = !loading && (!totalItemsCount && itemsCount === 1 || totalItemsCount === 1) ? resourceName.singular : resourceName.plural;
    if (loading) {
      return i18n.translate("Polaris.ResourceList.loading", {
        resource
      });
    } else if (totalItemsCount) {
      return i18n.translate("Polaris.ResourceList.showingTotalCount", {
        itemsCount,
        totalItemsCount,
        resource
      });
    } else if (headerContent) {
      return headerContent;
    } else {
      return i18n.translate("Polaris.ResourceList.showing", {
        itemsCount,
        resource
      });
    }
  };
  const [selectedItemsCount, setSelectedItemsCount] = (0, import_react125.useState)(selectedItems === SELECT_ALL_ITEMS ? `${items.length}+` : selectedItems.length);
  (0, import_react125.useEffect)(() => {
    if (selectedItems === SELECT_ALL_ITEMS || selectedItems.length > 0) {
      setSelectedItemsCount(selectedItems === SELECT_ALL_ITEMS ? `${items.length}+` : selectedItems.length);
    }
  }, [selectedItems, items.length]);
  const selectAllActionsLabel = i18n.translate("Polaris.ResourceList.selected", {
    selectedItemsCount
  });
  const bulkActionsAccessibilityLabel = (0, import_react125.useMemo)(() => {
    const selectedItemsCount2 = selectedItems.length;
    const totalItemsCount2 = items.length;
    const allSelected = selectedItemsCount2 === totalItemsCount2;
    if (totalItemsCount2 === 1 && allSelected) {
      return i18n.translate("Polaris.ResourceList.a11yCheckboxDeselectAllSingle", {
        resourceNameSingular: resourceName.singular
      });
    } else if (totalItemsCount2 === 1) {
      return i18n.translate("Polaris.ResourceList.a11yCheckboxSelectAllSingle", {
        resourceNameSingular: resourceName.singular
      });
    } else if (allSelected) {
      return i18n.translate("Polaris.ResourceList.a11yCheckboxDeselectAllMultiple", {
        itemsLength: items.length,
        resourceNamePlural: resourceName.plural
      });
    } else {
      return i18n.translate("Polaris.ResourceList.a11yCheckboxSelectAllMultiple", {
        itemsLength: items.length,
        resourceNamePlural: resourceName.plural
      });
    }
  }, [i18n, items.length, resourceName.singular, resourceName.plural, selectedItems.length]);
  const paginatedSelectAllText = (0, import_react125.useMemo)(() => {
    if (!isSelectable || !hasMoreItems) {
      return;
    }
    if (selectedItems === SELECT_ALL_ITEMS) {
      return i18n.translate(isFiltered ? "Polaris.ResourceList.allFilteredItemsSelected" : "Polaris.ResourceList.allItemsSelected", {
        itemsLength: items.length,
        resourceNamePlural: resourceName.plural
      });
    }
  }, [hasMoreItems, i18n, isFiltered, isSelectable, items, resourceName.plural, selectedItems]);
  const handleSelectAllItemsInStore = (0, import_react125.useCallback)(() => {
    const newlySelectedItems = selectedItems === SELECT_ALL_ITEMS ? getAllItemsOnPage(items, idForItem) : SELECT_ALL_ITEMS;
    if (onSelectionChange) {
      onSelectionChange(newlySelectedItems);
    }
  }, [idForItem, items, onSelectionChange, selectedItems]);
  const paginatedSelectAllAction = (0, import_react125.useMemo)(() => {
    if (!isSelectable || !hasMoreItems) {
      return;
    }
    const actionText = selectedItems === SELECT_ALL_ITEMS ? i18n.translate("Polaris.Common.undo") : i18n.translate(isFiltered ? "Polaris.ResourceList.selectAllFilteredItems" : "Polaris.ResourceList.selectAllItems", {
      itemsLength: items.length,
      resourceNamePlural: resourceName.plural
    });
    return {
      content: actionText,
      onAction: handleSelectAllItemsInStore
    };
  }, [handleSelectAllItemsInStore, hasMoreItems, i18n, isFiltered, isSelectable, items.length, resourceName.plural, selectedItems]);
  const emptySearchResultText = {
    title: i18n.translate("Polaris.ResourceList.emptySearchResultTitle", {
      resourceNamePlural: resourceName.plural
    }),
    description: i18n.translate("Polaris.ResourceList.emptySearchResultDescription")
  };
  const setLoadingPosition = (0, import_react125.useCallback)(() => {
    if (listRef.current != null) {
      if (typeof window === "undefined") {
        return;
      }
      const overlay2 = listRef.current.getBoundingClientRect();
      const viewportHeight = Math.max(document.documentElement ? document.documentElement.clientHeight : 0, window.innerHeight || 0);
      const overflow = viewportHeight - overlay2.height;
      const spinnerHeight = items.length === 1 ? SMALL_SPINNER_HEIGHT : LARGE_SPINNER_HEIGHT;
      const spinnerPosition = overflow > 0 ? (overlay2.height - spinnerHeight) / 2 : (viewportHeight - overlay2.top - spinnerHeight) / 2;
      setLoadingPositionState(spinnerPosition);
    }
  }, [listRef, items.length]);
  const itemsExist = items.length > 0;
  (0, import_react125.useEffect)(() => {
    if (loading) {
      setLoadingPosition();
    }
  }, [loading, setLoadingPosition]);
  (0, import_react125.useEffect)(() => {
    if (selectedItems && selectedItems.length > 0 && !selectMode) {
      setSelectMode(true);
    }
    if ((!selectedItems || selectedItems.length === 0) && !isBreakpointsXS()) {
      setSelectMode(false);
    }
  }, [selectedItems, selectMode]);
  (0, import_react125.useEffect)(() => {
    forceUpdate();
  }, [forceUpdate, items]);
  const renderItemWithId = (item, index) => {
    const id = idForItem(item, index);
    const itemContent = renderItem(item, id, index);
    if (!isElementOfType(itemContent, ResourceItem)) {
      console.warn("<ResourceList /> renderItem function should return a <ResourceItem />.");
    }
    return itemContent;
  };
  const handleMultiSelectionChange = (lastSelected2, currentSelected, resolveItemId2) => {
    const min = Math.min(lastSelected2, currentSelected);
    const max = Math.max(lastSelected2, currentSelected);
    return items.slice(min, max + 1).map(resolveItemId2);
  };
  const handleSelectionChange = (selected, id, sortOrder, shiftKey) => {
    if (selectedItems == null || onSelectionChange == null) {
      return;
    }
    let newlySelectedItems = selectedItems === SELECT_ALL_ITEMS ? getAllItemsOnPage(items, idForItem) : [...selectedItems];
    if (sortOrder !== void 0) {
      setLastSelected(sortOrder);
    }
    const lastSelectedFromState = lastSelected;
    let selectedIds = [id];
    if (shiftKey && lastSelectedFromState != null && sortOrder !== void 0 && resolveItemId) {
      selectedIds = handleMultiSelectionChange(lastSelectedFromState, sortOrder, resolveItemId);
    }
    newlySelectedItems = [.../* @__PURE__ */ new Set([...newlySelectedItems, ...selectedIds])];
    if (!selected) {
      for (const selectedId of selectedIds) {
        newlySelectedItems.splice(newlySelectedItems.indexOf(selectedId), 1);
      }
    }
    if (newlySelectedItems.length === 0 && !isBreakpointsXS()) {
      handleSelectMode(false);
    } else if (newlySelectedItems.length > 0) {
      handleSelectMode(true);
    }
    if (onSelectionChange) {
      onSelectionChange(newlySelectedItems);
    }
  };
  const handleToggleAll = () => {
    let newlySelectedItems;
    if (Array.isArray(selectedItems) && selectedItems.length === items.length || selectedItems === SELECT_ALL_ITEMS) {
      newlySelectedItems = [];
    } else {
      newlySelectedItems = items.map((item, index) => {
        return idForItem(item, index);
      });
    }
    if (newlySelectedItems.length === 0 && !isBreakpointsXS()) {
      handleSelectMode(false);
    } else if (newlySelectedItems.length > 0) {
      handleSelectMode(true);
    }
    if (onSelectionChange) {
      onSelectionChange(newlySelectedItems);
    }
    setTimeout(() => {
      checkableButtonRef?.current?.focus();
    }, 0);
  };
  const bulkActionClassNames = classNames(styles42.BulkActionsWrapper, selectMode && styles42.BulkActionsWrapperVisible);
  const bulkActionsMarkup = isSelectable ? /* @__PURE__ */ import_react125.default.createElement("div", {
    className: bulkActionClassNames
  }, /* @__PURE__ */ import_react125.default.createElement(BulkActions, {
    selectMode,
    onSelectModeToggle: handleSelectMode,
    label: selectAllActionsLabel,
    paginatedSelectAllAction,
    paginatedSelectAllText,
    promotedActions: promotedBulkActions,
    actions: bulkActions,
    disabled: loading,
    accessibilityLabel: bulkActionsAccessibilityLabel,
    selected: selectAllSelectState,
    onToggleAll: handleToggleAll,
    ref: checkableButtonRef,
    buttonSize: "medium"
  })) : null;
  const filterControlMarkup = filterControl ? /* @__PURE__ */ import_react125.default.createElement("div", {
    className: classNames(!flushFilters && styles42.FiltersWrapper)
  }, filterControl) : null;
  const sortingSelectMarkup = sortOptions && sortOptions.length > 0 && !alternateTool ? /* @__PURE__ */ import_react125.default.createElement("div", {
    className: styles42.SortWrapper
  }, /* @__PURE__ */ import_react125.default.createElement(Select, {
    label: i18n.translate("Polaris.ResourceList.sortingLabel"),
    labelInline: !smallScreen,
    labelHidden: smallScreen,
    options: sortOptions,
    onChange: onSortChange,
    value: sortValue,
    disabled: selectMode
  })) : null;
  const alternateToolMarkup = alternateTool && !sortingSelectMarkup ? /* @__PURE__ */ import_react125.default.createElement("div", {
    className: styles42.AlternateToolWrapper
  }, alternateTool) : null;
  const headerTitleMarkup = /* @__PURE__ */ import_react125.default.createElement("div", {
    className: styles42.HeaderTitleWrapper
  }, /* @__PURE__ */ import_react125.default.createElement(Text, {
    as: "span",
    variant: "bodyMd"
  }, headerTitle()));
  const selectButtonMarkup = isSelectable ? /* @__PURE__ */ import_react125.default.createElement("div", {
    className: styles42.SelectButtonWrapper
  }, /* @__PURE__ */ import_react125.default.createElement(Button, {
    disabled: selectMode,
    icon: SvgCheckboxIcon,
    onClick: () => handleSelectMode(true)
  }, i18n.translate("Polaris.ResourceList.selectButtonText"))) : null;
  const checkableButtonMarkup = isSelectable ? /* @__PURE__ */ import_react125.default.createElement("div", {
    className: styles42.CheckableButtonWrapper
  }, /* @__PURE__ */ import_react125.default.createElement(CheckableButton, {
    accessibilityLabel: bulkActionsAccessibilityLabel,
    label: headerTitle(),
    onToggleAll: handleToggleAll,
    disabled: loading,
    ref: checkableButtonRef,
    selected: selectAllSelectState
  })) : null;
  const needsHeader = isSelectable || sortOptions && sortOptions.length > 0 || alternateTool;
  const headerWrapperOverlay = loading ? /* @__PURE__ */ import_react125.default.createElement("div", {
    className: styles42["HeaderWrapper-overlay"]
  }) : null;
  const showEmptyState = emptyState && !itemsExist && !loading;
  const showEmptySearchState = !showEmptyState && filterControl && !itemsExist && !loading;
  const headerMarkup = !showEmptyState && showHeader !== false && !showEmptySearchState && (showHeader || needsHeader) && listRef.current && /* @__PURE__ */ import_react125.default.createElement("div", {
    className: styles42.HeaderOuterWrapper
  }, /* @__PURE__ */ import_react125.default.createElement(Sticky, {
    boundingElement: listRef.current
  }, (isSticky) => {
    const headerClassName = classNames(styles42.HeaderWrapper, sortOptions && sortOptions.length > 0 && !alternateTool && styles42["HeaderWrapper-hasSort"], alternateTool && styles42["HeaderWrapper-hasAlternateTool"], isSelectable && styles42["HeaderWrapper-hasSelect"], loading && styles42["HeaderWrapper-disabled"], isSelectable && selectMode && bulkActionsMarkup && styles42["HeaderWrapper-inSelectMode"], isSticky && styles42["HeaderWrapper-isSticky"]);
    return /* @__PURE__ */ import_react125.default.createElement("div", {
      className: headerClassName
    }, headerWrapperOverlay, /* @__PURE__ */ import_react125.default.createElement("div", {
      className: styles42.HeaderContentWrapper
    }, headerTitleMarkup, checkableButtonMarkup, alternateToolMarkup, sortingSelectMarkup, selectButtonMarkup), bulkActionsMarkup);
  }));
  const emptySearchStateMarkup = showEmptySearchState ? emptySearchState || /* @__PURE__ */ import_react125.default.createElement("div", {
    className: styles42.EmptySearchResultWrapper
  }, /* @__PURE__ */ import_react125.default.createElement(EmptySearchResult, Object.assign({}, emptySearchResultText, {
    withIllustration: true
  }))) : null;
  const emptyStateMarkup = showEmptyState ? emptyState : null;
  const defaultTopPadding = 8;
  const topPadding = loadingPosition > 0 ? loadingPosition : defaultTopPadding;
  const spinnerStyle = {
    paddingTop: `${topPadding}px`
  };
  const spinnerSize = items.length < 2 ? "small" : "large";
  const loadingOverlay = loading ? /* @__PURE__ */ import_react125.default.createElement(import_react125.default.Fragment, null, /* @__PURE__ */ import_react125.default.createElement("li", {
    className: styles42.SpinnerContainer,
    style: spinnerStyle
  }, /* @__PURE__ */ import_react125.default.createElement(Spinner, {
    size: spinnerSize,
    accessibilityLabel: "Items are loading"
  })), /* @__PURE__ */ import_react125.default.createElement("li", {
    className: styles42.LoadingOverlay
  })) : null;
  const className = classNames(styles42.ItemWrapper, loading && styles42["ItemWrapper-isLoading"]);
  const loadingWithoutItemsMarkup = loading && !itemsExist ? /* @__PURE__ */ import_react125.default.createElement("div", {
    className,
    tabIndex: -1
  }, loadingOverlay) : null;
  const resourceListClassName = classNames(styles42.ResourceList, loading && styles42.disabledPointerEvents, selectMode && styles42.disableTextSelection);
  const listMarkup = itemsExist ? /* @__PURE__ */ import_react125.default.createElement("ul", {
    className: resourceListClassName,
    ref: listRef,
    "aria-live": "polite",
    "aria-busy": loading
  }, loadingOverlay, import_react125.Children.toArray(items.map(renderItemWithId))) : null;
  const paginationMarkup = pagination ? /* @__PURE__ */ import_react125.default.createElement("div", {
    className: styles42.PaginationWrapper
  }, /* @__PURE__ */ import_react125.default.createElement(Pagination, Object.assign({
    type: "table"
  }, pagination))) : null;
  const context = {
    selectable: isSelectable,
    selectedItems,
    selectMode,
    hasBulkActions: Boolean(bulkActions),
    resourceName,
    loading,
    onSelectionChange: handleSelectionChange
  };
  return /* @__PURE__ */ import_react125.default.createElement(ResourceListContext.Provider, {
    value: context
  }, filterControlMarkup, /* @__PURE__ */ import_react125.default.createElement("div", {
    className: styles42.ResourceListWrapper
  }, headerMarkup, listMarkup, emptySearchStateMarkup, emptyStateMarkup, loadingWithoutItemsMarkup, paginationMarkup));
}
ResourceList.Item = ResourceItem;

// node_modules/@shopify/polaris/build/esm/components/Thumbnail/Thumbnail.js
var import_react126 = __toESM(require_react());

// node_modules/@shopify/polaris/build/esm/components/Thumbnail/Thumbnail.css.js
var styles48 = {
  "Thumbnail": "Polaris-Thumbnail",
  "sizeExtraSmall": "Polaris-Thumbnail--sizeExtraSmall",
  "sizeSmall": "Polaris-Thumbnail--sizeSmall",
  "sizeMedium": "Polaris-Thumbnail--sizeMedium",
  "sizeLarge": "Polaris-Thumbnail--sizeLarge",
  "transparent": "Polaris-Thumbnail--transparent"
};

// node_modules/@shopify/polaris/build/esm/components/Thumbnail/Thumbnail.js
function Thumbnail({
  source,
  alt,
  size = "medium",
  transparent
}) {
  const className = classNames(styles48.Thumbnail, size && styles48[variationName("size", size)], transparent && styles48.transparent);
  const content = typeof source === "string" ? /* @__PURE__ */ import_react126.default.createElement(Image, {
    alt,
    source
  }) : /* @__PURE__ */ import_react126.default.createElement(Icon, {
    accessibilityLabel: alt,
    source
  });
  return /* @__PURE__ */ import_react126.default.createElement("span", {
    className
  }, content);
}

// node_modules/@shopify/polaris/build/esm/components/AppProvider/AppProvider.js
var import_react135 = __toESM(require_react());

// node_modules/@shopify/polaris/build/esm/utilities/scroll-lock-manager/scroll-lock-manager.js
var SCROLL_LOCKING_ATTRIBUTE = "data-lock-scrolling";
var SCROLL_LOCKING_HIDDEN_ATTRIBUTE = "data-lock-scrolling-hidden";
var SCROLL_LOCKING_WRAPPER_ATTRIBUTE = "data-lock-scrolling-wrapper";
var scrollPosition = 0;
function isScrollBarVisible() {
  const {
    body
  } = document;
  return body.scrollHeight > body.clientHeight;
}
var ScrollLockManager = class {
  constructor() {
    this.scrollLocks = 0;
    this.locked = false;
  }
  registerScrollLock() {
    this.scrollLocks += 1;
    this.handleScrollLocking();
  }
  unregisterScrollLock() {
    this.scrollLocks -= 1;
    this.handleScrollLocking();
  }
  handleScrollLocking() {
    if (isServer)
      return;
    const {
      scrollLocks
    } = this;
    const {
      body
    } = document;
    const wrapper = body.firstElementChild;
    if (scrollLocks === 0) {
      body.removeAttribute(SCROLL_LOCKING_ATTRIBUTE);
      body.removeAttribute(SCROLL_LOCKING_HIDDEN_ATTRIBUTE);
      if (wrapper) {
        wrapper.removeAttribute(SCROLL_LOCKING_WRAPPER_ATTRIBUTE);
      }
      window.scroll(0, scrollPosition);
      this.locked = false;
    } else if (scrollLocks > 0 && !this.locked) {
      scrollPosition = window.pageYOffset;
      body.setAttribute(SCROLL_LOCKING_ATTRIBUTE, "");
      if (!isScrollBarVisible()) {
        body.setAttribute(SCROLL_LOCKING_HIDDEN_ATTRIBUTE, "");
      }
      if (wrapper) {
        wrapper.setAttribute(SCROLL_LOCKING_WRAPPER_ATTRIBUTE, "");
        wrapper.scrollTop = scrollPosition;
      }
      this.locked = true;
    }
  }
  resetScrollPosition() {
    scrollPosition = 0;
  }
};

// node_modules/@shopify/polaris/build/esm/utilities/get.js
var OBJECT_NOTATION_MATCHER = /\[(.*?)\]|(\w+)/g;
function get(obj, keypath, defaultValue) {
  if (obj == null)
    return void 0;
  const keys = Array.isArray(keypath) ? keypath : getKeypath(keypath);
  let acc = obj;
  for (let i = 0; i < keys.length; i++) {
    const val = acc[keys[i]];
    if (val === void 0)
      return defaultValue;
    acc = val;
  }
  return acc;
}
function getKeypath(str) {
  const path = [];
  let result;
  while (result = OBJECT_NOTATION_MATCHER.exec(str)) {
    const [, first, second] = result;
    path.push(first || second);
  }
  return path;
}

// node_modules/@shopify/polaris/build/esm/utilities/merge.js
function merge(...objs) {
  let final = {};
  for (const obj of objs) {
    final = mergeRecursively(final, obj);
  }
  return final;
}
function mergeRecursively(inputObjA, objB) {
  const objA = Array.isArray(inputObjA) ? [...inputObjA] : {
    ...inputObjA
  };
  for (const key in objB) {
    if (!Object.prototype.hasOwnProperty.call(objB, key)) {
      continue;
    } else if (isMergeableValue(objB[key]) && isMergeableValue(objA[key])) {
      objA[key] = mergeRecursively(objA[key], objB[key]);
    } else {
      objA[key] = objB[key];
    }
  }
  return objA;
}
function isMergeableValue(value) {
  return value !== null && typeof value === "object";
}

// node_modules/@shopify/polaris/build/esm/utilities/i18n/I18n.js
var REPLACE_REGEX2 = /{([^}]*)}/g;
var I18n = class {
  /**
   * @param translation A locale object or array of locale objects that overrides default translations. If specifying an array then your desired language dictionary should come first, followed by your fallback language dictionaries
   */
  constructor(translation) {
    this.translation = {};
    this.translation = Array.isArray(translation) ? merge(...translation.slice().reverse()) : translation;
  }
  translate(id, replacements) {
    const text = get(this.translation, id, "");
    if (!text) {
      return "";
    }
    if (replacements) {
      return text.replace(REPLACE_REGEX2, (match) => {
        const replacement = match.substring(1, match.length - 1);
        if (replacements[replacement] === void 0) {
          const replacementData = JSON.stringify(replacements);
          throw new Error(`Error in translation for key '${id}'. No replacement found for key '${replacement}'. The following replacements were passed: '${replacementData}'`);
        }
        return replacements[replacement];
      });
    }
    return text;
  }
  translationKeyExists(path) {
    return Boolean(get(this.translation, path));
  }
};

// node_modules/@shopify/polaris/build/esm/utilities/features/context.js
var import_react127 = __toESM(require_react());
var FeaturesContext = /* @__PURE__ */ (0, import_react127.createContext)(void 0);

// node_modules/@shopify/polaris/build/esm/utilities/scroll-lock-manager/context.js
var import_react128 = __toESM(require_react());
var ScrollLockManagerContext = /* @__PURE__ */ (0, import_react128.createContext)(void 0);

// node_modules/@shopify/polaris/build/esm/components/MediaQueryProvider/MediaQueryProvider.js
var import_react129 = __toESM(require_react());
var MediaQueryProvider = function MediaQueryProvider2({
  children
}) {
  const [isNavigationCollapsed, setIsNavigationCollapsed] = (0, import_react129.useState)(false);
  const handleResize = (0, import_react129.useCallback)(debounce(() => {
    if (isNavigationCollapsed !== navigationBarCollapsed().matches) {
      setIsNavigationCollapsed(!isNavigationCollapsed);
    }
  }, 40, {
    trailing: true,
    leading: true,
    maxWait: 40
  }), [isNavigationCollapsed]);
  (0, import_react129.useEffect)(() => {
    setIsNavigationCollapsed(navigationBarCollapsed().matches);
  }, []);
  const context = (0, import_react129.useMemo)(() => ({
    isNavigationCollapsed
  }), [isNavigationCollapsed]);
  return /* @__PURE__ */ import_react129.default.createElement(MediaQueryContext.Provider, {
    value: context
  }, /* @__PURE__ */ import_react129.default.createElement(EventListener, {
    event: "resize",
    handler: handleResize
  }), children);
};

// node_modules/@shopify/polaris/build/esm/components/PortalsManager/PortalsManager.js
var import_react131 = __toESM(require_react());

// node_modules/@shopify/polaris/build/esm/components/PortalsManager/components/PortalsContainer/PortalsContainer.js
var import_react130 = __toESM(require_react());
function PortalsContainerComponent(_props, ref) {
  return /* @__PURE__ */ import_react130.default.createElement("div", {
    id: "PolarisPortalsContainer",
    ref
  });
}
var PortalsContainer = /* @__PURE__ */ (0, import_react130.forwardRef)(PortalsContainerComponent);

// node_modules/@shopify/polaris/build/esm/components/PortalsManager/PortalsManager.js
function PortalsManager({
  children,
  container
}) {
  const isMounted = useIsAfterInitialMount();
  const ref = (0, import_react131.useRef)(null);
  const contextValue = (0, import_react131.useMemo)(() => {
    if (container) {
      return {
        container
      };
    } else if (isMounted) {
      return {
        container: ref.current
      };
    } else {
      return {
        container: null
      };
    }
  }, [container, isMounted]);
  return /* @__PURE__ */ import_react131.default.createElement(PortalsManagerContext.Provider, {
    value: contextValue
  }, children, container ? null : /* @__PURE__ */ import_react131.default.createElement(PortalsContainer, {
    ref
  }));
}

// node_modules/@shopify/polaris/build/esm/components/FocusManager/FocusManager.js
var import_react133 = __toESM(require_react());

// node_modules/@shopify/polaris/build/esm/utilities/focus-manager/context.js
var import_react132 = __toESM(require_react());
var FocusManagerContext = /* @__PURE__ */ (0, import_react132.createContext)(void 0);

// node_modules/@shopify/polaris/build/esm/components/FocusManager/FocusManager.js
function FocusManager({
  children
}) {
  const [trapFocusList, setTrapFocusList] = (0, import_react133.useState)([]);
  const add = (0, import_react133.useCallback)((id) => {
    setTrapFocusList((list) => [...list, id]);
  }, []);
  const remove = (0, import_react133.useCallback)((id) => {
    let removed = true;
    setTrapFocusList((list) => {
      const clone = [...list];
      const index = clone.indexOf(id);
      if (index === -1) {
        removed = false;
      } else {
        clone.splice(index, 1);
      }
      return clone;
    });
    return removed;
  }, []);
  const value = (0, import_react133.useMemo)(() => ({
    trapFocusList,
    add,
    remove
  }), [add, trapFocusList, remove]);
  return /* @__PURE__ */ import_react133.default.createElement(FocusManagerContext.Provider, {
    value
  }, children);
}

// node_modules/@shopify/polaris/build/esm/components/EphemeralPresenceManager/EphemeralPresenceManager.js
var import_react134 = __toESM(require_react());
var defaultState = {
  tooltip: 0,
  hovercard: 0
};
function EphemeralPresenceManager({
  children
}) {
  const [presenceCounter, setPresenceCounter] = (0, import_react134.useState)(defaultState);
  const addPresence = (0, import_react134.useCallback)((key) => {
    setPresenceCounter((prevList) => ({
      ...prevList,
      [key]: prevList[key] + 1
    }));
  }, []);
  const removePresence = (0, import_react134.useCallback)((key) => {
    setPresenceCounter((prevList) => ({
      ...prevList,
      [key]: prevList[key] - 1
    }));
  }, []);
  const value = (0, import_react134.useMemo)(() => ({
    presenceList: Object.entries(presenceCounter).reduce((previousValue, currentValue) => {
      const [key, value2] = currentValue;
      return {
        ...previousValue,
        [key]: value2 >= 1
      };
    }, {}),
    presenceCounter,
    addPresence,
    removePresence
  }), [addPresence, removePresence, presenceCounter]);
  return /* @__PURE__ */ import_react134.default.createElement(EphemeralPresenceManagerContext.Provider, {
    value
  }, children);
}

// node_modules/@shopify/polaris/build/esm/components/AppProvider/AppProvider.js
var MAX_SCROLLBAR_WIDTH = 20;
var SCROLLBAR_TEST_ELEMENT_PARENT_SIZE = 30;
var SCROLLBAR_TEST_ELEMENT_CHILD_SIZE = SCROLLBAR_TEST_ELEMENT_PARENT_SIZE + 10;
function measureScrollbars() {
  const parentEl = document.createElement("div");
  parentEl.setAttribute("style", `position: absolute; opacity: 0; transform: translate3d(-9999px, -9999px, 0); pointer-events: none; width:${SCROLLBAR_TEST_ELEMENT_PARENT_SIZE}px; height:${SCROLLBAR_TEST_ELEMENT_PARENT_SIZE}px;`);
  const child = document.createElement("div");
  child.setAttribute("style", `width:100%; height: ${SCROLLBAR_TEST_ELEMENT_CHILD_SIZE}; overflow:scroll; scrollbar-width: thin;`);
  parentEl.appendChild(child);
  document.body.appendChild(parentEl);
  const scrollbarWidth = SCROLLBAR_TEST_ELEMENT_PARENT_SIZE - (parentEl.firstElementChild?.clientWidth ?? 0);
  const scrollbarWidthWithSafetyHatch = Math.min(scrollbarWidth, MAX_SCROLLBAR_WIDTH);
  document.documentElement.style.setProperty("--pc-app-provider-scrollbar-width", `${scrollbarWidthWithSafetyHatch}px`);
  document.body.removeChild(parentEl);
}
var AppProvider = class extends import_react135.Component {
  constructor(props) {
    super(props);
    this.setBodyStyles = () => {
      document.body.style.backgroundColor = "var(--p-color-bg)";
      document.body.style.color = "var(--p-color-text)";
    };
    this.setRootAttributes = () => {
      const activeThemeName = this.getThemeName();
      themeNames.forEach((themeName) => {
        document.documentElement.classList.toggle(createThemeClassName(themeName), themeName === activeThemeName);
      });
    };
    this.getThemeName = () => this.props.theme ?? themeNameDefault;
    this.stickyManager = new StickyManager();
    this.scrollLockManager = new ScrollLockManager();
    const {
      i18n,
      linkComponent
    } = this.props;
    this.state = {
      link: linkComponent,
      intl: new I18n(i18n)
    };
  }
  componentDidMount() {
    if (document != null) {
      this.stickyManager.setContainer(document);
      this.setBodyStyles();
      this.setRootAttributes();
      const isSafari16 = navigator.userAgent.includes("Safari") && !navigator.userAgent.includes("Chrome") && (navigator.userAgent.includes("Version/16.1") || navigator.userAgent.includes("Version/16.2") || navigator.userAgent.includes("Version/16.3"));
      const isMobileApp16 = navigator.userAgent.includes("Shopify Mobile/iOS") && (navigator.userAgent.includes("OS 16_1") || navigator.userAgent.includes("OS 16_2") || navigator.userAgent.includes("OS 16_3"));
      if (isSafari16 || isMobileApp16) {
        document.documentElement.classList.add("Polaris-Safari-16-Font-Optical-Sizing-Patch");
      }
    }
    measureScrollbars();
  }
  componentDidUpdate({
    i18n: prevI18n,
    linkComponent: prevLinkComponent
  }) {
    const {
      i18n,
      linkComponent
    } = this.props;
    this.setRootAttributes();
    if (i18n === prevI18n && linkComponent === prevLinkComponent) {
      return;
    }
    this.setState({
      link: linkComponent,
      intl: new I18n(i18n)
    });
  }
  render() {
    const {
      children,
      features = {}
    } = this.props;
    const themeName = this.getThemeName();
    const {
      intl,
      link
    } = this.state;
    return /* @__PURE__ */ import_react135.default.createElement(ThemeNameContext.Provider, {
      value: themeName
    }, /* @__PURE__ */ import_react135.default.createElement(ThemeContext.Provider, {
      value: getTheme(themeName)
    }, /* @__PURE__ */ import_react135.default.createElement(FeaturesContext.Provider, {
      value: features
    }, /* @__PURE__ */ import_react135.default.createElement(I18nContext.Provider, {
      value: intl
    }, /* @__PURE__ */ import_react135.default.createElement(ScrollLockManagerContext.Provider, {
      value: this.scrollLockManager
    }, /* @__PURE__ */ import_react135.default.createElement(StickyManagerContext.Provider, {
      value: this.stickyManager
    }, /* @__PURE__ */ import_react135.default.createElement(LinkContext.Provider, {
      value: link
    }, /* @__PURE__ */ import_react135.default.createElement(MediaQueryProvider, null, /* @__PURE__ */ import_react135.default.createElement(PortalsManager, null, /* @__PURE__ */ import_react135.default.createElement(FocusManager, null, /* @__PURE__ */ import_react135.default.createElement(EphemeralPresenceManager, null, children)))))))))));
  }
};

export {
  require_node,
  AppProvider,
  Text,
  Button,
  Box,
  Card,
  InlineStack,
  BlockStack,
  Banner,
  EmptyState,
  Layout,
  Page,
  ResourceItem,
  ResourceList,
  Thumbnail
};
//# sourceMappingURL=/build/_shared/chunk-YI62TSEZ.js.map
