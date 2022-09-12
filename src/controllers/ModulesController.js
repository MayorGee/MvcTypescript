import ModulesView from '../views/ModulesView.js';

export default class ModulesController {
    execute(req, res) {
        const modulesView = new ModulesView();
        
        const moduleTemplate = modulesView.getTemplate();
        
        res.render(moduleTemplate, { 'this': modulesView});
    }
}