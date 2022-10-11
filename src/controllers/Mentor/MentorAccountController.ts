import AbstractController from '../AbstractController.js';

import MentorView from '../../views/mentor/MentorView.js';
import MentorResource from '../../models/resource/MentorResource.js';

import { IController } from '../../abstracts/Common.js';
import { DbMentor, DbMentorSpecialty, IMentorResource } from '../../abstracts/entities/Mentor.js';
import MentorConverter from '../../converters/MentorConverter.js';

export default class MentorAccountController extends AbstractController implements IController {
    protected async handleGet(req: any, res: any, next: any) {
        const mentorLoggedIn: boolean = this.isMentorLoggedIn(req);

        if(!mentorLoggedIn) {
            return this.redirect({ 
                res, 
                page: '/mentor-login', 
                errorMessage: 'You are not logged in (as mentor)' 
            });
        }

        const mentorId: number = req.session.mentorId;
        const mentorResource: IMentorResource = new MentorResource();
        
        const mentor: DbMentor = await mentorResource.getMentorById(mentorId);
        const mentorSpecialty: DbMentorSpecialty = await mentorResource.getMentorSpecialty(mentorId);

        const mentorView = new MentorView();
        mentorView
            .setTemplate('./mentor/mentor-account')
            .setMentorSpecialty(
                MentorConverter.convertDbMentorSpecialty(mentorSpecialty)
            )
            .setMentor(
                MentorConverter.convertDbMentor(mentor)
            );

        this.renderPage(req, res, mentorView);
    }
}