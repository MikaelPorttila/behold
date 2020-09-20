import { WorkingFile } from './../../lib/types/working_file.ts';

export class InjectionData {
    constructor(
        public file: WorkingFile
    ) {
        WorkingFile.tempOmportsNotUsedAsValuesFix;
    }
}