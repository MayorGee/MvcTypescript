export default class SpecialtyAreaController {
    text = 'This is controller for a speacialty area';

    execute(req, res) {
        res.send(`Hello, ${this.text}`);
    }
}