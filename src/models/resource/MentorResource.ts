import Database from '../../Database.js';
import AbstractResource from './AbstractResource.js';

import { DbMentor, Mentor, DbMentorSpecialty, IMentorResource } from '../../abstracts/entities/Mentor.js';
import { DbIntern } from '../../abstracts/entities/Intern.js';

export default class MentorResource extends AbstractResource implements IMentorResource {
    public async getMentors(): Promise<DbMentor[]> {
        const mentors = await Database.runQuery(`SELECT * FROM Mentor`); 
        return this.escapeHtmlFromQueryData(mentors);
    }

    public async getMentorById(id: number): Promise<DbMentor> {
        const mentor = await Database.runQuery(`
            SELECT * FROM Mentor
            WHERE Id = ${id}
        `);  

        return this.escapeHtmlFromQueryData(mentor[0]);
    }

    public async getMentorByEmail(email: string): Promise<DbMentor> {
        const mentor = await Database.runQuery(`
            SELECT * FROM Mentor
            WHERE Email = '${email}'
        `);  
        return this.escapeHtmlFromQueryData(mentor[0]);
    }

    public async addMentor(mentor: Mentor) {
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
                '${this.escapeHtml(specialtyAreaId.toString())}',
                '${this.escapeHtml(email)}',
                '${this.escapeHtml(phone.toString())}'
            )
        `);
    }

    public async updateMentorById(mentor: Mentor) {
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
                Specialty_Area_Id = '${this.escapeHtml(specialtyAreaId.toString())}',
                Email = '${this.escapeHtml(email)}',
                Phone_No = '${this.escapeHtml(phone.toString())}'
            WHERE Id = '${id}'            
        `);
    }

    public async deleteMentorById(id: number) {
        await Database.runQuery(`
            DELETE FROM Mentor
            WHERE Id = '${id}'
    `);
    }

    public async isMentorPasswordCorrect(email: string, password: string): Promise<boolean> {
        const legitMentor = await Database.runQuery(`
            SELECT * FROM Mentor
            WHERE Email = '${email}' 
            AND Password = '${password}'
       `);  

        return !!legitMentor[0];
    }

    public async getMentorInterns(id: number): Promise<DbIntern[]> {
        const interns = await Database.runQuery(`
            SELECT 
                Intern.Id, 
                Intern.First_Name,
                Intern.Last_Name,
                Intern.Internship_Id,
                Intern.Age,
                Intern.Specialty_Area_Id,
                Intern.Email,
                Intern.Phone_No,
                Intern.Password
            FROM Mentor    
            JOIN Specialty_Area
            ON Specialty_Area.Id = Mentor.Specialty_Area_Id
            JOIN Intern    
            ON Intern.Specialty_Area_Id = Specialty_Area.Id    
            WHERE Mentor.Id = '${id}'
        `);  

        return this.escapeHtmlFromQueryData(interns);
    }

    public async getMentorSpecialty(id: number): Promise<DbMentorSpecialty> {
        const specialty = await Database.runQuery(`
            SELECT Title  FROM Mentor    
            JOIN Specialty_Area
            ON Specialty_Area.Id = Mentor.Specialty_Area_Id    
            WHERE Mentor.Id = '${id}'
        `);  

        return this.escapeHtmlFromQueryData(specialty[0]);
    }
}