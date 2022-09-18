import MentorInsertView from '../../views/mentor/MentorInsertView.js';
import MentorResource from '../../models/resource/MentorResource.js';
import AbstractController from '../AbstractController.js';

export default class MentorInsertController  extends AbstractController {
    handleGet(res) {
        const mentorInsertView = new MentorInsertView();

        res.render(mentorInsertView.getTemplate(), { 'this': mentorInsertView });
   }

    async handlePost(req, res) {
        const mentorResource = new MentorResource();

        await mentorResource.insertMentors(req);

        res.redirect('/mentors');
    }
}