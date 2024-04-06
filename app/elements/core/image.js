import Frontend from "/framework/frontend/module.js";

import "/app/elements/core/loading/skeleton.js";

Frontend.Element.Register("core-image", {
  host: {
    defaultStyles: Frontend.Element.html`<style>
        :host {
          display: inline-block;
        }
      </style>`,
    handleMount({ src, alt, ...cdnConfig }) {
      const url = new URL(src);

      for (const [key, value] of Object.entries(cdnConfig)) {
        url.searchParams.set(key, value);
      }

      this.__image__ = new Image(cdnConfig.width, cdnConfig.height);
      this.__image__.onload = () => (this.template.attributes.loaded = true);
      this.__image__.src = url.toString();
      this.__image__.alt = alt;
    }
  },
  template: {
    buildAttributes: {
      src: String,
      alt: String,
      width: String,
      height: String,
      loaded: Boolean
    },
    handleBuild({ width, height, loaded }) {
      if (loaded) {
        return Frontend.Element.html`<style>
            img {
              width: ${width};
              height: ${height};
              object-fit: contain;
              overflow: hidden;
              pointer-events: none;
            }
          </style>
          ${this.__image__}`;
      }

      return Frontend.Element.html`
        <core-loading-skeleton></core-loading-skeleton>`;
    }
  }
});
