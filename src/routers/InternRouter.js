import AbstractRouter from './AbstractRouter.js';

import InternController from '../controllers/Intern/InternController.js';
import InternsController from '../controllers/Intern/InternsController.js';
import MaleInternsController from '../controllers/Intern/MaleInternsController.js';
import FemaleInternsController from '../controllers/Intern/FemaleInternsController.js';
import AddInternController from '../controllers/FormController/AddInternController.js';
import UpdateInternController from '../controllers/FormController/UpdateInternController.js';

const internController = new InternController();
const internsController = new InternsController();
const maleInternsController = new MaleInternsController();
const femaleInternsController = new FemaleInternsController();
const addInternController = new AddInternController();
const updateInternController = new UpdateInternController();

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
                path: '/add-intern',
                controller: addInternController,
                method: 'POST'
            },
            {
                path: '/add-intern',
                controller: addInternController,
                method: 'GET'
            },
            {
                path: '/update-intern',
                controller: updateInternController,
                method: 'GET'
            },
            {
                path: '/update-intern',
                controller: updateInternController,
                method: 'POST'
            }
        ];

        this.setRouter();
    }
}