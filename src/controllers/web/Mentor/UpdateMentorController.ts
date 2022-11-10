import WebController from '../WebController.js';
import { IController } from '../../../abstracts/Common.js';

import MentorView from '../../../views/mentor/MentorView.js';
import MentorResource from '../../../models/resource/MentorResource.js';
import MentorConverter from '../../../converters/MentorConverter.js';
import { DbMentor, IMentorResource } from '../../../abstracts/entities/Mentor.js';

import { NextFunction, Request, Response } from 'express';

export default class UpdateMentorController extends WebController implements IController {
    private mentorResource : IMentorResource;

    constructor() {
        super();

        this.mentorResource = new MentorResource();
    }

    protected async handleGet(req: Request, res: Response, next: NextFunction) {
        if(!this.isRoleMentor(req)) {
            return this.redirectToHome(res);
        }
        
        const mentorId = req.query.id;

        if (!this.isNumber(mentorId)) {
            return this.handleIdError(mentorId, res);
        }

        const mentor: DbMentor =  await this.mentorResource.getMentorById(mentorId);
        
        const mentorView = new MentorView();
        mentorView
            .setMentor(
                MentorConverter.convertDbMentor(mentor)
            )
            .setTemplate('./mentor/update-mentor');

        this.renderPage(req, res, mentorView);
    }

    protected async handlePost(req: Request, res: Response, next: NextFunction) {
        await this.mentorResource.updateMentorById(req.body);
        
        res.redirect('/mentors');
    }
}