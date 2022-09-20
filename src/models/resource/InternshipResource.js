import Database from '../../Database.js';

export default class InternshipResource {
    async getInternships() {
        const internships = await Database.runQuery(`SELECT * FROM Internship`);
        return internships;
    }

    async getInternshipById(id) {
        const internship = await Database.runQuery(`
            SELECT * FROM Internship
            WHERE Id = ${id}
        `);
        
        return internship[0];
    }
}