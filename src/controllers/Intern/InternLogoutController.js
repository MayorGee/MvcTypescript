import AbstractController from '../AbstractController.js';

export default class InternLogoutController extends AbstractController {
    async handleGet(req, res) {
        req.session.destroy();
        res.redirect('/intern-login');
    }
}