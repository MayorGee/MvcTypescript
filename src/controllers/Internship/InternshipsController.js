import InternshipsView from '../../views/InternshipsView.js';
import AbstractController from '../AbstractController.js';

export default class InternshipsController extends AbstractController {
    constructor() {
        super();

        this.view = new InternshipsView();
        this.query = `SELECT * FROM Internship`;
    }
    
    async setData(internships) {
        this.view.setInternships(internships);
    }
}