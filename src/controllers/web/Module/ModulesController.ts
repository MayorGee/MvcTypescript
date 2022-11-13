import WebController from '../WebController.js';
import { IController } from '../../../abstracts/Contract.js';

import ModuleService from '../../../models/service/ModuleService.js';
import ModulesView from '../../../views/module/ModulesView.js';
import { Module, IModuleService } from '../../../abstracts/entities/Module.js';

import { NextFunction, Request, Response } from 'express';

export default class ModulesController extends WebController implements IController {
    protected async handleGet(req: Request, res: Response, next: NextFunction) {
        if(!this.isRoleMentor(req)) {
            return this.redirectToHome(res);
        }
        
        const moduleService: IModuleService = new ModuleService();
        const modules: Module[] = await moduleService.getModules();

        const modulesView = new ModulesView();
        modulesView
            .setModules(modules)
            .setTemplate('./module/modules');

        this.renderPage(req, res, modulesView);
    }
}