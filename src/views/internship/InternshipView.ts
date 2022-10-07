import AbstractView from '../AbstractView.js';

import { Internship } from '../../abstracts/entities/Internship.js';

export default class InternshipView extends AbstractView {
    internship: Internship | null = null;
    template: string = './internship/internship';

    setInternship(internship: Internship) {
        this.internship = internship;
        return this;
    }
    
    getInternship(): Internship | null {
        return this.internship;
    }
}