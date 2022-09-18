import Database from "../../Database.js";

export default class SpecialtyAreaResource {
    connection = null;

    constructor() {
        this.connection = Database.getConnection();
    }

    async getSpecialtyAreas() {
        const specialtyAreas = await Database.runQuery(`SELECT * FROM Specialty_Area`);           

        return specialtyAreas;
    }

    async getSpecialtyAreaById(id) {
        const specialtyArea = await Database.runQuery(`
            SELECT * FROM Specialty_Area
            WHERE Id = ${id}
        `);  

        return specialtyArea;
    }
}