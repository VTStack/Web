import { NormalModuleReplacementPlugin } from 'webpack';
import { SharedLibraryConfig } from './models';
export declare function shareWorkspaceLibraries(libraries: string[], tsConfigPath?: string): {
    getAliases: () => any[];
    getLibraries: () => void;
    getReplacementPlugin: () => NormalModuleReplacementPlugin;
} | {
    getAliases: () => {};
    getLibraries: (eager?: boolean) => Record<string, SharedLibraryConfig>;
    getReplacementPlugin: () => NormalModuleReplacementPlugin;
};
export declare function sharePackages(packages: string[]): Record<string, SharedLibraryConfig>;
