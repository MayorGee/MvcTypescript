import express from 'express';

import TaskController from '../controllers/TaskController.js';
import TasksController from '../controllers/TasksController.js';

const taskController = new TaskController();
const tasksController = new TasksController();

export default class TaskRouter {
    constructor() {
        this.router = express.Router();
    }

    setRoutes() {
        this.router.get('/task', taskController.execute.bind(taskController));
        this.router.get('/tasks', tasksController.execute.bind(tasksController));
    }

    getRoutes() {
        this.setRoutes();
        
        return this.router;
    }
}