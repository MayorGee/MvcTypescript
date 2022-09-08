export default class TasksController {

    execute(req, res) {
        res.sendFile(`${__dirname}/views/tasks.html`);
    }
}