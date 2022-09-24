import InternsView from '../../views/intern/InternsView.js';
import InternResource from '../../models/resource/InternResource.js';
import AbstractController from '../AbstractController.js';

export default class FemaleInternsController extends AbstractController {
    async handleGet(req, res) {
        if(!this.isRoleAdmin(req)) {
            return this.redirectToHome(res);
        }

        const internResource = new InternResource();
        const femaleInterns = await internResource.getFemaleInterns();

        const internsView = new InternsView();
        internsView.setInterns(femaleInterns);

        this.renderPage(res, internsView);
    }
}