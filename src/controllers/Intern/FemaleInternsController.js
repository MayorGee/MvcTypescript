import InternsView from '../../views/intern/InternsView.js';
import InternResource from '../../models/resource/InternResource.js';
import AbstractController from '../AbstractController.js';

export default class FemaleInternsController extends AbstractController {
    async handleGet(req, res) {
        const internsView = new InternsView();
        const internResource = new InternResource();
        
        const femaleInterns = await internResource.getFemaleInterns();

        internsView.setInterns(femaleInterns);

        this.renderPage(res, internsView);
    }
}