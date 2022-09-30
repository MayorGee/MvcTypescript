import MentorView from '../../views/mentor/MentorView.js';
import MentorResource from '../../models/resource/MentorResource.js';
import AbstractController from '../AbstractController.js';

export default class DeleteMentorController extends AbstractController {
    constructor() {
        super();

        this.resource = new MentorResource();
    }

    async handleGet(req, res) {
        if(!this.isRoleMentor(req)) {
            return this.redirectToHome(res);
        }

        const mentorId = req.query.id;

        if (!this.isNumber(mentorId)) {
            return this.handleIdError(mentorId, res);
        }

        const mentor =  await this.resource.getMentorById(mentorId);
        
        const mentorView = new MentorView();
        mentorView
            .setMentor(mentor)         
            .setTemplate('./mentor/delete-mentor');

        this.renderPage(req, res, mentorView);
    }

    async handlePost(req, res) {
        await this.resource.deleteMentorById(parseInt(req.body.id));

        res.redirect('/mentors');
    }
}