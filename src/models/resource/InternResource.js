import Database from '../../Database.js';

export default class InternResource {
    async getInterns() {
        const interns = await Database.runQuery(`
            SELECT * FROM Intern
        `);  

        return interns;
    }

    async getInternById(id) {
        const intern = await Database.runQuery(`
            SELECT * FROM Intern
            WHERE Id = ${id}
        `);  

        return intern[0];
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

        return femaleInterns;
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

        return maleInterns;
    }

    async addIntern(firstName, lastName, internshipId, age, specialtyAreaId, email, password, phone) {
               
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
                '${firstName}', 
                '${lastName}', 
                '${internshipId}', 
                '${age}', 
                '${specialtyAreaId}', 
                '${email}', 
                '${password}',
                '${phone}'
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
            SET First_Name = '${firstName}',
                Last_Name = '${lastName}',
                Internship_Id = '${internshipId}',
                Age = '${age}',
                Specialty_Area_Id = '${specialtyAreaId}',
                Email = '${email}',
                Phone_No = '${phone}'
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
        return intern[0];
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
        return internProgress[0]; 
    }
}