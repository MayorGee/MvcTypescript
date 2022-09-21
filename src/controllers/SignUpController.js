import AbstractController from './AbstractController.js';

import SignUpView from '../views/SignUpView.js';

export default class SignUpController extends AbstractController {
    async handleGet(req, res) {
        const signUpView = new SignUpView();

        signUpView.setTemplate('sign-up');
        this.renderPage(res, signUpView);
    }

    async handlePost(req, res) {

    }
}