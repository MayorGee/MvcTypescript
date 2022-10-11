export interface DbTask {
    Id: number,
    Description: string,
    Specialty_Area_Id: number,
    Module_Id: number
}

export interface Task {
    id: number,
    description: string,
    specialtyAreaId: number,
    moduleId: number
}

export interface ITaskResource {
    getTasks:() =>  Promise<DbTask[]>,
    getTaskById: (id: number) => Promise<DbTask>
}