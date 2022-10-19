import AbstractController from '../AbstractController.js';

import { IController } from '../../abstracts/Common.js';
import { Request, Response } from 'express';

export default class InternLogoutController extends AbstractController implements IController {
    protected handleGet(req: Request, res: Response) {
        req.session.destroy();
        res.redirect('/intern-login');
    }
}