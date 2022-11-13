export interface DbSpecialtyArea {
    Id: number,
    Title: string,
    Class_Size: number
}

export interface SpecialtyArea {
    id: number,
    title: string,
    classSize: number
}

export interface ISpecialtyAreaService {
    getSpecialtyAreas: () => Promise<SpecialtyArea[]>,
    getSpecialtyAreaById: (id: number) => Promise<SpecialtyArea>
}

export interface ISpecialtyAreaResource {
    getSpecialtyAreas: () => Promise<DbSpecialtyArea[]>,
    getSpecialtyAreaById: (id: number) => Promise<DbSpecialtyArea>
}