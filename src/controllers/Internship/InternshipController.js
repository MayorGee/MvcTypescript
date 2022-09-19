import InternshipView from '../../views/internship/InternshipView.js';
import InternshipResource from '../../models/resource/InternshipResource.js';
import AbstractController from '../AbstractController.js';

export default class InternshipController extends AbstractController{
    async execute(req, res) {
        const internshipView = new InternshipView();
        const internshipResource = new InternshipResource();
        const id = req.query.id;

        const idIsValid = this.validateId(id, res);

        if(!idIsValid) {
            return;
        }

        const internship = await internshipResource.getInternshipById(id);

        internshipView.setInternship(internship);

        res.send(`
            Internship Title: ${internship.Title} <br />
            Internship Year: ${internship.Internship_Year} <br />
        `);
    }
}
