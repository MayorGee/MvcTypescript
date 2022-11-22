import Database from '../../Database.js';
import AbstractResource from './AbstractResource.js';

import { DbTask, ITaskResource } from '../../abstracts/entities/Task.js';
import ValidateId from '../../decorators/ValidateId.js';

export default class TaskResource extends AbstractResource implements ITaskResource {
    public async getTasks(): Promise<DbTask[]> {
        const tasks = await Database.runQuery<DbTask[]>(`
            SELECT * FROM Tasks
            JOIN Specialty_Area
            ON Tasks.Specialty_Area_Id = Specialty_Area.Id
            JOIN Module
            ON Tasks.Module_Id = Module.Id
        `);

        return this.escapeHtmlFromDataSet<DbTask>(tasks);
    }

    @ValidateId()
    public async getTaskById(id: number): Promise<DbTask> {
        const task = await Database.runQuery<DbTask[]>(`
            SELECT * FROM Tasks
            WHERE Id = ${id}
        `);  

        return this.escapeHtmlFromSingleDataSet<DbTask>(task[0]);
    }
}