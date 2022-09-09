import path from 'path';

export default class MentorsController {
    execute(req, res) {
        const pagePath = path.join(global.__dirname, 'views', 'mentors.html');
        res.sendFile(pagePath);
    }
}