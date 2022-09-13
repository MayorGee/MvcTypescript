import AbstractRouter from './AbstractRouter.js';

import InternshipController from '../controllers/InternshipController.js';
import InternshipsController from '../controllers/InternshipsController.js';

const internshipController = new InternshipController();
const internshipsController = new InternshipsController();

export default class InternshipRouter extends AbstractRouter {
    constructor() {
        super();

        this.routes = [
            {
                path: '/internship',
                controller: internshipController
            },
            {
                path: '/internships',
                controller: internshipsController
            }
        ];

        this.setRouter();
    }
}