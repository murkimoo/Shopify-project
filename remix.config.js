/** @type {import('@remix-run/dev').AppConfig} */
export default {
  future: {
    v2_routeConvention: true,
    v2_meta: true,
    v2_errorBoundary: true,
    v2_normalizeFormMethod: true,
  },
  serverModuleFormat: "esm",
  serverPlatform: "node",
  publicPath: "/build/"
};