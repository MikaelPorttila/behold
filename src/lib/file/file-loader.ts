
import { Base64 } from "../encoding/base64.ts";
import { WorkingFile } from './../types/mod.ts';
import { getMime } from './mime.ts';

export const loadFile = async (filePath: string): Promise<WorkingFile> => {
    const title = new URL(filePath, import.meta.url).pathname
    const base64EncodedFile = await Base64.fromFile(Deno.args[0]);
    const mime = getMime(filePath);

    return new WorkingFile(title, base64EncodedFile, mime);
}  