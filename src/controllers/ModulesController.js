export default class ModulesController {
    execute(req, res) {
        res.sendFile(`${__dirname}/views/modules.html`);
    }
}