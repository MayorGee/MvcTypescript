import Database from '../../Database.js';
import AbstractResource from './AbstractResource.js';

export default class InternshipResource extends AbstractResource {
    async getInternships() {
        const internships = await Database.runQuery(`SELECT * FROM Internship`);
        return this.escapeHtmlFromQueryData(internships);
    }

    async getInternshipById(id) {
        const internship = await Database.runQuery(`
            SELECT * FROM Internship
            WHERE Id = ${id}
        `);
        
        return this.escapeHtmlFromQueryData(internship[0]);
    }
}