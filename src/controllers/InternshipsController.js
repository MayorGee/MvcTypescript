import InternshipsView from '../views/InternshipsView.js';

export default class InternshipsController {
    execute(req, res) {
        const internshipsView = new InternshipsView();
        
        res.render(internshipsView.getTemplate(), { 'this': internshipsView});
    }
}