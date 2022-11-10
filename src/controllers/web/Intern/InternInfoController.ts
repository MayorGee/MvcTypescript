import WebController from '../WebController.js';
import { IController } from '../../../abstracts/Common.js';

import InternView from '../../../views/intern/InternView.js';
import InternResource from '../../../models/resource/InternResource.js';
import InternConverter from '../../../converters/InternConverter.js';

import { DbIntern, IInternResource } from '../../../abstracts/entities/Intern.js';
import { NextFunction, Request, Response } from 'express';

export default class InternInfoController extends WebController implements IController {
    private internResource: IInternResource;

    constructor() {
        super();

        this.internResource = new InternResource();
    }

    protected async handleGet(req: Request, res: Response, next: NextFunction) {
        const internLoggedIn: boolean = this.isInternLoggedIn(req);

        if(!internLoggedIn) {
            return this.redirect({ res, page: '/intern-login', errorCode: 401 });
        }

        const internId: number  = req.session.internId as number;
                 
        const intern: DbIntern =  await this.internResource.getInternById(internId);

        const internView = new InternView();
        internView
            .setIntern(
                InternConverter.convertDbIntern(intern)
            )
            .setTemplate('./intern/intern-info');

        this.renderPage(req, res, internView);
    }

    protected async handlePost(req: Request, res: Response, next: NextFunction): Promise<void> {
        await this.internResource.updateInternById(req.body);
     
        res.redirect('/interns');
    }
}