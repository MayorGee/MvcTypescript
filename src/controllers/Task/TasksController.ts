import AbstractController from '../AbstractController.js';

import TaskResource from '../../models/resource/TaskResource.js';
import TaskConverter from '../../converters/TaskConverter.js';
import TasksView from '../../views/task/TasksView.js';

import { IController } from '../../abstracts/Common.js';
import { DbTask, ITaskResource } from '../../abstracts/entities/Task.js';
import { NextFunction, Request, Response } from 'express';

export default class TasksController extends AbstractController implements IController {
    protected async handleGet(req: Request, res: Response, next: NextFunction) {    
        if(!this.isRoleMentor(req)) {
            return this.redirectToHome(res);
        }
           
        const taskResource: ITaskResource = new TaskResource();
        const tasks: DbTask[] = await taskResource.getTasks();    

        const tasksView = new TasksView(); 
        tasksView
            .setTasks(
                TaskConverter.convertDbTasks(tasks)
            )
            .setTemplate('./task/tasks');

        this.renderPage(req, res, tasksView);
    }
}