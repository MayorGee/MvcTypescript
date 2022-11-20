import WebController from '../WebController.js';
import { IController } from '../../../abstracts/Contract.js';

import SpecialtyAreaService from '../../../models/service/SpecialtyAreaService.js';
import SpecialtyAreaView from '../../../views/specialty-area/SpecialtyAreaView.js';

import { ISpecialtyAreaService, SpecialtyArea } from '../../../abstracts/entities/SpecialtyArea.js';

import { NextFunction, Request, Response } from 'express';

export default class SpecialtyAreaController extends WebController implements IController {
    protected async handleGet(req: Request, res: Response, next: NextFunction) {
        if(!this.isRoleMentor(req)) {
            return this.redirectToHome(res);
        }

        const specialtyAreaId = this.handleId(req.query.id);
 
        if (!specialtyAreaId) {
            return this.handleIdError(specialtyAreaId, res);
        }
        
        const specialtyAreaService: ISpecialtyAreaService = new SpecialtyAreaService();
        const specialtyArea: SpecialtyArea = await specialtyAreaService.getSpecialtyAreaById(specialtyAreaId);

        const specialtyAreaView = new SpecialtyAreaView();
        specialtyAreaView
            .setSpecialtyArea(specialtyArea)
            .setTemplate('./specialty-area/specialty-area');

        this.renderPage(req, res, specialtyAreaView);
    }
}
