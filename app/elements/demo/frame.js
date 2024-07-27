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

      .frame-container {
        position: relative;
      }

      iframe {
        width: 100%;
        height: ${height}px;
        border: none;
      }

      core-loading-skeleton {
        --core-loading-skeleton-border-radius: 0;

        display: inline-block;
        height: ${height}px;
        left: 0;
        position: absolute;
        top: 0;
        width: 100%;
      }

      core-loading-skeleton.loaded {
        animation-duration: var(--animation-duration-fast);
        animation-fill-mode: forwards;
        animation-name: disappear;
        animation-timing-function: var(--animation-timing-function);
      }

      @keyframes disappear {
        0% {
          opacity: 1;
          display: inline-block;
        }
        100% {
          opacity: 0;
          display: none;
        }
      }
    </style>
    <header>
      <core-text type="subtitle">${title}</core-text>
    </header>
    <div class="frame-container">
      <iframe src="${src}" title="${title}" loading="lazy"></iframe>
      <core-loading-skeleton></core-loading-skeleton>
    </div>`;
  }
});
