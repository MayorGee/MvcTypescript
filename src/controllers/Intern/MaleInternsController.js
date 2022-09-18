import InternResource from '../../models/resource/InternResource.js';
import InternsView from '../../views/intern/InternsView.js';
import AbstractController from '../AbstractController.js';

export default class MaleInternsController extends AbstractController {
    async execute(req, res) {
        const internsView = new InternsView();
        const internResource = new InternResource();
        
        const maleInterns = await internResource.getMaleInterns();

        internsView.setInterns(maleInterns);

        this.renderPage(res, internsView);;
    }
}