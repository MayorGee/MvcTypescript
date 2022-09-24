import AbstractController from '../AbstractController.js';

export default class LoginController extends AbstractController {
    async handleGet(req, res) {
        req.session.destroy();
        res.redirect('/login');
    }
}