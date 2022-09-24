import InternshipResource from '../../models/resource/InternshipResource.js';
import InternshipsView from '../../views/internship/InternshipsView.js';
import AbstractController from '../AbstractController.js';

export default class InternshipsController extends AbstractController {    
    async handleGet(req, res) {
        if(!this.isRoleAdmin(req)) {
            return this.redirectToHome(res);
        }
        
        const internshipResource = new InternshipResource();
        const internships = await internshipResource.getInternships();
        
        const internshipsView  = new InternshipsView();
        internshipsView
            .setInternships(internships)
            .setTemplate('./internship/internships');

        this.renderPage(res, internshipsView);
    }
}