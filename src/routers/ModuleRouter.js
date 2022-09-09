import express from 'express';

import ModuleController from '../controllers/ModuleController.js';
import ModulesController from '../controllers/ModulesController.js';

const moduleController = new ModuleController();
const modulesController = new ModulesController();

export default class ModuleRouter {
    constructor() {
        this.router = express.Router();
    }

    setRoutes() {
        this.router.get('/module', moduleController.execute.bind(moduleController));
        this.router.get('/modules', modulesController.execute.bind(modulesController));
    }

    getRoutes() {
        this.setRoutes();
    
        return this.router;
    }
}