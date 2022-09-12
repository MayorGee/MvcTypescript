import AbstractRouter from './AbstractRouter.js';

import TaskController from '../controllers/TaskController.js';
import TasksController from '../controllers/TasksController.js';

const taskController = new TaskController();
const tasksController = new TasksController();

export default class TaskRouter extends AbstractRouter {
    constructor() {
        super();

        this.routes = {
            '/task': taskController,
            '/tasks': tasksController
        };

        this.setRouter();
    }
}