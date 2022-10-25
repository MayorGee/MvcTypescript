import AbstractRouter from '../AbstractRouter.js';

import MentorController from '../../controllers/web/Mentor/MentorController.js';
import MentorsController from '../../controllers/web/Mentor/MentorsController.js';
import AddMentorController from '../../controllers/web/Mentor/AddMentorController.js';
import UpdateMentorController from '../../controllers/web/Mentor/UpdateMentorController.js';
import DeleteMentorController from '../../controllers/web/Mentor/DeleteMentorController.js';
import MentorLoginController from '../../controllers/web/Mentor/MentorLoginController.js';
import MentorAccountController from '../../controllers/web/Mentor/MentorAccountController.js';
import MentorLogoutController from '../../controllers/web/Mentor/MentorLogoutController.js';
import MentorStudentsController from '../../controllers/web/Mentor/MentorStudentsController.js';

import { IRouter, RequestMethod } from '../../abstracts/Common.js';

const mentorController = new MentorController();
const mentorsController = new MentorsController();
const addMentorController  = new AddMentorController();
const updateMentorController = new UpdateMentorController();
const deleteMentorController = new DeleteMentorController();
const mentorLoginController = new MentorLoginController();
const mentorAccountController = new MentorAccountController();
const mentorLogoutController = new MentorLogoutController();
const mentorStudentsController =  new MentorStudentsController();


export default class MentorRouter extends AbstractRouter implements IRouter {
    constructor() {
        super();

        this.routes = [
            {
                route: '/mentor',
                controller: mentorController,
                requestMethod: RequestMethod.get
            },
            {
                route: '/mentors',
                controller: mentorsController,
                requestMethod: RequestMethod.get
            },
            {
                route: '/add-mentor',
                controller: addMentorController,
                requestMethod: RequestMethod.get
            },
            {
                route: '/add-mentor',
                controller: addMentorController,
                requestMethod: RequestMethod.post
            },
            {
                route: '/mentor-login',
                controller: mentorLoginController,
                requestMethod: RequestMethod.get
            },
            {
                route: '/mentor-students',
                controller: mentorStudentsController,
                requestMethod: RequestMethod.get
            },
            {
                route: '/mentor-login',
                controller: mentorLoginController,
                requestMethod: RequestMethod.post
            },
            {
                route: '/mentor-account',
                controller: mentorAccountController,
                requestMethod: RequestMethod.get
            },
            {
                route: '/mentor-account',
                controller: mentorAccountController,
                requestMethod: RequestMethod.post
            },
            {
                route: '/mentor-logout',
                controller: mentorLogoutController,
                requestMethod: RequestMethod.get
            },
            {
                route: '/update-mentor',
                controller: updateMentorController,
                requestMethod: RequestMethod.get
            },
            {
                route: '/update-mentor',
                controller: updateMentorController,
                requestMethod: RequestMethod.post
            },
            {
                route: '/delete-mentor',
                controller: deleteMentorController,
                requestMethod: RequestMethod.get
            },
            {
                route: '/delete-mentor',
                controller: deleteMentorController,
                requestMethod: RequestMethod.post
            }
        ];

        this.setRouter();
    }
}