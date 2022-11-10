import ApiController from './ApiController.js';
import { IController } from '../../abstracts/Common.js';

import InternProvider from '../../models/provider/InternProvider.js'; 
import InternResource from '../../models/resource/InternResource.js';
import { Intern, IInternProvider, IInternResource } from '../../abstracts/entities/Intern.js';

import { NextFunction, Request, Response } from 'express';

export default class InternApiController extends ApiController implements IController {
    private internResource: IInternResource;
    private internProvider: IInternProvider | undefined;

    constructor() {
        super();

        this.internResource = new InternResource();
    }

    protected async handleGet(req: Request, res: Response, next: NextFunction) {
        const internId = this.handleId(req.params.id);

        if (!internId) {
            return this.handleIdError(internId, res);
        }   
             
        try {
            this.internProvider = new InternProvider();
            const intern: Intern = await this.internProvider.getInternById(internId);
        
            this.returnSuccessResponse({ res, data: intern});
        } catch(err: any) {
            return this.returnFailedResponse({
                res,
                errorCode: 404,
                errorMessage: err.message
            });
        }
    }

    protected async handleDelete(req: Request, res: Response, next: NextFunction) {
        const internId = this.handleId(req.params.id);

        if (!internId) {
            return this.handleIdError(internId, res);
        }
        
        try {
            await this.internResource.deleteInternById(internId);

            this.returnSuccessResponse({ res, message: 'Intern succesfully deleted'});

        } catch(error: any) {
            console.log(error);
            this.returnFailedResponse({ 
                res, 
                errorMessage: error.message 
            });
        }
    }

    protected async handlePut(req: Request, res: Response, next: NextFunction) {
        const internId = this.handleId(req.params.id);

        if (!internId) {
            return this.handleIdError(internId, res);
        } 
        
        try {
            req.body.id = internId;

            await this.internResource.updateInternById(req.body);

            this.returnSuccessResponse({ res, message: 'Intern succesfully updated'});
            
        } catch(error: any) {
            console.log(error);
            this.returnFailedResponse({ 
                res, 
                errorMessage: error.message 
            });
        }
    }
}
