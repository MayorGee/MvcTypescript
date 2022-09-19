import InternView from '../../views/intern/InternView.js';
import InternResource from '../../models/resource/InternResource.js';
import AbstractController from '../AbstractController.js';

export default class InternController extends AbstractController{
    async execute(req, res) {
        const internView = new InternView();
        const internResource = new InternResource();
        const id = req.query.id;

        const idIsValid = await this.validateId(id, res);

        if(!idIsValid) {
            return;
        }

        const intern = await internResource.getInternById(id);

        internView.setIntern(intern);

        this.renderPage(res, internView);
    }
}
