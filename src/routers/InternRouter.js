import AbstractRouter from './AbstractRouter.js';

import InternController from '../controllers/InternController.js';
import InternsController from '../controllers/InternsController.js';

const internController = new InternController();
const internsController = new InternsController();

export default class InternRouter  extends AbstractRouter{
    constructor() {
        super();
    }

    setRouter() {
        this.router.get('/intern', internController.execute.bind(internController));
        this.router.get('/interns', internsController.execute.bind(internsController));
    }
}