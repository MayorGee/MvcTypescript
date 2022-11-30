import { Container } from 'inversify';
import { IController } from '../abstracts/Contract.js';
import { DiType } from '../abstracts/Di.js';
import { IModuleResource, IModuleService } from '../abstracts/entities/Module.js';
import ModuleController from '../controllers/api/ModuleApiController.js';
import ModuleApiController from '../controllers/api/ModuleApiController.js';
import ModulesApiController from '../controllers/api/ModulesApiController.js';
import ModulesController from '../controllers/web/Module/ModulesController.js';
import ModuleResource from './resource/ModuleResource.js';
import ModuleDummyService from './service/ModuleDummyService.js';
import ModuleService from './service/ModuleService.js';
import Environment from './Environment.js';

const isDatabaseSet = Environment.isDatabaseSet();

export default class DiContainer {
    public static container: Container;

    public static getContainer(): Container {
        if (!this.container) {
            this.container = new Container();
        }

        return this.container;
    }

    public static bindAll() {
        const diContainer = this.getContainer();

        diContainer.bind<IModuleService>(DiType.moduleService).to(isDatabaseSet ? ModuleService : ModuleDummyService);
        diContainer.bind<IModuleResource>(DiType.moduleResource).to(ModuleResource);
        diContainer.bind<IController>(DiType.moduleController).to(ModuleController);
        diContainer.bind<IController>(DiType.modulesController).to(ModulesController);
        diContainer.bind<IController>(DiType.moduleApiController).to(ModuleApiController);
        diContainer.bind<IController>(DiType.modulesApiController).to(ModulesApiController);
    }
}