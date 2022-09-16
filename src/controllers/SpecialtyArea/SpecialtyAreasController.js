import SpecialtyAreasView from '../../views/SpecialtyAreasView.js';
import Database from '../../Database.js';
import AbstractController from '../AbstractController.js';

const specialtyAreasView = new SpecialtyAreasView();

export default class SpecialtyAreasController extends AbstractController {
    async execute(req, res) {
        
        const specialtyAreas = await Database.runQuery(`SELECT * FROM Specialty_Area`);      

        this.setSpecialtyAreas(specialtyAreas);

        this.renderPage(res, specialtyAreasView);
    }
    
    async setSpecialtyAreas(specialtyAreas) {
        specialtyAreasView.setSpecialtyAreas(specialtyAreas);
    }
}