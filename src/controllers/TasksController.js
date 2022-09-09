import path from 'path';

export default class TasksController {
    execute(req, res) {
        const pagePath = path.join(global.__dirname, 'views', 'tasks.html');
        res.sendFile(pagePath);
    }
}