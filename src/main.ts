import { WebView, mimeLookup } from "../deps.ts";
let base64Img = '';

if (Deno.args.length) {
  const filePath = Deno.args[0];
  const split = filePath.split('.');
  const fileExtension = split[split.length - 1];
  const mime = mimeLookup(fileExtension);
  const bytes = await Deno.readFile(Deno.args[0]);

  const charArray: string[] = [];
  const CHUNK_SIZE = 0x8000;
  for (let i = 0; i < bytes.length; i += CHUNK_SIZE) { 
		charArray.push(String.fromCharCode.apply(null, bytes.subarray(i, i + CHUNK_SIZE) as any));
	}

  base64Img = `data:${mime};base64, ${btoa(charArray.join(""))}`;
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