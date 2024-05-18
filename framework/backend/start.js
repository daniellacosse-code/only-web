import { resolve } from "https://deno.land/std@0.216.0/path/mod.ts";
import { serveFile } from "https://deno.land/std@0.140.0/http/file_server.ts";

/**
 * Start the OnlyWeb framework server.
 * @param {number} [port] The port to listen on.
 * @returns {void} Nothing is returned: the server is started.
 */
export default ({ port = 8080 } = {}) =>
  Deno.serve({ port }, (request) => {
    const requestURL = new URL(request.url);
    const requestPath = requestURL.pathname.startsWith("/")
      ? requestURL.pathname
      : `/${requestURL.pathname}`;

    for (const route of globalThis.customPages.keys()) {
      if (requestPath === route) {
        return globalThis.customPages.get(route)(request);
      }
    }

    if (requestPath.startsWith("/framework")) {
      // TODO: serve framework files somehow
    }

    try {
      return serveFile(request, resolve(Deno.cwd(), `.${requestPath}`));
    } catch {
      return new Response("Not Found", { status: 404 });
    }
  });
