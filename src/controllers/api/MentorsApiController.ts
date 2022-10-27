import ApiController from './ApiController.js';
import { IController } from '../../abstracts/Common.js';

import MentorResource from '../../models/resource/MentorResource.js';
import MentorConverter from '../../converters/MentorConverter.js';
import { DbMentor, IMentorResource, Mentor } from '../../abstracts/entities/Mentor.js';

import { NextFunction, Request, Response } from 'express';

export default class MentorsApiController  extends ApiController implements IController {
    private resource: IMentorResource;

    constructor() {
        super();

        this.resource = new MentorResource();
    }
    
    protected async handleGet(req: Request, res: Response, next: NextFunction) {      
        const dbMentors: DbMentor[] = await this.resource.getMentors();
        const mentors = MentorConverter.convertDbMentors(dbMentors);

        this.returnSuccessResponse({ res, data: mentors });
    }

    protected async handlePost(req: Request, res: Response, next: NextFunction) {       
        try {
            const newMentor: Mentor = req.body;

            await this.resource.addMentor(newMentor);

            this.returnSuccessResponse({ res, message: 'Mentor succesfully added to Database'});
        } catch(error) {
            console.log(error);
            this.returnFailedResponse({ res });
        }
    }
}