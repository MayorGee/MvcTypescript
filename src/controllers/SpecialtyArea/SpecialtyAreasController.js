import SpecialtyAreaResource from '../../models/resource/SpecialtyAreaResource.js';
import SpecialtyAreasView from '../../views/specialty-area/SpecialtyAreasView.js';
import AbstractController from '../AbstractController.js';

export default class SpecialtyAreasController extends AbstractController {
    async execute(req, res) {
        const specialtyAreaResource = new SpecialtyAreaResource();
        const specialtyAreasView = new SpecialtyAreasView();
        
        const specialtyAreas = await  specialtyAreaResource.getSpecialtyAreas();

        specialtyAreasView.setSpecialtyAreas(specialtyAreas);

        this.renderPage(res, specialtyAreasView);
    }
}