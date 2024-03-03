import FrontendElement from "/framework/frontend-element/module.js";

FrontendElement.Register("translation-helper", {
  templateAttributes: {
    code: String
  },
  async handleMount({ code = "en-US" }) {
    try {
      const messages = await (
        await fetch(`/app/assets/messages/${code}.json`)
      ).json();

      for (const [key, value] of Object.entries(messages)) {
        const [keyPath, elementID] = key.split("#");
        if (location.pathname !== keyPath) continue;

        const element = document.querySelector(`#${elementID}`);
        if (element) element.textContent = value;
      }
    } catch (error) {
      console.error(`Language "${code}" not supported.`, error);
    }
  }
});
