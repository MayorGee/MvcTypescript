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
            return this.sendClientError({ 
                res,
                errorCode: 404,
                errorMessage: 'Mentor Not Found'
         });
        } 

        const DbMentor: DbMentor = await this.resource.getMentorById(mentorId);

        if (!DbMentor) {
            return this.sendServerError({ 
                res, 
                errorCode: 404, 
                errorMessage: 'Mentor Not Found'
            });
        }

        const intern = MentorConverter.convertDbMentor(DbMentor);

        this.returnSuccessResponse({ res, data: intern });
    }

    protected async handleDelete(req: Request, res: Response, next: NextFunction) {
        const mentorId = this.handleId(req.params.id);

        if (!mentorId) {
            return this.sendClientError({ 
                res,
                errorCode: 404,
                errorMessage: 'Mentor Not Found'
             });
        } 
        
        try {
            await this.resource.deleteMentorById(mentorId);

            this.returnSuccessResponse({ res, message: 'Mentor succesfully deleted'});

        } catch(error) {
            console.log(error);
            this.sendServerError({ 
                res, 
                errorCode: 500
             });
        }
    }

    protected async handlePut(req: Request, res: Response, next: NextFunction) {
        const mentorId = this.handleId(req.params.id);

        if (!mentorId) {
            return this.sendClientError({ 
                res,
                errorCode: 404,
                errorMessage: 'Mentor Not Found'
             });
        } 
        
        try {
            req.body.id = mentorId;

            await this.resource.updateMentorById(req.body);

            this.returnSuccessResponse({ res, message: 'Mentor succesfully updated'});

        } catch(error) {
            console.log(error);
            this.sendServerError({ 
                res, 
                errorCode: 500, 
             });
        }
    }
}