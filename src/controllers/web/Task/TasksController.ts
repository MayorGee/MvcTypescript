import WebController from '../WebController.js';
import { IController } from '../../../abstracts/Contract.js';

import TaskService from '../../../models/service/TaskService.js';
import TasksView from '../../../views/task/TasksView.js';
import { Task, ITaskService } from '../../../abstracts/entities/Task.js';

import { NextFunction, Request, Response } from 'express';

export default class TasksController extends WebController implements IController {
    protected async handleGet(req: Request, res: Response, next: NextFunction) {    
        if(!this.isRoleMentor(req)) {
            return this.redirectToHome(res);
        }
           
        const taskService: ITaskService = new TaskService();
        const tasks: Task[] = await taskService.getTasks();    

        const tasksView = new TasksView(); 
        tasksView
            .setTasks(tasks)
            .setTemplate('./task/tasks');

        this.renderPage(req, res, tasksView);
    }
}