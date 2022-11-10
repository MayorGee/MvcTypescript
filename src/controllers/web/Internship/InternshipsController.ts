import WebController from '../WebController.js';
import { IController } from '../../../abstracts/Common.js';

import InternshipResource from '../../../models/resource/InternshipResource.js';
import InternshipsView from '../../../views/internship/InternshipsView.js';
import InternshipConverter from '../../../converters/InternshipConverter.js';
import { DbInternship, IInternshipResource } from '../../../abstracts/entities/Internship.js';

import { NextFunction, Request, Response } from 'express';

export default class InternshipsController extends WebController implements IController {    
    protected async handleGet(req: Request, res: Response, next: NextFunction) {
        if(!this.isRoleMentor(req)) {
            return this.redirectToHome(res);
        }
        
        const internshipResource: IInternshipResource = new InternshipResource();
        const internships: DbInternship[] = await internshipResource.getInternships();
        
        const internshipsView  = new InternshipsView();
        internshipsView
            .setInternships(
                InternshipConverter.convertDbInternships(internships)
            )
            .setTemplate('./internship/internships');

        this.renderPage(req, res, internshipsView);
    }
}