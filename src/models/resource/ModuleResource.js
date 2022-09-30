import Database from '../../Database.js';
import AbstractResource from './AbstractResource.js';

export default class ModuleResource extends AbstractResource {
    async getModules() {
        const modules = await Database.runQuery(`SELECT * FROM Module`);
        return this.escapeHtmlFromQueryData(modules);
    }

    async getModuleById(id) {
        const module = await Database.runQuery(`
            SELECT * FROM Module
            WHERE Id = ${id}
        `);  

        return this.escapeHtmlFromQueryData(module[0]);
    }
}