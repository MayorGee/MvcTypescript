import Database from "../../Database.js";

export default class SpecialtyAreaResource {
    async getSpecialtyAreas() {
        const specialtyAreas = await Database.runQuery(`SELECT * FROM Specialty_Area`);           

        return specialtyAreas;
    }

    async getSpecialtyAreaById(id) {
        const specialtyArea = await Database.runQuery(`
            SELECT * FROM Specialty_Area
            WHERE Id = ${id}
        `);  

        return specialtyArea[0];
    }
}