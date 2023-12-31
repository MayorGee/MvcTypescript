import WebController from '../WebController.js';
import { IController } from '../../../abstracts/Contract.js';

import MentorView from '../../../views/mentor/MentorView.js';
import MentorService from '../../../models/service/MentorService.js';
import { Mentor, IMentorService } from '../../../abstracts/entities/Mentor.js';

import { NextFunction, Request, Response } from 'express';

export default class UpdateMentorController extends WebController implements IController {
    private mentorService : IMentorService;

    constructor() {
        super();

        this.mentorService = new MentorService();
    }

    protected async handleGet(req: Request, res: Response, next: NextFunction) {
        if(!this.isRoleMentor(req)) {
            return this.redirectToHome(res);
        }
        
        const mentorId = this.validateId(req.query.id);
 
        if (!mentorId) {
            return this.handleIdError(mentorId, res);
        }

        const mentor: Mentor =  await this.mentorService.getMentorById(mentorId);
        
        const mentorView = new MentorView();
        mentorView
            .setMentor(mentor)
            .setTemplate('./mentor/update-mentor');

        this.renderPage(req, res, mentorView);
    }
    
    protected async handlePost(req: Request, res: Response, next: NextFunction) {
        await this.mentorService.updateMentorById(req.body);
        
        res.redirect('/mentors');
    }
}