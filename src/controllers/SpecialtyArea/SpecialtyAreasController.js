import SpecialtyAreasView from '../../views/SpecialtyAreasView.js';
import Database from '../../Database.js';
import AbstractController from '../AbstractController.js';

export default class SpecialtyAreasController extends AbstractController {
    async execute(req, res) {
        const specialtyAreasView = new SpecialtyAreasView();

        
        const specialtyAreas = await Database.runQuery(`SELECT * FROM Specialty_Area`);      

        specialtyAreasView.setSpecialtyAreas(specialtyAreas);

        this.renderPage(res, specialtyAreasView);
    }
}