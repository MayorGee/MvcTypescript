import MentorView from '../../views/mentor/MentorView.js';
import MentorResource from '../../models/resource/MentorResource.js';
import AbstractController from '../AbstractController.js';

export default class AddMentorController extends AbstractController {
    handleGet(req, res) {
        const mentorView = new MentorView();
        mentorView.setTemplate('./mentor/add-mentor');

        this.renderPage(res, mentorView);
   }

    async handlePost(req, res) {
        const mentorResource = new MentorResource();

        await mentorResource.addMentor(req.body);

        res.redirect('/mentors');
    }
}