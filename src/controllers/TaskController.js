export default class TaskController {
    text = "This is controller for a task";

    execute(req, res) {
        res.send(`Hello, ${this.text}`);
    }
}