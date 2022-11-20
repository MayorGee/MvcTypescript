import WebController from '../WebController.js';
import { IController } from '../../../abstracts/Contract.js';

import TaskService from '../../../models/service/TaskService.js';
import TaskView from '../../../views/task/TaskView.js';
import { Task, ITaskService } from '../../../abstracts/entities/Task.js';

import { NextFunction, Request, Response } from 'express';

export default class TaskController extends WebController implements IController {
    protected async handleGet(req: Request, res: Response, next: NextFunction) {
        if(!this.isRoleMentor(req)) {
            return this.redirectToHome(res);
        }
        
        const taskId = this.handleId(req.query.id);

        if (!taskId) {
            return this.handleIdError(taskId, res);
        }

        const taskService: ITaskService = new TaskService();
        const task: Task = await taskService.getTaskById(taskId);

        const taskView = new TaskView();
        taskView
            .setTask(task)
            .setTemplate('./task/task');

        this.renderPage(req, res, taskView);
    }
}