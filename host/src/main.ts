import { WebView } from "WebView";
import { loadFile } from './lib/file/file_loader.ts'
import { getTemplate } from "./client/client.ts";
import { InjectionData } from './client/types/injection_data.ts';

if (Deno.args.length) {
  const currentFile = await loadFile(Deno.args[0]);
  const data = new InjectionData(currentFile);
  const html = getTemplate(data);
  
  await new WebView({
    title: currentFile.title,
    url: `data:text/html,${encodeURIComponent(html)}`,
    height: 600,
    resizable: true,
    debug: true,
    frameless: false,
  }).run();
};
