import WebController from '../WebController.js';
import { IController } from '../../../abstracts/Contract.js';

import InternView from '../../../views/intern/InternView.js';
import InternService from '../../../models/service/InternService.js';
import { IInternService } from '../../../abstracts/entities/Intern.js';

import { NextFunction, Request, Response } from 'express';

export default class AddInternController extends WebController implements IController {
    protected handleGet(req: Request, res: Response, next: NextFunction) {
        if(!this.isRoleMentor(req)) {
            return this.redirectToHome(res);
        }

        const internView = new InternView();
        internView.setTemplate('./intern/add-intern');

        this.renderPage(req, res, internView);
    }

    protected async handlePost(req: Request, res: Response, next: NextFunction) {
        const internService: IInternService = new InternService();
        await internService.addIntern(req.body);

        res.redirect('/interns');
    }
}