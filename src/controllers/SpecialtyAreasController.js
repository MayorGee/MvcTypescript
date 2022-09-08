import path from 'path';

export default class SpecialtyAreasController {
    execute(req, res) {
        let pagePath = path.join(global.__dirname, 'views', 'specialty-areas.html');
        res.sendFile(pagePath);
    }
}