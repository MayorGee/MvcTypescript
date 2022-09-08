import path from 'path';

export default class MentorsController {
    execute(req, res) {
        let pagePath = path.join(global.__dirname, 'views', 'mentors.html');
        res.sendFile(pagePath);
    }
}