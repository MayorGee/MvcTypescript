import MentorResource from '../../models/resource/MentorResource.js';
import MentorsView from '../../views/mentor/MentorsView.js';
import AbstractController from '../AbstractController.js';

export default class MentorsController extends AbstractController {
    async handleGet(req, res) {
        if(!this.isRoleMentor(req)) {
            return this.redirectToHome(res);
        }
        
        const mentorResource = new MentorResource();
        const mentors = await mentorResource.getMentors();      

        const mentorsView = new MentorsView();
        mentorsView
            .setMentors(mentors)
            .setTemplate('./mentor/mentors');

        this.renderPage(res, mentorsView);
    }
}