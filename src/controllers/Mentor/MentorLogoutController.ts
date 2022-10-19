import AbstractController from '../AbstractController.js';

import { IController } from '../../abstracts/Common.js';
import { NextFunction, Request, Response } from 'express';

export default class MentorLogoutController extends AbstractController implements IController {
    protected handleGet(req: Request, res: Response, next: NextFunction) {
        req.session.destroy();
        res.redirect('/mentor-login');
    }
}