import InternUpdateView from '../../views/intern/InternUpdateView.js';
import InternResource from '../../models/resource/InternResource.js';
import AbstractController from '../AbstractController.js';

export default class InternsUpdateController extends AbstractController {
    constructor() {
        super();

        this.resource = new InternResource();
        this.id = null;
    }

    async handleGet(req, res) {
        const internUpdateView = new InternUpdateView();
        this.id = req.query.id;

        const internResponse =  await this.resource.getInternById(this.id);
        const intern = internResponse[0];

        internUpdateView.setIntern(intern);

        res.render(internUpdateView.getTemplate(), { 'this': internUpdateView });
   }

    async handlePost(req, res) {
        const intern = {"id" : this.id, ...req.body};

        await this.resource.updateInternById(intern);
     
        res.redirect('/interns');
    }
}