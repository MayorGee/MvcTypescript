import InternsView from '../views/InternsView.js';

export default class InternsController {
    execute(req, res) {
        const internsView = new InternsView();

        res.render(internsView.getTemplate(), { 'this': internsView});
    }
}