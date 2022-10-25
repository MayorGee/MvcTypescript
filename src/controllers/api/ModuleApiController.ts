import ApiController from './ApiController.js';
import { IController } from '../../abstracts/Common.js';

import ModuleResource from '../../models/resource/ModuleResource.js';
import ModuleConverter from '../../converters/ModuleConverter.js';
import { DbModule, IModuleResource } from '../../abstracts/entities/Module.js';

import { NextFunction, Request, Response } from 'express';

export default class ModuleController extends ApiController implements IController {
    private resource: IModuleResource;

    constructor() {
        super();

        this.resource = new ModuleResource();
    }
    
    protected async handleGet(req: Request, res: Response, next: NextFunction) {
        const moduleId = this.handleId(req.params.id);

        if (!moduleId) {
            return this.sendClientError({ res });
        }            
        
        const dbModule: DbModule = await this.resource.getModuleById(moduleId);

        if (!dbModule) {
            return this.sendResponse(res, 404,'Module Not Found in Database');
        }

        const module = ModuleConverter.convertDbModule(dbModule);

        res.json({
            data: module
        })
    }

    protected async handleDelete(req: Request, res: Response, next: NextFunction) {      
        const moduleId = this.handleId(req.params.id);

        if (!moduleId) {
            return this.sendClientError({ res });
        }  
        
        try {
            await this.resource.deleteModuleById(moduleId);
            res.status(200).send('Module succesfully deleted');
        } catch(error) {
            console.log(error);
            this.sendServerError({ res });
        }
    }

    protected async handlePut(req: Request, res: Response, next: NextFunction) {       
        const moduleId = this.handleId(req.params.id);

        if (!moduleId) {
            return this.sendClientError({ res });
        }
        
        try {
            const moduleToUpdate = req.body;
            moduleToUpdate.id = moduleId;

            await this.resource.updateModuleById(moduleToUpdate);
            res.status(200).send('Module succesfully updated');
        } catch(error) {
            console.log(error);
            this.sendServerError({ res });
        }
    }
}