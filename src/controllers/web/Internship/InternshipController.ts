import WebController from '../WebController.js';

import InternshipView from '../../../views/internship/InternshipView.js';
import InternshipResource from '../../../models/resource/InternshipResource.js';
import InternshipConverter from '../../../converters/InternshipConverter.js';

import { IController } from '../../../abstracts/Common.js';
import { DbInternship, IInternshipResource } from '../../../abstracts/entities/Internship.js';
import { NextFunction, Request, Response } from 'express';

export default class InternshipController extends WebController implements IController {
    protected async handleGet(req: Request, res: Response, next: NextFunction) {
        if(!this.isRoleMentor(req)) {
            return this.redirectToHome(res);
        }

        const internshipId = req.query.id ;

        if (!this.isNumber(internshipId)) {
            return this.handleIdError(internshipId, res);
        }

        const internshipResource: IInternshipResource = new InternshipResource();
        const internship: DbInternship = await internshipResource.getInternshipById(internshipId);

        const internshipView = new InternshipView();
        internshipView
            .setInternship(
                InternshipConverter.convertDbInternship(internship)
            )
            .setTemplate('./internship/internship');

        this.renderPage(req, res, internshipView);
    }
}
