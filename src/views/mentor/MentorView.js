import AbstractView from '../AbstractView.js';

export default class MentorView extends AbstractView {
    mentor = null;
    template = null;

    setMentor(mentor) {
        this.mentor = mentor;
    }

    getMentor() {
        return this.mentor;
    }

    setTemplate(template) {
        this.template = template;
    }
}