import InternView from '../../views/intern/InternView.js';
import InternResource from '../../models/resource/InternResource.js';
import AbstractController from '../AbstractController.js';

export default class InternInfoController extends AbstractController {
    async handleGet(req, res) {
        const internLoggedIn = this.isInternLoggedIn(req);

        if(!internLoggedIn) {
            return this.redirect({ res, page: '/intern-login' });
        }

        const internId = req.session.internId;
        const internResource = new InternResource();
        const intern =  await internResource.getInternById(internId);

        const internView = new InternView();
        internView
            .setIntern(intern)
            .setTemplate('./intern/intern-info');

        this.renderPage(req, res, internView);
   }

    async handlePost(req, res) {
        await this.resource.updateInternById(req.body);
     
        res.redirect('/interns');
    }
}