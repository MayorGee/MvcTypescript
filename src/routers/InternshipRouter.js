import AbstractRouter from './AbstractRouter.js';

import InternshipController from '../controllers/InternshipController.js';
import InternshipsController from '../controllers/InternshipsController.js';

const internshipController = new InternshipController();
const internshipsController = new InternshipsController();

export default class InternshipRouter extends AbstractRouter {
    constructor() {
        super();
    }

    setRouter() {
        this.router.get('/internship', internshipController.execute.bind(internshipController));
        this.router.get('/internships', internshipsController.execute.bind(internshipsController));
    }
}