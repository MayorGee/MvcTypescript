import AbstractRouter from './AbstractRouter.js';

import InternshipController from '../controllers/Internship/InternshipController.js';
import InternshipsController from '../controllers/Internship/InternshipsController.js';

import { RequestMethod } from '../abstracts/Common.js';

const internshipController = new InternshipController();
const internshipsController = new InternshipsController();

export default class InternshipRouter extends AbstractRouter {
    constructor() {
        super();

        this.routes = [
            {
                route: '/internship',
                controller: internshipController,
                requestMethod: RequestMethod.get
            },
            {
                route: '/internships',
                controller: internshipsController,
                requestMethod: RequestMethod.get
            },
            {
                route: '/internships',
                controller: internshipsController,
                requestMethod: RequestMethod.post
            }
        ];

        this.setRouter();
    }
}