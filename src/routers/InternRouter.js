import AbstractRouter from './AbstractRouter.js';

import InternController from '../controllers/Intern/InternController.js';
import InternsController from '../controllers/Intern/InternsController.js';
import MaleInternsController from '../controllers/Intern/MaleInternsController.js';
import FemaleInternsController from '../controllers/Intern/FemaleInternsController.js';
import InternInsertController from '../controllers/FormController/InternInsertController.js';
import InternsUpdateController from '../controllers/FormController/InternsUpdateController.js';

const internController = new InternController();
const internsController = new InternsController();
const maleInternsController = new MaleInternsController();
const femaleInternsController = new FemaleInternsController();
const internInsertController = new InternInsertController();
const internsUpdateController = new  InternsUpdateController();

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
                path: '/intern-insert',
                controller: internInsertController,
                method: 'POST'
            },
            {
                path: '/intern-insert',
                controller: internInsertController,
                method: 'GET'
            },
            {
                path: '/intern-update',
                controller: internsUpdateController,
                method: 'GET'
            },
            {
                path: '/intern-update',
                controller: internsUpdateController,
                method: 'POST'
            }
        ];

        this.setRouter();
    }
}