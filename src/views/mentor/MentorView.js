import AbstractView from '../AbstractView.js';

export default class MentorView extends AbstractView {
    mentor = null;

    setMentor(mentor) {
        this.mentor = mentor;
        return this;
    }

    getMentor() {
        return this.mentor;
    }
}