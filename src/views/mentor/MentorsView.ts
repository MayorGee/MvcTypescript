import AbstractView from '../AbstractView.js';

import { Mentor } from '../../abstracts/entities/Mentor.js';

export default class MentorsView extends AbstractView {
    mentors: Mentor[] = [];
    template: string = './mentor/mentors';

    getMentors(): Mentor[] {
        return this.mentors;
    }

    setMentors(mentors: Mentor[]) {
        this.mentors = mentors;
        return this;
    }
}