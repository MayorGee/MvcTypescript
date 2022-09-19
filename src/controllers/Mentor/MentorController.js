import MentorView from '../../views/mentor/MentorView.js';
import MentorResource from '../../models/resource/MentorResource.js';
import AbstractController from '../AbstractController.js';

export default class MentorController extends AbstractController{
    async execute(req, res) {
        const mentorView = new MentorView();
        const mentorResource = new MentorResource();
        const id = req.query.id;

        const idIsValid = this.validateId(id, res);

        if(!idIsValid) {
            return;
        }

        const mentor = await mentorResource.getMentorById(id);

        mentorView.setMentor(mentor);

        this.renderPage(res,mentorView);
    }
}
