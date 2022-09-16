import InternshipsView from '../../views/InternshipsView.js';
import Database from '../../Database.js';
import AbstractController from '../AbstractController.js';

const internshipsView  = new InternshipsView();

export default class InternshipsController extends AbstractController {    
    async execute(req, res) {
        
        const internships = await Database.runQuery(`SELECT * FROM Internship`);      

        this.setInternships(internships);

        this.renderPage(res, internshipsView);
    }
    
    async setInternships(internships) {
        internshipsView.setInternships(internships);
    }
}