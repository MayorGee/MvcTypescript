import AbstractRouter from '../AbstractRouter.js';

import InternController from '../../controllers/web/Intern/InternController.js';
import InternsController from '../../controllers/web/Intern/InternsController.js';
import MaleInternsController from '../../controllers/web/Intern/MaleInternsController.js';
import FemaleInternsController from '../../controllers/web/Intern/FemaleInternsController.js';
import InternSignUpController from '../../controllers/web/Intern/InternSignUpController.js';
import InternInfoController from '../../controllers/web/Intern/InternInfoController.js';
import DeleteInternController from '../../controllers/web/Intern/DeleteInternController.js';
import InternLoginController from '../../controllers/web/Intern/InternLoginController.js';
import InternLogoutController from '../../controllers/web/Intern/InternLogoutController.js';
import InternProgressController from '../../controllers/web/Intern/InternProgressController.js';
import InternAccountController from '../../controllers/web/Intern/InternAccountController.js';
import UpdateInternController from '../../controllers/web/Intern/UpdateInternController.js';
import { IRouter } from '../../abstracts/Contract.js';
import { RequestMethod } from '../../abstracts/Enum.js';



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
const updateInternController = new UpdateInternController();

export default class InternRouter  extends AbstractRouter implements IRouter {
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
                route: '/update-intern',
                controller: updateInternController,
                requestMethod: RequestMethod.get
            },
            {
                route: '/update-intern',
                controller: updateInternController,
                requestMethod: RequestMethod.post
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