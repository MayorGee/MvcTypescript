import AbstractController from '../AbstractController.js';

export default class MentorLogoutController extends AbstractController {
    async handleGet(req, res) {
        req.session.destroy();
        res.redirect('/mentor-login');
    }
}