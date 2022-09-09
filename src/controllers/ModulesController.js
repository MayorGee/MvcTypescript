import path from 'path';

export default class ModulesController {
    execute(req, res) {
        const pagePath = path.join(global.__dirname, 'views', 'modules.html');
        res.sendFile(pagePath);
    }
}