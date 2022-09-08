export default class InternsController {

    execute(req, res) {
        res.sendFile(`${__dirname}/views/interns.html`);
    }
}