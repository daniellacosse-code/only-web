import Frontend from "/framework/frontend/module.js";

import "/app/elements/core/text.js";
import "/app/elements/core/loading/skeleton.js";

Frontend.Element.Register("demo-frame", {
  buildAttributes: {
    height: Number,
    src: String,
    title: String
  },
  handleMount() {
    requestAnimationFrame(() => {
      this.querySelector("iframe").addEventListener("load", () => {
        this.querySelector("core-loading-skeleton").classList.add("loaded");
      });
    });
  },
  handleBuild({ src, title = "Demo Frame", height = 500 }) {
    return Frontend.Element.html`<style>
      :host {
        align-items: left;
        display: flex;
        flex-direction: column;
        gap: var(--size-narrow);
        height: 100%;
        justify-content: center;
        width: 100%;
      }

      .container {
        position: relative;
      }

      iframe {
        width: 100%;
        height: ${height}px;
        border: none;
      }

      core-loading-skeleton {
        /* TODO: Remove this once the loading skeleton border radius is directly editable */
        --size-narrow: 0;

        display: inline-block;
        height: ${height}px;
        left: 0;
        opacity: 1;
        position: absolute;
        top: 0;
        transition: opacity 350ms ease;
        width: 100%;
      }

      core-loading-skeleton.loaded {
        opacity: 0;
      }
    </style>
    <header>
      <core-text type="subtitle">${title}</core-text>
    </header>
    <div class="container">
      <iframe src="${src}" title="${title}" loading="lazy"></iframe>
      <core-loading-skeleton></core-loading-skeleton>
    </div>`;
  }
});
