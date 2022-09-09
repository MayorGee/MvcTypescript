import path from 'path';

export default class InternshipsController {
    execute(req, res) {
        const pagePath = path.join(global.__dirname, 'views', 'internships.html');
        res.sendFile(pagePath);
    }
}