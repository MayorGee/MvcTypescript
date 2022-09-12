export default class InternshipController{
    text = 'This is controller for an Internship Program';

    execute(req, res) {
        res.send(`Hello, ${this.text}!`);
    }
}