import AbstractController from '../AbstractController.js';

import MentorView from '../../views/mentor/MentorView.js';
import MentorResource from '../../models/resource/MentorResource.js';
import MentorConverter from '../../converters/MentorConverter.js';

import { IController } from '../../abstracts/Common.js';
import { DbMentor } from '../../abstracts/entities/Mentor.js';

export default class DeleteMentorController extends AbstractController implements IController {
    constructor() {
        super();

        this.resource = new MentorResource();
    }

    async handleGet(req: any, res: any, next: any) {
        if(!this.isRoleMentor(req)) {
            return this.redirectToHome(res);
        }

        const mentorId: number = req.query.id;

        if (!this.isNumber(mentorId)) {
            return this.handleIdError(mentorId, res);
        }

        const mentor: DbMentor =  await this.resource.getMentorById(mentorId);
        
        const mentorView = new MentorView();
        mentorView
            .setMentor(
                MentorConverter.convertDbMentor(mentor)
            )         
            .setTemplate('./mentor/delete-mentor');

        this.renderPage(req, res, mentorView);
    }

    async handlePost(req: any, res: any, next: any) {
        await this.resource.deleteMentorById(parseInt(req.body.id));

        res.redirect('/mentors');
    }
}