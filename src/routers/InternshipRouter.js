import AbstractRouter from './AbstractRouter.js';

import InternshipController from '../controllers/Internship/InternshipController.js';
import InternshipsController from '../controllers/Internship/InternshipsController.js';

const internshipController = new InternshipController();
const internshipsController = new InternshipsController();

export default class InternshipRouter extends AbstractRouter {
    constructor() {
        super();

        this.routes = [
            {
                path: '/internship',
                controller: internshipController,
                method: 'GET'
            },
            {
                path: '/internships',
                controller: internshipsController,
                method: 'GET'
            },
            {
                path: '/internships',
                controller: internshipsController,
                method: 'POST'
            }
        ];

        this.setRouter();
    }
}