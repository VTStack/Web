import { TargetConfiguration } from '../config/workspace-json-project-json';
export declare type PackageJsonTargetConfiguration = Omit<TargetConfiguration, 'executor'>;
export interface NxProjectPackageJsonConfiguration {
    targets?: Record<string, PackageJsonTargetConfiguration>;
}
export interface PackageJson {
    name: string;
    scripts?: Record<string, string>;
    dependencies?: Record<string, string>;
    devDependencies?: Record<string, string>;
    peerDependencies?: Record<string, string>;
    workspaces?: string[] | {
        packages: string[];
    };
    nx?: NxProjectPackageJsonConfiguration;
    generators?: string;
    schematics?: string;
    builders?: string;
    executors?: string;
    'nx-migrations'?: string;
}
export declare function buildTargetFromScript(script: string, nx: NxProjectPackageJsonConfiguration): {
    executor: string;
    options: any;
    outputs?: string[];
    dependsOn?: import("../config/workspace-json-project-json").TargetDependencyConfig[];
    configurations?: {
        [config: string]: any;
    };
    defaultConfiguration?: string;
};
