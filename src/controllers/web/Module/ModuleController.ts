import WebController from '../WebController.js';
import { IController } from '../../../abstracts/Contract.js';

import ModuleView from '../../../views/module/ModuleView.js';
import { Module, IModuleService } from '../../../abstracts/entities/Module.js';

import { NextFunction, Request, Response } from 'express';
import { inject, injectable } from 'inversify';
import { DiType } from '../../../abstracts/Di.js';

@injectable()
export default class ModuleController extends WebController implements IController {
    private moduleService: IModuleService;

    constructor(@inject(DiType.moduleService) moduleService: IModuleService ) {
        super();

        this.moduleService =  moduleService;
    }
    
    protected async handleGet(req: Request, res: Response, next: NextFunction) {
        if(!this.isRoleMentor(req)) {
            return this.redirectToHome(res);
        }

        const moduleId = this.validateId(req.query.id);
 
        if (!moduleId) {
            return this.handleIdError(moduleId, res);
        }

        const module: Module = await this.moduleService.getModuleById(moduleId);

        const moduleView = new ModuleView();
        moduleView
            .setModule(module)
            .setTemplate('./module/module');

        this.renderPage(req, res, moduleView);
    }
}
