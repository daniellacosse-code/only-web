import Frontend from "/framework/frontend/module.js";

Frontend.Element.Register("core-text", {
  buildAttributes: {
    type: String
  },
  handleBuild({ type = "paragraph" }) {
    return Frontend.Element.html`<style>
          slot {
            cursor: inherit;
            font-family: system-ui;
            font-weight: ${type === "title" ? "bold" : "normal"};
            font-size: var(--size-text-${type});
            color: var(--color-${
              type === "subtitle" ? "neutral" : "foreground"
            });
            line-height: 1;
            user-select: text;
          }
        </style>
        <slot></slot>`;
  }
});
