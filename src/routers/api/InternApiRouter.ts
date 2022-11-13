import AbstractRouter from '../AbstractRouter.js';

import InternApiController from '../../controllers/api/InternApiController.js';
import InternsApiController from '../../controllers/api/InternsApiController.js';

import { RequestMethod } from '../../abstracts/Enum.js';
import { IRouter } from '../../abstracts/Contract.js';

const internApiController = new InternApiController();
const internsApiController = new InternsApiController();

export default class InternApiRouter  extends AbstractRouter implements IRouter {
    constructor() {
        super();

        this.routes = [
            {
                route: '/api/intern/:id',
                controller: internApiController,
                requestMethod: RequestMethod.get
            },
            {
                route: '/api/interns',
                controller: internsApiController,
                requestMethod: RequestMethod.get
            },
            {
                route: '/api/interns',
                controller: internsApiController,
                requestMethod: RequestMethod.post
            },
            {
                route: '/api/intern/:id',
                controller: internApiController,
                requestMethod: RequestMethod.put
            },
            {
                route: '/api/intern/:id',
                controller: internApiController,
                requestMethod: RequestMethod.delete
            },
        ];

        this.setRouter();
    }
}