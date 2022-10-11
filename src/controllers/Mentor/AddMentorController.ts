import AbstractController from '../AbstractController.js';

import MentorView from '../../views/mentor/MentorView.js';
import MentorResource from '../../models/resource/MentorResource.js';

import { IController } from '../../abstracts/Common.js';
import { IMentorResource } from '../../abstracts/entities/Mentor.js';

export default class AddMentorController extends AbstractController implements IController {
    protected handleGet(req: any, res: any, next: any) {
        if(!this.isRoleMentor(req)) {
            return this.redirectToHome(res);
        }

        const mentorView = new MentorView();
        mentorView.setTemplate('./mentor/add-mentor');

        this.renderPage(req, res, mentorView);
   }

   protected handlePost(req: any, res: any, next: any) {
        const mentorResource: IMentorResource = new MentorResource();
        mentorResource.addMentor(req.body);

        res.redirect('/mentors');
    }
}