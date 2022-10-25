import WebController from '../WebController.js';

import MentorResource from '../../../models/resource/MentorResource.js';
import MentorsView from '../../../views/mentor/MentorsView.js';
import MentorConverter from '../../../converters/MentorConverter.js';

import { IController } from '../../../abstracts/Common.js';
import { DbMentor, IMentorResource } from '../../../abstracts/entities/Mentor.js';
import { NextFunction, Request, Response } from 'express';

export default class MentorsController extends WebController implements IController {
    protected async handleGet(req: Request, res: Response, next: NextFunction) {
        if(!this.isRoleMentor(req)) {
            return this.redirectToHome(res);
        }
        
        const mentorResource: IMentorResource = new MentorResource();
        const mentors: DbMentor[] = await mentorResource.getMentors();      

        const mentorsView = new MentorsView();
        mentorsView
            .setMentors(
                MentorConverter.convertDbMentors(mentors)
            )
            .setTemplate('./mentor/mentors');

        this.renderPage(req, res, mentorsView);
    }
}