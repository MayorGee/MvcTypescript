import WebController from '../WebController.js';
import { IController } from '../../../abstracts/Contract.js';

import InternsView from '../../../views/intern/InternsView.js';
import InternService from '../../../models/service/InternService.js';
import { IInternService, Intern } from '../../../abstracts/entities/Intern.js';

import { NextFunction, Request, Response } from 'express';

export default class FemaleInternsController extends WebController implements IController {
    protected async handleGet(req: Request, res: Response, next: NextFunction) {
        if(!this.isRoleMentor(req)) {
            return this.redirectToHome(res);
        }

        const internService: IInternService = new InternService();
        const femaleInterns: Intern[] = await internService.getFemaleInterns();

        const internsView = new InternsView();
        internsView.setInterns(femaleInterns);
        this.renderPage(req, res, internsView);
    }
}