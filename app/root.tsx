import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import { AppProvider } from "@shopify/polaris";
import { json, LinksFunction } from "@remix-run/node";
import { AppBridgeProvider } from "~/components/AppBridgeProvider";
import { getEnvVar } from "./env.server";
import "@shopify/polaris/build/esm/styles.css";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: "/styles/app.css" },
];

export const loader = async () => {
  return json({
    ENV: {
      SHOPIFY_API_KEY: getEnvVar("SHOPIFY_API_KEY"),
    },
  });
};

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <AppBridgeProvider>
          <Outlet />
        </AppBridgeProvider>
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}