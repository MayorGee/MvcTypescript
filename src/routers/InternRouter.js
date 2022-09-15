import AbstractRouter from './AbstractRouter.js';

import InternController from '../controllers/Intern/InternController.js';
import InternsController from '../controllers/Intern/InternsController.js';
import MaleInternsController from '../controllers/Intern/MaleInterns.js';
import FemaleInternsController from '../controllers/Intern/FemaleInterns.js';
import InternsFormController from '../controllers/FormController/InternsFormController.js';

const internController = new InternController();
const internsController = new InternsController();
const maleInternsController = new MaleInternsController();
const femaleInternsController = new FemaleInternsController();
const internsFormController = new InternsFormController();

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
                path: '/interns-form',
                controller: internsFormController,
                method: 'POST'
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
                path: '/interns-form',
                controller: internsFormController,
                method: 'GET'
            }
        ];

        this.setRouter();
    }
}