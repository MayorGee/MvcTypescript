import ModulesView from '../views/ModulesView.js';

export default class ModulesController {
    execute(req, res) {
        const modulesView = new ModulesView();

        res.render(modulesView.getTemplate(), { 'this': modulesView});
    }
}