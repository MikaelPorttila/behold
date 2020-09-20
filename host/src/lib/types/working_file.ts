import { Base64 } from './../encoding/base64.ts';

export class WorkingFile {
    constructor(
        public title: string,
        public base64File: Base64,
        public mime: string
    ) {
        // TODO: (Mikael) Remove this once Deno has fixed the issue.
        Base64.tempOmportsNotUsedAsValuesFix;
    }

    static tempOmportsNotUsedAsValuesFix = null;
} 