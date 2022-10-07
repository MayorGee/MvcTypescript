import Database from '../../Database.js';
import AbstractResource from './AbstractResource.js';

import { DbModule } from '../../abstracts/entities/Module.js';

export default class ModuleResource extends AbstractResource {
    async getModules(): Promise<DbModule[]> {
        const modules = await Database.runQuery(`SELECT * FROM Module`);
        return this.escapeHtmlFromQueryData(modules);
    }

    async getModuleById(id: number): Promise<DbModule> {
        const module = await Database.runQuery(`
            SELECT * FROM Module
            WHERE Id = ${id}
        `);  

        return this.escapeHtmlFromQueryData(module[0]);
    }
}