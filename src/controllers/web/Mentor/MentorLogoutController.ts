import WebController from '../WebController.js';
import { IController } from '../../../abstracts/Contract.js';

import { NextFunction, Request, Response } from 'express';

export default class MentorLogoutController extends WebController implements IController {
    protected handleGet(req: Request, res: Response, next: NextFunction) {
        req.session.destroy();
        res.redirect('/mentor-login');
    }
}