import AbstractController from '../AbstractController.js';

import ModuleResource from '../../models/resource/ModuleResource.js';
import ModulesView from '../../views/module/ModulesView.js';
import ModuleConverter from '../../converters/ModuleConverter.js';

import { IController } from '../../abstracts/Common.js';
import { DbModule, IModuleResource } from '../../abstracts/entities/Module.js';

export default class ModulesController extends AbstractController implements IController {
    protected async handleGet(req: any, res: any, next: any) {
        if(!this.isRoleMentor(req)) {
            return this.redirectToHome(res);
        }
        
        const moduleResource: IModuleResource = new ModuleResource();
        const modules: DbModule[] = await moduleResource.getModules();

        const modulesView = new ModulesView();
        modulesView
            .setModules(
                ModuleConverter.convertDbModules(modules)
            )
            .setTemplate('./module/modules');

        this.renderPage(req, res, modulesView);
    }
}