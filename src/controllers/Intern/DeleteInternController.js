import InternView from '../../views/intern/InternView.js';
import InternResource from '../../models/resource/InternResource.js';
import AbstractController from '../AbstractController.js';

export default class DeleteInternController extends AbstractController {
    constructor() {
        super();

        this.resource = new InternResource();
    }

    async handleGet(req, res) {
        if(!this.isRoleMentor(req)) {
            return this.redirectToHome(res);
        }

        const internId = req.query.id;

        if (!this.isNumber(internId)) {
            return this.handleIdError(internId, res);
        }

        const intern =  await this.resource.getInternById(internId);

        const internView = new InternView();
        internView
            .setIntern(intern)
            .setTemplate('./intern/delete-intern');

        this.renderPage(res, internView, req.session.csrfToken);
   }

    async handlePost(req, res) {
        await this.resource.deleteInternById(parseInt(req.body.id));
     
        res.redirect('/interns');
    }
}