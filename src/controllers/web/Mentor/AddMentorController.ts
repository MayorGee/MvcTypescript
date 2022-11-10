import WebController from '../WebController.js';
import { IController } from '../../../abstracts/Common.js';

import MentorView from '../../../views/mentor/MentorView.js';
import MentorResource from '../../../models/resource/MentorResource.js';
import { IMentorResource } from '../../../abstracts/entities/Mentor.js';

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
        const mentorResource: IMentorResource = new MentorResource();
        await mentorResource.addMentor(req.body);

        res.redirect('/mentors');
    }
}