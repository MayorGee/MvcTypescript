import TasksView from '../views/TasksView.js';

export default class TasksController {
    execute(req, res) {
        const tasksView = new TasksView();

        res.render(tasksView.getTemplate(), { 'this': tasksView});
    }
}