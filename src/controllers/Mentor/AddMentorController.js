import MentorView from '../../views/mentor/MentorView.js';
import MentorResource from '../../models/resource/MentorResource.js';
import AbstractController from '../AbstractController.js';

export default class AddMentorController extends AbstractController {
    async handleGet(req, res) {
        if(!this.isRoleMentor(req)) {
            return this.redirectToHome(res);
        }

        const mentorView = new MentorView();
        mentorView.setTemplate('./mentor/add-mentor');

        this.renderPage(req, res, mentorView);
   }

    async handlePost(req, res) {
        const mentorResource = new MentorResource();
        await mentorResource.addMentor(req.body);

        res.redirect('/mentors');
    }
}