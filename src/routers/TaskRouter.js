import AbstractRouter from './AbstractRouter.js';

import TaskController from '../controllers/Task/TaskController.js';
import TasksController from '../controllers/Task/TasksController.js';

const taskController = new TaskController();
const tasksController = new TasksController();

export default class TaskRouter extends AbstractRouter {
    constructor() {
        super();

        this.routes = [
            {
                path: '/task',
                controller: taskController,
                method: 'GET'
            },
            {
                path: '/tasks',
                controller: tasksController,
                method: 'GET'
            },
            {
                path: '/tasks',
                controller: tasksController,
                method: 'POST'
            }
        ];

        this.setRouter();
    }
}