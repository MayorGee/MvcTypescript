import { 
    DbIntern, 
    DbInternProgress, 
    Intern, 
    InternProgress 
} from "../abstracts/entities/Intern";

export default class InternConverter {
    public static convertDbIntern({ 
        Id, 
        First_Name, 
        Last_Name, 
        Internship_Id, 
        Age, 
        Specialty_Area_Id,
        Email,
        Phone_No,
        Password,
        Gender
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
            password: Password,
            gender: Gender
        }     
    }

    public static convertDbInterns(dbIntern: DbIntern[]): Intern[] {
        return dbIntern.map(this.convertDbIntern);
    }

    public static convertDbInternProgress({ 
        currentModule,
        performance,
        Intern_Id,
        Mentor_Id,
        Id,
        mentorName
    }: DbInternProgress): InternProgress {
        return {
            currentModule,
            performance,
            internId: Intern_Id,
            mentorId: Mentor_Id,
            id: Id,
            mentorName
        }     
    }
}