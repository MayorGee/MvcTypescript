import InternResource from '../../models/resource/InternResource.js';
import InternsView from '../../views/intern/InternsView.js';
import AbstractController from '../AbstractController.js';


export default class InternsController extends AbstractController {
    async handleGet(req, res) {
        const internResource = new InternResource();
        const interns = await internResource.getInterns();     

        const internsView = new InternsView();
        internsView.setInterns(interns);

        this.renderPage(res, internsView);
    }
}

