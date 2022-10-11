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
    getModuleById: (id: number) => Promise<DbModule>
}
