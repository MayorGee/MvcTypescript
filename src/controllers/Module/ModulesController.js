import ModuleResource from '../../models/resource/ModuleResource.js';
import ModulesView from '../../views/module/ModulesView.js';
import AbstractController from '../AbstractController.js';

export default class ModulesController extends AbstractController {
    async handleGet() {
        const moduleResource = new ModuleResource();
        const modules = await moduleResource.getModules();

        const modulesView = new ModulesView();
        modulesView.setModules(modules);

        this.renderPage(modulesView.getTemplate(), { 'this': modulesView });
    }
}