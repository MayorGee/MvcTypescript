import WebController from '../WebController.js';
import { IController } from '../../../abstracts/Contract.js';

import MentorView from '../../../views/mentor/MentorView.js';
import MentorService from '../../../models/service/MentorService.js';
import { Mentor, IMentorService } from '../../../abstracts/entities/Mentor.js';

import { NextFunction, Request, Response } from 'express';

export default class MentorController extends WebController implements IController {
    protected async handleGet(req: Request, res: Response, next: NextFunction) {
        if(!this.isRoleMentor(req)) {
            return this.redirectToHome(res);
        }

        const mentorId = this.validateId(req.query.id);
 
        if (!mentorId) {
            return this.handleIdError(mentorId, res);
        }

        const mentorService: IMentorService = new MentorService();
        const mentor: Mentor = await mentorService.getMentorById(mentorId);

        const mentorView = new MentorView();
        mentorView
            .setMentor(mentor)
            .setTemplate('./mentor/mentor');

        this.renderPage(req, res, mentorView);
    }
}
