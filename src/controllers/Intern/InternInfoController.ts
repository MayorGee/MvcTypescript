import AbstractController from '../AbstractController.js';

import InternView from '../../views/intern/InternView.js';
import InternResource from '../../models/resource/InternResource.js';
import InternConverter from '../../converters/InternConverter.js';

import { DbIntern, IInternResource } from '../../abstracts/entities/Intern.js';

export default class InternInfoController extends AbstractController {
    private resource: IInternResource = new InternResource();

    protected async handleGet(req: any, res: any, next: any) {
        const internLoggedIn: boolean = this.isInternLoggedIn(req);

        if(!internLoggedIn) {
            return this.redirect({ res, page: '/intern-login' });
        }

        const internId: number = req.session.internId;
         
        const intern: DbIntern =  await this.resource.getInternById(internId);

        const internView = new InternView();
        internView
            .setIntern(
                InternConverter.convertDbIntern(intern)
            )
            .setTemplate('./intern/intern-info');

        this.renderPage(req, res, internView);
    }

    protected async handlePost(req: any, res: any, next: any): Promise<void> {
        await this.resource.updateInternById(req.body);
     
        res.redirect('/interns');
    }
}