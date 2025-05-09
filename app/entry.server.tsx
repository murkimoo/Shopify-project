import { PassThrough } from "stream";
import { Response } from "@remix-run/web-fetch"; 
import { RemixServer } from "@remix-run/react";
import { renderToPipeableStream } from "react-dom/server";
import type { EntryContext } from "@remix-run/node";

export default function handleRequest(
  request: Request,
  responseStatusCode: number,
  responseHeaders: Headers,
  remixContext: EntryContext
) {
  return new Promise((resolve, reject) => {
    const { pipe, abort } = renderToPipeableStream(
      <RemixServer context={remixContext} url={request.url} />,
      {
        onShellReady() {
          const body = new PassThrough();
          responseHeaders.set("Content-Type", "text/html");
          resolve(
            new Response(body, {
              headers: responseHeaders,
              status: responseStatusCode,
            })
          );
          pipe(body);
        },
        onError(error: any) {
          reject(error);
        },
      }
    );
    setTimeout(abort, 5000);
  });
}