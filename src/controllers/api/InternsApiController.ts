import ApiController from './ApiController.js';
import { IController } from '../../abstracts/Common.js';

import InternResource from '../../models/resource/InternResource.js';
import InternConverter from '../../converters/InternConverter.js';
import { DbIntern, IInternResource, Intern } from '../../abstracts/entities/Intern.js';

import { NextFunction, Request, Response } from 'express';

export default class InternsApiController  extends ApiController implements IController {
    private resource: IInternResource;

    constructor() {
        super();

        this.resource = new InternResource();
    }

    protected async handleGet(req: Request, res: Response, next: NextFunction) {
        const dbInterns: DbIntern[] = await this.resource.getInterns();
        const interns = InternConverter.convertDbInterns(dbInterns);

        this.returnSuccessResponse({ res, data: interns });
    }

    protected async handlePost(req: Request, res: Response, next: NextFunction) {
        try {
            const newIntern: Intern = req.body;

            await this.resource.addIntern(newIntern);

            return this.returnSuccessResponse({ res, message: 'Mentor succesfully added to Database'});

        } catch(error) {
            console.log(error);
            this.returnFailedResponse({ res });
        }
    }
}