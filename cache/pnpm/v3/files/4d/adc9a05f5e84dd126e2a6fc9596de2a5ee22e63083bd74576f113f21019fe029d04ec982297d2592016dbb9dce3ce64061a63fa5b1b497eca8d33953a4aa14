export declare function runCommandAndStoreInCloud(): Promise<void>;
/**
 * https://github.com/nrwl/nx/blob/master/packages/nx/src/utils/find-workspace-root.ts
 * Recursive function that walks back up the directory
 * tree to try and find a workspace file.
 *
 * @param dir Directory to start searching with
 */
export declare function findWorkspaceRoot(dir: string): WorkspaceTypeAndRoot | null;
/**
 * https://github.com/nrwl/nx/blob/master/packages/nx/src/utils/find-workspace-root.ts
 */
export interface WorkspaceTypeAndRoot {
    type: 'nx' | 'angular';
    dir: string;
}
