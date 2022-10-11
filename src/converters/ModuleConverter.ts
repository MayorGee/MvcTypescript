import { DbModule, Module } from "../abstracts/entities/Module";

export default class ModuleConverter {
    public static convertDbModule({ Id, Task }: DbModule): Module {
        return {
            id: Id,
            task: Task
        }
    }

    public static convertDbModules(dbModules: DbModule[]): Module[] {
        return dbModules.map(this.convertDbModule);
    }
}