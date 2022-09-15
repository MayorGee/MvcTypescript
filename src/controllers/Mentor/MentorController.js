export default class MentorController {
    text = 'This is controller for a mentor';

    execute(req, res) {
        res.send(`Hello, ${this.text}`);
    }
}