import AddMentorView from '../../views/mentor/AddMentorView.js';
import MentorResource from '../../models/resource/MentorResource.js';
import AbstractController from '../AbstractController.js';

export default class AddMentorController extends AbstractController {
    handleGet(req, res) {
        const addMentorView = new AddMentorView();

        this.renderPage(res, addMentorView);
   }

    async handlePost(req, res) {
        const mentorResource = new MentorResource();

        await mentorResource.addMentor(req.body);

        res.redirect('/mentors');
    }
}