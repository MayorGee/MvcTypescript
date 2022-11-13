import ApiController from './ApiController.js';

import MentorService from '../../models/service/MentorService.js';
import { Mentor, IMentorService } from '../../abstracts/entities/Mentor.js';

import { IController } from '../../abstracts/Contract.js';
import { Request, Response, NextFunction } from 'express';

export default class MentorApiController extends ApiController implements IController {
    private mentorService: IMentorService;

    constructor() {
        super();

        this.mentorService = new MentorService();
    }

    protected async handleGet(req: Request, res: Response, next: NextFunction) {     
        const mentorId = this.handleId(req.params.id);

        if (!mentorId) {
            return this.handleIdError(mentorId, res);
        } 

        try {
            const mentor: Mentor = await this.mentorService.getMentorById(mentorId);

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
            await this.mentorService.deleteMentorById(mentorId);

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

            await this.mentorService.updateMentorById(req.body);

            this.returnSuccessResponse({ res, message: 'Mentor succesfully updated'});

        } catch(error) {
            console.log(error);
            this.returnFailedResponse({ res });
        }
    }
}