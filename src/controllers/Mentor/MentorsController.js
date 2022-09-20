import MentorResource from '../../models/resource/MentorResource.js';
import MentorsView from '../../views/mentor/MentorsView.js';
import AbstractController from '../AbstractController.js';

export default class MentorsController extends AbstractController {
    async handleGet(req, res) {
        const mentorResource = new MentorResource();
        const mentors = await mentorResource.getMentors();      

        const mentorsView = new MentorsView();
        mentorsView.setMentors(mentors);

        this.renderPage(res, mentorsView);
    }
}