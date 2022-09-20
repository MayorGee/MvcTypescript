import ModuleView from '../../views/module/ModuleView.js';
import ModuleResource from '../../models/resource/ModuleResource.js';
import AbstractController from '../AbstractController.js';

export default class ModuleController extends AbstractController {
    async execute(req, res) {
        const moduleId = req.query.id;

        if (!this.isIdNumber(moduleId)) {
            return this.handleIdError(moduleId, res);
        }

        const moduleView = new ModuleView();
        const moduleResource = new ModuleResource();

        const module = await moduleResource.getModuleById(moduleId);

        moduleView
            .setModule(module)
            .setTemplate('module');

        this.renderPage(res, moduleView);
    }
}
