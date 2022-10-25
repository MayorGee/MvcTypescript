import WebController from '../WebController.js';;

import MentorView from '../../../views/mentor/MentorView.js';
import MentorResource from '../../../models/resource/MentorResource.js';

import { IController } from '../../../abstracts/Common.js';
import { DbMentor, DbMentorSpecialty, IMentorResource } from '../../../abstracts/entities/Mentor.js';
import MentorConverter from '../../../converters/MentorConverter.js';
import { NextFunction, Request, Response } from 'express';

export default class MentorAccountController extends WebController implements IController {
    protected async handleGet(req: Request, res: Response, next: NextFunction) {
        const mentorLoggedIn: boolean = this.isMentorLoggedIn(req);

        if(!mentorLoggedIn) {
            return this.redirect({ 
                res, 
                page: '/mentor-login', 
                errorMessage: 'You are not logged in (as mentor)' 
            });
        }

        const mentorId: number  = req.session.mentorId as number;

        const mentorResource: IMentorResource = new MentorResource();
        
        const dbMentor: DbMentor = await mentorResource.getMentorById(mentorId);
        const dbMentorSpecialty: DbMentorSpecialty = await mentorResource.getMentorSpecialty(mentorId);

        const mentorView = new MentorView();
        mentorView
            .setTemplate('./mentor/mentor-account')
            .setMentorSpecialty(
                MentorConverter.convertDbMentorSpecialty(dbMentorSpecialty)
            )
            .setMentor(
                MentorConverter.convertDbMentor(dbMentor)
            );

        this.renderPage(req, res, mentorView);
    }
}