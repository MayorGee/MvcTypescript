import WebController from '../WebController.js';
import { IController } from '../../../abstracts/Contract.js';

import InternService from '../../../models/service/InternService.js';
import InternsView from '../../../views/intern/InternsView.js';
import { Intern, IInternService } from '../../../abstracts/entities/Intern.js';

import { NextFunction, Request, Response } from 'express';

export default class MaleInternsController extends WebController implements IController {
    protected async handleGet(req: Request, res: Response, next: NextFunction) {
        if(!this.isRoleMentor(req)) {
            return this.redirectToHome(res);
        }
        
        const internService: IInternService = new InternService();
        const maleInterns: Intern[] = await internService.getMaleInterns();

        const internsView = new InternsView();
        internsView.setInterns(maleInterns);

        this.renderPage(req, res, internsView);;
    }
}