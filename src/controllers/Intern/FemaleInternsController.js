import InternsView from '../../views/intern/InternsView.js';
import InternResource from '../../models/resource/InternResource.js';
import AbstractController from '../AbstractController.js';

export default class FemaleInternsController extends AbstractController {
    async handleGet(req, res) {
        if(!this.isRoleMentor(req)) {
            return this.redirect({res: res, page: '/' });
        }

        const internResource = new InternResource();
        const femaleInterns = await internResource.getFemaleInterns();

        const internsView = new InternsView();
        internsView.setInterns(femaleInterns);

        this.renderPage(res, internsView);
    }
}