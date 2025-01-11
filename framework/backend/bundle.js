import start from "./start.js";

import * as CONSTANTS from "./constants.js";

import Inliner from "./page/inliner.js";
import Register from "./page/register.js";
import Response from "./page/response.js";

globalThis.$Backend = {
  ...CONSTANTS,
  start,
  Page: {
    Inliner,
    Register,
    Response
  }
};

/**
 * A module containing the backend-specific aspects of the framework.
 * @module Backend
 */
export default globalThis.$Backend;
