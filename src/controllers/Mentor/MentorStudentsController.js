import MentorView from '../../views/mentor/MentorView.js';
import MentorResource from '../../models/resource/MentorResource.js';
import AbstractController from '../AbstractController.js';

export default class MentorStudentsController extends AbstractController {
    async handleGet(req, res) {
        const mentorLoggedIn = this.isMentorLoggedIn(req);

        if(!mentorLoggedIn) {
            return this.redirect({ res, page: '/mentor-login', errorMessage: 'You are not logged in (as mentor)' });
        }      

        const mentorId = req.session.mentorId;

        const mentorResource = new MentorResource();
        const mentorStudents = await mentorResource.getMentorStudents(mentorId);

        const mentorView = new MentorView();
        mentorView
            .setMentorStudents(mentorStudents)
            .setTemplate('./mentor/mentor-students');

        this.renderPage(res, mentorView);
   }
}