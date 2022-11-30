import WebController from '../WebController.js';
import { IController } from '../../../abstracts/Contract.js';

import ModulesView from '../../../views/module/ModulesView.js';
import { Module, IModuleService } from '../../../abstracts/entities/Module.js';

import { NextFunction, Request, Response } from 'express';
import { inject, injectable } from 'inversify';
import { DiType } from '../../../abstracts/Di.js';

@injectable()
export default class ModulesController extends WebController implements IController {
    private moduleService: IModuleService;

    constructor(@inject(DiType.moduleService) moduleService: IModuleService ) {
        super();

        this.moduleService =  moduleService;
    }
    
    protected async handleGet(req: Request, res: Response, next: NextFunction) {
        if(!this.isRoleMentor(req)) {
            return this.redirectToHome(res);
        }
        
        const modules: Module[] = await this.moduleService.getModules();

        const modulesView = new ModulesView();
        modulesView
            .setModules(modules)
            .setTemplate('./module/modules');

        this.renderPage(req, res, modulesView);
    }
}