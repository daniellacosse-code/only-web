(function () {
  if (!globalThis.location.host.startsWith("localhost")) return;

  const socket = new WebSocket("ws://localhost:35729");

  socket.onopen = () => console.log("LiveReload connected~");
  socket.onmessage = (event) => event.data === "reload" && location.reload();
})();
