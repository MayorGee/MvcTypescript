import InternshipView from '../../views/internship/InternshipView.js';
import InternshipResource from '../../models/resource/InternshipResource.js';

export default class InternshipController {
    async execute(req, res) {
        const internshipView = new InternshipView();
        const internshipResource = new InternshipResource();
        const id = req.query.id;

        if (!id) {
            res.redirect('/internships');

            return;
        }

        const internshipRes = await internshipResource.getInternshipById(id);
        const internship = internshipRes[0];

        internshipView.setInternship(internship);

        res.send(`
            Internship Title: ${internship.Title} <br />
            Internship Year: ${internship.Internship_Year} <br />
        `);
    }
}
