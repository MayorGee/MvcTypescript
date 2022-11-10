import ApiController from './ApiController.js';
import { IController } from '../../abstracts/Common.js';

import ModuleResource from '../../models/resource/ModuleResource.js';
import ModuleProvider from '../../models/provider/ModuleProvider.js';
import { IModuleResource, Module, IModuleProvider } from '../../abstracts/entities/Module.js';

import { NextFunction, Request, Response } from 'express';

export default class ModulesApiController  extends ApiController implements IController {
    private moduleResource: IModuleResource;
    private moduleProvider: IModuleProvider | undefined;

    constructor() {
        super();

        this.moduleResource = new ModuleResource();
    }
    
    protected async handleGet(req: Request, res: Response, next: NextFunction) {     
        try {
            this.moduleProvider = new ModuleProvider();
            const modules: Module[] = await this.moduleProvider.getModules();
        
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

            await this.moduleResource.addModule(newModule);

            this.returnSuccessResponse({ res, message: 'Module succesfully added to Database'});
            
        } catch(error) {
            console.log(error);
            this.returnFailedResponse({ res });
        }
    }
}