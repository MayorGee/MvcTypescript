import WebController from '../WebController.js';
import { IController } from '../../../abstracts/Contract.js';

import InternView from '../../../views/intern/InternView.js';
import InternService from '../../../models/service/InternService.js';
import { IInternService } from '../../../abstracts/entities/Intern.js';

import { NextFunction, Request, Response } from 'express';

export default class DeleteInternController extends WebController implements IController {
    private service: IInternService;

    constructor() {
        super();

        this.service = new InternService();
    }

    protected async handleGet(req: Request, res: Response, next: NextFunction) {
        if(!this.isRoleMentor(req)) {
            return this.redirectToHome(res);
        }
        
        const internId = req.query.id;

        if (!this.isNumber(internId)) {
            return this.handleIdError(internId, res);
        }
        
        const intern =  await this.service.getInternById(internId);

        const internView = new InternView();
        internView
            .setIntern(intern)
            .setTemplate('./intern/delete-intern');

        this.renderPage(req, res, internView);
    }

    protected async handlePost(req: Request, res: Response) {
        await this.service.deleteInternById(parseInt(req.body.id));
     
        res.redirect('/interns');
    }
}