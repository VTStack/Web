import { CacheUrls } from './cache-urls.model';
export declare type TaskStatus = 'success' | 'failure' | 'skipped' | 'local-cache-kept-existing' | 'local-cache' | 'remote-cache';
export interface TaskResult {
    task: Task;
    status: TaskStatus;
    code: number;
    terminalOutput?: string;
}
export interface Task {
    id: string;
    target: {
        project: string;
        target: string;
        configuration?: string;
    };
    overrides: any;
    projectRoot?: string;
    hash?: string;
    hashDetails?: {
        command: string;
        nodes: {
            [name: string]: string;
        };
        implicitDeps: {
            [fileName: string]: string;
        };
        runtime: {
            [input: string]: string;
        };
    };
}
export declare type RunContext = {
    statuses: {
        [hash: string]: 'remote-cache-hit' | 'cache-miss';
    };
    runUrl?: string;
    allTasks: Task[];
    scheduledTasks: Task[];
    requests: {
        [hash: string]: Promise<CacheUrls>;
    };
};
