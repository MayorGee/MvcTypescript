import UpdateInternView from '../../views/intern/UpdateInternView.js';
import InternResource from '../../models/resource/InternResource.js';
import AbstractController from '../AbstractController.js';

export default class UpdateInternController extends AbstractController {
    constructor() {
        super();

        this.resource = new InternResource();
    }

    async handleGet(req, res) {
        const updateInternView = new UpdateInternView();

        const internId = req.query.id;

        const idIsValid = await this.validateId(internId, res);

        if(!idIsValid) {
            return;
        }

        const intern =  await this.resource.getInternById(internId);

        updateInternView.setIntern(intern);

        this.renderPage(res, updateInternView);
   }

    async handlePost(req, res) {
        await this.resource.updateInternById(req.body);
     
        res.redirect('/interns');
    }
}