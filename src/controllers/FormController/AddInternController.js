import InternView from '../../views/intern/InternView.js';
import InternResource from '../../models/resource/InternResource.js';
import AbstractController from '../AbstractController.js';

export default class AddInternController extends AbstractController {
    handleGet(req, res) {
        const internView = new InternView();
        internView.setTemplate('./intern/add-intern');

        this.renderPage(res, internView);
   }

    async handlePost(req, res) {
        const internResource = new InternResource();

        await internResource.addIntern(req);
        
        res.redirect('/interns');
    }
}