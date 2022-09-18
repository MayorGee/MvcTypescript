import InternshipResource from '../../models/resource/InternshipResource.js';
import InternshipsView from '../../views/internship/InternshipsView.js';
import AbstractController from '../AbstractController.js';

export default class InternshipsController extends AbstractController {    
    async execute(req, res) {
        const internshipsView  = new InternshipsView();
        const internshipResource = new InternshipResource();
        
        const internships = await internshipResource.getInternships();
        this.setInternships(internships);

        this.renderPage(res, internshipsView);
    }
    
    async setInternships(internships) {
        internshipsView.setInternships(internships);
    }
}