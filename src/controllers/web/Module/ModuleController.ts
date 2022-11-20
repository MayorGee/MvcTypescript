import WebController from '../WebController.js';
import { IController } from '../../../abstracts/Contract.js';

import ModuleView from '../../../views/module/ModuleView.js';
import ModuleService from '../../../models/service/ModuleService.js';
import { Module, IModuleService } from '../../../abstracts/entities/Module.js';

import { NextFunction, Request, Response } from 'express';

export default class ModuleController extends WebController implements IController {
    protected async handleGet(req: Request, res: Response, next: NextFunction) {
        if(!this.isRoleMentor(req)) {
            return this.redirectToHome(res);
        }

        const moduleId = this.handleId(req.query.id);
 
        if (!moduleId) {
            return this.handleIdError(moduleId, res);
        }

        const moduleService: IModuleService = new ModuleService();
        const module: Module = await moduleService.getModuleById(moduleId);

        const moduleView = new ModuleView();
        moduleView
            .setModule(module)
            .setTemplate('./module/module');

        this.renderPage(req, res, moduleView);
    }
}
