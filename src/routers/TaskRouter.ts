import AbstractRouter from './AbstractRouter.js';

import TaskController from '../controllers/Task/TaskController.js';
import TasksController from '../controllers/Task/TasksController.js';

import { RequestMethod } from '../abstracts/Common.js';

const taskController = new TaskController();
const tasksController = new TasksController();

export default class TaskRouter extends AbstractRouter {
    constructor() {
        super();

        this.routes = [
            {
                route: '/task',
                controller: taskController,
                requestMethod: RequestMethod.get
            },
            {
                route: '/tasks',
                controller: tasksController,
                requestMethod: RequestMethod.get
            },
            {
                route: '/tasks',
                controller: tasksController,
                requestMethod: RequestMethod.post
            }
        ];

        this.setRouter();
    }
}