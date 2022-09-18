import Database from "../../Database.js";

export default class ModuleResource {
    connection = null;

    constructor() {
        this.connection = Database.getConnection();
    }

    async getModules() {
        const modules = await Database.runQuery(`SELECT * FROM Module`);      

        return modules;
    }

    async getModuleById(id) {
        const module = await Database.runQuery(`
            SELECT * FROM Module
            WHERE Id = ${id}
        `);  

        return module;
    }
}