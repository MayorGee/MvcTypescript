import WebController from '../WebController.js';

import MentorView from '../../../views/mentor/MentorView.js';
import MentorService from '../../../models/service/MentorService.js'; 
import MentorResource from '../../../models/resource/MentorResource.js'; 

import { IMentorResource, IMentorService } from '../../../abstracts/entities/Mentor.js';

import { NextFunction, Request, Response } from 'express';
import { IController } from '../../../abstracts/Contract.js';
import { Role } from '../../../abstracts/Enum.js';

export default class MentorLoginController extends WebController implements IController {
    protected handleGet(req: Request, res: Response, next: NextFunction) {
        const mentorView = new MentorView();
        mentorView.setTemplate('./mentor/mentor-login');

        this.renderPage(req, res, mentorView);
    }

    protected async handlePost(req: Request, res: Response, next: NextFunction) {
        const { mentorEmail, mentorPassword } = req.body;
        const mentorService: IMentorService = new MentorService();

        const registeredMentor = await mentorService.getMentorByEmail(mentorEmail);
        
        if (!registeredMentor) {
            return this.returnFailedResponse({
                res, 
                errorCode: 400, 
                errorMessage: 'Haha, Get lost Intruder!'
            });
        }

        const mentorResource: IMentorResource = new MentorResource(); 
        const passwordIsCorrect = await mentorResource.isMentorPasswordCorrect(mentorEmail, mentorPassword);
        
        if (!passwordIsCorrect) {
            return this.redirect({ 
                res, 
                page: '/mentor-login', 
                errorCode: 400, 
                errorMessage: 'Incorrect Password' 
            });
        }
        
        req.session.mentorId = registeredMentor.id;
        req.session.role = Role.mentor;

        res.redirect('/mentor-account');
    }
}