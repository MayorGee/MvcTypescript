import AddInternView from '../../views/intern/AddInternView.js';
import InternResource from '../../models/resource/InternResource.js';
import AbstractController from '../AbstractController.js';

export default class AddInternController extends AbstractController {
    handleGet(req, res) {
        const addInternView = new AddInternView();

        this.renderPage(res, addInternView);
   }

    async handlePost(req, res) {
        const internResource = new InternResource();

        await internResource.addIntern(req);
        
        res.redirect('/interns');
    }
}