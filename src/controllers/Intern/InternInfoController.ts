import AbstractController from '../AbstractController.js';

import InternView from '../../views/intern/InternView.js';
import InternResource from '../../models/resource/InternResource.js';
import InternConverter from '../../converters/InternConverter.js';

import { DbIntern } from '../../abstracts/entities/Intern.js';

export default class InternInfoController extends AbstractController {
    async handleGet(req: any, res: any, next: any) {
        const internLoggedIn: boolean = this.isInternLoggedIn(req);

        if(!internLoggedIn) {
            return this.redirect({ res, page: '/intern-login' });
        }

        const internId: number = req.session.internId;
        const internResource = new InternResource();
        const intern: DbIntern =  await internResource.getInternById(internId);

        const internView = new InternView();
        internView
            .setIntern(
                InternConverter.convertDbIntern(intern)
            )
            .setTemplate('./intern/intern-info');

        this.renderPage(req, res, internView);
   }

    async handlePost(req: any, res: any, next: any) {
        await this.resource.updateInternById(req.body);
     
        res.redirect('/interns');
    }
}