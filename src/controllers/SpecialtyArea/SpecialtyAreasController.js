import SpecialtyAreaResource from '../../models/resource/SpecialtyAreaResource.js';
import SpecialtyAreasView from '../../views/specialty-area/SpecialtyAreasView.js';
import AbstractController from '../AbstractController.js';

export default class SpecialtyAreasController extends AbstractController {
    async handleGet(req, res) {
        if(!this.isRoleMentor(req)) {
            return this.redirect({res: res, page: '/' });
        }
        
        const specialtyAreaResource = new SpecialtyAreaResource();
        const specialtyAreas = await  specialtyAreaResource.getSpecialtyAreas();

        const specialtyAreasView = new SpecialtyAreasView();
        specialtyAreasView
            .setSpecialtyAreas(specialtyAreas)
            .setTemplate('./specialty-area/specialty-areas');

        this.renderPage(res, specialtyAreasView);
    }
}