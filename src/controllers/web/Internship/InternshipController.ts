import WebController from '../WebController.js';
import { IController } from '../../../abstracts/Contract.js';

import InternshipView from '../../../views/internship/InternshipView.js';
import InternshipService from '../../../models/service/InternshipService.js';
import { Internship, IInternshipService } from '../../../abstracts/entities/Internship.js';

import { NextFunction, Request, Response } from 'express';

export default class InternshipController extends WebController implements IController {
    protected async handleGet(req: Request, res: Response, next: NextFunction) {
        if(!this.isRoleMentor(req)) {
            return this.redirectToHome(res);
        }

        const internshipId = this.validateId(req.query.id);
 
        if (!internshipId) {
            return this.handleIdError(internshipId, res);
        }
        
        const internshipService: IInternshipService = new InternshipService();
        const internship: Internship = await internshipService.getInternshipById(internshipId);

        const internshipView = new InternshipView();
        internshipView
            .setInternship(internship)
            .setTemplate('./internship/internship');

        this.renderPage(req, res, internshipView);
    }
}
