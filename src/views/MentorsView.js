import AbstractView from './AbstractView.js';

export default class MentorsView extends AbstractView {
    constructor() {
        super();

        this.template = 'mentors';
        this.mentors = [];
    }

    getMentors() {
        return this.mentors;
    }

    setMentors(mentors) {
        this.mentors = mentors;
    }
}