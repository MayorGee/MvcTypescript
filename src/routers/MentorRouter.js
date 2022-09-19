import AbstractRouter from './AbstractRouter.js';

import MentorController from '../controllers/Mentor/MentorController.js';
import MentorsController from '../controllers/Mentor/MentorsController.js';
import AddMentorController from '../controllers/FormController/AddMentorController.js';
import UpdateMentorController from '../controllers/FormController/UpdateMentorController.js';

const mentorController = new MentorController();
const mentorsController = new MentorsController();
const addMentorController  = new AddMentorController();
const updateMentorController = new UpdateMentorController();

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
                path: '/add-mentor',
                controller: addMentorController,
                method: 'GET'
            },
            {
                path: '/add-mentor',
                controller: addMentorController,
                method: 'POST'
            },
            {
                path: '/update-mentor',
                controller: updateMentorController,
                method: 'GET'
            },
            {
                path: '/update-mentor',
                controller: updateMentorController,
                method: 'POST'
            }
        ];

        this.setRouter();
    }
}