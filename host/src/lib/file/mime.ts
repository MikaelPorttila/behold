import { lookup } from "MimeTypes";

export const getMime = (fileName: string): string => {
    const split = fileName.split('.');
    const fileExtension = split[split.length - 1];
    const mime = lookup(fileExtension);
    return mime as string;
}