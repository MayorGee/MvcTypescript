import Database from '../../Database.js';
import AbstractResource from './AbstractResource.js';

import { DbInternship } from '../../abstracts/entities/Internship.js';
import { IInternshipResource } from '../../abstracts/entities/Internship.js';
import ValidateId from '../../decorators/ValidateId.js';

export default class InternshipResource extends AbstractResource implements IInternshipResource {
    public async getInternships(): Promise<DbInternship[]> {
        const internships = await Database.runQuery<DbInternship[]>(`SELECT * FROM Internship`);
        return this.escapeHtmlFromDataSet<DbInternship>(internships);
    }

    @ValidateId()
    public async getInternshipById(id: number): Promise<DbInternship> {
        const internship = await Database.runQuery<DbInternship[]>(`
            SELECT * FROM Internship
            WHERE Id = ${id}
        `);
        
        return this.escapeHtmlFromSingleDataSet<DbInternship>(internship[0]);
    }
}