import { DbMentor, Mentor } from "../abstracts/entities/Mentor";

export default class MentorConverter {
    static convertDbMentor({
        Id,
        First_Name,
        Last_Name,
        Specialty_Area_Id,
        Email,
        Phone_No
    }: DbMentor): Mentor {
        return {
            id: Id,
            firstName: First_Name,
            lastName: Last_Name,
            specialtyAreaId: Specialty_Area_Id,
            email: Email,
            phone: Phone_No
        }
    }

    static convertDbMentors(dbMentors: DbMentor[]): Mentor[] {
        return dbMentors.map(this.convertDbMentor);
    }
}