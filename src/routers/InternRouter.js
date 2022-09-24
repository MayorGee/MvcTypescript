import AbstractRouter from './AbstractRouter.js';

import InternController from '../controllers/Intern/InternController.js';
import InternsController from '../controllers/Intern/InternsController.js';
import MaleInternsController from '../controllers/Intern/MaleInternsController.js';
import FemaleInternsController from '../controllers/Intern/FemaleInternsController.js';
import SignUpInternController from '../controllers/Intern/SignUpInternController.js';
import InfoController from '../controllers/Intern/InfoController.js';
import DeleteInternController from '../controllers/FormController/DeleteInternController.js';
import LoginController from '../controllers/Intern/LoginController.js';
import LogoutController from '../controllers/Intern/LogoutController.js';
import InternProgressController from '../controllers/Intern/Progress.js';

const internController = new InternController();
const internsController = new InternsController();
const maleInternsController = new MaleInternsController();
const femaleInternsController = new FemaleInternsController();
const signUpInternController = new SignUpInternController();
const infoController = new InfoController();
const deleteInternController = new DeleteInternController();
const loginController = new LoginController();
const logoutController = new LogoutController();
const internProgressController = new InternProgressController();

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
                path: '/sign-up-intern',
                controller: signUpInternController,
                method: 'POST'
            },
            {
                path: '/sign-up-intern',
                controller: signUpInternController,
                method: 'GET'
            },
            {
                path: '/login',
                controller: loginController,
                method: 'POST'
            },
            {
                path: '/login',
                controller: loginController,
                method: 'GET'
            },
            {
                path: '/logout',
                controller: logoutController,
                method: 'GET'
            },
            {
                path: '/intern-info',
                controller: infoController,
                method: 'GET'
            },
            {
                path: '/intern-info',
                controller: infoController,
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