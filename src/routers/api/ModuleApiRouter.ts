import AbstractRouter from '../AbstractRouter.js';

import ModuleApiController from '../../controllers/api/ModuleApiController.js';
import ModulesApiController from '../../controllers/api/ModulesApiController.js';
import { IRouter } from '../../abstracts/Contract.js';
import { RequestMethod } from '../../abstracts/Enum.js';
import DiContainer from '../../models/DiContainer.js';
import { DiType } from '../../abstracts/Di.js';

const diContainer = DiContainer.getContainer();

export default class ModuleApiRouter extends AbstractRouter implements IRouter {
    protected moduleApiController: ModuleApiController;
    protected modulesApiController: ModulesApiController;

    constructor() {
        super();

        this.moduleApiController = diContainer.get(DiType.moduleApiController) as ModuleApiController;
        this.modulesApiController = diContainer.get(DiType.modulesApiController) as ModulesApiController;


        this.routes = [
            {
                route: '/api/module/:id',
                controller: this.moduleApiController,
                requestMethod: RequestMethod.get
            },
            {
                route: '/api/modules',
                controller: this.modulesApiController,
                requestMethod: RequestMethod.get
            },
            {
                route: '/api/modules',
                controller: this.modulesApiController,
                requestMethod: RequestMethod.post
            },
            {
                route: '/api/module/:id',
                controller: this.moduleApiController,
                requestMethod: RequestMethod.put
            },
            {
                route: '/api/module/:id',
                controller: this.moduleApiController,
                requestMethod: RequestMethod.delete
            }
        ];

        this.setRouter();
    }
}