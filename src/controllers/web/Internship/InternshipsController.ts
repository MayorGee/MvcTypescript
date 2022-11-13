import WebController from '../WebController.js';
import { IController } from '../../../abstracts/Contract.js';

import InternshipService from '../../../models/service/InternshipService.js';
import InternshipsView from '../../../views/internship/InternshipsView.js';
import { Internship, IInternshipService } from '../../../abstracts/entities/Internship.js';

import { NextFunction, Request, Response } from 'express';

export default class InternshipsController extends WebController implements IController {    
    protected async handleGet(req: Request, res: Response, next: NextFunction) {
        if(!this.isRoleMentor(req)) {
            return this.redirectToHome(res);
        }
        
        const internshipService: IInternshipService = new InternshipService();
        const internships: Internship[] = await internshipService.getInternships();
        
        const internshipsView  = new InternshipsView();
        internshipsView
            .setInternships(internships)
            .setTemplate('./internship/internships');

        this.renderPage(req, res, internshipsView);
    }
}