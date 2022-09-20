import InternResource from '../../models/resource/InternResource.js';
import InternsView from '../../views/intern/InternsView.js';
import AbstractController from '../AbstractController.js';


export default class InternsController extends AbstractController {
    async handleGet(req, res) {
        const internsView = new InternsView();
        const internResource = new InternResource();
        
        const interns = await internResource.getInterns();     

        internsView.setInterns(interns);

        this.renderPage(res, internsView);
    }
}

