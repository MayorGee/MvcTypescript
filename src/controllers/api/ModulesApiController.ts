import ApiController from './ApiController.js';
import { IController } from '../../abstracts/Common.js';

import ModuleResource from '../../models/resource/ModuleResource.js';
import ModuleConverter from '../../converters/ModuleConverter.js';
import { DbModule, IModuleResource, Module } from '../../abstracts/entities/Module.js';

import { NextFunction, Request, Response } from 'express';

export default class ModulesApiController  extends ApiController implements IController {
    private resource: IModuleResource;

    constructor() {
        super();

        this.resource = new ModuleResource();
    }
    
    protected async handleGet(req: Request, res: Response, next: NextFunction) {     
        const dbModules: DbModule[] = await this.resource.getModules();
        const modules = ModuleConverter.convertDbModules(dbModules);

        this.returnSuccessResponse({ res, data: modules });
    }

    protected async handlePost(req: Request, res: Response, next: NextFunction) {        
        try {
            const newModule: Module = req.body;

            await this.resource.addModule(newModule);

            this.returnSuccessResponse({ res, message: 'Module succesfully added to Database'});

        } catch(error) {
            console.log(error);
            this.returnFailedResponse({ res });
        }
    }
}