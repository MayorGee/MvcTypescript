import WebController from '../WebController.js';
import { IController } from '../../../abstracts/Contract.js';

import SpecialtyAreaService from '../../../models/service/SpecialtyAreaService.js';
import SpecialtyAreasView from '../../../views/specialty-area/SpecialtyAreasView.js';
import { ISpecialtyAreaService, SpecialtyArea } from '../../../abstracts/entities/SpecialtyArea.js';

import { NextFunction, Request, Response } from 'express';

export default class SpecialtyAreasController extends WebController implements IController {
    protected async handleGet(req: Request, res: Response, next: NextFunction) {
        if(!this.isRoleMentor(req)) {
            return this.redirectToHome(res);
        }
        
        const specialtyAreaService: ISpecialtyAreaService = new SpecialtyAreaService();
        const specialtyAreas: SpecialtyArea[] = await  specialtyAreaService.getSpecialtyAreas();

        const specialtyAreasView = new SpecialtyAreasView();
        specialtyAreasView
            .setSpecialtyAreas(specialtyAreas)
            .setTemplate('./specialty-area/specialty-areas');

        this.renderPage(req, res, specialtyAreasView);
    }
}