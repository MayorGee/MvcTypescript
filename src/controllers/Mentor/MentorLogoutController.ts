import AbstractController from '../AbstractController.js';

import { IController } from '../../abstracts/Common.js';

export default class MentorLogoutController extends AbstractController implements IController {
    handleGet(req: any, res: any, next: any) {
        req.session.destroy();
        res.redirect('/mentor-login');
    }
}