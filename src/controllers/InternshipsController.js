import path from 'path';

export default class InternshipsController {
    execute(req, res) {
        let pagePath = path.join(global.__dirname, 'views', 'internships.html');
        res.sendFile(pagePath);
    }
}