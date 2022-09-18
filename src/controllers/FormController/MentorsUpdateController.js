import MentorUpdateView from '../../views/mentor/MentorUpdateView.js';
import MentorResource from '../../models/resource/MentorResource.js';
import AbstractController from '../AbstractController.js';

export default class MentorsUpdateController  extends AbstractController {
    constructor() {
        super();

        this.resource = new MentorResource();
        this.id = null;
    }
    
    async handleGet(req, res) {
        const mentorUpdateView = new MentorUpdateView();
        this.id = req.query.id;

        const mentorResponse =  await this.resource.getMentorById(this.id);
        const mentor = mentorResponse[0];

        mentorUpdateView.setMentor(mentor);

        res.render(mentorUpdateView.getTemplate(), { 'this': mentorUpdateView });
   }

    async handlePost(req, res) {
        const mentor = {"id" : this.id, ...req.body};
        
        await this.resource.updateMentorById(mentor);

        res.redirect('/mentors');
    }
}