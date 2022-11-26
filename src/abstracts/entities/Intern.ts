export interface DbIntern {
    Id: number,
    First_Name: string,
    Last_Name: string,
    Internship_Id: number,
    Age: number,
    Specialty_Area_Id: number,
    Email: string,
    Phone_No: number,
    Password: string,
    Gender?: string
}

export interface Intern {
    id: number,
    firstName: string,
    lastName: string,
    internshipId: number,
    age: number,
    specialtyAreaId: number,
    email: string,
    phone: number
    password: string,
    gender?: string
}

export interface DbInternProgress {
    currentModule: number,
    performance: number,
    Intern_Id: number,
    Mentor_Id: number,
    Id: number,
    mentorName: string
}

export interface InternProgress {
    currentModule: number,
    performance: number,
    internId: number,
    mentorId: number,
    id: number,
    mentorName: string
}

export interface IInternResource {
    getInterns: () => Promise<DbIntern[]>,
    getInternById: (id: number) => Promise<DbIntern>,
    getFemaleInterns: () => Promise<DbIntern[]>,
    getMaleInterns: () => Promise<DbIntern[]>,
    addIntern: ({ firstName, lastName, internshipId, age, specialtyAreaId, email, password, phone }: Intern) => Promise<void>,
    updateInternById: (intern: Intern) => Promise<void>,
    deleteInternById: (id: number) => Promise<void>,
    getInternByEmail: (email: string) => Promise<DbIntern>,
    getInternProgressById: (id: number) => Promise<DbInternProgress>
}

export interface IInternService {
    getInterns: () => Promise<Intern[]>,
    getInternById: (id: number) => Promise<Intern>,
    getFemaleInterns: () => Promise<Intern[]>,
    getMaleInterns: () => Promise<Intern[]>,
    getInternByEmail: (email: string) => Promise<Intern | undefined>,
    getInternProgressById: (id: number) => Promise<InternProgress>,
    addIntern: (intern: Intern) => Promise<void>, 
    updateInternById: (intern: Intern) => Promise<void>, 
    deleteInternById: (id: number) => Promise<void>
}