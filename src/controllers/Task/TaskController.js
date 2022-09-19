import TaskView from '../../views/task/TaskView.js';
import TaskResource from '../../models/resource/TaskResource.js';
import AbstractController from '../AbstractController.js';

export default class TaskController extends AbstractController{
    async execute(req, res) {
        const taskView = new TaskView();
        const taskResource = new TaskResource();
        const id = req.query.id;

        const idIsValid = this.validateId(id, res);

        if(!idIsValid) {
            return;
        }

        const task = await taskResource.getTaskById(id);

        taskView.setTask(task);

        res.send(`
            Task Id: ${task.Id} <br/>
            Task Description: ${task.Description} <br/>
        `);
    }
}
