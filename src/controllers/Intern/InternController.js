import InternView from '../../views/intern/InternView.js';
import InternResource from '../../models/resource/InternResource.js';
import AbstractController from '../AbstractController.js';

export default class InternController extends AbstractController{
    async execute(req, res) {
        const internView = new InternView();
        const internResource = new InternResource();
        const internId = req.query.id;

        if (this.isIdInvalid(internId)) {
            return this.handleIdError(internId, res);
        }

        const intern = await internResource.getInternById(internId);

        internView.setIntern(intern);
        internView.setTemplate('./intern/intern');

        this.renderPage(res, internView);
    }
}
