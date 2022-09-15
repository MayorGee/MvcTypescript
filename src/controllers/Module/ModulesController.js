import ModulesView from '../../views/ModulesView.js';
import AbstractController from '../AbstractController.js';

export default class ModulesController extends AbstractController {
    constructor() {
        super();

        this.view = new ModulesView();
        this.query = `SELECT * FROM Module`;
    }

    async setData(modules) {
        this.view.setModules(modules);
    }
}