import AbstractController from '../AbstractController.js';

import InternView from '../../views/intern/InternView.js';
import InternResource from '../../models/resource/InternResource.js';

export default class InternAccountController extends AbstractController {
    async handleGet(req, res) {
        const internLoggedIn = this.isInternLoggedIn(req);

        if(!internLoggedIn) {
            return this.redirect({res: res, page: '/intern-login', errorMessage: 'You are not logged in' });
        }

        const internId = req.session.internId;
        const internResource = new InternResource();
        const intern = await internResource.getInternById(internId);

        const internView = new InternView();
        internView
            .setTemplate('./intern/intern-account')
            .setIntern(intern);

        this.renderPage(res, internView);
    }
}