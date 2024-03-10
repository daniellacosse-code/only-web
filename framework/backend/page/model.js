/**
 * @typedef PageRequest
 * @extends Request
 * @property {string} language The language of the request.
 * @property {URL} url The URL of the request.
 */

/**
 * @typedef PageResponse
 * @extends Response
 * @property {string} mimetype The mimetype of the response.
 */

/**
 * @typedef {(...strings: string[]) => PageResponse} PageTemplate
 */

/**
 * @description A context-aware inliner that can inline elements, messages, and metadata into an HTML document.
 * @typedef Inliner
 * @property {(filePaths: Array<string>) => Response} elements Inlines the given custom element registrations into the HTML document.
 * @property {(message: string) => string} message Retrieves the translated message with the given key.
 * @property {(metadata: InlineMetadata) => Response} metadata Inlines the given metadata into the HTML document.
 */

/**
 * @description Metadata that can be inlined into an HTML document.
 * @typedef InlineMetadata
 * @property {string} canonicalUrl The canonical URL of the page.
 * @property {?string} description The description of the page.
 * @property {?string} iconImagePath The path to the icon image of the page.
 * @property {?string} previewImagePath The path to the preview image of the page.
 * @property {?string} splashImagePath The path to the splash image of the page.
 * @property {?string} title The title of the page.
 */
