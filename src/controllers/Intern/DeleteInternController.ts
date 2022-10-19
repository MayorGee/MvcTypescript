import AbstractController from '../AbstractController.js';

import InternView from '../../views/intern/InternView.js';
import InternResource from '../../models/resource/InternResource.js';
import InternConverter from '../../converters/InternConverter.js';

import { IController } from '../../abstracts/Common.js';
import { IInternResource } from '../../abstracts/entities/Intern.js';
import { NextFunction, Request, Response } from 'express';

export default class DeleteInternController extends AbstractController implements IController {
    private resource: IInternResource;

    constructor() {
        super();

        this.resource = new InternResource();
    }

    protected async handleGet(req: Request, res: Response, next: NextFunction) {
        if(!this.isRoleMentor(req)) {
            return this.redirectToHome(res);
        }
        
        const internId = req.query.id;

        if (!this.isNumber(internId)) {
            return this.handleIdError(internId, res);
        }
        
        const intern =  await this.resource.getInternById(internId);

        const internView = new InternView();
        internView
            .setIntern(
                InternConverter.convertDbIntern(intern)
            )
            .setTemplate('./intern/delete-intern');

        this.renderPage(req, res, internView);
    }

    protected async handlePost(req: Request, res: Response) {
        await this.resource.deleteInternById(parseInt(req.body.id));
     
        res.redirect('/interns');
    }
}