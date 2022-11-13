import WebController from '../WebController.js';
import { IController } from '../../../abstracts/Contract.js';

import InternView from '../../../views/intern/InternView.js';
import InternService from '../../../models/service/InternService.js';
import { Intern, IInternService } from '../../../abstracts/entities/Intern.js';

import { NextFunction, Request, Response } from 'express';

export default class InternInfoController extends WebController implements IController {
    private internService: IInternService;

    constructor() {
        super();

        this.internService = new InternService();
    }

    protected async handleGet(req: Request, res: Response, next: NextFunction) {
        const internLoggedIn: boolean = this.isInternLoggedIn(req);

        if(!internLoggedIn) {
            return this.redirect({ res, page: '/intern-login', errorCode: 401 });
        }

        const internId: number  = req.session.internId as number;
                 
        const intern: Intern =  await this.internService.getInternById(internId);

        const internView = new InternView();
        internView
            .setIntern(intern)
            .setTemplate('./intern/intern-info');

        this.renderPage(req, res, internView);
    }

    protected async handlePost(req: Request, res: Response, next: NextFunction): Promise<void> {
        await this.internService.updateInternById(req.body);
     
        res.redirect('/interns');
    }
}