import InternView from '../../views/intern/InternView.js';
import InternResource from '../../models/resource/InternResource.js';
import AbstractController from '../AbstractController.js';

export default class InternProgressController extends AbstractController {
    async handleGet(req, res) {
        const internLoggedIn = this.isInternLoggedIn(req);

        if(!internLoggedIn) {
            return this.redirectToLogin(res);
        }      

        const internId = req.session.internId;

        const internResource = new InternResource();
        const internProgress =  await internResource.getInternProgressById(internId);

        const internView = new InternView();
        internView
            .setInternProgress(internProgress)
            .setTemplate('./intern/intern-progress');

        this.renderPage(res, internView);
   }
}