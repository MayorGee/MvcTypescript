import InternResource from '../../models/resource/InternResource.js';
import InternsView from '../../views/intern/InternsView.js';
import AbstractController from '../AbstractController.js';

export default class MaleInternsController extends AbstractController {
    async handleGet(req, res) {
        if(!this.isRoleMentor(req)) {
            return this.redirect({ res, page: '/' });
        }
        
        const internResource = new InternResource();
        const maleInterns = await internResource.getMaleInterns();

        const internsView = new InternsView();
        internsView.setInterns(maleInterns);

        this.renderPage(res, internsView);;
    }
}