import WebController from '../WebController.js';
import { IController } from '../../../abstracts/Common.js';

import ModuleResource from '../../../models/resource/ModuleResource.js';
import ModulesView from '../../../views/module/ModulesView.js';
import ModuleConverter from '../../../converters/ModuleConverter.js';
import { DbModule, IModuleResource } from '../../../abstracts/entities/Module.js';

import { NextFunction, Request, Response } from 'express';

export default class ModulesController extends WebController implements IController {
    protected async handleGet(req: Request, res: Response, next: NextFunction) {
        if(!this.isRoleMentor(req)) {
            return this.redirectToHome(res);
        }
        
        const moduleResource: IModuleResource = new ModuleResource();
        const modules: DbModule[] = await moduleResource.getModules();

        const modulesView = new ModulesView();
        modulesView
            .setModules(
                ModuleConverter.convertDbModules(modules)
            )
            .setTemplate('./module/modules');

        this.renderPage(req, res, modulesView);
    }
}