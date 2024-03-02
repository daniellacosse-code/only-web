import FrontendElement from "/framework/frontend-element/entry.js";

import * as constants from "/app/constants.js";

FrontendElement.Register("reload-helper", {
  handleMount() {
    // TODO(#127): pull origin from the request url
    if (!globalThis.location.host.startsWith("localhost")) return;

    const socket = new WebSocket(
      `ws://localhost:${constants.DENO_LIVERELOAD_PORT}`
    );

    socket.onopen = () => console.log("LiveReload connected~");
    socket.onmessage = (event) => event.data === "reload" && location.reload();
  }
});