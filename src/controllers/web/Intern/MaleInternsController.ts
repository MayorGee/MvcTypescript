import WebController from '../WebController.js';

import InternResource from '../../../models/resource/InternResource.js';
import InternsView from '../../../views/intern/InternsView.js';
import InternConverter from '../../../converters/InternConverter.js';

import { IController } from '../../../abstracts/Common.js';
import { DbIntern, IInternResource } from '../../../abstracts/entities/Intern.js';
import { NextFunction, Request, Response } from 'express';

export default class MaleInternsController extends WebController implements IController {
    protected async handleGet(req: Request, res: Response, next: NextFunction) {
        if(!this.isRoleMentor(req)) {
            return this.redirectToHome(res);
        }
        
        const internResource: IInternResource = new InternResource();
        const maleInterns: DbIntern[] = await internResource.getMaleInterns();

        const internsView = new InternsView();
        internsView.setInterns(
            InternConverter.convertDbInterns(maleInterns)
        );

        this.renderPage(req, res, internsView);;
    }
}