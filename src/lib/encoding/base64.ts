import { mimeLookup } from "../../../deps.ts";

export class Base64 {
    constructor(
        public data: string,
        public mime: string
    ) {}

    static async fromFile(path: string): Promise<Base64> {      
        const split = path.split('.');
        const fileExtension = split[split.length - 1];
        const mime = mimeLookup(fileExtension);
        const bytes = await Deno.readFile(Deno.args[0]);

        return this.fromBytes(bytes, mime as string);
    }

    static fromBytes(bytes: Uint8Array, mime: string): Base64 {
        const charArray: string[] = [];
        const CHUNK_SIZE = 0x8000;
        for (let i = 0; i < bytes.length; i += CHUNK_SIZE) { 
            charArray.push(String.fromCharCode.apply(null, bytes.subarray(i, i + CHUNK_SIZE) as any));
        }

        return new Base64(btoa(charArray.join("")), mime as string);
    }
}