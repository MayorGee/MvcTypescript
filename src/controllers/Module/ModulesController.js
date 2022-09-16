import ModulesView from '../../views/ModulesView.js';
import Database from '../../Database.js';

const modulesView = new ModulesView();

export default class ModulesController {
    async execute(req, res) {
        
        const modules = await Database.runQuery(`SELECT * FROM Module`);      

        this.setModules(modules);

        res.render(modulesView.getTemplate(), { 'this': modulesView });
    }
    
    async setModules(modules) {
        modulesView.setModules(modules);
    }
}