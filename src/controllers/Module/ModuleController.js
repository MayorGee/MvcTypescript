import ModuleView from '../../views/module/ModuleView.js';
import ModuleResource from '../../models/resource/ModuleResource.js';
import AbstractController from '../AbstractController.js';

export default class ModuleController extends AbstractController {
    async execute(req, res) {
        const moduleView = new ModuleView();
        const moduleResource = new ModuleResource();
        const moduleId = req.query.id;

        if (this.isIdInvalid(moduleId)) {
            return this.handleIdError(moduleId, res);
        }

        const module = await moduleResource.getModuleById(moduleId);

        moduleView.setModule(module);
        moduleView.setTemplate('module');

        this.renderPage(res, moduleView);
    }
}
