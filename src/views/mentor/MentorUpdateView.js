import AbstractView from '../AbstractView.js';

export default class MentorUpdateView extends AbstractView {
    mentor = null;

    constructor() {
        super();
        
        this.template = './mentor/mentor-update';
    }

    setMentor(mentor) {
        this.mentor = mentor;
    }

    getMentor() {
        return this.mentor;
    }
}