import TaskView from '../../views/task/TaskView.js';
import TaskResource from '../../models/resource/TaskResource.js';

export default class TaskController {
    async execute(req, res) {
        const taskView = new TaskView();
        const taskResource = new TaskResource();
        const id = req.query.id;

        if (!id) {
            res.redirect('/tasks')

            return;
        }

        const taskRes = await taskResource.getTaskById(id);
        const task = taskRes[0];

        taskView.setTask(task);

        res.send(`
            Task Id: ${task.Id} <br/>
            Task Description: ${task.Description} <br/>
        `);
    }
}
