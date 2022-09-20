import ModuleView from '../../views/module/ModuleView.js';
import ModuleResource from '../../models/resource/ModuleResource.js';
import AbstractController from '../AbstractController.js';

export default class ModuleController extends AbstractController {
    async handleGet(req, res) {
        const moduleId = req.query.id;

        if (!this.isIdNumber(moduleId)) {
            return this.handleIdError(moduleId, res);
        }

        const moduleResource = new ModuleResource();
        const module = await moduleResource.getModuleById(moduleId);

        const moduleView = new ModuleView();
        moduleView
            .setModule(module)
            .setTemplate('module');

        this.renderPage(res, moduleView);
    }
}
