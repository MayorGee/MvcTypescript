import Database from "../../Database.js";

export default class MentorResource {
    connection = null;

    constructor() {
        this.connection = Database.getConnection();
    }

    async getMentors() {
        const mentors = await Database.runQuery(`
            SELECT * FROM Mentor
            JOIN Specialty_Area
            ON Mentor.Specialty_Area_Id = Specialty_Area.Id
        `); 

        return mentors;
    }

    async getMentorById(id) {
        const mentor = await Database.runQuery(`
            SELECT * FROM Mentor
            WHERE Id = ${id}
        `);  

        return mentor;
    }

    async insertMentors(req) {
        const { 
            firstName,
            lastName,
            specialtyAreaId,
            email,
            phone
        } = req.body;
        
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
            SET Id = '${id}',
                First_Name = '${firstName}',
                Last_Name = '${lastName}',
                Specialty_Area_Id = '${specialtyAreaId}',
                Email = '${email}',
                Phone_No = '${phone}'
            WHERE Id = '${id}'            
        `);

    }
}