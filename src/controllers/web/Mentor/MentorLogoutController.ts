import WebController from '../WebController.js';
import { IController } from '../../../abstracts/Contract.js';

import { NextFunction, Request, Response } from 'express';

export default class MentorLogoutController extends WebController implements IController {
    protected handleGet(req: Request, res: Response, next: NextFunction) {
        req.session.destroy((err: any) => {
            if (err) {
               console.error(err.message);
            } else {
                res.redirect('/mentor-login');
            }
        });
    }
}