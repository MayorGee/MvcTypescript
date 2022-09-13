import AbstractRouter from './AbstractRouter.js';

import ModuleController from '../controllers/ModuleController.js';
import ModulesController from '../controllers/ModulesController.js';

const moduleController = new ModuleController();
const modulesController = new ModulesController();

export default class ModuleRouter extends AbstractRouter {
    constructor() {
        super();

        this.routes = [
            {
                path: '/module',
                controller: moduleController
            },
            {
                path: '/modules',
                controller: modulesController
            }
        ];

        this.setRouter();
    }
}