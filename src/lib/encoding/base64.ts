export class Base64 {
    constructor(
        public data: string
    ) {}

    static async fromFile(path: string): Promise<Base64> {      
        const bytes = await Deno.readFile(Deno.args[0]);
        return this.fromBytes(bytes);
    }

    static fromBytes(bytes: Uint8Array): Base64 {
        const charArray: string[] = [];
        const CHUNK_SIZE = 0x8000;
        for (let i = 0; i < bytes.length; i += CHUNK_SIZE) { 
            charArray.push(String.fromCharCode.apply(null, bytes.subarray(i, i + CHUNK_SIZE) as any));
        }

        return new Base64(btoa(charArray.join("")));
    }

    static tempOmportsNotUsedAsValuesFix = null;
}