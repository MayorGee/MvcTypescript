import AbstractView from "../AbstractView.js";

export default class MentorView extends AbstractView {
    mentor = null;
    
    constructor() {
        super();

        this.template = './mentor/mentor';
    }

    setMentor(mentor) {
        this.mentor = mentor;
    }
    
    getMentor() {
        return this.mentor;
    }
}