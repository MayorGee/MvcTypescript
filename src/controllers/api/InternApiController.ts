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
            return this.sendClientError({ res });
        }   
                      
        const dbIntern: DbIntern = await this.resource.getInternById(internId);

        if (!dbIntern) {
            return this.sendResponse(res, 404,'Intern Not Found in Database');
        }

        const intern = InternConverter.convertDbIntern(dbIntern);

        res.json({
            data: intern
        })
    }

    protected async handleDelete(req: Request, res: Response, next: NextFunction) {
        const internId = this.handleId(req.params.id);

        if (!internId) {
            return this.sendClientError({ res });
        }
        
        try {
            await this.resource.deleteInternById(internId);
            res.status(200).send('Intern succesfully deleted');
        } catch(error) {
            console.log(error);
            this.sendServerError({ res });
        }
    }

    protected async handlePut(req: Request, res: Response, next: NextFunction) {
        const internId = this.handleId(req.params.id);

        if (!internId) {
            return this.sendClientError({ res });
        } 
        
        try {
            const internToUpdate = req.body;
            internToUpdate.id = internId;

            await this.resource.updateInternById(internToUpdate);
            res.status(200).send('Intern succesfully updated');
        } catch(error) {
            console.log(error);
            this.sendServerError({ res });
        }
    }
}
