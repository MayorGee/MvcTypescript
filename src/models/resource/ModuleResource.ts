import Database from '../../Database.js';
import AbstractResource from './AbstractResource.js';

import { DbModule, IModuleResource, Module } from '../../abstracts/entities/Module.js';
import ValidateId from '../../decorators/ValidateId.js';
import { injectable } from 'inversify';

@injectable()
export default class ModuleResource extends AbstractResource implements IModuleResource {
    public async getModules(): Promise<DbModule[]> {
        const modules = await Database.runQuery<DbModule[]>(`SELECT * FROM Module`);
        return this.escapeHtmlFromDataSet<DbModule>(modules);
    }

    @ValidateId()
    public async getModuleById(id: number): Promise<DbModule> {
        const module = await Database.runQuery<DbModule[]>(`
            SELECT * FROM Module
            WHERE Id = ${id}
        `);  

        return this.escapeHtmlFromSingleDataSet<DbModule>(module[0]);
    }

    public async addModule({ task }: Module) {
        await Database.runQuery<Module>(`INSERT INTO Module (Task) VALUES ('${this.escapeHtml(task)}')`);
    }

    public async deleteModuleById(id: number) {
        await Database.runQuery(`
            DELETE FROM Module
            WHERE Id = '${id}'
        `);
    }

    public async updateModuleById(module: Module) {
        const {
            id,
            task
        } = module;

        await Database.runQuery<Module>(`
            UPDATE Module
            SET Task = '${this.escapeHtml(task)}'
            WHERE Id = '${id}'            
        `);
    }
}