import InternshipView from '../../views/internship/InternshipView.js';
import InternshipResource from '../../models/resource/InternshipResource.js';
import AbstractController from '../AbstractController.js';

export default class InternshipController extends AbstractController{
    async execute(req, res) {
        const internshipId = req.query.id;

        if (!this.isIdNumber(internshipId)) {
            return this.handleIdError(internshipId, res);
        }

        const internshipView = new InternshipView();
        const internshipResource = new InternshipResource();
        
        const internship = await internshipResource.getInternshipById(internshipId);

        internshipView
            .setInternship(internship)
            .setTemplate('internship');

        this.renderPage(res, internshipView);
    }
}
