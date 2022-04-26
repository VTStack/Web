import { TaskToExecute } from './task-to-execute.model';
export interface TasksApiResponse {
    completed: boolean;
    retryDuring: number | null;
    executionId: string | null;
    tasks: TaskToExecute[];
    maxParallel: number;
    criticalErrorMessage: string | null;
}
