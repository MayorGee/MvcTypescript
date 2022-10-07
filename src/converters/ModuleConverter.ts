import { DbModule, Module } from "../abstracts/entities/Module";

export default class ModuleConverter {
    static convertDbModule({ Id, Task }: DbModule): Module {
        return {
            id: Id,
            task: Task
        }
    }

    static convertDbModules(dbModules: DbModule[]): Module[] {
        return dbModules.map(this.convertDbModule);
    }
}