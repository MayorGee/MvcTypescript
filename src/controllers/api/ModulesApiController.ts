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
        const Modules = ModuleConverter.convertDbModules(dbModules);

        res.status(200).json(Modules);
    }

    protected async handlePost(req: Request, res: Response, next: NextFunction) {        
        try {
            const newModule: Module = req.body;

            await this.resource.addModule(newModule);

            return this.sendResponse(res, 200,'Module succesfully added to Database');
            
        } catch(error) {
            console.log(error);
            this.sendServerError({ res });
        }
    }
}