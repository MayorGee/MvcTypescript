import WebController from '../WebController.js';
import { IController } from '../../../abstracts/Contract.js';

import InternView from '../../../views/intern/InternView.js';
import InternService from '../../../models/service/InternService.js';
import { Intern, IInternService } from '../../../abstracts/entities/Intern.js';

import { NextFunction, Request, Response } from 'express';

export default class UpdateInternController extends WebController implements IController {
    private internService : IInternService;

    constructor() {
        super();

        this.internService = new InternService();
    }

    protected async handleGet(req: Request, res: Response, next: NextFunction) {
        if(!this.isRoleMentor(req)) {
            return this.redirectToHome(res);
        }
        
        const internId = this.validateId(req.query.id);
 
        if (!internId) {
            return this.handleIdError(internId, res);
        }

        const intern: Intern =  await this.internService.getInternById(internId);
        
        const internView = new InternView();
        internView
            .setIntern(intern)
            .setTemplate('./intern/update-intern');

        this.renderPage(req, res, internView);
    }
    
    protected async handlePost(req: Request, res: Response, next: NextFunction) {
        await this.internService.updateInternById(req.body);
        
        res.redirect('/interns');
    }
}