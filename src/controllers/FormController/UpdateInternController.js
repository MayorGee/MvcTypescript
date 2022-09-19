import InternView from '../../views/intern/InternView.js';
import InternResource from '../../models/resource/InternResource.js';
import AbstractController from '../AbstractController.js';

export default class UpdateInternController extends AbstractController {
    constructor() {
        super();

        this.resource = new InternResource();
    }

    async handleGet(req, res) {
        const internView = new InternView();

        const internId = req.query.id;

        if (this.isIdInvalid(internId)) {
            return this.handleIdError(internId, res);
        }

        const intern =  await this.resource.getInternById(internId);

        internView.setIntern(intern);
        internView.setTemplate('./intern/update-intern');

        this.renderPage(res, internView);
   }

    async handlePost(req, res) {
        await this.resource.updateInternById(req.body);
     
        res.redirect('/interns');
    }
}