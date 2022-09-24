import InternshipView from '../../views/internship/InternshipView.js';
import InternshipResource from '../../models/resource/InternshipResource.js';
import AbstractController from '../AbstractController.js';

export default class InternshipController extends AbstractController {
    async handleGet(req, res) {
        if(!this.isRoleAdmin(req)) {
            return this.redirectToHome(res);
        }

        const internshipId = parseInt(req.query.id);

        if (!this.isIdNumber(internshipId)) {
            return this.handleIdError(internshipId, res);
        }

        const internshipResource = new InternshipResource();
        const internship = await internshipResource.getInternshipById(internshipId);

        const internshipView = new InternshipView();
        internshipView
            .setInternship(internship)
            .setTemplate('./internship/internship');

        this.renderPage(res, internshipView);
    }
}
