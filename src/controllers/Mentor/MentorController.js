import MentorView from '../../views/mentor/MentorView.js';
import MentorResource from '../../models/resource/MentorResource.js';
import AbstractController from '../AbstractController.js';

export default class MentorController extends AbstractController{
    async handleGet(req, res) {
        const mentorId = req.query.id;

        if (!this.isIdNumber(mentorId)) {
            return this.handleIdError(mentorId,res);
        }

        const mentorResource = new MentorResource();
        const mentor = await mentorResource.getMentorById(mentorId);

        const mentorView = new MentorView();
        mentorView
            .setMentor(mentor)
            .setTemplate('./mentor/mentor');

        this.renderPage(res, mentorView);
    }
}
