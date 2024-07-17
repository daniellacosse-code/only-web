import { existsSync } from "https://deno.land/std@0.224.0/fs/exists.ts";
import { resolve } from "https://deno.land/std@0.216.0/path/mod.ts";
import { serveFile } from "https://deno.land/std@0.140.0/http/file_server.ts";

import * as constants from "./constants.js";

const resolveConfiguration = (configName) =>
  Deno.env.get(configName) ?? constants[configName];

/**
 * Start the OnlyWeb framework server.
 * @param {number} [port] The port to listen on.
 * @returns {void} Nothing is returned: the server is started.
 */
export default ({ port = resolveConfiguration("ONLY_WEB_SERVER_PORT") } = {}) =>
  Deno.serve({ port }, async (request) => {
    const requestURL = new URL(request.url);
    const requestPath = requestURL.pathname.startsWith("/")
      ? requestURL.pathname
      : `/${requestURL.pathname}`;

    for (const route of globalThis.customPages.keys()) {
      if (requestPath === route) {
        return globalThis.customPages.get(route)(request);
      }
    }

    const absolutePath = resolve(Deno.cwd(), `.${requestPath}`);

    if (requestPath.startsWith("/framework") && !existsSync(absolutePath)) {
      const response = await fetch(
        resolveConfiguration("ONLY_WEB_SOURCE") +
          "/" +
          resolveConfiguration("ONLY_WEB_SOURCE_BRANCH") +
          requestPath
      );

      console.log({
        requestPath,
        absolutePath
      });

      response.headers.set("content-type", "text/javascript; charset=utf-8");

      console.log(response.headers.get("content-type"));

      return response;
    }

    try {
      return serveFile(request, absolutePath);
    } catch {
      return new Response("Not Found", { status: 404 });
    }
  });
