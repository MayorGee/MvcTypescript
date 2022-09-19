import AbstractView from '../AbstractView.js';

export default class UpdateMentorView extends AbstractView {
    mentor = null;

    constructor() {
        super();
        
        this.template = './mentor/update-mentor';
    }

    setMentor(mentor) {
        this.mentor = mentor;
    }

    getMentor() {
        return this.mentor;
    }
}