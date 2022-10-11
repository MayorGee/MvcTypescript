import Database from '../../Database.js';
import AbstractResource from './AbstractResource.js';

import { DbSpecialtyArea, ISpecialtyAreaResource } from '../../abstracts/entities/SpecialtyArea.js';


export default class SpecialtyAreaResource extends AbstractResource implements ISpecialtyAreaResource {
    public async getSpecialtyAreas(): Promise<DbSpecialtyArea[]> {
        const specialtyAreas = await Database.runQuery(`SELECT * FROM Specialty_Area`);
        return this.escapeHtmlFromQueryData(specialtyAreas);
    }

    public async getSpecialtyAreaById(id: number): Promise<DbSpecialtyArea> {
        const specialtyArea = await Database.runQuery(`
            SELECT * FROM Specialty_Area
            WHERE Id = ${id}
        `);  

        return this.escapeHtmlFromQueryData(specialtyArea[0]);
    }
}