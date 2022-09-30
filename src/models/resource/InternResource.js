import Database from '../../Database.js';
import AbstractResource from './AbstractResource.js';

export default class InternResource extends AbstractResource {
    async getInterns() {
        const interns = await Database.runQuery(`
            SELECT * FROM Intern
        `);  

        return this.escapeHtmlFromQueryData(interns);
    }

    async getInternById(id) {
        const intern = await Database.runQuery(`
            SELECT * FROM Intern
            WHERE Id = ${id}
        `);  

        return this.escapeHtmlFromQueryData(intern[0]);
    }

    async getFemaleInterns() {
        const femaleInterns = await Database.runQuery(`
            SELECT * FROM Intern
            JOIN Intern_Gender
            ON Intern.Id = Intern_Gender.Intern_Id
            JOIN Specialty_Area
            ON Intern.Specialty_Area_Id = Specialty_Area.Id
            WHERE Gender = "Female"
        `);  

        return this.escapeHtmlFromQueryData(femaleInterns);
    }

    async getMaleInterns() {
        const maleInterns = await Database.runQuery(`
            SELECT * FROM Intern
            JOIN Intern_Gender
            ON Intern.Id = Intern_Gender.Intern_Id
            JOIN Specialty_Area
            ON Intern.Specialty_Area_Id = Specialty_Area.Id
            WHERE Gender = "Male"
        `);  

        return this.escapeHtmlFromQueryData(maleInterns);
    }

    async addIntern({ firstName, lastName, internshipId, age, specialtyAreaId, email, password, phone }) {
        await Database.runQuery(`
            INSERT INTO Intern (
                First_Name,
                Last_Name, 
                Internship_Id, 
                Age, 
                Specialty_Area_Id, 
                Email,
                Password, 
                Phone_No
            ) VALUES ( 
                '${this.escapeHtml(firstName)}', 
                '${this.escapeHtml(lastName)}', 
                '${this.escapeHtml(internshipId)}', 
                '${this.escapeHtml(age)}', 
                '${this.escapeHtml(specialtyAreaId)}', 
                '${this.escapeHtml(email)}', 
                '${this.escapeHtml(password)}',
                '${this.escapeHtml(phone)}'
            )
        `);
    }

    async updateInternById(intern) {
        const {
            id,
            firstName,
            lastName,
            internshipId,
            age,
            specialtyAreaId,
            email,
            phone
        } = intern;

        await Database.runQuery(`
            UPDATE Intern
            SET First_Name = '${this.escapeHtml(firstName)}',
                Last_Name = '${this.escapeHtml(lastName)}',
                Internship_Id = '${this.escapeHtml(internshipId)}',
                Age = '${this.escapeHtml(age)}',
                Specialty_Area_Id = '${this.escapeHtml(specialtyAreaId)}',
                Email = '${this.escapeHtml(email)}',
                Phone_No = '${this.escapeHtml(phone)}'
            WHERE Id = '${id}'            
        `);
    }

    async deleteInternById(id) {
        await Database.runQuery(`
            DELETE FROM Intern
            WHERE Id = '${id}'
        `);
    }

    async getInternByEmail(email) {
        const intern = await Database.runQuery(`
            SELECT * FROM Intern
            WHERE Email = '${email}'
        `);  
        return this.escapeHtmlFromQueryData(intern[0]);
    }

    async getInternProgressById(id) {
        const internProgress = await Database.runQuery(`
            SELECT 
                Intern_Progress.Current_Module As currentModule,
                Intern_Progress.Doing_Well As performance,
                Intern_Progress.Intern_Id, 
                Intern_Progress.Mentor_Id, 
                Mentor.Id,
                Mentor.First_Name AS mentorName
            FROM Intern
            JOIN Intern_Progress
            ON Intern.Id = Intern_Progress.Intern_Id
            JOIN Mentor
            ON Intern_Progress.Mentor_Id = Mentor.Id
            WHERE Intern.Id = '${id}'
        `);  
        return this.escapeHtmlFromQueryData(internProgress[0]); 
    }
}