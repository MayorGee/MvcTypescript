import ApiController from './ApiController.js';
import { IController } from '../../abstracts/Contract.js';

import InternService from '../../models/service/InternService.js'; 
import { Intern, IInternService } from '../../abstracts/entities/Intern.js';

import { NextFunction, Request, Response } from 'express';
import ReturnJsonResponse from '../../decorators/ReturnJsonResponse.js';

export default class InternApiController extends ApiController implements IController {
    private internService: IInternService;

    constructor() {
        super();

        this.internService = new InternService();
    }

    @ReturnJsonResponse()
    protected async handleGet(req: Request, res: Response, next: NextFunction) {
        const internId = this.validateId(req.params.id);

        if (!internId) {
            return this.handleIdError(internId, res);
        }   
             
        this.internService = new InternService();
        const intern: Intern = await this.internService.getInternById(internId);
        
        return intern;
    }

    protected async handleDelete(req: Request, res: Response, next: NextFunction) {
        const internId = this.validateId(req.params.id);

        if (!internId) {
            return this.handleIdError(internId, res);
        }

        try {
            await this.internService.deleteInternById(internId);

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
        const internId = this.validateId(req.params.id);

        if (!internId) {
            return this.handleIdError(internId, res);
        } 

        try {
            req.body.id = internId;

            await this.internService.updateInternById(req.body);

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
