import ModuleResource from '../../models/resource/ModuleResource.js';
import ModulesView from '../../views/module/ModulesView.js';
import AbstractController from '../AbstractController.js';

export default class ModulesController extends AbstractController {
    async handleGet() {
        if(!this.isRoleMentor(req)) {
            return this.redirect(res, '/');
        }
        
        const moduleResource = new ModuleResource();
        const modules = await moduleResource.getModules();

        const modulesView = new ModulesView();
        modulesView
            .setModules(modules)
            .setTemplate('./module/modules');

        this.renderPage(modulesView.getTemplate(), { 'this': modulesView });
    }
}