import AbstractRouter from './AbstractRouter.js';

import InternController from '../controllers/InternController.js';
import InternsController from '../controllers/InternsController.js';

const internController = new InternController();
const internsController = new InternsController();

export default class InternRouter  extends AbstractRouter {
    constructor() {
        super();

        this.routes = [
            {
                path: '/intern',
                controller: internController
            },
            {
                path: '/interns',
                controller: internsController
            }
        ];

        this.setRouter();
    }
    

}