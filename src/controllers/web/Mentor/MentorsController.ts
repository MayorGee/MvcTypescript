import WebController from '../WebController.js';
import { IController } from '../../../abstracts/Contract.js';

import MentorService from '../../../models/service/MentorService.js';
import MentorsView from '../../../views/mentor/MentorsView.js';
import { Mentor, IMentorService } from '../../../abstracts/entities/Mentor.js';

import { NextFunction, Request, Response } from 'express';

export default class MentorsController extends WebController implements IController {
    protected async handleGet(req: Request, res: Response, next: NextFunction) {
        if(!this.isRoleMentor(req)) {
            return this.redirectToHome(res);
        }
        
        const mentorService: IMentorService = new MentorService();
        const mentors: Mentor[] = await mentorService.getMentors();      

        const mentorsView = new MentorsView();
        mentorsView
            .setMentors(mentors)
            .setTemplate('./mentor/mentors');

        this.renderPage(req, res, mentorsView);
    }
}