import AbstractRouter from './AbstractRouter.js';

import PersonalAccountController from '../controllers/PersonalAccountController.js';

const personalAccountController = new PersonalAccountController();

export default class LoginRouter extends AbstractRouter {
    constructor() {
        super();

        this.routes = [
            {
                path: '/personal-account',
                controller: personalAccountController,
                method: 'GET'
            },
            {
                path: '/personal-account',
                controller: personalAccountController,
                method: 'POST'
            }
        ];

        this.setRouter();
    }
}