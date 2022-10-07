import AbstractController from '../AbstractController.js';

import SpecialtyAreaResource from '../../models/resource/SpecialtyAreaResource.js';
import SpecialtyAreaConverter from '../../converters/SpecialtyAreaConverter.js';
import SpecialtyAreasView from '../../views/specialty-area/SpecialtyAreasView.js';

import { IController } from '../../abstracts/Common.js';
import { DbSpecialtyArea } from '../../abstracts/entities/SpecialtyArea.js';

export default class SpecialtyAreasController extends AbstractController implements IController {
    async handleGet(req: any, res: any, next: any) {
        if(!this.isRoleMentor(req)) {
            return this.redirectToHome(res);
        }
        
        const specialtyAreaResource = new SpecialtyAreaResource();
        const specialtyAreas: DbSpecialtyArea[] = await  specialtyAreaResource.getSpecialtyAreas();

        const specialtyAreasView = new SpecialtyAreasView();
        specialtyAreasView
            .setSpecialtyAreas(
                SpecialtyAreaConverter.convertDbSpecialtyAreas(specialtyAreas)
            )
            .setTemplate('./specialty-area/specialty-areas');

        this.renderPage(req, res, specialtyAreasView);
    }
}