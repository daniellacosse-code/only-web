import { encode } from "https://deno.land/std@v0.56.0/encoding/base64.ts";

import { HTMLResponse } from "/framework/page/html.js";
import { minify } from "/framework/shared/html/minify.js";

// register elements inline ONLY when you're sure all
// their dependencies are also registered
export function elements(hostname, ...filePaths) {
  let result = "";

  for (const filePath of filePaths) {
    const fileContents = Deno.readTextFileSync(`.${filePath}`);
    const sanitizedScript = minify(fileContents)
      .replaceAll(' from "/', ` from "${hostname}/`)
      .replaceAll('import "/', `import "${hostname}/`);

    result += `<script defer type="module"
      src="data:application/javascript;base64,${encode(sanitizedScript)}"
    ></script>`;
  }

  return new HTMLResponse(result);
}
