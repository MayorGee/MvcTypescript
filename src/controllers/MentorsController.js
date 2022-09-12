import MentorsView from '../views/MentorsView.js';

export default class MentorsController {
    execute(req, res) {
        const mentorsView = new MentorsView();

        const mentorTemplate = mentorsView.getTemplate();
        
        res.render(mentorTemplate, { 'this': mentorsView});
    }
}