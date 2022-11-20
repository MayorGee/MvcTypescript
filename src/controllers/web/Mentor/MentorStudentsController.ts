import WebController from '../WebController.js';
import { IController } from '../../../abstracts/Contract.js';

import MentorView from '../../../views/mentor/MentorView.js';
import MentorService from '../../../models/service/MentorService.js';
import { IMentorService, Mentor } from '../../../abstracts/entities/Mentor.js';

import { NextFunction, Request, Response } from 'express';

export default class MentorStudentsController extends WebController implements IController {
    protected async handleGet(req: Request, res: Response, next: NextFunction) {
        const mentorLoggedIn: boolean = this.isMentorLoggedIn(req);

        if(!mentorLoggedIn) {
            return this.redirect({ 
                res, 
                page: '/mentor-login', 
                errorMessage: 'You are not logged in as mentor',
                errorCode: 401
            });
        }      

        const mentorId: number  = req.session.mentorId as number;

        const mentorService: IMentorService = new MentorService();
        const mentorInterns = await mentorService.getMentorStudents(mentorId);
        const mentor: Mentor = await mentorService.getMentorById(mentorId);

        const mentorView = new MentorView();
        mentorView
            .setMentor(mentor)
            .setMentorStudents(mentorInterns)
            .setTemplate('./mentor/mentor-students');

        this.renderPage(req, res, mentorView);
   }
}