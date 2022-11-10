import ApiController from './ApiController.js';
import { IController } from '../../abstracts/Common.js';

import MentorResource from '../../models/resource/MentorResource.js';
import MentorProvider from '../../models/provider/MentorProvider.js';
import { IMentorResource, Mentor, IMentorProvider } from '../../abstracts/entities/Mentor.js';

import { NextFunction, Request, Response } from 'express';

export default class MentorsApiController  extends ApiController implements IController {
    private mentorResource: IMentorResource | undefined;
    private mentorProvider: IMentorProvider | undefined;
    
    protected async handleGet(req: Request, res: Response, next: NextFunction) {      
        try {
            this.mentorProvider = new MentorProvider();
            const mentors: Mentor[] = await this.mentorProvider.getMentors();
        
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

            this.mentorResource = new MentorResource();
            await this.mentorResource.addMentor(newMentor);

            this.returnSuccessResponse({ res, message: 'Mentor succesfully added to Database'});
        } catch(error) {
            console.log(error);
            this.returnFailedResponse({ res });
        }
    }
}