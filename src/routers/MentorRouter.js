import AbstractRouter from './AbstractRouter.js';

import MentorController from '../controllers/MentorController.js';
import MentorsController from '../controllers/MentorsController.js';

const mentorController = new MentorController();
const mentorsController = new MentorsController();

export default class MentorRouter extends AbstractRouter {
    constructor() {
        super();

        this.routes = [
            {
                path: '/mentor',
                controller: mentorController
            },
            {
                path: '/mentors',
                controller: mentorsController
            }
        ];

        this.setRouter();
    }
}