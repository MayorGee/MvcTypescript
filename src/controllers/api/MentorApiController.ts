import ApiController from './ApiController.js';
import { IController } from '../../abstracts/Common.js';

import MentorResource from '../../models/resource/MentorResource.js';
import MentorProvider from '../../models/provider/MentorProvider.js';
import { Mentor, IMentorProvider, IMentorResource } from '../../abstracts/entities/Mentor.js';

import { Request, Response, NextFunction } from 'express';

export default class MentorApiController extends ApiController implements IController {
    private mentorResource: IMentorResource;
    private mentorProvider: IMentorProvider | undefined;

    constructor() {
        super();

        this.mentorResource = new MentorResource();
    }

    protected async handleGet(req: Request, res: Response, next: NextFunction) {     
        const mentorId = this.handleId(req.params.id);

        if (!mentorId) {
            return this.handleIdError(mentorId, res);
        } 

        try {
            this.mentorProvider = new MentorProvider();
            const mentor: Mentor = await this.mentorProvider.getMentorById(mentorId);

            this.returnSuccessResponse({ res, data: mentor });
        } catch(error: any) {
            return this.returnFailedResponse({
                res, 
                errorCode: 404,
                errorMessage: error.message
            });
        }
    }

    protected async handleDelete(req: Request, res: Response, next: NextFunction) {
        const mentorId = this.handleId(req.params.id);

        if (!mentorId) {
            return this.handleIdError(mentorId, res);
        } 
        
        try {
            await this.mentorResource.deleteMentorById(mentorId);

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

            await this.mentorResource.updateMentorById(req.body);

            this.returnSuccessResponse({ res, message: 'Mentor succesfully updated'});

        } catch(error) {
            console.log(error);
            this.returnFailedResponse({ res });
        }
    }
}