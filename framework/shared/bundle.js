import handleTemplate from "./handle-template.js";

import escape from "./html/escape.js";
import minify from "./html/minify.js";

import parse from "./user-agent/parse.js";
import check from "./user-agent/check.js";
import merge from "./user-agent/merge.js";

import Log, { LogError } from "./log.js";

/**
 * A handful of shared utilities that can be utilized across the frontend and backend.
 * @module Shared
 */
globalThis.$Shared = {
  UserAgent: {
    parse,
    check,
    merge
  },
  HTML: {
    escape,
    minify
  },
  Log,
  LogError,
  handleTemplate
};

export default globalThis.$Shared;
