import InternInsertView from '../../views/intern/InternInsertView.js';
import InternResource from '../../models/resource/InternResource.js';
import AbstractController from '../AbstractController.js';

export default class InternInsertController extends AbstractController {
    handleGet(req, res) {
        const internInsertView = new InternInsertView();

        res.render(internInsertView.getTemplate(), { 'this': internInsertView });
   }

    async handlePost(req, res) {
        const internResource = new InternResource();

        await internResource.insertInterns(req);
        
        res.redirect('/interns');
    }
}