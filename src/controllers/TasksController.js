import path from 'path';

export default class TasksController {
    execute(req, res) {
        let pagePath = path.join(global.__dirname, 'views', 'tasks.html');
        res.sendFile(pagePath);
    }
}