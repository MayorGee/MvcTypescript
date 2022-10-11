export interface DbIntern {
    Id: number,
    First_Name: string,
    Last_Name: string,
    Internship_Id: number,
    Age: number,
    Specialty_Area_Id: number,
    Email: string,
    Phone_No: number,
    Password: string
}

export interface DbGenderedIntern extends DbIntern {
    Gender: string
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
}

export interface GenderedIntern extends Intern {
    gender: string
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
    getFemaleInterns: () => Promise<DbGenderedIntern[]>,
    getMaleInterns: () => Promise<DbGenderedIntern[]>,
    addIntern: ({ firstName, lastName, internshipId, age, specialtyAreaId, email, password, phone }: Intern) => void,
    updateInternById: (intern: Intern) => void,
    deleteInternById: (id: number) => void,
    getInternByEmail: (email: string) => Promise<DbIntern>,
    getInternProgressById: (id: number) => Promise<DbInternProgress>
}