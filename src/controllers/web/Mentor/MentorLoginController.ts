import WebController from '../WebController.js';

import MentorView from '../../../views/mentor/MentorView.js';
import MentorResource from '../../../models/resource/MentorResource.js'; 

import { IController, Role } from '../../../abstracts/Common.js';
import { IMentorResource } from '../../../abstracts/entities/Mentor.js';
import { NextFunction, Request, Response } from 'express';

export default class MentorLoginController extends WebController implements IController {
    protected handleGet(req: Request, res: Response, next: NextFunction) {
        const mentorView = new MentorView();
        mentorView.setTemplate('./mentor/mentor-login');

        this.renderPage(req, res, mentorView);
    }

    protected async handlePost(req: Request, res: Response, next: NextFunction) {
        const { mentorEmail, mentorPassword } = req.body;
        const mentorResource: IMentorResource = new MentorResource();

        const registeredMentor = await mentorResource.getMentorByEmail(mentorEmail);
        
        if (!registeredMentor) {
            return this.returnFailedResponse({
                res, 
                errorCode: 400, 
                errorMessage: 'Haha, Get lost Intruder!'
            });
        }

        const passwordIsCorrect = await mentorResource.isMentorPasswordCorrect(mentorEmail, mentorPassword);
        
        if (!passwordIsCorrect) {
            return this.redirect({ 
                res, 
                page: '/mentor-login', 
                errorCode: 400, 
                errorMessage: 'Incorrect Password' 
            });
        }
        
        req.session.mentorId = registeredMentor.Id;
        req.session.role = Role.mentor;

        res.redirect('/mentor-account');
    }
}