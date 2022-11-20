import WebController from '../WebController.js';
import { IController } from '../../../abstracts/Contract.js';

import InternView from '../../../views/intern/InternView.js';
import InternService from '../../../models/service/InternService.js';
import { IInternService, Intern } from '../../../abstracts/entities/Intern.js';

import { NextFunction, Request, Response } from 'express';

export default class InternAccountController extends WebController implements IController {
    protected async handleGet(req: Request, res: Response, next: NextFunction) {
        const internLoggedIn = this.isInternLoggedIn(req);
        // const mentorLoggedIn = this.isMentorLoggedIn(req);

        // if(!mentorLoggedIn) {
        //     return this.redirect({ res, page: '/mentor-login', errorCode: 401, errorMessage: 'You are not logged in as mentor' });
        // }

        if(!internLoggedIn) {
            return this.redirect({ res, page: '/intern-login', errorCode: 401 });
        }

        const internId = req.session.internId as number;
        const internService: IInternService = new InternService();

        const intern: Intern = await internService.getInternById(internId);

        const internView = new InternView();
        internView
            .setTemplate('./intern/intern-account')
            .setIntern(intern);

        this.renderPage(req, res, internView);
    }
}