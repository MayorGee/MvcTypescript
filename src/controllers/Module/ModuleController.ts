import AbstractController from '../AbstractController.js';

import ModuleView from '../../views/module/ModuleView.js';
import ModuleResource from '../../models/resource/ModuleResource.js';
import ModuleConverter from '../../converters/ModuleConverter.js';

import { IController } from '../../abstracts/Common.js';
import { DbModule } from '../../abstracts/entities/Module.js';

export default class ModuleController extends AbstractController implements IController {
    async handleGet(req: any, res: any, next: any) {
        if(!this.isRoleMentor(req)) {
            return this.redirectToHome(res);
        }

        const moduleId: number = req.query.id;

        if (!this.isNumber(moduleId)) {
            return this.handleIdError(moduleId, res);
        }

        const moduleResource = new ModuleResource();
        const module: DbModule = await moduleResource.getModuleById(moduleId);

        const moduleView = new ModuleView();
        moduleView
            .setModule(
                ModuleConverter.convertDbModule(module)
            )
            .setTemplate('./module/module');

        this.renderPage(req, res, moduleView);
    }
}
