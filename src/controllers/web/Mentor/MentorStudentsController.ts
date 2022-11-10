import WebController from '../WebController.js';
import { IController } from '../../../abstracts/Common.js';

import MentorView from '../../../views/mentor/MentorView.js';
import MentorResource from '../../../models/resource/MentorResource.js';
import { IMentorResource } from '../../../abstracts/entities/Mentor.js';

import InternConverter from '../../../converters/InternConverter.js';

import { NextFunction, Request, Response } from 'express';

export default class MentorStudentsController extends WebController implements IController {
    protected async handleGet(req: Request, res: Response, next: NextFunction) {
        const mentorLoggedIn: boolean = this.isMentorLoggedIn(req);

        if(!mentorLoggedIn) {
            return this.redirect({ 
                res, 
                page: '/mentor-login', 
                errorMessage: 'You are not logged in (as mentor)',
                errorCode: 401
            });
        }      

        const mentorId: number  = req.session.mentorId as number;

        const mentorResource: IMentorResource = new MentorResource();
        const mentorInterns = await mentorResource.getMentorStudents(mentorId);

        const mentorView = new MentorView();
        mentorView
            .setMentorStudents(
                InternConverter.convertDbInterns(mentorInterns)
            )
            .setTemplate('./mentor/mentor-students');

        this.renderPage(req, res, mentorView);
   }
}