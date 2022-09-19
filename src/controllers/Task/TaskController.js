import TaskView from '../../views/task/TaskView.js';
import TaskResource from '../../models/resource/TaskResource.js';
import AbstractController from '../AbstractController.js';

export default class TaskController extends AbstractController{
    async execute(req, res) {
        const taskView = new TaskView();
        const taskResource = new TaskResource();
        const taskId = req.query.id;

        if (this.isIdInvalid(taskId)) {
            return this.handleIdError(taskId, res);
        }

        const task = await taskResource.getTaskById(taskId);

        taskView.setTask(task);
        taskView.setTemplate('task');

        this.renderPage(res, taskView);
    }
}
