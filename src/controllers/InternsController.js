import path from 'path';

export default class InternsController {
    execute(req, res) {
        let pagePath = path.join(global.__dirname, 'views', 'interns.html');
        res.sendFile(pagePath);
    }
}