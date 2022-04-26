import { E2EEncryption } from './e2e-encryption';
export declare class FileStorage {
    private readonly encryption;
    constructor(encryption: E2EEncryption);
    retrieve(hash: string, url: string, cacheDirectory: string): Promise<void>;
    store(hash: string, url: string, cacheDirectory: string): Promise<any>;
    private createFileName;
    private downloadFile;
    private createCommitFile;
    private createCommitFilePath;
    private createFile;
    private uploadFile;
}
