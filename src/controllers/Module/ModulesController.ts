import AbstractController from '../AbstractController.js';

import ModuleResource from '../../models/resource/ModuleResource.js';
import ModulesView from '../../views/module/ModulesView.js';
import ModuleConverter from '../../converters/ModuleConverter.js';

import { IController } from '../../abstracts/Common.js';
import { DbModule } from '../../abstracts/entities/Module.js';

export default class ModulesController extends AbstractController implements IController {
    async handleGet(req: any, res: any, next: any) {
        if(!this.isRoleMentor(req)) {
            return this.redirectToHome(res);
        }
        
        const moduleResource = new ModuleResource();
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