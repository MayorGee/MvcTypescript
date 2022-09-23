import InternView from '../../views/intern/InternView.js';
import InternResource from '../../models/resource/InternResource.js';
import AbstractController from '../AbstractController.js';

export default class UpdateInternController extends AbstractController {
    async handleGet(req, res) {
        const internId = parseInt(req.query.id);

        if (!this.isIdNumber(internId)) {
            return this.handleIdError(internId, res);
        }

        const internResource = new InternResource();
        const intern =  await internResource.getInternById(internId);

        const internView = new InternView();
        internView
            .setIntern(intern)
            .setTemplate('./intern/update-intern');

        this.renderPage(res, internView);
   }

    async handlePost(req, res) {
        await this.resource.updateInternById(req.body);
     
        res.redirect('/interns');
    }
}