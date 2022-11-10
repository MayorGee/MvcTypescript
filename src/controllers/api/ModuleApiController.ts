import ApiController from './ApiController.js';
import { IController } from '../../abstracts/Common.js';

import ModuleResource from '../../models/resource/ModuleResource.js';
import ModuleProvider from '../../models/provider/ModuleProvider.js';
import { Module, IModuleResource, IModuleProvider } from '../../abstracts/entities/Module.js';

import { NextFunction, Request, Response } from 'express';

export default class ModuleController extends ApiController implements IController {
    private moduleResource: IModuleResource;
    private moduleProvider: IModuleProvider | undefined;

    constructor() {
        super();

        this.moduleResource = new ModuleResource();
    }
    
    protected async handleGet(req: Request, res: Response, next: NextFunction) {
        const moduleId = this.handleId(req.params.id);

        if (!moduleId) {
            return this.handleIdError(moduleId, res);
        }            
        
        try {
            this.moduleProvider = new ModuleProvider();
            const module: Module = await this.moduleProvider.getModuleById(moduleId);
        
            this.returnSuccessResponse({ res, data: module});
        } catch(error: any) {
            return this.returnFailedResponse({
                res,
                errorCode: 404,
                errorMessage: error.message
            });
        }
    }

    protected async handleDelete(req: Request, res: Response, next: NextFunction) {      
        const moduleId = this.handleId(req.params.id);

        if (!moduleId) {
            return this.handleIdError(moduleId, res);
        }  
        
        try {
            await this.moduleResource.deleteModuleById(moduleId);

            this.returnSuccessResponse({ res, message: 'Module succesfully deleted'});

        } catch(error) {
            console.log(error);
            this.returnFailedResponse({ res });
        }
    }

    protected async handlePut(req: Request, res: Response, next: NextFunction) {       
        const moduleId = this.handleId(req.params.id);

        if (!moduleId) {
            return this.handleIdError(moduleId, res);
        }
        
        try {
            req.body.id = moduleId;

            await this.moduleResource.updateModuleById(req.body);

            this.returnSuccessResponse({ res, message: 'Module succesfully updated'});

        } catch(error) {
            console.log(error);
            this.returnFailedResponse({ res });
        }
    }
}