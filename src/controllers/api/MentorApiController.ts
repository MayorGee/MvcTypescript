import ApiController from './ApiController.js';

import { IController } from '../../abstracts/Common.js';

import MentorResource from '../../models/resource/MentorResource.js';
import MentorConverter from '../../converters/MentorConverter.js';
import { DbMentor, IMentorResource } from '../../abstracts/entities/Mentor.js';

import { Request, Response, NextFunction } from 'express';

export default class MentorApiController extends ApiController implements IController {
    private resource: IMentorResource;

    constructor() {
        super();

        this.resource = new MentorResource();
    }

    protected async handleGet(req: Request, res: Response, next: NextFunction) {     
        const mentorId = this.handleId(req.params.id);

        if (!mentorId) {
            return this.handleIdError(mentorId, res);
        } 

        const dbMentor: DbMentor = await this.resource.getMentorById(mentorId);

        if (!dbMentor) {
            return this.returnFailedResponse({
                res, 
                errorCode: 404,
                errorMessage: 'Mentor Not Found in Database'
            });
        }

        const mentor = MentorConverter.convertDbMentor(dbMentor);

        this.returnSuccessResponse({ res, data: mentor });
    }

    protected async handleDelete(req: Request, res: Response, next: NextFunction) {
        const mentorId = this.handleId(req.params.id);

        if (!mentorId) {
            return this.handleIdError(mentorId, res);
        } 
        
        try {
            await this.resource.deleteMentorById(mentorId);

            this.returnSuccessResponse({ res, message: 'Mentor succesfully deleted'});

        } catch(error) {
            console.log(error);
            this.returnFailedResponse({ res });
        }
    }

    protected async handlePut(req: Request, res: Response, next: NextFunction) {
        const mentorId = this.handleId(req.params.id);

        if (!mentorId) {
            return this.handleIdError(mentorId, res);
        } 
        
        try {
            req.body.id = mentorId;

            await this.resource.updateMentorById(req.body);

            this.returnSuccessResponse({ res, message: 'Mentor succesfully updated'});

        } catch(error) {
            console.log(error);
            this.returnFailedResponse({ res });
        }
    }
}