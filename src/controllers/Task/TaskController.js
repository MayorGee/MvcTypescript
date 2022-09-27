import TaskView from '../../views/task/TaskView.js';
import TaskResource from '../../models/resource/TaskResource.js';
import AbstractController from '../AbstractController.js';

export default class TaskController extends AbstractController {
    async handleGet(req, res) {
        if(!this.isRoleMentor(req)) {
            return this.redirect({res: res, page: '/' });
        }
        
        const taskId = req.query.id;

        if (!this.isNumber(taskId)) {
            return this.handleIdError(taskId, res);
        }

        const taskResource = new TaskResource();
        const task = await taskResource.getTaskById(taskId);

        const taskView = new TaskView();
        taskView
            .setTask(task)
            .setTemplate('./task/task');

        this.renderPage(res, taskView);
    }
}
