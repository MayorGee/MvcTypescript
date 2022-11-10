import WebController from '../WebController.js';
import { IController } from '../../../abstracts/Common.js';

import TaskResource from '../../../models/resource/TaskResource.js';
import TaskConverter from '../../../converters/TaskConverter.js';
import TaskView from '../../../views/task/TaskView.js';
import { DbTask, ITaskResource } from '../../../abstracts/entities/Task.js';

import { NextFunction, Request, Response } from 'express';

export default class TaskController extends WebController implements IController {
    protected async handleGet(req: Request, res: Response, next: NextFunction) {
        if(!this.isRoleMentor(req)) {
            return this.redirectToHome(res);
        }
        
        const taskId = req.query.id;

        if (!this.isNumber(taskId)) {
            return this.handleIdError(taskId, res);
        }

        const taskResource: ITaskResource = new TaskResource();
        const task: DbTask = await taskResource.getTaskById(taskId);

        const taskView = new TaskView();
        taskView
            .setTask(
                TaskConverter.convertDbTask(task)
            )
            .setTemplate('./task/task');

        this.renderPage(req, res, taskView);
    }
}
