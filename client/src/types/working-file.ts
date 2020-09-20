import { Base64 } from "./Base64";

export class WorkingFile {
    constructor(
        public title: string,
        public base64File: Base64,
        public mime: string
    ) {}
} 