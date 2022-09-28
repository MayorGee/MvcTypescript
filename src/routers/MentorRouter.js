import AbstractRouter from './AbstractRouter.js';

import MentorController from '../controllers/Mentor/MentorController.js';
import MentorsController from '../controllers/Mentor/MentorsController.js';
import AddMentorController from '../controllers/Mentor/AddMentorController.js';
import UpdateMentorController from '../controllers/Mentor/UpdateMentorController.js';
import DeleteMentorController from '../controllers/Mentor/DeleteMentorController.js';
import MentorLoginController from '../controllers/Mentor/MentorLoginController.js';
import MentorAccountController from '../controllers/Mentor/MentorAccountController.js';
import MentorLogoutController from '../controllers/Mentor/MentorLogoutController.js';
import MentorStudentsController from '../controllers/Mentor/MentorStudentsController.js';

const mentorController = new MentorController();
const mentorsController = new MentorsController();
const addMentorController  = new AddMentorController();
const updateMentorController = new UpdateMentorController();
const deleteMentorController = new DeleteMentorController();
const mentorLoginController = new MentorLoginController();
const mentorAccountController = new MentorAccountController();
const mentorLogoutController = new MentorLogoutController();
const mentorStudentsController =  new MentorStudentsController();


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
                path: '/mentor-login',
                controller: mentorLoginController,
                method: 'GET'
            },
            {
                path: '/mentor-students',
                controller: mentorStudentsController,
                method: 'GET'
            },
            {
                path: '/mentor-login',
                controller: mentorLoginController,
                method: 'POST'
            },
            {
                path: '/mentor-account',
                controller: mentorAccountController,
                method: 'GET'
            },
            {
                path: '/mentor-account',
                controller: mentorAccountController,
                method: 'POST'
            },
            {
                path: '/mentor-logout',
                controller: mentorLogoutController,
                method: 'GET'
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
            },
            {
                path: '/delete-mentor',
                controller: deleteMentorController,
                method: 'GET'
            },
            {
                path: '/delete-mentor',
                controller: deleteMentorController,
                method: 'POST'
            }
        ];

        this.setRouter();
    }
}