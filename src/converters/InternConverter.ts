import { DbIntern, Intern } from "../abstracts/entities/Intern";

export default class InternConverter {
    static convertDbIntern({ 
        Id, 
        First_Name, 
        Last_Name, 
        Internship_Id, 
        Age, 
        Specialty_Area_Id,
        Email,
        Phone_No,
        Password
    }: DbIntern): Intern {
        return {
            id: Id,
            firstName: First_Name,
            lastName: Last_Name,
            internshipId: Internship_Id,
            age: Age,
            specialtyAreaId: Specialty_Area_Id,
            email: Email,
            phone: Phone_No,
            password: Password
        }     
    }

    static convertDbInterns(dbIntern: DbIntern[]): Intern[] {
        return dbIntern.map(this.convertDbIntern);
    }
}