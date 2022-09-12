import TasksView from "../views/TasksView.js";

export default class TasksController {
    execute(req, res) {
        const tasksView = new TasksView();

        const taskTemplate = tasksView.getTemplate();
        
        res.render(taskTemplate, { 'this': tasksView});
    }
}