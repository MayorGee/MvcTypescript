import WebController from '../WebController.js';
import { IController } from '../../../abstracts/Common.js';

import SpecialtyAreaResource from '../../../models/resource/SpecialtyAreaResource.js';
import SpecialtyAreaConverter from '../../../converters/SpecialtyAreaConverter.js';
import SpecialtyAreasView from '../../../views/specialty-area/SpecialtyAreasView.js';
import { DbSpecialtyArea, ISpecialtyAreaResource } from '../../../abstracts/entities/SpecialtyArea.js';

import { NextFunction, Request, Response } from 'express';

export default class SpecialtyAreasController extends WebController implements IController {
    protected async handleGet(req: Request, res: Response, next: NextFunction) {
        if(!this.isRoleMentor(req)) {
            return this.redirectToHome(res);
        }
        
        const specialtyAreaResource: ISpecialtyAreaResource = new SpecialtyAreaResource();
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