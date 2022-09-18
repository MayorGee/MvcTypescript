import ModuleView from '../../views/module/ModuleView.js';
import ModuleResource from '../../models/resource/ModuleResource.js';

export default class ModuleController {
    async execute(req, res) {
        const moduleView = new ModuleView();
        const moduleResource = new ModuleResource();
        const id = req.query.id;

        if (!id) {
            res.redirect('/modules');

            return;
        }

        const moduleRes = await moduleResource.getModuleById(id);
        const module = moduleRes[0];

        moduleView.setModule(module);

        res.send(`
            Module Id: ${module.Id} <br/>
            Module Task: ${module.Task} <br/>
        `);
    }
}
