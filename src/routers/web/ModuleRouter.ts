import AbstractRouter from '../AbstractRouter.js';

import ModuleController from '../../controllers/web/Module/ModuleController.js';
import ModulesController from '../../controllers/web/Module/ModulesController.js';
import { IRouter } from '../../abstracts/Contract.js';
import { RequestMethod } from '../../abstracts/Enum.js';
import { DiType } from '../../abstracts/Di.js';
import DiContainer from '../../models/DiContainer.js';

const diContainer = DiContainer.getContainer();

export default class ModuleRouter extends AbstractRouter implements IRouter {
    protected moduleController: ModuleController;
    protected modulesController: ModulesController;

    constructor() {
        super();

        this.moduleController = diContainer.get(DiType.moduleController) as ModuleController;
        this.modulesController = diContainer.get(DiType.modulesController) as ModulesController;

        this.routes = [
            {
                route: '/module',
                controller: this.moduleController,
                requestMethod: RequestMethod.get
            },
            {
                route: '/modules',
                controller: this.modulesController,
                requestMethod: RequestMethod.get
            },
            {
                route: '/modules',
                controller: this.modulesController,
                requestMethod: RequestMethod.post
            }
        ];

        this.setRouter();
    }
}