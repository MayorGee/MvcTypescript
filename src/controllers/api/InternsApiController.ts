import ApiController from './ApiController.js';
import { IController } from '../../abstracts/Common.js';

import InternProvider from '../../models/provider/InternProvider.js';
import InternResource from '../../models/resource/InternResource.js';
import { IInternProvider, IInternResource, Intern } from '../../abstracts/entities/Intern.js';

import { NextFunction, Request, Response } from 'express';

export default class InternsApiController  extends ApiController implements IController {
    private internResource: IInternResource | undefined;
    private internProvider: IInternProvider | undefined;

    protected async handleGet(req: Request, res: Response, next: NextFunction) {
        try {
            this.internProvider = new InternProvider();
            const interns: Intern[] = await this.internProvider.getInterns();
        
            this.returnSuccessResponse({ res, data: interns });
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
            const newIntern: Intern = req.body;

            this.internResource = new InternResource();
            await this.internResource.addIntern(newIntern);

            return this.returnSuccessResponse({ res, message: 'Mentor succesfully added to Database'});

        } catch(error) {
            console.log(error);
            this.returnFailedResponse({ res });
        }
    }
}