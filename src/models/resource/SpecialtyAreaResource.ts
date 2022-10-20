import Database from '../../Database.js';
import AbstractResource from './AbstractResource.js';

import { DbSpecialtyArea, ISpecialtyAreaResource } from '../../abstracts/entities/SpecialtyArea.js';


export default class SpecialtyAreaResource extends AbstractResource implements ISpecialtyAreaResource {
    public async getSpecialtyAreas(): Promise<DbSpecialtyArea[]> {
        const specialtyAreas = await Database.runQuery<DbSpecialtyArea[]>(`SELECT * FROM Specialty_Area`);
        
        return this.escapeHtmlFromDataSet<DbSpecialtyArea>(specialtyAreas);
    }

    public async getSpecialtyAreaById(id: number): Promise<DbSpecialtyArea> {
        const specialtyArea = await Database.runQuery<DbSpecialtyArea[]>(`
            SELECT * FROM Specialty_Area
            WHERE Id = ${id}
        `);  

        return this.escapeHtmlFromSingleDataSet<DbSpecialtyArea>(specialtyArea[0]);
    }
}