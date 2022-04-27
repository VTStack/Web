export declare type Language = 'js' | 'ts';
export declare type UnitTestRunner = 'jest' | 'none';
export declare type NestSchematic = 'class' | 'controller' | 'decorator' | 'filter' | 'gateway' | 'guard' | 'interceptor' | 'interface' | 'middleware' | 'module' | 'pipe' | 'provider' | 'resolver' | 'resource' | 'service';
export declare type TransportLayer = 'rest' | 'graphql-code-first' | 'graphql-schema-first' | 'microservice' | 'ws';
export declare type NestGeneratorOptions = {
    name: string;
    project: string;
    directory?: string;
    flat?: boolean;
    skipFormat?: boolean;
};
export declare type NestGeneratorWithLanguageOption = NestGeneratorOptions & {
    language?: Language;
};
export declare type NestGeneratorWithTestOption = NestGeneratorOptions & {
    unitTestRunner?: UnitTestRunner;
};
export declare type NestGeneratorWithResourceOption = NestGeneratorOptions & {
    type?: TransportLayer;
    crud?: boolean;
};
export declare type NormalizedOptions = {
    name: string;
    sourceRoot: string;
    flat?: boolean;
    language?: 'js' | 'ts';
    module?: string;
    path?: string;
    skipFormat?: boolean;
    skipImport?: boolean;
    spec?: boolean;
};
