import AbstractRouter from './AbstractRouter.js';

import MentorController from '../controllers/Mentor/MentorController.js';
import MentorsController from '../controllers/Mentor/MentorsController.js';
import MentorsFormController from '../controllers/FormController/MentorsFormController.js';

const mentorController = new MentorController();
const mentorsController = new MentorsController();
const mentorsFormController  = new MentorsFormController

export default class MentorRouter extends AbstractRouter {
    constructor() {
        super();

        this.routes = [
            {
                path: '/mentor',
                controller: mentorController,
                method: 'GET'
            },
            {
                path: '/mentors',
                controller: mentorsController,
                method: 'GET'
            },
            {
                path: '/mentors-form',
                controller: mentorsFormController,
                method: 'GET'
            },
            {
                path: '/mentors-form',
                controller: mentorsFormController,
                method: 'POST'
            }
        ];

        this.setRouter();
    }
}