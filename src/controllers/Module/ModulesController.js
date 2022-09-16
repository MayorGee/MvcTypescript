import ModulesView from '../../views/ModulesView.js';
import Database from '../../Database.js';

export default class ModulesController {
    async execute(req, res) {
        const modulesView = new ModulesView();
        
        const modules = await Database.runQuery(`SELECT * FROM Module`);      

        modulesView.setModules(modules);

        res.render(modulesView.getTemplate(), { 'this': modulesView });
    }
}