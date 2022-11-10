export interface DbModule {
    Id: number,
    Task: string
}

export interface Module {
    id: number,
    task: string
}

export interface IModuleResource {
    getModules: () => Promise<DbModule[]>,
    getModuleById: (id: number) => Promise<DbModule>,
    addModule: ({ task }: Module) => Promise<void>,
    deleteModuleById: (id: number) => Promise<void>,
    updateModuleById: (module: Module) => Promise<void>
}

export interface IModuleProvider {
    getModules: () => Promise<Module[]>,
    getModuleById: (id: number) => Promise<Module>,
}