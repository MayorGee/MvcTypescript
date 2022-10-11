import AbstractController from '../AbstractController.js';

import InternView from '../../views/intern/InternView.js';
import InternResource from '../../models/resource/InternResource.js';
import InternConverter from '../../converters/InternConverter.js';

import { IController } from '../../abstracts/Common.js';
import { IInternResource, DbIntern } from '../../abstracts/entities/Intern.js';

export default class InternAccountController extends AbstractController implements IController {
    protected async handleGet(req: any, res: any, next: any) {
        const internLoggedIn = this.isInternLoggedIn(req);

        if(!internLoggedIn) {
            return this.redirect({ res, page: '/intern-login' });
        }

        const internId: number = req.session.internId;
        const internResource: IInternResource = new InternResource();
        const intern: DbIntern = await internResource.getInternById(internId);

        const internView = new InternView();
        internView
            .setTemplate('./intern/intern-account')
            .setIntern(
                InternConverter.convertDbIntern(intern)
            );

        this.renderPage(req, res, internView);
    }
}