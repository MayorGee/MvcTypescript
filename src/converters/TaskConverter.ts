import { DbTask, Task } from "../abstracts/entities/Task";

export default class TaskConverter {
    static convertDbTask({
        Id,
        Description,
        Specialty_Area_Id,
        Module_Id
    }: DbTask): Task {
        return {
            id: Id,
            description: Description,
            specialtyAreaId: Specialty_Area_Id,
            moduleId: Module_Id
        }
    }

    static convertDbTasks(dbTasks: DbTask[]): Task[] {
        return dbTasks.map(this.convertDbTask);
    }
}