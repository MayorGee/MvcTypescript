import AbstractController from '../AbstractController.js';

import MentorView from '../../views/mentor/MentorView.js';
import MentorResource from '../../models/resource/MentorResource.js'; 

export default class MentorLoginController extends AbstractController {
    async handleGet(req, res) {
        const mentorView = new MentorView();
        mentorView.setTemplate('./mentor/mentor-login');

        this.renderPage(res, mentorView);
    }

    async handlePost(req, res) {
        const { mentorEmail, mentorPassword } = req.body;
        const mentorResource = new MentorResource();

        const registeredMentor = await mentorResource.getMentorByEmail(mentorEmail);
        
        if (!registeredMentor) {
            return this.sendError(res, 400, 'Haha, Get lost Intruder!');
        }

        const passwordIsCorrect = await mentorResource.isMentorPasswordCorrect(mentorEmail, mentorPassword);
        
        if (!passwordIsCorrect) {
            return this.redirect({res: res, page: '/mentor-login', errorCode: 400, errorMessage: 'Incorrect Password' });
        }
        
        req.session.mentorId = registeredMentor.Id;
        req.session.role = 'Mentor';

        res.redirect('/mentor-account');
    }
}