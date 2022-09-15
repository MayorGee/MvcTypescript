import SpecialtyAreasView from '../../views/SpecialtyAreasView.js';
import AbstractController from '../AbstractController.js';

export default class SpecialtyAreasController extends AbstractController {
    constructor() {
        super();

        this.view = new SpecialtyAreasView();
        this.query = `SELECT * FROM Specialty_Area`;
    }

    async setData(specialtyAreas) {
        this.view.setSpecialtyAreas(specialtyAreas);
    }
}