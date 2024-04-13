import Backend from "/framework/backend/module.js";

Backend.Page.Register(
  "/robots.txt",
  () => Backend.Page.Response.text`
  User-agent: *
  Allow: /`
);
