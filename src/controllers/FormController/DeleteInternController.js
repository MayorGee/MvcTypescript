import InternView from '../../views/intern/InternView.js';
import InternResource from '../../models/resource/InternResource.js';
import AbstractController from '../AbstractController.js';

export default class DeleteInternController extends AbstractController {
    constructor() {
        super();

        this.resource = new InternResource();
    }

    async handleGet(req, res) {
        const internId = parseInt(req.query.id);

        if (!this.isIdNumber(internId)) {
            return this.handleIdError(internId, res);
        }

        const intern =  await this.resource.getInternById(internId);

        const internView = new InternView();
        internView
            .setIntern(intern)
            .setTemplate('./intern/delete-intern');

        this.renderPage(res, internView);
   }

    async handlePost(req, res) {
        await this.resource.deleteInternById(req.body.id);
     
        res.redirect('/interns');
    }
}