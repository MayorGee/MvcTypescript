import MentorsView from '../views/MentorsView.js';

export default class MentorsController {
    execute(req, res) {
        const mentorsView = new MentorsView();
        
        res.render(mentorsView.getTemplate(), { 'this': mentorsView});
    }
}