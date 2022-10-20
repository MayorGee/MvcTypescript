import Database from '../../Database.js';
import AbstractResource from './AbstractResource.js';

import { DbModule, IModuleResource } from '../../abstracts/entities/Module.js';

export default class ModuleResource extends AbstractResource implements IModuleResource{
    public async getModules(): Promise<DbModule[]> {
        const modules = await Database.runQuery<DbModule[]>(`SELECT * FROM Module`);
        return this.escapeHtmlFromDataSet<DbModule>(modules);
    }

    public async getModuleById(id: number): Promise<DbModule> {
        const module = await Database.runQuery<DbModule[]>(`
            SELECT * FROM Module
            WHERE Id = ${id}
        `);  

        return this.escapeHtmlFromSingleDataSet<DbModule>(module[0]);
    }
}