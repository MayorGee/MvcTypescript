import Database from '../../Database.js';
import AbstractResource from './AbstractResource.js';

import { DbTask, ITaskResource } from '../../abstracts/entities/Task.js';

export default class TaskResource extends AbstractResource implements ITaskResource {
    public async getTasks(): Promise<DbTask[]> {
        const tasks = await Database.runQuery(`
            SELECT * FROM Tasks
            JOIN Specialty_Area
            ON Tasks.Specialty_Area_Id = Specialty_Area.Id
            JOIN Module
            ON Tasks.Module_Id = Module.Id
        `);

        return this.escapeHtmlFromQueryData(tasks);
    }

    public async getTaskById(id: number): Promise<DbTask> {
        const task = await Database.runQuery(`
            SELECT * FROM Tasks
            WHERE Id = ${id}
        `);  

        return this.escapeHtmlFromQueryData(task[0]);
    }
}