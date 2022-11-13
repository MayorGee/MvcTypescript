import ApiController from './ApiController.js';
import { IController } from '../../abstracts/Contract.js';

import MentorService from '../../models/service/MentorService.js';
import { Mentor, IMentorService } from '../../abstracts/entities/Mentor.js';

import { NextFunction, Request, Response } from 'express';

export default class MentorsApiController  extends ApiController implements IController {
    private mentorService: IMentorService;

    constructor() {
        super();

        this.mentorService = new MentorService();
    }

    protected async handleGet(req: Request, res: Response, next: NextFunction) {      
        try {
            const mentors: Mentor[] = await this.mentorService.getMentors();
        
            this.returnSuccessResponse({ res, data: mentors });
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
            const newMentor: Mentor = req.body;

            await this.mentorService.addMentor(newMentor);

            this.returnSuccessResponse({ res, message: 'Mentor succesfully added to Database'});
        } catch(error) {
            console.log(error);
            this.returnFailedResponse({ res });
        }
    }
}