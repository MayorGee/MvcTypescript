import AbstractController from '../AbstractController.js';

import MentorView from '../../views/mentor/MentorView.js';
import MentorResource from '../../models/resource/MentorResource.js';
import MentorConverter from '../../converters/MentorConverter.js';

import { IController } from '../../abstracts/Common.js';
import { DbMentor, IMentorResource } from '../../abstracts/entities/Mentor.js';

export default class UpdateMentorController extends AbstractController implements IController {
    private resource : IMentorResource = new MentorResource();
    protected async handleGet(req: any, res: any, next: any) {
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
            .setTemplate('./mentor/update-mentor');

        this.renderPage(req, res, mentorView);
    }

    protected handlePost(req: any, res: any, next: any) {
        this.resource.updateMentorById(req.body);
        
        res.redirect('/mentors');
    }
}