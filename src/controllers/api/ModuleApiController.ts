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
            return this.sendClientError({ 
                res,
                errorCode: 404,
                errorMessage: 'Module Not Found' 
            });
        }            
        
        const dbModule: DbModule = await this.resource.getModuleById(moduleId);

        if (!dbModule) {
            return this.returnFailedResponse({
                res, 
                errorCode: 404,
                errorMessage: 'Module Not Found in Database'
            });
        }

        const module = ModuleConverter.convertDbModule(dbModule);

        this.returnSuccessResponse({ res, data: module });
    }

    protected async handleDelete(req: Request, res: Response, next: NextFunction) {      
        const moduleId = this.handleId(req.params.id);

        if (!moduleId) {
            return this.sendClientError({ 
                res,
                errorCode: 404,
                errorMessage: 'Module Not Found' 
             });
        }  
        
        try {
            await this.resource.deleteModuleById(moduleId);

            this.returnSuccessResponse({ res, message: 'Module succesfully deleted'});

        } catch(error) {
            console.log(error);
            this.sendServerError({ 
                res,
                errorCode: 500
             });
        }
    }

    protected async handlePut(req: Request, res: Response, next: NextFunction) {       
        const moduleId = this.handleId(req.params.id);

        if (!moduleId) {
            return this.sendClientError({ 
                res,
                errorCode: 404,
                errorMessage: 'Module Not Found' 
             });
        }
        
        try {
            req.body.id = moduleId;

            await this.resource.updateModuleById(req.body);

            this.returnSuccessResponse({ res, message: 'Module succesfully updated'});

        } catch(error) {
            console.log(error);
            this.sendServerError({ 
                res,
                errorCode: 500
             });
        }
    }
}