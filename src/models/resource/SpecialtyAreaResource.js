import Database from '../../Database.js';
import AbstractResource from './AbstractResource.js';

export default class SpecialtyAreaResource extends AbstractResource {
    async getSpecialtyAreas() {
        const specialtyAreas = await Database.runQuery(`SELECT * FROM Specialty_Area`);
        return this.escapeHtmlFromQueryData(specialtyAreas);
    }

    async getSpecialtyAreaById(id) {
        const specialtyArea = await Database.runQuery(`
            SELECT * FROM Specialty_Area
            WHERE Id = ${id}
        `);  

        return this.escapeHtmlFromQueryData(specialtyArea[0]);
    }
}