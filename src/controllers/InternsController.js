import InternsView from '../views/InternsView.js';

export default class InternsController {
    execute(req, res) {
        const internsView = new InternsView();

        const internTemplate = internsView.getTemplate();
        
        res.render(internTemplate, { 'this': internsView});
    }
}