import { DbIntern } from "./Intern"

export interface DbMentor {
    Id: number,
    First_Name: string,
    Last_Name: string,
    Specialty_Area_Id: number,
    Email: string,
    Password: string,
    Phone_No: number
}

export interface Mentor {
    id: number,
    firstName: string,
    lastName: string,
    specialtyAreaId: number,
    email: string,
    password: string,
    phone: number
}

export interface DbMentorSpecialty {
    Title: string
}

export interface MentorSpecialty {
    title: string
}

export interface IMentorResource {
    getMentors: () => Promise<DbMentor[]>,
    getMentorById: (id: number) => Promise<DbMentor>,
    getMentorByEmail: (email: string) => Promise<DbMentor>,
    addMentor: (mentor: Mentor) => Promise<void>,
    updateMentorById: (mentor: Mentor) => Promise<void>,
    deleteMentorById: (id: number) => Promise<void>,
    isMentorPasswordCorrect: (email: string, password: string) => Promise<boolean>,
    getMentorStudents: (id: number) => Promise<DbIntern[]>,
    getMentorSpecialty: (id: number) => Promise<DbMentorSpecialty>
}

export interface IMentorProvider {
    getMentors: () => Promise<Mentor[]>,
    getMentorById: (id: number) => Promise<Mentor>
}
