import ApiController from './ApiController.js';

import ModuleService from '../../models/service/ModuleService.js';
import { Module, IModuleService } from '../../abstracts/entities/Module.js';

import { NextFunction, Request, Response } from 'express';
import { IController } from '../../abstracts/Contract.js';

export default class ModulesApiController  extends ApiController implements IController {
    private moduleService: IModuleService;

    constructor() {
        super();

        this.moduleService = new ModuleService();
    }
    
    protected async handleGet(req: Request, res: Response, next: NextFunction) {     
        try {
            const modules: Module[] = await this.moduleService.getModules();
        
            this.returnSuccessResponse({ res, data: modules });
        } catch(error: any) {
            return this.returnFailedResponse({
                res,
                errorCode: 404,
                errorMessage: error.message
            });
        }
    }

    protected async handlePost(req: Request, res: Response, next: NextFunction) {        
        try {
            const newModule: Module = req.body;
            
            await this.moduleService.addModule(newModule);

            this.returnSuccessResponse({ res, message: 'Module succesfully added to Database'});
            
        } catch(error) {
            console.log(error);
            this.returnFailedResponse({ res });
        }
    }
}