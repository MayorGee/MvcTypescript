import AbstractRouter from './AbstractRouter.js';

import LoginController from '../controllers/LoginController.js';

const loginController = new LoginController();

export default class LoginRouter extends AbstractRouter {
    constructor() {
        super();

        this.routes = [
            {
                path: '/login',
                controller: loginController,
                method: 'GET'
            },
            {
                path: '/login',
                controller: loginController,
                method: 'POST'
            }
        ];

        this.setRouter();
    }
}