import InternView from '../../views/intern/InternView.js';
import InternResource from '../../models/resource/InternResource.js';
import AbstractController from '../AbstractController.js';

export default class InternController extends AbstractController {
    async handleGet(req, res) {
        if(!this.isRoleMentor(req)) {
            return this.redirectToHome(res);
        }

        const internId = req.query.id;

        if (!this.isNumber(internId)) {
            return this.handleIdError(internId, res);
        }

        const internResource = new InternResource();
        const intern = await internResource.getInternById(internId);

        const internView = new InternView();
        internView
            .setIntern(intern)
            .setTemplate('./intern/intern');

        this.renderPage(res, internView);
    }
}
