import Database from '../../Database.js';
import AbstractResource from './AbstractResource.js';

import { DbGenderedIntern, DbIntern, DbInternProgress, IInternResource, Intern } from '../../abstracts/entities/Intern.js';

export default class InternResource extends AbstractResource implements IInternResource{
    public async getInterns(): Promise<DbIntern[]> {
        const interns = await Database.runQuery(`
            SELECT * FROM Intern
        `);  

        return this.escapeHtmlFromQueryData(interns);
    }

    public async getInternById(id: number): Promise<DbIntern> {
        const intern = await Database.runQuery(`
            SELECT * FROM Intern
            WHERE Id = ${id}
        `);  

        return this.escapeHtmlFromQueryData(intern[0]);
    }

    public async getFemaleInterns(): Promise<DbGenderedIntern[]> {
        const femaleInterns = await Database.runQuery(`
            SELECT 
                Intern.Id, 
                First_Name,
                Last_Name,
                Internship_Id,
                Age,
                Specialty_Area_Id,
                Email,
                Phone_No,
                Password, 
                Gender
            FROM Intern
            JOIN Intern_Gender
            ON Intern.Id = Intern_Gender.Intern_Id
            JOIN Specialty_Area
            ON Intern.Specialty_Area_Id = Specialty_Area.Id
            WHERE Gender = "Female"
        `);  

        return this.escapeHtmlFromQueryData(femaleInterns);
    }

    public async getMaleInterns(): Promise<DbGenderedIntern[]> {
        const maleInterns = await Database.runQuery(`
            SELECT 
                Intern.Id, 
                First_Name,
                Last_Name,
                Internship_Id,
                Age,
                Specialty_Area_Id,
                Email,
                Phone_No,
                Password, 
                Gender 
            FROM Intern
            JOIN Intern_Gender
            ON Intern.Id = Intern_Gender.Intern_Id
            JOIN Specialty_Area
            ON Intern.Specialty_Area_Id = Specialty_Area.Id
            WHERE Gender = "Male"
        `);  

        return this.escapeHtmlFromQueryData(maleInterns);
    }

    public async addIntern({ firstName, lastName, internshipId, age, specialtyAreaId, email, password, phone }: Intern) {
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
                '${this.escapeHtml(internshipId.toString())}', 
                '${this.escapeHtml(age.toString())}', 
                '${this.escapeHtml(specialtyAreaId.toString())}', 
                '${this.escapeHtml(email)}', 
                '${this.escapeHtml(password)}',
                '${this.escapeHtml(phone.toString())}'
            )
        `);
    }

    public async updateInternById(intern: Intern) {
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
                Internship_Id = '${this.escapeHtml(internshipId.toString())}',
                Age = '${this.escapeHtml(age.toString())}',
                Specialty_Area_Id = '${this.escapeHtml(specialtyAreaId.toString())}',
                Email = '${this.escapeHtml(email)}',
                Phone_No = '${this.escapeHtml(phone.toString())}'
            WHERE Id = '${id}'            
        `);
    }

    public async deleteInternById(id: number) {
        await Database.runQuery(`
            DELETE FROM Intern
            WHERE Id = '${id}'
        `);
    }

    public async getInternByEmail(email: string): Promise<DbIntern> {
        const intern = await Database.runQuery(`
            SELECT * FROM Intern
            WHERE Email = '${email}'
        `);  
        return this.escapeHtmlFromQueryData(intern[0]);
    }

    public async getInternProgressById(id: number): Promise<DbInternProgress> {
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