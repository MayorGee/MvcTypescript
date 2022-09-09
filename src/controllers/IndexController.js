import path from 'path';

export default class IndexController {
    execute(req, res) {
        const pagePath = path.join(global.__dirname, 'views', 'index.html');
        res.sendFile(pagePath);
    }
}