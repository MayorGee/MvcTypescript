import AbstractRouter from './AbstractRouter.js';

import InternController from '../controllers/InternController.js';
import InternsController from '../controllers/InternsController.js';

const internController = new InternController();
const internsController = new InternsController();

export default class InternRouter  extends AbstractRouter {
    constructor() {
        super();

        this.pairsOfRoutesAndControllers = [
            ['/intern', internController],
            ['/interns', internsController]
        ];

        this.setRouter();
    }
    

}