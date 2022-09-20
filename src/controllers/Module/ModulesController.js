import ModuleResource from '../../models/resource/ModuleResource.js';
import ModulesView from '../../views/module/ModulesView.js';
import AbstractController from '../AbstractController.js';

export default class ModulesController extends AbstractController {
    async handleGet(req, res) {
        const moduleResource = new ModuleResource();
        const modulesView = new ModulesView();
              
        const modules = await moduleResource.getModules();

        modulesView.setModules(modules);

        res.render(modulesView.getTemplate(), { 'this': modulesView });
    }
}