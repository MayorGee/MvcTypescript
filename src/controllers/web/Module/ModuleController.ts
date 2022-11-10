import WebController from '../WebController.js';
import { IController } from '../../../abstracts/Common.js';

import ModuleView from '../../../views/module/ModuleView.js';
import ModuleResource from '../../../models/resource/ModuleResource.js';
import ModuleConverter from '../../../converters/ModuleConverter.js';
import { DbModule, IModuleResource } from '../../../abstracts/entities/Module.js';

import { NextFunction, Request, Response } from 'express';

export default class ModuleController extends WebController implements IController {
    protected async handleGet(req: Request, res: Response, next: NextFunction) {
        if(!this.isRoleMentor(req)) {
            return this.redirectToHome(res);
        }

        const moduleId = req.query.id;

        if (!this.isNumber(moduleId)) {
            return this.handleIdError(moduleId, res);
        }

        const moduleResource: IModuleResource = new ModuleResource();
        const module: DbModule = await moduleResource.getModuleById(moduleId);

        const moduleView = new ModuleView();
        moduleView
            .setModule(
                ModuleConverter.convertDbModule(module)
            )
            .setTemplate('./module/module');

        this.renderPage(req, res, moduleView);
    }
}
