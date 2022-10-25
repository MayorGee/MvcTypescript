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
            return this.sendClientError({ res });
        } 

        const DbMentor: DbMentor = await this.resource.getMentorById(mentorId);

        if (!DbMentor) {
            return res.json({
                errorCode: 404,
                message: 'Mentor Not Found'
            })
        }

        const intern = MentorConverter.convertDbMentor(DbMentor);

        res.json({
            data: intern
        })
    }

    protected async handleDelete(req: Request, res: Response, next: NextFunction) {
        const mentorId = this.handleId(req.params.id);

        if (!mentorId) {
            return this.sendClientError({ res });
        } 
        
        try {
            await this.resource.deleteMentorById(mentorId);
            res.status(200).send('Mentor succesfully deleted');
        } catch(error) {
            console.log(error);
            this.sendServerError({ res });
        }
    }

    protected async handlePut(req: Request, res: Response, next: NextFunction) {
        const mentorId = this.handleId(req.params.id);

        if (!mentorId) {
            return this.sendClientError({ res });
        } 
        
        try {
            const mentorToUpdate = req.body;
            mentorToUpdate.id = mentorId;

            await this.resource.updateMentorById(mentorToUpdate);
            res.status(200).send('Mentor succesfully updated');
        } catch(error) {
            console.log(error);
            this.sendServerError({ res });
        }
    }
}