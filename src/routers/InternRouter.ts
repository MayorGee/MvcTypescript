import AbstractRouter from './AbstractRouter.js';

import InternController from '../controllers/Intern/InternController.js';
import InternsController from '../controllers/Intern/InternsController.js';
import MaleInternsController from '../controllers/Intern/MaleInternsController.js';
import FemaleInternsController from '../controllers/Intern/FemaleInternsController.js';
import InternSignUpController from '../controllers/Intern/InternSignUpController.js';
import InternInfoController from '../controllers/Intern/InternInfoController.js';
import DeleteInternController from '../controllers/Intern/DeleteInternController.js';
import InternLoginController from '../controllers/Intern/InternLoginController.js';
import InternLogoutController from '../controllers/Intern/InternLogoutController.js';
import InternProgressController from '../controllers/Intern/InternProgressController.js';
import InternAccountController from '../controllers/Intern/InternAccountController.js';

import { RequestMethod } from '../abstracts/Common.js';

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
                route: '/intern',
                controller: internController,
                requestMethod: RequestMethod.get
            },
            {
                route: '/interns',
                controller: internsController,
                requestMethod: RequestMethod.get
            },
            {
                route: '/male-interns',
                controller: maleInternsController,
                requestMethod: RequestMethod.get
            },
            {
                route: '/female-interns',
                controller: femaleInternsController,
                requestMethod: RequestMethod.get
            },
            {
                route: '/intern-sign-up',
                controller: internSignUpInternController,
                requestMethod: RequestMethod.post
            },
            {
                route: '/intern-sign-up',
                controller: internSignUpInternController,
                requestMethod: RequestMethod.get
            },
            {
                route: '/intern-login',
                controller: internLoginController,
                requestMethod: RequestMethod.post
            },
            {
                route: '/intern-login',
                controller: internLoginController,
                requestMethod: RequestMethod.get
            },
            {
                route: '/intern-account',
                controller: internAccountController,
                requestMethod: RequestMethod.get
            },
            {
                route: '/intern-account',
                controller: internAccountController,
                requestMethod: RequestMethod.post
            },
            {
                route: '/intern-logout',
                controller: internLogoutController,
                requestMethod: RequestMethod.get
            },
            {
                route: '/intern-info',
                controller: internInfoController,
                requestMethod: RequestMethod.get
            },
            {
                route: '/intern-info',
                controller: internInfoController,
                requestMethod: RequestMethod.post
            },
            {
                route: '/intern-progress',
                controller: internProgressController,
                requestMethod: RequestMethod.get
            },
            {
                route: '/delete-intern',
                controller: deleteInternController,
                requestMethod: RequestMethod.get
            },
            {
                route: '/delete-intern',
                controller: deleteInternController,
                requestMethod: RequestMethod.get
            }
        ];

        this.setRouter();
    }
}