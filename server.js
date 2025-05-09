import { createRequestHandler } from "@remix-run/express";
import { broadcastDevReady } from "@remix-run/node";
import express from "express";
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const port = 3000;
const host = '127.0.0.1';

// Import build using dynamic import
const getLoadContext = async () => {
  const build = await import('./build/index.js');
  return { build };
};

app.all(
  "*",
  async (req, res, next) => {
    const { build } = await getLoadContext();
    return createRequestHandler({
      build,
      mode: process.env.NODE_ENV
    })(req, res, next);
  }
);

app.listen(port, host, async () => {
  console.log(`Express server listening on http://${host}:${port}`);
  
  if (process.env.NODE_ENV === "development") {
    const { build } = await getLoadContext();
    broadcastDevReady(build);
  }
});