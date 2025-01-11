import "../../framework/backend/bundle.js";

$Backend.Page.Register(
  "/robots.txt",
  () => $Backend.Page.Response.text`
  User-agent: *
  Allow: /`
);
