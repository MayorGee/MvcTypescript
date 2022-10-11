import AbstractController from '../AbstractController.js';

import MentorView from '../../views/mentor/MentorView.js';
import MentorResource from '../../models/resource/MentorResource.js'; 

import { IController } from '../../abstracts/Common.js';
import { IMentorResource } from '../../abstracts/entities/Mentor.js';

export default class MentorLoginController extends AbstractController implements IController {
    protected handleGet(req: any, res: any, next: any) {
        const mentorView = new MentorView();
        mentorView.setTemplate('./mentor/mentor-login');

        this.renderPage(req, res, mentorView);
    }

    protected async handlePost(req: any, res: any, next: any) {
        const { mentorEmail, mentorPassword } = req.body;
        const mentorResource: IMentorResource = new MentorResource();

        const registeredMentor = await mentorResource.getMentorByEmail(mentorEmail);
        
        if (!registeredMentor) {
            return this.sendError(res, 400, 'Haha, Get lost Intruder!');
        }

        const passwordIsCorrect = await mentorResource.isMentorPasswordCorrect(mentorEmail, mentorPassword);
        
        if (!passwordIsCorrect) {
            return this.redirect({ 
                res, 
                page: '/mentor-login', 
                responseCode: 400, 
                errorMessage: 'Incorrect Password' 
            });
        }
        
        req.session.mentorId = registeredMentor.Id;
        req.session.role = 'Mentor';

        res.redirect('/mentor-account');
    }
}