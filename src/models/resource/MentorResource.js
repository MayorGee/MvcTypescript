import Database from '../../Database.js';

export default class MentorResource {
    async getMentors() {
        const mentors = await Database.runQuery(`SELECT * FROM Mentor`); 
        return mentors;
    }

    async getMentorById(id) {
        const mentor = await Database.runQuery(`
            SELECT * FROM Mentor
            WHERE Id = ${id}
        `);  

        return mentor[0];
    }

    async getMentorByEmail(email) {
        const mentor = await Database.runQuery(`
            SELECT * FROM Mentor
            WHERE Email = '${email}'
        `);  
        return mentor[0];
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
                '${firstName}',
                '${lastName}',
                '${specialtyAreaId}',
                '${email}',
                '${phone}'
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
            SET First_Name = '${firstName}',
                Last_Name = '${lastName}',
                Specialty_Area_Id = '${specialtyAreaId}',
                Email = '${email}',
                Phone_No = '${phone}'
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

        return students;
    }

    async getMentorSpecialty(id) {
        const specialty = await Database.runQuery(`
        SELECT Title  FROM Mentor    
        JOIN Specialty_Area
        ON Specialty_Area.Id = Mentor.Specialty_Area_Id    
        WHERE Mentor.Id = '${id}'
    `);  

        return specialty[0].Title;
    }
}