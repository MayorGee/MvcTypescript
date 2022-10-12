import AbstractRouter from './AbstractRouter.js';

import ModuleController from '../controllers/Module/ModuleController.js';
import ModulesController from '../controllers/Module/ModulesController.js';

import { IRouter, RequestMethod } from '../abstracts/Common.js';

const moduleController = new ModuleController();
const modulesController = new ModulesController();

export default class ModuleRouter extends AbstractRouter implements IRouter {
    constructor() {
        super();

        this.routes = [
            {
                route: '/module',
                controller: moduleController,
                requestMethod: RequestMethod.get
            },
            {
                route: '/modules',
                controller: modulesController,
                requestMethod: RequestMethod.get
            },
            {
                route: '/modules',
                controller: modulesController,
                requestMethod: RequestMethod.post
            }
        ];

        this.setRouter();
    }
}