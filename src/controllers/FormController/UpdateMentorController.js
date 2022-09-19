import MentorView from '../../views/mentor/MentorView.js';
import MentorResource from '../../models/resource/MentorResource.js';
import AbstractController from '../AbstractController.js';

export default class UpdateMentorController extends AbstractController {
    constructor() {
        super();

        this.resource = new MentorResource();
    }
    
    async handleGet(req, res) {
        const mentorView = new MentorView();
        const mentorId = req.query.id;

        if (this.isIdInvalid(mentorId)) {
            return this.handleIdError(mentorId, res);
        }

        const mentor =  await this.resource.getMentorById(mentorId);
        
        mentorView.setMentor(mentor);
        mentorView.setTemplate('./mentor/update-mentor');

        this.renderPage(res, mentorView);
   }

    async handlePost(req, res) {
        await this.resource.updateMentorById(req.body);
        
        res.redirect('/mentors');
    }
}