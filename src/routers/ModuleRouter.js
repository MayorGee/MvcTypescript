import express from 'express';

import ModuleController from '../controllers/ModuleController.js';
import ModulesController from '../controllers/ModulesController.js';

const moduleController = new ModuleController();
const modulesController = new ModulesController();

export default class ModuleRouter {
    constructor() {
        this.router = express.Router();
        this.setRouter();
    }

    setRouter() {
        this.router.get('/module', moduleController.execute.bind(moduleController));
        this.router.get('/modules', modulesController.execute.bind(modulesController));
    }

    getRouter() {
        return this.router;
    }
}