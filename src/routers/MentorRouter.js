import AbstractRouter from './AbstractRouter.js';

import MentorController from '../controllers/Mentor/MentorController.js';
import MentorsController from '../controllers/Mentor/MentorsController.js';
import MentorInsertController from '../controllers/FormController/MentorInsertController.js';
import MentorsUpdateController from '../controllers/FormController/MentorsUpdateController.js';

const mentorController = new MentorController();
const mentorsController = new MentorsController();
const mentorInsertController  = new MentorInsertController();
const mentorsUpdateController = new MentorsUpdateController();

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
                path: '/mentor-insert',
                controller: mentorInsertController,
                method: 'GET'
            },
            {
                path: '/mentor-insert',
                controller: mentorInsertController,
                method: 'POST'
            },
            {
                path: '/mentor-update',
                controller: mentorsUpdateController,
                method: 'GET'
            },
            {
                path: '/mentor-update',
                controller: mentorsUpdateController,
                method: 'POST'
            }
        ];

        this.setRouter();
    }
}