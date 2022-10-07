import AbstractController from '../AbstractController.js';

import { IController } from '../../abstracts/Common.js';

export default class InternLogoutController extends AbstractController implements IController {
    handleGet(req: any, res: any) {
        req.session.destroy();
        res.redirect('/intern-login');
    }
}