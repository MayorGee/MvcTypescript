import AbstractController from '../AbstractController.js';

import MentorView from '../../views/mentor/MentorView.js';
import MentorResource from '../../models/resource/MentorResource.js';

export default class MentorAccountController extends AbstractController {
    async handleGet(req, res) {
        const mentorLoggedIn = this.isMentorLoggedIn(req);

        if(!mentorLoggedIn) {
            return this.redirect({res: res, page: '/mentor-login', errorMessage: 'You are not logged in (as mentor)' });
        }

        const mentorId = req.session.mentorId;
        const mentorResource = new MentorResource();
        const mentor = await mentorResource.getMentorById(mentorId);
        const mentorSpecialty = await mentorResource.getMentorSpecialty(mentorId);

        const mentorView = new MentorView();
        mentorView
            .setTemplate('./mentor/mentor-account')
            .setMentorSpecialty(mentorSpecialty)
            .setMentor(mentor);

        this.renderPage(res, mentorView);
    }
}