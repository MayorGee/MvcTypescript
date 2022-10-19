import AbstractController from '../AbstractController.js';

import InternView from '../../views/intern/InternView.js';
import InternResource from '../../models/resource/InternResource.js';

import { IController } from '../../abstracts/Common.js';
import { DbInternProgress } from '../../abstracts/entities/Intern.js';
import InternConverter from '../../converters/InternConverter.js';
import { NextFunction, Request, Response } from 'express';

export default class InternProgressController extends AbstractController implements IController {
    private resource = new InternResource();
    
    protected async handleGet(req: Request, res: Response, next: NextFunction) {
        const internLoggedIn = this.isInternLoggedIn(req);

        if(!internLoggedIn) {
            return this.redirect({ 
                res, 
                page: '/intern-login', 
                responseCode: 400 
            });
        }      

        const internId = req.session.internId as number;
        
        const internProgress: DbInternProgress =  await this.resource.getInternProgressById(internId);

        const internView = new InternView();
        internView
            .setInternProgress(
                InternConverter.convertDbInternProgress(internProgress)
            )
            .setTemplate('./intern/intern-progress');

        this.renderPage(req, res, internView);
   }
}