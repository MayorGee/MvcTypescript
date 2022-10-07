import AbstractView from '../AbstractView.js';

import { Internship } from '../../abstracts/entities/Internship.js';

export default class InternshipsView extends AbstractView {
    internships: Internship[]  = [];
    template: string = './internship/internships';
    
    getInternships(): Internship[]  {
        return this.internships;
    }

    setInternships(internships: Internship[]) {
        this.internships = internships;
        return this;
    }
}