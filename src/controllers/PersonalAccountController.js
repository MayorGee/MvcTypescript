import AbstractController from './AbstractController.js';

import InternView from '../views/intern/InternView.js';
import InternResource from '../models/resource/InternResource.js';

export default class PersonalAccountController extends AbstractController {
    async handleGet(req, res) {
        const internLoggedIn = this.isInternLoggedIn(req);

        if(!internLoggedIn) {
            return this.redirectToLogin(res);
        }

        const internId = req.session.internId;
        const internResource = new InternResource();
        const intern = internResource.getInternById(internId);

        const internView = new InternView();
        internView
        .setTemplate('personal-account')
            .setIntern(intern);

        this.renderPage(res, internView);
    }
}