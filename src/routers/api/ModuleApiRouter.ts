import AbstractRouter from '../AbstractRouter.js';

import ModuleApiController from '../../controllers/api/ModuleApiController.js';
import ModulesApiController from '../../controllers/api/ModulesApiController.js';

import { IRouter, RequestMethod } from '../../abstracts/Common.js';

const moduleApiController = new ModuleApiController();
const modulesApiController = new ModulesApiController();

export default class ModuleApiRouter extends AbstractRouter implements IRouter {
    constructor() {
        super();

        this.routes = [
            {
                route: '/api/module/:id',
                controller: moduleApiController,
                requestMethod: RequestMethod.get
            },
            {
                route: '/api/modules',
                controller: modulesApiController,
                requestMethod: RequestMethod.get
            },
            {
                route: '/api/modules',
                controller: modulesApiController,
                requestMethod: RequestMethod.post
            },
            {
                route: '/api/module/:id',
                controller: moduleApiController,
                requestMethod: RequestMethod.put
            },
            {
                route: '/api/module/:id',
                controller: moduleApiController,
                requestMethod: RequestMethod.delete
            }
        ];

        this.setRouter();
    }
}