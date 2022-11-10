import { promises as fs } from 'fs';

import TaskResource from '../resource/TaskResource.js';
import TaskConverter from '../../converters/TaskConverter.js';
import { ITaskResource, Task } from '../../abstracts/entities/Task.js';

import { EntityById } from '../../abstracts/Records.js';

const taskById: EntityById = {};

export default class TaskProvider {
    taskResource: ITaskResource;

    constructor() {
        this.taskResource = new TaskResource();
    }

    async getTaskById(id: number): Promise<Task> {
        if (taskById[id]) {
            console.log('Getting task from Cache...');
            return taskById[id] as Task;
        }

        const dbTask = await this.taskResource.getTaskById(id);

        if (!dbTask) {
            throw new Error('Task not found in database');
        }

        const task: Task = TaskConverter.convertDbTask(dbTask);

        taskById[id] = task;

        return task;
    }

    async getTasks(): Promise<Task[]> {
        const cacheFile = './cache/tasks.json';

        try {
            const cachedTasks: string = await fs.readFile(cacheFile, { encoding: 'utf-8' });
            
            if (cachedTasks) {
                console.log('Tasks from cache');
                return JSON.parse(cachedTasks);
            }
        } catch {}

        const dbTasks = await this.taskResource.getTasks();
        const tasks: Task[] = TaskConverter.convertDbTasks(dbTasks);

        await fs.writeFile(cacheFile, JSON.stringify(tasks));

        return tasks;
    }

}