import Database from '../../Database.js';
import AbstractResource from './AbstractResource.js';

export default class MentorResource extends AbstractResource {
    async getMentors() {
        const mentors = await Database.runQuery(`SELECT * FROM Mentor`); 
        return this.escapeHtmlFromQueryData(mentors);
    }

    async getMentorById(id) {
        const mentor = await Database.runQuery(`
            SELECT * FROM Mentor
            WHERE Id = ${id}
        `);  

        return this.escapeHtmlFromQueryData(mentor[0]);
    }

    async getMentorByEmail(email) {
        const mentor = await Database.runQuery(`
            SELECT * FROM Mentor
            WHERE Email = '${email}'
        `);  
        return this.escapeHtmlFromQueryData(mentor[0]);
    }

    async addMentor(mentor) {
        const { 
            firstName,
            lastName,
            specialtyAreaId,
            email,
            phone
        } = mentor;
        
        await  Database.runQuery(`
            INSERT INTO Mentor (
                First_Name,
                Last_Name,
                Specialty_Area_Id,
                Email,
                Phone_No
            )
            VALUES (
                '${this.escapeHtml(firstName)}',
                '${this.escapeHtml(lastName)}',
                '${this.escapeHtml(specialtyAreaId)}',
                '${this.escapeHtml(email)}',
                '${this.escapeHtml(phone)}'
            )
        `);
    }

    async updateMentorById(mentor) {
        const {
            id,
            firstName,
            lastName,
            specialtyAreaId,
            email,
            phone
        } = mentor;

        await Database.runQuery(`
            UPDATE Mentor
            SET First_Name = '${this.escapeHtml(firstName)}',
                Last_Name = '${this.escapeHtml(lastName)}',
                Specialty_Area_Id = '${this.escapeHtml(specialtyAreaId)}',
                Email = '${this.escapeHtml(email)}',
                Phone_No = '${this.escapeHtml(phone)}'
            WHERE Id = '${id}'            
        `);
    }

    async deleteMentorById(id) {
        await Database.runQuery(`
            DELETE FROM Mentor
            WHERE Id = '${id}'
    `);
    }

    async isMentorPasswordCorrect(email, password) {
        const legitMentor = await Database.runQuery(`
            SELECT * FROM Mentor
            WHERE Email = '${email}' 
            AND Password = '${password}'
       `);  

        return !!legitMentor[0];
    }

    async getMentorStudents(id) {
        const students = await Database.runQuery(`
            SELECT Intern.First_Name, Intern.Last_Name 
            FROM Mentor    
            JOIN Specialty_Area
            ON Specialty_Area.Id = Mentor.Specialty_Area_Id
            JOIN Intern    
            ON Intern.Specialty_Area_Id = Specialty_Area.Id    
            WHERE Mentor.Id = '${id}'
        `);  

        return this.escapeHtmlFromQueryData(students);
    }

    async getMentorSpecialty(id) {
        const specialty = await Database.runQuery(`
            SELECT Title  FROM Mentor    
            JOIN Specialty_Area
            ON Specialty_Area.Id = Mentor.Specialty_Area_Id    
            WHERE Mentor.Id = '${id}'
        `);  

        return this.escapeHtml(specialty[0]);
    }
}