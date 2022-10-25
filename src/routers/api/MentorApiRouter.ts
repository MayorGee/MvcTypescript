import AbstractRouter from '../AbstractRouter.js';

import MentorApiController from '../../controllers/api/MentorApiController.js';
import MentorsApiController from '../../controllers/api/MentorsApiController.js';

import { IRouter, RequestMethod } from '../../abstracts/Common.js';

const mentorApiController = new MentorApiController();
const mentorsApiController = new MentorsApiController();

export default class MentorApiRouter extends AbstractRouter implements IRouter {
    constructor() {
        super();

        this.routes = [
            {
                route: '/api/mentor/:id',
                controller: mentorApiController,
                requestMethod: RequestMethod.get
            },
            {
                route: '/api/mentors',
                controller: mentorsApiController,
                requestMethod: RequestMethod.get
            },
            {
                route: '/api/mentors',
                controller: mentorsApiController,
                requestMethod: RequestMethod.post
            },
            {
                route: '/api/mentor/:id',
                controller: mentorApiController,
                requestMethod: RequestMethod.put
            },
            {
                route: '/api/mentor/:id',
                controller: mentorApiController,
                requestMethod: RequestMethod.delete
            },
        ];

        this.setRouter();
    }
}