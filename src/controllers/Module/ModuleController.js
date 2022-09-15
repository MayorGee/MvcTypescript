export default class ModuleController {
    text = 'This is controller for a module';

    execute(req, res) {
        res.send(`Hello, ${this.text}`);
    }
}