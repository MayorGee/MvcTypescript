import WebController from '../WebController.js';

import InternView from '../../../views/intern/InternView.js';
import InternResource from '../../../models/resource/InternResource.js';
import InternConverter from '../../../converters/InternConverter.js';

import { IController } from '../../../abstracts/Common.js';
import { DbIntern, IInternResource } from '../../../abstracts/entities/Intern.js';
import { NextFunction, Request, Response } from 'express';

export default class InternController extends WebController implements IController {
    protected async handleGet(req: Request, res: Response, next: NextFunction) {
        if(!this.isRoleMentor(req)) {
            return this.redirectToHome(res);
        }

        const internId = req.query.id;

        if (!this.isNumber(internId)) {
            return this.handleIdError(internId, res);
        }

        const internResource: IInternResource = new InternResource();
        const intern: DbIntern = await internResource.getInternById(internId);

        const internView = new InternView();
        internView
            .setIntern(
                InternConverter.convertDbIntern(intern)
            )
            .setTemplate('./intern/intern');

        this.renderPage(req, res, internView);
    }
}
