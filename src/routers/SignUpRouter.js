import AbstractRouter from './AbstractRouter.js';

import SignUpController from '../controllers/SignUpController.js';

const signUpController = new SignUpController();

export default class SignUpRouter extends AbstractRouter {
    constructor() {
        super();

        this.routes = [
            {
                path: '/sign-up',
                controller: signUpController,
                method: 'GET'
            },
            {
                path: '/sign-up',
                controller: signUpController,
                method: 'POST'
            }
        ];

        this.setRouter();
    }
}