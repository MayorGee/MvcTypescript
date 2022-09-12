import InternshipsView from '../views/InternshipsView.js';

export default class InternshipsController {
    execute(req, res) {
        const internshipsView = new InternshipsView();

        const internshipTemplate = internshipsView.getTemplate();
        
        res.render(internshipTemplate, { 'this': internshipsView});
    }
}