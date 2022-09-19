import Database from "../../Database.js";

export default class TaskResource {
    async getTasks() {
        const tasks = await Database.runQuery(`
            SELECT * FROM Tasks
            JOIN Specialty_Area
            ON Tasks.Specialty_Area_Id = Specialty_Area.Id
            JOIN Module
            ON Tasks.MOdule_Id = Module.Id
        `);

        return tasks;
    }

    async getTaskById(id) {
        const task = await Database.runQuery(`
            SELECT * FROM Tasks
            WHERE Id = ${id}
        `);  

        return task[0];
    }
}