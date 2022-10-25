import AbstractRouter from '../AbstractRouter.js';

import TaskController from '../../controllers/web/Task/TaskController.js';
import TasksController from '../../controllers/web/Task/TasksController.js';

import { IRouter, RequestMethod } from '../../abstracts/Common.js';

const taskController = new TaskController();
const tasksController = new TasksController();

export default class TaskRouter extends AbstractRouter implements IRouter {
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