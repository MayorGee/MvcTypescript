import path from 'path';

export default class SpecialtyAreasController {
    execute(req, res) {
        const pagePath = path.join(global.__dirname, 'views', 'specialty-areas.html');
        res.sendFile(pagePath);
    }
}