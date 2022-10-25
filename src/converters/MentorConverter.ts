import { DbMentor, DbMentorSpecialty, Mentor, MentorSpecialty } from "../abstracts/entities/Mentor";

export default class MentorConverter {
    public static convertDbMentor({
        Id,
        First_Name,
        Last_Name,
        Specialty_Area_Id,
        Email,
        Password,
        Phone_No
    }: DbMentor): Mentor {
        return {
            id: Id,
            firstName: First_Name,
            lastName: Last_Name,
            specialtyAreaId: Specialty_Area_Id,
            email: Email,
            password: Password,
            phone: Phone_No
        }
    }

    public static convertDbMentors(dbMentors: DbMentor[]): Mentor[] {
        return dbMentors.map(this.convertDbMentor);
    }

    public static convertDbMentorSpecialty({
        Title
    }: DbMentorSpecialty): MentorSpecialty {
        return {
            title: Title
        }
    }
}