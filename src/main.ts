import { WebView } from "../deps.ts";
import { Base64 } from './lib/encoding/base64.ts';
let base64Img = '';

if (Deno.args.length) {
  const base64 = await Base64.fromFile(Deno.args[0]);
  base64Img = `data:${base64.mime};base64, ${base64.data}`;
}

const html = `
  <html>
    <body>
      <img style="width:100%; height: 100%;" alt="image element" src="${base64Img}" />
    </body>
  </html>
`;

await new WebView({
  title: `Behold`,
  url: `data:text/html,${encodeURIComponent(html)}`,
  height: 600,
  resizable: true,
  debug: true,
  frameless: false,
}).run();