import { encode } from "https://deno.land/std@v0.56.0/encoding/base64.ts";

import { minify } from "/framework/shared/html/minify.js";
import { response } from "/framework/backend/html/response.js";

// inline element definitiens ONLY when you're sure they have
// their dependencies already inlined
export function inline(filePath, host = "http://localhost:8000") {
  const fileContents = Deno.readTextFileSync(`.${filePath}`);
  const sanitizedScript = minify(fileContents)
    .replaceAll(' from "/', ` from "${host}/`)
    .replaceAll('import "/', `import "${host}/`);

  return response`<script type="module" src="data:application/javascript;base64,${encode(
    sanitizedScript
  )}"></script>`;
}
