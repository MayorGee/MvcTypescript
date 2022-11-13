import WebController from '../WebController.js';
import { IController } from '../../../abstracts/Contract.js';

import InternService from '../../../models/service/InternService.js';
import InternsView from '../../../views/intern/InternsView.js';
import { Intern, IInternService } from '../../../abstracts/entities/Intern.js';

import { Response, Request } from 'express';

export default class InternsController extends WebController implements IController {
    protected async handleGet(req: Request, res: Response) {
        if(!this.isRoleMentor(req)) {
            return this.redirectToHome(res);
        }
        
        const internService: IInternService = new InternService();
        const interns: Intern[] = await internService.getInterns();     

        const internsView = new InternsView();
        internsView.setInterns(interns);

        this.renderPage(req, res, internsView);
    }
}