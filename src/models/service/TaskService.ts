
import Service from './Service.js';

import TaskResource from '../resource/TaskResource.js';
import TaskConverter from '../../converters/TaskConverter.js';
import { ITaskResource, DbTask, Task } from '../../abstracts/entities/Task.js';

export default class TaskService extends Service {
    private taskResource: ITaskResource;
    private taskCacheKey = 'task';
    private tasksCacheKey = 'tasks';

    constructor() {
        super();

        this.taskResource = new TaskResource();
    }

    async getTaskById(id: number): Promise<Task> {
        const taskCacheKey = this.cache.getEntityCacheKey(`${this.taskCacheKey}${id}`);
        const cachedTask = await this.cache.readCache<Task>(taskCacheKey);

        if (cachedTask) {
            console.log('Getting task from cache...');
            return cachedTask;
        }

        const dbTask: DbTask = await this.taskResource.getTaskById(id);

        if (!dbTask) {
            throw new Error('Task Not found in database');
        }

        const task: Task = TaskConverter.convertDbTask(dbTask);

        this.cache.writeCache<Task>(taskCacheKey, task);

        return task;
    }

    async getTasks(): Promise<Task[]> {
        const tasksCacheKey = this.cache.getEntityCacheKey(this.tasksCacheKey);
    
        const cachedTasks = await this.cache.readCache<Task[]>(tasksCacheKey);

        if (cachedTasks) {
            console.log('Getting Tasks from Cache...');
            return cachedTasks;
        }

        const dbTasks: DbTask[] = await this.taskResource.getTasks();
        const tasks: Task[] = TaskConverter.convertDbTasks(dbTasks);

        this.cache.writeCache<Task[]>(tasksCacheKey, tasks);

        return tasks;
    }
}