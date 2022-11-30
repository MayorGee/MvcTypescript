import ApiController from './ApiController.js';

import { Module, IModuleService } from '../../abstracts/entities/Module.js';

import { NextFunction, Request, Response } from 'express';
import { IController } from '../../abstracts/Contract.js';
import { inject, injectable } from 'inversify';
import { DiType } from '../../abstracts/Di.js';

@injectable()
export default class ModuleController extends ApiController implements IController {
    private moduleService: IModuleService;

    constructor(@inject(DiType.moduleService) moduleService: IModuleService) {
        super();

        this.moduleService = moduleService;
    }
    
    protected async handleGet(req: Request, res: Response, next: NextFunction) {
        const moduleId = this.validateId(req.params.id);

        if (!moduleId) {
            return this.handleIdError(moduleId, res);
        }            
        
        try {
            const module: Module = await this.moduleService.getModuleById(moduleId);
        
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
        const moduleId = this.validateId(req.params.id);

        if (!moduleId) {
            return this.handleIdError(moduleId, res);
        }  

        try {
            await this.moduleService.deleteModuleById(moduleId);

            this.returnSuccessResponse({ res, message: 'Module succesfully deleted'});

        } catch(error) {
            console.log(error);
            this.returnFailedResponse({ res });
        }
    }

    protected async handlePut(req: Request, res: Response, next: NextFunction) {       
        const moduleId = this.validateId(req.params.id);

        if (!moduleId) {
            return this.handleIdError(moduleId, res);
        }

        try {
            req.body.id = moduleId;

            await this.moduleService.updateModuleById(req.body);

            this.returnSuccessResponse({ res, message: 'Module succesfully updated'});

        } catch(error) {
            console.log(error);
            this.returnFailedResponse({ res });
        }
    }
}