import WebController from '../WebController.js';
import { IController } from '../../../abstracts/Contract.js';

import MentorView from '../../../views/mentor/MentorView.js';
import MentorService from '../../../models/service/MentorService.js';
import { IMentorService } from '../../../abstracts/entities/Mentor.js';

import { NextFunction, Request, Response } from 'express';

export default class AddMentorController extends WebController implements IController {
    protected handleGet(req: Request, res: Response, next: NextFunction) {
        if(!this.isRoleMentor(req)) {
            return this.redirectToHome(res);
        }

        const mentorView = new MentorView();
        mentorView.setTemplate('./mentor/add-mentor');

        this.renderPage(req, res, mentorView);
    }

   protected async handlePost(req: Request, res: Response, next: NextFunction) {
        const mentorService: IMentorService = new MentorService();
        await mentorService.addMentor(req.body);

        res.redirect('/mentors');
    }
}