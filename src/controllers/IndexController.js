export default class IndexController {
    execute(req, res) {
        res.sendFile(`${__dirname}/views/index.html`);
    }
}