import InternView from '../../views/intern/InternView.js';
import InternResource from '../../models/resource/InternResource.js';

export default class InternController {
    async execute(req, res) {
        const internView = new InternView();
        const internResource = new InternResource();
        const id = req.query.id;

        if (!id) {
            res.redirect('/interns')

            return;
        }

        const internRes = await internResource.getInternById(id);
        const intern = internRes[0];

        internView.setIntern(intern);

        res.send(`
            Intern Name: ${intern.First_Name} <br/>
            Intern Email: ${intern.Email} <br/>
            Intern Contact: ${intern.Phone_No} <br/>
            Intern Age: ${intern.Age} <br/>
        `);
    }
}
