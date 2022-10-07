import AbstractController from '../AbstractController.js';

import MentorView from '../../views/mentor/MentorView.js';
import MentorResource from '../../models/resource/MentorResource.js';

import { IController } from '../../abstracts/Common.js';

export default class MentorStudentsController extends AbstractController implements IController {
    async handleGet(req: any, res: any, next: any) {
        const mentorLoggedIn: boolean = this.isMentorLoggedIn(req);

        if(!mentorLoggedIn) {
            return this.redirect({ 
                res, 
                page: '/mentor-login', 
                errorMessage: 'You are not logged in (as mentor)' 
            });
        }      

        const mentorId: number = req.session.mentorId;

        const mentorResource = new MentorResource();
        const mentorInterns = await mentorResource.getMentorInterns(mentorId);

        const mentorView = new MentorView();
        mentorView
            .setMentorInterns(mentorInterns)
            .setTemplate('./mentor/mentor-students');

        this.renderPage(req, res, mentorView);
   }
}