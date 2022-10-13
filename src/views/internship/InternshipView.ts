import AbstractView from '../AbstractView.js';

import { Internship } from '../../abstracts/entities/Internship.js';

export default class InternshipView extends AbstractView {
    private internship: Internship | null = null;
    protected template = './internship/internship';

    public setInternship(internship: Internship): this {
        this.internship = internship;
        return this;
    }
    
    public getInternship(): Internship | null {
        return this.internship;
    }
}