import ApiController from './ApiController.js';
import { IController } from '../../abstracts/Contract.js';

import InternService from '../../models/service/InternService.js';
import { IInternService, Intern } from '../../abstracts/entities/Intern.js';

import { NextFunction, Request, Response } from 'express';

export default class InternsApiController  extends ApiController implements IController {
    private internService: IInternService;

    constructor() {
        super();

        this.internService = new InternService();
    }

    protected async handleGet(req: Request, res: Response, next: NextFunction) {
        try {
            this.internService = new InternService();
            const interns: Intern[] = await this.internService.getInterns();
        
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

            await this.internService.addIntern(newIntern);

            return this.returnSuccessResponse({ res, message: 'Mentor succesfully added to Database'});

        } catch(error) {
            console.log(error);
            this.returnFailedResponse({ res });
        }
    }
}