import {
  AppProvider,
  require_node
} from "/build/_shared/chunk-YI62TSEZ.js";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData
} from "/build/_shared/chunk-FURRT6A2.js";
import {
  createHotContext
} from "/build/_shared/chunk-NY2WKPAM.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XGOTYLZ5.js";
import "/build/_shared/chunk-U4FRFQSK.js";
import {
  require_react
} from "/build/_shared/chunk-7M6SC7J5.js";
import "/build/_shared/chunk-UWV35TSL.js";
import {
  __commonJS,
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// node_modules/@shopify/app-bridge-react/context.js
var require_context = __commonJS({
  "node_modules/@shopify/app-bridge-react/context.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.AppBridgeContext = void 0;
    var react_1 = require_react();
    exports.AppBridgeContext = react_1.createContext(null);
  }
});

// node_modules/@shopify/app-bridge-react/useAppBridge.js
var require_useAppBridge = __commonJS({
  "node_modules/@shopify/app-bridge-react/useAppBridge.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.useAppBridge = void 0;
    var react_1 = require_react();
    var context_1 = require_context();
    function useAppBridge() {
      var appBridge = react_1.useContext(context_1.AppBridgeContext);
      if (!appBridge) {
        throw new Error("No AppBridge context provided. Your component must be wrapped in the <Provider> component from App Bridge React.");
      }
      return appBridge;
    }
    exports.useAppBridge = useAppBridge;
  }
});

// node_modules/@shopify/app-bridge-react/hooks/useAppBridgeState/useAppBridgeState.js
var require_useAppBridgeState = __commonJS({
  "node_modules/@shopify/app-bridge-react/hooks/useAppBridgeState/useAppBridgeState.js"(exports) {
    "use strict";
    var __awaiter = exports && exports.__awaiter || function(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
          resolve(value);
        });
      }
      return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }
        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }
        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    };
    var __generator = exports && exports.__generator || function(thisArg, body) {
      var _ = { label: 0, sent: function() {
        if (t[0] & 1)
          throw t[1];
        return t[1];
      }, trys: [], ops: [] }, f, y, t, g;
      return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
        return this;
      }), g;
      function verb(n) {
        return function(v) {
          return step([n, v]);
        };
      }
      function step(op) {
        if (f)
          throw new TypeError("Generator is already executing.");
        while (_)
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
              return t;
            if (y = 0, t)
              op = [op[0] & 2, t.value];
            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;
              case 4:
                _.label++;
                return { value: op[1], done: false };
              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;
              case 7:
                op = _.ops.pop();
                _.trys.pop();
                continue;
              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }
                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }
                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }
                if (t && _.label < t[2]) {
                  _.label = t[2];
                  _.ops.push(op);
                  break;
                }
                if (t[2])
                  _.ops.pop();
                _.trys.pop();
                continue;
            }
            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        if (op[0] & 5)
          throw op[1];
        return { value: op[0] ? op[1] : void 0, done: true };
      }
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.useAppBridgeState = void 0;
    var react_1 = require_react();
    var useAppBridge_1 = require_useAppBridge();
    var useAppBridgeState = function(query) {
      var app = useAppBridge_1.useAppBridge();
      var _a = react_1.useState(), state = _a[0], setState = _a[1];
      var isUnmounted = react_1.useRef(false);
      var refresh = react_1.useCallback(function() {
        return __awaiter(void 0, void 0, void 0, function() {
          var newState, _a2;
          return __generator(this, function(_b) {
            switch (_b.label) {
              case 0:
                if (!query)
                  return [3, 2];
                return [4, app.getState(query)];
              case 1:
                _a2 = _b.sent();
                return [3, 4];
              case 2:
                return [4, app.getState()];
              case 3:
                _a2 = _b.sent();
                _b.label = 4;
              case 4:
                newState = _a2;
                if (isUnmounted.current) {
                  return [
                    2
                    /*return*/
                  ];
                }
                setState(function(currentState) {
                  if (JSON.stringify(newState) === JSON.stringify(currentState)) {
                    return currentState;
                  }
                  return newState;
                });
                return [
                  2
                  /*return*/
                ];
            }
          });
        });
      }, [app, query]);
      react_1.useEffect(function() {
        refresh();
        return app.subscribe(function() {
          refresh();
        });
      }, [app, refresh]);
      react_1.useEffect(function() {
        return function() {
          isUnmounted.current = true;
        };
      }, [app]);
      return state;
    };
    exports.useAppBridgeState = useAppBridgeState;
  }
});

// node_modules/@shopify/app-bridge-react/hooks/useAppBridgeState/index.js
var require_useAppBridgeState2 = __commonJS({
  "node_modules/@shopify/app-bridge-react/hooks/useAppBridgeState/index.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      Object.defineProperty(o, k2, { enumerable: true, get: function() {
        return m[k];
      } });
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __exportStar = exports && exports.__exportStar || function(m, exports2) {
      for (var p in m)
        if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p))
          __createBinding(exports2, m, p);
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    __exportStar(require_useAppBridgeState(), exports);
  }
});

// node_modules/@shopify/app-bridge-core/actions/merge.js
var require_merge = __commonJS({
  "node_modules/@shopify/app-bridge-core/actions/merge.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function mergeProps(obj, newObj) {
      if (newObj == null) {
        return newObj;
      }
      if (typeof obj === "undefined" || !Object.prototype.isPrototypeOf.call(Object.getPrototypeOf(obj), newObj) || newObj.constructor.name !== "Object" && newObj.constructor.name !== "Array") {
        return newObj;
      }
      var clone = {};
      Object.keys(newObj).forEach(function(key) {
        var exists = Object.prototype.hasOwnProperty.call(obj, key);
        if (!exists) {
          clone[key] = newObj[key];
        } else if (typeof obj[key] === "object" && !Array.isArray(obj[key])) {
          clone[key] = mergeProps(obj[key], newObj[key]);
        } else {
          clone[key] = newObj[key];
        }
      });
      Object.keys(obj).forEach(function(key) {
        var exists = Object.prototype.hasOwnProperty.call(newObj, key);
        if (!exists) {
          clone[key] = obj[key];
        }
      });
      Object.setPrototypeOf(clone, Object.getPrototypeOf(obj));
      return clone;
    }
    exports.default = mergeProps;
  }
});

// node_modules/@shopify/app-bridge-core/actions/constants.js
var require_constants = __commonJS({
  "node_modules/@shopify/app-bridge-core/actions/constants.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.SEPARATOR = exports.PREFIX = void 0;
    exports.PREFIX = "APP";
    exports.SEPARATOR = "::";
  }
});

// node_modules/@shopify/app-bridge-core/actions/types.js
var require_types = __commonJS({
  "node_modules/@shopify/app-bridge-core/actions/types.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ComponentType = exports.Group = void 0;
    var Group;
    (function(Group2) {
      Group2["AuthCode"] = "AuthCode";
      Group2["Button"] = "Button";
      Group2["ButtonGroup"] = "ButtonGroup";
      Group2["Cart"] = "Cart";
      Group2["Client"] = "Client";
      Group2["ContextualSaveBar"] = "ContextualSaveBar";
      Group2["Error"] = "Error";
      Group2["Features"] = "Features";
      Group2["FeedbackModal"] = "FeedbackModal";
      Group2["Fullscreen"] = "Fullscreen";
      Group2["LeaveConfirmation"] = "LeaveConfirmation";
      Group2["Link"] = "Link";
      Group2["Loading"] = "Loading";
      Group2["Menu"] = "Menu";
      Group2["Modal"] = "Modal";
      Group2["Navigation"] = "Navigation";
      Group2["Performance"] = "Performance";
      Group2["Pos"] = "Pos";
      Group2["Print"] = "Print";
      Group2["ResourcePicker"] = "Resource_Picker";
      Group2["unstable_Picker"] = "unstable_Picker";
      Group2["Scanner"] = "Scanner";
      Group2["SessionToken"] = "SessionToken";
      Group2["Share"] = "Share";
      Group2["TitleBar"] = "TitleBar";
      Group2["Toast"] = "Toast";
      Group2["MarketingExternalActivityTopBar"] = "MarketingExternalActivityTopBar";
      Group2["WebVitals"] = "WebVitals";
    })(Group = exports.Group || (exports.Group = {}));
    var ComponentType;
    (function(ComponentType2) {
      ComponentType2["Button"] = "Button";
      ComponentType2["ButtonGroup"] = "ButtonGroup";
    })(ComponentType = exports.ComponentType || (exports.ComponentType = {}));
  }
});

// node_modules/@shopify/app-bridge-core/actions/helper.js
var require_helper = __commonJS({
  "node_modules/@shopify/app-bridge-core/actions/helper.js"(exports) {
    "use strict";
    var __importDefault = exports && exports.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.updateActionFromPayload = exports.isValidOptionalString = exports.isValidOptionalNumber = exports.forEachInEnum = exports.getMergedProps = exports.findMatchInEnum = exports.getEventNameSpace = exports.NonSnakeCaseGroup = exports.actionWrapper = void 0;
    var merge_1 = __importDefault(require_merge());
    var constants_1 = require_constants();
    var types_1 = require_types();
    function actionWrapper(action) {
      return action;
    }
    exports.actionWrapper = actionWrapper;
    exports.NonSnakeCaseGroup = [
      types_1.Group.AuthCode,
      types_1.Group.Button,
      types_1.Group.ButtonGroup,
      types_1.Group.Cart,
      types_1.Group.Error,
      types_1.Group.Features,
      types_1.Group.Fullscreen,
      types_1.Group.Link,
      types_1.Group.Loading,
      types_1.Group.Menu,
      types_1.Group.Modal,
      types_1.Group.Navigation,
      types_1.Group.Pos,
      types_1.Group.Print,
      types_1.Group.ResourcePicker,
      types_1.Group.Scanner,
      types_1.Group.SessionToken,
      types_1.Group.Share,
      types_1.Group.TitleBar,
      types_1.Group.Toast,
      types_1.Group.unstable_Picker
    ];
    function camelCaseToSnakeCase(value) {
      return value.replace(/([A-Z])/g, function(matcher, _val, index) {
        return (index === 0 ? "" : "_") + matcher[0].toLowerCase();
      });
    }
    function groupToEventNameSpace(group) {
      if (exports.NonSnakeCaseGroup.includes(group)) {
        return group.toUpperCase();
      }
      return camelCaseToSnakeCase(group).toUpperCase();
    }
    function getEventNameSpace(group, eventName, component) {
      if (eventName.startsWith("" + constants_1.PREFIX + constants_1.SEPARATOR)) {
        return eventName;
      }
      var eventNameSpace = groupToEventNameSpace(group);
      if (component) {
        var subgroups_1 = component.subgroups, type = component.type;
        if (subgroups_1 && subgroups_1.length > 0) {
          eventNameSpace += eventNameSpace.length > 0 ? constants_1.SEPARATOR : "";
          subgroups_1.forEach(function(subgroup, index) {
            eventNameSpace += "" + subgroup.toUpperCase() + (index < subgroups_1.length - 1 ? constants_1.SEPARATOR : "");
          });
        }
        if (type !== group && type) {
          eventNameSpace += "" + (eventNameSpace.length > 0 ? constants_1.SEPARATOR : "") + type.toUpperCase();
        }
      }
      if (eventNameSpace) {
        eventNameSpace += "" + (eventNameSpace.length > 0 ? constants_1.SEPARATOR : "") + eventName.toUpperCase();
      }
      return "" + constants_1.PREFIX + constants_1.SEPARATOR + eventNameSpace;
    }
    exports.getEventNameSpace = getEventNameSpace;
    function findMatchInEnum(types, lookup) {
      var match = Object.keys(types).find(function(key) {
        return lookup === types[key];
      });
      return match ? types[match] : void 0;
    }
    exports.findMatchInEnum = findMatchInEnum;
    function getMergedProps(props, newProps) {
      var merged = merge_1.default(props, newProps);
      if (!merged) {
        var cloned = Object.assign(props, newProps);
        return cloned;
      }
      return merged;
    }
    exports.getMergedProps = getMergedProps;
    function forEachInEnum(types, callback) {
      Object.keys(types).forEach(function(key) {
        callback(types[key]);
      });
    }
    exports.forEachInEnum = forEachInEnum;
    function isValidOptionalNumber(value) {
      return value === null || value === void 0 || typeof value === "number";
    }
    exports.isValidOptionalNumber = isValidOptionalNumber;
    function isValidOptionalString(value) {
      return value === null || value === void 0 || typeof value === "string";
    }
    exports.isValidOptionalString = isValidOptionalString;
    function updateActionFromPayload(action, newProps) {
      var id = action.id;
      if (id === newProps.id) {
        Object.assign(action, getMergedProps(action, newProps));
        return true;
      }
      return false;
    }
    exports.updateActionFromPayload = updateActionFromPayload;
  }
});

// node_modules/@shopify/app-bridge-core/client/types.js
var require_types2 = __commonJS({
  "node_modules/@shopify/app-bridge-core/client/types.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.LifecycleHook = exports.PermissionType = exports.MessageType = void 0;
    var MessageType;
    (function(MessageType2) {
      MessageType2["GetState"] = "getState";
      MessageType2["Dispatch"] = "dispatch";
      MessageType2["Subscribe"] = "subscribe";
      MessageType2["Unsubscribe"] = "unsubscribe";
    })(MessageType = exports.MessageType || (exports.MessageType = {}));
    var PermissionType;
    (function(PermissionType2) {
      PermissionType2["Dispatch"] = "Dispatch";
      PermissionType2["Subscribe"] = "Subscribe";
    })(PermissionType = exports.PermissionType || (exports.PermissionType = {}));
    var LifecycleHook;
    (function(LifecycleHook2) {
      LifecycleHook2["UpdateAction"] = "UpdateAction";
      LifecycleHook2["DispatchAction"] = "DispatchAction";
    })(LifecycleHook = exports.LifecycleHook || (exports.LifecycleHook = {}));
  }
});

// node_modules/@shopify/app-bridge-core/util/collection.js
var require_collection = __commonJS({
  "node_modules/@shopify/app-bridge-core/util/collection.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.removeFromCollection = exports.addAndRemoveFromCollection = void 0;
    function addAndRemoveFromCollection(collection, item, then) {
      collection.push(item);
      return function() {
        return removeFromCollection(collection, item, then);
      };
    }
    exports.addAndRemoveFromCollection = addAndRemoveFromCollection;
    function removeFromCollection(collection, item, then) {
      var idx = collection.findIndex(function(i) {
        return i === item;
      });
      if (idx >= 0) {
        collection.splice(idx, 1);
        if (then) {
          then(item);
        }
        return true;
      }
      return false;
    }
    exports.removeFromCollection = removeFromCollection;
  }
});

// node_modules/@shopify/app-bridge-core/actions/Error/index.js
var require_Error = __commonJS({
  "node_modules/@shopify/app-bridge-core/actions/Error/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.permissionAction = exports.isErrorEventName = exports.throwError = exports.invalidOriginAction = exports.fromAction = exports.AppBridgeError = exports.AppActionType = exports.Action = void 0;
    var types_1 = require_types();
    var helper_1 = require_helper();
    var Action;
    (function(Action2) {
      Action2["INVALID_ACTION"] = "APP::ERROR::INVALID_ACTION";
      Action2["INVALID_ACTION_TYPE"] = "APP::ERROR::INVALID_ACTION_TYPE";
      Action2["INVALID_PAYLOAD"] = "APP::ERROR::INVALID_PAYLOAD";
      Action2["INVALID_OPTIONS"] = "APP::ERROR::INVALID_OPTIONS";
      Action2["UNEXPECTED_ACTION"] = "APP::ERROR::UNEXPECTED_ACTION";
      Action2["PERSISTENCE"] = "APP::ERROR::PERSISTENCE";
      Action2["UNSUPPORTED_OPERATION"] = "APP::ERROR::UNSUPPORTED_OPERATION";
      Action2["NETWORK"] = "APP::ERROR::NETWORK";
      Action2["PERMISSION"] = "APP::ERROR::PERMISSION";
      Action2["FAILED_AUTHENTICATION"] = "APP::ERROR::FAILED_AUTHENTICATION";
      Action2["INVALID_ORIGIN"] = "APP::ERROR::INVALID_ORIGIN";
    })(Action = exports.Action || (exports.Action = {}));
    var AppActionType;
    (function(AppActionType2) {
      AppActionType2["INVALID_CONFIG"] = "APP::ERROR::INVALID_CONFIG";
      AppActionType2["MISSING_CONFIG"] = "APP::APP_ERROR::MISSING_CONFIG";
      AppActionType2["MISSING_APP_BRIDGE_MIDDLEWARE"] = "APP::APP_ERROR::MISSING_APP_BRIDGE_MIDDLEWARE";
      AppActionType2["WINDOW_UNDEFINED"] = "APP::APP_ERROR::WINDOW_UNDEFINED";
      AppActionType2["REDUX_REINSTANTIATED"] = "APP::APP_ERROR::REDUX_REINSTANTIATED";
      AppActionType2["MISSING_LOCAL_ORIGIN"] = "APP::APP_ERROR::MISSING_LOCAL_ORIGIN";
      AppActionType2["MISSING_HOST_PROVIDER"] = "APP::APP_ERROR::MISSING_HOST_PROVIDER";
      AppActionType2["MISSING_ROUTER_CONTEXT"] = "APP::APP_ERROR::MISSING_ROUTER_CONTEXT";
      AppActionType2["MISSING_HISTORY_BLOCK"] = "APP::APP_ERROR::MISSING_HISTORY_BLOCK";
    })(AppActionType = exports.AppActionType || (exports.AppActionType = {}));
    var AppBridgeError = (
      /** @class */
      function() {
        function AppBridgeError2(message) {
          this.name = "AppBridgeError";
          this.message = message;
          if (typeof Error.captureStackTrace === "function") {
            Error.captureStackTrace(this, this.constructor);
          } else {
            this.stack = new Error(this.message).stack;
          }
        }
        return AppBridgeError2;
      }()
    );
    exports.AppBridgeError = AppBridgeError;
    AppBridgeError.prototype = Object.create(Error.prototype);
    function fromAction(message, type, action) {
      var errorMessage = message ? type + ": " + message : type;
      var error = new AppBridgeError(errorMessage);
      error.action = action;
      error.type = type;
      return error;
    }
    exports.fromAction = fromAction;
    function invalidOriginAction(message) {
      return helper_1.actionWrapper({
        group: types_1.Group.Error,
        payload: {
          message,
          type: Action.INVALID_ORIGIN
        },
        type: Action.INVALID_ORIGIN
      });
    }
    exports.invalidOriginAction = invalidOriginAction;
    function throwError() {
      var args = [];
      for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
      }
      var type = args[0];
      var message;
      var action;
      if (typeof args[1] === "string") {
        message = args[1];
      } else {
        action = args[1];
        message = args[2] || "";
      }
      throw fromAction(message, type, action);
    }
    exports.throwError = throwError;
    function isErrorEventName(eventName) {
      var match = helper_1.findMatchInEnum(Action, eventName);
      return typeof match === "string";
    }
    exports.isErrorEventName = isErrorEventName;
    function errorActionWrapperWithId(type, action, message) {
      var castPayload = action.payload;
      return helper_1.actionWrapper({
        type,
        group: types_1.Group.Error,
        payload: {
          action,
          message,
          type,
          id: castPayload && castPayload.id ? castPayload.id : void 0
        }
      });
    }
    function permissionAction(action, message) {
      return errorActionWrapperWithId(Action.PERMISSION, action, message || "Action is not permitted");
    }
    exports.permissionAction = permissionAction;
  }
});

// node_modules/@shopify/app-bridge-core/actions/uuid.js
var require_uuid = __commonJS({
  "node_modules/@shopify/app-bridge-core/actions/uuid.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.generateUuid = void 0;
    function asHex(value) {
      return Array.from(value).map(function(i) {
        return ("00" + i.toString(16)).slice(-2);
      }).join("");
    }
    function getRandomBytes(size) {
      if (typeof Uint8Array === "function" && typeof window === "object" && window.crypto) {
        var buffer = new Uint8Array(size);
        var randomValues = window.crypto.getRandomValues(buffer);
        if (randomValues) {
          return randomValues;
        }
      }
      return Array.from(new Array(size), function() {
        return Math.random() * 255 | 0;
      });
    }
    function generateUuid() {
      var version = 64;
      var clockSeqHiAndReserved = getRandomBytes(1);
      var timeHiAndVersion = getRandomBytes(2);
      clockSeqHiAndReserved[0] &= 63 | 128;
      timeHiAndVersion[0] &= 15 | version;
      return [
        // time-low
        asHex(getRandomBytes(4)),
        "-",
        // time-mid
        asHex(getRandomBytes(2)),
        "-",
        // time-high-and-version
        asHex(timeHiAndVersion),
        "-",
        // clock-seq-and-reserved
        asHex(clockSeqHiAndReserved),
        // clock-seq-loq
        asHex(getRandomBytes(1)),
        "-",
        // node
        asHex(getRandomBytes(6))
      ].join("");
    }
    exports.generateUuid = generateUuid;
    exports.default = generateUuid;
  }
});

// node_modules/@shopify/app-bridge-core/actions/ActionSet.js
var require_ActionSet = __commonJS({
  "node_modules/@shopify/app-bridge-core/actions/ActionSet.js"(exports) {
    "use strict";
    var __extends = exports && exports.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
          d2.__proto__ = b2;
        } || function(d2, b2) {
          for (var p in b2)
            if (Object.prototype.hasOwnProperty.call(b2, p))
              d2[p] = b2[p];
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        if (typeof b !== "function" && b !== null)
          throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __assign = exports && exports.__assign || function() {
      __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p))
              t[p] = s[p];
        }
        return t;
      };
      return __assign.apply(this, arguments);
    };
    var __spreadArray = exports && exports.__spreadArray || function(to, from) {
      for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
      return to;
    };
    var __importDefault = exports && exports.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.unsubscribeActions = exports.ActionSetWithChildren = exports.ActionSet = void 0;
    var types_1 = require_types2();
    var collection_1 = require_collection();
    var Error_1 = require_Error();
    var types_2 = require_types();
    var uuid_1 = __importDefault(require_uuid());
    var helper_1 = require_helper();
    var ActionSet = (
      /** @class */
      function() {
        function ActionSet2(app, type, group, id) {
          var _this = this;
          this.app = app;
          this.type = type;
          this.group = group;
          this.subgroups = [];
          this.subscriptions = [];
          if (!app) {
            Error_1.throwError(Error_1.Action.INVALID_ACTION, "Missing required `app`");
          }
          this.id = id || uuid_1.default();
          this.defaultGroup = group;
          var defaultSet = this.set;
          this.set = function() {
            var _a;
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
              args[_i] = arguments[_i];
            }
            if (!_this.app.hooks) {
              return defaultSet.apply(_this, args);
            }
            return (_a = _this.app.hooks).run.apply(_a, __spreadArray([types_1.LifecycleHook.UpdateAction, defaultSet, _this], args));
          };
        }
        ActionSet2.prototype.set = function() {
          var _ = [];
          for (var _i = 0; _i < arguments.length; _i++) {
            _[_i] = arguments[_i];
          }
        };
        Object.defineProperty(ActionSet2.prototype, "component", {
          get: function() {
            return {
              id: this.id,
              subgroups: this.subgroups,
              type: this.type
            };
          },
          enumerable: false,
          configurable: true
        });
        ActionSet2.prototype.updateSubscription = function(subscriptionToRemove, group, subgroups) {
          var eventType = subscriptionToRemove.eventType, callback = subscriptionToRemove.callback, component = subscriptionToRemove.component;
          var currentIndex;
          currentIndex = this.subscriptions.findIndex(function(subscription) {
            return subscription === subscriptionToRemove;
          });
          if (currentIndex >= 0) {
            this.subscriptions[currentIndex].unsubscribe();
          } else {
            currentIndex = void 0;
          }
          this.group = group;
          this.subgroups = subgroups;
          Object.assign(component, { subgroups: this.subgroups });
          return this.subscribe(eventType, callback, component, currentIndex);
        };
        ActionSet2.prototype.error = function(callback) {
          var _this = this;
          var subscriptionIndices = [];
          helper_1.forEachInEnum(Error_1.Action, function(eventNameSpace) {
            subscriptionIndices.push(_this.subscriptions.length);
            _this.subscribe(eventNameSpace, callback);
          });
          return function() {
            var subscriptionsToRemove = subscriptionIndices.map(function(index) {
              return _this.subscriptions[index];
            });
            subscriptionsToRemove.forEach(function(toRemove) {
              collection_1.removeFromCollection(_this.subscriptions, toRemove, function(removed) {
                removed.unsubscribe();
              });
            });
          };
        };
        ActionSet2.prototype.subscribe = function(eventName, callback, component, currentIndex) {
          var _this = this;
          var eventComponent = component || this.component;
          var eventType = eventName.toUpperCase();
          var boundedCallback = typeof currentIndex === "number" ? callback : callback.bind(this);
          var eventNameSpace;
          if (Error_1.isErrorEventName(eventName)) {
            eventNameSpace = helper_1.getEventNameSpace(types_2.Group.Error, eventName, __assign(__assign({}, eventComponent), { type: "" }));
          } else {
            eventNameSpace = helper_1.getEventNameSpace(this.group, eventName, eventComponent);
          }
          var unsubscribe = this.app.subscribe(eventNameSpace, boundedCallback, component ? component.id : this.id);
          var subscription = {
            eventType,
            unsubscribe,
            callback: boundedCallback,
            component: eventComponent,
            updateSubscribe: function(group, subgroups) {
              return _this.updateSubscription(subscription, group, subgroups);
            }
          };
          if (typeof currentIndex === "number" && currentIndex >= 0 && currentIndex < this.subscriptions.length) {
            this.subscriptions[currentIndex] = subscription;
          } else {
            this.subscriptions.push(subscription);
          }
          return unsubscribe;
        };
        ActionSet2.prototype.unsubscribe = function(resetOnly) {
          if (resetOnly === void 0) {
            resetOnly = false;
          }
          unsubscribeActions(this.subscriptions, this.defaultGroup, resetOnly);
          return this;
        };
        return ActionSet2;
      }()
    );
    exports.ActionSet = ActionSet;
    var ActionSetWithChildren = (
      /** @class */
      function(_super) {
        __extends(ActionSetWithChildren2, _super);
        function ActionSetWithChildren2() {
          var _this = _super !== null && _super.apply(this, arguments) || this;
          _this.children = [];
          return _this;
        }
        ActionSetWithChildren2.prototype.unsubscribe = function(unsubscribeChildren, resetParentOnly) {
          if (unsubscribeChildren === void 0) {
            unsubscribeChildren = true;
          }
          if (resetParentOnly === void 0) {
            resetParentOnly = false;
          }
          unsubscribeActions(this.subscriptions, this.defaultGroup, resetParentOnly);
          this.children.forEach(function(child) {
            if (child instanceof ActionSetWithChildren2) {
              child.unsubscribe(unsubscribeChildren, !unsubscribeChildren);
            } else {
              child.unsubscribe(!unsubscribeChildren);
            }
          });
          return this;
        };
        ActionSetWithChildren2.prototype.getChild = function(id) {
          var childIndex = this.children.findIndex(function(child) {
            return child.id === id;
          });
          return childIndex >= 0 ? this.children[childIndex] : void 0;
        };
        ActionSetWithChildren2.prototype.getChildIndex = function(id) {
          return this.children.findIndex(function(child) {
            return child.id === id;
          });
        };
        ActionSetWithChildren2.prototype.getChildSubscriptions = function(id, eventType) {
          return this.subscriptions.filter(function(sub) {
            return sub.component.id === id && (!eventType || eventType === sub.eventType);
          });
        };
        ActionSetWithChildren2.prototype.addChild = function(child, group, subgroups) {
          var _this = this;
          var subscriptions = child.subscriptions;
          var existingChild = this.getChild(child.id);
          if (!existingChild) {
            this.children.push(child);
          }
          if (!subscriptions || group === child.group && subgroups === child.subgroups) {
            return this;
          }
          subscriptions.forEach(function(subscription) {
            var updateSubscribe = subscription.updateSubscribe;
            updateSubscribe(group, subgroups);
          });
          Object.assign(child, { group, subgroups });
          if (child instanceof ActionSetWithChildren2) {
            child.children.forEach(function(childIter) {
              return _this.addChild(childIter, group, subgroups);
            });
          }
          return this;
        };
        ActionSetWithChildren2.prototype.removeChild = function(id) {
          var _this = this;
          collection_1.removeFromCollection(this.children, this.getChild(id), function() {
            var toBeRemoved = _this.subscriptions.filter(function(subs) {
              return subs.component.id === id;
            });
            toBeRemoved.forEach(function(toRemove) {
              collection_1.removeFromCollection(_this.subscriptions, toRemove, function(removed) {
                removed.unsubscribe();
              });
            });
          });
          return this;
        };
        ActionSetWithChildren2.prototype.subscribeToChild = function(child, eventName, callback) {
          var _this = this;
          var boundedCallback = callback.bind(this);
          if (eventName instanceof Array) {
            eventName.forEach(function(eventNameIter) {
              return _this.subscribeToChild(child, eventNameIter, callback);
            });
            return this;
          }
          if (typeof eventName !== "string") {
            return this;
          }
          var eventType = eventName.toUpperCase();
          var currentSubscriptions = this.getChildSubscriptions(child.id, eventType);
          if (currentSubscriptions.length > 0) {
            currentSubscriptions.forEach(function(subs) {
              return subs.updateSubscribe(_this.group, child.subgroups);
            });
          } else {
            var childComponent = {
              id: child.id,
              subgroups: child.subgroups,
              type: child.type
            };
            this.subscribe(eventType, boundedCallback, childComponent);
          }
          return this;
        };
        ActionSetWithChildren2.prototype.getUpdatedChildActions = function(newActions, currentActions) {
          if (newActions.length === 0) {
            while (currentActions.length > 0) {
              var action = currentActions.pop();
              if (!action) {
                break;
              }
              this.removeChild(action.id);
            }
            return void 0;
          }
          var uniqueActions = newActions.filter(function(action2, index, actionsArr) {
            return index === actionsArr.indexOf(action2);
          });
          var newActionIds = uniqueActions.map(function(action2) {
            return action2.id;
          });
          var unusedActions = currentActions.filter(function(action2) {
            return newActionIds.indexOf(action2.id) < 0;
          });
          while (unusedActions.length > 0) {
            var action = unusedActions.pop();
            if (!action) {
              break;
            }
            this.removeChild(action.id);
          }
          return uniqueActions;
        };
        return ActionSetWithChildren2;
      }(ActionSet)
    );
    exports.ActionSetWithChildren = ActionSetWithChildren;
    function unsubscribeActions(subscriptions, defaultGroup, reassign) {
      if (reassign === void 0) {
        reassign = false;
      }
      subscriptions.forEach(function(subscription) {
        if (reassign) {
          var updateSubscribe = subscription.updateSubscribe;
          updateSubscribe(defaultGroup, []);
        } else {
          var unsubscribe = subscription.unsubscribe;
          unsubscribe();
        }
      });
      if (!reassign) {
        subscriptions.length = 0;
      }
    }
    exports.unsubscribeActions = unsubscribeActions;
  }
});

// node_modules/@shopify/app-bridge-core/actions/Button/index.js
var require_Button = __commonJS({
  "node_modules/@shopify/app-bridge-core/actions/Button/index.js"(exports) {
    "use strict";
    var __extends = exports && exports.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
          d2.__proto__ = b2;
        } || function(d2, b2) {
          for (var p in b2)
            if (Object.prototype.hasOwnProperty.call(b2, p))
              d2[p] = b2[p];
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        if (typeof b !== "function" && b !== null)
          throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __assign = exports && exports.__assign || function() {
      __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p))
              t[p] = s[p];
        }
        return t;
      };
      return __assign.apply(this, arguments);
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Button = exports.update = exports.clickButton = exports.Style = exports.Icon = exports.Action = void 0;
    var helper_1 = require_helper();
    var ActionSet_1 = require_ActionSet();
    var types_1 = require_types();
    var Action;
    (function(Action2) {
      Action2["CLICK"] = "CLICK";
      Action2["UPDATE"] = "UPDATE";
    })(Action = exports.Action || (exports.Action = {}));
    var Icon;
    (function(Icon2) {
      Icon2["Print"] = "print";
    })(Icon = exports.Icon || (exports.Icon = {}));
    var Style;
    (function(Style2) {
      Style2["Danger"] = "danger";
    })(Style = exports.Style || (exports.Style = {}));
    function clickButton(group, component, payload) {
      var id = component.id;
      var action = helper_1.getEventNameSpace(group, Action.CLICK, component);
      var buttonPayload = {
        id,
        payload
      };
      return helper_1.actionWrapper({ type: action, group, payload: buttonPayload });
    }
    exports.clickButton = clickButton;
    function update(group, component, props) {
      var id = component.id;
      var label = props.label;
      var action = helper_1.getEventNameSpace(group, Action.UPDATE, component);
      var buttonPayload = __assign(__assign({}, props), { id, label });
      return helper_1.actionWrapper({ type: action, group, payload: buttonPayload });
    }
    exports.update = update;
    var Button = (
      /** @class */
      function(_super) {
        __extends(Button2, _super);
        function Button2(app, options) {
          var _this = _super.call(this, app, types_1.ComponentType.Button, types_1.Group.Button) || this;
          _this.disabled = false;
          _this.loading = false;
          _this.plain = false;
          _this.set(options, false);
          return _this;
        }
        Object.defineProperty(Button2.prototype, "options", {
          get: function() {
            return {
              disabled: this.disabled,
              icon: this.icon,
              label: this.label,
              style: this.style,
              loading: this.loading,
              plain: this.plain
            };
          },
          enumerable: false,
          configurable: true
        });
        Object.defineProperty(Button2.prototype, "payload", {
          get: function() {
            return __assign(__assign({}, this.options), { id: this.id });
          },
          enumerable: false,
          configurable: true
        });
        Button2.prototype.set = function(options, shouldUpdate) {
          if (shouldUpdate === void 0) {
            shouldUpdate = true;
          }
          var mergedOptions = helper_1.getMergedProps(this.options, options);
          var label = mergedOptions.label, disabled = mergedOptions.disabled, icon = mergedOptions.icon, style = mergedOptions.style, loading = mergedOptions.loading, plain = mergedOptions.plain;
          this.label = label;
          this.disabled = Boolean(disabled);
          this.icon = icon;
          this.style = style;
          this.loading = Boolean(loading);
          this.plain = Boolean(plain);
          if (shouldUpdate) {
            this.dispatch(Action.UPDATE);
          }
          return this;
        };
        Button2.prototype.dispatch = function(action, payload) {
          switch (action) {
            case Action.CLICK:
              this.app.dispatch(clickButton(this.group, this.component, payload));
              break;
            case Action.UPDATE: {
              var updateAction = update(this.group, this.component, this.payload);
              this.app.dispatch(updateAction);
              break;
            }
          }
          return this;
        };
        return Button2;
      }(ActionSet_1.ActionSet)
    );
    exports.Button = Button;
  }
});

// node_modules/@shopify/app-bridge-core/actions/buttonHelper.js
var require_buttonHelper = __commonJS({
  "node_modules/@shopify/app-bridge-core/actions/buttonHelper.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.getSingleButton = void 0;
    var Button_1 = require_Button();
    function getSingleButton(action, button, subgroups, updateCb) {
      action.addChild(button, action.group, subgroups);
      action.subscribeToChild(button, Button_1.Action.UPDATE, updateCb);
      return button.payload;
    }
    exports.getSingleButton = getSingleButton;
  }
});

// node_modules/@shopify/app-bridge-core/actions/Modal/index.js
var require_Modal = __commonJS({
  "node_modules/@shopify/app-bridge-core/actions/Modal/index.js"(exports) {
    "use strict";
    var __extends = exports && exports.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
          d2.__proto__ = b2;
        } || function(d2, b2) {
          for (var p in b2)
            if (Object.prototype.hasOwnProperty.call(b2, p))
              d2[p] = b2[p];
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        if (typeof b !== "function" && b !== null)
          throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __assign = exports && exports.__assign || function() {
      __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p))
              t[p] = s[p];
        }
        return t;
      };
      return __assign.apply(this, arguments);
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ModalIframe = exports.ModalMessage = exports.Modal = exports.isMessageModal = exports.isIframeModal = exports.data = exports.update = exports.clickFooterButton = exports.updateModalSize = exports.closeModal = exports.openModal = exports.Size = exports.Action = void 0;
    var buttonHelper_1 = require_buttonHelper();
    var helper_1 = require_helper();
    var ActionSet_1 = require_ActionSet();
    var types_1 = require_types();
    var Button_1 = require_Button();
    var Action;
    (function(Action2) {
      Action2["OPEN"] = "APP::MODAL::OPEN";
      Action2["CLOSE"] = "APP::MODAL::CLOSE";
      Action2["UPDATE"] = "APP::MODAL::UPDATE";
      Action2["UPDATE_CONTENT"] = "APP::MODAL::CONTENT::UPDATE";
      Action2["FOOTER_BUTTON_CLICK"] = "APP::MODAL::FOOTER::BUTTON::CLICK";
      Action2["FOOTER_BUTTON_UPDATE"] = "APP::MODAL::FOOTER::BUTTON::UPDATE";
      Action2["UPDATE_SIZE"] = "APP::MODAL::UPDATE_SIZE";
      Action2["DATA"] = "APP::MODAL::DATA";
    })(Action = exports.Action || (exports.Action = {}));
    var Size;
    (function(Size2) {
      Size2["Small"] = "small";
      Size2["Medium"] = "medium";
      Size2["Large"] = "large";
      Size2["Full"] = "full";
      Size2["Auto"] = "auto";
    })(Size = exports.Size || (exports.Size = {}));
    var FOOTER_BUTTON_PROPS = {
      group: types_1.Group.Modal,
      subgroups: ["Footer"],
      type: types_1.ComponentType.Button
    };
    function openModal(modalPayload) {
      return helper_1.actionWrapper({
        group: types_1.Group.Modal,
        payload: modalPayload,
        type: Action.OPEN
      });
    }
    exports.openModal = openModal;
    function closeModal(modalClosePayload) {
      return helper_1.actionWrapper({
        group: types_1.Group.Modal,
        payload: modalClosePayload,
        type: Action.CLOSE
      });
    }
    exports.closeModal = closeModal;
    function updateModalSize(updateSizePayload) {
      return helper_1.actionWrapper({
        group: types_1.Group.Modal,
        payload: updateSizePayload,
        type: Action.UPDATE_SIZE
      });
    }
    exports.updateModalSize = updateModalSize;
    function clickFooterButton(id, payload) {
      var component = __assign({ id }, FOOTER_BUTTON_PROPS);
      return Button_1.clickButton(types_1.Group.Modal, component, payload);
    }
    exports.clickFooterButton = clickFooterButton;
    function update(payload) {
      return helper_1.actionWrapper({
        payload,
        group: types_1.Group.Modal,
        type: Action.UPDATE
      });
    }
    exports.update = update;
    function data(payload) {
      return helper_1.actionWrapper({
        payload,
        group: types_1.Group.Modal,
        type: Action.DATA
      });
    }
    exports.data = data;
    function isIframeModal(options) {
      return typeof options.url === "string" || typeof options.path === "string";
    }
    exports.isIframeModal = isIframeModal;
    function isMessageModal(options) {
      return typeof options.message === "string";
    }
    exports.isMessageModal = isMessageModal;
    var Modal = (
      /** @class */
      function(_super) {
        __extends(Modal2, _super);
        function Modal2() {
          var _this = _super !== null && _super.apply(this, arguments) || this;
          _this.size = Size.Small;
          return _this;
        }
        Object.defineProperty(Modal2.prototype, "footer", {
          get: function() {
            if (!this.footerPrimary && !this.footerSecondary) {
              return void 0;
            }
            return {
              buttons: {
                primary: this.footerPrimary,
                secondary: this.footerSecondary
              }
            };
          },
          enumerable: false,
          configurable: true
        });
        Object.defineProperty(Modal2.prototype, "footerOptions", {
          get: function() {
            if (!this.footerPrimaryOptions && !this.footerSecondaryOptions) {
              return void 0;
            }
            return {
              buttons: {
                primary: this.footerPrimaryOptions,
                secondary: this.footerSecondaryOptions
              }
            };
          },
          enumerable: false,
          configurable: true
        });
        Modal2.prototype.close = function() {
          this.app.dispatch(closeModal({ id: this.id }));
        };
        Modal2.prototype.setFooterPrimaryButton = function(newOptions, updateCb) {
          var _this = this;
          var subgroups = FOOTER_BUTTON_PROPS.subgroups;
          this.footerPrimaryOptions = this.getChildButton(newOptions, this.footerPrimaryOptions);
          this.footerPrimary = this.footerPrimaryOptions ? buttonHelper_1.getSingleButton(this, this.footerPrimaryOptions, subgroups, function(newPayload) {
            _this.updatePrimaryFooterButton(newPayload, updateCb);
          }) : void 0;
        };
        Modal2.prototype.setFooterSecondaryButtons = function(newOptions, updateCb) {
          var _this = this;
          var subgroups = FOOTER_BUTTON_PROPS.subgroups;
          var newButtons = newOptions || [];
          var currentOptions = this.footerOptions && this.footerOptions.buttons.secondary || [];
          this.footerSecondaryOptions = this.getUpdatedChildActions(newButtons, currentOptions);
          this.footerSecondary = this.footerSecondaryOptions ? this.footerSecondaryOptions.map(function(action) {
            return buttonHelper_1.getSingleButton(_this, action, subgroups, function(newPayload) {
              _this.updateSecondaryFooterButton(newPayload, updateCb);
            });
          }) : void 0;
        };
        Modal2.prototype.getChildButton = function(newAction, currentAction) {
          var newButtons = newAction ? [newAction] : [];
          var currentButtons = currentAction ? [currentAction] : [];
          var updatedButton = this.getUpdatedChildActions(newButtons, currentButtons);
          return updatedButton ? updatedButton[0] : void 0;
        };
        Modal2.prototype.updatePrimaryFooterButton = function(newPayload, updateCb) {
          if (!this.footer || !this.footer.buttons.primary) {
            return;
          }
          if (helper_1.updateActionFromPayload(this.footer.buttons.primary, newPayload)) {
            updateCb();
          }
        };
        Modal2.prototype.updateSecondaryFooterButton = function(newPayload, updateCb) {
          if (!this.footer || !this.footer.buttons || !this.footer.buttons.secondary) {
            return;
          }
          var updated;
          for (var _i = 0, _a = this.footer.buttons.secondary; _i < _a.length; _i++) {
            var action = _a[_i];
            updated = helper_1.updateActionFromPayload(action, newPayload);
            if (updated) {
              break;
            }
          }
          if (updated) {
            updateCb();
          }
        };
        return Modal2;
      }(ActionSet_1.ActionSetWithChildren)
    );
    exports.Modal = Modal;
    var ModalMessage = (
      /** @class */
      function(_super) {
        __extends(ModalMessage2, _super);
        function ModalMessage2(app, options) {
          var _this = _super.call(this, app, types_1.Group.Modal, types_1.Group.Modal) || this;
          _this.set(options, false);
          return _this;
        }
        Object.defineProperty(ModalMessage2.prototype, "payload", {
          get: function() {
            return __assign(__assign({}, this.options), { footer: this.footer, id: this.id });
          },
          enumerable: false,
          configurable: true
        });
        Object.defineProperty(ModalMessage2.prototype, "options", {
          get: function() {
            return {
              footer: this.footerOptions,
              message: this.message,
              size: this.size,
              title: this.title
            };
          },
          enumerable: false,
          configurable: true
        });
        ModalMessage2.prototype.set = function(options, shouldUpdate) {
          var _this = this;
          if (shouldUpdate === void 0) {
            shouldUpdate = true;
          }
          var mergedOptions = helper_1.getMergedProps(this.options, options);
          var title = mergedOptions.title, footer = mergedOptions.footer, message = mergedOptions.message, size = mergedOptions.size;
          this.title = title;
          this.message = message;
          this.size = size;
          this.setFooterPrimaryButton(footer ? footer.buttons.primary : void 0, function() {
            _this.dispatch(Action.UPDATE);
          });
          this.setFooterSecondaryButtons(footer ? footer.buttons.secondary : void 0, function() {
            _this.dispatch(Action.UPDATE);
          });
          if (shouldUpdate) {
            this.dispatch(Action.UPDATE);
          }
          return this;
        };
        ModalMessage2.prototype.dispatch = function(action) {
          switch (action) {
            case Action.OPEN:
              this.app.dispatch(openModal(this.payload));
              break;
            case Action.CLOSE:
              this.close();
              break;
            case Action.UPDATE:
              this.app.dispatch(update(this.payload));
              break;
          }
          return this;
        };
        return ModalMessage2;
      }(Modal)
    );
    exports.ModalMessage = ModalMessage;
    var ModalIframe = (
      /** @class */
      function(_super) {
        __extends(ModalIframe2, _super);
        function ModalIframe2(app, options) {
          var _this = _super.call(this, app, types_1.Group.Modal, types_1.Group.Modal) || this;
          _this.set(options, false);
          return _this;
        }
        Object.defineProperty(ModalIframe2.prototype, "payload", {
          get: function() {
            return __assign(__assign({}, this.options), { footer: this.footer, id: this.id });
          },
          enumerable: false,
          configurable: true
        });
        Object.defineProperty(ModalIframe2.prototype, "options", {
          get: function() {
            return {
              footer: this.footerOptions,
              path: this.path,
              size: this.size,
              title: this.title,
              url: this.url,
              loading: this.loading
            };
          },
          enumerable: false,
          configurable: true
        });
        ModalIframe2.prototype.set = function(options, shouldUpdate) {
          var _this = this;
          if (shouldUpdate === void 0) {
            shouldUpdate = true;
          }
          var mergedOptions = helper_1.getMergedProps(this.options, options);
          var title = mergedOptions.title, footer = mergedOptions.footer, path = mergedOptions.path, url = mergedOptions.url, size = mergedOptions.size, loading = mergedOptions.loading;
          this.title = title;
          this.url = url;
          this.path = path;
          this.size = size;
          this.loading = loading;
          this.setFooterPrimaryButton(footer ? footer.buttons.primary : void 0, function() {
            _this.dispatch(Action.UPDATE);
          });
          this.setFooterSecondaryButtons(footer ? footer.buttons.secondary : void 0, function() {
            _this.dispatch(Action.UPDATE);
          });
          if (shouldUpdate) {
            this.dispatch(Action.UPDATE);
          }
          return this;
        };
        ModalIframe2.prototype.dispatch = function(action, payload) {
          switch (action) {
            case Action.OPEN:
              this.app.dispatch(openModal(this.payload));
              break;
            case Action.CLOSE:
              this.close();
              break;
            case Action.UPDATE:
              this.app.dispatch(update(this.payload));
              break;
            case Action.DATA:
              this.app.dispatch(data(payload || {}));
              break;
          }
          return this;
        };
        return ModalIframe2;
      }(Modal)
    );
    exports.ModalIframe = ModalIframe;
  }
});

// node_modules/@shopify/app-bridge/actions/Modal/index.js
var require_Modal2 = __commonJS({
  "node_modules/@shopify/app-bridge/actions/Modal/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.create = exports.Modal = exports.isMessageModal = exports.data = exports.update = exports.clickFooterButton = exports.updateModalSize = exports.closeModal = exports.openModal = exports.Size = exports.Action = exports.isIframeModal = exports.ModalMessage = exports.ModalIframe = void 0;
    var Modal_1 = require_Modal();
    Object.defineProperty(exports, "ModalIframe", { enumerable: true, get: function() {
      return Modal_1.ModalIframe;
    } });
    Object.defineProperty(exports, "ModalMessage", { enumerable: true, get: function() {
      return Modal_1.ModalMessage;
    } });
    Object.defineProperty(exports, "isIframeModal", { enumerable: true, get: function() {
      return Modal_1.isIframeModal;
    } });
    var Modal_2 = require_Modal();
    Object.defineProperty(exports, "Action", { enumerable: true, get: function() {
      return Modal_2.Action;
    } });
    Object.defineProperty(exports, "Size", { enumerable: true, get: function() {
      return Modal_2.Size;
    } });
    Object.defineProperty(exports, "openModal", { enumerable: true, get: function() {
      return Modal_2.openModal;
    } });
    Object.defineProperty(exports, "closeModal", { enumerable: true, get: function() {
      return Modal_2.closeModal;
    } });
    Object.defineProperty(exports, "updateModalSize", { enumerable: true, get: function() {
      return Modal_2.updateModalSize;
    } });
    Object.defineProperty(exports, "clickFooterButton", { enumerable: true, get: function() {
      return Modal_2.clickFooterButton;
    } });
    Object.defineProperty(exports, "update", { enumerable: true, get: function() {
      return Modal_2.update;
    } });
    Object.defineProperty(exports, "data", { enumerable: true, get: function() {
      return Modal_2.data;
    } });
    Object.defineProperty(exports, "isMessageModal", { enumerable: true, get: function() {
      return Modal_2.isMessageModal;
    } });
    Object.defineProperty(exports, "Modal", { enumerable: true, get: function() {
      return Modal_2.Modal;
    } });
    var create = function(app, options) {
      if (Modal_1.isIframeModal(options)) {
        return new Modal_1.ModalIframe(app, options);
      }
      return new Modal_1.ModalMessage(app, options);
    };
    exports.create = create;
  }
});

// node_modules/@shopify/app-bridge-core/actions/validator.js
var require_validator = __commonJS({
  "node_modules/@shopify/app-bridge-core/actions/validator.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.isPermitted = exports.getPermissionKey = exports.isPerformanceOrWebVitalsAction = exports.isAppMessage = exports.isAppBridgeAction = void 0;
    var types_1 = require_types2();
    var constants_1 = require_constants();
    var helper_1 = require_helper();
    function isAppBridgeAction(action) {
      return action instanceof Object && Object.prototype.hasOwnProperty.call(action, "type") && action.type.toString().startsWith(constants_1.PREFIX);
    }
    exports.isAppBridgeAction = isAppBridgeAction;
    function isAppMessage(event) {
      if (typeof event !== "object" || !event.data || typeof event.data !== "object") {
        return false;
      }
      var data = event.data;
      return Object.prototype.hasOwnProperty.call(data, "type") && helper_1.findMatchInEnum(types_1.MessageType, data.type) !== void 0;
    }
    exports.isAppMessage = isAppMessage;
    function isPerformanceOrWebVitalsAction(_a) {
      var type = _a.type;
      return type.match(/^APP::(PERFORMANCE|WEB_VITALS)::/);
    }
    exports.isPerformanceOrWebVitalsAction = isPerformanceOrWebVitalsAction;
    function getPermissionKey(type) {
      return type.replace(new RegExp("^" + constants_1.PREFIX + constants_1.SEPARATOR + "\\w+" + constants_1.SEPARATOR), "");
    }
    exports.getPermissionKey = getPermissionKey;
    function isPermitted(features, _a, permissionType) {
      var group = _a.group, type = _a.type;
      if (!group || !Object.prototype.hasOwnProperty.call(features, group)) {
        return false;
      }
      var feature = features[group];
      if (!feature) {
        return false;
      }
      var actionType = getPermissionKey(type);
      return feature[actionType] ? feature[actionType][permissionType] === true : false;
    }
    exports.isPermitted = isPermitted;
  }
});

// node_modules/@shopify/app-bridge-core/util/env.js
var require_env = __commonJS({
  "node_modules/@shopify/app-bridge-core/util/env.js"(exports) {
    "use strict";
    var _a;
    var _b;
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.isUnframed = exports.isClient = exports.isServer = void 0;
    exports.isServer = typeof window === "undefined";
    exports.isClient = !exports.isServer;
    exports.isUnframed = exports.isClient && ((_b = (_a = window.navigator) === null || _a === void 0 ? void 0 : _a.userAgent) === null || _b === void 0 ? void 0 : _b.indexOf("Unframed")) > 0;
  }
});

// node_modules/@shopify/app-bridge-core/MessageTransport.js
var require_MessageTransport = __commonJS({
  "node_modules/@shopify/app-bridge-core/MessageTransport.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.createTransportListener = exports.fromWindow = exports.fromFrame = exports.Context = void 0;
    var Error_1 = require_Error();
    var validator_1 = require_validator();
    var types_1 = require_types2();
    var collection_1 = require_collection();
    var env_1 = require_env();
    var Context;
    (function(Context2) {
      Context2["Modal"] = "Modal";
      Context2["Main"] = "Main";
    })(Context = exports.Context || (exports.Context = {}));
    function fromFrame(frame, localOrigin, context) {
      var handlers = [];
      var host = frame.host, frameWindow = frame.window;
      if (!host) {
        throw Error_1.fromAction("App frame is undefined", Error_1.AppActionType.WINDOW_UNDEFINED);
      }
      if (env_1.isUnframed && window.MobileWebView) {
        Object.assign(window.MobileWebView, {
          postMessageToIframe: function(message, origin) {
            frameWindow === null || frameWindow === void 0 ? void 0 : frameWindow.postMessage(message, origin);
            if (isDispatchAction(message)) {
              host.postMessage(JSON.stringify(message.payload), location.origin);
            }
          },
          updateIframeUrl: function(newUrl) {
            var currentWindowLocation = window.location;
            var frameWindowLocation = (frame.window || {}).location;
            try {
              var newUrlOrigin = new URL(newUrl).origin;
              if (newUrlOrigin === localOrigin && frameWindowLocation) {
                frameWindowLocation.replace(newUrl);
              } else {
                currentWindowLocation.href = newUrl;
              }
            } catch (_) {
            }
          }
        });
      }
      host.addEventListener("message", function(event) {
        if (event.source === host || !validator_1.isAppMessage(event)) {
          return;
        }
        if (event.origin !== localOrigin) {
          var errorMessage = "Message origin '" + event.origin + "' does not match app origin '" + localOrigin + "'.";
          var payload = Error_1.invalidOriginAction(errorMessage);
          var message = {
            type: "dispatch",
            payload
          };
          frameWindow === null || frameWindow === void 0 ? void 0 : frameWindow.postMessage(message, event.origin);
          return;
        }
        if (env_1.isUnframed && window.MobileWebView) {
          var payload = JSON.stringify({
            id: "unframed://fromClient",
            origin: localOrigin,
            data: event.data
          });
          window.MobileWebView.postMessage(payload);
          return;
        }
        for (var _i = 0, handlers_1 = handlers; _i < handlers_1.length; _i++) {
          var handler = handlers_1[_i];
          handler(event);
        }
      });
      return {
        context,
        localOrigin,
        frameWindow,
        hostFrame: host,
        dispatch: function(message) {
          frameWindow === null || frameWindow === void 0 ? void 0 : frameWindow.postMessage(message, localOrigin);
        },
        subscribe: function(handler) {
          return collection_1.addAndRemoveFromCollection(handlers, handler);
        }
      };
    }
    exports.fromFrame = fromFrame;
    function fromWindow(contentWindow, localOrigin) {
      var handlers = [];
      if (typeof window !== void 0) {
        window.addEventListener("message", function(event) {
          if (window === contentWindow && !env_1.isUnframed || event.source !== contentWindow || !(validator_1.isAppBridgeAction(event.data.payload) || validator_1.isAppMessage(event))) {
            return;
          }
          for (var _i = 0, handlers_2 = handlers; _i < handlers_2.length; _i++) {
            var handler = handlers_2[_i];
            handler(event);
          }
        });
      }
      return {
        localOrigin,
        hostFrame: contentWindow,
        dispatch: function(message) {
          var _a;
          if (!((_a = message.source) === null || _a === void 0 ? void 0 : _a.host)) {
            return;
          }
          if (env_1.isUnframed && window && window.MobileWebView) {
            var payload = JSON.stringify({
              id: "unframed://fromClient",
              origin: localOrigin,
              data: message
            });
            window.MobileWebView.postMessage(payload);
            return;
          }
          var messageOrigin = new URL("https://" + message.source.host).origin;
          contentWindow.postMessage(message, messageOrigin);
        },
        subscribe: function(handler) {
          return collection_1.addAndRemoveFromCollection(handlers, handler);
        }
      };
    }
    exports.fromWindow = fromWindow;
    function createTransportListener() {
      var listeners = [];
      var actionListeners = {};
      function createSubscribeHandler(dispatcher) {
        function subscribe() {
          if (arguments.length < 2) {
            return collection_1.addAndRemoveFromCollection(listeners, { callback: arguments[0] });
          }
          var _a = Array.from(arguments), type = _a[0], callback = _a[1], id = _a[2];
          var actionCallback = { callback, id };
          var payload = { type, id };
          if (!Object.prototype.hasOwnProperty.call(actionListeners, type)) {
            actionListeners[type] = [];
          }
          if (dispatcher) {
            dispatcher(types_1.MessageType.Subscribe, payload);
          }
          return collection_1.addAndRemoveFromCollection(actionListeners[type], actionCallback, function() {
            if (dispatcher) {
              dispatcher(types_1.MessageType.Unsubscribe, payload);
            }
          });
        }
        return subscribe;
      }
      return {
        createSubscribeHandler,
        handleMessage: function(message) {
          listeners.forEach(function(listener) {
            return listener.callback(message);
          });
        },
        handleActionDispatch: function(_a) {
          var type = _a.type, payload = _a.payload;
          var hasCallback = false;
          if (Object.prototype.hasOwnProperty.call(actionListeners, type)) {
            for (var _i = 0, _b = actionListeners[type]; _i < _b.length; _i++) {
              var listener = _b[_i];
              var id = listener.id, callback = listener.callback;
              var matchId = payload && payload.id === id;
              if (matchId || !id) {
                callback(payload);
                hasCallback = true;
              }
            }
          }
          return hasCallback;
        }
      };
    }
    exports.createTransportListener = createTransportListener;
    function isDispatchAction(message) {
      return message !== null && typeof message === "object" && !Array.isArray(message) && message.type === "dispatch" && typeof message.payload === "object";
    }
  }
});

// node_modules/@shopify/app-bridge/MessageTransport.js
var require_MessageTransport2 = __commonJS({
  "node_modules/@shopify/app-bridge/MessageTransport.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      Object.defineProperty(o, k2, { enumerable: true, get: function() {
        return m[k];
      } });
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __exportStar = exports && exports.__exportStar || function(m, exports2) {
      for (var p in m)
        if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p))
          __createBinding(exports2, m, p);
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    __exportStar(require_MessageTransport(), exports);
  }
});

// node_modules/@shopify/app-bridge/util/env.js
var require_env2 = __commonJS({
  "node_modules/@shopify/app-bridge/util/env.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.isDevelopmentClient = exports.isProduction = exports.isDevelopment = exports.isUnframed = exports.isServer = exports.isClient = void 0;
    var env_1 = require_env();
    var env_2 = require_env();
    Object.defineProperty(exports, "isClient", { enumerable: true, get: function() {
      return env_2.isClient;
    } });
    Object.defineProperty(exports, "isServer", { enumerable: true, get: function() {
      return env_2.isServer;
    } });
    Object.defineProperty(exports, "isUnframed", { enumerable: true, get: function() {
      return env_2.isUnframed;
    } });
    exports.isDevelopment = typeof process !== "undefined" && process.env && true;
    exports.isProduction = !exports.isDevelopment;
    exports.isDevelopmentClient = exports.isDevelopment && env_1.isClient;
  }
});

// node_modules/@shopify/app-bridge/utilities/platform.js
var require_platform = __commonJS({
  "node_modules/@shopify/app-bridge/utilities/platform.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.isShopifyPing = exports.isShopifyPOS = exports.isShopifyMobile = exports.isShopifyEmbedded = exports.isMobile = void 0;
    var env_1 = require_env2();
    function isMobile() {
      return isShopifyMobile() || isShopifyPOS() || isShopifyPing();
    }
    exports.isMobile = isMobile;
    function isShopifyEmbedded() {
      return env_1.isClient && window.top !== window.self || env_1.isUnframed;
    }
    exports.isShopifyEmbedded = isShopifyEmbedded;
    function isShopifyMobile() {
      return typeof navigator !== "undefined" && navigator.userAgent.indexOf("Shopify Mobile") >= 0;
    }
    exports.isShopifyMobile = isShopifyMobile;
    function isShopifyPOS() {
      return typeof navigator !== "undefined" && navigator.userAgent.indexOf("Shopify POS") >= 0;
    }
    exports.isShopifyPOS = isShopifyPOS;
    function isShopifyPing() {
      return typeof navigator !== "undefined" && navigator.userAgent.indexOf("Shopify Ping") >= 0;
    }
    exports.isShopifyPing = isShopifyPing;
  }
});

// node_modules/@shopify/app-bridge/utilities/modal.js
var require_modal = __commonJS({
  "node_modules/@shopify/app-bridge/utilities/modal.js"(exports) {
    "use strict";
    var __awaiter = exports && exports.__awaiter || function(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
          resolve(value);
        });
      }
      return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }
        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }
        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    };
    var __generator = exports && exports.__generator || function(thisArg, body) {
      var _ = { label: 0, sent: function() {
        if (t[0] & 1)
          throw t[1];
        return t[1];
      }, trys: [], ops: [] }, f, y, t, g;
      return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
        return this;
      }), g;
      function verb(n) {
        return function(v) {
          return step([n, v]);
        };
      }
      function step(op) {
        if (f)
          throw new TypeError("Generator is already executing.");
        while (_)
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
              return t;
            if (y = 0, t)
              op = [op[0] & 2, t.value];
            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;
              case 4:
                _.label++;
                return { value: op[1], done: false };
              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;
              case 7:
                op = _.ops.pop();
                _.trys.pop();
                continue;
              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }
                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }
                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }
                if (t && _.label < t[2]) {
                  _.label = t[2];
                  _.ops.push(op);
                  break;
                }
                if (t[2])
                  _.ops.pop();
                _.trys.pop();
                continue;
            }
            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        if (op[0] & 5)
          throw op[1];
        return { value: op[0] ? op[1] : void 0, done: true };
      }
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.createMutationObserver = exports.setupModalAutoSizing = void 0;
    var Modal_1 = require_Modal2();
    var MessageTransport_1 = require_MessageTransport2();
    var platform_1 = require_platform();
    var AUTO_SIZE_CLASS = "app-bridge-utils-modal-auto-size";
    var autoSizeStylesheet = createAutoSizeStylesheet();
    function createAutoSizeStylesheet() {
      if (typeof document === "undefined") {
        return null;
      }
      var autoSizeStylesheet2 = document.createElement("style");
      autoSizeStylesheet2.type = "text/css";
      autoSizeStylesheet2.innerHTML = "." + AUTO_SIZE_CLASS + " { overflow: hidden; height: auto; min-height: auto; }";
      return autoSizeStylesheet2;
    }
    function addAutoSizing(app, id) {
      if (!autoSizeStylesheet) {
        return function() {
        };
      }
      var head = document.getElementsByTagName("head")[0];
      var classList = document.body.classList;
      head.appendChild(autoSizeStylesheet);
      classList.add(AUTO_SIZE_CLASS);
      var mutationObserver = createMutationObserver(app, id);
      return function() {
        classList.remove(AUTO_SIZE_CLASS);
        if (head.contains(autoSizeStylesheet)) {
          head.removeChild(autoSizeStylesheet);
        }
        if (mutationObserver) {
          mutationObserver.disconnect();
        }
      };
    }
    function setupModalAutoSizing(app) {
      return __awaiter(this, void 0, void 0, function() {
        function cleanup() {
          if (removeAutoSizing) {
            removeAutoSizing();
            removeAutoSizing = void 0;
          }
        }
        function handleModalSizeUpdate(appState) {
          var context = appState.context, id = appState.modal.id;
          if (platform_1.isMobile() || context !== MessageTransport_1.Context.Modal) {
            cleanup();
            return cleanup;
          }
          if (!removeAutoSizing) {
            removeAutoSizing = addAutoSizing(app, id);
          }
          return cleanup;
        }
        var removeAutoSizing;
        return __generator(this, function(_a) {
          switch (_a.label) {
            case 0:
              return [4, app.getState().then(handleModalSizeUpdate)];
            case 1:
              _a.sent();
              return [2, cleanup];
          }
        });
      });
    }
    exports.setupModalAutoSizing = setupModalAutoSizing;
    function createMutationObserver(app, id) {
      if (typeof document === "undefined") {
        return;
      }
      var lastKnownWindowHeight = -1;
      var mutationTimeoutId;
      var mutationObserverConfig = {
        attributes: true,
        attributeOldValue: false,
        characterData: true,
        characterDataOldValue: false,
        childList: true,
        subtree: true
      };
      var mutationObserver = new MutationObserver(debouncedResizeHandler);
      mutationObserver.observe(document, mutationObserverConfig);
      updateHeight();
      function debouncedResizeHandler() {
        if (mutationTimeoutId) {
          window.clearTimeout(mutationTimeoutId);
        }
        mutationTimeoutId = window.setTimeout(updateHeight, 16);
      }
      function updateHeight() {
        var height = document.body.scrollHeight;
        if (height !== lastKnownWindowHeight) {
          lastKnownWindowHeight = height;
          app.dispatch(Modal_1.updateModalSize({ id, height: String(height) }));
        }
      }
      return mutationObserver;
    }
    exports.createMutationObserver = createMutationObserver;
  }
});

// node_modules/@shopify/app-bridge-core/actions/SessionToken/index.js
var require_SessionToken = __commonJS({
  "node_modules/@shopify/app-bridge-core/actions/SessionToken/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.respond = exports.request = exports.Action = void 0;
    var helper_1 = require_helper();
    var types_1 = require_types();
    var Action;
    (function(Action2) {
      Action2["REQUEST"] = "APP::SESSION_TOKEN::REQUEST";
      Action2["RESPOND"] = "APP::SESSION_TOKEN::RESPOND";
    })(Action = exports.Action || (exports.Action = {}));
    function request() {
      return helper_1.actionWrapper({
        group: types_1.Group.SessionToken,
        type: Action.REQUEST
      });
    }
    exports.request = request;
    function respond(sessionToken) {
      return helper_1.actionWrapper({
        payload: sessionToken,
        group: types_1.Group.SessionToken,
        type: Action.RESPOND
      });
    }
    exports.respond = respond;
  }
});

// node_modules/@shopify/app-bridge/utilities/session-token/session-token.js
var require_session_token = __commonJS({
  "node_modules/@shopify/app-bridge/utilities/session-token/session-token.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      Object.defineProperty(o, k2, { enumerable: true, get: function() {
        return m[k];
      } });
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? function(o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
    } : function(o, v) {
      o["default"] = v;
    });
    var __importStar = exports && exports.__importStar || function(mod) {
      if (mod && mod.__esModule)
        return mod;
      var result = {};
      if (mod != null) {
        for (var k in mod)
          if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
            __createBinding(result, mod, k);
      }
      __setModuleDefault(result, mod);
      return result;
    };
    var __awaiter = exports && exports.__awaiter || function(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
          resolve(value);
        });
      }
      return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }
        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }
        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    };
    var __generator = exports && exports.__generator || function(thisArg, body) {
      var _ = { label: 0, sent: function() {
        if (t[0] & 1)
          throw t[1];
        return t[1];
      }, trys: [], ops: [] }, f, y, t, g;
      return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
        return this;
      }), g;
      function verb(n) {
        return function(v) {
          return step([n, v]);
        };
      }
      function step(op) {
        if (f)
          throw new TypeError("Generator is already executing.");
        while (_)
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
              return t;
            if (y = 0, t)
              op = [op[0] & 2, t.value];
            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;
              case 4:
                _.label++;
                return { value: op[1], done: false };
              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;
              case 7:
                op = _.ops.pop();
                _.trys.pop();
                continue;
              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }
                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }
                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }
                if (t && _.label < t[2]) {
                  _.label = t[2];
                  _.ops.push(op);
                  break;
                }
                if (t[2])
                  _.ops.pop();
                _.trys.pop();
                continue;
            }
            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        if (op[0] & 5)
          throw op[1];
        return { value: op[0] ? op[1] : void 0, done: true };
      }
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.getSessionToken = void 0;
    var Error_1 = require_Error();
    var SessionToken = __importStar(require_SessionToken());
    function getSessionToken(appBridge) {
      return __awaiter(this, void 0, void 0, function() {
        return __generator(this, function(_a) {
          return [2, new Promise(function(resolve, reject) {
            var unsubscribe = appBridge.subscribe(SessionToken.Action.RESPOND, function(_a2) {
              var sessionToken = _a2.sessionToken;
              if (sessionToken) {
                resolve(sessionToken);
              } else {
                reject(Error_1.fromAction("Failed to retrieve a session token", Error_1.Action.FAILED_AUTHENTICATION));
              }
              unsubscribe();
            });
            appBridge.dispatch(SessionToken.request());
          })];
        });
      });
    }
    exports.getSessionToken = getSessionToken;
  }
});

// node_modules/@shopify/app-bridge-core/actions/AuthCode/index.js
var require_AuthCode = __commonJS({
  "node_modules/@shopify/app-bridge-core/actions/AuthCode/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.respond = exports.Action = void 0;
    var helper_1 = require_helper();
    var types_1 = require_types();
    var Action;
    (function(Action2) {
      Action2["REQUEST"] = "APP::AUTH_CODE::REQUEST";
      Action2["RESPOND"] = "APP::AUTH_CODE::RESPOND";
    })(Action = exports.Action || (exports.Action = {}));
    function respond(payload) {
      return helper_1.actionWrapper({
        payload,
        group: types_1.Group.AuthCode,
        type: Action.RESPOND
      });
    }
    exports.respond = respond;
  }
});

// node_modules/@shopify/app-bridge/package.json
var require_package = __commonJS({
  "node_modules/@shopify/app-bridge/package.json"(exports, module) {
    module.exports = {
      name: "@shopify/app-bridge",
      version: "3.7.10",
      types: "index.d.ts",
      main: "index.js",
      unpkg: "umd/index.js",
      jsdelivr: "umd/index.js",
      files: [
        "/actions/",
        "/client/",
        "/umd/",
        "/utilities/",
        "/util/",
        "/validate/",
        "/development.d.ts",
        "/development.js",
        "/index.d.ts",
        "/index.js",
        "/MessageTransport.d.ts",
        "/MessageTransport.js",
        "/production.d.ts",
        "/production.js"
      ],
      private: false,
      publishConfig: {
        access: "public",
        "@shopify:registry": "https://registry.npmjs.org"
      },
      repository: "git@github.com:Shopify/app-bridge.git",
      homepage: "https://shopify.dev/docs/api/app-bridge/previous-versions/app-bridge-from-npm/app-setup",
      author: "Shopify Inc.",
      license: "MIT",
      scripts: {
        build: "yarn build:tsc && yarn build:npm && yarn build:umd",
        "build:tsc": "NODE_ENV=production tsc",
        "build:umd": "NODE_ENV=production webpack -p",
        "build:npm": "shx cp -r ./npm/index.js ./index.js",
        check: "tsc",
        clean: "yarn clean:tsc && yarn clean:npm && yarn clean:umd",
        "clean:tsc": "NODE_ENV=production tsc --build --clean",
        "clean:umd": "rm -rf ./umd",
        "clean:npm": "rm -rf ./index.js",
        pack: "yarn pack",
        size: "size-limit"
      },
      sideEffects: false,
      "size-limit": [
        {
          limit: "10.5 KB",
          path: "production.js"
        }
      ],
      dependencies: {
        "@shopify/app-bridge-core": "1.1.1",
        base64url: "^3.0.1",
        "web-vitals": "^3.0.1"
      },
      devDependencies: {
        "@types/node": "^10.12.5",
        shx: "^0.3.3"
      }
    };
  }
});

// node_modules/@shopify/app-bridge/actions/helper.js
var require_helper2 = __commonJS({
  "node_modules/@shopify/app-bridge/actions/helper.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.getPackageName = exports.getVersion = exports.getMergedProps = exports.updateActionFromPayload = exports.isValidOptionalString = exports.isValidOptionalNumber = exports.NonSnakeCaseGroup = exports.getEventNameSpace = exports.forEachInEnum = exports.findMatchInEnum = exports.actionWrapper = void 0;
    var helper_1 = require_helper();
    Object.defineProperty(exports, "actionWrapper", { enumerable: true, get: function() {
      return helper_1.actionWrapper;
    } });
    Object.defineProperty(exports, "findMatchInEnum", { enumerable: true, get: function() {
      return helper_1.findMatchInEnum;
    } });
    Object.defineProperty(exports, "forEachInEnum", { enumerable: true, get: function() {
      return helper_1.forEachInEnum;
    } });
    Object.defineProperty(exports, "getEventNameSpace", { enumerable: true, get: function() {
      return helper_1.getEventNameSpace;
    } });
    Object.defineProperty(exports, "NonSnakeCaseGroup", { enumerable: true, get: function() {
      return helper_1.NonSnakeCaseGroup;
    } });
    Object.defineProperty(exports, "isValidOptionalNumber", { enumerable: true, get: function() {
      return helper_1.isValidOptionalNumber;
    } });
    Object.defineProperty(exports, "isValidOptionalString", { enumerable: true, get: function() {
      return helper_1.isValidOptionalString;
    } });
    Object.defineProperty(exports, "updateActionFromPayload", { enumerable: true, get: function() {
      return helper_1.updateActionFromPayload;
    } });
    Object.defineProperty(exports, "getMergedProps", { enumerable: true, get: function() {
      return helper_1.getMergedProps;
    } });
    var packageJson = require_package();
    function getVersion() {
      return packageJson.version;
    }
    exports.getVersion = getVersion;
    function getPackageName() {
      return packageJson.name;
    }
    exports.getPackageName = getPackageName;
  }
});

// node_modules/@shopify/app-bridge/actions/types.js
var require_types3 = __commonJS({
  "node_modules/@shopify/app-bridge/actions/types.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ComponentType = exports.Group = void 0;
    var types_1 = require_types();
    Object.defineProperty(exports, "Group", { enumerable: true, get: function() {
      return types_1.Group;
    } });
    Object.defineProperty(exports, "ComponentType", { enumerable: true, get: function() {
      return types_1.ComponentType;
    } });
  }
});

// node_modules/@shopify/app-bridge/actions/AuthCode/index.js
var require_AuthCode2 = __commonJS({
  "node_modules/@shopify/app-bridge/actions/AuthCode/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.request = exports.Action = exports.respond = void 0;
    var AuthCode_1 = require_AuthCode();
    Object.defineProperty(exports, "Action", { enumerable: true, get: function() {
      return AuthCode_1.Action;
    } });
    var helper_1 = require_helper2();
    var types_1 = require_types3();
    var AuthCode_2 = require_AuthCode();
    Object.defineProperty(exports, "respond", { enumerable: true, get: function() {
      return AuthCode_2.respond;
    } });
    function request(id) {
      return helper_1.actionWrapper({
        group: types_1.Group.AuthCode,
        type: AuthCode_1.Action.REQUEST,
        payload: { id }
      });
    }
    exports.request = request;
  }
});

// node_modules/@shopify/app-bridge/actions/Button/index.js
var require_Button2 = __commonJS({
  "node_modules/@shopify/app-bridge/actions/Button/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.create = exports.isValidButtonProps = exports.Button = exports.update = exports.Style = exports.Icon = exports.clickButton = exports.Action = void 0;
    var Button_1 = require_Button();
    Object.defineProperty(exports, "Button", { enumerable: true, get: function() {
      return Button_1.Button;
    } });
    var Button_2 = require_Button();
    Object.defineProperty(exports, "Action", { enumerable: true, get: function() {
      return Button_2.Action;
    } });
    Object.defineProperty(exports, "clickButton", { enumerable: true, get: function() {
      return Button_2.clickButton;
    } });
    Object.defineProperty(exports, "Icon", { enumerable: true, get: function() {
      return Button_2.Icon;
    } });
    Object.defineProperty(exports, "Style", { enumerable: true, get: function() {
      return Button_2.Style;
    } });
    Object.defineProperty(exports, "update", { enumerable: true, get: function() {
      return Button_2.update;
    } });
    function isValidButtonProps(button) {
      return typeof button.id === "string" && typeof button.label === "string";
    }
    exports.isValidButtonProps = isValidButtonProps;
    function create(app, options) {
      return new Button_1.Button(app, options);
    }
    exports.create = create;
  }
});

// node_modules/@shopify/app-bridge-core/actions/ButtonGroup/index.js
var require_ButtonGroup = __commonJS({
  "node_modules/@shopify/app-bridge-core/actions/ButtonGroup/index.js"(exports) {
    "use strict";
    var __extends = exports && exports.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
          d2.__proto__ = b2;
        } || function(d2, b2) {
          for (var p in b2)
            if (Object.prototype.hasOwnProperty.call(b2, p))
              d2[p] = b2[p];
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        if (typeof b !== "function" && b !== null)
          throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __assign = exports && exports.__assign || function() {
      __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p))
              t[p] = s[p];
        }
        return t;
      };
      return __assign.apply(this, arguments);
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.create = exports.ButtonGroup = exports.isGroupedButtonPayload = exports.isGroupedButton = exports.update = exports.Action = void 0;
    var buttonHelper_1 = require_buttonHelper();
    var helper_1 = require_helper();
    var ActionSet_1 = require_ActionSet();
    var types_1 = require_types();
    var Action;
    (function(Action2) {
      Action2["UPDATE"] = "UPDATE";
    })(Action = exports.Action || (exports.Action = {}));
    function update(group, component, props) {
      return buttonActionWrapper(group, component, Action.UPDATE, props);
    }
    exports.update = update;
    function isGroupedButton(options) {
      var castOptions = options;
      return castOptions.buttons && castOptions.buttons.length > 0 && castOptions.label !== void 0;
    }
    exports.isGroupedButton = isGroupedButton;
    function isGroupedButtonPayload(payload) {
      var castOptions = payload;
      return Array.isArray(castOptions.buttons) && typeof castOptions.id === "string" && typeof castOptions.label === "string";
    }
    exports.isGroupedButtonPayload = isGroupedButtonPayload;
    var ButtonGroup = (
      /** @class */
      function(_super) {
        __extends(ButtonGroup2, _super);
        function ButtonGroup2(app, options) {
          var _this = _super.call(this, app, types_1.ComponentType.ButtonGroup, types_1.Group.ButtonGroup) || this;
          _this.disabled = false;
          _this.plain = false;
          _this.buttonsOptions = [];
          _this.buttons = [];
          _this.set(options, false);
          return _this;
        }
        Object.defineProperty(ButtonGroup2.prototype, "options", {
          get: function() {
            return {
              buttons: this.buttonsOptions,
              disabled: this.disabled,
              label: this.label,
              plain: this.plain
            };
          },
          enumerable: false,
          configurable: true
        });
        Object.defineProperty(ButtonGroup2.prototype, "payload", {
          get: function() {
            return __assign(__assign({}, this.options), { buttons: this.buttons, id: this.id });
          },
          enumerable: false,
          configurable: true
        });
        ButtonGroup2.prototype.set = function(options, shouldUpdate) {
          if (shouldUpdate === void 0) {
            shouldUpdate = true;
          }
          var mergedOptions = helper_1.getMergedProps(this.options, options);
          var label = mergedOptions.label, disabled = mergedOptions.disabled, buttons = mergedOptions.buttons, plain = mergedOptions.plain;
          this.label = label;
          this.disabled = Boolean(disabled);
          this.buttons = this.getButtons(buttons);
          this.plain = Boolean(plain);
          if (shouldUpdate) {
            this.dispatch(Action.UPDATE);
          }
          return this;
        };
        ButtonGroup2.prototype.dispatch = function(action) {
          switch (action) {
            case Action.UPDATE: {
              var updateAction = update(this.group, this.component, this.payload);
              this.app.dispatch(updateAction);
              break;
            }
          }
          return this;
        };
        ButtonGroup2.prototype.updateButtons = function(newPayload) {
          if (!this.buttons || this.buttons.length === 0) {
            return;
          }
          var updated;
          for (var _i = 0, _a = this.buttons; _i < _a.length; _i++) {
            var action = _a[_i];
            updated = helper_1.updateActionFromPayload(action, newPayload);
            if (updated) {
              break;
            }
          }
          if (updated) {
            this.dispatch(Action.UPDATE);
          }
        };
        ButtonGroup2.prototype.getSingleButton = function(button) {
          return buttonHelper_1.getSingleButton(this, button, this.subgroups, this.updateButtons);
        };
        ButtonGroup2.prototype.getButtons = function(buttonOptions) {
          var _this = this;
          var buttons = [];
          if (!buttonOptions) {
            return [];
          }
          buttonOptions.forEach(function(button) {
            var singleButton = buttonHelper_1.getSingleButton(_this, button, _this.subgroups, _this.updateButtons);
            buttons.push(singleButton);
          });
          this.buttonsOptions = buttonOptions;
          return buttons;
        };
        return ButtonGroup2;
      }(ActionSet_1.ActionSetWithChildren)
    );
    exports.ButtonGroup = ButtonGroup;
    function create(app, options) {
      return new ButtonGroup(app, options);
    }
    exports.create = create;
    function buttonActionWrapper(group, component, eventName, props, payload) {
      var id = component.id;
      var label = props.label;
      var action = helper_1.getEventNameSpace(group, eventName, component);
      var buttonPayload = __assign(__assign({}, props), { id, label, payload });
      return helper_1.actionWrapper({ type: action, group, payload: buttonPayload });
    }
  }
});

// node_modules/@shopify/app-bridge/actions/ButtonGroup/index.js
var require_ButtonGroup2 = __commonJS({
  "node_modules/@shopify/app-bridge/actions/ButtonGroup/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.create = exports.ButtonGroup = exports.isGroupedButtonPayload = exports.isGroupedButton = exports.update = exports.Action = void 0;
    var ButtonGroup_1 = require_ButtonGroup();
    Object.defineProperty(exports, "ButtonGroup", { enumerable: true, get: function() {
      return ButtonGroup_1.ButtonGroup;
    } });
    var ButtonGroup_2 = require_ButtonGroup();
    Object.defineProperty(exports, "Action", { enumerable: true, get: function() {
      return ButtonGroup_2.Action;
    } });
    Object.defineProperty(exports, "update", { enumerable: true, get: function() {
      return ButtonGroup_2.update;
    } });
    Object.defineProperty(exports, "isGroupedButton", { enumerable: true, get: function() {
      return ButtonGroup_2.isGroupedButton;
    } });
    Object.defineProperty(exports, "isGroupedButtonPayload", { enumerable: true, get: function() {
      return ButtonGroup_2.isGroupedButtonPayload;
    } });
    function create(app, options) {
      return new ButtonGroup_1.ButtonGroup(app, options);
    }
    exports.create = create;
  }
});

// node_modules/@shopify/app-bridge-core/actions/Cart/index.js
var require_Cart = __commonJS({
  "node_modules/@shopify/app-bridge-core/actions/Cart/index.js"(exports) {
    "use strict";
    var __extends = exports && exports.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
          d2.__proto__ = b2;
        } || function(d2, b2) {
          for (var p in b2)
            if (Object.prototype.hasOwnProperty.call(b2, p))
              d2[p] = b2[p];
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        if (typeof b !== "function" && b !== null)
          throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __assign = exports && exports.__assign || function() {
      __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p))
              t[p] = s[p];
        }
        return t;
      };
      return __assign.apply(this, arguments);
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Cart = exports.setLineItemProperties = exports.removeLineItemDiscount = exports.setLineItemDiscount = exports.removeLineItem = exports.updateLineItem = exports.addLineItem = exports.removeProperties = exports.setProperties = exports.setDiscount = exports.updateCustomerAddress = exports.addCustomerAddress = exports.setCustomer = exports.update = exports.fetch = exports.Action = void 0;
    var helper_1 = require_helper();
    var ActionSet_1 = require_ActionSet();
    var types_1 = require_types();
    var Action;
    (function(Action2) {
      Action2["FETCH"] = "APP::CART::FETCH";
      Action2["UPDATE"] = "APP::CART::UPDATE";
      Action2["SET_CUSTOMER"] = "APP::CART::SET_CUSTOMER";
      Action2["REMOVE_CUSTOMER"] = "APP::CART::REMOVE_CUSTOMER";
      Action2["ADD_CUSTOMER_ADDRESS"] = "APP::CART::ADD_CUSTOMER_ADDRESS";
      Action2["UPDATE_CUSTOMER_ADDRESS"] = "APP::CART::UPDATE_CUSTOMER_ADDRESS";
      Action2["SET_DISCOUNT"] = "APP::CART::SET_DISCOUNT";
      Action2["REMOVE_DISCOUNT"] = "APP::CART::REMOVE_DISCOUNT";
      Action2["SET_PROPERTIES"] = "APP::CART::SET_PROPERTIES";
      Action2["REMOVE_PROPERTIES"] = "APP::CART::REMOVE_PROPERTIES";
      Action2["CLEAR"] = "APP::CART::CLEAR";
      Action2["ADD_LINE_ITEM"] = "APP::CART::ADD_LINE_ITEM";
      Action2["UPDATE_LINE_ITEM"] = "APP::CART::UPDATE_LINE_ITEM";
      Action2["REMOVE_LINE_ITEM"] = "APP::CART::REMOVE_LINE_ITEM";
      Action2["SET_LINE_ITEM_DISCOUNT"] = "APP::CART::SET_LINE_ITEM_DISCOUNT";
      Action2["REMOVE_LINE_ITEM_DISCOUNT"] = "APP::CART::REMOVE_LINE_ITEM_DISCOUNT";
      Action2["SET_LINE_ITEM_PROPERTIES"] = "APP::CART::SET_LINE_ITEM_PROPERTIES";
      Action2["REMOVE_LINE_ITEM_PROPERTIES"] = "APP::CART::REMOVE_LINE_ITEM_PROPERTIES";
    })(Action = exports.Action || (exports.Action = {}));
    function createCartAction(type, payload) {
      if (payload === void 0) {
        payload = {};
      }
      return helper_1.actionWrapper({
        group: types_1.Group.Cart,
        type,
        payload
      });
    }
    function fetch2() {
      return createCartAction(Action.FETCH);
    }
    exports.fetch = fetch2;
    function update(payload) {
      return createCartAction(Action.UPDATE, payload);
    }
    exports.update = update;
    function setCustomer(payload) {
      return createCartAction(Action.SET_CUSTOMER, payload);
    }
    exports.setCustomer = setCustomer;
    function addCustomerAddress(payload) {
      return createCartAction(Action.ADD_CUSTOMER_ADDRESS, payload);
    }
    exports.addCustomerAddress = addCustomerAddress;
    function updateCustomerAddress(payload) {
      return createCartAction(Action.UPDATE_CUSTOMER_ADDRESS, payload);
    }
    exports.updateCustomerAddress = updateCustomerAddress;
    function setDiscount(payload) {
      return createCartAction(Action.SET_DISCOUNT, payload);
    }
    exports.setDiscount = setDiscount;
    function setProperties(payload) {
      return createCartAction(Action.SET_PROPERTIES, payload);
    }
    exports.setProperties = setProperties;
    function removeProperties(payload) {
      return createCartAction(Action.REMOVE_PROPERTIES, payload);
    }
    exports.removeProperties = removeProperties;
    function addLineItem(payload) {
      return createCartAction(Action.ADD_LINE_ITEM, payload);
    }
    exports.addLineItem = addLineItem;
    function updateLineItem(payload) {
      return createCartAction(Action.UPDATE_LINE_ITEM, payload);
    }
    exports.updateLineItem = updateLineItem;
    function removeLineItem(payload) {
      return createCartAction(Action.REMOVE_LINE_ITEM, payload);
    }
    exports.removeLineItem = removeLineItem;
    function setLineItemDiscount(payload) {
      return createCartAction(Action.SET_LINE_ITEM_DISCOUNT, payload);
    }
    exports.setLineItemDiscount = setLineItemDiscount;
    function removeLineItemDiscount(payload) {
      return createCartAction(Action.REMOVE_LINE_ITEM_DISCOUNT, payload);
    }
    exports.removeLineItemDiscount = removeLineItemDiscount;
    function setLineItemProperties(payload) {
      return createCartAction(Action.SET_LINE_ITEM_PROPERTIES, payload);
    }
    exports.setLineItemProperties = setLineItemProperties;
    var Cart = (
      /** @class */
      function(_super) {
        __extends(Cart2, _super);
        function Cart2(app, options) {
          return _super.call(this, app, types_1.Group.Cart, types_1.Group.Cart, options ? options.id : void 0) || this;
        }
        Cart2.prototype.dispatch = function(action, payload) {
          switch (action) {
            case Action.FETCH:
              this.dispatchCartAction(Action.FETCH);
              break;
            case Action.UPDATE:
              this.dispatchCartAction(Action.UPDATE, payload);
              break;
            case Action.SET_CUSTOMER:
              this.dispatchCartAction(Action.SET_CUSTOMER, payload);
              break;
            case Action.REMOVE_CUSTOMER:
              this.dispatchCartAction(Action.REMOVE_CUSTOMER, payload);
              break;
            case Action.ADD_CUSTOMER_ADDRESS:
              this.dispatchCartAction(Action.ADD_CUSTOMER_ADDRESS, payload);
              break;
            case Action.UPDATE_CUSTOMER_ADDRESS:
              this.dispatchCartAction(Action.UPDATE_CUSTOMER_ADDRESS, payload);
              break;
            case Action.SET_DISCOUNT:
              this.dispatchCartAction(Action.SET_DISCOUNT, payload);
              break;
            case Action.REMOVE_DISCOUNT:
              this.dispatchCartAction(Action.REMOVE_DISCOUNT, payload);
              break;
            case Action.SET_PROPERTIES:
              this.dispatchCartAction(Action.SET_PROPERTIES, payload);
              break;
            case Action.REMOVE_PROPERTIES:
              this.dispatchCartAction(Action.REMOVE_PROPERTIES, payload);
              break;
            case Action.CLEAR:
              this.dispatchCartAction(Action.CLEAR, payload);
              break;
            case Action.ADD_LINE_ITEM:
              this.dispatchCartAction(Action.ADD_LINE_ITEM, payload);
              break;
            case Action.UPDATE_LINE_ITEM:
              this.dispatchCartAction(Action.UPDATE_LINE_ITEM, payload);
              break;
            case Action.REMOVE_LINE_ITEM:
              this.dispatchCartAction(Action.REMOVE_LINE_ITEM, payload);
              break;
            case Action.SET_LINE_ITEM_DISCOUNT:
              this.dispatchCartAction(Action.SET_LINE_ITEM_DISCOUNT, payload);
              break;
            case Action.REMOVE_LINE_ITEM_DISCOUNT:
              this.dispatchCartAction(Action.REMOVE_LINE_ITEM_DISCOUNT, payload);
              break;
            case Action.SET_LINE_ITEM_PROPERTIES:
              this.dispatchCartAction(Action.SET_LINE_ITEM_PROPERTIES, payload);
              break;
            case Action.REMOVE_LINE_ITEM_PROPERTIES:
              this.dispatchCartAction(Action.REMOVE_LINE_ITEM_PROPERTIES, payload);
              break;
          }
          return this;
        };
        Cart2.prototype.dispatchCartAction = function(type, payload) {
          this.app.dispatch(createCartAction(type, __assign(__assign({}, payload), { id: this.id })));
        };
        return Cart2;
      }(ActionSet_1.ActionSet)
    );
    exports.Cart = Cart;
  }
});

// node_modules/@shopify/app-bridge/actions/Cart/index.js
var require_Cart2 = __commonJS({
  "node_modules/@shopify/app-bridge/actions/Cart/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.create = exports.setLineItemProperties = exports.removeLineItemDiscount = exports.setLineItemDiscount = exports.removeLineItem = exports.updateLineItem = exports.addLineItem = exports.removeProperties = exports.setProperties = exports.setDiscount = exports.updateCustomerAddress = exports.addCustomerAddress = exports.setCustomer = exports.update = exports.fetch = exports.Cart = exports.Action = void 0;
    var Cart_1 = require_Cart();
    Object.defineProperty(exports, "Action", { enumerable: true, get: function() {
      return Cart_1.Action;
    } });
    Object.defineProperty(exports, "Cart", { enumerable: true, get: function() {
      return Cart_1.Cart;
    } });
    Object.defineProperty(exports, "fetch", { enumerable: true, get: function() {
      return Cart_1.fetch;
    } });
    Object.defineProperty(exports, "update", { enumerable: true, get: function() {
      return Cart_1.update;
    } });
    Object.defineProperty(exports, "setCustomer", { enumerable: true, get: function() {
      return Cart_1.setCustomer;
    } });
    Object.defineProperty(exports, "addCustomerAddress", { enumerable: true, get: function() {
      return Cart_1.addCustomerAddress;
    } });
    Object.defineProperty(exports, "updateCustomerAddress", { enumerable: true, get: function() {
      return Cart_1.updateCustomerAddress;
    } });
    Object.defineProperty(exports, "setDiscount", { enumerable: true, get: function() {
      return Cart_1.setDiscount;
    } });
    Object.defineProperty(exports, "setProperties", { enumerable: true, get: function() {
      return Cart_1.setProperties;
    } });
    Object.defineProperty(exports, "removeProperties", { enumerable: true, get: function() {
      return Cart_1.removeProperties;
    } });
    Object.defineProperty(exports, "addLineItem", { enumerable: true, get: function() {
      return Cart_1.addLineItem;
    } });
    Object.defineProperty(exports, "updateLineItem", { enumerable: true, get: function() {
      return Cart_1.updateLineItem;
    } });
    Object.defineProperty(exports, "removeLineItem", { enumerable: true, get: function() {
      return Cart_1.removeLineItem;
    } });
    Object.defineProperty(exports, "setLineItemDiscount", { enumerable: true, get: function() {
      return Cart_1.setLineItemDiscount;
    } });
    Object.defineProperty(exports, "removeLineItemDiscount", { enumerable: true, get: function() {
      return Cart_1.removeLineItemDiscount;
    } });
    Object.defineProperty(exports, "setLineItemProperties", { enumerable: true, get: function() {
      return Cart_1.setLineItemProperties;
    } });
    function create(app, options) {
      return new Cart_1.Cart(app, options);
    }
    exports.create = create;
  }
});

// node_modules/@shopify/app-bridge-core/actions/Client/index.js
var require_Client = __commonJS({
  "node_modules/@shopify/app-bridge-core/actions/Client/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Action = void 0;
    var Action;
    (function(Action2) {
      Action2["INITIALIZE"] = "APP::CLIENT::INITIALIZE";
    })(Action = exports.Action || (exports.Action = {}));
  }
});

// node_modules/@shopify/app-bridge/actions/Client/index.js
var require_Client2 = __commonJS({
  "node_modules/@shopify/app-bridge/actions/Client/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.initialize = exports.Action = void 0;
    var Client_1 = require_Client();
    Object.defineProperty(exports, "Action", { enumerable: true, get: function() {
      return Client_1.Action;
    } });
    var types_1 = require_types3();
    var helper_1 = require_helper2();
    function initialize() {
      return helper_1.actionWrapper({
        group: types_1.Group.Client,
        type: Client_1.Action.INITIALIZE
      });
    }
    exports.initialize = initialize;
  }
});

// node_modules/@shopify/app-bridge/actions/Error/index.js
var require_Error2 = __commonJS({
  "node_modules/@shopify/app-bridge/actions/Error/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.networkAction = exports.persistenceAction = exports.unsupportedOperationAction = exports.unexpectedAction = exports.invalidAction = exports.invalidActionType = exports.invalidPayload = exports.Message = exports.fromAction = exports.Action = exports.permissionAction = exports.isErrorEventName = exports.throwError = exports.invalidOriginAction = exports.AppBridgeError = exports.AppActionType = void 0;
    var Error_1 = require_Error();
    Object.defineProperty(exports, "Action", { enumerable: true, get: function() {
      return Error_1.Action;
    } });
    Object.defineProperty(exports, "fromAction", { enumerable: true, get: function() {
      return Error_1.fromAction;
    } });
    var helper_1 = require_helper2();
    var types_1 = require_types3();
    var Error_2 = require_Error();
    Object.defineProperty(exports, "AppActionType", { enumerable: true, get: function() {
      return Error_2.AppActionType;
    } });
    Object.defineProperty(exports, "AppBridgeError", { enumerable: true, get: function() {
      return Error_2.AppBridgeError;
    } });
    Object.defineProperty(exports, "invalidOriginAction", { enumerable: true, get: function() {
      return Error_2.invalidOriginAction;
    } });
    Object.defineProperty(exports, "throwError", { enumerable: true, get: function() {
      return Error_2.throwError;
    } });
    Object.defineProperty(exports, "isErrorEventName", { enumerable: true, get: function() {
      return Error_2.isErrorEventName;
    } });
    Object.defineProperty(exports, "permissionAction", { enumerable: true, get: function() {
      return Error_2.permissionAction;
    } });
    function errorActionWrapperWithId(type, action, message) {
      var castPayload = action.payload;
      return helper_1.actionWrapper({
        type,
        group: types_1.Group.Error,
        payload: {
          action,
          message,
          type,
          id: castPayload && castPayload.id ? castPayload.id : void 0
        }
      });
    }
    var Message;
    (function(Message2) {
      Message2["MISSING_PAYLOAD"] = "Missing payload";
      Message2["INVALID_PAYLOAD_ID"] = "Id in payload is missing or invalid";
    })(Message = exports.Message || (exports.Message = {}));
    function invalidPayload(action, message) {
      return errorActionWrapperWithId(Error_1.Action.INVALID_PAYLOAD, action, message || "The action's payload is missing required properties or has invalid properties");
    }
    exports.invalidPayload = invalidPayload;
    function invalidActionType(action, message) {
      return helper_1.actionWrapper({
        group: types_1.Group.Error,
        payload: {
          action,
          message: message || "The action type is invalid or unsupported",
          type: Error_1.Action.INVALID_ACTION_TYPE
        },
        type: Error_1.Action.INVALID_ACTION_TYPE
      });
    }
    exports.invalidActionType = invalidActionType;
    function invalidAction(action, message) {
      return helper_1.actionWrapper({
        group: types_1.Group.Error,
        payload: {
          action,
          message: message || "The action's has missing/invalid values for `group`, `type` or `version`",
          type: Error_1.Action.INVALID_ACTION
        },
        type: Error_1.Action.INVALID_ACTION
      });
    }
    exports.invalidAction = invalidAction;
    function unexpectedAction(action, message) {
      return helper_1.actionWrapper({
        group: types_1.Group.Error,
        payload: {
          action,
          message: message || "Action cannot be called at this time",
          type: Error_1.Action.UNEXPECTED_ACTION
        },
        type: Error_1.Action.UNEXPECTED_ACTION
      });
    }
    exports.unexpectedAction = unexpectedAction;
    function unsupportedOperationAction(action, message) {
      return errorActionWrapperWithId(Error_1.Action.UNSUPPORTED_OPERATION, action, message || "The action type is unsupported");
    }
    exports.unsupportedOperationAction = unsupportedOperationAction;
    function persistenceAction(action, message) {
      return errorActionWrapperWithId(Error_1.Action.PERSISTENCE, action, message || "Action cannot be persisted on server");
    }
    exports.persistenceAction = persistenceAction;
    function networkAction(action, message) {
      return errorActionWrapperWithId(Error_1.Action.NETWORK, action, message || "Network error");
    }
    exports.networkAction = networkAction;
  }
});

// node_modules/@shopify/app-bridge-core/actions/Toast/index.js
var require_Toast = __commonJS({
  "node_modules/@shopify/app-bridge-core/actions/Toast/index.js"(exports) {
    "use strict";
    var __extends = exports && exports.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
          d2.__proto__ = b2;
        } || function(d2, b2) {
          for (var p in b2)
            if (Object.prototype.hasOwnProperty.call(b2, p))
              d2[p] = b2[p];
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        if (typeof b !== "function" && b !== null)
          throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __assign = exports && exports.__assign || function() {
      __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p))
              t[p] = s[p];
        }
        return t;
      };
      return __assign.apply(this, arguments);
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Toast = exports.primaryAction = exports.clear = exports.show = exports.Action = void 0;
    var helper_1 = require_helper();
    var ActionSet_1 = require_ActionSet();
    var types_1 = require_types();
    var Action;
    (function(Action2) {
      Action2["SHOW"] = "APP::TOAST::SHOW";
      Action2["CLEAR"] = "APP::TOAST::CLEAR";
      Action2["ACTION"] = "APP::TOAST::ACTION";
    })(Action = exports.Action || (exports.Action = {}));
    function show(toastMessage) {
      return helper_1.actionWrapper({
        group: types_1.Group.Toast,
        payload: toastMessage,
        type: Action.SHOW
      });
    }
    exports.show = show;
    function clear(payload) {
      return helper_1.actionWrapper({
        payload,
        group: types_1.Group.Toast,
        type: Action.CLEAR
      });
    }
    exports.clear = clear;
    function primaryAction(payload) {
      return helper_1.actionWrapper({
        payload,
        group: types_1.Group.Toast,
        type: Action.ACTION
      });
    }
    exports.primaryAction = primaryAction;
    var Toast = (
      /** @class */
      function(_super) {
        __extends(Toast2, _super);
        function Toast2(app, options) {
          var _this = _super.call(this, app, types_1.Group.Toast, types_1.Group.Toast) || this;
          _this.message = "";
          _this.duration = 5e3;
          _this.set(options);
          return _this;
        }
        Object.defineProperty(Toast2.prototype, "options", {
          get: function() {
            var _a;
            return {
              duration: this.duration,
              isError: this.isError,
              message: this.message,
              action: ((_a = this.action) === null || _a === void 0 ? void 0 : _a.content) ? {
                content: this.action.content
              } : void 0
            };
          },
          enumerable: false,
          configurable: true
        });
        Object.defineProperty(Toast2.prototype, "payload", {
          get: function() {
            return __assign({ id: this.id }, this.options);
          },
          enumerable: false,
          configurable: true
        });
        Toast2.prototype.set = function(options) {
          var mergedOptions = helper_1.getMergedProps(this.options, options);
          var message = mergedOptions.message, duration = mergedOptions.duration, isError = mergedOptions.isError, action = mergedOptions.action;
          this.message = message;
          this.duration = duration;
          this.isError = isError;
          this.action = (action === null || action === void 0 ? void 0 : action.content) ? {
            content: action.content || ""
          } : void 0;
          return this;
        };
        Toast2.prototype.dispatch = function(action) {
          switch (action) {
            case Action.SHOW: {
              var openAction = show(this.payload);
              this.app.dispatch(openAction);
              break;
            }
            case Action.CLEAR:
              this.app.dispatch(clear({ id: this.id }));
              break;
            case Action.ACTION:
              this.app.dispatch(primaryAction({ id: this.id }));
              break;
          }
          return this;
        };
        return Toast2;
      }(ActionSet_1.ActionSet)
    );
    exports.Toast = Toast;
  }
});

// node_modules/@shopify/app-bridge/actions/Flash/actions.js
var require_actions = __commonJS({
  "node_modules/@shopify/app-bridge/actions/Flash/actions.js"(exports) {
    "use strict";
    var __extends = exports && exports.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
          d2.__proto__ = b2;
        } || function(d2, b2) {
          for (var p in b2)
            if (Object.prototype.hasOwnProperty.call(b2, p))
              d2[p] = b2[p];
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        if (typeof b !== "function" && b !== null)
          throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.create = exports.Flash = exports.show = exports.clear = void 0;
    var Toast_1 = require_Toast();
    Object.defineProperty(exports, "clear", { enumerable: true, get: function() {
      return Toast_1.clear;
    } });
    Object.defineProperty(exports, "show", { enumerable: true, get: function() {
      return Toast_1.show;
    } });
    var Flash = (
      /** @class */
      function(_super) {
        __extends(Flash2, _super);
        function Flash2() {
          return _super !== null && _super.apply(this, arguments) || this;
        }
        return Flash2;
      }(Toast_1.Toast)
    );
    exports.Flash = Flash;
    function create(app, options) {
      return new Flash(app, options);
    }
    exports.create = create;
  }
});

// node_modules/@shopify/app-bridge/actions/Flash/index.js
var require_Flash = __commonJS({
  "node_modules/@shopify/app-bridge/actions/Flash/index.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      Object.defineProperty(o, k2, { enumerable: true, get: function() {
        return m[k];
      } });
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __exportStar = exports && exports.__exportStar || function(m, exports2) {
      for (var p in m)
        if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p))
          __createBinding(exports2, m, p);
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    __exportStar(require_actions(), exports);
  }
});

// node_modules/@shopify/app-bridge-core/actions/Features/types.js
var require_types4 = __commonJS({
  "node_modules/@shopify/app-bridge-core/actions/Features/types.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Action = void 0;
    var Action;
    (function(Action2) {
      Action2["UPDATE"] = "APP::FEATURES::UPDATE";
      Action2["REQUEST"] = "APP::FEATURES::REQUEST";
      Action2["REQUEST_UPDATE"] = "APP::FEATURES::REQUEST::UPDATE";
    })(Action = exports.Action || (exports.Action = {}));
  }
});

// node_modules/@shopify/app-bridge-core/actions/Features/actions.js
var require_actions2 = __commonJS({
  "node_modules/@shopify/app-bridge-core/actions/Features/actions.js"(exports) {
    "use strict";
    var __extends = exports && exports.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
          d2.__proto__ = b2;
        } || function(d2, b2) {
          for (var p in b2)
            if (Object.prototype.hasOwnProperty.call(b2, p))
              d2[p] = b2[p];
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        if (typeof b !== "function" && b !== null)
          throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __assign = exports && exports.__assign || function() {
      __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p))
              t[p] = s[p];
        }
        return t;
      };
      return __assign.apply(this, arguments);
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Features = void 0;
    var helper_1 = require_helper();
    var ActionSet_1 = require_ActionSet();
    var types_1 = require_types();
    var types_2 = require_types4();
    var Features = (
      /** @class */
      function(_super) {
        __extends(Features2, _super);
        function Features2(app, options) {
          return _super.call(this, app, types_1.Group.Features, types_1.Group.Features, options ? options.id : void 0) || this;
        }
        Features2.prototype.dispatch = function(action, payload) {
          switch (action) {
            case types_2.Action.REQUEST:
              this.dispatchFeaturesAction(types_2.Action.REQUEST, payload);
              break;
          }
          return this;
        };
        Features2.prototype.dispatchFeaturesAction = function(type, payload) {
          this.app.dispatch(helper_1.actionWrapper({
            group: types_1.Group.Features,
            type,
            payload: __assign(__assign({}, payload || {}), { id: this.id })
          }));
        };
        return Features2;
      }(ActionSet_1.ActionSet)
    );
    exports.Features = Features;
  }
});

// node_modules/@shopify/app-bridge-core/actions/Features/index.js
var require_Features = __commonJS({
  "node_modules/@shopify/app-bridge-core/actions/Features/index.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      Object.defineProperty(o, k2, { enumerable: true, get: function() {
        return m[k];
      } });
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __exportStar = exports && exports.__exportStar || function(m, exports2) {
      for (var p in m)
        if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p))
          __createBinding(exports2, m, p);
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    __exportStar(require_actions2(), exports);
    __exportStar(require_types4(), exports);
  }
});

// node_modules/@shopify/app-bridge/actions/Features/actions.js
var require_actions3 = __commonJS({
  "node_modules/@shopify/app-bridge/actions/Features/actions.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.create = exports.Features = void 0;
    var Features_1 = require_Features();
    Object.defineProperty(exports, "Features", { enumerable: true, get: function() {
      return Features_1.Features;
    } });
    function create(app, options) {
      return new Features_1.Features(app, options);
    }
    exports.create = create;
  }
});

// node_modules/@shopify/app-bridge/actions/Features/types.js
var require_types5 = __commonJS({
  "node_modules/@shopify/app-bridge/actions/Features/types.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Action = void 0;
    var Features_1 = require_Features();
    Object.defineProperty(exports, "Action", { enumerable: true, get: function() {
      return Features_1.Action;
    } });
  }
});

// node_modules/@shopify/app-bridge/actions/Features/index.js
var require_Features2 = __commonJS({
  "node_modules/@shopify/app-bridge/actions/Features/index.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      Object.defineProperty(o, k2, { enumerable: true, get: function() {
        return m[k];
      } });
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __exportStar = exports && exports.__exportStar || function(m, exports2) {
      for (var p in m)
        if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p))
          __createBinding(exports2, m, p);
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    __exportStar(require_actions3(), exports);
    __exportStar(require_types5(), exports);
  }
});

// node_modules/@shopify/app-bridge-core/actions/FeedbackModal/index.js
var require_FeedbackModal = __commonJS({
  "node_modules/@shopify/app-bridge-core/actions/FeedbackModal/index.js"(exports) {
    "use strict";
    var __extends = exports && exports.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
          d2.__proto__ = b2;
        } || function(d2, b2) {
          for (var p in b2)
            if (Object.prototype.hasOwnProperty.call(b2, p))
              d2[p] = b2[p];
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        if (typeof b !== "function" && b !== null)
          throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __assign = exports && exports.__assign || function() {
      __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p))
              t[p] = s[p];
        }
        return t;
      };
      return __assign.apply(this, arguments);
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.create = exports.FeedbackModal = exports.close = exports.open = exports.Action = void 0;
    var helper_1 = require_helper();
    var ActionSet_1 = require_ActionSet();
    var types_1 = require_types();
    var Action;
    (function(Action2) {
      Action2["OPEN"] = "APP::FEEDBACK_MODAL::OPEN";
      Action2["CLOSE"] = "APP::FEEDBACK_MODAL::CLOSE";
    })(Action = exports.Action || (exports.Action = {}));
    function open(payload) {
      return helper_1.actionWrapper({
        group: types_1.Group.FeedbackModal,
        payload,
        type: Action.OPEN
      });
    }
    exports.open = open;
    function close(payload) {
      return helper_1.actionWrapper({
        group: types_1.Group.FeedbackModal,
        payload,
        type: Action.CLOSE
      });
    }
    exports.close = close;
    var FeedbackModal = (
      /** @class */
      function(_super) {
        __extends(FeedbackModal2, _super);
        function FeedbackModal2(app, options) {
          var _this = _super.call(this, app, types_1.Group.FeedbackModal, types_1.Group.FeedbackModal) || this;
          _this.options = options;
          _this.set(options);
          return _this;
        }
        Object.defineProperty(FeedbackModal2.prototype, "payload", {
          /**
           * Returns the action set payload
           */
          get: function() {
            return __assign({ id: this.id }, this.options);
          },
          enumerable: false,
          configurable: true
        });
        FeedbackModal2.prototype.set = function(options) {
          this.options = helper_1.getMergedProps(this.options, options);
          return this;
        };
        FeedbackModal2.prototype.dispatch = function(action) {
          switch (action) {
            case Action.OPEN: {
              var openAction = open(this.payload);
              this.app.dispatch(openAction);
              break;
            }
            case Action.CLOSE: {
              var closeAction = close(this.payload);
              this.app.dispatch(closeAction);
              break;
            }
          }
          return this;
        };
        return FeedbackModal2;
      }(ActionSet_1.ActionSet)
    );
    exports.FeedbackModal = FeedbackModal;
    function create(app, options) {
      return new FeedbackModal(app, options);
    }
    exports.create = create;
  }
});

// node_modules/@shopify/app-bridge/actions/FeedbackModal/index.js
var require_FeedbackModal2 = __commonJS({
  "node_modules/@shopify/app-bridge/actions/FeedbackModal/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.create = exports.FeedbackModal = exports.close = exports.open = exports.Action = void 0;
    var FeedbackModal_1 = require_FeedbackModal();
    Object.defineProperty(exports, "Action", { enumerable: true, get: function() {
      return FeedbackModal_1.Action;
    } });
    Object.defineProperty(exports, "open", { enumerable: true, get: function() {
      return FeedbackModal_1.open;
    } });
    Object.defineProperty(exports, "close", { enumerable: true, get: function() {
      return FeedbackModal_1.close;
    } });
    Object.defineProperty(exports, "FeedbackModal", { enumerable: true, get: function() {
      return FeedbackModal_1.FeedbackModal;
    } });
    Object.defineProperty(exports, "create", { enumerable: true, get: function() {
      return FeedbackModal_1.create;
    } });
  }
});

// node_modules/@shopify/app-bridge-core/actions/Fullscreen/index.js
var require_Fullscreen = __commonJS({
  "node_modules/@shopify/app-bridge-core/actions/Fullscreen/index.js"(exports) {
    "use strict";
    var __extends = exports && exports.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
          d2.__proto__ = b2;
        } || function(d2, b2) {
          for (var p in b2)
            if (Object.prototype.hasOwnProperty.call(b2, p))
              d2[p] = b2[p];
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        if (typeof b !== "function" && b !== null)
          throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Fullscreen = exports.exit = exports.enter = exports.Action = void 0;
    var helper_1 = require_helper();
    var ActionSet_1 = require_ActionSet();
    var types_1 = require_types();
    var Action;
    (function(Action2) {
      Action2["ENTER"] = "APP::FULLSCREEN::ENTER";
      Action2["EXIT"] = "APP::FULLSCREEN::EXIT";
    })(Action = exports.Action || (exports.Action = {}));
    function enter() {
      return helper_1.actionWrapper({
        group: types_1.Group.Fullscreen,
        type: Action.ENTER
      });
    }
    exports.enter = enter;
    function exit() {
      return helper_1.actionWrapper({
        group: types_1.Group.Fullscreen,
        type: Action.EXIT
      });
    }
    exports.exit = exit;
    var Fullscreen = (
      /** @class */
      function(_super) {
        __extends(Fullscreen2, _super);
        function Fullscreen2(app) {
          return _super.call(this, app, types_1.Group.Fullscreen, types_1.Group.Fullscreen) || this;
        }
        Object.defineProperty(Fullscreen2.prototype, "payload", {
          /**
           * Returns the action set payload
           */
          get: function() {
            return { id: this.id };
          },
          enumerable: false,
          configurable: true
        });
        Fullscreen2.prototype.dispatch = function(action) {
          this.app.dispatch(helper_1.actionWrapper({
            group: this.group,
            type: action,
            payload: this.payload
          }));
          return this;
        };
        return Fullscreen2;
      }(ActionSet_1.ActionSet)
    );
    exports.Fullscreen = Fullscreen;
  }
});

// node_modules/@shopify/app-bridge/actions/Fullscreen/index.js
var require_Fullscreen2 = __commonJS({
  "node_modules/@shopify/app-bridge/actions/Fullscreen/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.create = exports.Action = exports.Fullscreen = exports.exit = exports.enter = void 0;
    var Fullscreen_1 = require_Fullscreen();
    Object.defineProperty(exports, "Fullscreen", { enumerable: true, get: function() {
      return Fullscreen_1.Fullscreen;
    } });
    Object.defineProperty(exports, "Action", { enumerable: true, get: function() {
      return Fullscreen_1.Action;
    } });
    var Fullscreen_2 = require_Fullscreen();
    Object.defineProperty(exports, "enter", { enumerable: true, get: function() {
      return Fullscreen_2.enter;
    } });
    Object.defineProperty(exports, "exit", { enumerable: true, get: function() {
      return Fullscreen_2.exit;
    } });
    function create(app) {
      return new Fullscreen_1.Fullscreen(app);
    }
    exports.create = create;
  }
});

// node_modules/@shopify/app-bridge-core/actions/LeaveConfirmation/index.js
var require_LeaveConfirmation = __commonJS({
  "node_modules/@shopify/app-bridge-core/actions/LeaveConfirmation/index.js"(exports) {
    "use strict";
    var __extends = exports && exports.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
          d2.__proto__ = b2;
        } || function(d2, b2) {
          for (var p in b2)
            if (Object.prototype.hasOwnProperty.call(b2, p))
              d2[p] = b2[p];
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        if (typeof b !== "function" && b !== null)
          throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __assign = exports && exports.__assign || function() {
      __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p))
              t[p] = s[p];
        }
        return t;
      };
      return __assign.apply(this, arguments);
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.LeaveConfirmation = exports.confirm = exports.disable = exports.enable = exports.Action = void 0;
    var helper_1 = require_helper();
    var ActionSet_1 = require_ActionSet();
    var types_1 = require_types();
    var Action;
    (function(Action2) {
      Action2["ENABLE"] = "APP::LEAVE_CONFIRMATION::ENABLE";
      Action2["DISABLE"] = "APP::LEAVE_CONFIRMATION::DISABLE";
      Action2["CONFIRM"] = "APP::LEAVE_CONFIRMATION::CONFIRM";
    })(Action = exports.Action || (exports.Action = {}));
    function enable(payload) {
      if (payload === void 0) {
        payload = {};
      }
      return helper_1.actionWrapper({
        group: types_1.Group.LeaveConfirmation,
        payload,
        type: Action.ENABLE
      });
    }
    exports.enable = enable;
    function disable(payload) {
      if (payload === void 0) {
        payload = {};
      }
      return helper_1.actionWrapper({
        group: types_1.Group.LeaveConfirmation,
        payload,
        type: Action.DISABLE
      });
    }
    exports.disable = disable;
    function confirm(payload) {
      if (payload === void 0) {
        payload = {};
      }
      return helper_1.actionWrapper({
        group: types_1.Group.LeaveConfirmation,
        payload,
        type: Action.CONFIRM
      });
    }
    exports.confirm = confirm;
    var LeaveConfirmation = (
      /** @class */
      function(_super) {
        __extends(LeaveConfirmation2, _super);
        function LeaveConfirmation2(app, options) {
          if (options === void 0) {
            options = {};
          }
          var _this = _super.call(this, app, types_1.Group.LeaveConfirmation, types_1.Group.LeaveConfirmation) || this;
          _this.options = options;
          _this.set(options);
          return _this;
        }
        Object.defineProperty(LeaveConfirmation2.prototype, "payload", {
          /**
           * Returns the action set payload
           */
          get: function() {
            return __assign({ id: this.id }, this.options);
          },
          enumerable: false,
          configurable: true
        });
        LeaveConfirmation2.prototype.set = function(options) {
          this.options = helper_1.getMergedProps(this.options, options);
          return this;
        };
        LeaveConfirmation2.prototype.dispatch = function(action) {
          switch (action) {
            case Action.ENABLE: {
              var enableAction = enable(this.payload);
              this.app.dispatch(enableAction);
              break;
            }
            case Action.DISABLE: {
              var disableAction = disable(this.payload);
              this.app.dispatch(disableAction);
              break;
            }
            case Action.CONFIRM: {
              var confirmAction = confirm(this.payload);
              this.app.dispatch(confirmAction);
              break;
            }
          }
          return this;
        };
        return LeaveConfirmation2;
      }(ActionSet_1.ActionSet)
    );
    exports.LeaveConfirmation = LeaveConfirmation;
  }
});

// node_modules/@shopify/app-bridge/actions/LeaveConfirmation/index.js
var require_LeaveConfirmation2 = __commonJS({
  "node_modules/@shopify/app-bridge/actions/LeaveConfirmation/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.create = exports.LeaveConfirmation = exports.confirm = exports.disable = exports.enable = exports.Action = void 0;
    var LeaveConfirmation_1 = require_LeaveConfirmation();
    Object.defineProperty(exports, "LeaveConfirmation", { enumerable: true, get: function() {
      return LeaveConfirmation_1.LeaveConfirmation;
    } });
    var LeaveConfirmation_2 = require_LeaveConfirmation();
    Object.defineProperty(exports, "Action", { enumerable: true, get: function() {
      return LeaveConfirmation_2.Action;
    } });
    Object.defineProperty(exports, "enable", { enumerable: true, get: function() {
      return LeaveConfirmation_2.enable;
    } });
    Object.defineProperty(exports, "disable", { enumerable: true, get: function() {
      return LeaveConfirmation_2.disable;
    } });
    Object.defineProperty(exports, "confirm", { enumerable: true, get: function() {
      return LeaveConfirmation_2.confirm;
    } });
    function create(app, options) {
      if (options === void 0) {
        options = {};
      }
      return new LeaveConfirmation_1.LeaveConfirmation(app, options);
    }
    exports.create = create;
  }
});

// node_modules/@shopify/app-bridge-core/actions/Loading/index.js
var require_Loading = __commonJS({
  "node_modules/@shopify/app-bridge-core/actions/Loading/index.js"(exports) {
    "use strict";
    var __extends = exports && exports.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
          d2.__proto__ = b2;
        } || function(d2, b2) {
          for (var p in b2)
            if (Object.prototype.hasOwnProperty.call(b2, p))
              d2[p] = b2[p];
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        if (typeof b !== "function" && b !== null)
          throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Loading = exports.stop = exports.start = exports.Action = void 0;
    var helper_1 = require_helper();
    var ActionSet_1 = require_ActionSet();
    var types_1 = require_types();
    var Action;
    (function(Action2) {
      Action2["START"] = "APP::LOADING::START";
      Action2["STOP"] = "APP::LOADING::STOP";
    })(Action = exports.Action || (exports.Action = {}));
    function start(payload) {
      return helper_1.actionWrapper({
        payload,
        group: types_1.Group.Loading,
        type: Action.START
      });
    }
    exports.start = start;
    function stop(payload) {
      return helper_1.actionWrapper({
        payload,
        group: types_1.Group.Loading,
        type: Action.STOP
      });
    }
    exports.stop = stop;
    var Loading = (
      /** @class */
      function(_super) {
        __extends(Loading2, _super);
        function Loading2(app) {
          return _super.call(this, app, types_1.Group.Loading, types_1.Group.Loading) || this;
        }
        Object.defineProperty(Loading2.prototype, "payload", {
          get: function() {
            return { id: this.id };
          },
          enumerable: false,
          configurable: true
        });
        Loading2.prototype.dispatch = function(action) {
          switch (action) {
            case Action.START:
              this.app.dispatch(start(this.payload));
              break;
            case Action.STOP:
              this.app.dispatch(stop(this.payload));
              break;
          }
          return this;
        };
        return Loading2;
      }(ActionSet_1.ActionSet)
    );
    exports.Loading = Loading;
  }
});

// node_modules/@shopify/app-bridge/actions/Loading/index.js
var require_Loading2 = __commonJS({
  "node_modules/@shopify/app-bridge/actions/Loading/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.create = exports.stop = exports.start = exports.Action = exports.Loading = void 0;
    var Loading_1 = require_Loading();
    Object.defineProperty(exports, "Loading", { enumerable: true, get: function() {
      return Loading_1.Loading;
    } });
    var Loading_2 = require_Loading();
    Object.defineProperty(exports, "Action", { enumerable: true, get: function() {
      return Loading_2.Action;
    } });
    Object.defineProperty(exports, "start", { enumerable: true, get: function() {
      return Loading_2.start;
    } });
    Object.defineProperty(exports, "stop", { enumerable: true, get: function() {
      return Loading_2.stop;
    } });
    function create(app) {
      return new Loading_1.Loading(app);
    }
    exports.create = create;
  }
});

// node_modules/@shopify/app-bridge-core/actions/Modal/ModalContent/index.js
var require_ModalContent = __commonJS({
  "node_modules/@shopify/app-bridge-core/actions/Modal/ModalContent/index.js"(exports) {
    "use strict";
    var __extends = exports && exports.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
          d2.__proto__ = b2;
        } || function(d2, b2) {
          for (var p in b2)
            if (Object.prototype.hasOwnProperty.call(b2, p))
              d2[p] = b2[p];
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        if (typeof b !== "function" && b !== null)
          throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __assign = exports && exports.__assign || function() {
      __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p))
              t[p] = s[p];
        }
        return t;
      };
      return __assign.apply(this, arguments);
    };
    var __awaiter = exports && exports.__awaiter || function(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
          resolve(value);
        });
      }
      return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }
        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }
        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    };
    var __generator = exports && exports.__generator || function(thisArg, body) {
      var _ = { label: 0, sent: function() {
        if (t[0] & 1)
          throw t[1];
        return t[1];
      }, trys: [], ops: [] }, f, y, t, g;
      return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
        return this;
      }), g;
      function verb(n) {
        return function(v) {
          return step([n, v]);
        };
      }
      function step(op) {
        if (f)
          throw new TypeError("Generator is already executing.");
        while (_)
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
              return t;
            if (y = 0, t)
              op = [op[0] & 2, t.value];
            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;
              case 4:
                _.label++;
                return { value: op[1], done: false };
              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;
              case 7:
                op = _.ops.pop();
                _.trys.pop();
                continue;
              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }
                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }
                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }
                if (t && _.label < t[2]) {
                  _.label = t[2];
                  _.ops.push(op);
                  break;
                }
                if (t[2])
                  _.ops.pop();
                _.trys.pop();
                continue;
            }
            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        if (op[0] & 5)
          throw op[1];
        return { value: op[0] ? op[1] : void 0, done: true };
      }
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ModalContent = exports.Action = void 0;
    var helper_1 = require_helper();
    var ActionSet_1 = require_ActionSet();
    var types_1 = require_types();
    var index_1 = require_Modal();
    var Action;
    (function(Action2) {
      Action2["LOADING"] = "LOADING";
      Action2["LOADED"] = "LOADED";
    })(Action = exports.Action || (exports.Action = {}));
    var ModalContent = (
      /** @class */
      function(_super) {
        __extends(ModalContent2, _super);
        function ModalContent2(app, options) {
          return _super.call(this, app, types_1.Group.Modal, types_1.Group.Modal, options ? options.id : void 0) || this;
        }
        ModalContent2.prototype.loaded = function() {
          this.dispatch(Action.LOADED);
        };
        ModalContent2.prototype.loading = function() {
          this.dispatch(Action.LOADING);
        };
        ModalContent2.prototype.dispatch = function(action) {
          switch (action) {
            case Action.LOADED:
              this.dispatchModalAction(index_1.Action.UPDATE_CONTENT, { loading: false });
              break;
            case Action.LOADING:
              this.dispatchModalAction(index_1.Action.UPDATE_CONTENT, { loading: true });
              break;
          }
          return this;
        };
        ModalContent2.prototype.dispatchModalAction = function(type, payload) {
          return __awaiter(this, void 0, void 0, function() {
            var updateAction;
            return __generator(this, function(_a) {
              updateAction = helper_1.actionWrapper({
                type,
                group: types_1.Group.Modal,
                payload: __assign({}, payload)
              });
              this.app.dispatch(updateAction);
              return [
                2
                /*return*/
              ];
            });
          });
        };
        return ModalContent2;
      }(ActionSet_1.ActionSet)
    );
    exports.ModalContent = ModalContent;
  }
});

// node_modules/@shopify/app-bridge/actions/Modal/ModalContent/index.js
var require_ModalContent2 = __commonJS({
  "node_modules/@shopify/app-bridge/actions/Modal/ModalContent/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.create = exports.ModalContent = exports.Action = void 0;
    var ModalContent_1 = require_ModalContent();
    Object.defineProperty(exports, "ModalContent", { enumerable: true, get: function() {
      return ModalContent_1.ModalContent;
    } });
    var ModalContent_2 = require_ModalContent();
    Object.defineProperty(exports, "Action", { enumerable: true, get: function() {
      return ModalContent_2.Action;
    } });
    function create(app, options) {
      return new ModalContent_1.ModalContent(app, options);
    }
    exports.create = create;
  }
});

// node_modules/@shopify/app-bridge-core/actions/Navigation/History/index.js
var require_History = __commonJS({
  "node_modules/@shopify/app-bridge-core/actions/Navigation/History/index.js"(exports) {
    "use strict";
    var __extends = exports && exports.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
          d2.__proto__ = b2;
        } || function(d2, b2) {
          for (var p in b2)
            if (Object.prototype.hasOwnProperty.call(b2, p))
              d2[p] = b2[p];
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        if (typeof b !== "function" && b !== null)
          throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __assign = exports && exports.__assign || function() {
      __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p))
              t[p] = s[p];
        }
        return t;
      };
      return __assign.apply(this, arguments);
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.History = exports.replace = exports.push = exports.Action = void 0;
    var helper_1 = require_helper();
    var ActionSet_1 = require_ActionSet();
    var types_1 = require_types();
    var Action;
    (function(Action2) {
      Action2["PUSH"] = "APP::NAVIGATION::HISTORY::PUSH";
      Action2["REPLACE"] = "APP::NAVIGATION::HISTORY::REPLACE";
    })(Action = exports.Action || (exports.Action = {}));
    function push(payload) {
      return helper_1.actionWrapper({
        payload,
        group: types_1.Group.Navigation,
        type: Action.PUSH
      });
    }
    exports.push = push;
    function replace(payload) {
      return helper_1.actionWrapper({
        payload,
        group: types_1.Group.Navigation,
        type: Action.REPLACE
      });
    }
    exports.replace = replace;
    var History = (
      /** @class */
      function(_super) {
        __extends(History2, _super);
        function History2(app) {
          return _super.call(this, app, "History", types_1.Group.Navigation) || this;
        }
        Object.defineProperty(History2.prototype, "payload", {
          get: function() {
            return { id: this.id };
          },
          enumerable: false,
          configurable: true
        });
        History2.prototype.dispatch = function(type, path) {
          var payload = __assign(__assign({}, this.payload), { path });
          switch (type) {
            case Action.PUSH:
              this.app.dispatch(push(payload));
              break;
            case Action.REPLACE:
              this.app.dispatch(replace(payload));
              break;
          }
          return this;
        };
        return History2;
      }(ActionSet_1.ActionSet)
    );
    exports.History = History;
  }
});

// node_modules/@shopify/app-bridge/actions/Navigation/History/index.js
var require_History2 = __commonJS({
  "node_modules/@shopify/app-bridge/actions/Navigation/History/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.create = exports.replace = exports.push = exports.Action = exports.History = void 0;
    var History_1 = require_History();
    Object.defineProperty(exports, "History", { enumerable: true, get: function() {
      return History_1.History;
    } });
    var History_2 = require_History();
    Object.defineProperty(exports, "Action", { enumerable: true, get: function() {
      return History_2.Action;
    } });
    Object.defineProperty(exports, "push", { enumerable: true, get: function() {
      return History_2.push;
    } });
    Object.defineProperty(exports, "replace", { enumerable: true, get: function() {
      return History_2.replace;
    } });
    function create(app) {
      return new History_1.History(app);
    }
    exports.create = create;
  }
});

// node_modules/@shopify/app-bridge-core/actions/Navigation/Redirect/index.js
var require_Redirect = __commonJS({
  "node_modules/@shopify/app-bridge-core/actions/Navigation/Redirect/index.js"(exports) {
    "use strict";
    var __extends = exports && exports.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
          d2.__proto__ = b2;
        } || function(d2, b2) {
          for (var p in b2)
            if (Object.prototype.hasOwnProperty.call(b2, p))
              d2[p] = b2[p];
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        if (typeof b !== "function" && b !== null)
          throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __assign = exports && exports.__assign || function() {
      __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p))
              t[p] = s[p];
        }
        return t;
      };
      return __assign.apply(this, arguments);
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Redirect = exports.isProductVariantResourcePayload = exports.isCreateResourcePayload = exports.isAdminSection = exports.isRemotePayload = exports.isAdminSectionPayload = exports.isAdminPathPayload = exports.isAppPayload = exports.getRelativePath = exports.normalizeUrl = exports.getPathWithSearchAndHash = exports.toDestination = exports.toApp = exports.toRemote = exports.toAdminSection = exports.toAdminPath = exports.isResourcePayload = exports.ResourceType = exports.Action = void 0;
    var helper_1 = require_helper();
    var ActionSet_1 = require_ActionSet();
    var types_1 = require_types();
    var Action;
    (function(Action2) {
      Action2["ADMIN_SECTION"] = "APP::NAVIGATION::REDIRECT::ADMIN::SECTION";
      Action2["ADMIN_PATH"] = "APP::NAVIGATION::REDIRECT::ADMIN::PATH";
      Action2["REMOTE"] = "APP::NAVIGATION::REDIRECT::REMOTE";
      Action2["APP"] = "APP::NAVIGATION::REDIRECT::APP";
    })(Action = exports.Action || (exports.Action = {}));
    var ResourceType;
    (function(ResourceType2) {
      ResourceType2["Product"] = "products";
      ResourceType2["Collection"] = "collections";
      ResourceType2["Order"] = "orders";
      ResourceType2["Customer"] = "customers";
      ResourceType2["Discount"] = "discounts";
    })(ResourceType = exports.ResourceType || (exports.ResourceType = {}));
    function isResourcePayload(resource) {
      return typeof resource.id === "string";
    }
    exports.isResourcePayload = isResourcePayload;
    function toAdminPath(payload) {
      return helper_1.actionWrapper({
        payload,
        group: types_1.Group.Navigation,
        type: Action.ADMIN_PATH
      });
    }
    exports.toAdminPath = toAdminPath;
    function toAdminSection(payload) {
      return helper_1.actionWrapper({
        payload,
        group: types_1.Group.Navigation,
        type: Action.ADMIN_SECTION
      });
    }
    exports.toAdminSection = toAdminSection;
    function toRemote(payload) {
      return helper_1.actionWrapper({
        payload,
        group: types_1.Group.Navigation,
        type: Action.REMOTE
      });
    }
    exports.toRemote = toRemote;
    function toApp(payload) {
      return helper_1.actionWrapper({
        payload,
        group: types_1.Group.Navigation,
        type: Action.APP
      });
    }
    exports.toApp = toApp;
    function toDestination(action, payload, id) {
      switch (action) {
        case Action.APP: {
          var appPayload = isAppPayload(payload) ? payload : { path: payload };
          return toApp(__assign({ id }, appPayload));
        }
        case Action.ADMIN_PATH: {
          var adminPathPayload = isAdminPathPayload(payload) ? payload : { path: payload };
          return toAdminPath(__assign({ id }, adminPathPayload));
        }
        case Action.ADMIN_SECTION: {
          var adminSectionPayload = isAdminSectionPayload(payload) ? payload : { section: payload };
          return toAdminSection(__assign({ id }, adminSectionPayload));
        }
        case Action.REMOTE: {
          var remotePayload = isRemotePayload(payload) ? payload : { url: payload };
          return toRemote(__assign({ id }, remotePayload));
        }
      }
    }
    exports.toDestination = toDestination;
    function getPathWithSearchAndHash(_a) {
      var pathname = _a.pathname, search = _a.search, hash = _a.hash;
      return "" + pathname + (search || "") + (hash || "");
    }
    exports.getPathWithSearchAndHash = getPathWithSearchAndHash;
    function normalizeUrl(to) {
      if (to instanceof URL) {
        return to.toString();
      }
      if (typeof to === "string") {
        return to;
      }
      return getRelativePath(to);
    }
    exports.normalizeUrl = normalizeUrl;
    function getRelativePath(to) {
      if (typeof to === "string") {
        if (to.startsWith("/")) {
          return to;
        }
        return getPathWithSearchAndHash(new URL(to));
      }
      var search = to.search instanceof URLSearchParams ? to.search.toString() : to.search;
      return getPathWithSearchAndHash(__assign(__assign({}, to), { search }));
    }
    exports.getRelativePath = getRelativePath;
    function isAppPayload(payload) {
      return typeof payload === "object" && Object.prototype.hasOwnProperty.call(payload, "path");
    }
    exports.isAppPayload = isAppPayload;
    function isAdminPathPayload(payload) {
      return typeof payload === "object" && Object.prototype.hasOwnProperty.call(payload, "path");
    }
    exports.isAdminPathPayload = isAdminPathPayload;
    function isAdminSectionPayload(payload) {
      return typeof payload === "object" && typeof payload.section === "object" && Object.prototype.hasOwnProperty.call(payload.section, "name");
    }
    exports.isAdminSectionPayload = isAdminSectionPayload;
    function isRemotePayload(payload) {
      return typeof payload === "object" && Object.prototype.hasOwnProperty.call(payload, "url");
    }
    exports.isRemotePayload = isRemotePayload;
    function isAdminSection(to) {
      return typeof to === "object" && typeof (to === null || to === void 0 ? void 0 : to.name) === "string";
    }
    exports.isAdminSection = isAdminSection;
    function isCreateResourcePayload(resource) {
      return resource.create === true;
    }
    exports.isCreateResourcePayload = isCreateResourcePayload;
    function isProductVariantResourcePayload(resource) {
      var castResource = resource;
      return castResource.id !== void 0 && castResource.variant !== void 0;
    }
    exports.isProductVariantResourcePayload = isProductVariantResourcePayload;
    var Redirect = (
      /** @class */
      function(_super) {
        __extends(Redirect2, _super);
        function Redirect2(app) {
          return _super.call(this, app, "Redirect", types_1.Group.Navigation) || this;
        }
        Object.defineProperty(Redirect2.prototype, "payload", {
          get: function() {
            return { id: this.id };
          },
          enumerable: false,
          configurable: true
        });
        Redirect2.prototype.dispatch = function(action, payload) {
          var redirectAction = toDestination(action, payload, this.payload.id);
          this.app.dispatch(redirectAction);
          return this;
        };
        return Redirect2;
      }(ActionSet_1.ActionSet)
    );
    exports.Redirect = Redirect;
  }
});

// node_modules/@shopify/app-bridge/actions/Navigation/Redirect/index.js
var require_Redirect2 = __commonJS({
  "node_modules/@shopify/app-bridge/actions/Navigation/Redirect/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.create = exports.isProductVariantCreateResourcePayload = exports.isProductVariantResourcePayload = exports.isCreateResourcePayload = exports.isAdminSection = exports.isRemotePayload = exports.isAdminSectionPayload = exports.isAdminPathPayload = exports.isAppPayload = exports.getRelativePath = exports.normalizeUrl = exports.getPathWithSearchAndHash = exports.toDestination = exports.toApp = exports.toRemote = exports.toAdminSection = exports.toAdminPath = exports.isResourcePayload = exports.ResourceType = exports.Action = exports.Redirect = void 0;
    var Redirect_1 = require_Redirect();
    Object.defineProperty(exports, "Redirect", { enumerable: true, get: function() {
      return Redirect_1.Redirect;
    } });
    Object.defineProperty(exports, "isCreateResourcePayload", { enumerable: true, get: function() {
      return Redirect_1.isCreateResourcePayload;
    } });
    Object.defineProperty(exports, "isProductVariantResourcePayload", { enumerable: true, get: function() {
      return Redirect_1.isProductVariantResourcePayload;
    } });
    var Redirect_2 = require_Redirect();
    Object.defineProperty(exports, "Action", { enumerable: true, get: function() {
      return Redirect_2.Action;
    } });
    Object.defineProperty(exports, "ResourceType", { enumerable: true, get: function() {
      return Redirect_2.ResourceType;
    } });
    Object.defineProperty(exports, "isResourcePayload", { enumerable: true, get: function() {
      return Redirect_2.isResourcePayload;
    } });
    Object.defineProperty(exports, "toAdminPath", { enumerable: true, get: function() {
      return Redirect_2.toAdminPath;
    } });
    Object.defineProperty(exports, "toAdminSection", { enumerable: true, get: function() {
      return Redirect_2.toAdminSection;
    } });
    Object.defineProperty(exports, "toRemote", { enumerable: true, get: function() {
      return Redirect_2.toRemote;
    } });
    Object.defineProperty(exports, "toApp", { enumerable: true, get: function() {
      return Redirect_2.toApp;
    } });
    Object.defineProperty(exports, "toDestination", { enumerable: true, get: function() {
      return Redirect_2.toDestination;
    } });
    Object.defineProperty(exports, "getPathWithSearchAndHash", { enumerable: true, get: function() {
      return Redirect_2.getPathWithSearchAndHash;
    } });
    Object.defineProperty(exports, "normalizeUrl", { enumerable: true, get: function() {
      return Redirect_2.normalizeUrl;
    } });
    Object.defineProperty(exports, "getRelativePath", { enumerable: true, get: function() {
      return Redirect_2.getRelativePath;
    } });
    Object.defineProperty(exports, "isAppPayload", { enumerable: true, get: function() {
      return Redirect_2.isAppPayload;
    } });
    Object.defineProperty(exports, "isAdminPathPayload", { enumerable: true, get: function() {
      return Redirect_2.isAdminPathPayload;
    } });
    Object.defineProperty(exports, "isAdminSectionPayload", { enumerable: true, get: function() {
      return Redirect_2.isAdminSectionPayload;
    } });
    Object.defineProperty(exports, "isRemotePayload", { enumerable: true, get: function() {
      return Redirect_2.isRemotePayload;
    } });
    Object.defineProperty(exports, "isAdminSection", { enumerable: true, get: function() {
      return Redirect_2.isAdminSection;
    } });
    function isProductVariantCreateResourcePayload(resource) {
      if (!Redirect_1.isProductVariantResourcePayload(resource)) {
        return false;
      }
      return Redirect_1.isCreateResourcePayload(resource.variant);
    }
    exports.isProductVariantCreateResourcePayload = isProductVariantCreateResourcePayload;
    function create(app) {
      return new Redirect_1.Redirect(app);
    }
    exports.create = create;
  }
});

// node_modules/@shopify/app-bridge-core/actions/Print/index.js
var require_Print = __commonJS({
  "node_modules/@shopify/app-bridge-core/actions/Print/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.app = exports.Action = void 0;
    var helper_1 = require_helper();
    var types_1 = require_types();
    var Action;
    (function(Action2) {
      Action2["APP"] = "APP::PRINT::APP";
    })(Action = exports.Action || (exports.Action = {}));
    function app() {
      return helper_1.actionWrapper({
        group: types_1.Group.Print,
        type: Action.APP
      });
    }
    exports.app = app;
  }
});

// node_modules/@shopify/app-bridge/actions/Print/index.js
var require_Print2 = __commonJS({
  "node_modules/@shopify/app-bridge/actions/Print/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.app = exports.Action = void 0;
    var Print_1 = require_Print();
    Object.defineProperty(exports, "Action", { enumerable: true, get: function() {
      return Print_1.Action;
    } });
    Object.defineProperty(exports, "app", { enumerable: true, get: function() {
      return Print_1.app;
    } });
  }
});

// node_modules/@shopify/app-bridge-core/actions/ResourcePicker/index.js
var require_ResourcePicker = __commonJS({
  "node_modules/@shopify/app-bridge-core/actions/ResourcePicker/index.js"(exports) {
    "use strict";
    var __extends = exports && exports.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
          d2.__proto__ = b2;
        } || function(d2, b2) {
          for (var p in b2)
            if (Object.prototype.hasOwnProperty.call(b2, p))
              d2[p] = b2[p];
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        if (typeof b !== "function" && b !== null)
          throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __assign = exports && exports.__assign || function() {
      __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p))
              t[p] = s[p];
        }
        return t;
      };
      return __assign.apply(this, arguments);
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ResourcePicker = exports.update = exports.close = exports.cancel = exports.open = exports.select = exports.ActionVerb = exports.ResourceType = exports.ProductStatus = exports.ProductVariantInventoryManagement = exports.ProductVariantInventoryPolicy = exports.WeightUnit = exports.FulfillmentServiceType = exports.CollectionSortOrder = exports.Action = void 0;
    var helper_1 = require_helper();
    var ActionSet_1 = require_ActionSet();
    var types_1 = require_types();
    var Action;
    (function(Action2) {
      Action2["OPEN"] = "APP::RESOURCE_PICKER::OPEN";
      Action2["SELECT"] = "APP::RESOURCE_PICKER::SELECT";
      Action2["CLOSE"] = "APP::RESOURCE_PICKER::CLOSE";
      Action2["UPDATE"] = "APP::RESOURCE_PICKER::UPDATE";
      Action2["CANCEL"] = "APP::RESOURCE_PICKER::CANCEL";
    })(Action = exports.Action || (exports.Action = {}));
    var CollectionSortOrder;
    (function(CollectionSortOrder2) {
      CollectionSortOrder2["Manual"] = "MANUAL";
      CollectionSortOrder2["BestSelling"] = "BEST_SELLING";
      CollectionSortOrder2["AlphaAsc"] = "ALPHA_ASC";
      CollectionSortOrder2["AlphaDesc"] = "ALPHA_DESC";
      CollectionSortOrder2["PriceDesc"] = "PRICE_DESC";
      CollectionSortOrder2["PriceAsc"] = "PRICE_ASC";
      CollectionSortOrder2["CreatedDesc"] = "CREATED_DESC";
      CollectionSortOrder2["Created"] = "CREATED";
      CollectionSortOrder2["MostRelevant"] = "MOST_RELEVANT";
    })(CollectionSortOrder = exports.CollectionSortOrder || (exports.CollectionSortOrder = {}));
    var FulfillmentServiceType;
    (function(FulfillmentServiceType2) {
      FulfillmentServiceType2["GiftCard"] = "GIFT_CARD";
      FulfillmentServiceType2["Manual"] = "MANUAL";
      FulfillmentServiceType2["ThirdParty"] = "THIRD_PARTY";
    })(FulfillmentServiceType = exports.FulfillmentServiceType || (exports.FulfillmentServiceType = {}));
    var WeightUnit;
    (function(WeightUnit2) {
      WeightUnit2["Kilograms"] = "KILOGRAMS";
      WeightUnit2["Grams"] = "GRAMS";
      WeightUnit2["Pounds"] = "POUNDS";
      WeightUnit2["Ounces"] = "OUNCES";
    })(WeightUnit = exports.WeightUnit || (exports.WeightUnit = {}));
    var ProductVariantInventoryPolicy;
    (function(ProductVariantInventoryPolicy2) {
      ProductVariantInventoryPolicy2["Deny"] = "DENY";
      ProductVariantInventoryPolicy2["Continue"] = "CONTINUE";
    })(ProductVariantInventoryPolicy = exports.ProductVariantInventoryPolicy || (exports.ProductVariantInventoryPolicy = {}));
    var ProductVariantInventoryManagement;
    (function(ProductVariantInventoryManagement2) {
      ProductVariantInventoryManagement2["Shopify"] = "SHOPIFY";
      ProductVariantInventoryManagement2["NotManaged"] = "NOT_MANAGED";
      ProductVariantInventoryManagement2["FulfillmentService"] = "FULFILLMENT_SERVICE";
    })(ProductVariantInventoryManagement = exports.ProductVariantInventoryManagement || (exports.ProductVariantInventoryManagement = {}));
    var ProductStatus;
    (function(ProductStatus2) {
      ProductStatus2["Active"] = "ACTIVE";
      ProductStatus2["Archived"] = "ARCHIVED";
      ProductStatus2["Draft"] = "DRAFT";
    })(ProductStatus = exports.ProductStatus || (exports.ProductStatus = {}));
    var ResourceType;
    (function(ResourceType2) {
      ResourceType2["Product"] = "product";
      ResourceType2["ProductVariant"] = "variant";
      ResourceType2["Collection"] = "collection";
    })(ResourceType = exports.ResourceType || (exports.ResourceType = {}));
    var ActionVerb;
    (function(ActionVerb2) {
      ActionVerb2["Add"] = "add";
      ActionVerb2["Select"] = "select";
    })(ActionVerb = exports.ActionVerb || (exports.ActionVerb = {}));
    function select(payload) {
      return helper_1.actionWrapper({
        payload,
        group: types_1.Group.ResourcePicker,
        type: Action.SELECT
      });
    }
    exports.select = select;
    function open(payload) {
      return helper_1.actionWrapper({
        payload,
        group: types_1.Group.ResourcePicker,
        type: Action.OPEN
      });
    }
    exports.open = open;
    function cancel(payload) {
      return helper_1.actionWrapper({
        payload,
        group: types_1.Group.ResourcePicker,
        type: Action.CANCEL
      });
    }
    exports.cancel = cancel;
    function close(payload) {
      return helper_1.actionWrapper({
        payload,
        group: types_1.Group.ResourcePicker,
        type: Action.CANCEL
      });
    }
    exports.close = close;
    function update(payload) {
      return helper_1.actionWrapper({
        payload,
        group: types_1.Group.ResourcePicker,
        type: Action.UPDATE
      });
    }
    exports.update = update;
    var ResourcePicker = (
      /** @class */
      function(_super) {
        __extends(ResourcePicker2, _super);
        function ResourcePicker2(app, options, resourceType) {
          var _this = _super.call(this, app, types_1.Group.ResourcePicker, types_1.Group.ResourcePicker) || this;
          _this.initialSelectionIds = [];
          _this.selection = [];
          _this.resourceType = resourceType;
          _this.set(options, false);
          return _this;
        }
        Object.defineProperty(ResourcePicker2.prototype, "payload", {
          get: function() {
            return __assign(__assign({}, this.options), { id: this.id, resourceType: this.resourceType });
          },
          enumerable: false,
          configurable: true
        });
        Object.defineProperty(ResourcePicker2.prototype, "options", {
          get: function() {
            var options = {
              initialQuery: this.initialQuery,
              filterQuery: this.filterQuery,
              selectMultiple: this.selectMultiple,
              initialSelectionIds: this.initialSelectionIds,
              showHidden: this.showHidden,
              actionVerb: this.actionVerb
            };
            if (this.resourceType === ResourceType.Product) {
              var productOptions = __assign(__assign({}, options), { showVariants: this.showVariants, showDraft: this.showDraft, showArchived: this.showArchived, showDraftBadge: this.showDraftBadge, showArchivedBadge: this.showArchivedBadge });
              return productOptions;
            }
            return options;
          },
          enumerable: false,
          configurable: true
        });
        ResourcePicker2.prototype.set = function(options, shouldUpdate) {
          if (shouldUpdate === void 0) {
            shouldUpdate = true;
          }
          var mergedOptions = helper_1.getMergedProps(this.options, options);
          var initialQuery = mergedOptions.initialQuery, filterQuery = mergedOptions.filterQuery, _a = mergedOptions.initialSelectionIds, initialSelectionIds = _a === void 0 ? [] : _a, _b = mergedOptions.showHidden, showHidden = _b === void 0 ? true : _b, _c3 = mergedOptions.showVariants, showVariants = _c3 === void 0 ? true : _c3, _d = mergedOptions.showDraft, showDraft = _d === void 0 ? true : _d, _e = mergedOptions.showArchived, showArchived = _e === void 0 ? true : _e, _f = mergedOptions.showDraftBadge, showDraftBadge = _f === void 0 ? false : _f, _g = mergedOptions.showArchivedBadge, showArchivedBadge = _g === void 0 ? false : _g, _h = mergedOptions.selectMultiple, selectMultiple = _h === void 0 ? true : _h, _j = mergedOptions.actionVerb, actionVerb = _j === void 0 ? ActionVerb.Add : _j;
          this.initialQuery = initialQuery;
          this.filterQuery = filterQuery;
          this.initialSelectionIds = initialSelectionIds;
          this.showHidden = showHidden;
          this.showVariants = showVariants;
          this.showDraft = showDraft;
          this.showArchived = showArchived;
          this.showDraftBadge = showDraftBadge;
          this.showArchivedBadge = showArchivedBadge;
          this.selectMultiple = selectMultiple;
          this.actionVerb = actionVerb;
          if (shouldUpdate) {
            this.update();
          }
          return this;
        };
        ResourcePicker2.prototype.dispatch = function(action, selection) {
          if (action === Action.OPEN) {
            this.open();
          } else if (action === Action.UPDATE) {
            this.update();
          } else if (action === Action.CLOSE || action === Action.CANCEL) {
            this.cancel();
          } else if (action === Action.SELECT) {
            this.selection = selection;
            this.app.dispatch(select({ id: this.id, selection: this.selection }));
          }
          return this;
        };
        ResourcePicker2.prototype.update = function() {
          this.app.dispatch(update(this.payload));
        };
        ResourcePicker2.prototype.open = function() {
          this.app.dispatch(open(this.payload));
        };
        ResourcePicker2.prototype.cancel = function() {
          this.app.dispatch(cancel({ id: this.id }));
        };
        ResourcePicker2.prototype.close = function() {
          this.cancel();
        };
        return ResourcePicker2;
      }(ActionSet_1.ActionSet)
    );
    exports.ResourcePicker = ResourcePicker;
  }
});

// node_modules/@shopify/app-bridge/actions/ResourcePicker/index.js
var require_ResourcePicker2 = __commonJS({
  "node_modules/@shopify/app-bridge/actions/ResourcePicker/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.create = exports.ResourcePicker = exports.WeightUnit = exports.update = exports.select = exports.ResourceType = exports.ProductVariantInventoryPolicy = exports.ProductVariantInventoryManagement = exports.ProductStatus = exports.open = exports.FulfillmentServiceType = exports.CollectionSortOrder = exports.close = exports.cancel = exports.ActionVerb = exports.Action = void 0;
    var ResourcePicker_1 = require_ResourcePicker();
    Object.defineProperty(exports, "ResourcePicker", { enumerable: true, get: function() {
      return ResourcePicker_1.ResourcePicker;
    } });
    var ResourcePicker_2 = require_ResourcePicker();
    Object.defineProperty(exports, "Action", { enumerable: true, get: function() {
      return ResourcePicker_2.Action;
    } });
    Object.defineProperty(exports, "ActionVerb", { enumerable: true, get: function() {
      return ResourcePicker_2.ActionVerb;
    } });
    Object.defineProperty(exports, "cancel", { enumerable: true, get: function() {
      return ResourcePicker_2.cancel;
    } });
    Object.defineProperty(exports, "close", { enumerable: true, get: function() {
      return ResourcePicker_2.close;
    } });
    Object.defineProperty(exports, "CollectionSortOrder", { enumerable: true, get: function() {
      return ResourcePicker_2.CollectionSortOrder;
    } });
    Object.defineProperty(exports, "FulfillmentServiceType", { enumerable: true, get: function() {
      return ResourcePicker_2.FulfillmentServiceType;
    } });
    Object.defineProperty(exports, "open", { enumerable: true, get: function() {
      return ResourcePicker_2.open;
    } });
    Object.defineProperty(exports, "ProductStatus", { enumerable: true, get: function() {
      return ResourcePicker_2.ProductStatus;
    } });
    Object.defineProperty(exports, "ProductVariantInventoryManagement", { enumerable: true, get: function() {
      return ResourcePicker_2.ProductVariantInventoryManagement;
    } });
    Object.defineProperty(exports, "ProductVariantInventoryPolicy", { enumerable: true, get: function() {
      return ResourcePicker_2.ProductVariantInventoryPolicy;
    } });
    Object.defineProperty(exports, "ResourceType", { enumerable: true, get: function() {
      return ResourcePicker_2.ResourceType;
    } });
    Object.defineProperty(exports, "select", { enumerable: true, get: function() {
      return ResourcePicker_2.select;
    } });
    Object.defineProperty(exports, "update", { enumerable: true, get: function() {
      return ResourcePicker_2.update;
    } });
    Object.defineProperty(exports, "WeightUnit", { enumerable: true, get: function() {
      return ResourcePicker_2.WeightUnit;
    } });
    var create = function(app, baseOptions) {
      var resourceType = baseOptions.resourceType, _a = baseOptions.options, options = _a === void 0 ? {} : _a;
      return new ResourcePicker_1.ResourcePicker(app, options, resourceType);
    };
    exports.create = create;
  }
});

// node_modules/@shopify/app-bridge-core/actions/Scanner/index.js
var require_Scanner = __commonJS({
  "node_modules/@shopify/app-bridge-core/actions/Scanner/index.js"(exports) {
    "use strict";
    var __extends = exports && exports.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
          d2.__proto__ = b2;
        } || function(d2, b2) {
          for (var p in b2)
            if (Object.prototype.hasOwnProperty.call(b2, p))
              d2[p] = b2[p];
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        if (typeof b !== "function" && b !== null)
          throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.capture = exports.openCamera = exports.Scanner = exports.Action = void 0;
    var helper_1 = require_helper();
    var ActionSet_1 = require_ActionSet();
    var types_1 = require_types();
    var Action;
    (function(Action2) {
      Action2["OPEN_CAMERA"] = "APP::SCANNER::OPEN::CAMERA";
      Action2["CAPTURE"] = "APP::SCANNER::CAPTURE";
    })(Action = exports.Action || (exports.Action = {}));
    var Scanner = (
      /** @class */
      function(_super) {
        __extends(Scanner2, _super);
        function Scanner2(app, options) {
          return _super.call(this, app, types_1.Group.Scanner, types_1.Group.Scanner, options ? options.id : void 0) || this;
        }
        Scanner2.prototype.dispatch = function(action) {
          switch (action) {
            case Action.OPEN_CAMERA:
              this.dispatchScannerAction(Action.OPEN_CAMERA);
              break;
          }
          return this;
        };
        Scanner2.prototype.dispatchScannerAction = function(type) {
          this.app.dispatch(helper_1.actionWrapper({
            type,
            group: types_1.Group.Scanner,
            payload: {
              id: this.id
            }
          }));
        };
        return Scanner2;
      }(ActionSet_1.ActionSet)
    );
    exports.Scanner = Scanner;
    function openCamera() {
      return helper_1.actionWrapper({
        group: types_1.Group.Scanner,
        type: Action.OPEN_CAMERA
      });
    }
    exports.openCamera = openCamera;
    function capture(payload) {
      return helper_1.actionWrapper({
        group: types_1.Group.Scanner,
        type: Action.CAPTURE,
        payload
      });
    }
    exports.capture = capture;
  }
});

// node_modules/@shopify/app-bridge/actions/Scanner/index.js
var require_Scanner2 = __commonJS({
  "node_modules/@shopify/app-bridge/actions/Scanner/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.create = exports.capture = exports.openCamera = exports.Scanner = exports.Action = void 0;
    var Scanner_1 = require_Scanner();
    Object.defineProperty(exports, "Action", { enumerable: true, get: function() {
      return Scanner_1.Action;
    } });
    Object.defineProperty(exports, "Scanner", { enumerable: true, get: function() {
      return Scanner_1.Scanner;
    } });
    Object.defineProperty(exports, "openCamera", { enumerable: true, get: function() {
      return Scanner_1.openCamera;
    } });
    Object.defineProperty(exports, "capture", { enumerable: true, get: function() {
      return Scanner_1.capture;
    } });
    function create(app, options) {
      return new Scanner_1.Scanner(app, options);
    }
    exports.create = create;
  }
});

// node_modules/@shopify/app-bridge/actions/SessionToken/index.js
var require_SessionToken2 = __commonJS({
  "node_modules/@shopify/app-bridge/actions/SessionToken/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.respond = exports.request = exports.Action = void 0;
    var SessionToken_1 = require_SessionToken();
    Object.defineProperty(exports, "Action", { enumerable: true, get: function() {
      return SessionToken_1.Action;
    } });
    Object.defineProperty(exports, "request", { enumerable: true, get: function() {
      return SessionToken_1.request;
    } });
    Object.defineProperty(exports, "respond", { enumerable: true, get: function() {
      return SessionToken_1.respond;
    } });
  }
});

// node_modules/@shopify/app-bridge-core/actions/buttonGroupHelper.js
var require_buttonGroupHelper = __commonJS({
  "node_modules/@shopify/app-bridge-core/actions/buttonGroupHelper.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.getGroupedButton = void 0;
    var ButtonGroup_1 = require_ButtonGroup();
    function getGroupedButton(action, button, subgroups, updateCb) {
      action.addChild(button, action.group, subgroups);
      var id = button.id, label = button.label, disabled = button.disabled, buttons = button.buttons, plain = button.plain;
      action.subscribeToChild(button, ButtonGroup_1.Action.UPDATE, updateCb);
      return { id, label, buttons, disabled, plain };
    }
    exports.getGroupedButton = getGroupedButton;
  }
});

// node_modules/@shopify/app-bridge-core/actions/TitleBar/index.js
var require_TitleBar = __commonJS({
  "node_modules/@shopify/app-bridge-core/actions/TitleBar/index.js"(exports) {
    "use strict";
    var __extends = exports && exports.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
          d2.__proto__ = b2;
        } || function(d2, b2) {
          for (var p in b2)
            if (Object.prototype.hasOwnProperty.call(b2, p))
              d2[p] = b2[p];
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        if (typeof b !== "function" && b !== null)
          throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __assign = exports && exports.__assign || function() {
      __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p))
              t[p] = s[p];
        }
        return t;
      };
      return __assign.apply(this, arguments);
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.TitleBar = exports.update = exports.clickBreadcrumb = exports.clickActionButton = exports.Action = void 0;
    var ActionSet_1 = require_ActionSet();
    var Button_1 = require_Button();
    var ButtonGroup_1 = require_ButtonGroup();
    var buttonGroupHelper_1 = require_buttonGroupHelper();
    var buttonHelper_1 = require_buttonHelper();
    var helper_1 = require_helper();
    var types_1 = require_types();
    var Action;
    (function(Action2) {
      Action2["UPDATE"] = "APP::TITLEBAR::UPDATE";
      Action2["BUTTON_CLICK"] = "APP::TITLEBAR::BUTTONS::BUTTON::CLICK";
      Action2["BUTTON_UPDATE"] = "APP::TITLEBAR::BUTTONS::BUTTON::UPDATE";
      Action2["BUTTON_GROUP_UPDATE"] = "APP::TITLEBAR::BUTTONS::BUTTONGROUP::UPDATE";
      Action2["BREADCRUMBS_CLICK"] = "APP::TITLEBAR::BREADCRUMBS::BUTTON::CLICK";
      Action2["BREADCRUMBS_UPDATE"] = "APP::TITLEBAR::BREADCRUMBS::BUTTON::UPDATE";
    })(Action = exports.Action || (exports.Action = {}));
    var TITLEBAR_BUTTON_PROPS = {
      group: types_1.Group.TitleBar,
      subgroups: ["Buttons"]
    };
    var BREADCRUMB_BUTTON_PROPS = {
      group: types_1.Group.TitleBar,
      subgroups: ["Breadcrumbs"],
      type: types_1.ComponentType.Button
    };
    function clickActionButton(id, payload) {
      var type = types_1.ComponentType.Button;
      var component = __assign({ id, type }, TITLEBAR_BUTTON_PROPS);
      return Button_1.clickButton(types_1.Group.TitleBar, component, payload);
    }
    exports.clickActionButton = clickActionButton;
    function clickBreadcrumb(id, payload) {
      var component = __assign({ id }, BREADCRUMB_BUTTON_PROPS);
      return Button_1.clickButton(types_1.Group.TitleBar, component, payload);
    }
    exports.clickBreadcrumb = clickBreadcrumb;
    function update(payload) {
      return helper_1.actionWrapper({
        payload,
        group: types_1.Group.TitleBar,
        type: Action.UPDATE
      });
    }
    exports.update = update;
    var TitleBar = (
      /** @class */
      function(_super) {
        __extends(TitleBar2, _super);
        function TitleBar2(app, options) {
          var _this = _super.call(this, app, types_1.Group.TitleBar, types_1.Group.TitleBar) || this;
          if (!options.title && !options.breadcrumbs && !options.buttons) {
            return _this;
          }
          _this.set(options);
          return _this;
        }
        Object.defineProperty(TitleBar2.prototype, "buttons", {
          get: function() {
            if (!this.primary && !this.secondary) {
              return void 0;
            }
            return {
              primary: this.primary,
              secondary: this.secondary
            };
          },
          enumerable: false,
          configurable: true
        });
        Object.defineProperty(TitleBar2.prototype, "buttonsOptions", {
          get: function() {
            if (!this.primaryOptions && !this.secondaryOptions) {
              return void 0;
            }
            return {
              primary: this.primaryOptions,
              secondary: this.secondaryOptions
            };
          },
          enumerable: false,
          configurable: true
        });
        Object.defineProperty(TitleBar2.prototype, "options", {
          get: function() {
            return {
              breadcrumbs: this.breadcrumbsOption,
              buttons: this.buttonsOptions,
              title: this.title
            };
          },
          enumerable: false,
          configurable: true
        });
        Object.defineProperty(TitleBar2.prototype, "payload", {
          get: function() {
            return __assign(__assign({}, this.options), { breadcrumbs: this.breadcrumb, buttons: this.buttons, id: this.id });
          },
          enumerable: false,
          configurable: true
        });
        TitleBar2.prototype.set = function(options, shouldUpdate) {
          if (shouldUpdate === void 0) {
            shouldUpdate = true;
          }
          var mergedOptions = helper_1.getMergedProps(this.options, options);
          var title = mergedOptions.title, buttons = mergedOptions.buttons, breadcrumbs = mergedOptions.breadcrumbs;
          this.title = title;
          this.setBreadcrumbs(breadcrumbs);
          this.setPrimaryButton(buttons ? buttons.primary : void 0);
          this.setSecondaryButton(buttons ? buttons.secondary : void 0);
          if (shouldUpdate) {
            this.dispatch(Action.UPDATE);
          }
          return this;
        };
        TitleBar2.prototype.dispatch = function(action) {
          switch (action) {
            case Action.UPDATE:
              this.app.dispatch(update(this.payload));
              break;
          }
          return this;
        };
        TitleBar2.prototype.getButton = function(button, subgroups, updateCb) {
          if (button instanceof ButtonGroup_1.ButtonGroup) {
            return buttonGroupHelper_1.getGroupedButton(this, button, subgroups, updateCb);
          }
          return buttonHelper_1.getSingleButton(this, button, subgroups, updateCb);
        };
        TitleBar2.prototype.updatePrimaryButton = function(newPayload) {
          if (!this.primary) {
            return;
          }
          if (helper_1.updateActionFromPayload(this.primary, newPayload)) {
            this.dispatch(Action.UPDATE);
          }
        };
        TitleBar2.prototype.updateSecondaryButtons = function(newPayload) {
          if (!this.secondary) {
            return;
          }
          var buttonToUpdate = this.secondary.find(function(action) {
            return action.id === newPayload.id;
          });
          if (!buttonToUpdate) {
            return;
          }
          var updated = false;
          if (ButtonGroup_1.isGroupedButtonPayload(newPayload)) {
            updated = helper_1.updateActionFromPayload(buttonToUpdate, newPayload);
          } else {
            updated = helper_1.updateActionFromPayload(buttonToUpdate, newPayload);
          }
          if (updated) {
            this.dispatch(Action.UPDATE);
          }
        };
        TitleBar2.prototype.updateBreadcrumbButton = function(newPayload) {
          if (!this.breadcrumb) {
            return;
          }
          if (helper_1.updateActionFromPayload(this.breadcrumb, newPayload)) {
            this.dispatch(Action.UPDATE);
          }
        };
        TitleBar2.prototype.setPrimaryButton = function(newOptions) {
          this.primaryOptions = this.getChildButton(newOptions, this.primaryOptions);
          this.primary = this.primaryOptions ? this.getButton(this.primaryOptions, TITLEBAR_BUTTON_PROPS.subgroups, this.updatePrimaryButton) : void 0;
        };
        TitleBar2.prototype.setSecondaryButton = function(newOptions) {
          var _this = this;
          var newButtons = newOptions || [];
          var currentButtons = this.secondaryOptions || [];
          this.secondaryOptions = this.getUpdatedChildActions(newButtons, currentButtons);
          this.secondary = this.secondaryOptions ? this.secondaryOptions.map(function(action) {
            return _this.getButton(action, TITLEBAR_BUTTON_PROPS.subgroups, _this.updateSecondaryButtons);
          }) : void 0;
        };
        TitleBar2.prototype.setBreadcrumbs = function(breadcrumb) {
          this.breadcrumbsOption = this.getChildButton(breadcrumb, this.breadcrumbsOption);
          this.breadcrumb = this.breadcrumbsOption ? this.getButton(this.breadcrumbsOption, BREADCRUMB_BUTTON_PROPS.subgroups, this.updateBreadcrumbButton) : void 0;
        };
        TitleBar2.prototype.getChildButton = function(newAction, currentAction) {
          var newButtons = newAction ? [newAction] : [];
          var currentButtons = currentAction ? [currentAction] : [];
          var updatedButton = this.getUpdatedChildActions(newButtons, currentButtons);
          return updatedButton ? updatedButton[0] : void 0;
        };
        return TitleBar2;
      }(ActionSet_1.ActionSetWithChildren)
    );
    exports.TitleBar = TitleBar;
  }
});

// node_modules/@shopify/app-bridge/actions/TitleBar/index.js
var require_TitleBar2 = __commonJS({
  "node_modules/@shopify/app-bridge/actions/TitleBar/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.create = exports.TitleBar = exports.update = exports.clickBreadcrumb = exports.clickActionButton = exports.Action = void 0;
    var TitleBar_1 = require_TitleBar();
    Object.defineProperty(exports, "TitleBar", { enumerable: true, get: function() {
      return TitleBar_1.TitleBar;
    } });
    var TitleBar_2 = require_TitleBar();
    Object.defineProperty(exports, "Action", { enumerable: true, get: function() {
      return TitleBar_2.Action;
    } });
    Object.defineProperty(exports, "clickActionButton", { enumerable: true, get: function() {
      return TitleBar_2.clickActionButton;
    } });
    Object.defineProperty(exports, "clickBreadcrumb", { enumerable: true, get: function() {
      return TitleBar_2.clickBreadcrumb;
    } });
    Object.defineProperty(exports, "update", { enumerable: true, get: function() {
      return TitleBar_2.update;
    } });
    function create(app, options) {
      return new TitleBar_1.TitleBar(app, options);
    }
    exports.create = create;
  }
});

// node_modules/@shopify/app-bridge/actions/Toast/index.js
var require_Toast2 = __commonJS({
  "node_modules/@shopify/app-bridge/actions/Toast/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.create = exports.Toast = exports.primaryAction = exports.clear = exports.show = exports.Action = void 0;
    var Toast_1 = require_Toast();
    Object.defineProperty(exports, "Toast", { enumerable: true, get: function() {
      return Toast_1.Toast;
    } });
    var Toast_2 = require_Toast();
    Object.defineProperty(exports, "Action", { enumerable: true, get: function() {
      return Toast_2.Action;
    } });
    Object.defineProperty(exports, "show", { enumerable: true, get: function() {
      return Toast_2.show;
    } });
    Object.defineProperty(exports, "clear", { enumerable: true, get: function() {
      return Toast_2.clear;
    } });
    Object.defineProperty(exports, "primaryAction", { enumerable: true, get: function() {
      return Toast_2.primaryAction;
    } });
    function create(app, options) {
      return new Toast_1.Toast(app, options);
    }
    exports.create = create;
  }
});

// node_modules/@shopify/app-bridge-core/actions/ContextualSaveBar/index.js
var require_ContextualSaveBar = __commonJS({
  "node_modules/@shopify/app-bridge-core/actions/ContextualSaveBar/index.js"(exports) {
    "use strict";
    var __extends = exports && exports.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
          d2.__proto__ = b2;
        } || function(d2, b2) {
          for (var p in b2)
            if (Object.prototype.hasOwnProperty.call(b2, p))
              d2[p] = b2[p];
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        if (typeof b !== "function" && b !== null)
          throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __assign = exports && exports.__assign || function() {
      __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p))
              t[p] = s[p];
        }
        return t;
      };
      return __assign.apply(this, arguments);
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ContextualSaveBar = exports.update = exports.discard = exports.save = exports.hide = exports.show = exports.Action = void 0;
    var helper_1 = require_helper();
    var ActionSet_1 = require_ActionSet();
    var types_1 = require_types();
    var Action;
    (function(Action2) {
      Action2["DISCARD"] = "APP::CONTEXTUAL_SAVE_BAR::DISCARD";
      Action2["SAVE"] = "APP::CONTEXTUAL_SAVE_BAR::SAVE";
      Action2["SHOW"] = "APP::CONTEXTUAL_SAVE_BAR::SHOW";
      Action2["HIDE"] = "APP::CONTEXTUAL_SAVE_BAR::HIDE";
      Action2["UPDATE"] = "APP::CONTEXTUAL_SAVE_BAR::UPDATE";
    })(Action = exports.Action || (exports.Action = {}));
    function createContextBarAction(action, payload) {
      return helper_1.actionWrapper({
        group: types_1.Group.ContextualSaveBar,
        type: action,
        payload
      });
    }
    function show(payload) {
      return createContextBarAction(Action.SHOW, payload);
    }
    exports.show = show;
    function hide(payload) {
      return createContextBarAction(Action.HIDE, payload);
    }
    exports.hide = hide;
    function save(payload) {
      return createContextBarAction(Action.SAVE, payload);
    }
    exports.save = save;
    function discard(payload) {
      return createContextBarAction(Action.DISCARD, payload);
    }
    exports.discard = discard;
    function update(payload) {
      return createContextBarAction(Action.UPDATE, payload);
    }
    exports.update = update;
    var ContextualSaveBar = (
      /** @class */
      function(_super) {
        __extends(ContextualSaveBar2, _super);
        function ContextualSaveBar2(app, options) {
          if (options === void 0) {
            options = {};
          }
          var _this = _super.call(this, app, types_1.Group.ContextualSaveBar, types_1.Group.ContextualSaveBar) || this;
          _this.options = options;
          _this.set(options, false);
          return _this;
        }
        Object.defineProperty(ContextualSaveBar2.prototype, "payload", {
          /**
           * Returns the action set payload
           */
          get: function() {
            return __assign({ id: this.id }, this.options);
          },
          enumerable: false,
          configurable: true
        });
        ContextualSaveBar2.prototype.set = function(options, shouldUpdate) {
          if (shouldUpdate === void 0) {
            shouldUpdate = true;
          }
          var mergedOptions = helper_1.getMergedProps(this.options, options);
          this.options = mergedOptions;
          if (shouldUpdate) {
            this.dispatch(Action.UPDATE);
          }
          return this;
        };
        ContextualSaveBar2.prototype.dispatch = function(action) {
          this.app.dispatch(createContextBarAction(action, this.payload));
          return this;
        };
        return ContextualSaveBar2;
      }(ActionSet_1.ActionSet)
    );
    exports.ContextualSaveBar = ContextualSaveBar;
  }
});

// node_modules/@shopify/app-bridge/actions/ContextualSaveBar/index.js
var require_ContextualSaveBar2 = __commonJS({
  "node_modules/@shopify/app-bridge/actions/ContextualSaveBar/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.create = exports.ContextualSaveBar = exports.update = exports.discard = exports.save = exports.hide = exports.show = exports.Action = void 0;
    var ContextualSaveBar_1 = require_ContextualSaveBar();
    Object.defineProperty(exports, "Action", { enumerable: true, get: function() {
      return ContextualSaveBar_1.Action;
    } });
    Object.defineProperty(exports, "show", { enumerable: true, get: function() {
      return ContextualSaveBar_1.show;
    } });
    Object.defineProperty(exports, "hide", { enumerable: true, get: function() {
      return ContextualSaveBar_1.hide;
    } });
    Object.defineProperty(exports, "save", { enumerable: true, get: function() {
      return ContextualSaveBar_1.save;
    } });
    Object.defineProperty(exports, "discard", { enumerable: true, get: function() {
      return ContextualSaveBar_1.discard;
    } });
    Object.defineProperty(exports, "update", { enumerable: true, get: function() {
      return ContextualSaveBar_1.update;
    } });
    Object.defineProperty(exports, "ContextualSaveBar", { enumerable: true, get: function() {
      return ContextualSaveBar_1.ContextualSaveBar;
    } });
    function create(app, options) {
      return new ContextualSaveBar_1.ContextualSaveBar(app, options);
    }
    exports.create = create;
  }
});

// node_modules/@shopify/app-bridge-core/actions/Share/index.js
var require_Share = __commonJS({
  "node_modules/@shopify/app-bridge-core/actions/Share/index.js"(exports) {
    "use strict";
    var __extends = exports && exports.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
          d2.__proto__ = b2;
        } || function(d2, b2) {
          for (var p in b2)
            if (Object.prototype.hasOwnProperty.call(b2, p))
              d2[p] = b2[p];
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        if (typeof b !== "function" && b !== null)
          throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __assign = exports && exports.__assign || function() {
      __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p))
              t[p] = s[p];
        }
        return t;
      };
      return __assign.apply(this, arguments);
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.close = exports.show = exports.Share = exports.Action = void 0;
    var types_1 = require_types();
    var helper_1 = require_helper();
    var ActionSet_1 = require_ActionSet();
    var Action;
    (function(Action2) {
      Action2["SHOW"] = "APP::SHARE::SHOW";
      Action2["CLOSE"] = "APP::SHARE::CLOSE";
    })(Action = exports.Action || (exports.Action = {}));
    var Share = (
      /** @class */
      function(_super) {
        __extends(Share2, _super);
        function Share2(app) {
          return _super.call(this, app, types_1.Group.Share, types_1.Group.Share) || this;
        }
        Share2.prototype.dispatch = function(action, payload) {
          switch (action) {
            case Action.SHOW:
              this.dispatchShareAction(Action.SHOW, payload);
              break;
            case Action.CLOSE:
              this.dispatchShareAction(Action.CLOSE, payload);
              break;
            default:
              throw new Error("Action: " + action + " not supported");
          }
          return this;
        };
        Share2.prototype.dispatchShareAction = function(actionType, payload) {
          this.app.dispatch(helper_1.actionWrapper({
            type: actionType,
            group: types_1.Group.Share,
            payload: __assign({ id: this.id }, payload)
          }));
        };
        return Share2;
      }(ActionSet_1.ActionSet)
    );
    exports.Share = Share;
    function show() {
      return helper_1.actionWrapper({
        group: types_1.Group.Share,
        type: Action.SHOW
      });
    }
    exports.show = show;
    function close(payload) {
      return helper_1.actionWrapper({
        group: types_1.Group.Share,
        type: Action.CLOSE,
        payload
      });
    }
    exports.close = close;
  }
});

// node_modules/@shopify/app-bridge/actions/Share/index.js
var require_Share2 = __commonJS({
  "node_modules/@shopify/app-bridge/actions/Share/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.create = exports.Share = exports.close = exports.show = exports.Action = void 0;
    var Share_1 = require_Share();
    Object.defineProperty(exports, "Share", { enumerable: true, get: function() {
      return Share_1.Share;
    } });
    var Share_2 = require_Share();
    Object.defineProperty(exports, "Action", { enumerable: true, get: function() {
      return Share_2.Action;
    } });
    Object.defineProperty(exports, "show", { enumerable: true, get: function() {
      return Share_2.show;
    } });
    Object.defineProperty(exports, "close", { enumerable: true, get: function() {
      return Share_2.close;
    } });
    function create(app) {
      return new Share_1.Share(app);
    }
    exports.create = create;
  }
});

// node_modules/@shopify/app-bridge-core/actions/Link/AppLink/index.js
var require_AppLink = __commonJS({
  "node_modules/@shopify/app-bridge-core/actions/Link/AppLink/index.js"(exports) {
    "use strict";
    var __extends = exports && exports.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
          d2.__proto__ = b2;
        } || function(d2, b2) {
          for (var p in b2)
            if (Object.prototype.hasOwnProperty.call(b2, p))
              d2[p] = b2[p];
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        if (typeof b !== "function" && b !== null)
          throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __assign = exports && exports.__assign || function() {
      __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p))
              t[p] = s[p];
        }
        return t;
      };
      return __assign.apply(this, arguments);
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.AppLink = exports.update = exports.Action = void 0;
    var helper_1 = require_helper();
    var ActionSet_1 = require_ActionSet();
    var types_1 = require_types();
    var Redirect_1 = require_Redirect();
    var Action;
    (function(Action2) {
      Action2["UPDATE"] = "UPDATE";
    })(Action = exports.Action || (exports.Action = {}));
    function update(group, component, updatePayload) {
      var id = component.id;
      var label = updatePayload.label, destination = updatePayload.destination;
      var linkPayload = __assign(__assign({}, updatePayload), { id, label, destination });
      return helper_1.actionWrapper({
        group,
        type: helper_1.getEventNameSpace(group, Action.UPDATE, component),
        payload: linkPayload
      });
    }
    exports.update = update;
    var AppLink = (
      /** @class */
      function(_super) {
        __extends(AppLink2, _super);
        function AppLink2(app, options) {
          var _this = _super.call(this, app, types_1.Group.Link, types_1.Group.Link) || this;
          _this.label = "";
          _this.destination = "";
          _this.set(options, false);
          return _this;
        }
        Object.defineProperty(AppLink2.prototype, "options", {
          get: function() {
            var _a = this, label = _a.label, destination = _a.destination;
            return {
              label,
              destination,
              redirectType: Redirect_1.Action.APP
            };
          },
          enumerable: false,
          configurable: true
        });
        Object.defineProperty(AppLink2.prototype, "payload", {
          get: function() {
            var _a = this.options, label = _a.label, destination = _a.destination, redirectType = _a.redirectType;
            var path = destination;
            return {
              id: this.id,
              label,
              destination: { path },
              redirectType
            };
          },
          enumerable: false,
          configurable: true
        });
        AppLink2.prototype.set = function(options, shouldUpdate) {
          if (shouldUpdate === void 0) {
            shouldUpdate = true;
          }
          var _a = helper_1.getMergedProps(this.options, options), label = _a.label, destination = _a.destination;
          this.label = label;
          this.destination = destination;
          if (shouldUpdate) {
            this.dispatch(Action.UPDATE);
          }
          return this;
        };
        AppLink2.prototype.dispatch = function(action) {
          switch (action) {
            case Action.UPDATE: {
              var updateAction = update(this.group, this.component, this.payload);
              this.app.dispatch(updateAction);
              break;
            }
          }
          return this;
        };
        return AppLink2;
      }(ActionSet_1.ActionSet)
    );
    exports.AppLink = AppLink;
  }
});

// node_modules/@shopify/app-bridge-core/actions/Menu/NavigationMenu/index.js
var require_NavigationMenu = __commonJS({
  "node_modules/@shopify/app-bridge-core/actions/Menu/NavigationMenu/index.js"(exports) {
    "use strict";
    var __extends = exports && exports.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
          d2.__proto__ = b2;
        } || function(d2, b2) {
          for (var p in b2)
            if (Object.prototype.hasOwnProperty.call(b2, p))
              d2[p] = b2[p];
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        if (typeof b !== "function" && b !== null)
          throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __assign = exports && exports.__assign || function() {
      __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p))
              t[p] = s[p];
        }
        return t;
      };
      return __assign.apply(this, arguments);
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.NavigationMenu = exports.update = exports.Action = void 0;
    var AppLink_1 = require_AppLink();
    var helper_1 = require_helper();
    var ActionSet_1 = require_ActionSet();
    var types_1 = require_types();
    var SUBGROUPS = ["Navigation_Menu"];
    var Action;
    (function(Action2) {
      Action2["UPDATE"] = "APP::MENU::NAVIGATION_MENU::UPDATE";
      Action2["LINK_UPDATE"] = "APP::MENU::NAVIGATION_MENU::LINK::UPDATE";
    })(Action = exports.Action || (exports.Action = {}));
    function update(payload) {
      return helper_1.actionWrapper({
        payload,
        group: types_1.Group.Menu,
        type: Action.UPDATE
      });
    }
    exports.update = update;
    var NavigationMenu = (
      /** @class */
      function(_super) {
        __extends(NavigationMenu2, _super);
        function NavigationMenu2(app, options) {
          var _this = _super.call(this, app, "Navigation_Menu", types_1.Group.Menu) || this;
          _this.items = [];
          _this.set(options);
          return _this;
        }
        Object.defineProperty(NavigationMenu2.prototype, "options", {
          get: function() {
            return {
              items: this.itemsOptions,
              active: this.activeOptions
            };
          },
          enumerable: false,
          configurable: true
        });
        Object.defineProperty(NavigationMenu2.prototype, "payload", {
          get: function() {
            return __assign(__assign({}, this.options), { active: this.active, items: this.items, id: this.id });
          },
          enumerable: false,
          configurable: true
        });
        NavigationMenu2.prototype.set = function(options, shouldUpdate) {
          if (shouldUpdate === void 0) {
            shouldUpdate = true;
          }
          var mergedOptions = helper_1.getMergedProps(this.options, options);
          var items = mergedOptions.items, active = mergedOptions.active;
          this.setItems(items);
          this.activeOptions = active;
          this.active = active && active.id;
          if (shouldUpdate) {
            this.dispatch(Action.UPDATE);
          }
          return this;
        };
        NavigationMenu2.prototype.dispatch = function(action) {
          switch (action) {
            case Action.UPDATE:
              this.app.dispatch(update(this.payload));
              break;
          }
          return this;
        };
        NavigationMenu2.prototype.updateItem = function(newPayload) {
          if (!this.items) {
            return;
          }
          var itemToUpdate = this.items.find(function(action) {
            return action.id === newPayload.id;
          });
          if (!itemToUpdate) {
            return;
          }
          if (helper_1.updateActionFromPayload(itemToUpdate, newPayload)) {
            this.dispatch(Action.UPDATE);
          }
        };
        NavigationMenu2.prototype.setItems = function(newOptions) {
          var _this = this;
          var newItems = newOptions || [];
          var currentItems = this.itemsOptions || [];
          this.itemsOptions = this.getUpdatedChildActions(newItems, currentItems);
          this.items = this.itemsOptions ? this.itemsOptions.map(function(action) {
            _this.addChild(action, _this.group, SUBGROUPS);
            _this.subscribeToChild(action, AppLink_1.Action.UPDATE, _this.updateItem);
            return action.payload;
          }) : [];
        };
        return NavigationMenu2;
      }(ActionSet_1.ActionSetWithChildren)
    );
    exports.NavigationMenu = NavigationMenu;
  }
});

// node_modules/@shopify/app-bridge/actions/Menu/NavigationMenu/index.js
var require_NavigationMenu2 = __commonJS({
  "node_modules/@shopify/app-bridge/actions/Menu/NavigationMenu/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.create = exports.NavigationMenu = exports.update = exports.Action = void 0;
    var NavigationMenu_1 = require_NavigationMenu();
    Object.defineProperty(exports, "NavigationMenu", { enumerable: true, get: function() {
      return NavigationMenu_1.NavigationMenu;
    } });
    var NavigationMenu_2 = require_NavigationMenu();
    Object.defineProperty(exports, "Action", { enumerable: true, get: function() {
      return NavigationMenu_2.Action;
    } });
    Object.defineProperty(exports, "update", { enumerable: true, get: function() {
      return NavigationMenu_2.update;
    } });
    function create(app, options) {
      return new NavigationMenu_1.NavigationMenu(app, options);
    }
    exports.create = create;
  }
});

// node_modules/@shopify/app-bridge-core/actions/Menu/ChannelMenu/index.js
var require_ChannelMenu = __commonJS({
  "node_modules/@shopify/app-bridge-core/actions/Menu/ChannelMenu/index.js"(exports) {
    "use strict";
    var __extends = exports && exports.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
          d2.__proto__ = b2;
        } || function(d2, b2) {
          for (var p in b2)
            if (Object.prototype.hasOwnProperty.call(b2, p))
              d2[p] = b2[p];
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        if (typeof b !== "function" && b !== null)
          throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __assign = exports && exports.__assign || function() {
      __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p))
              t[p] = s[p];
        }
        return t;
      };
      return __assign.apply(this, arguments);
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ChannelMenu = exports.update = exports.Action = void 0;
    var AppLink_1 = require_AppLink();
    var helper_1 = require_helper();
    var ActionSet_1 = require_ActionSet();
    var types_1 = require_types();
    var SUBGROUPS = ["Channel_Menu"];
    var Action;
    (function(Action2) {
      Action2["UPDATE"] = "APP::MENU::CHANNEL_MENU::UPDATE";
      Action2["LINK_UPDATE"] = "APP::MENU::CHANNEL_MENU::LINK::UPDATE";
    })(Action = exports.Action || (exports.Action = {}));
    function update(payload) {
      return helper_1.actionWrapper({
        payload,
        group: types_1.Group.Menu,
        type: Action.UPDATE
      });
    }
    exports.update = update;
    var ChannelMenu = (
      /** @class */
      function(_super) {
        __extends(ChannelMenu2, _super);
        function ChannelMenu2(app, options) {
          var _this = _super.call(this, app, "Channel_Menu", types_1.Group.Menu) || this;
          _this.items = [];
          _this.set(options);
          return _this;
        }
        Object.defineProperty(ChannelMenu2.prototype, "options", {
          get: function() {
            return {
              items: this.itemsOptions,
              active: this.activeOptions
            };
          },
          enumerable: false,
          configurable: true
        });
        Object.defineProperty(ChannelMenu2.prototype, "payload", {
          get: function() {
            return __assign(__assign({}, this.options), { active: this.active, items: this.items, id: this.id });
          },
          enumerable: false,
          configurable: true
        });
        ChannelMenu2.prototype.set = function(options, shouldUpdate) {
          if (shouldUpdate === void 0) {
            shouldUpdate = true;
          }
          var mergedOptions = helper_1.getMergedProps(this.options, options);
          var items = mergedOptions.items, active = mergedOptions.active;
          this.setItems(items);
          this.activeOptions = active;
          this.active = active && active.id;
          if (shouldUpdate) {
            this.dispatch(Action.UPDATE);
          }
          return this;
        };
        ChannelMenu2.prototype.dispatch = function(action) {
          switch (action) {
            case Action.UPDATE:
              this.app.dispatch(update(this.payload));
              break;
          }
          return this;
        };
        ChannelMenu2.prototype.updateItem = function(newPayload) {
          if (!this.items) {
            return;
          }
          var itemToUpdate = this.items.find(function(action) {
            return action.id === newPayload.id;
          });
          if (!itemToUpdate) {
            return;
          }
          if (helper_1.updateActionFromPayload(itemToUpdate, newPayload)) {
            this.dispatch(Action.UPDATE);
          }
        };
        ChannelMenu2.prototype.setItems = function(newOptions) {
          var _this = this;
          var newItems = newOptions || [];
          var currentItems = this.itemsOptions || [];
          this.itemsOptions = this.getUpdatedChildActions(newItems, currentItems);
          this.items = this.itemsOptions ? this.itemsOptions.map(function(action) {
            _this.addChild(action, _this.group, SUBGROUPS);
            _this.subscribeToChild(action, AppLink_1.Action.UPDATE, _this.updateItem);
            return action.payload;
          }) : [];
        };
        return ChannelMenu2;
      }(ActionSet_1.ActionSetWithChildren)
    );
    exports.ChannelMenu = ChannelMenu;
  }
});

// node_modules/@shopify/app-bridge/actions/Menu/ChannelMenu/index.js
var require_ChannelMenu2 = __commonJS({
  "node_modules/@shopify/app-bridge/actions/Menu/ChannelMenu/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.create = exports.ChannelMenu = exports.update = exports.Action = void 0;
    var ChannelMenu_1 = require_ChannelMenu();
    Object.defineProperty(exports, "ChannelMenu", { enumerable: true, get: function() {
      return ChannelMenu_1.ChannelMenu;
    } });
    var ChannelMenu_2 = require_ChannelMenu();
    Object.defineProperty(exports, "Action", { enumerable: true, get: function() {
      return ChannelMenu_2.Action;
    } });
    Object.defineProperty(exports, "update", { enumerable: true, get: function() {
      return ChannelMenu_2.update;
    } });
    function create(app, options) {
      return new ChannelMenu_1.ChannelMenu(app, options);
    }
    exports.create = create;
  }
});

// node_modules/@shopify/app-bridge/actions/Link/AppLink/index.js
var require_AppLink2 = __commonJS({
  "node_modules/@shopify/app-bridge/actions/Link/AppLink/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.create = exports.AppLink = exports.update = exports.Action = void 0;
    var AppLink_1 = require_AppLink();
    Object.defineProperty(exports, "AppLink", { enumerable: true, get: function() {
      return AppLink_1.AppLink;
    } });
    var AppLink_2 = require_AppLink();
    Object.defineProperty(exports, "Action", { enumerable: true, get: function() {
      return AppLink_2.Action;
    } });
    Object.defineProperty(exports, "update", { enumerable: true, get: function() {
      return AppLink_2.update;
    } });
    function create(app, options) {
      return new AppLink_1.AppLink(app, options);
    }
    exports.create = create;
  }
});

// node_modules/@shopify/app-bridge-core/actions/Pos/index.js
var require_Pos = __commonJS({
  "node_modules/@shopify/app-bridge-core/actions/Pos/index.js"(exports) {
    "use strict";
    var __extends = exports && exports.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
          d2.__proto__ = b2;
        } || function(d2, b2) {
          for (var p in b2)
            if (Object.prototype.hasOwnProperty.call(b2, p))
              d2[p] = b2[p];
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        if (typeof b !== "function" && b !== null)
          throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Pos = exports.close = exports.Action = void 0;
    var helper_1 = require_helper();
    var ActionSet_1 = require_ActionSet();
    var types_1 = require_types();
    var Action;
    (function(Action2) {
      Action2["CLOSE"] = "APP::POS::CLOSE";
      Action2["LOCATION_UPDATE"] = "APP::POS::LOCATION::UPDATE";
      Action2["USER_UPDATE"] = "APP::POS::USER::UPDATE";
      Action2["DEVICE_UPDATE"] = "APP::POS::DEVICE::UPDATE";
    })(Action = exports.Action || (exports.Action = {}));
    function close() {
      return helper_1.actionWrapper({
        group: types_1.Group.Pos,
        type: Action.CLOSE
      });
    }
    exports.close = close;
    var Pos = (
      /** @class */
      function(_super) {
        __extends(Pos2, _super);
        function Pos2(app) {
          return _super.call(this, app, types_1.Group.Pos, types_1.Group.Pos) || this;
        }
        Pos2.prototype.dispatch = function(action) {
          switch (action) {
            case Action.CLOSE:
              this.app.dispatch(close());
              break;
          }
          return this;
        };
        return Pos2;
      }(ActionSet_1.ActionSet)
    );
    exports.Pos = Pos;
  }
});

// node_modules/@shopify/app-bridge/actions/Pos/index.js
var require_Pos2 = __commonJS({
  "node_modules/@shopify/app-bridge/actions/Pos/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.create = exports.Pos = exports.close = exports.Action = void 0;
    var Pos_1 = require_Pos();
    Object.defineProperty(exports, "Pos", { enumerable: true, get: function() {
      return Pos_1.Pos;
    } });
    var Pos_2 = require_Pos();
    Object.defineProperty(exports, "Action", { enumerable: true, get: function() {
      return Pos_2.Action;
    } });
    Object.defineProperty(exports, "close", { enumerable: true, get: function() {
      return Pos_2.close;
    } });
    function create(app) {
      return new Pos_1.Pos(app);
    }
    exports.create = create;
  }
});

// node_modules/@shopify/app-bridge-core/actions/MarketingExternalActivityTopBar/index.js
var require_MarketingExternalActivityTopBar = __commonJS({
  "node_modules/@shopify/app-bridge-core/actions/MarketingExternalActivityTopBar/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Action = void 0;
    var Action;
    (function(Action2) {
      Action2["UPDATE"] = "APP::MARKETING_EXTERNAL_ACTIVITY_TOP_BAR::UPDATE";
      Action2["BUTTON_CLICK"] = "APP::MARKETING_EXTERNAL_ACTIVITY_TOP_BAR::BUTTONS::BUTTON::CLICK";
      Action2["BUTTON_UPDATE"] = "APP::MARKETING_EXTERNAL_ACTIVITY_TOP_BAR::BUTTONS::BUTTON::UPDATE";
    })(Action = exports.Action || (exports.Action = {}));
  }
});

// node_modules/@shopify/app-bridge/actions/buttonHelper.js
var require_buttonHelper2 = __commonJS({
  "node_modules/@shopify/app-bridge/actions/buttonHelper.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.getSingleButton = void 0;
    var buttonHelper_1 = require_buttonHelper();
    Object.defineProperty(exports, "getSingleButton", { enumerable: true, get: function() {
      return buttonHelper_1.getSingleButton;
    } });
  }
});

// node_modules/@shopify/app-bridge/actions/ActionSet.js
var require_ActionSet2 = __commonJS({
  "node_modules/@shopify/app-bridge/actions/ActionSet.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.unsubscribeActions = exports.ActionSetWithChildren = exports.ActionSet = void 0;
    var ActionSet_1 = require_ActionSet();
    Object.defineProperty(exports, "ActionSet", { enumerable: true, get: function() {
      return ActionSet_1.ActionSet;
    } });
    Object.defineProperty(exports, "ActionSetWithChildren", { enumerable: true, get: function() {
      return ActionSet_1.ActionSetWithChildren;
    } });
    Object.defineProperty(exports, "unsubscribeActions", { enumerable: true, get: function() {
      return ActionSet_1.unsubscribeActions;
    } });
  }
});

// node_modules/@shopify/app-bridge/actions/MarketingExternalActivityTopBar/index.js
var require_MarketingExternalActivityTopBar2 = __commonJS({
  "node_modules/@shopify/app-bridge/actions/MarketingExternalActivityTopBar/index.js"(exports) {
    "use strict";
    var __extends = exports && exports.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
          d2.__proto__ = b2;
        } || function(d2, b2) {
          for (var p in b2)
            if (Object.prototype.hasOwnProperty.call(b2, p))
              d2[p] = b2[p];
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        if (typeof b !== "function" && b !== null)
          throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __assign = exports && exports.__assign || function() {
      __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p))
              t[p] = s[p];
        }
        return t;
      };
      return __assign.apply(this, arguments);
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.create = exports.MarketingExternalActivityTopBar = exports.update = exports.clickActionButton = exports.MarketingActivityStatusBadgeType = exports.Action = void 0;
    var MarketingExternalActivityTopBar_1 = require_MarketingExternalActivityTopBar();
    Object.defineProperty(exports, "Action", { enumerable: true, get: function() {
      return MarketingExternalActivityTopBar_1.Action;
    } });
    var Button_1 = require_Button2();
    var buttonHelper_1 = require_buttonHelper2();
    var helper_1 = require_helper2();
    var ActionSet_1 = require_ActionSet2();
    var types_1 = require_types3();
    var MarketingActivityStatusBadgeType;
    (function(MarketingActivityStatusBadgeType2) {
      MarketingActivityStatusBadgeType2["Default"] = "DEFAULT";
      MarketingActivityStatusBadgeType2["Success"] = "SUCCESS";
      MarketingActivityStatusBadgeType2["Attention"] = "ATTENTION";
      MarketingActivityStatusBadgeType2["Warning"] = "WARNING";
      MarketingActivityStatusBadgeType2["Info"] = "INFO";
    })(MarketingActivityStatusBadgeType = exports.MarketingActivityStatusBadgeType || (exports.MarketingActivityStatusBadgeType = {}));
    var MARKETING_ACTIVITY_TOPBAR_BUTTON_PROPS = {
      group: types_1.Group.MarketingExternalActivityTopBar,
      subgroups: ["Buttons"]
    };
    function clickActionButton(id, payload) {
      var type = types_1.ComponentType.Button;
      var component = __assign({ id, type }, MARKETING_ACTIVITY_TOPBAR_BUTTON_PROPS);
      return Button_1.clickButton(types_1.Group.MarketingExternalActivityTopBar, component, payload);
    }
    exports.clickActionButton = clickActionButton;
    function update(payload) {
      return helper_1.actionWrapper({
        payload,
        group: types_1.Group.MarketingExternalActivityTopBar,
        type: MarketingExternalActivityTopBar_1.Action.UPDATE
      });
    }
    exports.update = update;
    var MarketingExternalActivityTopBar = (
      /** @class */
      function(_super) {
        __extends(MarketingExternalActivityTopBar2, _super);
        function MarketingExternalActivityTopBar2(app, options) {
          var _this = _super.call(this, app, types_1.Group.MarketingExternalActivityTopBar, types_1.Group.MarketingExternalActivityTopBar) || this;
          _this.set(options);
          return _this;
        }
        Object.defineProperty(MarketingExternalActivityTopBar2.prototype, "buttons", {
          get: function() {
            if (!this.primary && !this.secondary) {
              return void 0;
            }
            return {
              primary: this.primary,
              secondary: this.secondary
            };
          },
          enumerable: false,
          configurable: true
        });
        Object.defineProperty(MarketingExternalActivityTopBar2.prototype, "buttonsOptions", {
          get: function() {
            if (!this.primaryOptions && !this.secondaryOptions) {
              return void 0;
            }
            return {
              primary: this.primaryOptions,
              secondary: this.secondaryOptions
            };
          },
          enumerable: false,
          configurable: true
        });
        Object.defineProperty(MarketingExternalActivityTopBar2.prototype, "options", {
          get: function() {
            return {
              title: this.title,
              status: this.status,
              saving: this.saving,
              saved: this.saved,
              buttons: this.buttonsOptions
            };
          },
          enumerable: false,
          configurable: true
        });
        Object.defineProperty(MarketingExternalActivityTopBar2.prototype, "payload", {
          get: function() {
            return __assign(__assign({}, this.options), { buttons: this.buttons, id: this.id });
          },
          enumerable: false,
          configurable: true
        });
        MarketingExternalActivityTopBar2.prototype.set = function(options, shouldUpdate) {
          if (shouldUpdate === void 0) {
            shouldUpdate = true;
          }
          var mergedOptions = helper_1.getMergedProps(this.options, options);
          var title = mergedOptions.title, buttons = mergedOptions.buttons, saved = mergedOptions.saved, saving = mergedOptions.saving, status = mergedOptions.status;
          this.title = title;
          this.saving = saving;
          this.saved = saved;
          this.status = status;
          this.setPrimaryButton(buttons ? buttons.primary : void 0);
          this.setSecondaryButtons(buttons ? buttons.secondary : void 0);
          if (shouldUpdate) {
            this.dispatch(MarketingExternalActivityTopBar_1.Action.UPDATE);
          }
          return this;
        };
        MarketingExternalActivityTopBar2.prototype.dispatch = function(action) {
          switch (action) {
            case MarketingExternalActivityTopBar_1.Action.UPDATE:
              this.app.dispatch(update(this.payload));
              break;
          }
          return this;
        };
        MarketingExternalActivityTopBar2.prototype.getButton = function(button, subgroups, updateCb) {
          return buttonHelper_1.getSingleButton(this, button, subgroups, updateCb);
        };
        MarketingExternalActivityTopBar2.prototype.updatePrimaryButton = function(newPayload) {
          if (!this.primary) {
            return;
          }
          if (helper_1.updateActionFromPayload(this.primary, newPayload)) {
            this.dispatch(MarketingExternalActivityTopBar_1.Action.UPDATE);
          }
        };
        MarketingExternalActivityTopBar2.prototype.updateSecondaryButtons = function(newPayload) {
          if (!this.secondary) {
            return;
          }
          var buttonToUpdate = this.secondary.find(function(action) {
            return action.id === newPayload.id;
          });
          if (!buttonToUpdate) {
            return;
          }
          var updated = helper_1.updateActionFromPayload(buttonToUpdate, newPayload);
          if (updated) {
            this.dispatch(MarketingExternalActivityTopBar_1.Action.UPDATE);
          }
        };
        MarketingExternalActivityTopBar2.prototype.setPrimaryButton = function(newOptions) {
          this.primaryOptions = this.getChildButton(newOptions, this.primaryOptions);
          this.primary = this.primaryOptions ? this.getButton(this.primaryOptions, MARKETING_ACTIVITY_TOPBAR_BUTTON_PROPS.subgroups, this.updatePrimaryButton) : void 0;
        };
        MarketingExternalActivityTopBar2.prototype.setSecondaryButtons = function(newOptions) {
          var _this = this;
          var newButtons = newOptions || [];
          var currentButtons = this.secondaryOptions || [];
          this.secondaryOptions = this.getUpdatedChildActions(newButtons, currentButtons);
          this.secondary = this.secondaryOptions ? this.secondaryOptions.map(function(action) {
            return _this.getButton(action, MARKETING_ACTIVITY_TOPBAR_BUTTON_PROPS.subgroups, _this.updateSecondaryButtons);
          }) : void 0;
        };
        MarketingExternalActivityTopBar2.prototype.updateSaving = function(saving) {
          this.saving = saving;
          this.dispatch(MarketingExternalActivityTopBar_1.Action.UPDATE);
        };
        MarketingExternalActivityTopBar2.prototype.updateSaved = function(saved) {
          this.saved = saved;
          this.dispatch(MarketingExternalActivityTopBar_1.Action.UPDATE);
        };
        MarketingExternalActivityTopBar2.prototype.updateStatus = function(newPayload) {
          this.status = newPayload;
          this.dispatch(MarketingExternalActivityTopBar_1.Action.UPDATE);
        };
        MarketingExternalActivityTopBar2.prototype.getChildButton = function(newAction, currentAction) {
          var newButtons = newAction ? [newAction] : [];
          var currentButtons = currentAction ? [currentAction] : [];
          var updatedButton = this.getUpdatedChildActions(newButtons, currentButtons);
          return updatedButton ? updatedButton[0] : void 0;
        };
        return MarketingExternalActivityTopBar2;
      }(ActionSet_1.ActionSetWithChildren)
    );
    exports.MarketingExternalActivityTopBar = MarketingExternalActivityTopBar;
    function create(app, options) {
      return new MarketingExternalActivityTopBar(app, options);
    }
    exports.create = create;
  }
});

// node_modules/@shopify/app-bridge-core/actions/Performance/index.js
var require_Performance = __commonJS({
  "node_modules/@shopify/app-bridge-core/actions/Performance/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.fullPageLoad = exports.skeletonPageLoad = exports.Action = void 0;
    var types_1 = require_types();
    var helper_1 = require_helper();
    var Action;
    (function(Action2) {
      Action2["SKELETON_PAGE_LOAD"] = "APP::PERFORMANCE::SKELETON_PAGE_LOAD";
      Action2["FULL_PAGE_LOAD"] = "APP::PERFORMANCE::FULL_PAGE_LOAD";
    })(Action = exports.Action || (exports.Action = {}));
    function skeletonPageLoad() {
      return helper_1.actionWrapper({
        group: types_1.Group.Performance,
        type: Action.SKELETON_PAGE_LOAD
      });
    }
    exports.skeletonPageLoad = skeletonPageLoad;
    function fullPageLoad() {
      return helper_1.actionWrapper({
        group: types_1.Group.Performance,
        type: Action.FULL_PAGE_LOAD
      });
    }
    exports.fullPageLoad = fullPageLoad;
  }
});

// node_modules/@shopify/app-bridge/actions/Performance/index.js
var require_Performance2 = __commonJS({
  "node_modules/@shopify/app-bridge/actions/Performance/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.fullPageLoad = exports.skeletonPageLoad = exports.Action = void 0;
    var Performance_1 = require_Performance();
    Object.defineProperty(exports, "Action", { enumerable: true, get: function() {
      return Performance_1.Action;
    } });
    Object.defineProperty(exports, "skeletonPageLoad", { enumerable: true, get: function() {
      return Performance_1.skeletonPageLoad;
    } });
    Object.defineProperty(exports, "fullPageLoad", { enumerable: true, get: function() {
      return Performance_1.fullPageLoad;
    } });
  }
});

// node_modules/@shopify/app-bridge-core/actions/Picker/index.js
var require_Picker = __commonJS({
  "node_modules/@shopify/app-bridge-core/actions/Picker/index.js"(exports) {
    "use strict";
    var __extends = exports && exports.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
          d2.__proto__ = b2;
        } || function(d2, b2) {
          for (var p in b2)
            if (Object.prototype.hasOwnProperty.call(b2, p))
              d2[p] = b2[p];
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        if (typeof b !== "function" && b !== null)
          throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __assign = exports && exports.__assign || function() {
      __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p))
              t[p] = s[p];
        }
        return t;
      };
      return __assign.apply(this, arguments);
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.unstable_Picker = exports.loadMore = exports.search = exports.update = exports.cancel = exports.open = exports.select = exports.ALL_RESOURCE_VERTICAL_ALIGNMENT = exports.ALL_MEDIA_KINDS = exports.ALL_BADGE_STATUSES = exports.ALL_BADGE_PROGRESSES = exports.Action = void 0;
    var helper_1 = require_helper();
    var ActionSet_1 = require_ActionSet();
    var types_1 = require_types();
    var Action;
    (function(Action2) {
      Action2["OPEN"] = "APP::PICKER::OPEN";
      Action2["SELECT"] = "APP::PICKER::SELECT";
      Action2["UPDATE"] = "APP::PICKER::UPDATE";
      Action2["CANCEL"] = "APP::PICKER::CANCEL";
      Action2["SEARCH"] = "APP::PICKER::SEARCH";
      Action2["LOAD_MORE"] = "APP::PICKER::LOAD_MORE";
    })(Action = exports.Action || (exports.Action = {}));
    exports.ALL_BADGE_PROGRESSES = [
      "incomplete",
      "partiallyComplete",
      "complete"
    ];
    exports.ALL_BADGE_STATUSES = [
      "success",
      "info",
      "attention",
      "critical",
      "warning",
      "new"
    ];
    exports.ALL_MEDIA_KINDS = ["Avatar", "Thumbnail"];
    exports.ALL_RESOURCE_VERTICAL_ALIGNMENT = [
      "leading",
      "trailing",
      "center"
    ];
    function select(payload) {
      return helper_1.actionWrapper({
        payload,
        group: types_1.Group.unstable_Picker,
        type: Action.SELECT
      });
    }
    exports.select = select;
    function open(payload) {
      return helper_1.actionWrapper({
        payload,
        group: types_1.Group.unstable_Picker,
        type: Action.OPEN
      });
    }
    exports.open = open;
    function cancel(payload) {
      return helper_1.actionWrapper({
        payload,
        group: types_1.Group.unstable_Picker,
        type: Action.CANCEL
      });
    }
    exports.cancel = cancel;
    function update(payload) {
      return helper_1.actionWrapper({
        payload,
        group: types_1.Group.unstable_Picker,
        type: Action.UPDATE
      });
    }
    exports.update = update;
    function search(payload) {
      return helper_1.actionWrapper({
        payload,
        group: types_1.Group.unstable_Picker,
        type: Action.SEARCH
      });
    }
    exports.search = search;
    function loadMore(payload) {
      return helper_1.actionWrapper({
        payload,
        group: types_1.Group.unstable_Picker,
        type: Action.LOAD_MORE
      });
    }
    exports.loadMore = loadMore;
    var unstable_Picker = (
      /** @class */
      function(_super) {
        __extends(unstable_Picker2, _super);
        function unstable_Picker2(app, options) {
          var _this = _super.call(this, app, types_1.Group.unstable_Picker, types_1.Group.unstable_Picker) || this;
          _this.items = [];
          _this.selectedItems = [];
          _this.set(options, false);
          return _this;
        }
        Object.defineProperty(unstable_Picker2.prototype, "payload", {
          get: function() {
            return __assign(__assign({}, this.options), { id: this.id });
          },
          enumerable: false,
          configurable: true
        });
        Object.defineProperty(unstable_Picker2.prototype, "options", {
          get: function() {
            return {
              items: this.items,
              maxSelectable: this.maxSelectable,
              selectedItems: this.selectedItems,
              title: this.title,
              loading: this.loading,
              searchQuery: this.searchQuery,
              searchQueryPlaceholder: this.searchQueryPlaceholder,
              primaryActionLabel: this.primaryActionLabel,
              secondaryActionLabel: this.secondaryActionLabel,
              emptySearchLabel: this.emptySearchLabel,
              canLoadMore: this.canLoadMore,
              loadingMore: this.loadingMore,
              verticalAlignment: this.verticalAlignment,
              allowEmptySelection: this.allowEmptySelection,
              resourceName: this.resourceName
            };
          },
          enumerable: false,
          configurable: true
        });
        unstable_Picker2.prototype.set = function(options, shouldUpdate) {
          if (shouldUpdate === void 0) {
            shouldUpdate = true;
          }
          var mergedOptions = helper_1.getMergedProps(this.options, options);
          var _a = mergedOptions.selectedItems, selectedItems = _a === void 0 ? [] : _a, _b = mergedOptions.maxSelectable, maxSelectable = _b === void 0 ? 0 : _b, _c3 = mergedOptions.items, items = _c3 === void 0 ? [] : _c3, _d = mergedOptions.loading, loading = _d === void 0 ? false : _d, title = mergedOptions.title, searchQuery = mergedOptions.searchQuery, searchQueryPlaceholder = mergedOptions.searchQueryPlaceholder, primaryActionLabel = mergedOptions.primaryActionLabel, secondaryActionLabel = mergedOptions.secondaryActionLabel, emptySearchLabel = mergedOptions.emptySearchLabel, _e = mergedOptions.canLoadMore, canLoadMore = _e === void 0 ? false : _e, _f = mergedOptions.loadingMore, loadingMore = _f === void 0 ? false : _f, verticalAlignment = mergedOptions.verticalAlignment, allowEmptySelection = mergedOptions.allowEmptySelection, resourceName = mergedOptions.resourceName;
          this.title = title;
          this.items = items;
          this.selectedItems = selectedItems;
          this.maxSelectable = maxSelectable;
          this.loading = loading;
          this.searchQuery = searchQuery;
          this.searchQueryPlaceholder = searchQueryPlaceholder;
          this.primaryActionLabel = primaryActionLabel;
          this.secondaryActionLabel = secondaryActionLabel;
          this.emptySearchLabel = emptySearchLabel;
          this.canLoadMore = canLoadMore;
          this.loadingMore = loadingMore;
          this.verticalAlignment = verticalAlignment;
          this.allowEmptySelection = allowEmptySelection;
          this.resourceName = resourceName;
          if (shouldUpdate) {
            this.update();
          }
          return this;
        };
        unstable_Picker2.prototype.dispatch = function(action, payload) {
          if (action === Action.OPEN) {
            this.open();
          } else if (action === Action.UPDATE) {
            this.update();
          } else if (action === Action.CANCEL) {
            this.cancel();
          } else if (action === Action.SELECT) {
            this.selectedItems = (payload === null || payload === void 0 ? void 0 : payload.selectedItems) || [];
            this.app.dispatch(select({ id: this.id, selectedItems: this.selectedItems }));
          } else if (action === Action.SEARCH) {
            this.searchQuery = (payload === null || payload === void 0 ? void 0 : payload.searchQuery) || "";
            this.app.dispatch(search({ id: this.id, searchQuery: this.searchQuery }));
          } else if (action === Action.LOAD_MORE) {
            this.loadMore();
          }
          return this;
        };
        unstable_Picker2.prototype.update = function() {
          this.app.dispatch(update(this.payload));
        };
        unstable_Picker2.prototype.open = function() {
          this.app.dispatch(open(this.payload));
        };
        unstable_Picker2.prototype.cancel = function() {
          this.app.dispatch(cancel({ id: this.id }));
        };
        unstable_Picker2.prototype.loadMore = function() {
          this.app.dispatch(loadMore(this.payload));
        };
        return unstable_Picker2;
      }(ActionSet_1.ActionSet)
    );
    exports.unstable_Picker = unstable_Picker;
  }
});

// node_modules/@shopify/app-bridge/actions/Picker/index.js
var require_Picker2 = __commonJS({
  "node_modules/@shopify/app-bridge/actions/Picker/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.create = exports.unstable_Picker = exports.update = exports.select = exports.search = exports.open = exports.loadMore = exports.cancel = exports.ALL_RESOURCE_VERTICAL_ALIGNMENT = exports.ALL_MEDIA_KINDS = exports.ALL_BADGE_STATUSES = exports.ALL_BADGE_PROGRESSES = exports.Action = void 0;
    var Picker_1 = require_Picker();
    Object.defineProperty(exports, "unstable_Picker", { enumerable: true, get: function() {
      return Picker_1.unstable_Picker;
    } });
    var Picker_2 = require_Picker();
    Object.defineProperty(exports, "Action", { enumerable: true, get: function() {
      return Picker_2.Action;
    } });
    Object.defineProperty(exports, "ALL_BADGE_PROGRESSES", { enumerable: true, get: function() {
      return Picker_2.ALL_BADGE_PROGRESSES;
    } });
    Object.defineProperty(exports, "ALL_BADGE_STATUSES", { enumerable: true, get: function() {
      return Picker_2.ALL_BADGE_STATUSES;
    } });
    Object.defineProperty(exports, "ALL_MEDIA_KINDS", { enumerable: true, get: function() {
      return Picker_2.ALL_MEDIA_KINDS;
    } });
    Object.defineProperty(exports, "ALL_RESOURCE_VERTICAL_ALIGNMENT", { enumerable: true, get: function() {
      return Picker_2.ALL_RESOURCE_VERTICAL_ALIGNMENT;
    } });
    Object.defineProperty(exports, "cancel", { enumerable: true, get: function() {
      return Picker_2.cancel;
    } });
    Object.defineProperty(exports, "loadMore", { enumerable: true, get: function() {
      return Picker_2.loadMore;
    } });
    Object.defineProperty(exports, "open", { enumerable: true, get: function() {
      return Picker_2.open;
    } });
    Object.defineProperty(exports, "search", { enumerable: true, get: function() {
      return Picker_2.search;
    } });
    Object.defineProperty(exports, "select", { enumerable: true, get: function() {
      return Picker_2.select;
    } });
    Object.defineProperty(exports, "update", { enumerable: true, get: function() {
      return Picker_2.update;
    } });
    var create = function(app, options) {
      return new Picker_1.unstable_Picker(app, options);
    };
    exports.create = create;
  }
});

// node_modules/web-vitals/dist/web-vitals.umd.cjs
var require_web_vitals_umd = __commonJS({
  "node_modules/web-vitals/dist/web-vitals.umd.cjs"(exports, module) {
    !function(e, n) {
      "object" == typeof exports && "undefined" != typeof module ? n(exports) : "function" == typeof define && define.amd ? define(["exports"], n) : n((e = "undefined" != typeof globalThis ? globalThis : e || self).webVitals = {});
    }(exports, function(e) {
      "use strict";
      var n, t, i, r, o, a = -1, c = function(e2) {
        addEventListener("pageshow", function(n2) {
          n2.persisted && (a = n2.timeStamp, e2(n2));
        }, true);
      }, u = function() {
        return window.performance && performance.getEntriesByType && performance.getEntriesByType("navigation")[0];
      }, f = function() {
        var e2 = u();
        return e2 && e2.activationStart || 0;
      }, s = function(e2, n2) {
        var t2 = u(), i2 = "navigate";
        a >= 0 ? i2 = "back-forward-cache" : t2 && (document.prerendering || f() > 0 ? i2 = "prerender" : document.wasDiscarded ? i2 = "restore" : t2.type && (i2 = t2.type.replace(/_/g, "-")));
        return { name: e2, value: void 0 === n2 ? -1 : n2, rating: "good", delta: 0, entries: [], id: "v3-".concat(Date.now(), "-").concat(Math.floor(8999999999999 * Math.random()) + 1e12), navigationType: i2 };
      }, d = function(e2, n2, t2) {
        try {
          if (PerformanceObserver.supportedEntryTypes.includes(e2)) {
            var i2 = new PerformanceObserver(function(e3) {
              Promise.resolve().then(function() {
                n2(e3.getEntries());
              });
            });
            return i2.observe(Object.assign({ type: e2, buffered: true }, t2 || {})), i2;
          }
        } catch (e3) {
        }
      }, l = function(e2, n2, t2, i2) {
        var r2, o2;
        return function(a2) {
          n2.value >= 0 && (a2 || i2) && ((o2 = n2.value - (r2 || 0)) || void 0 === r2) && (r2 = n2.value, n2.delta = o2, n2.rating = function(e3, n3) {
            return e3 > n3[1] ? "poor" : e3 > n3[0] ? "needs-improvement" : "good";
          }(n2.value, t2), e2(n2));
        };
      }, p = function(e2) {
        requestAnimationFrame(function() {
          return requestAnimationFrame(function() {
            return e2();
          });
        });
      }, v = function(e2) {
        var n2 = function(n3) {
          "pagehide" !== n3.type && "hidden" !== document.visibilityState || e2(n3);
        };
        addEventListener("visibilitychange", n2, true), addEventListener("pagehide", n2, true);
      }, m = function(e2) {
        var n2 = false;
        return function(t2) {
          n2 || (e2(t2), n2 = true);
        };
      }, h = -1, g = function() {
        return "hidden" !== document.visibilityState || document.prerendering ? 1 / 0 : 0;
      }, T = function(e2) {
        "hidden" === document.visibilityState && h > -1 && (h = "visibilitychange" === e2.type ? e2.timeStamp : 0, E());
      }, y = function() {
        addEventListener("visibilitychange", T, true), addEventListener("prerenderingchange", T, true);
      }, E = function() {
        removeEventListener("visibilitychange", T, true), removeEventListener("prerenderingchange", T, true);
      }, C = function() {
        return h < 0 && (h = g(), y(), c(function() {
          setTimeout(function() {
            h = g(), y();
          }, 0);
        })), { get firstHiddenTime() {
          return h;
        } };
      }, L = function(e2) {
        document.prerendering ? addEventListener("prerenderingchange", function() {
          return e2();
        }, true) : e2();
      }, b = [1800, 3e3], w = function(e2, n2) {
        n2 = n2 || {}, L(function() {
          var t2, i2 = C(), r2 = s("FCP"), o2 = d("paint", function(e3) {
            e3.forEach(function(e4) {
              "first-contentful-paint" === e4.name && (o2.disconnect(), e4.startTime < i2.firstHiddenTime && (r2.value = Math.max(e4.startTime - f(), 0), r2.entries.push(e4), t2(true)));
            });
          });
          o2 && (t2 = l(e2, r2, b, n2.reportAllChanges), c(function(i3) {
            r2 = s("FCP"), t2 = l(e2, r2, b, n2.reportAllChanges), p(function() {
              r2.value = performance.now() - i3.timeStamp, t2(true);
            });
          }));
        });
      }, S = [0.1, 0.25], P = function(e2, n2) {
        n2 = n2 || {}, w(m(function() {
          var t2, i2 = s("CLS", 0), r2 = 0, o2 = [], a2 = function(e3) {
            e3.forEach(function(e4) {
              if (!e4.hadRecentInput) {
                var n3 = o2[0], t3 = o2[o2.length - 1];
                r2 && e4.startTime - t3.startTime < 1e3 && e4.startTime - n3.startTime < 5e3 ? (r2 += e4.value, o2.push(e4)) : (r2 = e4.value, o2 = [e4]);
              }
            }), r2 > i2.value && (i2.value = r2, i2.entries = o2, t2());
          }, u2 = d("layout-shift", a2);
          u2 && (t2 = l(e2, i2, S, n2.reportAllChanges), v(function() {
            a2(u2.takeRecords()), t2(true);
          }), c(function() {
            r2 = 0, i2 = s("CLS", 0), t2 = l(e2, i2, S, n2.reportAllChanges), p(function() {
              return t2();
            });
          }), setTimeout(t2, 0));
        }));
      }, I = { passive: true, capture: true }, F = /* @__PURE__ */ new Date(), A = function(e2, r2) {
        n || (n = r2, t = e2, i = /* @__PURE__ */ new Date(), k(removeEventListener), D());
      }, D = function() {
        if (t >= 0 && t < i - F) {
          var e2 = { entryType: "first-input", name: n.type, target: n.target, cancelable: n.cancelable, startTime: n.timeStamp, processingStart: n.timeStamp + t };
          r.forEach(function(n2) {
            n2(e2);
          }), r = [];
        }
      }, M = function(e2) {
        if (e2.cancelable) {
          var n2 = (e2.timeStamp > 1e12 ? /* @__PURE__ */ new Date() : performance.now()) - e2.timeStamp;
          "pointerdown" == e2.type ? function(e3, n3) {
            var t2 = function() {
              A(e3, n3), r2();
            }, i2 = function() {
              r2();
            }, r2 = function() {
              removeEventListener("pointerup", t2, I), removeEventListener("pointercancel", i2, I);
            };
            addEventListener("pointerup", t2, I), addEventListener("pointercancel", i2, I);
          }(n2, e2) : A(n2, e2);
        }
      }, k = function(e2) {
        ["mousedown", "keydown", "touchstart", "pointerdown"].forEach(function(n2) {
          return e2(n2, M, I);
        });
      }, x = [100, 300], B = function(e2, i2) {
        i2 = i2 || {}, L(function() {
          var o2, a2 = C(), u2 = s("FID"), f2 = function(e3) {
            e3.startTime < a2.firstHiddenTime && (u2.value = e3.processingStart - e3.startTime, u2.entries.push(e3), o2(true));
          }, p2 = function(e3) {
            e3.forEach(f2);
          }, h2 = d("first-input", p2);
          o2 = l(e2, u2, x, i2.reportAllChanges), h2 && v(m(function() {
            p2(h2.takeRecords()), h2.disconnect();
          })), h2 && c(function() {
            var a3;
            u2 = s("FID"), o2 = l(e2, u2, x, i2.reportAllChanges), r = [], t = -1, n = null, k(addEventListener), a3 = f2, r.push(a3), D();
          });
        });
      }, N = 0, R = 1 / 0, H = 0, O = function(e2) {
        e2.forEach(function(e3) {
          e3.interactionId && (R = Math.min(R, e3.interactionId), H = Math.max(H, e3.interactionId), N = H ? (H - R) / 7 + 1 : 0);
        });
      }, j = function() {
        return o ? N : performance.interactionCount || 0;
      }, q = function() {
        "interactionCount" in performance || o || (o = d("event", O, { type: "event", buffered: true, durationThreshold: 0 }));
      }, V = [200, 500], _ = 0, z = function() {
        return j() - _;
      }, G = [], J = {}, K = function(e2) {
        var n2 = G[G.length - 1], t2 = J[e2.interactionId];
        if (t2 || G.length < 10 || e2.duration > n2.latency) {
          if (t2)
            t2.entries.push(e2), t2.latency = Math.max(t2.latency, e2.duration);
          else {
            var i2 = { id: e2.interactionId, latency: e2.duration, entries: [e2] };
            J[i2.id] = i2, G.push(i2);
          }
          G.sort(function(e3, n3) {
            return n3.latency - e3.latency;
          }), G.splice(10).forEach(function(e3) {
            delete J[e3.id];
          });
        }
      }, Q = function(e2, n2) {
        n2 = n2 || {}, L(function() {
          var t2;
          q();
          var i2, r2 = s("INP"), o2 = function(e3) {
            e3.forEach(function(e4) {
              (e4.interactionId && K(e4), "first-input" === e4.entryType) && (!G.some(function(n4) {
                return n4.entries.some(function(n5) {
                  return e4.duration === n5.duration && e4.startTime === n5.startTime;
                });
              }) && K(e4));
            });
            var n3, t3 = (n3 = Math.min(G.length - 1, Math.floor(z() / 50)), G[n3]);
            t3 && t3.latency !== r2.value && (r2.value = t3.latency, r2.entries = t3.entries, i2());
          }, a2 = d("event", o2, { durationThreshold: null !== (t2 = n2.durationThreshold) && void 0 !== t2 ? t2 : 40 });
          i2 = l(e2, r2, V, n2.reportAllChanges), a2 && ("PerformanceEventTiming" in window && "interactionId" in PerformanceEventTiming.prototype && a2.observe({ type: "first-input", buffered: true }), v(function() {
            o2(a2.takeRecords()), r2.value < 0 && z() > 0 && (r2.value = 0, r2.entries = []), i2(true);
          }), c(function() {
            G = [], _ = j(), r2 = s("INP"), i2 = l(e2, r2, V, n2.reportAllChanges);
          }));
        });
      }, U = [2500, 4e3], W = {}, X = function(e2, n2) {
        n2 = n2 || {}, L(function() {
          var t2, i2 = C(), r2 = s("LCP"), o2 = function(e3) {
            var n3 = e3[e3.length - 1];
            n3 && n3.startTime < i2.firstHiddenTime && (r2.value = Math.max(n3.startTime - f(), 0), r2.entries = [n3], t2());
          }, a2 = d("largest-contentful-paint", o2);
          if (a2) {
            t2 = l(e2, r2, U, n2.reportAllChanges);
            var u2 = m(function() {
              W[r2.id] || (o2(a2.takeRecords()), a2.disconnect(), W[r2.id] = true, t2(true));
            });
            ["keydown", "click"].forEach(function(e3) {
              addEventListener(e3, function() {
                return setTimeout(u2, 0);
              }, true);
            }), v(u2), c(function(i3) {
              r2 = s("LCP"), t2 = l(e2, r2, U, n2.reportAllChanges), p(function() {
                r2.value = performance.now() - i3.timeStamp, W[r2.id] = true, t2(true);
              });
            });
          }
        });
      }, Y = [800, 1800], Z = function e2(n2) {
        document.prerendering ? L(function() {
          return e2(n2);
        }) : "complete" !== document.readyState ? addEventListener("load", function() {
          return e2(n2);
        }, true) : setTimeout(n2, 0);
      }, $ = function(e2, n2) {
        n2 = n2 || {};
        var t2 = s("TTFB"), i2 = l(e2, t2, Y, n2.reportAllChanges);
        Z(function() {
          var r2 = u();
          if (r2) {
            var o2 = r2.responseStart;
            if (o2 <= 0 || o2 > performance.now())
              return;
            t2.value = Math.max(o2 - f(), 0), t2.entries = [r2], i2(true), c(function() {
              t2 = s("TTFB", 0), (i2 = l(e2, t2, Y, n2.reportAllChanges))(true);
            });
          }
        });
      };
      e.CLSThresholds = S, e.FCPThresholds = b, e.FIDThresholds = x, e.INPThresholds = V, e.LCPThresholds = U, e.TTFBThresholds = Y, e.getCLS = P, e.getFCP = w, e.getFID = B, e.getINP = Q, e.getLCP = X, e.getTTFB = $, e.onCLS = P, e.onFCP = w, e.onFID = B, e.onINP = Q, e.onLCP = X, e.onTTFB = $;
    });
  }
});

// node_modules/@shopify/app-bridge-core/actions/WebVitals/index.js
var require_WebVitals = __commonJS({
  "node_modules/@shopify/app-bridge-core/actions/WebVitals/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Action = void 0;
    var Action;
    (function(Action2) {
      Action2["LARGEST_CONTENTFUL_PAINT"] = "APP::WEB_VITALS::LARGEST_CONTENTFUL_PAINT";
      Action2["FIRST_INPUT_DELAY"] = "APP::WEB_VITALS::FIRST_INPUT_DELAY";
      Action2["CUMULATIVE_LAYOUT_SHIFT"] = "APP::WEB_VITALS::CUMULATIVE_LAYOUT_SHIFT";
      Action2["FIRST_CONTENTFUL_PAINT"] = "APP::WEB_VITALS::FIRST_CONTENTFUL_PAINT";
      Action2["TIME_TO_FIRST_BYTE"] = "APP::WEB_VITALS::TIME_TO_FIRST_BYTE";
      Action2["INTERACTION_TO_NEXT_PAINT"] = "APP::WEB_VITALS::INTERACTION_TO_NEXT_PAINT";
    })(Action = exports.Action || (exports.Action = {}));
  }
});

// node_modules/@shopify/app-bridge/actions/WebVitals/actions.js
var require_actions4 = __commonJS({
  "node_modules/@shopify/app-bridge/actions/WebVitals/actions.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.initializeWebVitals = exports.interactionToNextPaint = exports.timeToFirstByte = exports.firstContentfulPaint = exports.cumulativeLayoutShift = exports.firstInputDelay = exports.largestContentfulPaint = exports.Action = void 0;
    var web_vitals_1 = require_web_vitals_umd();
    var WebVitals_1 = require_WebVitals();
    Object.defineProperty(exports, "Action", { enumerable: true, get: function() {
      return WebVitals_1.Action;
    } });
    var env_1 = require_env2();
    var types_1 = require_types3();
    var helper_1 = require_helper2();
    var platform_1 = require_platform();
    function largestContentfulPaint(payload) {
      return helper_1.actionWrapper({
        group: types_1.Group.WebVitals,
        type: WebVitals_1.Action.LARGEST_CONTENTFUL_PAINT,
        payload
      });
    }
    exports.largestContentfulPaint = largestContentfulPaint;
    function firstInputDelay(payload) {
      return helper_1.actionWrapper({
        group: types_1.Group.WebVitals,
        type: WebVitals_1.Action.FIRST_INPUT_DELAY,
        payload
      });
    }
    exports.firstInputDelay = firstInputDelay;
    function cumulativeLayoutShift(payload) {
      return helper_1.actionWrapper({
        group: types_1.Group.WebVitals,
        type: WebVitals_1.Action.CUMULATIVE_LAYOUT_SHIFT,
        payload
      });
    }
    exports.cumulativeLayoutShift = cumulativeLayoutShift;
    function firstContentfulPaint(payload) {
      return helper_1.actionWrapper({
        group: types_1.Group.WebVitals,
        type: WebVitals_1.Action.FIRST_CONTENTFUL_PAINT,
        payload
      });
    }
    exports.firstContentfulPaint = firstContentfulPaint;
    function timeToFirstByte(payload) {
      return helper_1.actionWrapper({
        group: types_1.Group.WebVitals,
        type: WebVitals_1.Action.TIME_TO_FIRST_BYTE,
        payload
      });
    }
    exports.timeToFirstByte = timeToFirstByte;
    function interactionToNextPaint(payload) {
      return helper_1.actionWrapper({
        group: types_1.Group.WebVitals,
        type: WebVitals_1.Action.INTERACTION_TO_NEXT_PAINT,
        payload
      });
    }
    exports.interactionToNextPaint = interactionToNextPaint;
    function initializeWebVitals(app) {
      function onReport(cb) {
        return function(data) {
          var id = data.id, metricName = data.name, value = data.value;
          var payload = { id, metricName, value };
          var event = cb(payload);
          app.dispatch(event);
        };
      }
      var untypedWindow = window;
      if (env_1.isServer || env_1.isClient && untypedWindow.__is_web_vitals_initialized__ || platform_1.isMobile()) {
        return;
      }
      untypedWindow.__is_web_vitals_initialized__ = true;
      web_vitals_1.onLCP(onReport(largestContentfulPaint));
      web_vitals_1.onFID(onReport(firstInputDelay));
      web_vitals_1.onCLS(onReport(cumulativeLayoutShift));
      web_vitals_1.onFCP(onReport(firstContentfulPaint));
      web_vitals_1.onTTFB(onReport(timeToFirstByte));
      web_vitals_1.onINP(onReport(interactionToNextPaint));
    }
    exports.initializeWebVitals = initializeWebVitals;
  }
});

// node_modules/@shopify/app-bridge/actions/WebVitals/index.js
var require_WebVitals2 = __commonJS({
  "node_modules/@shopify/app-bridge/actions/WebVitals/index.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      Object.defineProperty(o, k2, { enumerable: true, get: function() {
        return m[k];
      } });
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __exportStar = exports && exports.__exportStar || function(m, exports2) {
      for (var p in m)
        if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p))
          __createBinding(exports2, m, p);
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    __exportStar(require_actions4(), exports);
  }
});

// node_modules/@shopify/app-bridge/actions/validator.js
var require_validator2 = __commonJS({
  "node_modules/@shopify/app-bridge/actions/validator.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.isFromApp = exports.isPerformanceOrWebVitalsAction = exports.getPermissionKey = exports.isPermitted = exports.isAppMessage = exports.isAppBridgeAction = void 0;
    var validator_1 = require_validator();
    Object.defineProperty(exports, "isAppBridgeAction", { enumerable: true, get: function() {
      return validator_1.isAppBridgeAction;
    } });
    Object.defineProperty(exports, "isAppMessage", { enumerable: true, get: function() {
      return validator_1.isAppMessage;
    } });
    Object.defineProperty(exports, "isPermitted", { enumerable: true, get: function() {
      return validator_1.isPermitted;
    } });
    Object.defineProperty(exports, "getPermissionKey", { enumerable: true, get: function() {
      return validator_1.getPermissionKey;
    } });
    Object.defineProperty(exports, "isPerformanceOrWebVitalsAction", { enumerable: true, get: function() {
      return validator_1.isPerformanceOrWebVitalsAction;
    } });
    function isFromApp(action) {
      if (typeof action !== "object" || typeof action.source !== "object") {
        return false;
      }
      return typeof action.source.apiKey === "string";
    }
    exports.isFromApp = isFromApp;
  }
});

// node_modules/@shopify/app-bridge/actions/index.js
var require_actions5 = __commonJS({
  "node_modules/@shopify/app-bridge/actions/index.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      Object.defineProperty(o, k2, { enumerable: true, get: function() {
        return m[k];
      } });
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? function(o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
    } : function(o, v) {
      o["default"] = v;
    });
    var __importStar = exports && exports.__importStar || function(mod) {
      if (mod && mod.__esModule)
        return mod;
      var result = {};
      if (mod != null) {
        for (var k in mod)
          if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
            __createBinding(result, mod, k);
      }
      __setModuleDefault(result, mod);
      return result;
    };
    var __exportStar = exports && exports.__exportStar || function(m, exports2) {
      for (var p in m)
        if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p))
          __createBinding(exports2, m, p);
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.WebVitals = exports.unstable_Picker = exports.Performance = exports.Pos = exports.AppLink = exports.ChannelMenu = exports.NavigationMenu = exports.Share = exports.ContextualSaveBar = exports.MarketingExternalActivityTopBar = exports.TitleBar = exports.SessionToken = exports.ResourcePicker = exports.Redirect = exports.Print = exports.ModalContent = exports.Modal = exports.Loading = exports.LeaveConfirmation = exports.History = exports.Toast = exports.Fullscreen = exports.FeedbackModal = exports.Features = exports.Flash = exports.Error = exports.Client = exports.Cart = exports.Scanner = exports.ButtonGroup = exports.Button = exports.AuthCode = exports.isAppBridgeAction = void 0;
    var AuthCode = __importStar(require_AuthCode2());
    exports.AuthCode = AuthCode;
    var Button = __importStar(require_Button2());
    exports.Button = Button;
    var ButtonGroup = __importStar(require_ButtonGroup2());
    exports.ButtonGroup = ButtonGroup;
    var Cart = __importStar(require_Cart2());
    exports.Cart = Cart;
    var Client = __importStar(require_Client2());
    exports.Client = Client;
    var Error2 = __importStar(require_Error2());
    exports.Error = Error2;
    var Flash = __importStar(require_Flash());
    exports.Flash = Flash;
    var Features = __importStar(require_Features2());
    exports.Features = Features;
    var FeedbackModal = __importStar(require_FeedbackModal2());
    exports.FeedbackModal = FeedbackModal;
    var Fullscreen = __importStar(require_Fullscreen2());
    exports.Fullscreen = Fullscreen;
    var LeaveConfirmation = __importStar(require_LeaveConfirmation2());
    exports.LeaveConfirmation = LeaveConfirmation;
    var Loading = __importStar(require_Loading2());
    exports.Loading = Loading;
    var Modal = __importStar(require_Modal2());
    exports.Modal = Modal;
    var ModalContent = __importStar(require_ModalContent2());
    exports.ModalContent = ModalContent;
    var History = __importStar(require_History2());
    exports.History = History;
    var Redirect = __importStar(require_Redirect2());
    exports.Redirect = Redirect;
    var Print = __importStar(require_Print2());
    exports.Print = Print;
    var ResourcePicker = __importStar(require_ResourcePicker2());
    exports.ResourcePicker = ResourcePicker;
    var Scanner = __importStar(require_Scanner2());
    exports.Scanner = Scanner;
    var SessionToken = __importStar(require_SessionToken2());
    exports.SessionToken = SessionToken;
    var TitleBar = __importStar(require_TitleBar2());
    exports.TitleBar = TitleBar;
    var Toast = __importStar(require_Toast2());
    exports.Toast = Toast;
    var ContextualSaveBar = __importStar(require_ContextualSaveBar2());
    exports.ContextualSaveBar = ContextualSaveBar;
    var Share = __importStar(require_Share2());
    exports.Share = Share;
    var NavigationMenu = __importStar(require_NavigationMenu2());
    exports.NavigationMenu = NavigationMenu;
    var ChannelMenu = __importStar(require_ChannelMenu2());
    exports.ChannelMenu = ChannelMenu;
    var AppLink = __importStar(require_AppLink2());
    exports.AppLink = AppLink;
    var Pos = __importStar(require_Pos2());
    exports.Pos = Pos;
    var MarketingExternalActivityTopBar = __importStar(require_MarketingExternalActivityTopBar2());
    exports.MarketingExternalActivityTopBar = MarketingExternalActivityTopBar;
    var Performance = __importStar(require_Performance2());
    exports.Performance = Performance;
    var unstable_Picker = __importStar(require_Picker2());
    exports.unstable_Picker = unstable_Picker;
    var WebVitals = __importStar(require_WebVitals2());
    exports.WebVitals = WebVitals;
    var validator_1 = require_validator2();
    Object.defineProperty(exports, "isAppBridgeAction", { enumerable: true, get: function() {
      return validator_1.isAppBridgeAction;
    } });
    __exportStar(require_types3(), exports);
  }
});

// node_modules/@shopify/app-bridge/utilities/session-token/authenticated-fetch.js
var require_authenticated_fetch = __commonJS({
  "node_modules/@shopify/app-bridge/utilities/session-token/authenticated-fetch.js"(exports) {
    "use strict";
    var __assign = exports && exports.__assign || function() {
      __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p))
              t[p] = s[p];
        }
        return t;
      };
      return __assign.apply(this, arguments);
    };
    var __awaiter = exports && exports.__awaiter || function(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
          resolve(value);
        });
      }
      return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }
        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }
        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    };
    var __generator = exports && exports.__generator || function(thisArg, body) {
      var _ = { label: 0, sent: function() {
        if (t[0] & 1)
          throw t[1];
        return t[1];
      }, trys: [], ops: [] }, f, y, t, g;
      return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
        return this;
      }), g;
      function verb(n) {
        return function(v) {
          return step([n, v]);
        };
      }
      function step(op) {
        if (f)
          throw new TypeError("Generator is already executing.");
        while (_)
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
              return t;
            if (y = 0, t)
              op = [op[0] & 2, t.value];
            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;
              case 4:
                _.label++;
                return { value: op[1], done: false };
              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;
              case 7:
                op = _.ops.pop();
                _.trys.pop();
                continue;
              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }
                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }
                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }
                if (t && _.label < t[2]) {
                  _.label = t[2];
                  _.ops.push(op);
                  break;
                }
                if (t[2])
                  _.ops.pop();
                _.trys.pop();
                continue;
            }
            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        if (op[0] & 5)
          throw op[1];
        return { value: op[0] ? op[1] : void 0, done: true };
      }
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.authenticatedFetch = void 0;
    var actions_1 = require_actions5();
    var session_token_1 = require_session_token();
    function authenticatedFetch(app, fetchOperationOrOptions) {
      var _this = this;
      if (fetchOperationOrOptions === void 0) {
        fetchOperationOrOptions = void 0;
      }
      return function(uri, options) {
        if (options === void 0) {
          options = {};
        }
        return __awaiter(_this, void 0, void 0, function() {
          var sessionToken, headers, finalHeaders, authenticatedFetchOptions, fetchOperation, response, reauthorizeUrl_1, requestFailureReauthorizeUrlHeader_1;
          var _a;
          return __generator(this, function(_b) {
            switch (_b.label) {
              case 0:
                return [4, session_token_1.getSessionToken(app)];
              case 1:
                sessionToken = _b.sent();
                headers = new Headers(options.headers);
                headers.append("Authorization", "Bearer " + sessionToken);
                headers.append("X-Requested-With", "XMLHttpRequest");
                finalHeaders = {};
                headers.forEach(function(value, key) {
                  finalHeaders[key] = value;
                });
                authenticatedFetchOptions = typeof fetchOperationOrOptions === "object" ? fetchOperationOrOptions : void 0;
                fetchOperation = typeof fetchOperationOrOptions === "function" ? fetchOperationOrOptions : (_a = authenticatedFetchOptions === null || authenticatedFetchOptions === void 0 ? void 0 : authenticatedFetchOptions.fetchOperation) !== null && _a !== void 0 ? _a : fetch;
                return [4, fetchOperation(uri, __assign(__assign({}, options), { headers: finalHeaders }))];
              case 2:
                response = _b.sent();
                if (authenticatedFetchOptions) {
                  reauthorizeUrl_1 = authenticatedFetchOptions.reauthorizeUrl, requestFailureReauthorizeUrlHeader_1 = authenticatedFetchOptions.requestFailureReauthorizeUrlHeader;
                  response.headers.forEach(function(value, name) {
                    if (requestFailureReauthorizeUrlHeader_1.toLowerCase() === name.toLowerCase()) {
                      var redirectUrl = new URL(reauthorizeUrl_1 || value, location.href).href;
                      var redirect = actions_1.Redirect.create(app);
                      if (redirectUrl) {
                        redirect.dispatch(actions_1.Redirect.Action.REMOTE, redirectUrl);
                      } else {
                        console.warn("Couldn't find a fallback auth path to redirect to.");
                      }
                    }
                  });
                }
                return [2, response];
            }
          });
        });
      };
    }
    exports.authenticatedFetch = authenticatedFetch;
  }
});

// node_modules/@shopify/app-bridge/utilities/session-token/index.js
var require_session_token2 = __commonJS({
  "node_modules/@shopify/app-bridge/utilities/session-token/index.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      Object.defineProperty(o, k2, { enumerable: true, get: function() {
        return m[k];
      } });
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __exportStar = exports && exports.__exportStar || function(m, exports2) {
      for (var p in m)
        if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p))
          __createBinding(exports2, m, p);
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    __exportStar(require_session_token(), exports);
    __exportStar(require_authenticated_fetch(), exports);
  }
});

// node_modules/@shopify/app-bridge/actions/uuid.js
var require_uuid2 = __commonJS({
  "node_modules/@shopify/app-bridge/actions/uuid.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.generateUuid = void 0;
    var uuid_1 = require_uuid();
    Object.defineProperty(exports, "generateUuid", { enumerable: true, get: function() {
      return uuid_1.generateUuid;
    } });
    exports.default = uuid_1.generateUuid;
  }
});

// node_modules/@shopify/app-bridge/utilities/authorization-code/authorization-code.js
var require_authorization_code = __commonJS({
  "node_modules/@shopify/app-bridge/utilities/authorization-code/authorization-code.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      Object.defineProperty(o, k2, { enumerable: true, get: function() {
        return m[k];
      } });
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? function(o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
    } : function(o, v) {
      o["default"] = v;
    });
    var __importStar = exports && exports.__importStar || function(mod) {
      if (mod && mod.__esModule)
        return mod;
      var result = {};
      if (mod != null) {
        for (var k in mod)
          if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
            __createBinding(result, mod, k);
      }
      __setModuleDefault(result, mod);
      return result;
    };
    var __awaiter = exports && exports.__awaiter || function(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
          resolve(value);
        });
      }
      return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }
        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }
        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    };
    var __generator = exports && exports.__generator || function(thisArg, body) {
      var _ = { label: 0, sent: function() {
        if (t[0] & 1)
          throw t[1];
        return t[1];
      }, trys: [], ops: [] }, f, y, t, g;
      return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
        return this;
      }), g;
      function verb(n) {
        return function(v) {
          return step([n, v]);
        };
      }
      function step(op) {
        if (f)
          throw new TypeError("Generator is already executing.");
        while (_)
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
              return t;
            if (y = 0, t)
              op = [op[0] & 2, t.value];
            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;
              case 4:
                _.label++;
                return { value: op[1], done: false };
              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;
              case 7:
                op = _.ops.pop();
                _.trys.pop();
                continue;
              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }
                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }
                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }
                if (t && _.label < t[2]) {
                  _.label = t[2];
                  _.ops.push(op);
                  break;
                }
                if (t[2])
                  _.ops.pop();
                _.trys.pop();
                continue;
            }
            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        if (op[0] & 5)
          throw op[1];
        return { value: op[0] ? op[1] : void 0, done: true };
      }
    };
    var __importDefault = exports && exports.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.getAuthorizationCodePayload = void 0;
    var AuthCode = __importStar(require_AuthCode2());
    var Error_1 = require_Error2();
    var uuid_1 = __importDefault(require_uuid2());
    function getAuthorizationCodePayload(app) {
      return __awaiter(this, void 0, void 0, function() {
        return __generator(this, function(_a) {
          return [2, new Promise(function(resolve, reject) {
            var requestId = uuid_1.default();
            var unsubscribe = app.subscribe(AuthCode.Action.RESPOND, function(payload) {
              switch (payload === null || payload === void 0 ? void 0 : payload.status) {
                case "needsExchange":
                  resolve(payload);
                  break;
                default:
                  reject(Error_1.fromAction("Failed to retrieve an authorization code", Error_1.Action.FAILED_AUTHENTICATION));
              }
              unsubscribe();
            }, requestId);
            app.dispatch(AuthCode.request(requestId));
          })];
        });
      });
    }
    exports.getAuthorizationCodePayload = getAuthorizationCodePayload;
  }
});

// node_modules/@shopify/app-bridge/utilities/authorization-code/user-authorized-fetch.js
var require_user_authorized_fetch = __commonJS({
  "node_modules/@shopify/app-bridge/utilities/authorization-code/user-authorized-fetch.js"(exports) {
    "use strict";
    var __awaiter = exports && exports.__awaiter || function(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
          resolve(value);
        });
      }
      return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }
        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }
        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    };
    var __generator = exports && exports.__generator || function(thisArg, body) {
      var _ = { label: 0, sent: function() {
        if (t[0] & 1)
          throw t[1];
        return t[1];
      }, trys: [], ops: [] }, f, y, t, g;
      return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
        return this;
      }), g;
      function verb(n) {
        return function(v) {
          return step([n, v]);
        };
      }
      function step(op) {
        if (f)
          throw new TypeError("Generator is already executing.");
        while (_)
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
              return t;
            if (y = 0, t)
              op = [op[0] & 2, t.value];
            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;
              case 4:
                _.label++;
                return { value: op[1], done: false };
              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;
              case 7:
                op = _.ops.pop();
                _.trys.pop();
                continue;
              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }
                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }
                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }
                if (t && _.label < t[2]) {
                  _.label = t[2];
                  _.ops.push(op);
                  break;
                }
                if (t[2])
                  _.ops.pop();
                _.trys.pop();
                continue;
            }
            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        if (op[0] & 5)
          throw op[1];
        return { value: op[0] ? op[1] : void 0, done: true };
      }
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.userAuthorizedFetch = void 0;
    var authorization_code_1 = require_authorization_code();
    var DEFAULT_CALLBACK_URI = "auth/shopify/callback";
    function needsAuthorizationCode(response) {
      var headerValue = response.headers.get("X-Shopify-API-Request-Failure-Unauthorized");
      if (headerValue) {
        return headerValue.toLowerCase() === "true";
      }
      return false;
    }
    function userAuthorizedFetch(_a) {
      var _this = this;
      var app = _a.app, _b = _a.callbackUri, callbackUri = _b === void 0 ? DEFAULT_CALLBACK_URI : _b, _c3 = _a.isAuthorizationCodeRequired, isAuthorizationCodeRequired = _c3 === void 0 ? needsAuthorizationCode : _c3, fetchOperation = _a.fetchOperation;
      return function(uri, options) {
        return __awaiter(_this, void 0, void 0, function() {
          var response, _a2, code, hmac, shop, timestamp, formattedCallbackUri, callbackResponse;
          return __generator(this, function(_b2) {
            switch (_b2.label) {
              case 0:
                return [4, fetchOperation(uri, options)];
              case 1:
                response = _b2.sent();
                if (!isAuthorizationCodeRequired(response)) {
                  return [2, response];
                }
                return [4, authorization_code_1.getAuthorizationCodePayload(app)];
              case 2:
                _a2 = _b2.sent(), code = _a2.code, hmac = _a2.hmac, shop = _a2.shop, timestamp = _a2.timestamp;
                formattedCallbackUri = encodeURI("https://" + window.location.hostname + "/" + callbackUri + "?code=" + code + "&hmac=" + hmac + "&shop=" + shop + "&timestamp=" + timestamp);
                return [4, fetchOperation(formattedCallbackUri, {})];
              case 3:
                callbackResponse = _b2.sent();
                if (!callbackResponse.ok) {
                  throw new Error("Failed to authorize request.");
                }
                return [2, fetchOperation(uri, options)];
            }
          });
        });
      };
    }
    exports.userAuthorizedFetch = userAuthorizedFetch;
  }
});

// node_modules/@shopify/app-bridge/utilities/authorization-code/index.js
var require_authorization_code2 = __commonJS({
  "node_modules/@shopify/app-bridge/utilities/authorization-code/index.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      Object.defineProperty(o, k2, { enumerable: true, get: function() {
        return m[k];
      } });
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __exportStar = exports && exports.__exportStar || function(m, exports2) {
      for (var p in m)
        if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p))
          __createBinding(exports2, m, p);
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    __exportStar(require_authorization_code(), exports);
    __exportStar(require_user_authorized_fetch(), exports);
  }
});

// node_modules/@shopify/app-bridge/utilities/index.js
var require_utilities = __commonJS({
  "node_modules/@shopify/app-bridge/utilities/index.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      Object.defineProperty(o, k2, { enumerable: true, get: function() {
        return m[k];
      } });
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __exportStar = exports && exports.__exportStar || function(m, exports2) {
      for (var p in m)
        if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p))
          __createBinding(exports2, m, p);
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    __exportStar(require_modal(), exports);
    __exportStar(require_platform(), exports);
    __exportStar(require_session_token2(), exports);
    __exportStar(require_authorization_code2(), exports);
  }
});

// node_modules/@shopify/app-bridge-react/hooks/useAuthenticatedFetch/useAuthenticatedFetch.js
var require_useAuthenticatedFetch = __commonJS({
  "node_modules/@shopify/app-bridge-react/hooks/useAuthenticatedFetch/useAuthenticatedFetch.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.useAuthenticatedFetch = void 0;
    var react_1 = require_react();
    var utilities_1 = require_utilities();
    var useAppBridge_1 = require_useAppBridge();
    function useAuthenticatedFetch(options) {
      if (options === void 0) {
        options = void 0;
      }
      var app = useAppBridge_1.useAppBridge();
      var fetchFunction = react_1.useMemo(function() {
        return utilities_1.authenticatedFetch(app, options);
      }, [app, options]);
      return fetchFunction;
    }
    exports.useAuthenticatedFetch = useAuthenticatedFetch;
  }
});

// node_modules/@shopify/app-bridge-react/hooks/useAuthenticatedFetch/index.js
var require_useAuthenticatedFetch2 = __commonJS({
  "node_modules/@shopify/app-bridge-react/hooks/useAuthenticatedFetch/index.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      Object.defineProperty(o, k2, { enumerable: true, get: function() {
        return m[k];
      } });
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __exportStar = exports && exports.__exportStar || function(m, exports2) {
      for (var p in m)
        if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p))
          __createBinding(exports2, m, p);
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    __exportStar(require_useAuthenticatedFetch(), exports);
  }
});

// node_modules/@shopify/app-bridge-react/hooks/useContextualSaveBar/useContextualSaveBar.js
var require_useContextualSaveBar = __commonJS({
  "node_modules/@shopify/app-bridge-react/hooks/useContextualSaveBar/useContextualSaveBar.js"(exports) {
    "use strict";
    var __rest = exports && exports.__rest || function(s, e) {
      var t = {};
      for (var p in s)
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
          t[p] = s[p];
      if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
          if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
            t[p[i]] = s[p[i]];
        }
      return t;
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.useContextualSaveBar = void 0;
    var react_1 = require_react();
    var ContextualSaveBar_1 = require_ContextualSaveBar2();
    var useAppBridge_1 = require_useAppBridge();
    function useContextualSaveBar() {
      var app = useAppBridge_1.useAppBridge();
      var visibleRef = react_1.useRef(false);
      var _a = react_1.useState(), onSaveAction = _a[0], setOnSaveAction = _a[1];
      var _b = react_1.useState(), onDiscardAction = _b[0], setOnDiscardAction = _b[1];
      var contextualSaveBar = react_1.useMemo(function() {
        return ContextualSaveBar_1.create(app);
      }, [app]);
      var show = react_1.useCallback(function(options) {
        if (options) {
          contextualSaveBar.set(options, false);
        }
        contextualSaveBar.dispatch(ContextualSaveBar_1.Action.SHOW);
        visibleRef.current = true;
      }, [contextualSaveBar]);
      var hide = react_1.useCallback(function() {
        contextualSaveBar.dispatch(ContextualSaveBar_1.Action.HIDE);
        visibleRef.current = false;
      }, [contextualSaveBar]);
      var saveAction = react_1.useMemo(function() {
        return {
          setOptions: function(_a2) {
            var onAction = _a2.onAction, saveAction2 = __rest(_a2, ["onAction"]);
            var shouldUpdate = JSON.stringify(contextualSaveBar.options.saveAction) !== JSON.stringify(saveAction2) && visibleRef.current;
            setOnSaveAction(function() {
              return onAction;
            });
            contextualSaveBar.set({ saveAction: saveAction2 }, shouldUpdate);
          }
        };
      }, [contextualSaveBar]);
      var discardAction = react_1.useMemo(function() {
        return {
          setOptions: function(_a2) {
            var onAction = _a2.onAction, discardAction2 = __rest(_a2, ["onAction"]);
            var shouldUpdate = JSON.stringify(contextualSaveBar.options.discardAction) !== JSON.stringify(discardAction2) && visibleRef.current;
            setOnDiscardAction(function() {
              return onAction;
            });
            contextualSaveBar.set({ discardAction: discardAction2 }, shouldUpdate);
          }
        };
      }, [contextualSaveBar]);
      react_1.useEffect(function() {
        return function() {
          if (visibleRef.current) {
            hide();
          }
        };
      }, []);
      react_1.useEffect(function() {
        return contextualSaveBar.subscribe(ContextualSaveBar_1.Action.DISCARD, function() {
          onDiscardAction === null || onDiscardAction === void 0 ? void 0 : onDiscardAction();
        });
      }, [contextualSaveBar, onDiscardAction]);
      react_1.useEffect(function() {
        return contextualSaveBar.subscribe(ContextualSaveBar_1.Action.SAVE, function() {
          onSaveAction === null || onSaveAction === void 0 ? void 0 : onSaveAction();
        });
      }, [contextualSaveBar, onSaveAction]);
      return { show, hide, saveAction, discardAction };
    }
    exports.useContextualSaveBar = useContextualSaveBar;
  }
});

// node_modules/@shopify/app-bridge-react/hooks/useContextualSaveBar/index.js
var require_useContextualSaveBar2 = __commonJS({
  "node_modules/@shopify/app-bridge-react/hooks/useContextualSaveBar/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.useContextualSaveBar = void 0;
    var useContextualSaveBar_1 = require_useContextualSaveBar();
    Object.defineProperty(exports, "useContextualSaveBar", { enumerable: true, get: function() {
      return useContextualSaveBar_1.useContextualSaveBar;
    } });
  }
});

// node_modules/@shopify/app-bridge-react/hooks/useFeaturesAvailable/useFeaturesAvailable.js
var require_useFeaturesAvailable = __commonJS({
  "node_modules/@shopify/app-bridge-react/hooks/useFeaturesAvailable/useFeaturesAvailable.js"(exports) {
    "use strict";
    var __awaiter = exports && exports.__awaiter || function(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
          resolve(value);
        });
      }
      return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }
        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }
        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    };
    var __generator = exports && exports.__generator || function(thisArg, body) {
      var _ = { label: 0, sent: function() {
        if (t[0] & 1)
          throw t[1];
        return t[1];
      }, trys: [], ops: [] }, f, y, t, g;
      return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
        return this;
      }), g;
      function verb(n) {
        return function(v) {
          return step([n, v]);
        };
      }
      function step(op) {
        if (f)
          throw new TypeError("Generator is already executing.");
        while (_)
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
              return t;
            if (y = 0, t)
              op = [op[0] & 2, t.value];
            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;
              case 4:
                _.label++;
                return { value: op[1], done: false };
              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;
              case 7:
                op = _.ops.pop();
                _.trys.pop();
                continue;
              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }
                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }
                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }
                if (t && _.label < t[2]) {
                  _.label = t[2];
                  _.ops.push(op);
                  break;
                }
                if (t[2])
                  _.ops.pop();
                _.trys.pop();
                continue;
            }
            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        if (op[0] & 5)
          throw op[1];
        return { value: op[0] ? op[1] : void 0, done: true };
      }
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.useFeaturesAvailable = void 0;
    var react_1 = require_react();
    var types_1 = require_types5();
    var useAppBridge_1 = require_useAppBridge();
    function useFeaturesAvailable() {
      var _this = this;
      var query = [];
      for (var _i = 0; _i < arguments.length; _i++) {
        query[_i] = arguments[_i];
      }
      var app = useAppBridge_1.useAppBridge();
      var _a = react_1.useState(), state = _a[0], setState = _a[1];
      var queryRef = react_1.useRef([]);
      var refresh = react_1.useCallback(function() {
        var isUnmounted = false;
        (function() {
          return __awaiter(_this, void 0, void 0, function() {
            var features;
            return __generator(this, function(_a2) {
              switch (_a2.label) {
                case 0:
                  return [4, app.featuresAvailable.apply(app, queryRef.current)];
                case 1:
                  features = _a2.sent();
                  if (!isUnmounted) {
                    setState(function(currentFeatures) {
                      if (JSON.stringify(currentFeatures) === JSON.stringify(features)) {
                        return currentFeatures;
                      }
                      return features;
                    });
                  }
                  return [
                    2
                    /*return*/
                  ];
              }
            });
          });
        })();
        return function() {
          isUnmounted = true;
        };
      }, [app]);
      react_1.useEffect(function() {
        queryRef.current = query;
        return refresh();
      }, [JSON.stringify(query)]);
      react_1.useEffect(function() {
        var onRefreshCleanup;
        var unsubscribe = app.subscribe(types_1.Action.UPDATE, function() {
          onRefreshCleanup = refresh();
        });
        return function() {
          unsubscribe();
          onRefreshCleanup === null || onRefreshCleanup === void 0 ? void 0 : onRefreshCleanup();
        };
      }, [app, refresh]);
      return state;
    }
    exports.useFeaturesAvailable = useFeaturesAvailable;
  }
});

// node_modules/@shopify/app-bridge-react/hooks/useFeaturesAvailable/index.js
var require_useFeaturesAvailable2 = __commonJS({
  "node_modules/@shopify/app-bridge-react/hooks/useFeaturesAvailable/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.useFeaturesAvailable = void 0;
    var useFeaturesAvailable_1 = require_useFeaturesAvailable();
    Object.defineProperty(exports, "useFeaturesAvailable", { enumerable: true, get: function() {
      return useFeaturesAvailable_1.useFeaturesAvailable;
    } });
  }
});

// node_modules/@shopify/app-bridge-react/hooks/useFeatureRequest/useFeatureRequest.js
var require_useFeatureRequest = __commonJS({
  "node_modules/@shopify/app-bridge-react/hooks/useFeatureRequest/useFeatureRequest.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.useFeatureRequest = void 0;
    var react_1 = require_react();
    var Features_1 = require_Features2();
    var useAppBridge_1 = require_useAppBridge();
    var useFeaturesAvailable_1 = require_useFeaturesAvailable2();
    function useFeatureRequest(group, action) {
      var app = useAppBridge_1.useAppBridge();
      var featuresAvailable = useFeaturesAvailable_1.useFeaturesAvailable();
      var _a = react_1.useState(), feature = _a[0], setFeature = _a[1];
      var handleFeatureUpdate = react_1.useCallback(function(featuresAvailable2) {
        var updatedFeatures = featuresAvailable2 === null || featuresAvailable2 === void 0 ? void 0 : featuresAvailable2[group];
        if (action && (updatedFeatures === null || updatedFeatures === void 0 ? void 0 : updatedFeatures[action])) {
          var actionPermission_1 = updatedFeatures === null || updatedFeatures === void 0 ? void 0 : updatedFeatures[action];
          setFeature(function(currentState) {
            if (JSON.stringify(actionPermission_1) !== JSON.stringify(currentState)) {
              return actionPermission_1;
            }
            return currentState;
          });
          return;
        }
        setFeature(function(currentState) {
          if (JSON.stringify(updatedFeatures) !== JSON.stringify(currentState)) {
            return updatedFeatures;
          }
          return currentState;
        });
      }, [group, action]);
      react_1.useEffect(function() {
        Features_1.create(app).dispatch(Features_1.Action.REQUEST, { feature: group, action });
      }, [app, group, action]);
      react_1.useEffect(function() {
        handleFeatureUpdate(featuresAvailable);
      }, [featuresAvailable, handleFeatureUpdate]);
      return feature;
    }
    exports.useFeatureRequest = useFeatureRequest;
  }
});

// node_modules/@shopify/app-bridge-react/hooks/useFeatureRequest/index.js
var require_useFeatureRequest2 = __commonJS({
  "node_modules/@shopify/app-bridge-react/hooks/useFeatureRequest/index.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      Object.defineProperty(o, k2, { enumerable: true, get: function() {
        return m[k];
      } });
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __exportStar = exports && exports.__exportStar || function(m, exports2) {
      for (var p in m)
        if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p))
          __createBinding(exports2, m, p);
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    __exportStar(require_useFeatureRequest(), exports);
  }
});

// node_modules/@shopify/app-bridge-react/hooks/useLocale/useLocale.js
var require_useLocale = __commonJS({
  "node_modules/@shopify/app-bridge-react/hooks/useLocale/useLocale.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.useLocale = void 0;
    var useAppBridgeState_1 = require_useAppBridgeState2();
    function useLocale() {
      return useAppBridgeState_1.useAppBridgeState("staffMember.locale");
    }
    exports.useLocale = useLocale;
  }
});

// node_modules/@shopify/app-bridge-react/hooks/useLocale/index.js
var require_useLocale2 = __commonJS({
  "node_modules/@shopify/app-bridge-react/hooks/useLocale/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.useLocale = void 0;
    var useLocale_1 = require_useLocale();
    Object.defineProperty(exports, "useLocale", { enumerable: true, get: function() {
      return useLocale_1.useLocale;
    } });
  }
});

// node_modules/@shopify/app-bridge-react/hooks/useNavigationHistory/useNavigationHistory.js
var require_useNavigationHistory = __commonJS({
  "node_modules/@shopify/app-bridge-react/hooks/useNavigationHistory/useNavigationHistory.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.useNavigationHistory = void 0;
    var react_1 = require_react();
    var actions_1 = require_actions5();
    var useAppBridge_1 = require_useAppBridge();
    function useNavigationHistory() {
      var app = useAppBridge_1.useAppBridge();
      return react_1.useMemo(function() {
        var history = actions_1.History.create(app);
        function push(location2) {
          history.dispatch(actions_1.History.Action.PUSH, location2.pathname);
        }
        function replace(location2) {
          history.dispatch(actions_1.History.Action.REPLACE, location2.pathname);
        }
        return { push, replace };
      }, []);
    }
    exports.useNavigationHistory = useNavigationHistory;
  }
});

// node_modules/@shopify/app-bridge-react/hooks/useNavigationHistory/index.js
var require_useNavigationHistory2 = __commonJS({
  "node_modules/@shopify/app-bridge-react/hooks/useNavigationHistory/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.useNavigationHistory = void 0;
    var useNavigationHistory_1 = require_useNavigationHistory();
    Object.defineProperty(exports, "useNavigationHistory", { enumerable: true, get: function() {
      return useNavigationHistory_1.useNavigationHistory;
    } });
  }
});

// node_modules/@shopify/app-bridge-react/hooks/useNavigate/useNavigate.js
var require_useNavigate = __commonJS({
  "node_modules/@shopify/app-bridge-react/hooks/useNavigate/useNavigate.js"(exports) {
    "use strict";
    var __assign = exports && exports.__assign || function() {
      __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p))
              t[p] = s[p];
        }
        return t;
      };
      return __assign.apply(this, arguments);
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.useNavigate = void 0;
    var react_1 = require_react();
    var Redirect_1 = require_Redirect2();
    var useAppBridge_1 = require_useAppBridge();
    var useNavigationHistory_1 = require_useNavigationHistory2();
    function useNavigate() {
      var app = useAppBridge_1.useAppBridge();
      var history = useNavigationHistory_1.useNavigationHistory();
      var redirect = react_1.useMemo(function() {
        return Redirect_1.create(app);
      }, [app]);
      var handleRedirect = react_1.useCallback(function(to, options) {
        var url = Redirect_1.normalizeUrl(to);
        var isAppUrl = url.startsWith(app.localOrigin);
        var isHostUrl = url.startsWith(app.hostOrigin);
        var isRelative = url.startsWith("/");
        if (isAppUrl || isHostUrl || isRelative) {
          var path = Redirect_1.getRelativePath(url);
          if (isHostUrl || (options === null || options === void 0 ? void 0 : options.target) === "new" || (options === null || options === void 0 ? void 0 : options.target) === "host") {
            redirect.dispatch(Redirect_1.Action.ADMIN_PATH, {
              path: path.replace(/^\/admin/, ""),
              newContext: (options === null || options === void 0 ? void 0 : options.target) === "new"
            });
            return;
          }
          if (((options === null || options === void 0 ? void 0 : options.target) === "self" || !(options === null || options === void 0 ? void 0 : options.target)) && (options === null || options === void 0 ? void 0 : options.replace)) {
            history.replace({ pathname: path });
            return;
          }
          redirect.dispatch(Redirect_1.Action.APP, path);
          return;
        }
        redirect.dispatch(Redirect_1.Action.REMOTE, {
          url,
          newContext: (options === null || options === void 0 ? void 0 : options.target) === "new"
        });
      }, [redirect, history]);
      return react_1.useCallback(function(to, options) {
        if (Redirect_1.isAdminSection(to)) {
          var convertedSection = __assign(__assign({}, to), { name: Redirect_1.ResourceType[to.name] });
          redirect.dispatch(Redirect_1.Action.ADMIN_SECTION, {
            section: convertedSection,
            newContext: (options === null || options === void 0 ? void 0 : options.target) === "new"
          });
          return;
        }
        handleRedirect(to, options);
      }, [handleRedirect, redirect]);
    }
    exports.useNavigate = useNavigate;
  }
});

// node_modules/@shopify/app-bridge-react/hooks/useNavigate/index.js
var require_useNavigate2 = __commonJS({
  "node_modules/@shopify/app-bridge-react/hooks/useNavigate/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.useNavigate = void 0;
    var useNavigate_1 = require_useNavigate();
    Object.defineProperty(exports, "useNavigate", { enumerable: true, get: function() {
      return useNavigate_1.useNavigate;
    } });
  }
});

// node_modules/@shopify/app-bridge-react/hooks/useToast/useToast.js
var require_useToast = __commonJS({
  "node_modules/@shopify/app-bridge-react/hooks/useToast/useToast.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.useToast = exports.DEFAULT_TOAST_DURATION = void 0;
    var react_1 = require_react();
    var Toast_1 = require_Toast2();
    var useAppBridge_1 = require_useAppBridge();
    exports.DEFAULT_TOAST_DURATION = 5e3;
    function useToast() {
      var app = useAppBridge_1.useAppBridge();
      var toastList = react_1.useRef([]);
      var show = react_1.useCallback(function(content, options) {
        var toast = Toast_1.create(app, {
          message: content,
          isError: options === null || options === void 0 ? void 0 : options.isError,
          duration: (options === null || options === void 0 ? void 0 : options.duration) || exports.DEFAULT_TOAST_DURATION,
          action: options === null || options === void 0 ? void 0 : options.action
        });
        toast.dispatch(Toast_1.Action.SHOW);
        toastList.current.push(toast);
        toast.subscribe(Toast_1.Action.CLEAR, function() {
          var _a;
          (_a = options === null || options === void 0 ? void 0 : options.onDismiss) === null || _a === void 0 ? void 0 : _a.call(options);
          toastList.current.splice(toastList.current.indexOf(toast), 1);
          toast.unsubscribe();
        });
        toast.subscribe(Toast_1.Action.ACTION, function() {
          var _a, _b;
          (_b = (_a = options === null || options === void 0 ? void 0 : options.action) === null || _a === void 0 ? void 0 : _a.onAction) === null || _b === void 0 ? void 0 : _b.call(_a);
        });
      }, [app]);
      react_1.useEffect(function() {
        return function() {
          toastList.current.forEach(function(toast) {
            return toast === null || toast === void 0 ? void 0 : toast.unsubscribe();
          });
        };
      }, []);
      return { show };
    }
    exports.useToast = useToast;
  }
});

// node_modules/@shopify/app-bridge-react/hooks/useToast/index.js
var require_useToast2 = __commonJS({
  "node_modules/@shopify/app-bridge-react/hooks/useToast/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.useToast = void 0;
    var useToast_1 = require_useToast();
    Object.defineProperty(exports, "useToast", { enumerable: true, get: function() {
      return useToast_1.useToast;
    } });
  }
});

// node_modules/@shopify/app-bridge-react/hooks/index.js
var require_hooks = __commonJS({
  "node_modules/@shopify/app-bridge-react/hooks/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.useToast = exports.useNavigationHistory = exports.useNavigate = exports.useLocale = exports.useFeatureRequest = exports.useFeaturesAvailable = exports.useContextualSaveBar = exports.useAuthenticatedFetch = exports.useAppBridgeState = void 0;
    var useAppBridgeState_1 = require_useAppBridgeState2();
    Object.defineProperty(exports, "useAppBridgeState", { enumerable: true, get: function() {
      return useAppBridgeState_1.useAppBridgeState;
    } });
    var useAuthenticatedFetch_1 = require_useAuthenticatedFetch2();
    Object.defineProperty(exports, "useAuthenticatedFetch", { enumerable: true, get: function() {
      return useAuthenticatedFetch_1.useAuthenticatedFetch;
    } });
    var useContextualSaveBar_1 = require_useContextualSaveBar2();
    Object.defineProperty(exports, "useContextualSaveBar", { enumerable: true, get: function() {
      return useContextualSaveBar_1.useContextualSaveBar;
    } });
    var useFeaturesAvailable_1 = require_useFeaturesAvailable2();
    Object.defineProperty(exports, "useFeaturesAvailable", { enumerable: true, get: function() {
      return useFeaturesAvailable_1.useFeaturesAvailable;
    } });
    var useFeatureRequest_1 = require_useFeatureRequest2();
    Object.defineProperty(exports, "useFeatureRequest", { enumerable: true, get: function() {
      return useFeatureRequest_1.useFeatureRequest;
    } });
    var useLocale_1 = require_useLocale2();
    Object.defineProperty(exports, "useLocale", { enumerable: true, get: function() {
      return useLocale_1.useLocale;
    } });
    var useNavigate_1 = require_useNavigate2();
    Object.defineProperty(exports, "useNavigate", { enumerable: true, get: function() {
      return useNavigate_1.useNavigate;
    } });
    var useNavigationHistory_1 = require_useNavigationHistory2();
    Object.defineProperty(exports, "useNavigationHistory", { enumerable: true, get: function() {
      return useNavigationHistory_1.useNavigationHistory;
    } });
    var useToast_1 = require_useToast2();
    Object.defineProperty(exports, "useToast", { enumerable: true, get: function() {
      return useToast_1.useToast;
    } });
  }
});

// node_modules/@shopify/app-bridge-react/components/ContextualSaveBar/ContextualSaveBar.js
var require_ContextualSaveBar3 = __commonJS({
  "node_modules/@shopify/app-bridge-react/components/ContextualSaveBar/ContextualSaveBar.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var react_1 = require_react();
    var hooks_1 = require_hooks();
    function ContextualSaveBar(_a) {
      var _b = _a.discardAction, discardAction = _b === void 0 ? {} : _b, _c3 = _a.saveAction, saveAction = _c3 === void 0 ? {} : _c3, fullWidth = _a.fullWidth, leaveConfirmationDisable = _a.leaveConfirmationDisable, visible = _a.visible;
      var _d = hooks_1.useContextualSaveBar(), show = _d.show, hide = _d.hide, saveActionSetOptions = _d.saveAction.setOptions, discardActionSetOptions = _d.discardAction.setOptions;
      react_1.useEffect(function() {
        saveActionSetOptions(saveAction);
      }, [saveAction]);
      react_1.useEffect(function() {
        discardActionSetOptions(discardAction);
      }, [discardAction]);
      react_1.useEffect(function() {
        if (visible) {
          show({ fullWidth, leaveConfirmationDisable });
        } else {
          hide();
        }
      }, [fullWidth, leaveConfirmationDisable, visible]);
      return null;
    }
    exports.default = ContextualSaveBar;
  }
});

// node_modules/@shopify/app-bridge-react/components/ContextualSaveBar/index.js
var require_ContextualSaveBar4 = __commonJS({
  "node_modules/@shopify/app-bridge-react/components/ContextualSaveBar/index.js"(exports) {
    "use strict";
    var __importDefault = exports && exports.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    var ContextualSaveBar_1 = __importDefault(require_ContextualSaveBar3());
    exports.default = ContextualSaveBar_1.default;
  }
});

// node_modules/@shopify/app-bridge-react/components/Loading/Loading.js
var require_Loading3 = __commonJS({
  "node_modules/@shopify/app-bridge-react/components/Loading/Loading.js"(exports) {
    "use strict";
    var __extends = exports && exports.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
          d2.__proto__ = b2;
        } || function(d2, b2) {
          for (var p in b2)
            if (Object.prototype.hasOwnProperty.call(b2, p))
              d2[p] = b2[p];
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        if (typeof b !== "function" && b !== null)
          throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __importDefault = exports && exports.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    var react_1 = __importDefault(require_react());
    var actions_1 = require_actions5();
    var context_1 = require_context();
    var Loading = (
      /** @class */
      function(_super) {
        __extends(Loading2, _super);
        function Loading2() {
          return _super !== null && _super.apply(this, arguments) || this;
        }
        Loading2.prototype.componentDidMount = function() {
          var app = this.context;
          this.loading = actions_1.Loading.create(app);
          if (this.loading != null) {
            this.loading.dispatch(actions_1.Loading.Action.START);
          }
        };
        Loading2.prototype.componentWillUnmount = function() {
          if (this.loading != null) {
            this.loading.dispatch(actions_1.Loading.Action.STOP);
          }
        };
        Loading2.prototype.render = function() {
          return null;
        };
        Loading2.contextType = context_1.AppBridgeContext;
        return Loading2;
      }(react_1.default.Component)
    );
    exports.default = Loading;
  }
});

// node_modules/@shopify/app-bridge-react/components/Loading/index.js
var require_Loading4 = __commonJS({
  "node_modules/@shopify/app-bridge-react/components/Loading/index.js"(exports) {
    "use strict";
    var __importDefault = exports && exports.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    var Loading_1 = __importDefault(require_Loading3());
    exports.default = Loading_1.default;
  }
});

// node_modules/@shopify/app-bridge-react/utilities/transformers.js
var require_transformers = __commonJS({
  "node_modules/@shopify/app-bridge-react/utilities/transformers.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      Object.defineProperty(o, k2, { enumerable: true, get: function() {
        return m[k];
      } });
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? function(o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
    } : function(o, v) {
      o["default"] = v;
    });
    var __importStar = exports && exports.__importStar || function(mod) {
      if (mod && mod.__esModule)
        return mod;
      var result = {};
      if (mod != null) {
        for (var k in mod)
          if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
            __createBinding(result, mod, k);
      }
      __setModuleDefault(result, mod);
      return result;
    };
    var __spreadArray = exports && exports.__spreadArray || function(to, from) {
      for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
      return to;
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.transformActions = exports.generateRedirect = void 0;
    var Button = __importStar(require_Button2());
    var ButtonGroup = __importStar(require_ButtonGroup2());
    var Redirect = __importStar(require_Redirect2());
    function generateRedirect(appBridge, url, target, external) {
      if (target === void 0) {
        target = "APP";
      }
      if (url == null) {
        return void 0;
      }
      var redirect = Redirect.create(appBridge);
      var payload = external === true ? {
        url,
        newContext: true
      } : url;
      return function() {
        redirect.dispatch(redirectAction(target, external), payload);
      };
    }
    exports.generateRedirect = generateRedirect;
    function redirectAction(target, external) {
      if (external === true) {
        return Redirect.Action.REMOTE;
      }
      return Redirect.Action[target];
    }
    function transformActions(appBridge, _a) {
      var primaryAction = _a.primaryAction, secondaryActions = _a.secondaryActions, actionGroups = _a.actionGroups;
      var primary = transformPrimaryAction(appBridge, primaryAction);
      var secondary = __spreadArray(__spreadArray([], transformSecondaryActions(appBridge, secondaryActions)), transformActionGroups(appBridge, actionGroups));
      return {
        primary,
        secondary
      };
    }
    exports.transformActions = transformActions;
    function transformAction(appBridge, action) {
      var style = action.destructive === true ? Button.Style.Danger : void 0;
      var button = Button.create(appBridge, {
        label: action.content || "",
        disabled: action.disabled,
        loading: action.loading,
        plain: action.plain,
        style
      });
      if (action.onAction) {
        button.subscribe(Button.Action.CLICK, action.onAction);
      }
      var redirect = generateRedirect(appBridge, action.url, action.target, action.external);
      if (redirect != null) {
        button.subscribe(Button.Action.CLICK, redirect);
      }
      return button;
    }
    function transformPrimaryAction(appBridge, primaryAction) {
      if (primaryAction == null) {
        return void 0;
      }
      var primary = transformAction(appBridge, primaryAction);
      return primary;
    }
    function transformSecondaryActions(appBridge, secondaryActions) {
      if (secondaryActions === void 0) {
        secondaryActions = [];
      }
      var secondary = __spreadArray([], secondaryActions.map(function(secondaryAction) {
        return transformAction(appBridge, secondaryAction);
      }));
      return secondary;
    }
    function transformActionGroups(appBridge, actionGroups) {
      if (actionGroups === void 0) {
        actionGroups = [];
      }
      var buttonGroups = __spreadArray([], actionGroups.map(function(group) {
        var buttons = group.actions.map(function(groupAction) {
          return transformAction(appBridge, groupAction);
        });
        return ButtonGroup.create(appBridge, { label: group.title, plain: group.plain, buttons });
      }));
      return buttonGroups;
    }
  }
});

// node_modules/@shopify/app-bridge-react/hooks/useOnceEffect/useOnceEffect.js
var require_useOnceEffect = __commonJS({
  "node_modules/@shopify/app-bridge-react/hooks/useOnceEffect/useOnceEffect.js"(exports) {
    "use strict";
    var __importDefault = exports && exports.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.useOnceEffect = void 0;
    var react_1 = __importDefault(require_react());
    exports.useOnceEffect = react_1.default.useInsertionEffect || react_1.default.useLayoutEffect;
  }
});

// node_modules/@shopify/app-bridge-react/hooks/useOnceEffect/index.js
var require_useOnceEffect2 = __commonJS({
  "node_modules/@shopify/app-bridge-react/hooks/useOnceEffect/index.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      Object.defineProperty(o, k2, { enumerable: true, get: function() {
        return m[k];
      } });
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __exportStar = exports && exports.__exportStar || function(m, exports2) {
      for (var p in m)
        if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p))
          __createBinding(exports2, m, p);
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    __exportStar(require_useOnceEffect(), exports);
  }
});

// node_modules/@shopify/app-bridge-react/components/Modal/Modal.js
var require_Modal3 = __commonJS({
  "node_modules/@shopify/app-bridge-react/components/Modal/Modal.js"(exports) {
    "use strict";
    var __assign = exports && exports.__assign || function() {
      __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p))
              t[p] = s[p];
        }
        return t;
      };
      return __assign.apply(this, arguments);
    };
    var __rest = exports && exports.__rest || function(s, e) {
      var t = {};
      for (var p in s)
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
          t[p] = s[p];
      if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
          if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
            t[p[i]] = s[p[i]];
        }
      return t;
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    var react_1 = require_react();
    var Modal_1 = require_Modal2();
    var transformers_1 = require_transformers();
    var useAppBridge_1 = require_useAppBridge();
    var useOnceEffect_1 = require_useOnceEffect2();
    function Modal(props) {
      var app = useAppBridge_1.useAppBridge();
      var focusReturnPoint = react_1.useRef(null);
      var prevProps = react_1.useRef({ open: false });
      var open = props.open;
      var isUnmounted = react_1.useRef(false);
      var modal = react_1.useMemo(function() {
        var primaryAction = props.primaryAction, secondaryActions = props.secondaryActions, rest = __rest(props, ["primaryAction", "secondaryActions"]);
        return Modal_1.create(app, transformProps(app, rest));
      }, [app]);
      react_1.useEffect(function() {
        if (isUnmounted.current) {
          prevProps.current = props;
          return;
        }
        var wasOpen = prevProps.current.open;
        var openUpdated = wasOpen !== open;
        if (open) {
          var transformedProps = transformProps(app, props, wasOpen);
          var shouldSendUpdate = !openUpdated;
          if (isIframeModal(transformedProps)) {
            modal.set(transformedProps, shouldSendUpdate);
          } else {
            modal.set(transformedProps, shouldSendUpdate);
          }
        }
        if (openUpdated) {
          if (open) {
            modal.dispatch(Modal_1.Action.OPEN);
            focusReturnPoint.current = document.activeElement;
          } else {
            modal.dispatch(Modal_1.Action.CLOSE);
            if (focusReturnPoint.current != null && document.contains(focusReturnPoint.current)) {
              focusReturnPoint.current.focus();
              focusReturnPoint.current = null;
            }
          }
        }
        if (props.onClose != null) {
          modal.subscribe(Modal_1.Action.CLOSE, props.onClose);
        }
        prevProps.current = props;
        return function() {
          modal.unsubscribe();
        };
      }, [props, open]);
      useOnceEffect_1.useOnceEffect(function() {
        return function() {
          if (prevProps.current.open) {
            modal.dispatch(Modal_1.Action.CLOSE);
          }
        };
      }, []);
      return null;
    }
    function isIframeModal(options) {
      return typeof options.url === "string" || typeof options.path === "string";
    }
    function transformProps(app, props, wasOpen) {
      var title = props.title, size = props.size, message = props.message, src = props.src, primaryAction = props.primaryAction, secondaryActions = props.secondaryActions, loading = props.loading;
      var safeSize = size == null ? void 0 : Modal_1.Size[size];
      var srcPayload = {};
      if (src != null) {
        if (src.match("^https?://")) {
          srcPayload.url = src;
        } else {
          srcPayload.path = src;
        }
      }
      return __assign(__assign({ title, message, size: safeSize }, srcPayload), { footer: {
        buttons: transformers_1.transformActions(app, {
          primaryAction,
          secondaryActions
        })
      }, loading: wasOpen ? void 0 : loading });
    }
    exports.default = Modal;
  }
});

// node_modules/@shopify/app-bridge-react/components/Modal/ModalContent/ModalContent.js
var require_ModalContent3 = __commonJS({
  "node_modules/@shopify/app-bridge-react/components/Modal/ModalContent/ModalContent.js"(exports) {
    "use strict";
    var __extends = exports && exports.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
          d2.__proto__ = b2;
        } || function(d2, b2) {
          for (var p in b2)
            if (Object.prototype.hasOwnProperty.call(b2, p))
              d2[p] = b2[p];
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        if (typeof b !== "function" && b !== null)
          throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __importDefault = exports && exports.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    var react_1 = __importDefault(require_react());
    var actions_1 = require_actions5();
    var context_1 = require_context();
    var ModalContent = (
      /** @class */
      function(_super) {
        __extends(ModalContent2, _super);
        function ModalContent2() {
          return _super !== null && _super.apply(this, arguments) || this;
        }
        ModalContent2.prototype.componentDidMount = function() {
          var app = this.context;
          this.modalContent = actions_1.ModalContent.create(app);
          this.syncLoadingStatus();
        };
        ModalContent2.prototype.componentDidUpdate = function() {
          this.syncLoadingStatus();
        };
        ModalContent2.prototype.syncLoadingStatus = function() {
          if (!this.modalContent)
            return;
          if (this.props.loading) {
            this.modalContent.loading();
          } else {
            this.modalContent.loaded();
          }
        };
        ModalContent2.prototype.render = function() {
          return null;
        };
        ModalContent2.contextType = context_1.AppBridgeContext;
        return ModalContent2;
      }(react_1.default.Component)
    );
    exports.default = ModalContent;
  }
});

// node_modules/@shopify/app-bridge-react/components/Modal/ModalContent/index.js
var require_ModalContent4 = __commonJS({
  "node_modules/@shopify/app-bridge-react/components/Modal/ModalContent/index.js"(exports) {
    "use strict";
    var __importDefault = exports && exports.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    var ModalContent_1 = __importDefault(require_ModalContent3());
    exports.default = ModalContent_1.default;
  }
});

// node_modules/@shopify/app-bridge-react/components/Modal/index.js
var require_Modal4 = __commonJS({
  "node_modules/@shopify/app-bridge-react/components/Modal/index.js"(exports) {
    "use strict";
    var __importDefault = exports && exports.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ModalContent = void 0;
    var Modal_1 = __importDefault(require_Modal3());
    var ModalContent_1 = require_ModalContent4();
    Object.defineProperty(exports, "ModalContent", { enumerable: true, get: function() {
      return __importDefault(ModalContent_1).default;
    } });
    exports.default = Modal_1.default;
  }
});

// node_modules/@shopify/app-bridge/util/shared.js
var require_shared = __commonJS({
  "node_modules/@shopify/app-bridge/util/shared.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.mockAppBridge = exports.serverAppBridge = void 0;
    var Error_1 = require_Error2();
    var noop = function() {
    };
    var noopPromise = new Promise(function() {
    });
    exports.serverAppBridge = {
      dispatch: function() {
        return {};
      },
      error: function() {
        return noop;
      },
      featuresAvailable: function() {
        return Promise.reject(Error_1.fromAction("Feature detection is only available on the client side.", Error_1.AppActionType.WINDOW_UNDEFINED));
      },
      getState: function() {
        return Promise.reject(Error_1.fromAction("State is only available on the client side.", Error_1.AppActionType.WINDOW_UNDEFINED));
      },
      localOrigin: "",
      hostOrigin: "",
      subscribe: function() {
        return noop;
      }
    };
    exports.mockAppBridge = {
      dispatch: function() {
        return {};
      },
      error: function() {
        return noop;
      },
      featuresAvailable: function() {
        return noopPromise;
      },
      getState: function() {
        return noopPromise;
      },
      localOrigin: "",
      hostOrigin: "",
      subscribe: function() {
        return noop;
      }
    };
  }
});

// node_modules/@shopify/app-bridge/client/redirect.js
var require_redirect = __commonJS({
  "node_modules/@shopify/app-bridge/client/redirect.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.getWindow = exports.getLocation = exports.redirect = exports.shouldRedirect = void 0;
    function shouldRedirect(frame) {
      return frame === window;
    }
    exports.shouldRedirect = shouldRedirect;
    function redirect(url) {
      var location2 = getLocation();
      if (!location2) {
        return;
      }
      location2.assign(url);
    }
    exports.redirect = redirect;
    function getLocation() {
      return hasWindow() ? window.location : void 0;
    }
    exports.getLocation = getLocation;
    function getWindow() {
      return hasWindow() ? window : void 0;
    }
    exports.getWindow = getWindow;
    function hasWindow() {
      return typeof window !== "undefined";
    }
  }
});

// node_modules/@shopify/app-bridge/client/print.js
var require_print = __commonJS({
  "node_modules/@shopify/app-bridge/client/print.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.handleAppPrint = void 0;
    var redirect_1 = require_redirect();
    function isRunningOniOS() {
      return navigator.userAgent.indexOf("iOS") >= 0;
    }
    function createHiddenInput() {
      var currentWindow = redirect_1.getWindow();
      if (!currentWindow || !currentWindow.document || !currentWindow.document.body) {
        return;
      }
      var inputElement = currentWindow.document.createElement("input");
      inputElement.style.display = "none";
      currentWindow.document.body.appendChild(inputElement);
      return inputElement;
    }
    function printWindow() {
      var _a;
      (_a = redirect_1.getWindow()) === null || _a === void 0 ? void 0 : _a.print();
    }
    function handleMobileAppPrint() {
      var input = createHiddenInput();
      if (!input) {
        return;
      }
      input.select();
      printWindow();
      input.remove();
    }
    function handleAppPrint() {
      if (isRunningOniOS()) {
        handleMobileAppPrint();
      } else {
        printWindow();
      }
    }
    exports.handleAppPrint = handleAppPrint;
  }
});

// node_modules/@shopify/app-bridge/client/types.js
var require_types6 = __commonJS({
  "node_modules/@shopify/app-bridge/client/types.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.isV1Config = exports.MessageType = exports.LifecycleHook = exports.PermissionType = void 0;
    var types_1 = require_types2();
    Object.defineProperty(exports, "MessageType", { enumerable: true, get: function() {
      return types_1.MessageType;
    } });
    var types_2 = require_types2();
    Object.defineProperty(exports, "PermissionType", { enumerable: true, get: function() {
      return types_2.PermissionType;
    } });
    Object.defineProperty(exports, "LifecycleHook", { enumerable: true, get: function() {
      return types_2.LifecycleHook;
    } });
    function isV1Config(config) {
      return !config.host;
    }
    exports.isV1Config = isV1Config;
  }
});

// node_modules/@shopify/app-bridge/util/collection.js
var require_collection2 = __commonJS({
  "node_modules/@shopify/app-bridge/util/collection.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.removeFromCollection = exports.addAndRemoveFromCollection = void 0;
    var collection_1 = require_collection();
    Object.defineProperty(exports, "addAndRemoveFromCollection", { enumerable: true, get: function() {
      return collection_1.addAndRemoveFromCollection;
    } });
    Object.defineProperty(exports, "removeFromCollection", { enumerable: true, get: function() {
      return collection_1.removeFromCollection;
    } });
  }
});

// node_modules/@shopify/app-bridge/client/Hooks.js
var require_Hooks = __commonJS({
  "node_modules/@shopify/app-bridge/client/Hooks.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var collection_1 = require_collection2();
    var Hooks = (
      /** @class */
      function() {
        function Hooks2() {
          this.map = {};
        }
        Hooks2.prototype.set = function(hook, handler) {
          if (!Object.prototype.hasOwnProperty.call(this.map, hook)) {
            this.map[hook] = [];
          }
          var value = { handler, remove: function() {
          } };
          var remove = collection_1.addAndRemoveFromCollection(this.map[hook], value);
          value = { handler, remove };
          return remove;
        };
        Hooks2.prototype.get = function(hook) {
          var value = this.map[hook];
          return value ? value.map(function(val) {
            return val.handler;
          }) : void 0;
        };
        Hooks2.prototype.run = function(hook, final, context) {
          var initialArgs = [];
          for (var _i = 3; _i < arguments.length; _i++) {
            initialArgs[_i - 3] = arguments[_i];
          }
          var index = 0;
          var handlers = this.get(hook) || [];
          function handler() {
            var args = [];
            for (var _i2 = 0; _i2 < arguments.length; _i2++) {
              args[_i2] = arguments[_i2];
            }
            var childHandler = handlers[index++];
            if (childHandler) {
              return childHandler(handler).apply(context, args);
            }
            return final.apply(context, args);
          }
          return handler.apply(context, initialArgs);
        };
        return Hooks2;
      }()
    );
    exports.default = Hooks;
  }
});

// node_modules/@shopify/app-bridge/client/Client.js
var require_Client3 = __commonJS({
  "node_modules/@shopify/app-bridge/client/Client.js"(exports) {
    "use strict";
    var __assign = exports && exports.__assign || function() {
      __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p))
              t[p] = s[p];
        }
        return t;
      };
      return __assign.apply(this, arguments);
    };
    var __spreadArray = exports && exports.__spreadArray || function(to, from) {
      for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
      return to;
    };
    var __importDefault = exports && exports.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.createApp = exports.createAppWrapper = exports.createClientApp = exports.WINDOW_UNDEFINED_MESSAGE = void 0;
    var helper_1 = require_helper2();
    var Print_1 = require_Print2();
    var Error_1 = require_Error2();
    var MessageTransport_1 = require_MessageTransport2();
    var shared_1 = require_shared();
    var env_1 = require_env2();
    var Client_1 = require_Client2();
    var WebVitals_1 = require_WebVitals2();
    var print_1 = require_print();
    var redirect_1 = require_redirect();
    var types_1 = require_types6();
    var Hooks_1 = __importDefault(require_Hooks());
    exports.WINDOW_UNDEFINED_MESSAGE = "window is not defined. Running an app outside a browser is not supported";
    function redirectHandler(hostFrame, config) {
      var apiKey = config.apiKey, host = config.host, _a = config.forceRedirect, forceRedirect = _a === void 0 ? !env_1.isDevelopmentClient : _a;
      var location2 = redirect_1.getLocation();
      if (env_1.isUnframed || !location2 || !apiKey || !host || !forceRedirect || !redirect_1.shouldRedirect(hostFrame)) {
        return false;
      }
      var url = "https://" + host + "/apps/" + apiKey + location2.pathname + (location2.search || "");
      redirect_1.redirect(url);
      return true;
    }
    var actionWrapper = function(next) {
      return function(action) {
        return next(__assign(__assign({}, action), { version: helper_1.getVersion(), clientInterface: {
          name: helper_1.getPackageName(),
          version: helper_1.getVersion()
        } }));
      };
    };
    var actionWrappingMiddleware = function(hooks) {
      hooks.set(types_1.LifecycleHook.DispatchAction, actionWrapper);
    };
    function appSetUp(app) {
      app.subscribe(Print_1.Action.APP, print_1.handleAppPrint);
      app.dispatch(Client_1.initialize());
      try {
        WebVitals_1.initializeWebVitals(app);
      } catch (err) {
        console.error("App-Bridge failed to initialize web-vitals", err);
      }
    }
    var createClientApp = function(transport, middlewares) {
      if (middlewares === void 0) {
        middlewares = [];
      }
      var getStateListeners = [];
      var transportListener = MessageTransport_1.createTransportListener();
      var handler = function(event) {
        var message = event.data;
        var type = message.type, payload = message.payload;
        switch (type) {
          case "getState": {
            var resolvers = getStateListeners.splice(0);
            resolvers.forEach(function(resolver) {
              return resolver(payload);
            });
            break;
          }
          case "dispatch": {
            transportListener.handleMessage(payload);
            var hasCallback = transportListener.handleActionDispatch(payload);
            if (hasCallback) {
              return;
            }
            var errorType = helper_1.findMatchInEnum(Error_1.Action, payload.type);
            if (errorType) {
              Error_1.throwError(errorType, payload);
            }
            break;
          }
          default:
        }
      };
      transport.subscribe(handler);
      return function(config) {
        var decodedConfig = validateAndDecodeConfig(config);
        var isRedirecting = redirectHandler(transport.hostFrame, decodedConfig);
        if (isRedirecting) {
          return shared_1.mockAppBridge;
        }
        var dispatcher = createDispatcher(transport, decodedConfig);
        var subscribe = transportListener.createSubscribeHandler(dispatcher);
        dispatcher(types_1.MessageType.Unsubscribe);
        function dispatch(action) {
          dispatcher(types_1.MessageType.Dispatch, action);
          return action;
        }
        var hostOrigin = new URL("https://" + decodedConfig.host).origin;
        var hooks = new Hooks_1.default();
        var app = {
          hostOrigin,
          localOrigin: transport.localOrigin,
          hooks,
          dispatch: function(action) {
            if (!app.hooks) {
              return dispatch(action);
            }
            return app.hooks.run(types_1.LifecycleHook.DispatchAction, dispatch, app, action);
          },
          featuresAvailable: function() {
            var features = [];
            for (var _i2 = 0; _i2 < arguments.length; _i2++) {
              features[_i2] = arguments[_i2];
            }
            var firstItem = features[0];
            var parsedFeatures = Array.isArray(firstItem) ? __spreadArray([], firstItem) : features;
            return app.getState("features").then(function(state) {
              if (parsedFeatures.length) {
                return parsedFeatures.reduce(function(acc, feature) {
                  if (Object.keys(state).includes(feature)) {
                    acc[feature] = state[feature];
                  }
                  return acc;
                }, {});
              }
              return state;
            });
          },
          getState: function(query) {
            if (query && typeof query !== "string") {
              return Promise.resolve(void 0);
            }
            return new Promise(function(resolve) {
              getStateListeners.push(resolve);
              dispatcher(types_1.MessageType.GetState);
            }).then(function(state) {
              var newState = state;
              if (query) {
                for (var _i2 = 0, _a = query.split("."); _i2 < _a.length; _i2++) {
                  var key = _a[_i2];
                  if (newState == null || typeof newState !== "object" || Array.isArray(newState) || !Object.keys(newState).includes(key)) {
                    return void 0;
                  }
                  newState = newState[key];
                }
              }
              return newState;
            });
          },
          subscribe,
          error: function(listener, id) {
            var unsubscribeCb = [];
            helper_1.forEachInEnum(Error_1.Action, function(eventNameSpace) {
              unsubscribeCb.push(subscribe(eventNameSpace, listener, id));
            });
            return function() {
              unsubscribeCb.forEach(function(unsubscribe) {
                return unsubscribe();
              });
            };
          }
        };
        for (var _i = 0, middlewares_1 = middlewares; _i < middlewares_1.length; _i++) {
          var middleware = middlewares_1[_i];
          middleware(hooks, app);
        }
        appSetUp(app);
        return app;
      };
    };
    exports.createClientApp = createClientApp;
    function validateAndDecodeConfig(config) {
      var _a;
      if (!config.host) {
        throw Error_1.fromAction("host must be provided", Error_1.AppActionType.INVALID_CONFIG);
      }
      if (!config.apiKey) {
        throw Error_1.fromAction("apiKey must be provided", Error_1.AppActionType.INVALID_CONFIG);
      }
      try {
        var host = atob((_a = config.host) === null || _a === void 0 ? void 0 : _a.replace(/_/g, "/").replace(/-/g, "+"));
        return __assign(__assign({}, config), { host });
      } catch (_b) {
        var message = "not a valid host, please use the value provided by Shopify";
        throw Error_1.fromAction(message, Error_1.AppActionType.INVALID_CONFIG);
      }
    }
    function createAppWrapper(frame, localOrigin, middleware) {
      if (middleware === void 0) {
        middleware = [];
      }
      if (!frame) {
        throw Error_1.fromAction(exports.WINDOW_UNDEFINED_MESSAGE, Error_1.AppActionType.WINDOW_UNDEFINED);
      }
      var location2 = redirect_1.getLocation();
      var origin = localOrigin || location2 && location2.origin;
      if (!origin) {
        throw Error_1.fromAction("local origin cannot be blank", Error_1.AppActionType.MISSING_LOCAL_ORIGIN);
      }
      var transport = MessageTransport_1.fromWindow(frame, origin);
      var appCreator = exports.createClientApp(transport, __spreadArray([actionWrappingMiddleware], middleware));
      return appCreator;
    }
    exports.createAppWrapper = createAppWrapper;
    function createApp(config) {
      var currentWindow = redirect_1.getWindow();
      if (!currentWindow || !currentWindow.top) {
        return shared_1.serverAppBridge;
      }
      return createAppWrapper(currentWindow.top)(config);
    }
    exports.createApp = createApp;
    function createDispatcher(transport, config) {
      return function(type, payload) {
        transport.dispatch({
          payload,
          source: config,
          type
        });
      };
    }
    exports.default = createApp;
  }
});

// node_modules/@shopify/app-bridge/client/index.js
var require_client = __commonJS({
  "node_modules/@shopify/app-bridge/client/index.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      Object.defineProperty(o, k2, { enumerable: true, get: function() {
        return m[k];
      } });
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __exportStar = exports && exports.__exportStar || function(m, exports2) {
      for (var p in m)
        if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p))
          __createBinding(exports2, m, p);
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    var Client_1 = require_Client3();
    __exportStar(require_types6(), exports);
    __exportStar(require_Client3(), exports);
    exports.default = Client_1.createClientApp;
  }
});

// node_modules/@shopify/app-bridge-core/validate/type-validate.js
var require_type_validate = __commonJS({
  "node_modules/@shopify/app-bridge-core/validate/type-validate.js"(exports) {
    "use strict";
    var __assign = exports && exports.__assign || function() {
      __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p))
              t[p] = s[p];
        }
        return t;
      };
      return __assign.apply(this, arguments);
    };
    var __spreadArray = exports && exports.__spreadArray || function(to, from) {
      for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
      return to;
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.validate = exports.matchesPositiveInteger = exports.matchesBoolean = exports.makeOptional = exports.matchesString = exports.matchesObject = exports.getErrors = exports.oneOf = exports.matchesArray = exports.matchesEnum = exports.composeSchemas = exports.TYPE_ERROR = void 0;
    exports.TYPE_ERROR = "type_error_expected";
    function composeSchemas() {
      var validators = [];
      for (var _i = 0; _i < arguments.length; _i++) {
        validators[_i] = arguments[_i];
      }
      return function(val) {
        var error;
        var i = 0;
        var len = validators.length;
        while (!error && i < len) {
          error = validators[i](val);
          if (error) {
            return error;
          }
          i++;
        }
      };
    }
    exports.composeSchemas = composeSchemas;
    function matchesEnum(types, options) {
      return function(value) {
        var values = Object.keys(types).map(function(key) {
          return types[key];
        });
        var message = options && options.message || "expected:" + values.map(function(val) {
          return "`" + val + "`";
        }).join(" or ");
        return values.includes(value) ? void 0 : constructErrors(value, "invalid_enum_value", __assign(__assign({}, options), { message }));
      };
    }
    exports.matchesEnum = matchesEnum;
    function matchesArray(validator, options) {
      return function(value) {
        if (!Array.isArray(value)) {
          return constructErrors(value, exports.TYPE_ERROR + "_array", options);
        }
        if (!validator) {
          return;
        }
        var errors = [];
        value.forEach(function(val, key) {
          var objectError = validator(val);
          if (objectError) {
            errors = errors.concat(objectError.map(function(error) {
              return __assign(__assign({}, error), { path: "['" + key + "']" + (error.path || "") });
            }));
          }
        });
        return errors.length ? errors : void 0;
      };
    }
    exports.matchesArray = matchesArray;
    function oneOf() {
      var validators = [];
      for (var _i = 0; _i < arguments.length; _i++) {
        validators[_i] = arguments[_i];
      }
      return function(val) {
        var errors = [];
        for (var _i2 = 0, validators_1 = validators; _i2 < validators_1.length; _i2++) {
          var validator = validators_1[_i2];
          var result = validator(val);
          if (result == null)
            return result;
          errors.push.apply(errors, result);
        }
        return errors;
      };
    }
    exports.oneOf = oneOf;
    function constructErrors(value, error, options) {
      if (options === void 0) {
        options = { message: void 0 };
      }
      return [
        {
          value,
          error,
          message: typeof options.message === "function" ? options.message(error, value) : options.message
        }
      ];
    }
    function getErrors(obj, validator, key) {
      var value = key ? obj[key] : obj;
      var path = key ? "['" + key + "']" : void 0;
      var error = validator(value);
      if (!error) {
        return;
      }
      return error.map(function(errorObj) {
        return __assign(__assign({}, errorObj), { path: "" + (path || "") + (errorObj.path || "") || void 0 });
      });
    }
    exports.getErrors = getErrors;
    function matchesObject(schema, options) {
      return function(val) {
        if (typeof val !== "object" || !val || Array.isArray(val)) {
          return constructErrors(val, exports.TYPE_ERROR + "_object", options);
        }
        var flattened = Object.keys(schema).reduce(function(acc, key) {
          return __spreadArray(__spreadArray([], acc), getErrors(val, schema[key], key) || []);
        }, []);
        return flattened.length ? flattened : void 0;
      };
    }
    exports.matchesObject = matchesObject;
    function matchesString(options) {
      return function(value) {
        return typeof value === "string" ? void 0 : constructErrors(value, exports.TYPE_ERROR + "_string", options);
      };
    }
    exports.matchesString = matchesString;
    function makeOptional(validator) {
      return function(value) {
        if (value === void 0 || value === null) {
          return void 0;
        }
        return validator(value);
      };
    }
    exports.makeOptional = makeOptional;
    function matchesBoolean(options) {
      return function(value) {
        return typeof value === "boolean" ? void 0 : constructErrors(value, exports.TYPE_ERROR + "_boolean", options);
      };
    }
    exports.matchesBoolean = matchesBoolean;
    function matchesPositiveInteger(options) {
      return function(value) {
        return !Number.isInteger(value) || value < 0 ? constructErrors(value, exports.TYPE_ERROR + "_integer", options) : void 0;
      };
    }
    exports.matchesPositiveInteger = matchesPositiveInteger;
    function validate(obj, validator) {
      return getErrors(obj, validator);
    }
    exports.validate = validate;
  }
});

// node_modules/@shopify/app-bridge-core/validate/utils.js
var require_utils = __commonJS({
  "node_modules/@shopify/app-bridge-core/validate/utils.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.relativePathSchema = exports.relativeUrlSchema = exports.isValidRelativePath = exports.createActionValidator = void 0;
    var type_validate_1 = require_type_validate();
    function createActionValidator(type, payloadSchema, payloadRequired, idRequired) {
      if (payloadSchema === void 0) {
        payloadSchema = void 0;
      }
      if (payloadRequired === void 0) {
        payloadRequired = false;
      }
      if (idRequired === void 0) {
        idRequired = false;
      }
      var idSchema = type_validate_1.matchesObject({
        id: idRequired ? type_validate_1.matchesString() : type_validate_1.makeOptional(type_validate_1.matchesString())
      });
      var schema = payloadSchema ? type_validate_1.composeSchemas(idSchema, payloadSchema) : idSchema;
      return type_validate_1.matchesObject({
        type: type_validate_1.matchesEnum(type, {
          message: function(_, val) {
            return "The action type `" + val + "` is invalid or unsupported";
          }
        }),
        payload: payloadRequired ? schema : type_validate_1.makeOptional(schema)
      });
    }
    exports.createActionValidator = createActionValidator;
    function isValidRelativePath(path) {
      return typeof path === "string" && (path === "" || path.startsWith("/"));
    }
    exports.isValidRelativePath = isValidRelativePath;
    exports.relativeUrlSchema = type_validate_1.composeSchemas(type_validate_1.matchesString(), function(value) {
      return isValidRelativePath(value) ? void 0 : [{ error: "invalid_relative_path", value, message: "expected string to start with `/`" }];
    });
    exports.relativePathSchema = type_validate_1.matchesObject({
      path: exports.relativeUrlSchema
    });
  }
});

// node_modules/@shopify/app-bridge-core/validate/actions/button.js
var require_button = __commonJS({
  "node_modules/@shopify/app-bridge-core/validate/actions/button.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Action = exports.validateAction = exports.validateProps = exports.buttonSchemaWithId = exports.buttonSchema = void 0;
    var Button_1 = require_Button();
    Object.defineProperty(exports, "Action", { enumerable: true, get: function() {
      return Button_1.Action;
    } });
    var type_validate_1 = require_type_validate();
    var utils_1 = require_utils();
    exports.buttonSchema = type_validate_1.matchesObject({
      disabled: type_validate_1.makeOptional(type_validate_1.matchesBoolean()),
      label: type_validate_1.matchesString(),
      style: type_validate_1.makeOptional(type_validate_1.matchesEnum(Button_1.Style)),
      icon: type_validate_1.makeOptional(type_validate_1.matchesEnum(Button_1.Icon)),
      loading: type_validate_1.makeOptional(type_validate_1.matchesBoolean()),
      plain: type_validate_1.makeOptional(type_validate_1.matchesBoolean())
    });
    exports.buttonSchemaWithId = type_validate_1.composeSchemas(type_validate_1.matchesObject({
      id: type_validate_1.matchesString()
    }), exports.buttonSchema);
    function validateProps(props) {
      return type_validate_1.validate(props, exports.buttonSchema);
    }
    exports.validateProps = validateProps;
    function validateAction(action) {
      var validator = utils_1.createActionValidator(Button_1.Action, action.type === Button_1.Action.UPDATE ? exports.buttonSchema : void 0, true, true);
      return type_validate_1.validate(action, validator);
    }
    exports.validateAction = validateAction;
  }
});

// node_modules/@shopify/app-bridge-core/validate/actions/buttonGroup.js
var require_buttonGroup = __commonJS({
  "node_modules/@shopify/app-bridge-core/validate/actions/buttonGroup.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Action = exports.validateAction = exports.validateProps = exports.buttonGroupSchema = void 0;
    var ButtonGroup_1 = require_ButtonGroup();
    Object.defineProperty(exports, "Action", { enumerable: true, get: function() {
      return ButtonGroup_1.Action;
    } });
    var type_validate_1 = require_type_validate();
    var utils_1 = require_utils();
    var button_1 = require_button();
    exports.buttonGroupSchema = type_validate_1.composeSchemas(button_1.buttonSchema, type_validate_1.matchesObject({
      buttons: type_validate_1.matchesArray(type_validate_1.makeOptional(button_1.buttonSchemaWithId))
    }));
    function validateProps(props) {
      return type_validate_1.validate(props, exports.buttonGroupSchema);
    }
    exports.validateProps = validateProps;
    function validateAction(action) {
      var validator = utils_1.createActionValidator(ButtonGroup_1.Action, exports.buttonGroupSchema, true, true);
      return type_validate_1.validate(action, validator);
    }
    exports.validateAction = validateAction;
  }
});

// node_modules/@shopify/app-bridge-core/validate/actions/contextualSaveBar.js
var require_contextualSaveBar = __commonJS({
  "node_modules/@shopify/app-bridge-core/validate/actions/contextualSaveBar.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Action = exports.validateAction = exports.validateProps = exports.contextSaveBarSchema = void 0;
    var type_validate_1 = require_type_validate();
    var ContextualSaveBar_1 = require_ContextualSaveBar();
    Object.defineProperty(exports, "Action", { enumerable: true, get: function() {
      return ContextualSaveBar_1.Action;
    } });
    var utils_1 = require_utils();
    exports.contextSaveBarSchema = type_validate_1.makeOptional(type_validate_1.matchesObject({
      fullWidth: type_validate_1.makeOptional(type_validate_1.matchesBoolean()),
      discardAction: type_validate_1.makeOptional(type_validate_1.matchesObject({
        disabled: type_validate_1.makeOptional(type_validate_1.matchesBoolean()),
        discardConfirmationModal: type_validate_1.makeOptional(type_validate_1.matchesBoolean())
      })),
      saveAction: type_validate_1.makeOptional(type_validate_1.matchesObject({
        disabled: type_validate_1.makeOptional(type_validate_1.matchesBoolean())
      })),
      leaveConfirmationDisable: type_validate_1.makeOptional(type_validate_1.matchesBoolean())
    }));
    function validateProps(props) {
      return type_validate_1.validate(props, exports.contextSaveBarSchema);
    }
    exports.validateProps = validateProps;
    function validateAction(action) {
      var validator = utils_1.createActionValidator(ContextualSaveBar_1.Action, exports.contextSaveBarSchema);
      return type_validate_1.validate(action, validator);
    }
    exports.validateAction = validateAction;
  }
});

// node_modules/@shopify/app-bridge-core/validate/actions/feedbackModal.js
var require_feedbackModal = __commonJS({
  "node_modules/@shopify/app-bridge-core/validate/actions/feedbackModal.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Action = exports.validateAction = exports.validateProps = exports.feedbackModalSchema = void 0;
    var FeedbackModal_1 = require_FeedbackModal();
    Object.defineProperty(exports, "Action", { enumerable: true, get: function() {
      return FeedbackModal_1.Action;
    } });
    var type_validate_1 = require_type_validate();
    var utils_1 = require_utils();
    exports.feedbackModalSchema = type_validate_1.matchesObject({
      formId: type_validate_1.matchesPositiveInteger()
    });
    function validateProps(props) {
      return type_validate_1.validate(props, exports.feedbackModalSchema);
    }
    exports.validateProps = validateProps;
    function validateAction(action) {
      switch (action.type) {
        case FeedbackModal_1.Action.OPEN:
          return type_validate_1.validate(action, utils_1.createActionValidator(FeedbackModal_1.Action, exports.feedbackModalSchema, true));
        case FeedbackModal_1.Action.CLOSE:
        default:
          return type_validate_1.validate(action, utils_1.createActionValidator(FeedbackModal_1.Action));
      }
    }
    exports.validateAction = validateAction;
  }
});

// node_modules/@shopify/app-bridge-core/validate/actions/leaveConfirmation.js
var require_leaveConfirmation = __commonJS({
  "node_modules/@shopify/app-bridge-core/validate/actions/leaveConfirmation.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Action = exports.validateAction = void 0;
    var LeaveConfirmation_1 = require_LeaveConfirmation();
    Object.defineProperty(exports, "Action", { enumerable: true, get: function() {
      return LeaveConfirmation_1.Action;
    } });
    var type_validate_1 = require_type_validate();
    var utils_1 = require_utils();
    function validateAction(action) {
      var validator = utils_1.createActionValidator(LeaveConfirmation_1.Action);
      return type_validate_1.validate(action, validator);
    }
    exports.validateAction = validateAction;
  }
});

// node_modules/@shopify/app-bridge-core/validate/actions/link.js
var require_link = __commonJS({
  "node_modules/@shopify/app-bridge-core/validate/actions/link.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Action = exports.validateAction = exports.validateProps = exports.linkActionSchema = exports.linkPropsSchema = void 0;
    var AppLink_1 = require_AppLink();
    Object.defineProperty(exports, "Action", { enumerable: true, get: function() {
      return AppLink_1.Action;
    } });
    var type_validate_1 = require_type_validate();
    var utils_1 = require_utils();
    var AllowedRedirectType;
    (function(AllowedRedirectType2) {
      AllowedRedirectType2["APP"] = "APP::NAVIGATION::REDIRECT::APP";
      AllowedRedirectType2["LEGACY_APP"] = "APP";
    })(AllowedRedirectType || (AllowedRedirectType = {}));
    exports.linkPropsSchema = type_validate_1.matchesObject({
      label: type_validate_1.matchesString(),
      destination: utils_1.relativeUrlSchema,
      redirectType: type_validate_1.matchesEnum(AllowedRedirectType)
    });
    exports.linkActionSchema = type_validate_1.matchesObject({
      label: type_validate_1.matchesString(),
      destination: utils_1.relativePathSchema,
      redirectType: type_validate_1.matchesEnum(AllowedRedirectType)
    });
    function validateProps(props) {
      return type_validate_1.validate(props, exports.linkPropsSchema);
    }
    exports.validateProps = validateProps;
    function validateAction(action) {
      return type_validate_1.validate(action, utils_1.createActionValidator(AppLink_1.Action, exports.linkActionSchema, true, true));
    }
    exports.validateAction = validateAction;
  }
});

// node_modules/@shopify/app-bridge-core/validate/actions/menu.js
var require_menu = __commonJS({
  "node_modules/@shopify/app-bridge-core/validate/actions/menu.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.validateAction = exports.validateProps = void 0;
    var NavigationMenu_1 = require_NavigationMenu();
    var ChannelMenu_1 = require_ChannelMenu();
    var type_validate_1 = require_type_validate();
    var utils_1 = require_utils();
    var helper_1 = require_helper();
    var link_1 = require_link();
    var linkOptionsValidator = type_validate_1.matchesObject({ id: type_validate_1.matchesString(), options: link_1.linkPropsSchema });
    function activeLinkError(value) {
      return [
        {
          error: "invalid_active_item",
          value,
          message: "expected active item to exist in menu items"
        }
      ];
    }
    function getOptionsSchema(options) {
      var baseSchema = type_validate_1.matchesObject({
        items: type_validate_1.makeOptional(type_validate_1.matchesArray(linkOptionsValidator)),
        active: type_validate_1.makeOptional(linkOptionsValidator)
      });
      var items = options.items, active = options.active;
      if (items && active) {
        var activeItemSchema = type_validate_1.matchesObject({
          active: type_validate_1.composeSchemas(linkOptionsValidator, function(value) {
            return items.find(function(item) {
              return item.id === value.id;
            }) ? void 0 : activeLinkError(value);
          })
        });
        return type_validate_1.composeSchemas(baseSchema, activeItemSchema);
      }
      return baseSchema;
    }
    function getPayloadSchema(payload) {
      var baseSchema = type_validate_1.matchesObject({
        items: type_validate_1.makeOptional(type_validate_1.matchesArray(link_1.linkActionSchema)),
        active: type_validate_1.makeOptional(type_validate_1.matchesString())
      });
      var items = payload.items, active = payload.active;
      if (items && active) {
        var activeItemSchema = type_validate_1.matchesObject({
          active: type_validate_1.composeSchemas(type_validate_1.matchesString(), function(value) {
            return items.find(function(item) {
              return item.id === value;
            }) ? void 0 : activeLinkError(value);
          })
        });
        return type_validate_1.composeSchemas(baseSchema, activeItemSchema);
      }
      return baseSchema;
    }
    function validateProps(props) {
      var result = type_validate_1.validate(props, getOptionsSchema(props));
      return result;
    }
    exports.validateProps = validateProps;
    function validateAction(action) {
      var actionType = NavigationMenu_1.Action;
      if (helper_1.findMatchInEnum(ChannelMenu_1.Action, action.type)) {
        actionType = ChannelMenu_1.Action;
      }
      return type_validate_1.validate(action, utils_1.createActionValidator(actionType, getPayloadSchema(action.payload), true, false));
    }
    exports.validateAction = validateAction;
  }
});

// node_modules/@shopify/app-bridge-core/util/constants.js
var require_constants2 = __commonJS({
  "node_modules/@shopify/app-bridge-core/util/constants.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.INTERNAL_PROTOCOL = void 0;
    exports.INTERNAL_PROTOCOL = "shopify:";
  }
});

// node_modules/@shopify/app-bridge-core/validate/safe-redirect.js
var require_safe_redirect = __commonJS({
  "node_modules/@shopify/app-bridge-core/validate/safe-redirect.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.isSafe = void 0;
    var constants_1 = require_constants2();
    var FILE_URI_MATCH = /\/\/\//;
    var INVALID_RELATIVE_URL = /[/\\][/\\]/;
    var VALID_PROTOCOLS = ["https:", "http:"];
    var DUMMY_HOSTNAME = "http://test.com";
    function isSafe(redirectUrl, _a) {
      var _b = _a === void 0 ? {} : _a, _c3 = _b.allowedDomains, allowedDomains = _c3 === void 0 ? [] : _c3, _d = _b.subdomains, subdomains = _d === void 0 ? [] : _d, matchPath = _b.matchPath, requireAbsolute = _b.requireAbsolute, requireSSL = _b.requireSSL, allowInternalProtocol = _b.allowInternalProtocol;
      if (FILE_URI_MATCH.test(redirectUrl)) {
        return false;
      }
      if (redirectUrl.startsWith("/")) {
        if (allowedDomains.length > 0 || subdomains.length > 0 || requireAbsolute || requireSSL) {
          return false;
        }
        if (matchPath) {
          return pathMatches(new URL(redirectUrl, DUMMY_HOSTNAME), redirectUrl, matchPath);
        }
        return !INVALID_RELATIVE_URL.test(redirectUrl);
      }
      var url;
      try {
        url = new URL(redirectUrl);
      } catch (error) {
        return false;
      }
      if (allowInternalProtocol && url.protocol === constants_1.INTERNAL_PROTOCOL) {
        return true;
      }
      if (!VALID_PROTOCOLS.includes(url.protocol)) {
        return false;
      }
      if (requireSSL && url.protocol !== "https:") {
        return false;
      }
      if (url.username || url.password) {
        return false;
      }
      if (matchPath && !pathMatches(url, redirectUrl, matchPath)) {
        return false;
      }
      if (!hostIsValid(url, allowedDomains, subdomains)) {
        return false;
      }
      return true;
    }
    exports.isSafe = isSafe;
    function hostIsValid(url, allowedDomains, subdomains) {
      if (!subdomains.every(function(subdomain) {
        return subdomain.startsWith(".");
      })) {
        throw new TypeError("Subdomains must begin with .");
      }
      var hostname = url.hostname;
      return allowedDomains.length === 0 && subdomains.length === 0 || allowedDomains.includes(hostname) || subdomains.some(function(subdomain) {
        return hostname.endsWith(subdomain);
      });
    }
    function pathMatches(url, originalUrl, matcher) {
      var pathname = url.pathname;
      var originalPathname = originalUrl.replace(url.origin, "").split("?")[0];
      return typeof matcher === "string" ? pathname === matcher && originalPathname === matcher : matcher.test(pathname) && matcher.test(originalPathname);
    }
  }
});

// node_modules/@shopify/app-bridge-core/validate/actions/modal.js
var require_modal2 = __commonJS({
  "node_modules/@shopify/app-bridge-core/validate/actions/modal.js"(exports) {
    "use strict";
    var __assign = exports && exports.__assign || function() {
      __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p))
              t[p] = s[p];
        }
        return t;
      };
      return __assign.apply(this, arguments);
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Action = exports.validateAction = exports.validateProps = void 0;
    var type_validate_1 = require_type_validate();
    var utils_1 = require_utils();
    var Modal_1 = require_Modal();
    Object.defineProperty(exports, "Action", { enumerable: true, get: function() {
      return Modal_1.Action;
    } });
    var Button_1 = require_Button();
    var safe_redirect_1 = require_safe_redirect();
    var button_1 = require_button();
    function matchesSafeOrigin(value, localOrigin) {
      var hostName;
      try {
        hostName = new URL(localOrigin).hostname;
      } catch (error) {
        return [
          {
            error: "invalid_app_origin",
            value: localOrigin,
            message: "Provided value for app origin: `" + localOrigin + "` is invalid"
          }
        ];
      }
      var isSafeSrc = safe_redirect_1.isSafe(value, {
        requireAbsolute: true,
        requireSSL: true,
        allowInternalProtocol: true,
        allowedDomains: [hostName]
      });
      if (!isSafeSrc) {
        return [
          {
            error: "not_matching_app_origin",
            value,
            message: "Provided URL origin does not match app origin `" + hostName + "`"
          }
        ];
      }
    }
    function matchesSize() {
      return function(value) {
        var values = [Modal_1.Size.Small, Modal_1.Size.Medium, Modal_1.Size.Large];
        if (values.includes(value)) {
          return;
        }
        var message = "expected:" + values.map(function(val) {
          return "`" + val + "`";
        }).join(" or ");
        if (value === Modal_1.Size.Full) {
          message += ". Size `" + value + "` is deprecated as of version 1.6.5 and will fall back to size `medium`";
        }
        if (value === Modal_1.Size.Auto) {
          message += ". Size `" + value + "` is deprecated as of version 1.12.x and will fall back to size `medium`. Use the `setUpModalAutoSizing` utility from `app-bridge` instead";
        }
        return [
          {
            error: "invalid_enum_value",
            value,
            message
          }
        ];
      };
    }
    function getModalSchema(props, localOrigin) {
      if (props === void 0) {
        props = {};
      }
      var baseModalSchema = type_validate_1.matchesObject({
        title: type_validate_1.makeOptional(type_validate_1.matchesString()),
        footer: type_validate_1.makeOptional(type_validate_1.matchesObject({
          buttons: type_validate_1.matchesObject({
            primary: type_validate_1.makeOptional(button_1.buttonSchemaWithId),
            secondary: type_validate_1.makeOptional(type_validate_1.matchesArray(button_1.buttonSchemaWithId))
          })
        })),
        size: type_validate_1.makeOptional(matchesSize())
      });
      if (Modal_1.isIframeModal(props)) {
        if (props.url) {
          var urlSchema = type_validate_1.matchesObject({
            url: type_validate_1.composeSchemas(type_validate_1.matchesString(), function(value) {
              return localOrigin ? matchesSafeOrigin(value, localOrigin) : void 0;
            })
          });
          return type_validate_1.composeSchemas(baseModalSchema, urlSchema);
        }
        return type_validate_1.composeSchemas(baseModalSchema, utils_1.relativePathSchema);
      }
      return type_validate_1.composeSchemas(baseModalSchema, type_validate_1.matchesObject({ message: type_validate_1.matchesString() }));
    }
    function validateProps(props, localOrigin) {
      return type_validate_1.validate(props, getModalSchema(props, localOrigin));
    }
    exports.validateProps = validateProps;
    function validateAction(action, localOrigin) {
      var schema = getModalSchema(action.payload, localOrigin);
      switch (action.type) {
        case Modal_1.Action.OPEN:
        case Modal_1.Action.UPDATE:
          return type_validate_1.validate(action, utils_1.createActionValidator(Modal_1.Action, schema, true, action.type === Modal_1.Action.UPDATE));
        case Modal_1.Action.FOOTER_BUTTON_CLICK:
          return button_1.validateAction(__assign(__assign({}, action), { type: Button_1.Action.CLICK }));
        case Modal_1.Action.FOOTER_BUTTON_UPDATE:
          return button_1.validateAction(__assign(__assign({}, action), { type: Button_1.Action.UPDATE }));
        case Modal_1.Action.CLOSE:
        default:
          return type_validate_1.validate(action, utils_1.createActionValidator(Modal_1.Action));
      }
    }
    exports.validateAction = validateAction;
  }
});

// node_modules/@shopify/app-bridge-core/validate/actions/navigation.js
var require_navigation = __commonJS({
  "node_modules/@shopify/app-bridge-core/validate/actions/navigation.js"(exports) {
    "use strict";
    var __assign = exports && exports.__assign || function() {
      __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p))
              t[p] = s[p];
        }
        return t;
      };
      return __assign.apply(this, arguments);
    };
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      Object.defineProperty(o, k2, { enumerable: true, get: function() {
        return m[k];
      } });
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? function(o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
    } : function(o, v) {
      o["default"] = v;
    });
    var __importStar = exports && exports.__importStar || function(mod) {
      if (mod && mod.__esModule)
        return mod;
      var result = {};
      if (mod != null) {
        for (var k in mod)
          if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
            __createBinding(result, mod, k);
      }
      __setModuleDefault(result, mod);
      return result;
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.validateAction = exports.getSectionSchema = exports.matchesAbsolutePath = void 0;
    var History = __importStar(require_History());
    var Redirect = __importStar(require_Redirect());
    var type_validate_1 = require_type_validate();
    var utils_1 = require_utils();
    function matchesAbsolutePath(value) {
      return value.match("^https?://") ? void 0 : [
        {
          value,
          error: "invalid_absolute_url",
          message: "expected string to start with `https://` or `http://`"
        }
      ];
    }
    exports.matchesAbsolutePath = matchesAbsolutePath;
    function getSectionSchema(payload) {
      var isProductVariant = payload && payload.section && payload.section.resource && payload.section.name === Redirect.ResourceType.Product;
      var resourceSchema = {
        create: type_validate_1.makeOptional(type_validate_1.matchesBoolean()),
        id: type_validate_1.makeOptional(type_validate_1.matchesString())
      };
      var productVariantSchema = __assign(__assign({}, resourceSchema), { variant: type_validate_1.makeOptional(type_validate_1.matchesObject(resourceSchema)) });
      return type_validate_1.matchesObject({
        section: type_validate_1.matchesObject({
          name: type_validate_1.matchesEnum(Redirect.ResourceType),
          resource: type_validate_1.makeOptional(type_validate_1.matchesObject(isProductVariant ? productVariantSchema : resourceSchema))
        })
      });
    }
    exports.getSectionSchema = getSectionSchema;
    function validateAction(action) {
      var newContextSchema = type_validate_1.matchesObject({ newContext: type_validate_1.makeOptional(type_validate_1.matchesBoolean()) });
      var actionType = Redirect.Action;
      var schema;
      switch (action.type) {
        case History.Action.PUSH:
        case History.Action.REPLACE:
          actionType = History.Action;
          schema = utils_1.relativePathSchema;
          break;
        case Redirect.Action.APP:
          schema = utils_1.relativePathSchema;
          break;
        case Redirect.Action.REMOTE:
          schema = type_validate_1.composeSchemas(type_validate_1.matchesObject({
            url: type_validate_1.composeSchemas(type_validate_1.matchesString(), function(value) {
              return matchesAbsolutePath(value);
            })
          }), newContextSchema);
          break;
        case Redirect.Action.ADMIN_PATH:
          schema = type_validate_1.composeSchemas(utils_1.relativePathSchema, newContextSchema);
          break;
        case Redirect.Action.ADMIN_SECTION:
          schema = type_validate_1.composeSchemas(getSectionSchema(action.payload), newContextSchema);
          break;
      }
      return type_validate_1.validate(action, utils_1.createActionValidator(actionType, schema));
    }
    exports.validateAction = validateAction;
  }
});

// node_modules/@shopify/app-bridge-core/validate/actions/resourcePicker.js
var require_resourcePicker = __commonJS({
  "node_modules/@shopify/app-bridge-core/validate/actions/resourcePicker.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Action = exports.validateAction = exports.validateProps = void 0;
    var ResourcePicker_1 = require_ResourcePicker();
    Object.defineProperty(exports, "Action", { enumerable: true, get: function() {
      return ResourcePicker_1.Action;
    } });
    var type_validate_1 = require_type_validate();
    var utils_1 = require_utils();
    var resourceSelectionSchema = type_validate_1.matchesArray(type_validate_1.matchesObject({
      id: type_validate_1.matchesString()
    }));
    var resourcePickerOptions = type_validate_1.matchesObject({
      initialQuery: type_validate_1.makeOptional(type_validate_1.matchesString()),
      filterQuery: type_validate_1.makeOptional(type_validate_1.matchesString()),
      initialSelectionIds: type_validate_1.makeOptional(resourceSelectionSchema),
      selectMultiple: type_validate_1.makeOptional(type_validate_1.oneOf(type_validate_1.matchesBoolean(), type_validate_1.matchesPositiveInteger())),
      showHidden: type_validate_1.makeOptional(type_validate_1.matchesBoolean()),
      showVariants: type_validate_1.makeOptional(type_validate_1.matchesBoolean()),
      showDraft: type_validate_1.makeOptional(type_validate_1.matchesBoolean()),
      showArchived: type_validate_1.makeOptional(type_validate_1.matchesBoolean()),
      showDraftBadge: type_validate_1.makeOptional(type_validate_1.matchesBoolean()),
      showArchivedBadge: type_validate_1.makeOptional(type_validate_1.matchesBoolean()),
      actionVerb: type_validate_1.makeOptional(type_validate_1.matchesEnum(ResourcePicker_1.ActionVerb))
    });
    var resourcePickerActionSchema = type_validate_1.matchesObject({
      resourceType: type_validate_1.matchesEnum(ResourcePicker_1.ResourceType),
      options: type_validate_1.makeOptional(resourcePickerOptions)
    });
    var selectionSchema = type_validate_1.matchesObject({
      selection: resourceSelectionSchema
    });
    function validateProps(props) {
      return type_validate_1.validate(props, resourcePickerOptions);
    }
    exports.validateProps = validateProps;
    function validateAction(action) {
      switch (action.type) {
        case ResourcePicker_1.Action.UPDATE:
        case ResourcePicker_1.Action.OPEN:
          return type_validate_1.validate(action, utils_1.createActionValidator(ResourcePicker_1.Action, resourcePickerActionSchema, false, true));
        case ResourcePicker_1.Action.SELECT:
          return type_validate_1.validate(action, utils_1.createActionValidator(ResourcePicker_1.Action, selectionSchema, true, true));
        case ResourcePicker_1.Action.CANCEL:
        case ResourcePicker_1.Action.CLOSE:
        default:
          return type_validate_1.validate(action, utils_1.createActionValidator(ResourcePicker_1.Action));
      }
    }
    exports.validateAction = validateAction;
  }
});

// node_modules/@shopify/app-bridge-core/validate/actions/titleBar.js
var require_titleBar = __commonJS({
  "node_modules/@shopify/app-bridge-core/validate/actions/titleBar.js"(exports) {
    "use strict";
    var __assign = exports && exports.__assign || function() {
      __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p))
              t[p] = s[p];
        }
        return t;
      };
      return __assign.apply(this, arguments);
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Action = exports.validateAction = exports.validateProps = exports.titleBarSchema = void 0;
    var TitleBar_1 = require_TitleBar();
    Object.defineProperty(exports, "Action", { enumerable: true, get: function() {
      return TitleBar_1.Action;
    } });
    var Button_1 = require_Button();
    var ButtonGroup_1 = require_ButtonGroup();
    var type_validate_1 = require_type_validate();
    var utils_1 = require_utils();
    var button_1 = require_button();
    var buttonGroup_1 = require_buttonGroup();
    var buttonSchemaWithId = type_validate_1.composeSchemas(button_1.buttonSchema, type_validate_1.matchesObject({
      id: type_validate_1.matchesString()
    }));
    exports.titleBarSchema = type_validate_1.matchesObject({
      breadcrumbs: type_validate_1.makeOptional(button_1.buttonSchema),
      title: type_validate_1.makeOptional(type_validate_1.matchesString()),
      buttons: type_validate_1.makeOptional(type_validate_1.matchesObject({
        primary: type_validate_1.makeOptional(buttonSchemaWithId),
        secondary: type_validate_1.makeOptional(type_validate_1.matchesArray(type_validate_1.composeSchemas(buttonSchemaWithId, type_validate_1.matchesObject({
          buttons: type_validate_1.makeOptional(type_validate_1.matchesArray(buttonSchemaWithId))
        }))))
      }))
    });
    function validateProps(props) {
      return type_validate_1.validate(props, exports.titleBarSchema);
    }
    exports.validateProps = validateProps;
    function validateAction(action) {
      switch (action.type) {
        default:
        case TitleBar_1.Action.UPDATE:
          return type_validate_1.validate(action, utils_1.createActionValidator(TitleBar_1.Action, exports.titleBarSchema, true, false));
        case TitleBar_1.Action.BUTTON_CLICK:
        case TitleBar_1.Action.BREADCRUMBS_CLICK:
          return button_1.validateAction(__assign(__assign({}, action), { type: Button_1.Action.CLICK }));
        case TitleBar_1.Action.BUTTON_UPDATE:
        case TitleBar_1.Action.BREADCRUMBS_UPDATE:
          return button_1.validateAction(__assign(__assign({}, action), { type: Button_1.Action.UPDATE }));
        case TitleBar_1.Action.BUTTON_GROUP_UPDATE:
          return buttonGroup_1.validateAction(__assign(__assign({}, action), { type: ButtonGroup_1.Action.UPDATE }));
      }
    }
    exports.validateAction = validateAction;
  }
});

// node_modules/@shopify/app-bridge-core/validate/actions/toast.js
var require_toast = __commonJS({
  "node_modules/@shopify/app-bridge-core/validate/actions/toast.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Action = exports.validateProps = exports.validateAction = exports.toastSchema = void 0;
    var Toast_1 = require_Toast();
    Object.defineProperty(exports, "Action", { enumerable: true, get: function() {
      return Toast_1.Action;
    } });
    var type_validate_1 = require_type_validate();
    var utils_1 = require_utils();
    exports.toastSchema = type_validate_1.matchesObject({
      message: type_validate_1.matchesString(),
      duration: type_validate_1.matchesPositiveInteger(),
      isError: type_validate_1.makeOptional(type_validate_1.matchesBoolean()),
      action: type_validate_1.makeOptional(type_validate_1.matchesObject({
        content: type_validate_1.matchesString()
      }))
    });
    function validateAction(action) {
      switch (action.type) {
        case Toast_1.Action.SHOW:
          return type_validate_1.validate(action, utils_1.createActionValidator(Toast_1.Action, exports.toastSchema, true));
        default:
          return type_validate_1.validate(action, utils_1.createActionValidator(Toast_1.Action));
      }
    }
    exports.validateAction = validateAction;
    function validateProps(props) {
      return type_validate_1.validate(props, exports.toastSchema);
    }
    exports.validateProps = validateProps;
  }
});

// node_modules/@shopify/app-bridge-core/validate/actions/picker.js
var require_picker = __commonJS({
  "node_modules/@shopify/app-bridge-core/validate/actions/picker.js"(exports) {
    "use strict";
    var __assign = exports && exports.__assign || function() {
      __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p))
              t[p] = s[p];
        }
        return t;
      };
      return __assign.apply(this, arguments);
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Action = exports.validateAction = exports.validateProps = void 0;
    var Picker_1 = require_Picker();
    Object.defineProperty(exports, "Action", { enumerable: true, get: function() {
      return Picker_1.Action;
    } });
    var type_validate_1 = require_type_validate();
    var utils_1 = require_utils();
    var resourceBadge = type_validate_1.matchesObject({
      content: type_validate_1.matchesString(),
      id: type_validate_1.matchesString(),
      progress: type_validate_1.matchesEnum(Picker_1.ALL_BADGE_PROGRESSES),
      status: type_validate_1.matchesEnum(Picker_1.ALL_BADGE_STATUSES)
    });
    var resourceMedia = type_validate_1.matchesObject({
      accessibilityLabel: type_validate_1.makeOptional(type_validate_1.matchesString()),
      alt: type_validate_1.makeOptional(type_validate_1.matchesString()),
      initials: type_validate_1.makeOptional(type_validate_1.matchesString()),
      kind: type_validate_1.makeOptional(type_validate_1.matchesEnum(Picker_1.ALL_MEDIA_KINDS)),
      name: type_validate_1.makeOptional(type_validate_1.matchesString()),
      source: type_validate_1.matchesString()
    });
    var sharedResourceSchema = {
      accessibilityLabel: type_validate_1.makeOptional(type_validate_1.matchesString()),
      badges: type_validate_1.makeOptional(type_validate_1.matchesArray(resourceBadge)),
      disabled: type_validate_1.makeOptional(type_validate_1.matchesBoolean()),
      id: type_validate_1.matchesString(),
      loading: type_validate_1.makeOptional(type_validate_1.matchesBoolean()),
      media: type_validate_1.makeOptional(resourceMedia),
      name: type_validate_1.makeOptional(type_validate_1.matchesString()),
      caption: type_validate_1.makeOptional(type_validate_1.matchesString()),
      selectable: type_validate_1.makeOptional(type_validate_1.matchesBoolean())
    };
    var resourceOption = type_validate_1.matchesObject(__assign({}, sharedResourceSchema));
    var resourceSelectionSchema = type_validate_1.matchesArray(type_validate_1.matchesObject(__assign(__assign({}, sharedResourceSchema), { options: type_validate_1.makeOptional(type_validate_1.matchesArray(resourceOption)) })));
    var resourceName = type_validate_1.matchesObject({
      plural: type_validate_1.matchesString(),
      singular: type_validate_1.matchesString()
    });
    var pickerOptions = type_validate_1.matchesObject({
      canLoadMore: type_validate_1.makeOptional(type_validate_1.matchesBoolean()),
      emptySearchLabel: type_validate_1.makeOptional(type_validate_1.matchesObject({
        title: type_validate_1.matchesString(),
        description: type_validate_1.matchesString(),
        withIllustration: type_validate_1.matchesBoolean()
      })),
      items: type_validate_1.makeOptional(resourceSelectionSchema),
      loading: type_validate_1.makeOptional(type_validate_1.matchesBoolean()),
      loadingMore: type_validate_1.makeOptional(type_validate_1.matchesBoolean()),
      maxSelectable: type_validate_1.makeOptional(type_validate_1.matchesPositiveInteger()),
      primaryActionLabel: type_validate_1.makeOptional(type_validate_1.matchesString()),
      searchQuery: type_validate_1.makeOptional(type_validate_1.matchesString()),
      searchQueryPlaceholder: type_validate_1.makeOptional(type_validate_1.matchesString()),
      secondaryActionLabel: type_validate_1.makeOptional(type_validate_1.matchesString()),
      selectedItems: type_validate_1.makeOptional(type_validate_1.matchesArray(type_validate_1.matchesObject(sharedResourceSchema))),
      title: type_validate_1.makeOptional(type_validate_1.matchesString()),
      verticalAlignment: type_validate_1.makeOptional(type_validate_1.matchesEnum(Picker_1.ALL_RESOURCE_VERTICAL_ALIGNMENT)),
      allowEmptySelection: type_validate_1.makeOptional(type_validate_1.matchesBoolean()),
      resourceName: type_validate_1.makeOptional(resourceName)
    });
    var pickerActionSchema = type_validate_1.matchesObject({
      options: type_validate_1.makeOptional(resourceSelectionSchema)
    });
    var selectionSchema = type_validate_1.matchesObject({
      selectedItems: resourceSelectionSchema
    });
    var searchSchema = type_validate_1.matchesObject({
      searchQuery: type_validate_1.makeOptional(type_validate_1.matchesString())
    });
    function validateProps(props) {
      return type_validate_1.validate(props, pickerOptions);
    }
    exports.validateProps = validateProps;
    function validateAction(action) {
      switch (action.type) {
        case Picker_1.Action.UPDATE:
        case Picker_1.Action.OPEN:
          return type_validate_1.validate(action, utils_1.createActionValidator(Picker_1.Action, pickerActionSchema, false, true));
        case Picker_1.Action.SELECT:
          return type_validate_1.validate(action, utils_1.createActionValidator(Picker_1.Action, selectionSchema, true, true));
        case Picker_1.Action.SEARCH:
          return type_validate_1.validate(action, utils_1.createActionValidator(Picker_1.Action, searchSchema, true, true));
        case Picker_1.Action.CANCEL:
        case Picker_1.Action.LOAD_MORE:
          return type_validate_1.validate(action, utils_1.createActionValidator(Picker_1.Action));
        default:
          return type_validate_1.validate(action, utils_1.createActionValidator(Picker_1.Action));
      }
    }
    exports.validateAction = validateAction;
  }
});

// node_modules/@shopify/app-bridge-core/validate/actions/index.js
var require_actions6 = __commonJS({
  "node_modules/@shopify/app-bridge-core/validate/actions/index.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      Object.defineProperty(o, k2, { enumerable: true, get: function() {
        return m[k];
      } });
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? function(o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
    } : function(o, v) {
      o["default"] = v;
    });
    var __importStar = exports && exports.__importStar || function(mod) {
      if (mod && mod.__esModule)
        return mod;
      var result = {};
      if (mod != null) {
        for (var k in mod)
          if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
            __createBinding(result, mod, k);
      }
      __setModuleDefault(result, mod);
      return result;
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.unstable_Picker = exports.Toast = exports.TitleBar = exports.ResourcePicker = exports.Navigation = exports.Modal = exports.Menu = exports.Link = exports.LeaveConfirmation = exports.FeedbackModal = exports.ContextualSaveBar = exports.ButtonGroup = exports.Button = void 0;
    var Button = __importStar(require_button());
    exports.Button = Button;
    var ButtonGroup = __importStar(require_buttonGroup());
    exports.ButtonGroup = ButtonGroup;
    var ContextualSaveBar = __importStar(require_contextualSaveBar());
    exports.ContextualSaveBar = ContextualSaveBar;
    var FeedbackModal = __importStar(require_feedbackModal());
    exports.FeedbackModal = FeedbackModal;
    var LeaveConfirmation = __importStar(require_leaveConfirmation());
    exports.LeaveConfirmation = LeaveConfirmation;
    var Link = __importStar(require_link());
    exports.Link = Link;
    var Menu = __importStar(require_menu());
    exports.Menu = Menu;
    var Modal = __importStar(require_modal2());
    exports.Modal = Modal;
    var Navigation = __importStar(require_navigation());
    exports.Navigation = Navigation;
    var ResourcePicker = __importStar(require_resourcePicker());
    exports.ResourcePicker = ResourcePicker;
    var TitleBar = __importStar(require_titleBar());
    exports.TitleBar = TitleBar;
    var Toast = __importStar(require_toast());
    exports.Toast = Toast;
    var unstable_Picker = __importStar(require_picker());
    exports.unstable_Picker = unstable_Picker;
  }
});

// node_modules/@shopify/app-bridge/validate/type-validate.js
var require_type_validate2 = __commonJS({
  "node_modules/@shopify/app-bridge/validate/type-validate.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.matchesPositiveNumber = exports.TYPE_ERROR = exports.oneOf = exports.matchesArray = exports.validate = exports.matchesPositiveInteger = exports.matchesBoolean = exports.makeOptional = exports.matchesString = exports.matchesObject = exports.matchesEnum = exports.composeSchemas = void 0;
    var type_validate_1 = require_type_validate();
    Object.defineProperty(exports, "TYPE_ERROR", { enumerable: true, get: function() {
      return type_validate_1.TYPE_ERROR;
    } });
    var type_validate_2 = require_type_validate();
    Object.defineProperty(exports, "composeSchemas", { enumerable: true, get: function() {
      return type_validate_2.composeSchemas;
    } });
    Object.defineProperty(exports, "matchesEnum", { enumerable: true, get: function() {
      return type_validate_2.matchesEnum;
    } });
    Object.defineProperty(exports, "matchesObject", { enumerable: true, get: function() {
      return type_validate_2.matchesObject;
    } });
    Object.defineProperty(exports, "matchesString", { enumerable: true, get: function() {
      return type_validate_2.matchesString;
    } });
    Object.defineProperty(exports, "makeOptional", { enumerable: true, get: function() {
      return type_validate_2.makeOptional;
    } });
    Object.defineProperty(exports, "matchesBoolean", { enumerable: true, get: function() {
      return type_validate_2.matchesBoolean;
    } });
    Object.defineProperty(exports, "matchesPositiveInteger", { enumerable: true, get: function() {
      return type_validate_2.matchesPositiveInteger;
    } });
    Object.defineProperty(exports, "validate", { enumerable: true, get: function() {
      return type_validate_2.validate;
    } });
    Object.defineProperty(exports, "matchesArray", { enumerable: true, get: function() {
      return type_validate_2.matchesArray;
    } });
    Object.defineProperty(exports, "oneOf", { enumerable: true, get: function() {
      return type_validate_2.oneOf;
    } });
    function constructErrors(value, error, options) {
      if (options === void 0) {
        options = { message: void 0 };
      }
      return [
        {
          value,
          error,
          message: typeof options.message === "function" ? options.message(error, value) : options.message
        }
      ];
    }
    function matchesPositiveNumber(options) {
      return function(value) {
        return Number.isNaN(value) || !Number.isFinite(value) || value < 0 ? constructErrors(value, type_validate_1.TYPE_ERROR + "_number", options) : void 0;
      };
    }
    exports.matchesPositiveNumber = matchesPositiveNumber;
  }
});

// node_modules/@shopify/app-bridge/validate/utils.js
var require_utils2 = __commonJS({
  "node_modules/@shopify/app-bridge/validate/utils.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.mixedAppClientCheck = exports.actionMessage = exports.relativePathSchema = exports.relativeUrlSchema = exports.isValidRelativePath = exports.createActionValidator = void 0;
    var utils_1 = require_utils();
    Object.defineProperty(exports, "createActionValidator", { enumerable: true, get: function() {
      return utils_1.createActionValidator;
    } });
    Object.defineProperty(exports, "isValidRelativePath", { enumerable: true, get: function() {
      return utils_1.isValidRelativePath;
    } });
    Object.defineProperty(exports, "relativeUrlSchema", { enumerable: true, get: function() {
      return utils_1.relativeUrlSchema;
    } });
    Object.defineProperty(exports, "relativePathSchema", { enumerable: true, get: function() {
      return utils_1.relativePathSchema;
    } });
    function actionMessage(errors) {
      return errors.map(function(err) {
        var path = err.path, error = err.error, message = err.message, value = err.value;
        var valueStr = typeof value === "object" ? JSON.stringify(value) : value;
        return "`" + error + "` thrown for" + (path ? " path: " + path + " and" : "") + " value: `" + valueStr + "`" + (message ? " with message: " + message : "");
      }).join(" | ");
    }
    exports.actionMessage = actionMessage;
    function mixedAppClientCheck(window2) {
      window2.addEventListener("DOMContentLoaded", function() {
        if (!Object.prototype.hasOwnProperty.call(window2, "ShopifyApp")) {
          return;
        }
        console.error("%cException Detected \u{1F6AB}\n\n%cAn instance of the EASDK client was detected while initializing Shopify App Bridge. Using Shopify App Bridge and the EASDK simultaneously is not supported.\n\nIf you're migrating an existing app that was built with the shopify_app gem, then the EASDK client might have been included in the home page view template. In this case, remove it from your app before initializing Shopify App Bridge again.", "font-size: large;", "font-size: normal;");
      }, { once: true });
    }
    exports.mixedAppClientCheck = mixedAppClientCheck;
  }
});

// node_modules/@shopify/app-bridge/validate/actions/cart.js
var require_cart = __commonJS({
  "node_modules/@shopify/app-bridge/validate/actions/cart.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Action = exports.validateAction = void 0;
    var Cart_1 = require_Cart2();
    Object.defineProperty(exports, "Action", { enumerable: true, get: function() {
      return Cart_1.Action;
    } });
    var type_validate_1 = require_type_validate2();
    var utils_1 = require_utils2();
    var addressSchema = type_validate_1.matchesObject({
      address1: type_validate_1.makeOptional(type_validate_1.matchesString()),
      address2: type_validate_1.makeOptional(type_validate_1.matchesString()),
      city: type_validate_1.makeOptional(type_validate_1.matchesString()),
      company: type_validate_1.makeOptional(type_validate_1.matchesString()),
      firstName: type_validate_1.makeOptional(type_validate_1.matchesString()),
      lastName: type_validate_1.makeOptional(type_validate_1.matchesString()),
      phone: type_validate_1.makeOptional(type_validate_1.matchesString()),
      province: type_validate_1.makeOptional(type_validate_1.matchesString()),
      country: type_validate_1.makeOptional(type_validate_1.matchesString()),
      zip: type_validate_1.makeOptional(type_validate_1.matchesString()),
      name: type_validate_1.makeOptional(type_validate_1.matchesString()),
      provinceCode: type_validate_1.makeOptional(type_validate_1.matchesString()),
      countryCode: type_validate_1.makeOptional(type_validate_1.matchesString())
    });
    var discountSchema = type_validate_1.matchesObject({
      amount: type_validate_1.makeOptional(type_validate_1.matchesPositiveInteger()),
      discountDescription: type_validate_1.makeOptional(type_validate_1.matchesString()),
      type: type_validate_1.makeOptional(type_validate_1.matchesString()),
      discountCode: type_validate_1.makeOptional(type_validate_1.matchesString())
    });
    var discountAmount = type_validate_1.matchesObject({
      amount: type_validate_1.matchesPositiveNumber(),
      discountDescription: type_validate_1.makeOptional(type_validate_1.matchesString()),
      type: type_validate_1.makeOptional(type_validate_1.matchesString())
    });
    var discountCode = type_validate_1.matchesObject({
      discountCode: type_validate_1.matchesString()
    });
    var lineItemSchema = type_validate_1.matchesObject({
      price: type_validate_1.makeOptional(type_validate_1.matchesPositiveNumber()),
      quantity: type_validate_1.makeOptional(type_validate_1.matchesPositiveInteger()),
      title: type_validate_1.makeOptional(type_validate_1.matchesString()),
      variantId: type_validate_1.makeOptional(type_validate_1.matchesPositiveInteger()),
      discount: type_validate_1.makeOptional(discountAmount)
    });
    var updateLineItemSchema = type_validate_1.matchesObject({
      quantity: type_validate_1.matchesPositiveInteger()
    });
    var customerSchema = type_validate_1.matchesObject({
      id: type_validate_1.makeOptional(type_validate_1.matchesPositiveInteger()),
      email: type_validate_1.makeOptional(type_validate_1.matchesString()),
      firstName: type_validate_1.makeOptional(type_validate_1.matchesString()),
      lastName: type_validate_1.makeOptional(type_validate_1.matchesString()),
      note: type_validate_1.makeOptional(type_validate_1.matchesString()),
      addresses: type_validate_1.makeOptional(type_validate_1.matchesArray(addressSchema))
    });
    var noteSchema = type_validate_1.matchesObject({
      name: type_validate_1.matchesString(),
      value: type_validate_1.matchesString()
    });
    var cartSchema = type_validate_1.matchesObject({
      cartDiscount: type_validate_1.makeOptional(discountSchema),
      customer: type_validate_1.makeOptional(customerSchema),
      grandTotal: type_validate_1.makeOptional(type_validate_1.matchesString()),
      lineItems: type_validate_1.makeOptional(type_validate_1.matchesArray(lineItemSchema)),
      noteAttributes: type_validate_1.makeOptional(type_validate_1.matchesArray(noteSchema)),
      subTotal: type_validate_1.makeOptional(type_validate_1.matchesString()),
      taxTotal: type_validate_1.makeOptional(type_validate_1.matchesString())
    });
    var propertiesSchema = type_validate_1.composeSchemas(type_validate_1.matchesObject({}), function(value) {
      var validator = type_validate_1.matchesString();
      var schema = Object.keys(value).reduce(function(acc, key) {
        acc[key] = validator;
        return acc;
      }, {});
      return type_validate_1.validate(value, type_validate_1.matchesObject(schema));
    });
    var matchesStringArray = type_validate_1.matchesArray(type_validate_1.matchesString());
    function createDataValidator(data) {
      return utils_1.createActionValidator(Cart_1.Action, data ? type_validate_1.matchesObject({ data }) : void 0, true, true);
    }
    function createDataValidatorWithIndex(data) {
      var indexSchema = type_validate_1.matchesObject({ index: type_validate_1.matchesPositiveInteger() });
      if (data) {
        var dataSchema = type_validate_1.matchesObject({ data });
        return utils_1.createActionValidator(Cart_1.Action, type_validate_1.composeSchemas(indexSchema, dataSchema), true, true);
      }
      return utils_1.createActionValidator(Cart_1.Action, indexSchema, true, true);
    }
    function getDiscountSchema(data) {
      if (data.amount) {
        return discountAmount;
      }
      return discountCode;
    }
    function validateAction(action) {
      switch (action.type) {
        case Cart_1.Action.UPDATE:
          return type_validate_1.validate(action, createDataValidator(cartSchema));
        case Cart_1.Action.SET_CUSTOMER:
          return type_validate_1.validate(action, createDataValidator(customerSchema));
        case Cart_1.Action.ADD_CUSTOMER_ADDRESS:
          return type_validate_1.validate(action, createDataValidator(addressSchema));
        case Cart_1.Action.UPDATE_CUSTOMER_ADDRESS:
          return type_validate_1.validate(action, createDataValidatorWithIndex(addressSchema));
        case Cart_1.Action.SET_DISCOUNT:
          return type_validate_1.validate(action, createDataValidator(getDiscountSchema(action.payload.data)));
        case Cart_1.Action.SET_PROPERTIES:
          return type_validate_1.validate(action, createDataValidator(propertiesSchema));
        case Cart_1.Action.REMOVE_PROPERTIES:
          return type_validate_1.validate(action, createDataValidator(matchesStringArray));
        case Cart_1.Action.ADD_LINE_ITEM:
          return type_validate_1.validate(action, createDataValidator(lineItemSchema));
        case Cart_1.Action.UPDATE_LINE_ITEM:
          return type_validate_1.validate(action, createDataValidatorWithIndex(updateLineItemSchema));
        case Cart_1.Action.REMOVE_LINE_ITEM:
          return type_validate_1.validate(action, createDataValidatorWithIndex());
        case Cart_1.Action.SET_LINE_ITEM_DISCOUNT:
          return type_validate_1.validate(action, createDataValidatorWithIndex(discountAmount));
        case Cart_1.Action.REMOVE_LINE_ITEM_DISCOUNT:
          return type_validate_1.validate(action, createDataValidatorWithIndex());
        case Cart_1.Action.SET_LINE_ITEM_PROPERTIES:
          return type_validate_1.validate(action, createDataValidatorWithIndex(propertiesSchema));
        case Cart_1.Action.REMOVE_LINE_ITEM_PROPERTIES:
          return type_validate_1.validate(action, createDataValidatorWithIndex(matchesStringArray));
        case Cart_1.Action.FETCH:
        case Cart_1.Action.REMOVE_CUSTOMER:
        case Cart_1.Action.REMOVE_DISCOUNT:
        case Cart_1.Action.CLEAR:
        default:
          return type_validate_1.validate(action, utils_1.createActionValidator(Cart_1.Action, void 0, false, true));
      }
    }
    exports.validateAction = validateAction;
  }
});

// node_modules/@shopify/app-bridge/validate/actions/fullscreen.js
var require_fullscreen = __commonJS({
  "node_modules/@shopify/app-bridge/validate/actions/fullscreen.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Action = exports.validateAction = void 0;
    var Fullscreen_1 = require_Fullscreen2();
    Object.defineProperty(exports, "Action", { enumerable: true, get: function() {
      return Fullscreen_1.Action;
    } });
    var type_validate_1 = require_type_validate2();
    var utils_1 = require_utils2();
    function validateAction(action) {
      var validator = utils_1.createActionValidator(Fullscreen_1.Action);
      return type_validate_1.validate(action, validator);
    }
    exports.validateAction = validateAction;
  }
});

// node_modules/@shopify/app-bridge/validate/actions/loading.js
var require_loading = __commonJS({
  "node_modules/@shopify/app-bridge/validate/actions/loading.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Action = exports.validateAction = void 0;
    var Loading_1 = require_Loading2();
    Object.defineProperty(exports, "Action", { enumerable: true, get: function() {
      return Loading_1.Action;
    } });
    var type_validate_1 = require_type_validate2();
    var utils_1 = require_utils2();
    function validateAction(action) {
      var validator = utils_1.createActionValidator(Loading_1.Action);
      return type_validate_1.validate(action, validator);
    }
    exports.validateAction = validateAction;
  }
});

// node_modules/@shopify/app-bridge/validate/actions/print.js
var require_print2 = __commonJS({
  "node_modules/@shopify/app-bridge/validate/actions/print.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Action = exports.validateAction = void 0;
    var Print_1 = require_Print2();
    Object.defineProperty(exports, "Action", { enumerable: true, get: function() {
      return Print_1.Action;
    } });
    var type_validate_1 = require_type_validate2();
    var utils_1 = require_utils2();
    function validateAction(action) {
      return type_validate_1.validate(action, utils_1.createActionValidator(Print_1.Action));
    }
    exports.validateAction = validateAction;
  }
});

// node_modules/@shopify/app-bridge/validate/actions/scanner.js
var require_scanner = __commonJS({
  "node_modules/@shopify/app-bridge/validate/actions/scanner.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Action = exports.validateAction = void 0;
    var Scanner_1 = require_Scanner2();
    Object.defineProperty(exports, "Action", { enumerable: true, get: function() {
      return Scanner_1.Action;
    } });
    var type_validate_1 = require_type_validate2();
    var utils_1 = require_utils2();
    function validateAction(action) {
      return type_validate_1.validate(action, utils_1.createActionValidator(Scanner_1.Action));
    }
    exports.validateAction = validateAction;
  }
});

// node_modules/@shopify/app-bridge/validate/actions/index.js
var require_actions7 = __commonJS({
  "node_modules/@shopify/app-bridge/validate/actions/index.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      Object.defineProperty(o, k2, { enumerable: true, get: function() {
        return m[k];
      } });
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? function(o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
    } : function(o, v) {
      o["default"] = v;
    });
    var __importStar = exports && exports.__importStar || function(mod) {
      if (mod && mod.__esModule)
        return mod;
      var result = {};
      if (mod != null) {
        for (var k in mod)
          if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
            __createBinding(result, mod, k);
      }
      __setModuleDefault(result, mod);
      return result;
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.unstable_Picker = exports.Toast = exports.TitleBar = exports.Scanner = exports.ResourcePicker = exports.Print = exports.Navigation = exports.Modal = exports.Menu = exports.Loading = exports.Link = exports.LeaveConfirmation = exports.Fullscreen = exports.FeedbackModal = exports.ContextualSaveBar = exports.Cart = exports.ButtonGroup = exports.Button = void 0;
    var actions_1 = require_actions6();
    Object.defineProperty(exports, "Button", { enumerable: true, get: function() {
      return actions_1.Button;
    } });
    Object.defineProperty(exports, "ButtonGroup", { enumerable: true, get: function() {
      return actions_1.ButtonGroup;
    } });
    Object.defineProperty(exports, "ContextualSaveBar", { enumerable: true, get: function() {
      return actions_1.ContextualSaveBar;
    } });
    Object.defineProperty(exports, "FeedbackModal", { enumerable: true, get: function() {
      return actions_1.FeedbackModal;
    } });
    Object.defineProperty(exports, "LeaveConfirmation", { enumerable: true, get: function() {
      return actions_1.LeaveConfirmation;
    } });
    Object.defineProperty(exports, "Link", { enumerable: true, get: function() {
      return actions_1.Link;
    } });
    Object.defineProperty(exports, "Menu", { enumerable: true, get: function() {
      return actions_1.Menu;
    } });
    Object.defineProperty(exports, "Modal", { enumerable: true, get: function() {
      return actions_1.Modal;
    } });
    Object.defineProperty(exports, "Navigation", { enumerable: true, get: function() {
      return actions_1.Navigation;
    } });
    Object.defineProperty(exports, "ResourcePicker", { enumerable: true, get: function() {
      return actions_1.ResourcePicker;
    } });
    Object.defineProperty(exports, "TitleBar", { enumerable: true, get: function() {
      return actions_1.TitleBar;
    } });
    Object.defineProperty(exports, "Toast", { enumerable: true, get: function() {
      return actions_1.Toast;
    } });
    Object.defineProperty(exports, "unstable_Picker", { enumerable: true, get: function() {
      return actions_1.unstable_Picker;
    } });
    var Cart = __importStar(require_cart());
    exports.Cart = Cart;
    var Fullscreen = __importStar(require_fullscreen());
    exports.Fullscreen = Fullscreen;
    var Loading = __importStar(require_loading());
    exports.Loading = Loading;
    var Print = __importStar(require_print2());
    exports.Print = Print;
    var Scanner = __importStar(require_scanner());
    exports.Scanner = Scanner;
  }
});

// node_modules/@shopify/app-bridge/validate/validator.js
var require_validator3 = __commonJS({
  "node_modules/@shopify/app-bridge/validate/validator.js"(exports) {
    "use strict";
    var __spreadArray = exports && exports.__spreadArray || function(to, from) {
      for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
      return to;
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.validatorMiddleware = exports.connectValidatorToDispatchHook = exports.connectValidatorToUpdateHook = void 0;
    var client_1 = require_client();
    var types_1 = require_types3();
    var Error_1 = require_Error2();
    var helper_1 = require_helper2();
    var actions_1 = require_actions7();
    var type_validate_1 = require_type_validate2();
    var utils_1 = require_utils2();
    function updateValidator(localOrigin, group, options) {
      switch (group) {
        case types_1.Group.Button:
          return actions_1.Button.validateProps(options);
        case types_1.Group.ButtonGroup:
          return actions_1.ButtonGroup.validateProps(options);
        case types_1.Group.Modal:
          return actions_1.Modal.validateProps(options, localOrigin);
        case types_1.Group.Menu:
          return actions_1.Menu.validateProps(options);
        case types_1.Group.Link:
          return actions_1.Link.validateProps(options);
        case types_1.Group.TitleBar:
          return actions_1.TitleBar.validateProps(options);
        case types_1.Group.ResourcePicker:
          return actions_1.ResourcePicker.validateProps(options);
        case types_1.Group.Toast:
          return actions_1.Toast.validateProps(options);
        case types_1.Group.ContextualSaveBar:
          return actions_1.ContextualSaveBar.validateProps(options);
        case types_1.Group.unstable_Picker:
          return actions_1.unstable_Picker.validateProps(options);
      }
    }
    function dispatchPayloadValidator(action, localOrigin) {
      switch (action.group) {
        case types_1.Group.Button:
          return actions_1.Button.validateAction(action);
        case types_1.Group.ButtonGroup:
          return actions_1.ButtonGroup.validateAction(action);
        case types_1.Group.Modal:
          return actions_1.Modal.validateAction(action, localOrigin);
        case types_1.Group.Menu:
          return actions_1.Menu.validateAction(action);
        case types_1.Group.TitleBar:
          return actions_1.TitleBar.validateAction(action);
        case types_1.Group.ResourcePicker:
          return actions_1.ResourcePicker.validateAction(action);
        case types_1.Group.Loading:
          return actions_1.Loading.validateAction(action);
        case types_1.Group.Toast:
          return actions_1.Toast.validateAction(action);
        case types_1.Group.Cart:
          return actions_1.Cart.validateAction(action);
        case types_1.Group.Navigation:
          return actions_1.Navigation.validateAction(action);
        case types_1.Group.Print:
          return actions_1.Print.validateAction(action);
        case types_1.Group.Scanner:
          return actions_1.Scanner.validateAction(action);
        case types_1.Group.Fullscreen:
          return actions_1.Fullscreen.validateAction(action);
        case types_1.Group.ContextualSaveBar:
          return actions_1.ContextualSaveBar.validateAction(action);
        case types_1.Group.Link:
          return actions_1.Link.validateAction(action);
        case types_1.Group.unstable_Picker:
          return actions_1.unstable_Picker.validateAction(action);
      }
    }
    function dispatchValidator(action, origin) {
      var errors = type_validate_1.validate(action, type_validate_1.matchesObject({
        group: type_validate_1.matchesEnum(types_1.Group, {
          message: function(_, value) {
            return "Unknown or unsupported action group `" + value + "`";
          }
        }),
        version: type_validate_1.matchesString()
      }));
      if (errors) {
        return Error_1.invalidAction(action, utils_1.actionMessage(errors));
      }
      var payloadErrors = dispatchPayloadValidator(action, origin);
      return payloadErrors ? Error_1.invalidPayload(action, utils_1.actionMessage(payloadErrors)) : action;
    }
    var connectValidatorToUpdateHook = function(next) {
      return function(options) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
          args[_i - 1] = arguments[_i];
        }
        var mergedOptions = helper_1.getMergedProps(this.options, options);
        var errors = updateValidator(this.app.localOrigin, this.defaultGroup, mergedOptions);
        if (errors) {
          throw Error_1.fromAction(utils_1.actionMessage(errors), Error_1.Action.INVALID_OPTIONS);
        }
        return next.apply(void 0, __spreadArray([options], args));
      };
    };
    exports.connectValidatorToUpdateHook = connectValidatorToUpdateHook;
    var connectValidatorToDispatchHook = function(next) {
      return function(action) {
        var finalAction = dispatchValidator(action, this.localOrigin);
        return next(finalAction);
      };
    };
    exports.connectValidatorToDispatchHook = connectValidatorToDispatchHook;
    var validatorMiddleware = function(hooks) {
      hooks.set(client_1.LifecycleHook.UpdateAction, exports.connectValidatorToUpdateHook);
      hooks.set(client_1.LifecycleHook.DispatchAction, exports.connectValidatorToDispatchHook);
    };
    exports.validatorMiddleware = validatorMiddleware;
  }
});

// node_modules/@shopify/app-bridge/validate/index.js
var require_validate = __commonJS({
  "node_modules/@shopify/app-bridge/validate/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var validator_1 = require_validator3();
    exports.default = validator_1.validatorMiddleware;
  }
});

// node_modules/@shopify/app-bridge/development.js
var require_development = __commonJS({
  "node_modules/@shopify/app-bridge/development.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      Object.defineProperty(o, k2, { enumerable: true, get: function() {
        return m[k];
      } });
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __exportStar = exports && exports.__exportStar || function(m, exports2) {
      for (var p in m)
        if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p))
          __createBinding(exports2, m, p);
    };
    var __importDefault = exports && exports.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.createApp = void 0;
    var validate_1 = __importDefault(require_validate());
    var utils_1 = require_utils2();
    var redirect_1 = require_redirect();
    var client_1 = require_client();
    var shared_1 = require_shared();
    function createApp(config) {
      var currentWindow = redirect_1.getWindow();
      if (!currentWindow || !currentWindow.top) {
        return shared_1.serverAppBridge;
      }
      utils_1.mixedAppClientCheck(currentWindow);
      return client_1.createAppWrapper(currentWindow.top, currentWindow.location.origin, [validate_1.default])(config);
    }
    exports.createApp = createApp;
    exports.default = createApp;
    __exportStar(require_MessageTransport2(), exports);
    __exportStar(require_client(), exports);
  }
});

// node_modules/@shopify/app-bridge/index.js
var require_app_bridge = __commonJS({
  "node_modules/@shopify/app-bridge/index.js"(exports, module) {
    if (false) {
      module.exports = null;
    } else {
      module.exports = require_development();
    }
  }
});

// node_modules/@shopify/app-bridge-react/components/ClientRouter/router.js
var require_router = __commonJS({
  "node_modules/@shopify/app-bridge-react/components/ClientRouter/router.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.handleRouteChange = void 0;
    var actions_1 = require_actions5();
    function handleRouteChange(app, history) {
      return app.subscribe(actions_1.Redirect.Action.APP, function(_a) {
        var path = _a.path;
        history.replace(path);
      });
    }
    exports.handleRouteChange = handleRouteChange;
  }
});

// node_modules/@shopify/app-bridge-react/components/ClientRouter/ClientRouter.js
var require_ClientRouter = __commonJS({
  "node_modules/@shopify/app-bridge-react/components/ClientRouter/ClientRouter.js"(exports) {
    "use strict";
    var __extends = exports && exports.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
          d2.__proto__ = b2;
        } || function(d2, b2) {
          for (var p in b2)
            if (Object.prototype.hasOwnProperty.call(b2, p))
              d2[p] = b2[p];
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        if (typeof b !== "function" && b !== null)
          throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __importDefault = exports && exports.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    var react_1 = __importDefault(require_react());
    var context_1 = require_context();
    var router_1 = require_router();
    var ClientRouter = (
      /** @class */
      function(_super) {
        __extends(ClientRouter2, _super);
        function ClientRouter2() {
          return _super !== null && _super.apply(this, arguments) || this;
        }
        ClientRouter2.prototype.componentDidMount = function() {
          var history = this.props.history;
          this.unsubscribe = router_1.handleRouteChange(this.context, history);
        };
        ClientRouter2.prototype.componentWillUnmount = function() {
          if (this.unsubscribe) {
            this.unsubscribe();
          }
        };
        ClientRouter2.prototype.render = function() {
          return null;
        };
        ClientRouter2.contextType = context_1.AppBridgeContext;
        return ClientRouter2;
      }(react_1.default.Component)
    );
    exports.default = ClientRouter;
  }
});

// node_modules/@shopify/app-bridge-react/components/ClientRouter/hook.js
var require_hook = __commonJS({
  "node_modules/@shopify/app-bridge-react/components/ClientRouter/hook.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var react_1 = require_react();
    var useAppBridge_1 = require_useAppBridge();
    var router_1 = require_router();
    function useClientRouting(history) {
      var app = useAppBridge_1.useAppBridge();
      react_1.useEffect(function() {
        return router_1.handleRouteChange(app, history);
      }, [app, history]);
    }
    exports.default = useClientRouting;
  }
});

// node_modules/@shopify/app-bridge-react/components/ClientRouter/index.js
var require_ClientRouter2 = __commonJS({
  "node_modules/@shopify/app-bridge-react/components/ClientRouter/index.js"(exports) {
    "use strict";
    var __importDefault = exports && exports.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.useClientRouting = exports.ClientRouter = void 0;
    var ClientRouter_1 = require_ClientRouter();
    Object.defineProperty(exports, "ClientRouter", { enumerable: true, get: function() {
      return __importDefault(ClientRouter_1).default;
    } });
    var hook_1 = require_hook();
    Object.defineProperty(exports, "useClientRouting", { enumerable: true, get: function() {
      return __importDefault(hook_1).default;
    } });
  }
});

// node_modules/@shopify/app-bridge-react/components/RoutePropagator/globals.js
var require_globals = __commonJS({
  "node_modules/@shopify/app-bridge-react/components/RoutePropagator/globals.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.getOrigin = exports.getTopWindow = exports.getSelfWindow = void 0;
    function getSelfWindow() {
      return window.self;
    }
    exports.getSelfWindow = getSelfWindow;
    function getTopWindow() {
      return window.top;
    }
    exports.getTopWindow = getTopWindow;
    function getOrigin() {
      return location.origin;
    }
    exports.getOrigin = getOrigin;
  }
});

// node_modules/@shopify/app-bridge-react/components/RoutePropagator/route-propagator.js
var require_route_propagator = __commonJS({
  "node_modules/@shopify/app-bridge-react/components/RoutePropagator/route-propagator.js"(exports) {
    "use strict";
    var __awaiter = exports && exports.__awaiter || function(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
          resolve(value);
        });
      }
      return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }
        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }
        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    };
    var __generator = exports && exports.__generator || function(thisArg, body) {
      var _ = { label: 0, sent: function() {
        if (t[0] & 1)
          throw t[1];
        return t[1];
      }, trys: [], ops: [] }, f, y, t, g;
      return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
        return this;
      }), g;
      function verb(n) {
        return function(v) {
          return step([n, v]);
        };
      }
      function step(op) {
        if (f)
          throw new TypeError("Generator is already executing.");
        while (_)
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
              return t;
            if (y = 0, t)
              op = [op[0] & 2, t.value];
            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;
              case 4:
                _.label++;
                return { value: op[1], done: false };
              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;
              case 7:
                op = _.ops.pop();
                _.trys.pop();
                continue;
              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }
                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }
                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }
                if (t && _.label < t[2]) {
                  _.label = t[2];
                  _.ops.push(op);
                  break;
                }
                if (t[2])
                  _.ops.pop();
                _.trys.pop();
                continue;
            }
            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        if (op[0] & 5)
          throw op[1];
        return { value: op[0] ? op[1] : void 0, done: true };
      }
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.updateHistory = void 0;
    var MessageTransport_1 = require_MessageTransport2();
    var actions_1 = require_actions5();
    var globals_1 = require_globals();
    var embeddedFrameParamsToRemove = [
      "hmac",
      "locale",
      "protocol",
      "session",
      "shop",
      "timestamp",
      "host"
    ];
    function updateHistory(app, location2) {
      return __awaiter(this, void 0, void 0, function() {
        var selfWindow, topWindow, renderedInTheTopWindow, renderedAsMainApp, normalizedLocation, pathname, search, hash, locationStr;
        return __generator(this, function(_a) {
          switch (_a.label) {
            case 0:
              selfWindow = globals_1.getSelfWindow();
              topWindow = globals_1.getTopWindow();
              renderedInTheTopWindow = selfWindow === topWindow;
              return [4, app.getState("context").then(function(context) {
                return context === MessageTransport_1.Context.Main;
              })];
            case 1:
              renderedAsMainApp = _a.sent();
              if (renderedInTheTopWindow || !renderedAsMainApp) {
                return [
                  2
                  /*return*/
                ];
              }
              normalizedLocation = getNormalizedURL(location2);
              embeddedFrameParamsToRemove.forEach(function(param) {
                return normalizedLocation.searchParams.delete(param);
              });
              pathname = normalizedLocation.pathname, search = normalizedLocation.search, hash = normalizedLocation.hash;
              locationStr = "" + pathname + search + hash;
              actions_1.History.create(app).dispatch(actions_1.History.Action.REPLACE, locationStr);
              return [
                2
                /*return*/
              ];
          }
        });
      });
    }
    exports.updateHistory = updateHistory;
    function getNormalizedURL(location2) {
      var origin = globals_1.getOrigin();
      if (typeof location2 === "string") {
        return new URL(location2, origin);
      }
      var pathname = location2.pathname, search = location2.search, hash = location2.hash;
      return new URL("" + pathname + search + hash, origin);
    }
  }
});

// node_modules/@shopify/app-bridge-react/components/RoutePropagator/RoutePropagator.js
var require_RoutePropagator = __commonJS({
  "node_modules/@shopify/app-bridge-react/components/RoutePropagator/RoutePropagator.js"(exports) {
    "use strict";
    var __extends = exports && exports.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
          d2.__proto__ = b2;
        } || function(d2, b2) {
          for (var p in b2)
            if (Object.prototype.hasOwnProperty.call(b2, p))
              d2[p] = b2[p];
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        if (typeof b !== "function" && b !== null)
          throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __importDefault = exports && exports.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    var react_1 = __importDefault(require_react());
    var context_1 = require_context();
    var route_propagator_1 = require_route_propagator();
    var RoutePropagator = (
      /** @class */
      function(_super) {
        __extends(RoutePropagator2, _super);
        function RoutePropagator2() {
          return _super !== null && _super.apply(this, arguments) || this;
        }
        RoutePropagator2.prototype.componentDidMount = function() {
          var location2 = this.props.location;
          route_propagator_1.updateHistory(this.context, location2);
        };
        RoutePropagator2.prototype.componentDidUpdate = function(_a) {
          var prevLocation = _a.location;
          var location2 = this.props.location;
          if (location2 !== prevLocation) {
            route_propagator_1.updateHistory(this.context, location2);
          }
        };
        RoutePropagator2.prototype.render = function() {
          return null;
        };
        RoutePropagator2.contextType = context_1.AppBridgeContext;
        return RoutePropagator2;
      }(react_1.default.Component)
    );
    exports.default = RoutePropagator;
  }
});

// node_modules/@shopify/app-bridge-react/components/RoutePropagator/hook.js
var require_hook2 = __commonJS({
  "node_modules/@shopify/app-bridge-react/components/RoutePropagator/hook.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var react_1 = require_react();
    var useAppBridge_1 = require_useAppBridge();
    var route_propagator_1 = require_route_propagator();
    function useRoutePropagation(location2) {
      var app = useAppBridge_1.useAppBridge();
      react_1.useEffect(function() {
        route_propagator_1.updateHistory(app, location2);
      }, [app, location2]);
    }
    exports.default = useRoutePropagation;
  }
});

// node_modules/@shopify/app-bridge-react/components/RoutePropagator/index.js
var require_RoutePropagator2 = __commonJS({
  "node_modules/@shopify/app-bridge-react/components/RoutePropagator/index.js"(exports) {
    "use strict";
    var __importDefault = exports && exports.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.useRoutePropagation = exports.RoutePropagator = void 0;
    var RoutePropagator_1 = require_RoutePropagator();
    Object.defineProperty(exports, "RoutePropagator", { enumerable: true, get: function() {
      return __importDefault(RoutePropagator_1).default;
    } });
    var hook_1 = require_hook2();
    Object.defineProperty(exports, "useRoutePropagation", { enumerable: true, get: function() {
      return __importDefault(hook_1).default;
    } });
  }
});

// node_modules/@shopify/app-bridge-react/package.json
var require_package2 = __commonJS({
  "node_modules/@shopify/app-bridge-react/package.json"(exports, module) {
    module.exports = {
      name: "@shopify/app-bridge-react",
      version: "3.7.10",
      types: "index.d.ts",
      main: "index.js",
      unpkg: "umd/index.js",
      jsdelivr: "umd/index.js",
      files: [
        "/components/",
        "/umd/",
        "/hooks/",
        "/utilities/",
        "/context.d.ts",
        "/context.js",
        "/index.d.ts",
        "/index.js",
        "/types.d.ts",
        "/types.js",
        "/useAppBridge.d.ts",
        "/useAppBridge.js"
      ],
      private: false,
      publishConfig: {
        access: "public",
        "@shopify:registry": "https://registry.npmjs.org"
      },
      repository: "git@github.com:Shopify/app-bridge.git",
      homepage: "https://shopify.dev/docs/api/app-bridge/previous-versions/app-bridge-from-npm/using-react",
      author: "Shopify Inc.",
      license: "MIT",
      scripts: {
        build: "yarn build:tsc && yarn build:umd",
        "build:tsc": "NODE_ENV=production tsc",
        "build:umd": "NODE_ENV=production webpack -p",
        check: "tsc",
        clean: "yarn clean:tsc && yarn clean:umd",
        "clean:tsc": "NODE_ENV=production tsc --build --clean",
        "clean:umd": "rm -rf ./umd",
        pack: "yarn pack",
        size: "size-limit"
      },
      sideEffects: false,
      "size-limit": [
        {
          limit: "36.8 KB",
          path: "index.js"
        }
      ],
      dependencies: {
        "@shopify/app-bridge": "^3.7.10"
      },
      devDependencies: {
        "@shopify/app-bridge-testing-library": "^0.0.5",
        "@shopify/react-testing": "^4.1.1",
        "@types/react": "^18.0.2",
        "react-dom": "^18.2.0"
      },
      peerDependencies: {
        react: "^16.0.0 || ^17.0.0 || ^18.0.0"
      }
    };
  }
});

// node_modules/@shopify/app-bridge-react/components/Provider/Provider.js
var require_Provider = __commonJS({
  "node_modules/@shopify/app-bridge-react/components/Provider/Provider.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      Object.defineProperty(o, k2, { enumerable: true, get: function() {
        return m[k];
      } });
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? function(o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
    } : function(o, v) {
      o["default"] = v;
    });
    var __importStar = exports && exports.__importStar || function(mod) {
      if (mod && mod.__esModule)
        return mod;
      var result = {};
      if (mod != null) {
        for (var k in mod)
          if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
            __createBinding(result, mod, k);
      }
      __setModuleDefault(result, mod);
      return result;
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.useRouter = exports.setClientInterfaceHook = void 0;
    var react_1 = __importStar(require_react());
    var app_bridge_1 = __importStar(require_app_bridge());
    var context_1 = require_context();
    var ClientRouter_1 = require_ClientRouter2();
    var RoutePropagator_1 = require_RoutePropagator2();
    var packageJson = require_package2();
    function Provider2(_a) {
      var config = _a.config, router = _a.router, children = _a.children;
      var app = react_1.useMemo(function() {
        return app_bridge_1.default(config);
      }, []);
      react_1.useEffect(function() {
        if (app === null || app === void 0 ? void 0 : app.hooks) {
          app.hooks.set(app_bridge_1.LifecycleHook.DispatchAction, exports.setClientInterfaceHook);
        }
      }, [app]);
      var routerMarkup = (router === null || router === void 0 ? void 0 : router.history) && (router === null || router === void 0 ? void 0 : router.location) ? react_1.default.createElement(Router, { router }, children) : children;
      return react_1.default.createElement(context_1.AppBridgeContext.Provider, { value: app }, routerMarkup);
    }
    var setClientInterfaceHook = function(next) {
      return function(action) {
        action.clientInterface = {
          name: "@shopify/app-bridge-react",
          version: packageJson.version
        };
        return next(action);
      };
    };
    exports.setClientInterfaceHook = setClientInterfaceHook;
    var RouterContext = react_1.createContext(void 0);
    function useRouter() {
      return react_1.useContext(RouterContext);
    }
    exports.useRouter = useRouter;
    function Router(_a) {
      var router = _a.router, children = _a.children;
      ClientRouter_1.useClientRouting(router.history);
      RoutePropagator_1.useRoutePropagation(router.location);
      return react_1.default.createElement(RouterContext.Provider, { value: router }, children);
    }
    exports.default = Provider2;
  }
});

// node_modules/@shopify/app-bridge-react/components/NavigationMenu/NavigationMenu.js
var require_NavigationMenu3 = __commonJS({
  "node_modules/@shopify/app-bridge-react/components/NavigationMenu/NavigationMenu.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var react_1 = require_react();
    var AppLink_1 = require_AppLink2();
    var NavigationMenu_1 = require_NavigationMenu2();
    var useAppBridge_1 = require_useAppBridge();
    var Provider_1 = require_Provider();
    function defaultMatcher(link, location2) {
      var pathname = typeof location2 === "string" ? new URL(location2).pathname : location2.pathname;
      return link.destination.replace(/\/$/, "") === pathname.replace(/\/$/, "");
    }
    function NavigationMenu(_a) {
      var navigationLinks = _a.navigationLinks, _b = _a.matcher, matcher = _b === void 0 ? defaultMatcher : _b;
      var app = useAppBridge_1.useAppBridge();
      var _c3 = react_1.useState(), items = _c3[0], setItems = _c3[1];
      var locationOrHref = (Provider_1.useRouter() || {}).location;
      var location2 = react_1.useMemo(function() {
        return locationOrHref !== null && locationOrHref !== void 0 ? locationOrHref : window.location;
      }, [locationOrHref]);
      react_1.useEffect(function() {
        var items2 = navigationLinks.map(function(link) {
          return AppLink_1.create(app, link);
        });
        setItems(items2);
      }, [app, JSON.stringify(navigationLinks)]);
      var activeLink = react_1.useMemo(function() {
        var activeLinkIndex = (items || []).findIndex(function(link) {
          return matcher(link, location2);
        });
        if (activeLinkIndex >= 0) {
          return items === null || items === void 0 ? void 0 : items[activeLinkIndex];
        }
      }, [items, matcher, location2]);
      react_1.useEffect(function() {
        if (!items) {
          return;
        }
        NavigationMenu_1.create(app, { items, active: activeLink });
      }, [items, activeLink, app]);
      return null;
    }
    exports.default = NavigationMenu;
  }
});

// node_modules/@shopify/app-bridge-react/components/NavigationMenu/index.js
var require_NavigationMenu4 = __commonJS({
  "node_modules/@shopify/app-bridge-react/components/NavigationMenu/index.js"(exports) {
    "use strict";
    var __importDefault = exports && exports.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    var NavigationMenu_1 = __importDefault(require_NavigationMenu3());
    exports.default = NavigationMenu_1.default;
  }
});

// node_modules/@shopify/app-bridge-react/components/Provider/index.js
var require_Provider2 = __commonJS({
  "node_modules/@shopify/app-bridge-react/components/Provider/index.js"(exports) {
    "use strict";
    var __importDefault = exports && exports.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    var Provider_1 = __importDefault(require_Provider());
    exports.default = Provider_1.default;
  }
});

// node_modules/@shopify/app-bridge-react/components/ResourcePicker/ResourcePicker.js
var require_ResourcePicker3 = __commonJS({
  "node_modules/@shopify/app-bridge-react/components/ResourcePicker/ResourcePicker.js"(exports) {
    "use strict";
    var __assign = exports && exports.__assign || function() {
      __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p))
              t[p] = s[p];
        }
        return t;
      };
      return __assign.apply(this, arguments);
    };
    var __rest = exports && exports.__rest || function(s, e) {
      var t = {};
      for (var p in s)
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
          t[p] = s[p];
      if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
          if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
            t[p[i]] = s[p[i]];
        }
      return t;
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ResourceType = exports.ActionVerb = void 0;
    var react_1 = require_react();
    var ResourcePicker_1 = require_ResourcePicker2();
    Object.defineProperty(exports, "ActionVerb", { enumerable: true, get: function() {
      return ResourcePicker_1.ActionVerb;
    } });
    Object.defineProperty(exports, "ResourceType", { enumerable: true, get: function() {
      return ResourcePicker_1.ResourceType;
    } });
    var useAppBridge_1 = require_useAppBridge();
    function ResourcePicker(_a) {
      var open = _a.open, resourceType = _a.resourceType, onSelection = _a.onSelection, onCancel = _a.onCancel, allowMultiple = _a.allowMultiple, selectMultiple = _a.selectMultiple, props = __rest(_a, ["open", "resourceType", "onSelection", "onCancel", "allowMultiple", "selectMultiple"]);
      var options = react_1.useMemo(function() {
        return __assign(__assign({}, props), { selectMultiple: selectMultiple !== null && selectMultiple !== void 0 ? selectMultiple : allowMultiple });
      }, [allowMultiple, props, selectMultiple]);
      var app = useAppBridge_1.useAppBridge();
      var isUnmountedRef = react_1.useRef(false);
      react_1.useEffect(function() {
        return function() {
          isUnmountedRef.current = true;
        };
      }, []);
      var openRef = react_1.useRef(false);
      var optionsRef = react_1.useRef(options);
      var picker = react_1.useMemo(function() {
        return ResourcePicker_1.create(app, {
          resourceType: ResourcePicker_1.ResourceType[resourceType],
          options: optionsRef.current
        });
      }, [app, resourceType]);
      react_1.useEffect(function() {
        openRef.current = false;
        return function() {
          if (openRef.current && isUnmountedRef.current) {
            picker.dispatch(ResourcePicker_1.Action.CANCEL);
          }
        };
      }, [picker]);
      var focusReturnPointRef = react_1.useRef(null);
      var storeFocusReturnPoint = react_1.useCallback(function() {
        if (document.activeElement instanceof HTMLElement) {
          focusReturnPointRef.current = document.activeElement;
        }
      }, []);
      var applyFocusReturnPoint = react_1.useCallback(function() {
        var focusReturnPoint = focusReturnPointRef.current;
        focusReturnPointRef.current = null;
        if (focusReturnPoint && document.contains(focusReturnPoint)) {
          focusReturnPoint.focus();
        }
      }, []);
      react_1.useEffect(function() {
        if (open === openRef.current)
          return;
        openRef.current = open;
        if (open) {
          picker.dispatch(ResourcePicker_1.Action.OPEN);
          storeFocusReturnPoint();
        } else {
          picker.dispatch(ResourcePicker_1.Action.CLOSE);
          applyFocusReturnPoint();
        }
      }, [picker, open, storeFocusReturnPoint, applyFocusReturnPoint]);
      react_1.useEffect(function() {
        if (!onSelection)
          return;
        return picker.subscribe(ResourcePicker_1.Action.SELECT, function() {
          var args = [];
          for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
          }
          openRef.current = false;
          applyFocusReturnPoint();
          return onSelection.apply(void 0, args);
        });
      }, [picker, onSelection, applyFocusReturnPoint]);
      react_1.useEffect(function() {
        if (!onCancel)
          return;
        return picker.subscribe(ResourcePicker_1.Action.CANCEL, function() {
          openRef.current = false;
          applyFocusReturnPoint();
          return onCancel();
        });
      }, [picker, onCancel, applyFocusReturnPoint]);
      react_1.useEffect(function() {
        var shouldUpdate = JSON.stringify(options) !== JSON.stringify(optionsRef.current);
        if (!shouldUpdate)
          return;
        optionsRef.current = options;
        picker.set(options);
      }, [picker, options]);
      return null;
    }
    exports.default = ResourcePicker;
  }
});

// node_modules/@shopify/app-bridge-react/components/ResourcePicker/index.js
var require_ResourcePicker4 = __commonJS({
  "node_modules/@shopify/app-bridge-react/components/ResourcePicker/index.js"(exports) {
    "use strict";
    var __importDefault = exports && exports.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    var ResourcePicker_1 = __importDefault(require_ResourcePicker3());
    exports.default = ResourcePicker_1.default;
  }
});

// node_modules/@shopify/app-bridge-react/components/TitleBar/TitleBar.js
var require_TitleBar3 = __commonJS({
  "node_modules/@shopify/app-bridge-react/components/TitleBar/TitleBar.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var react_1 = require_react();
    var Button_1 = require_Button2();
    var TitleBar_1 = require_TitleBar2();
    var ButtonGroup_1 = require_ButtonGroup2();
    var transformers_1 = require_transformers();
    var useAppBridge_1 = require_useAppBridge();
    function TitleBar(props) {
      var app = useAppBridge_1.useAppBridge();
      var currentProps = react_1.useRef();
      var titleBar = react_1.useMemo(function() {
        return TitleBar_1.create(app, {});
      }, [app]);
      react_1.useEffect(function() {
        var _a;
        var propsChanged = JSON.stringify(currentProps.current) !== JSON.stringify(props);
        currentProps.current = props;
        if (propsChanged) {
          titleBar.set(transformProps(app, props));
        } else {
          var primaryAction = props.primaryAction, secondaryActions = props.secondaryActions, actionGroups = props.actionGroups, breadcrumbs = props.breadcrumbs;
          var breadcrumb = Array.isArray(breadcrumbs) ? breadcrumbs[breadcrumbs.length - 1] : breadcrumbs;
          updateButton(breadcrumb, titleBar.options.breadcrumbs);
          updateButton(primaryAction, (_a = titleBar.options.buttons) === null || _a === void 0 ? void 0 : _a.primary);
          updateSecondaryActions(titleBar, secondaryActions);
          updateActionGroups(titleBar, actionGroups);
        }
        return function() {
          titleBar.unsubscribe();
        };
      }, [titleBar, props]);
      return null;
    }
    exports.default = TitleBar;
    function updateSecondaryActions(titleBar, secondaryActions) {
      var _a, _b;
      var secondaryButtons = ((_b = (_a = titleBar.options.buttons) === null || _a === void 0 ? void 0 : _a.secondary) === null || _b === void 0 ? void 0 : _b.filter(function(button) {
        return !ButtonGroup_1.isGroupedButton(button);
      })) || [];
      secondaryButtons === null || secondaryButtons === void 0 ? void 0 : secondaryButtons.forEach(function(secondaryButton, index) {
        return updateButton(
          secondaryActions === null || secondaryActions === void 0 ? void 0 : secondaryActions[index],
          // This needs to be casted as the React TitleBar component doesn't accept button groups for secondary actions
          secondaryButton
        );
      });
    }
    function updateActionGroups(titleBar, actionGroups) {
      var _a, _b;
      var actionGroupButtons = ((_b = (_a = titleBar.options.buttons) === null || _a === void 0 ? void 0 : _a.secondary) === null || _b === void 0 ? void 0 : _b.filter(ButtonGroup_1.isGroupedButton)) || [];
      actionGroupButtons === null || actionGroupButtons === void 0 ? void 0 : actionGroupButtons.forEach(function(actionBroupButton, index) {
        var actionGroup = actionGroups === null || actionGroups === void 0 ? void 0 : actionGroups[index];
        if (!actionGroup) {
          return;
        }
        actionBroupButton.options.buttons.forEach(function(nestedButton, nestedIndex) {
          return updateButton(actionGroup.actions[nestedIndex], nestedButton);
        });
      });
    }
    function transformProps(app, _a) {
      var actionGroups = _a.actionGroups, breadcrumbs = _a.breadcrumbs, primaryAction = _a.primaryAction, secondaryActions = _a.secondaryActions, title = _a.title;
      var breadcrumb = Array.isArray(breadcrumbs) ? breadcrumbs[breadcrumbs.length - 1] : breadcrumbs;
      return {
        title,
        buttons: transformers_1.transformActions(app, {
          primaryAction,
          secondaryActions,
          actionGroups
        }),
        breadcrumbs: breadcrumb ? transformBreadcrumb(app, breadcrumb) : void 0
      };
    }
    function transformBreadcrumb(app, breadcrumb, updateBreadcrumb) {
      var button = updateBreadcrumb || Button_1.create(app, {
        label: breadcrumb.content || ""
      });
      updateButton(breadcrumb, button);
      return button;
    }
    function updateButton(actionProps, button) {
      if (!actionProps || !button) {
        return;
      }
      var redirect = transformers_1.generateRedirect(button.app, actionProps.url, actionProps.target, actionProps.external);
      if (redirect) {
        button.subscribe(Button_1.Action.CLICK, redirect, button);
      }
      if (actionProps === null || actionProps === void 0 ? void 0 : actionProps.onAction) {
        button.subscribe(Button_1.Action.CLICK, actionProps.onAction, button);
      }
    }
  }
});

// node_modules/@shopify/app-bridge-react/components/TitleBar/index.js
var require_TitleBar4 = __commonJS({
  "node_modules/@shopify/app-bridge-react/components/TitleBar/index.js"(exports) {
    "use strict";
    var __importDefault = exports && exports.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    var TitleBar_1 = __importDefault(require_TitleBar3());
    exports.default = TitleBar_1.default;
  }
});

// node_modules/@shopify/app-bridge-react/components/Toast/Toast.js
var require_Toast3 = __commonJS({
  "node_modules/@shopify/app-bridge-react/components/Toast/Toast.js"(exports) {
    "use strict";
    var __extends = exports && exports.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
          d2.__proto__ = b2;
        } || function(d2, b2) {
          for (var p in b2)
            if (Object.prototype.hasOwnProperty.call(b2, p))
              d2[p] = b2[p];
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        if (typeof b !== "function" && b !== null)
          throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __importDefault = exports && exports.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.DEFAULT_TOAST_DURATION = void 0;
    var react_1 = __importDefault(require_react());
    var actions_1 = require_actions5();
    var context_1 = require_context();
    exports.DEFAULT_TOAST_DURATION = 5e3;
    var Toast = (
      /** @class */
      function(_super) {
        __extends(Toast2, _super);
        function Toast2() {
          return _super !== null && _super.apply(this, arguments) || this;
        }
        Toast2.prototype.componentDidMount = function() {
          var app = this.context;
          var _a = this.props, error = _a.error, content = _a.content, _b = _a.duration, duration = _b === void 0 ? exports.DEFAULT_TOAST_DURATION : _b, onDismiss = _a.onDismiss, action = _a.action;
          this.toast = actions_1.Toast.create(app, {
            message: content,
            duration,
            isError: error,
            action: (action === null || action === void 0 ? void 0 : action.content) ? {
              content: action === null || action === void 0 ? void 0 : action.content
            } : void 0
          });
          if (action === null || action === void 0 ? void 0 : action.onAction) {
            this.toast.subscribe(actions_1.Toast.Action.ACTION, action === null || action === void 0 ? void 0 : action.onAction);
          }
          this.toast.subscribe(actions_1.Toast.Action.CLEAR, onDismiss);
          this.toast.dispatch(actions_1.Toast.Action.SHOW);
        };
        Toast2.prototype.componentWillUnmount = function() {
          this.toast.unsubscribe();
        };
        Toast2.prototype.render = function() {
          return null;
        };
        Toast2.contextType = context_1.AppBridgeContext;
        return Toast2;
      }(react_1.default.PureComponent)
    );
    exports.default = Toast;
  }
});

// node_modules/@shopify/app-bridge-react/components/Toast/index.js
var require_Toast4 = __commonJS({
  "node_modules/@shopify/app-bridge-react/components/Toast/index.js"(exports) {
    "use strict";
    var __importDefault = exports && exports.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    var Toast_1 = __importDefault(require_Toast3());
    exports.default = Toast_1.default;
  }
});

// node_modules/@shopify/app-bridge-react/components/unstable_Picker/unstable_Picker.js
var require_unstable_Picker = __commonJS({
  "node_modules/@shopify/app-bridge-react/components/unstable_Picker/unstable_Picker.js"(exports) {
    "use strict";
    var __rest = exports && exports.__rest || function(s, e) {
      var t = {};
      for (var p in s)
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
          t[p] = s[p];
      if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
          if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
            t[p[i]] = s[p[i]];
        }
      return t;
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    var react_1 = require_react();
    var Picker_1 = require_Picker2();
    var useAppBridge_1 = require_useAppBridge();
    function Picker(_a) {
      var open = _a.open, onCancel = _a.onCancel, onSelect = _a.onSelect, onSearch = _a.onSearch, onLoadMore = _a.onLoadMore, options = __rest(_a, ["open", "onCancel", "onSelect", "onSearch", "onLoadMore"]);
      var app = useAppBridge_1.useAppBridge();
      var isUnmountedRef = react_1.useRef(false);
      react_1.useEffect(function() {
        return function() {
          isUnmountedRef.current = true;
        };
      }, []);
      var openRef = react_1.useRef(false);
      var optionsRef = react_1.useRef(options);
      var picker = react_1.useMemo(function() {
        return Picker_1.create(app, optionsRef.current);
      }, [app]);
      react_1.useEffect(function() {
        openRef.current = false;
        return function() {
          if (openRef.current && isUnmountedRef.current) {
            picker.dispatch(Picker_1.Action.CANCEL);
          }
        };
      }, [picker]);
      react_1.useEffect(function() {
        if (open === openRef.current)
          return;
        openRef.current = open;
        if (open) {
          picker.dispatch(Picker_1.Action.OPEN);
        } else {
          picker.dispatch(Picker_1.Action.CANCEL);
        }
      }, [picker, open]);
      react_1.useEffect(function() {
        if (!onSelect)
          return;
        return picker.subscribe(Picker_1.Action.SELECT, function() {
          var args = [];
          for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
          }
          openRef.current = false;
          return onSelect.apply(void 0, args);
        });
      }, [picker, onSelect]);
      react_1.useEffect(function() {
        if (!onCancel)
          return;
        return picker.subscribe(Picker_1.Action.CANCEL, function() {
          openRef.current = false;
          return onCancel();
        });
      }, [picker, onCancel]);
      react_1.useEffect(function() {
        if (!onSearch)
          return;
        return picker.subscribe(Picker_1.Action.SEARCH, onSearch);
      }, [picker, onSearch]);
      react_1.useEffect(function() {
        if (!onLoadMore)
          return;
        return picker.subscribe(Picker_1.Action.LOAD_MORE, onLoadMore);
      }, [picker, onLoadMore]);
      react_1.useEffect(function() {
        var shouldUpdate = JSON.stringify(options) !== JSON.stringify(optionsRef.current);
        if (!shouldUpdate)
          return;
        optionsRef.current = options;
        picker.set(options, openRef.current);
      }, [picker, options]);
      return null;
    }
    exports.default = Picker;
  }
});

// node_modules/@shopify/app-bridge-react/components/unstable_Picker/index.js
var require_unstable_Picker2 = __commonJS({
  "node_modules/@shopify/app-bridge-react/components/unstable_Picker/index.js"(exports) {
    "use strict";
    var __importDefault = exports && exports.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    var unstable_Picker_1 = __importDefault(require_unstable_Picker());
    exports.default = unstable_Picker_1.default;
  }
});

// node_modules/@shopify/app-bridge-react/components/index.js
var require_components = __commonJS({
  "node_modules/@shopify/app-bridge-react/components/index.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      Object.defineProperty(o, k2, { enumerable: true, get: function() {
        return m[k];
      } });
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __exportStar = exports && exports.__exportStar || function(m, exports2) {
      for (var p in m)
        if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p))
          __createBinding(exports2, m, p);
    };
    var __importDefault = exports && exports.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.unstable_Picker = exports.Toast = exports.TitleBar = exports.ResourcePicker = exports.Provider = exports.NavigationMenu = exports.ModalContent = exports.Modal = exports.Loading = exports.ContextualSaveBar = void 0;
    var ContextualSaveBar_1 = require_ContextualSaveBar4();
    Object.defineProperty(exports, "ContextualSaveBar", { enumerable: true, get: function() {
      return __importDefault(ContextualSaveBar_1).default;
    } });
    var Loading_1 = require_Loading4();
    Object.defineProperty(exports, "Loading", { enumerable: true, get: function() {
      return __importDefault(Loading_1).default;
    } });
    var Modal_1 = require_Modal4();
    Object.defineProperty(exports, "Modal", { enumerable: true, get: function() {
      return __importDefault(Modal_1).default;
    } });
    Object.defineProperty(exports, "ModalContent", { enumerable: true, get: function() {
      return Modal_1.ModalContent;
    } });
    var NavigationMenu_1 = require_NavigationMenu4();
    Object.defineProperty(exports, "NavigationMenu", { enumerable: true, get: function() {
      return __importDefault(NavigationMenu_1).default;
    } });
    var Provider_1 = require_Provider2();
    Object.defineProperty(exports, "Provider", { enumerable: true, get: function() {
      return __importDefault(Provider_1).default;
    } });
    var ResourcePicker_1 = require_ResourcePicker4();
    Object.defineProperty(exports, "ResourcePicker", { enumerable: true, get: function() {
      return __importDefault(ResourcePicker_1).default;
    } });
    var TitleBar_1 = require_TitleBar4();
    Object.defineProperty(exports, "TitleBar", { enumerable: true, get: function() {
      return __importDefault(TitleBar_1).default;
    } });
    var Toast_1 = require_Toast4();
    Object.defineProperty(exports, "Toast", { enumerable: true, get: function() {
      return __importDefault(Toast_1).default;
    } });
    var unstable_Picker_1 = require_unstable_Picker2();
    Object.defineProperty(exports, "unstable_Picker", { enumerable: true, get: function() {
      return __importDefault(unstable_Picker_1).default;
    } });
    __exportStar(require_RoutePropagator2(), exports);
    __exportStar(require_ClientRouter2(), exports);
  }
});

// node_modules/@shopify/app-bridge-react/index.js
var require_app_bridge_react = __commonJS({
  "node_modules/@shopify/app-bridge-react/index.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      Object.defineProperty(o, k2, { enumerable: true, get: function() {
        return m[k];
      } });
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __exportStar = exports && exports.__exportStar || function(m, exports2) {
      for (var p in m)
        if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p))
          __createBinding(exports2, m, p);
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.useAppBridge = exports.Context = void 0;
    var context_1 = require_context();
    Object.defineProperty(exports, "Context", { enumerable: true, get: function() {
      return context_1.AppBridgeContext;
    } });
    var useAppBridge_1 = require_useAppBridge();
    Object.defineProperty(exports, "useAppBridge", { enumerable: true, get: function() {
      return useAppBridge_1.useAppBridge;
    } });
    __exportStar(require_components(), exports);
    __exportStar(require_hooks(), exports);
  }
});

// empty-module:./env.server
var require_env3 = __commonJS({
  "empty-module:./env.server"(exports, module) {
    module.exports = {};
  }
});

// app/root.tsx
var import_node = __toESM(require_node(), 1);

// app/components/AppBridgeProvider.tsx
var import_react = __toESM(require_react(), 1);
var import_app_bridge_react = __toESM(require_app_bridge_react(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\components\\\\AppBridgeProvider.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\components\\AppBridgeProvider.tsx"
  );
  import.meta.hot.lastModified = "1746771988738.2205";
}
var defaultTranslations = {
  Polaris: {
    Common: {
      loading: "Loading"
    }
  }
};
var {
  Provider
} = import_app_bridge_react.default;
function AppBridgeProvider({
  children
}) {
  _s();
  const {
    ENV
  } = useLoaderData();
  const [translations, setTranslations] = (0, import_react.useState)(defaultTranslations);
  const [config, setConfig] = (0, import_react.useState)(null);
  (0, import_react.useEffect)(() => {
    import("/build/_shared/en-ZGRTL6OS.js").then((module) => setTranslations(module.default)).catch((error) => console.error("Failed to load translations:", error));
    if (typeof window !== "undefined") {
      const host = window.location.host;
      setConfig({
        host,
        apiKey: ENV.SHOPIFY_API_KEY,
        forceRedirect: true
      });
    }
  }, [ENV.SHOPIFY_API_KEY]);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AppProvider, { i18n: translations, children: config ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Provider, { config, children }, void 0, false, {
    fileName: "app/components/AppBridgeProvider.tsx",
    lineNumber: 62,
    columnNumber: 17
  }, this) : children }, void 0, false, {
    fileName: "app/components/AppBridgeProvider.tsx",
    lineNumber: 61,
    columnNumber: 10
  }, this);
}
_s(AppBridgeProvider, "3QsTPIl2JjACl0VKkUmBMCTK93s=", false, function() {
  return [useLoaderData];
});
_c = AppBridgeProvider;
var _c;
$RefreshReg$(_c, "AppBridgeProvider");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/root.tsx
var import_env = __toESM(require_env3(), 1);
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\root.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\root.tsx"
  );
}
var links = () => [{
  rel: "stylesheet",
  href: "/styles/app.css"
}];
function App() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("html", { lang: "en", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("head", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("meta", { charSet: "utf-8" }, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 39,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("meta", { name: "viewport", content: "width=device-width,initial-scale=1" }, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 40,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Meta, {}, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 41,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Links, {}, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 42,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/root.tsx",
      lineNumber: 38,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("body", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(AppBridgeProvider, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Outlet, {}, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 46,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 45,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(ScrollRestoration, {}, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 48,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Scripts, {}, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 49,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(LiveReload, {}, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 50,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/root.tsx",
      lineNumber: 44,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/root.tsx",
    lineNumber: 37,
    columnNumber: 10
  }, this);
}
_c2 = App;
var _c2;
$RefreshReg$(_c2, "App");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  App as default,
  links
};
//# sourceMappingURL=/build/root-Z27LDKIS.js.map
