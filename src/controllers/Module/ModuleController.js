import ModuleView from '../../views/module/ModuleView.js';
import ModuleResource from '../../models/resource/ModuleResource.js';
import AbstractController from '../AbstractController.js';

export default class ModuleController extends AbstractController {
    async execute(req, res) {
        const moduleView = new ModuleView();
        const moduleResource = new ModuleResource();
        const id = req.query.id;

        const idIsValid = this.validateId(id, res);

        if(!idIsValid) {
            return;
        }

        const module = await moduleResource.getModuleById(id);

        moduleView.setModule(module);

        res.send(`
            Module Id: ${module.Id} <br/>
            Module Task: ${module.Task} <br/>
        `);
    }
}
