import { WebView } from "WebView";
import { loadFile } from './lib/file/file-loader.ts'
import { composeViewport } from './client/mod.ts';

if (Deno.args.length) {
  const currentFile = await loadFile(Deno.args[0]);
  const base64Img = `data:${currentFile.mime};base64, ${currentFile.base64File.data}`;
  const html = composeViewport(base64Img);

  await new WebView({
    title: currentFile.title,
    url: `data:text/html,${encodeURIComponent(html)}`,
    height: 600,
    resizable: true,
    debug: true,
    frameless: false,
  }).run();
};
