import { RunContext, Task, TaskResult } from '../../models/run-context.model';
import { TaskExecution } from '../../models/task-execution.model';
import { OutputObfuscator } from '../../terminal-output/output-obfuscator';
export declare class CloudEnabledLifeCycle {
    private readonly runContext;
    private readonly cacheDirectory;
    private readonly skipNxCache;
    private readonly collectTerminalOutput;
    private readonly cacheableOperations;
    private readonly outputObfuscator;
    private readonly tasks;
    private static MAX_CHARACTERS_FAILED_TASK;
    private static MAX_CHARACTERS_SUCCESSFUL_TASK;
    private static MAX_CHARACTERS_CACHED_TASK;
    constructor(runContext: RunContext, cacheDirectory: string | undefined, skipNxCache: boolean, collectTerminalOutput: boolean, cacheableOperations: string[], outputObfuscator: OutputObfuscator, tasks: TaskExecution[]);
    scheduleTask(task: Task): void;
    startTask(task: Task): void;
    endTask(task: Task, code: number): void;
    endTasks(tasks: TaskResult[]): void;
    endCommand(): void;
    private updateStartedTask;
    private getTerminalOutput;
    private cleanUpHashDetails;
    private readTerminalOutputFile;
}
