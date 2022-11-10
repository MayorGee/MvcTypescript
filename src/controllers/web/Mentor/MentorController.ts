import WebController from '../WebController.js';
import { IController } from '../../../abstracts/Common.js';

import MentorView from '../../../views/mentor/MentorView.js';
import MentorResource from '../../../models/resource/MentorResource.js';
import MentorConverter from '../../../converters/MentorConverter.js';
import { DbMentor, IMentorResource } from '../../../abstracts/entities/Mentor.js';

import { NextFunction, Request, Response } from 'express';

export default class MentorController extends WebController implements IController {
    protected async handleGet(req: Request, res: Response, next: NextFunction) {
        if(!this.isRoleMentor(req)) {
            return this.redirectToHome(res);
        }

        const mentorId = req.query.id;

        if (!this.isNumber(mentorId)) {
            return this.handleIdError(mentorId, res);
        }

        const mentorResource: IMentorResource = new MentorResource();
        const mentor: DbMentor = await mentorResource.getMentorById(mentorId);

        const mentorView = new MentorView();
        mentorView
            .setMentor(
                MentorConverter.convertDbMentor(mentor)
            )
            .setTemplate('./mentor/mentor');

        this.renderPage(req, res, mentorView);
    }
}
