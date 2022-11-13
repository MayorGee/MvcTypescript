import WebController from '../WebController.js';;
import { IController } from '../../../abstracts/Contract.js';

import { Request, Response } from 'express';

export default class InternLogoutController extends WebController implements IController {
    protected handleGet(req: Request, res: Response) {
        req.session.destroy();
        res.redirect('/intern-login');
    }
}