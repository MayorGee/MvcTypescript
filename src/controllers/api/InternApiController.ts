import ApiController from './ApiController.js';
import { IController } from '../../abstracts/Common.js';

import { NextFunction, Request, Response } from 'express';

import InternResource from '../../models/resource/InternResource.js';
import InternConverter from '../../converters/InternConverter.js';
import { DbIntern, IInternResource } from '../../abstracts/entities/Intern.js';


export default class InternApiController extends ApiController implements IController {
    private resource: IInternResource;

    constructor() {
        super();

        this.resource = new InternResource();
    }

    protected async handleGet(req: Request, res: Response, next: NextFunction) {
        const internId = this.handleId(req.params.id);

        if (!internId) {
            return this.handleIdError(internId, res);
        }   
                      
        const dbIntern: DbIntern = await this.resource.getInternById(internId);

        if (!dbIntern) {
            return this.returnFailedResponse({
                res, 
                errorCode: 404,
                errorMessage: 'Intern Not Found in Database'
            });
        }

        const intern = InternConverter.convertDbIntern(dbIntern);

        this.returnSuccessResponse({ res, data: intern});

    }

    protected async handleDelete(req: Request, res: Response, next: NextFunction) {
        const internId = this.handleId(req.params.id);

        if (!internId) {
            return this.handleIdError(internId, res);
        }
        
        try {
            await this.resource.deleteInternById(internId);

            this.returnSuccessResponse({ res, message: 'Intern succesfully delete'});

        } catch(error) {
            console.log(error);
            this.returnFailedResponse({ res });
        }
    }

    protected async handlePut(req: Request, res: Response, next: NextFunction) {
        const internId = this.handleId(req.params.id);

        if (!internId) {
            return this.handleIdError(internId, res);
        } 
        
        try {
            req.body.id = internId;

            await this.resource.updateInternById(req.body);

            this.returnSuccessResponse({ res, message: 'Intern succesfully updated'});
            
        } catch(error) {
            console.log(error);
            this.returnFailedResponse({ res });
        }
    }
}
