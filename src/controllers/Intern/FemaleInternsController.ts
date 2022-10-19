import AbstractController from '../AbstractController.js';

import InternsView from '../../views/intern/InternsView.js';
import InternResource from '../../models/resource/InternResource.js';
import InternConverter from '../../converters/InternConverter.js';

import { IController } from '../../abstracts/Common.js';
import { IInternResource, DbIntern } from '../../abstracts/entities/Intern.js';
import { NextFunction, Request, Response } from 'express';

export default class FemaleInternsController extends AbstractController implements IController {
    protected async handleGet(req: Request, res: Response, next: NextFunction) {
        if(!this.isRoleMentor(req)) {
            return this.redirectToHome(res);
        }

        const internResource: IInternResource = new InternResource();
        const femaleInterns: DbIntern[] = await internResource.getFemaleInterns();

        const internsView = new InternsView();
        internsView.setInterns(
            InternConverter.convertDbInterns(femaleInterns)
        );

        this.renderPage(req, res, internsView);
    }
}