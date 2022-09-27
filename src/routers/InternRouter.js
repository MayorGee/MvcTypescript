import AbstractRouter from './AbstractRouter.js';

import InternController from '../controllers/Intern/InternController.js';
import InternsController from '../controllers/Intern/InternsController.js';
import MaleInternsController from '../controllers/Intern/MaleInternsController.js';
import FemaleInternsController from '../controllers/Intern/FemaleInternsController.js';
import InternSignUpController from '../controllers/Intern/InternSignUpController.js';
import InternInfoController from '../controllers/Intern/InternInfoController.js';
import DeleteInternController from '../controllers/FormController/DeleteInternController.js';
import InternLoginController from '../controllers/Intern/InternLoginController.js';
import InternLogoutController from '../controllers/Intern/InternLogoutController.js';
import InternProgressController from '../controllers/Intern/InternProgressController.js';
import InternAccountController from '../controllers/Intern/InternAccountController.js';

const internController = new InternController();
const internsController = new InternsController();
const maleInternsController = new MaleInternsController();
const femaleInternsController = new FemaleInternsController();
const internSignUpInternController = new InternSignUpController();
const internInfoController = new InternInfoController();
const deleteInternController = new DeleteInternController();
const internLoginController = new InternLoginController();
const internLogoutController = new InternLogoutController();
const internProgressController = new InternProgressController();
const internAccountController = new InternAccountController();

export default class InternRouter  extends AbstractRouter {
    constructor() {
        super();

        this.routes = [
            {
                path: '/intern',
                controller: internController,
                method: 'GET'
            },
            {
                path: '/interns',
                controller: internsController,
                method: 'GET'
            },
            {
                path: '/male-interns',
                controller: maleInternsController,
                method: 'GET'
            },
            {
                path: '/female-interns',
                controller: femaleInternsController,
                method: 'GET'
            },
            {
                path: '/intern-sign-up',
                controller: internSignUpInternController,
                method: 'POST'
            },
            {
                path: '/intern-sign-up',
                controller: internSignUpInternController,
                method: 'GET'
            },
            {
                path: '/intern-login',
                controller: internLoginController,
                method: 'POST'
            },
            {
                path: '/intern-login',
                controller: internLoginController,
                method: 'GET'
            },
            {
                path: '/intern-account',
                controller: internAccountController,
                method: 'GET'
            },
            {
                path: '/intern-account',
                controller: internAccountController,
                method: 'POST'
            },
            {
                path: '/intern-logout',
                controller: internLogoutController,
                method: 'GET'
            },
            {
                path: '/intern-info',
                controller: internInfoController,
                method: 'GET'
            },
            {
                path: '/intern-info',
                controller: internInfoController,
                method: 'POST'
            },
            {
                path: '/intern-progress',
                controller: internProgressController,
                method: 'GET'
            },
            {
                path: '/delete-intern',
                controller: deleteInternController,
                method: 'GET'
            },
            {
                path: '/delete-intern',
                controller: deleteInternController,
                method: 'POST'
            }
        ];

        this.setRouter();
    }
}