import AbstractController from '../AbstractController.js';

import TaskResource from '../../models/resource/TaskResource.js';
import TaskConverter from '../../converters/TaskConverter.js';
import TaskView from '../../views/task/TaskView.js';

import { IController } from '../../abstracts/Common.js';
import { DbTask } from '../../abstracts/entities/Task.js';

export default class TaskController extends AbstractController implements IController {
    async handleGet(req: any, res: any, next: any) {
        if(!this.isRoleMentor(req)) {
            return this.redirectToHome(res);
        }
        
        const taskId: number = req.query.id;

        if (!this.isNumber(taskId)) {
            return this.handleIdError(taskId, res);
        }

        const taskResource = new TaskResource();
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
