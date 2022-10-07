import AbstractController from '../AbstractController.js';

import InternView from '../../views/intern/InternView.js';
import InternResource from '../../models/resource/InternResource.js';

import { IController } from '../../abstracts/Common.js';

export default class InternProgressController extends AbstractController implements IController {
    async handleGet(req: any, res: any, next: any) {
        const internLoggedIn = this.isInternLoggedIn(req);

        if(!internLoggedIn) {
            return this.redirect({ 
                res, 
                page: '/intern-login', 
                responseCode: 400 
            });
        }      

        const internId: number = req.session.internId;

        const internResource = new InternResource();
        const internProgress =  await internResource.getInternProgressById(internId);

        const internView = new InternView();
        internView
            .setInternProgress(internProgress)
            .setTemplate('./intern/intern-progress');

        this.renderPage(req, res, internView);
   }
}