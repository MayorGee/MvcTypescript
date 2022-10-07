import AbstractController from '../AbstractController.js';

import MentorView from '../../views/mentor/MentorView.js';
import MentorResource from '../../models/resource/MentorResource.js';

import { IController } from '../../abstracts/Common.js';

export default class AddMentorController extends AbstractController implements IController {
    async handleGet(req: any, res: any, next: any) {
        if(!this.isRoleMentor(req)) {
            return this.redirectToHome(res);
        }

        const mentorView = new MentorView();
        mentorView.setTemplate('./mentor/add-mentor');

        this.renderPage(req, res, mentorView);
   }

    async handlePost(req: any, res: any, next: any) {
        const mentorResource = new MentorResource();
        await mentorResource.addMentor(req.body);

        res.redirect('/mentors');
    }
}