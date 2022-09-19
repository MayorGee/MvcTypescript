import UpdateMentorView from '../../views/mentor/UpdateMentorView.js';
import MentorResource from '../../models/resource/MentorResource.js';
import AbstractController from '../AbstractController.js';

export default class UpdateMentorController extends AbstractController {
    constructor() {
        super();

        this.resource = new MentorResource();
    }
    
    async handleGet(req, res) {
        const updateMentorView = new UpdateMentorView();
        const mentorId = req.query.id;

        const idIsValid = await this.validateId(mentorId, res);

        if(!idIsValid) {
            return;
        }

        const mentor =  await this.resource.getMentorById(mentorId);
        
        updateMentorView.setMentor(mentor);

        this.renderPage(res, updateMentorView);
   }

    async handlePost(req, res) {
        await this.resource.updateMentorById(req.body);
        
        res.redirect('/mentors');
    }
}