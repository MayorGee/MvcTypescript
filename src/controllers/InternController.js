export default class InternController {
    text = 'This is controller for an intern';

    execute(req, res) {
        res.send(`Hello, ${this.text}!`);
    }
}
