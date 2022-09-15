import AbstractRouter from './AbstractRouter.js';

import ModuleController from '../controllers/Module/ModuleController.js';
import ModulesController from '../controllers/Module/ModulesController.js';

const moduleController = new ModuleController();
const modulesController = new ModulesController();

export default class ModuleRouter extends AbstractRouter {
    constructor() {
        super();

        this.routes = [
            {
                path: '/module',
                controller: moduleController,
                method: 'GET'
            },
            {
                path: '/modules',
                controller: modulesController,
                method: 'GET'
            },
            {
                path: '/modules',
                controller: modulesController,
                method: 'POST'
            }
        ];

        this.setRouter();
    }
}