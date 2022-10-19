import AbstractController from '../AbstractController.js';

import SpecialtyAreaResource from '../../models/resource/SpecialtyAreaResource.js';
import SpecialtyAreaView from '../../views/specialty-area/SpecialtyAreaView.js';
import SpecialtyAreaConverter from '../../converters/SpecialtyAreaConverter.js';

import { IController } from '../../abstracts/Common.js';
import { DbSpecialtyArea, ISpecialtyAreaResource } from '../../abstracts/entities/SpecialtyArea.js';
import { NextFunction, Request, Response } from 'express';

export default class SpecialtyAreaController extends AbstractController implements IController {
    protected async handleGet(req: Request, res: Response, next: NextFunction) {
        if(!this.isRoleMentor(req)) {
            return this.redirectToHome(res);
        }
        
        const specialtyAreaId = req.query.id;

        if (!this.isNumber(specialtyAreaId)) {
            return this.handleIdError(specialtyAreaId, res);
        }

        const specialtyAreaResource: ISpecialtyAreaResource = new SpecialtyAreaResource();
        const specialtyArea: DbSpecialtyArea = await specialtyAreaResource.getSpecialtyAreaById(specialtyAreaId);

        const specialtyAreaView = new SpecialtyAreaView();
        specialtyAreaView
            .setSpecialtyArea(
                SpecialtyAreaConverter.convertDbSpecialtyArea(specialtyArea)
            )
            .setTemplate('./specialty-area/specialty-area');

        this.renderPage(req, res, specialtyAreaView);
    }
}
