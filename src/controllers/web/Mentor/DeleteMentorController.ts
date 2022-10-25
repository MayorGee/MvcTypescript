import WebController from '../WebController.js';

import MentorView from '../../../views/mentor/MentorView.js';
import MentorResource from '../../../models/resource/MentorResource.js';
import MentorConverter from '../../../converters/MentorConverter.js';

import { IController } from '../../../abstracts/Common.js';
import { DbMentor, IMentorResource } from '../../../abstracts/entities/Mentor.js';
import { NextFunction, Request, Response } from 'express';

export default class DeleteMentorController extends WebController implements IController {
    private resource: IMentorResource = new MentorResource();

    protected async handleGet(req: Request, res: Response, next: NextFunction) {
        if(!this.isRoleMentor(req)) {
            return this.redirectToHome(res);
        }

        const mentorId = req.query.id;

        if (!this.isNumber(mentorId)) {
            return this.handleIdError(mentorId, res);
        }

        const mentor: DbMentor =  await this.resource.getMentorById(mentorId);
        
        const mentorView = new MentorView();
        mentorView
            .setMentor(
                MentorConverter.convertDbMentor(mentor)
            )         
            .setTemplate('./mentor/delete-mentor');

        this.renderPage(req, res, mentorView);
    }

    protected async handlePost(req: Request, res: Response, next: NextFunction) {
        await this.resource.deleteMentorById(parseInt(req.body.id));

        res.redirect('/mentors');
    }
}