import AbstractRouter from '../AbstractRouter.js';

import ModuleController from '../../controllers/web/Module/ModuleController.js';
import ModulesController from '../../controllers/web/Module/ModulesController.js';
import { IRouter } from '../../abstracts/Contract.js';
import { RequestMethod } from '../../abstracts/Enum.js';

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