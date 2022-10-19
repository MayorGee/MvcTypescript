import AbstractController from '../AbstractController.js';

import InternView from '../../views/intern/InternView.js';
import InternResource from '../../models/resource/InternResource.js';
import InternConverter from '../../converters/InternConverter.js';

import { IController } from '../../abstracts/Common.js';
import { IInternResource, DbIntern } from '../../abstracts/entities/Intern.js';
import { NextFunction, Request, Response } from 'express';

export default class InternAccountController extends AbstractController implements IController {
    protected async handleGet(req: Request, res: Response, next: NextFunction) {
        const internLoggedIn = this.isInternLoggedIn(req);

        if(!internLoggedIn) {
            return this.redirect({ res, page: '/intern-login' });
        }

        const internId = req.session.internId as number;
        const internResource: IInternResource = new InternResource();

        const intern: DbIntern = await internResource.getInternById(internId);

        const internView = new InternView();
        internView
            .setTemplate('./intern/intern-account')
            .setIntern(
                InternConverter.convertDbIntern(intern)
            );

        this.renderPage(req, res, internView);
    }
}